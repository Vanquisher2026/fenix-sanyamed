import type { NextConfig } from "next";

// ============================================================================
// Конфигурация для Cloudflare Pages (Next.js 16 + @cloudflare/next-on-pages)
// - БЕЗ output: 'export' — Cloudflare использует @cloudflare/next-on-pages
//   адаптер для конвертации Next.js → Cloudflare Workers/Pages
// - images.unoptimized — отключает next/image sharp (Cloudflare build env
//   не всегда поддерживает sharp)
// ============================================================================
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;