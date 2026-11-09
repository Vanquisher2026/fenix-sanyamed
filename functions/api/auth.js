// Cloudflare Pages Functions — Static CMS 的 GitHub OAuth 网关
// GET /api/auth?provider=github        → 重定向 GitHub 授权页
// GET /api/auth/callback?code=xxx      → 换 token → 回 CMS（token 放 URL fragment 回传）
//
// Client ID 公开无妨（OAuth 标准做法）；Secret 走 env（Pages Settings 绑定）

const GH_AUTHORIZE = "https://github.com/login/oauth/authorize";
const GH_TOKEN = "https://github.com/login/oauth/access_token";
const CLIENT_ID = "Ov23lihbRa5f2st5UI1o"; // OAuth App: fenix-cms

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
      client_id: CLIENT_ID,
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
    const secret = env.GH_CLIENT_SECRET || env.VAR_GH_CLIENT_SECRET || "";
    if (!secret) return json({ error: "GH_CLIENT_SECRET not configured" }, 500);
    const r = await fetch(GH_TOKEN, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: secret,
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
