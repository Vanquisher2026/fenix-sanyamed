import type { Metadata } from "next";
import Link from "next/link";
import { BUKHTY } from "@/data/bukhty";

export const metadata: Metadata = {
  title: "Филиалы санатория ТАЙЦЗИ в Санья — 4 бухты Хайнаня",
  description:
    "Филиалы санатория ТАЙЦЗИ в бухтах Санья: Дадунхай, Ялунвань, Саньябэй и Хайтанвань. Лечение методами традиционной китайской медицины на Хайнане — выберите удобную бухту для курса.",
  alternates: { canonical: "https://www.fenix-sanyamed.com/filialy/" },
};

export default function FilialyIndex() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Филиалы санатория ТАЙЦЗИ в Санья
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-zinc-700">
        Санаторий ТАЙЦЗИ работает в четырёх курортных бухтах Санья. Бухты
        различаются характером отдыха и расположением — координатор поможет
        выбрать удобную под ваш план лечения.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {BUKHTY.map((b) => (
          <Link
            key={b.slug}
            href={`/filialy/${b.slug}/`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
          >
            <h2 className="mb-1 font-semibold">Бухта {b.name}</h2>
            <p className="mb-2 text-sm text-zinc-500">{b.distance}</p>
            <p className="text-sm leading-relaxed text-zinc-600">
              {b.character.slice(0, 130)}…
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
