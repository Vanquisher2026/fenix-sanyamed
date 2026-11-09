import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BOLEZNI, getBolezn } from "@/data/bolezni";
import { waFaqMessage } from "@/data/contacts";

// ============================================================================
// /bolezni/[slug]/ — 病种页 ×10（P1，2026-11-07）
// slug 铁律：kak-lechat-<болезнь>-v-kitae（与 query 词形完全一致）
// 口径：事实陈述，无疗效断言；每页 schema(MedicalWebPage) + FAQ
// ============================================================================

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return BOLEZNI.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = getBolezn(slug);
  if (!b) return { title: "Страница не найдена" };
  return {
    title: b.title,
    description: b.intro.slice(0, 180),
    alternates: { canonical: `https://www.fenix-sanyamed.com/bolezni/${b.slug}/` },
  };
}

export default async function BoleznPage({ params }: Props) {
  const { slug } = await params;
  const b = getBolezn(slug);
  if (!b) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: b.h1,
    description: b.intro,
    url: `https://www.fenix-sanyamed.com/bolezni/${b.slug}/`,
    about: { "@type": "MedicalCondition", name: b.h1.replace("Как лечат ", "").replace(" в Китае", "") },
    lastReviewed: "2026-11-07",
  };

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav className="mb-6 text-sm text-zinc-500">
        <Link href="/" className="hover:underline">Главная</Link>
        {" / "}
        <Link href="/bolezni/" className="hover:underline">Заболевания</Link>
        {" / "}
        <span>{b.h1.replace("Как лечат ", "").replace(" в Китае", "")}</span>
      </nav>

      <h1 className="mb-4 text-3xl font-bold md:text-4xl">{b.h1}</h1>

      {/* 首段：40-60 词直接答案（AI 可摘取片段） */}
      <p className="mb-8 rounded-2xl border-l-4 border-[var(--accent)] bg-[var(--surface-alt)] p-5 text-lg leading-relaxed text-zinc-800">
        {b.intro}
      </p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Методы традиционной китайской медицины</h2>
        <ul className="list-disc space-y-2 pl-6 leading-relaxed text-zinc-700">
          {b.methods.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Как проходит курс</h2>
        <p className="leading-relaxed text-zinc-700">{b.process}</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Соответствующая программа</h2>
        <Link
          href={`/${b.program}`}
          className="inline-block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
        >
          <span className="text-sm text-zinc-500">Лечебная программа</span>
          <div className="mt-1 font-semibold">
            {b.program.includes("oporno") ? "Восстановление опорно-двигательного аппарата"
              : b.program.includes("antistress") ? "Программа «Антистресс»"
              : b.program.includes("kardiolog") ? "Кардиологическая реабилитация"
              : b.program.includes("muzhskoe") ? "Мужское здоровье"
              : b.program.includes("immunitet") ? "Иммунитет и пищеварение"
              : "Нормализация внутренних органов"}
          </div>
        </Link>
      </section>

      <div className="mb-10 rounded-2xl bg-[var(--surface-alt)] p-5 text-sm text-zinc-600">
        <strong>Пожалуйста, учтите:</strong> выше — общее описание подходов, а не
        медицинская рекомендация. Точный план врач составляет на очной
        консультации; часть методик имеет противопоказания.
      </div>

      {/* 其他病种 — 内链 */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Другие заболевания</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {BOLEZNI.filter((x) => x.slug !== b.slug).map((x) => (
            <Link
              key={x.slug}
              href={`/bolezni/${x.slug}/`}
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              {x.h1}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-[var(--primary)] px-8 py-10 text-center text-white">
        <h2 className="mb-3 text-2xl font-bold">Уточнить программу у врача</h2>
        <p className="mb-6 text-white/90">
          Опишите ситуацию — русскоязычный координатор передаст вопрос врачу.
        </p>
        <a
          href={waFaqMessage(`${b.h1} — вопрос врачу`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-[var(--primary)] transition hover:bg-zinc-100"
        >
          Задать вопрос в WhatsApp
        </a>
      </section>
    </main>
  );
}
