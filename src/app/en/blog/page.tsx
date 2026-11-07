import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Blog on Traditional Chinese Medicine" },
  description:
    "Useful articles on traditional Chinese medicine, treatment in Hainan, programmes and procedures at the fenix-sanyamed medical centre in Sanya.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/blog/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/blog/",
      "x-default": "https://www.fenix-sanyamed.com/blog/",
      en: "https://www.fenix-sanyamed.com/en/blog/",
    },
  },
};

const POSTS = [
  {
    slug: "chto-takoe-tkm",
    title: "Traditional Chinese Medicine: what it actually is",
    excerpt:
      "TCM fundamentals: Yin-Yang and the Five Phases, Qi, meridians, the four diagnostic methods, the treatment methods — and the honest limits of the method.",
    date: "2026-10-17",
  },
  {
    slug: "hainan-ili-udalyanchi-sravnenie",
    title: "Hainan or Wudalianchi: where to go for treatment",
    excerpt:
      "An honest comparison of Chinese medical resorts: Hainan, Wudalianchi, Anshan, Tibetan-style sanatoriums. Climate, visa, flight time, treatment profile.",
    date: "2026-10-17",
  },
  {
    slug: "kak-doletet-iz-moskvy-do-sanya",
    title: "How to fly from Moscow to Sanya cheaply: 5 practical tips",
    excerpt:
      "Direct Moscow–Sanya flights, 2026 prices, connections via Istanbul or Guangzhou, the best time to book, and what to do on arrival.",
    date: "2026-10-17",
  },
  {
    slug: "visa-khainan-2026",
    title: "China visa for medical treatment in 2026: the Hainan visa-free regime",
    excerpt:
      "Russian citizens may stay in Hainan visa-free for up to 30 days. Permitted length of stay, documents required, entry rules for treatment at a TCM clinic.",
    date: "2026-10-05",
  },
  {
    slug: "otzyvy-patsientov-tkm",
    title: "Patient stories: treatment with TCM at our clinic",
    excerpt:
      "Accounts from patients who completed TCM programmes in Sanya: what they arrived with, how the programme was built, what changed.",
    date: "2026-10-05",
  },
  {
    slug: "stoimost-igloukalyvaniya-sanya-2026",
    title: "Acupuncture cost in Sanya: 2026 prices",
    excerpt:
      "How the price of a course is built up: session price, number of sessions, what the programme includes, accommodation, flights, total budget.",
    date: "2026-10-04",
  },
  {
    slug: "kak-vybrat-tcm-kliniku-v-sanya",
    title: "How to choose a Traditional Chinese Medicine clinic in Sanya",
    excerpt:
      "A detailed guide for Russian visitors: licence, doctor qualifications, pulse diagnosis, procedure range, hygiene, language support, pricing.",
    date: "2026-09-06",
  },
  {
    slug: "5-prichin-vybrat-khainan-dlya-tkm",
    title: "5 reasons to choose Hainan for traditional Chinese medicine",
    excerpt:
      "Hainan is a tropical island in southern China. TCM as state-level healthcare, five thousand years of tradition, mild climate, accessible prices.",
    date: "2026-09-06",
  },
];

export default function EnBlogPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.fenix-sanyamed.com/en/blog/#itemlist",
    name: "TAIJI Sanatorium Blog",
    description:
      "Articles on traditional Chinese medicine, treatment in Hainan, programmes and procedures.",
    itemListElement: POSTS.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.fenix-sanyamed.com/en/blog/${p.slug}/`,
      name: p.title,
      datePublished: p.date,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fenix-sanyamed.com/en/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.fenix-sanyamed.com/en/blog/",
      },
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
        <Link href="/en/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Blog</span>
      </nav>

      <h1 className="mb-4 text-4xl font-bold">fenix-sanyamed blog</h1>
      <p className="mb-10 text-lg text-zinc-700">
        Useful articles on traditional Chinese medicine, treatment in Hainan,
        programmes and procedures at our centre.
      </p>

      <div className="space-y-6">
        {POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/en/blog/${p.slug}/`}
            className="group block rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-md"
          >
            <p className="mb-2 text-sm text-zinc-500">{p.date}</p>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900 group-hover:text-emerald-700">
              {p.title}
            </h2>
            <p className="text-zinc-700">{p.excerpt}</p>
            <div className="mt-4 text-sm font-medium text-emerald-700 group-hover:underline">
              Read the article →
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-sm text-zinc-600">
        Looking for the Russian version?{" "}
        <Link href="/blog/" className="text-emerald-700 hover:underline">
          Читать на русском →
        </Link>
      </p>
    </main>
  );
}
