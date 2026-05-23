interface Env {
  PASSWORD: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next, env } = context;

  // Allow login page through
  if (new URL(request.url).pathname === '/login') {
    return next();
  }

  // Check for auth cookie
  const cookie = request.headers.get('Cookie') || '';
  if (cookie.includes('auth=valid')) {
    return next();
  }

  // No valid cookie → continue to page (we'll show modal via JS)
  return next();
};