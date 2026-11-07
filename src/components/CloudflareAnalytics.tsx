"use client";

import Script from "next/script";

/**
 * Cloudflare Web Analytics beacon.
 *
 * ⚠️ Для активации нужно:
 *  1. Открыть https://dash.cloudflare.com → выбрать Account
 *  2. Web Analytics → "Add a site" → ввести fenix-sanyamed.com
 *  3. Скопировать выданный "site token" (32 hex chars)
 *  4. Добавить в D:\poju\taijiweb\cdp\cf.env:
 *       export CF_WEB_ANALYTICS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *  5. Сказать мне — я пересоберу .env.local
 *
 * Без токена компонент рендерит no-op, ничего не ломает.
 *
 * Cloudflare Web Analytics — бесплатный, без cookie, GDPR-friendly,
 * 不会 замедлять сайт (async + 1 KB).
 */
const TOKEN = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN || "";

export default function CloudflareAnalytics() {
  if (!TOKEN) {
    // Не загружаем beacon без токена (404 на сервере = плохой UX)
    return null;
  }
  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={`{"token": "${TOKEN}"}`}
      strategy="afterInteractive"
    />
  );
}
