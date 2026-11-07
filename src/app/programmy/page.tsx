import type { Metadata } from "next";
import Link from "next/link";
import { PROGRAMMY } from "@/data/programmy";

export const metadata: Metadata = {
  title: "Программы лечения ТКМ в Санья — 10 направлений санатория ТАЙЦЗИ",
  description:
    "Десять лечебных программ ТКМ в Санья традиционной китайской медицины в Санья: нормализация работы органов, опорно-двигательный аппарат, женское здоровье, антистресс, снижение веса и др.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/programmy/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/programmy/",
      "x-default": "https://www.fenix-sanyamed.com/programmy/",
      en: "https://www.fenix-sanyamed.com/en/programmy/",
    },
  },
};

export default function ProgrammyPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Программы
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Десять лечебных программ ТКМ в Санья</h1>
        <span className="gold-line mx-auto my-6 block" />
        <p className="font-serif text-lg italic text-zinc-600">
          Каждая программа подбирается индивидуально на основании пульсовой
          диагностики и подробной беседы с врачом.
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === 10 ПРОГРАММ === */}
      <section className="mx-auto max-w-6xl space-y-6">
        {PROGRAMMY.map((p, idx) => (
          <Link
            key={p.slug}
            href={`/programmy/${p.slug}/`}
            className="card-luxury group block"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-2">
                <span className="font-display text-6xl text-[var(--secondary-dark)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-10">
                <h3 className="mb-2">{p.title}</h3>
                <span className="gold-line mb-3 block" />
                <p className="mb-4 font-serif text-base italic text-zinc-600">
                  {p.description}
                </p>
                <p className="font-ui text-xs uppercase tracking-luxury text-[var(--primary)] group-hover:text-[var(--primary-dark)]">
                  Подробнее →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <div className="mx-auto my-20 max-w-md">
        <div className="divider-double" />
      </div>

      <section className="mx-auto max-w-2xl text-center">
        <p className="hero-eyebrow mb-4">Важно</p>
        <p className="font-serif italic leading-relaxed text-zinc-700">
          Индивидуальные результаты лечения могут отличаться. Программа
          всегда подбирается врачом индивидуально.
        </p>
        <div className="mt-8">
          <Link href="/kontakty/" className="btn-luxury">
            Получить консультацию
          </Link>
        </div>
      </section>
    </main>
  );
}