export const onRequest = async (context: any) => {
  const { request, env } = context;

  const cookie = request.headers.get("Cookie") || "";
  const isAuthenticated = cookie.includes("auth=valid");

  const templatePath = isAuthenticated
    ? "/_internal/full/microsoft.html"
    : "/_internal/blurred/microsoft.html";

  return env.ASSETS.fetch(templatePath);
};