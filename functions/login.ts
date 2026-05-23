interface Env {
  PASSWORD: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json();
    const password = body.password;

    if (password === env.PASSWORD) {
      // Correct password - set cookie and return success
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": "auth=valid; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000" // 30 days
        }
      });
    } else {
      // Wrong password
      return new Response(JSON.stringify({ success: false, message: "Incorrect password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};