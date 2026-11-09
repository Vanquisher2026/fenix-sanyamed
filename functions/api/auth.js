// Cloudflare Pages Functions — Static CMS 的 GitHub OAuth 网关
// GET /api/auth?provider=github        → 重定向 GitHub 授权页
// GET /api/auth/callback?code=xxx      → 换 token → 回 CMS（静态无服务端存储版：token 放 URL fragment 回传）
//
// 环境变量（Pages Settings → Variables）：
//   GH_CLIENT_ID, GH_CLIENT_SECRET, CMS_SECRET (可选)

const GH_AUTHORIZE = "https://github.com/login/oauth/authorize";
const GH_TOKEN = "https://github.com/login/oauth/access_token";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

export async function onRequestGet(ctx) {
  const { request, env } = ctx;
  const url = new URL(request.url);
  const path = url.pathname;

  // /api/auth → 起始
  if (path === "/api/auth") {
    const redirectUri = `${url.origin}/api/auth/callback`;
    const state = crypto.randomUUID();
    const p = new URLSearchParams({
      client_id: env.GH_CLIENT_ID || "",
      redirect_uri: redirectUri,
      scope: "repo user",
      state,
    });
    return Response.redirect(`${GH_AUTHORIZE}?${p}`, 302);
  }

  // /api/auth/callback → 换 token
  if (path === "/api/auth/callback") {
    const code = url.searchParams.get("code");
    if (!code) return json({ error: "no code" }, 400);
    const redirectUri = `${url.origin}/api/auth/callback`;
    const r = await fetch(GH_TOKEN, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: env.GH_CLIENT_ID,
        client_secret: env.GH_CLIENT_SECRET,
        code,
        redirect_uri: redirectUri,
      }),
    });
    const d = await r.json();
    if (d.access_token) {
      // token 放 fragment 回传给 CMS（不进服务器日志）
      return Response.redirect(`${url.origin}/admin/#access_token=${d.access_token}`, 302);
    }
    return json({ error: "token exchange failed", detail: d }, 400);
  }

  return json({ error: "not found" }, 404);
}
