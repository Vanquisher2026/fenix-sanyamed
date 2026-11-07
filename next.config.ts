import type { NextConfig } from "next";

// ============================================================================
// Конфигурация для Cloudflare Pages (Next.js 16 static export)
// - output: 'export' → Cloudflare Pages отдаёт готовую статику из out/
// - trailingSlash: true → Next пишет blog/index.html вместо blog.html.
//   Без этого флага Cloudflare Pages не находит каталог и отдаёт 308
//   (trailing slash → без слеша), тогда как canonical / sitemap.xml /
//   hreflang во всех страницах используют URL со слешем.
//   Проверено 2026-10-26: 47 URL из sitemap.xml давали 200 напрямую.
// - images.unoptimized — отключает next/image sharp (Cloudflare build env
//   не всегда поддерживает sharp)
// ============================================================================
const nextConfig: NextConfig = {
  output: "export", // 静态导出 → Cloudflare Pages 直接托管静态文件
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;