import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = false;

/**
 * RSS 2.0 feed для блога fenix-sanyamed.com
 *
 * Целевая аудитория — русскоязычные читатели на Inoreader / Feedly
 * и парсеры вроде RSS-Bridge, которые репостят в Telegram-каналы.
 */
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

const POSTS: Post[] = [
  {
    slug: "kak-doletet-iz-moskvy-do-sanya",
    title: "Как долететь из Москвы до Санья дешево: 5 лайфхаков",
    excerpt:
      "Прямые рейсы Москва — Санья, цены 2026, стыковки через Стамбул/Гуанчжоу, лучшее время для бронирования.",
    date: "2026-10-17",
    category: "travel",
  },
  {
    slug: "hainan-ili-udalyanchi-sravnenie",
    title: "Хайнань или Удалянчи: где лечиться русским",
    excerpt:
      "Сравнение курортов Китая: Хайнань, Удалянчи, Аньшань, тибетские санатории. Климат, виза, перелёт, профиль лечения.",
    date: "2026-10-17",
    category: "comparison",
  },
  {
    slug: "chto-takoe-tkm",
    title: "Традиционная китайская медицина: что это простыми словами",
    excerpt:
      "Основы ТКМ: философия Инь-Ян и У-Син, понятие Ци, меридианы, четыре метода диагностики, основные методы лечения. Где заканчиваются возможности метода — честно.",
    date: "2026-10-17",
    category: "tcm",
  },
  {
    slug: "visa-khainan-2026",
    title: "Виза в Китай для лечения: безвизовый режим Хайнань 2026",
    excerpt:
      "Гражданам России виза на Хайнань не нужна — безвизовый въезд до 30 дней. Документы, сроки, правила.",
    date: "2026-10-05",
    category: "visa",
  },
  {
    slug: "otzyvy-patsientov-tkm",
    title: "Отзывы пациентов о лечении в Китае ТКМ",
    excerpt: "Истории пациентов, проходивших курсы ТКМ на Хайнане.",
    date: "2026-10-05",
    category: "reviews",
  },
  {
    slug: "stoimost-igloukalyvaniya-sanya-2026",
    title: "Стоимость лечения иглоукалыванием в Санья в 2026 году",
    excerpt: "Цены на иглоукалывание, массаж Туйна и комплексные программы ТКМ в клинике fenix-sanyamed в Санья.",
    date: "2026-10-04",
    category: "pricing",
  },
  {
    slug: "kak-vybrat-tcm-kliniku-v-sanya",
    title: "Как выбрать клинику ТКМ в Санья: гид для русских гостей",
    excerpt: "Лицензия, врачи, процедуры, цены, безопасность — на что обратить внимание при выборе клиники.",
    date: "2026-09-06",
    category: "guide",
  },
  {
    slug: "5-prichin-vybrat-khainan-dlya-tkm",
    title: "5 причин выбрать Хайнань для лечения традиционной китайской медициной",
    excerpt: "Хайнань — тропический остров, идеальное место для ТКМ. 5000 лет традиции, мягкий климат.",
    date: "2026-09-06",
    category: "tcm",
  },
];

const SITE = "https://www.fenix-sanyamed.com";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function item(p: Post) {
  const url = `${SITE}/blog/${p.slug}/`;
  const pubDate = new Date(p.date).toUTCString();
  return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escape(p.category)}</category>
      <description>${escape(p.excerpt)}</description>
    </item>`;
}

export async function GET() {
  const latest = new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Санаторий ТАЙЦЗИ — лечение ТКМ на Хайнане</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Статьи о традиционной китайской медицине, лечении в Санья, программах и ценах для русскоязычных пациентов.</description>
    <language>ru-RU</language>
    <lastBuildDate>${latest}</lastBuildDate>
    <ttl>1440</ttl>
${POSTS.map(item).join("\n")}
  </channel>
</rss>`;
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
