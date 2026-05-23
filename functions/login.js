/**
 * POST /login
 * Accepts { password: "..." } and sets signed auth cookie if correct.
 * Used by the password modals on protected pages.
 */

import { createToken, createAuthCookie } from './lib/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const submitted = (body.password || '').trim();
  const correct = (env.PASSWORD || '').trim();

  if (!correct) {
    return new Response(JSON.stringify({ success: false, error: 'Server misconfiguration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (submitted !== correct) {
    return new Response(JSON.stringify({ success: false, error: 'Incorrect password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Password correct → create signed token and set cookie
  const token = await createToken(correct);
  const cookie = await createAuthCookie(token, request);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookie
    }
  });
}
