/**
 * Cloudflare Pages Function for /reserved/microsoft
 * Serves teaser (with password modal) or full case study based on signed cookie.
 */

import { isAuthenticated } from '../lib/auth.js';
import { teaserHTML, fullHTML } from '../content/microsoft.js';

export async function onRequest(context) {
  const { request, env } = context;

  const authenticated = await isAuthenticated(request, env);

  const html = authenticated ? fullHTML : teaserHTML;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': authenticated 
        ? 'private, no-cache, no-store, must-revalidate' 
        : 'public, max-age=300'
    }
  });
}
