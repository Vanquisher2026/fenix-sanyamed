import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог | Медицинский центр fenix-sanyamed · Хайнань",
  description:
    "Полезные статьи о традиционной китайской медицине, лечении на Хайнане, программах и процедурах медицинского центра fenix-sanyamed.",
  alternates: {
    canonical: "https://fenix-sanyamed.com/blog/",
  },
};

const POSTS = [
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
      "Хайнань — тропический остров на юге Китая, идеальное место для ТКМ. Климат, специалисты, цены, инфраструктура, отдых. 🇷🇺 + 🇬🇧 двуязычная статья.",
    date: "2026-09-06",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
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