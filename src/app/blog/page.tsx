import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог о традиционной китайской медицине",
  description:
    "Полезные статьи о традиционной китайской медицине, лечении на Хайнане, программах и процедурах медицинского центра fenix-sanyamed.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/blog/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/blog/",
      "x-default": "https://www.fenix-sanyamed.com/blog/",
      en: "https://www.fenix-sanyamed.com/en/blog/",
    },
  },
};

const POSTS = [
  {
    slug: "kak-doletet-iz-moskvy-do-sanya",
    title: "Как долететь из Москвы до Санья дешево: 5 лайфхаков",
    excerpt:
      "Прямые рейсы Москва — Санья, цены 2026, стыковки через Стамбул/Гуанчжоу, лучшее время для бронирования.",
    date: "2026-10-17",
  },
  {
    slug: "hainan-ili-udalyanchi-sravnenie",
    title: "Хайнань или Удалянчи: где лечиться русским",
    excerpt:
      "Честное сравнение курортов Китая: Хайнань, Удалянчи, Аньшань, тибетские санатории. Климат, виза, перелёт, профиль лечения.",
    date: "2026-10-17",
  },
  {
    slug: "chto-takoe-tkm",
    title: "Традиционная китайская медицина: что это простыми словами",
    excerpt:
      "Основы ТКМ: Инь-Ян и У-Син, понятие Ци, меридианы, четыре метода диагностики, методы лечения и границы метода.",
    date: "2026-10-17",
  },
  {
    slug: "visa-khainan-2026",
    title: "Виза в Китай для лечения: безвизовый режим Хайнань 2026",
    excerpt:
      "Граждане России могут находиться на Хайнане без визы до 30 дней. Сроки, документы, правила въезда для лечения в клинике ТКМ.",
    date: "2026-10-05",
  },
  {
    slug: "otzyvy-patsientov-tkm",
    title: "Отзывы пациентов о лечении в Китае",
    excerpt:
      "Истории пациентов, проходивших курсы ТКМ на Хайнане: с чем приехали, как строилась программа, что изменилось.",
    date: "2026-10-05",
  },
  {
    slug: "stoimost-igloukalyvaniya-sanya-2026",
    title: "Стоимость иглоукалывания в Санья: цены 2026",
    excerpt:
      "Из чего складывается цена курса иглоукалывания на Хайнане: стоимость сеанса, количество процедур, что входит в программу.",
    date: "2026-10-04",
  },
  {
    slug: "kak-vybrat-tcm-kliniku-v-sanya",
    title: "Как выбрать клинику традиционной китайской медицины в Санья",
    excerpt:
      "Подробный гид для русских гостей: на что обратить внимание при выборе клиники ТКМ на Хайнане. Лицензия, врачи, процедуры, цены.",
    date: "2026-09-06",
  },
  {
    slug: "5-prichin-vybrat-khainan-dlya-tkm",
    title:
      "5 причин выбрать Хайнань для лечения традиционной китайской медициной",
    excerpt:
      "Хайнань — тропический остров на юге Китая, идеальное место для ТКМ. Климат, специалисты, цены, инфраструктура, отдых.",
    date: "2026-09-06",
  },
];

export default function BlogPage() {
  // ItemList schema — AI-поисковики извлекают из него полный список статей
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.fenix-sanyamed.com/blog/#itemlist",
    name: "Блог Санатория ТАЙЦЗИ",
    description:
      "Статьи о традиционной китайской медицине, лечении на Хайнане, программах и процедурах.",
    itemListElement: POSTS.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.fenix-sanyamed.com/blog/${p.slug}/`,
      name: p.title,
      datePublished: p.date,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://www.fenix-sanyamed.com/" },
      { "@type": "ListItem", position: 2, name: "Блог", item: "https://www.fenix-sanyamed.com/blog/" },
    ],
  };

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span>Блог</span>
      </nav>

      <h1 className="mb-4 text-4xl font-bold">Блог fenix-sanyamed</h1>
      <p className="mb-10 text-lg text-zinc-700">
        Полезные статьи о традиционной китайской медицине, лечении на
        Хайнане, программах и процедурах нашего центра.
      </p>

      <div className="space-y-6">
        {POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}/`}
            className="group block rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-md"
          >
            <p className="mb-2 text-sm text-zinc-500">{p.date}</p>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 group-hover:text-emerald-700">
              {p.title}
            </h2>
            <p className="text-zinc-700">{p.excerpt}</p>
            <div className="mt-4 text-sm font-medium text-emerald-700 group-hover:underline">
              Читать статью →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="mb-2 font-semibold text-emerald-900">
          Больше статей в разработке
        </p>
        <p className="text-sm text-zinc-700">
          Скоро: «Иглоукалывание: мифы и реальность», «Туйна — мягко и
          глубоко», «Фитотерапия: почему русские доверяют китайским травам».
        </p>
      </div>
    </main>
  );
}