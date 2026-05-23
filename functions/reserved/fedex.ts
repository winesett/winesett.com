export const onRequest = async (context: any) => {
  const { request, env } = context;

  const cookie = request.headers.get("Cookie") || "";
  const isAuthenticated = cookie.includes("auth=valid");

  const templatePath = isAuthenticated
    ? "/_internal/full/fedex.html"
    : "/_internal/blurred/fedex.html";

  return env.ASSETS.fetch(templatePath);
};