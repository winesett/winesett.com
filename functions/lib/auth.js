/**
 * Shared authentication helpers for Cloudflare Pages Functions
 * Uses HMAC-SHA256 signed stateless tokens stored in httpOnly cookies.
 * Secret = PASSWORD environment variable (used for both password check and signing).
 */

const COOKIE_NAME = 'winesett_auth';
const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function base64UrlEncode(str) {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function base64UrlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return atob(str);
}

export async function createToken(secret) {
  const now = Date.now();
  const payloadObj = {
    ok: true,
    iat: now,
    exp: now + TOKEN_MAX_AGE_MS
  };
  const payload = JSON.stringify(payloadObj);
  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(payload)
  );

  const sigB64 = base64UrlEncode(String.fromCharCode(...new Uint8Array(signature)));
  const payloadB64 = base64UrlEncode(payload);

  return `${payloadB64}.${sigB64}`;
}

export async function verifyToken(token, secret) {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [payloadB64, sigB64] = parts;

  try {
    const payloadJson = base64UrlDecode(payloadB64);
    const data = JSON.parse(payloadJson);

    if (!data.ok || data.exp < Date.now()) {
      return false;
    }

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigBytes = Uint8Array.from(
      base64UrlDecode(sigB64),
      (c) => c.charCodeAt(0)
    );

    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBytes,
      encoder.encode(payloadJson)
    );

    return valid === true;
  } catch (err) {
    return false;
  }
}

export function getAuthCookie(request) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  return match ? match[1].trim() : null;
}

export async function isAuthenticated(request, env) {
  const token = getAuthCookie(request);
  if (!token) return false;
  return await verifyToken(token, env.PASSWORD);
}

export async function createAuthCookie(token, request) {
  const url = new URL(request.url);
  const isHttps = url.protocol === 'https:';
  const secureFlag = isHttps ? '; Secure' : '';
  
  return `${COOKIE_NAME}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${Math.floor(TOKEN_MAX_AGE_MS / 1000)}${secureFlag}`;
}
