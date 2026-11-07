// apex → www 301 для Cloudflare Pages Functions.
// Зачем: apex отдавал 200 с тем же контентом, что и www (canonical/robots Host
// указывают на www) → Яндекс видел дубли и не индексировал страницы.
// Файл _redirects не сработал для apex-кастомного домена, поэтому делаем
// редирект на уровне Functions (срабатывает раньше static-assets).
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const host = request.headers.get("host") || url.host;

  if (host === "fenix-sanyamed.com") {
    const target = new URL(url.pathname + url.search, "https://www.fenix-sanyamed.com");
    return Response.redirect(target.toString(), 301);
  }

  // http → https (один хоп, apex/www → www сразу на https)
  if (url.protocol === "http:") {
    const target = new URL(url.pathname + url.search, "https://www.fenix-sanyamed.com");
    return Response.redirect(target.toString(), 301);
  }

  return context.next();
}
