import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMMY, getProgrammaBySlug } from "@/data/programmy";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROGRAMMY.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgrammaBySlug(slug);
  if (!p) return { title: "Программа не найдена" };

  return {
    title: `${p.title} | Программы fenix-sanyamed`,
    description: `${p.description} Показания: ${p.indications.slice(0, 5).join(", ")}.`,
    alternates: {
      canonical: `https://fenix-sanyamed.com/programmy/${p.slug}/`,
    },
  };
}

export default async function ProgrammaPage({ params }: Props) {
  const { slug } = await params;
  const p = getProgrammaBySlug(slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/programmy/" className="hover:underline">
          Программы
        </Link>
        <span className="mx-2">/</span>
        <span>{p.title}</span>
      </nav>

      <div className="mb-8 flex items-start gap-4">
        <div className="text-5xl">{p.emoji}</div>
        <h1 className="text-4xl font-bold">{p.title}</h1>
      </div>

      <p className="mb-8 text-lg leading-relaxed text-zinc-700">
        {p.description}
      </p>

      <section className="mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="mb-3 text-2xl font-semibold">Длительность и стоимость</h2>
        <p className="mb-2 text-zinc-700">
          <strong>Рекомендованная длительность:</strong> {p.durationDays}
        </p>
        <p className="text-zinc-700">
          <strong>Стоимость:</strong>{" "}
          <span className="inline-block rounded bg-amber-100 px-2 py-1 text-xs text-amber-900">
            TBD — требуется подтверждение прайс-листа
          </span>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Показания</h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          {p.indications.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <p className="mt-4 text-base italic text-zinc-600">
          Список не является рекламой лечения конкретных заболеваний.
          Программа подбирается врачом индивидуально на основании пульсовой
          диагностики. Индивидуальные результаты могут отличаться.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Что входит в программу</h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          {p.includes.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </section>

      <div className="mb-10 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm">
        ⚠️ <strong>Перед публикацией:</strong> показания, длительность и
        наполнение программы требуют согласования с главным врачом. Цены — с
        прайс-листом.
      </div>

      <div className="text-center">
        <Link
          href="/kontakty/"
          className="inline-block rounded-md bg-emerald-700 px-8 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Записаться на программу
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/programmy/"
          className="text-sm text-emerald-700 hover:underline"
        >
          ← Все программы
        </Link>
      </div>
    </main>
  );
}