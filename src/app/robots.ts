import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // ⚠️ Яндекс — отдельное правило для подтверждения, что он индексирует всё
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://fenix-sanyamed.com/sitemap.xml",
    host: "https://fenix-sanyamed.com",
  };
}