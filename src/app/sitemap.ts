import type { MetadataRoute } from "next";
import { PROGRAMMY } from "@/data/programmy";
import { PROCEDURES } from "@/data/prices";
import { VRACHI } from "@/data/vrachi";
import { PROGRAMMY_EN } from "@/data/programmy.en";
import { PROCEDURES_EN } from "@/data/prices.en";
import { VRACHI_EN } from "@/data/vrachi.en";
import { BUKHTY } from "@/data/bukhty";
import { BOLEZNI } from "@/data/bolezni";

const SITE = "https://www.fenix-sanyamed.com";

// ============================================================================
// lastmod — НЕЛЬЗЯ ставить дату сборки.
//
// Раньше здесь стояло `new Date().toISOString()`, из-за чего при КАЖДОЙ сборке
// lastmod у всех 35 страниц становился сегодняшним числом. Google/Yandex видят,
// что поле не отражает реальные изменения, и перестают доверять sitemap —
//抓取优先级下降, страницы обновляются реже.
//
// Правило: здесь пишется дата ПОСЛЕДНЕГО содержательного изменения контента
// этой группы страниц. Меняешь контент — обнови дату здесь же.
// Если не поменял — не трогай, иначе сигнал снова станет недостоверным.
// ============================================================================
const UPDATED = {
  home: "2026-11-07",
  prices: "2026-10-26",
  programmyIndex: "2026-10-26",
  programmy: "2026-10-26",
  terapii: "2026-11-07",
  vrachi: "2026-11-07",
  blog: "2026-10-26",
  forRussians: "2026-10-26",
  geo: "2026-10-26",
  zh: "2026-10-26",
  en: "2026-10-26",
  about: "2026-10-05",
  contacts: "2026-10-05",
  enPages: "2026-10-31",
  brand: "2026-10-31",
  sanya: "2026-11-03",
  filialy: "2026-11-05",
  bolezni: "2026-11-09",
} as const;

// Блог — нет data-файла, slug'и берутся из структуры каталога src/app/blog/*
const BLOG_SLUGS = [
  "kak-vybrat-tcm-kliniku-v-sanya",
  "5-prichin-vybrat-khainan-dlya-tkm",
  "stoimost-igloukalyvaniya-sanya-2026",
  "visa-khainan-2026",
  "otzyvy-patsientov-tkm",
  "chto-takoe-tkm",
  "hainan-ili-udalyanchi-sravnenie",
  "kak-doletet-iz-moskvy-do-sanya",
];

// Хабы языковых версий (реально существуют только эти 3 страницы)
const LANG_HUBS = [`${SITE}/`, `${SITE}/zh/`, `${SITE}/en/`];

function langAlternates() {
  return {
    alternates: {
      languages: {
        ru: `${SITE}/`,
        "x-default": `${SITE}/`,
        "zh-Hans": `${SITE}/zh/`,
        en: `${SITE}/en/`,
      },
    },
  };
}

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // --- Статические ключевые страницы ---
  // В sitemap попадают только HTML-страницы. geo.json и rss.xml — не страницы,
  // они раздаются как статические файлы и в sitemap не указываются (Google
  // помечает такие URL как «недействительные»). При необходимости их можно
  // добавить отдельной записью в GSC / Яндекс.Вебмастер с типом «Страница».
  const core: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: UPDATED.home, changeFrequency: "weekly", priority: 1.0, ...langAlternates() },
    { url: `${SITE}/o-sanatorii/`, lastModified: UPDATED.about, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/kontakty/`, lastModified: UPDATED.contacts, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/czeny/`, lastModified: UPDATED.prices, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/terapii/`, lastModified: UPDATED.terapii, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/vrachi/`, lastModified: UPDATED.vrachi, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/programmy/`, lastModified: UPDATED.programmyIndex, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/blog/`, lastModified: UPDATED.blog, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/dlya-russkikh/`, lastModified: UPDATED.forRussians, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/geo/`, lastModified: UPDATED.geo, changeFrequency: "monthly", priority: 0.3 },
    // Брендовые посадочные — для захвата брендовых запросов «санаторий тайцзи» и «санаторий хайнань»
    { url: `${SITE}/sanatorium-tajczi/`, lastModified: UPDATED.brand, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/sanatoriy-khaynanya/`, lastModified: UPDATED.brand, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/spa-i-krasota/`, lastModified: UPDATED.brand, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/putevka/`, lastModified: UPDATED.brand, changeFrequency: "monthly", priority: 0.7 },
    // P1 (2026-11-07): Санья-посадочная + филиалы + заболевания
    { url: `${SITE}/sanya/`, lastModified: UPDATED.sanya, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/filialy/`, lastModified: UPDATED.filialy, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/bolezni/`, lastModified: UPDATED.bolezni, changeFrequency: "monthly", priority: 0.9 },
    // Языковые посадочные
    { url: `${SITE}/zh/`, lastModified: UPDATED.zh, changeFrequency: "monthly", priority: 0.7, ...langAlternates() },
    { url: `${SITE}/en/`, lastModified: UPDATED.en, changeFrequency: "monthly", priority: 0.6, ...langAlternates() },
  ];

  // --- Программы ---
  const programmy: MetadataRoute.Sitemap = PROGRAMMY.map((p) => ({
    url: `${SITE}/programmy/${p.slug}/`,
    lastModified: UPDATED.programmy,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // --- Процедуры ТКМ ---
  const terapii: MetadataRoute.Sitemap = PROCEDURES.map((p) => ({
    url: `${SITE}/terapii/${p.slug}/`,
    lastModified: UPDATED.terapii,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // --- Врачи ---
  const vrachi: MetadataRoute.Sitemap = VRACHI.map((v) => ({
    url: `${SITE}/vrachi/${v.slug}/`,
    lastModified: UPDATED.vrachi,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // --- Блог ---
  const blog: MetadataRoute.Sitemap = BLOG_SLUGS.map((s) => ({
    url: `${SITE}/blog/${s}/`,
    lastModified: UPDATED.blog,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // --- Филиалы (4 бухты) — P1 2026-11-07 ---
  const filialy: MetadataRoute.Sitemap = BUKHTY.map((b) => ({
    url: `${SITE}/filialy/${b.slug}/`,
    lastModified: UPDATED.filialy,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // --- Заболевания (10) — P1 2026-11-07, slug=词序铁律 ---
  const bolezni: MetadataRoute.Sitemap = BOLEZNI.map((b) => ({
    url: `${SITE}/bolezni/${b.slug}/`,
    lastModified: UPDATED.bolezni,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ======================================================================
  // English version — added 2026-10-31.
  // Each English URL points at its Russian counterpart through
  // alternates.languages, so search engines treat them as translations of
  // one page rather than as duplicate content.
  // ======================================================================
  const enCore: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/en/o-sanatorii/`,
      lastModified: UPDATED.enPages,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${SITE}/o-sanatorii/`,
          "x-default": `${SITE}/o-sanatorii/`,
          en: `${SITE}/en/o-sanatorii/`,
        },
      },
    },
    {
      url: `${SITE}/en/kontakty/`,
      lastModified: UPDATED.enPages,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${SITE}/kontakty/`,
          "x-default": `${SITE}/kontakty/`,
          en: `${SITE}/en/kontakty/`,
        },
      },
    },
    {
      url: `${SITE}/en/czeny/`,
      lastModified: UPDATED.enPages,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${SITE}/czeny/`,
          "x-default": `${SITE}/czeny/`,
          en: `${SITE}/en/czeny/`,
        },
      },
    },
    {
      url: `${SITE}/en/terapii/`,
      lastModified: UPDATED.enPages,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${SITE}/terapii/`,
          "x-default": `${SITE}/terapii/`,
          en: `${SITE}/en/terapii/`,
        },
      },
    },
    {
      url: `${SITE}/en/vrachi/`,
      lastModified: UPDATED.enPages,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${SITE}/vrachi/`,
          "x-default": `${SITE}/vrachi/`,
          en: `${SITE}/en/vrachi/`,
        },
      },
    },
    {
      url: `${SITE}/en/programmy/`,
      lastModified: UPDATED.enPages,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${SITE}/programmy/`,
          "x-default": `${SITE}/programmy/`,
          en: `${SITE}/en/programmy/`,
        },
      },
    },
    // English blog index — counterpart of the Russian /blog/ index page
    {
      url: `${SITE}/en/blog/`,
      lastModified: UPDATED.brand,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${SITE}/blog/`,
          "x-default": `${SITE}/blog/`,
          en: `${SITE}/en/blog/`,
        },
      },
    },
    // English GEO catalogue — machine-readable facts for AI search engines
    {
      url: `${SITE}/en/geo/`,
      lastModified: UPDATED.brand,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: {
        languages: {
          ru: `${SITE}/geo/`,
          "x-default": `${SITE}/geo/`,
          en: `${SITE}/en/geo/`,
        },
      },
    },
    // English brand landing pages — counterparts of the Russian ones
    {
      url: `${SITE}/en/sanatorium-tajczi/`,
      lastModified: UPDATED.brand,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${SITE}/sanatorium-tajczi/`,
          "x-default": `${SITE}/sanatorium-tajczi/`,
          en: `${SITE}/en/sanatorium-tajczi/`,
        },
      },
    },
    {
      url: `${SITE}/en/sanatoriy-khaynanya/`,
      lastModified: UPDATED.brand,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${SITE}/sanatoriy-khaynanya/`,
          "x-default": `${SITE}/sanatoriy-khaynanya/`,
          en: `${SITE}/en/sanatoriy-khaynanya/`,
        },
      },
    },
    {
      url: `${SITE}/en/spa-i-krasota/`,
      lastModified: UPDATED.brand,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${SITE}/spa-i-krasota/`,
          "x-default": `${SITE}/spa-i-krasota/`,
          en: `${SITE}/en/spa-i-krasota/`,
        },
      },
    },
    {
      url: `${SITE}/en/putevka/`,
      lastModified: UPDATED.brand,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${SITE}/putevka/`,
          "x-default": `${SITE}/putevka/`,
          en: `${SITE}/en/putevka/`,
        },
      },
    },
  ];

  const enProgrammy: MetadataRoute.Sitemap = PROGRAMMY_EN.map((p) => ({
    url: `${SITE}/en/programmy/${p.slug}/`,
    lastModified: UPDATED.enPages,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: {
      languages: {
        ru: `${SITE}/programmy/${p.slug}/`,
        "x-default": `${SITE}/programmy/${p.slug}/`,
        en: `${SITE}/en/programmy/${p.slug}/`,
      },
    },
  }));

  const enTerapii: MetadataRoute.Sitemap = PROCEDURES_EN.map((p) => ({
    url: `${SITE}/en/terapii/${p.slug}/`,
    lastModified: UPDATED.enPages,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        ru: `${SITE}/terapii/${p.slug}/`,
        "x-default": `${SITE}/terapii/${p.slug}/`,
        en: `${SITE}/en/terapii/${p.slug}/`,
      },
    },
  }));

  const enVrachi: MetadataRoute.Sitemap = VRACHI_EN.map((v) => ({
    url: `${SITE}/en/vrachi/${v.slug}/`,
    lastModified: UPDATED.enPages,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: {
      languages: {
        ru: `${SITE}/vrachi/${v.slug}/`,
        "x-default": `${SITE}/vrachi/${v.slug}/`,
        en: `${SITE}/en/vrachi/${v.slug}/`,
      },
    },
  }));

  // --- English blog ---
  // Each English post points at its Russian counterpart through
  // alternates.languages, so the two are treated as translations of one
  // article rather than as duplicate content.
  const enBlog: MetadataRoute.Sitemap = BLOG_SLUGS.map((s) => ({
    url: `${SITE}/en/blog/${s}/`,
    lastModified: UPDATED.brand,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: {
      languages: {
        ru: `${SITE}/blog/${s}/`,
        "x-default": `${SITE}/blog/${s}/`,
        en: `${SITE}/en/blog/${s}/`,
      },
    },
  }));

  return [
    ...core,
    ...programmy,
    ...terapii,
    ...vrachi,
    ...blog,
    ...filialy,
    ...bolezni,
    ...enCore,
    ...enProgrammy,
    ...enTerapii,
    ...enVrachi,
    ...enBlog,
  ];
}
