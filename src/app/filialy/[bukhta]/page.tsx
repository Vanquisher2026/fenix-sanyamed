import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUKHTY, getBukhta } from "@/data/bukhty";
import { waFaqMessage } from "@/data/contacts";

// ============================================================================
// /filialy/[bukhta]/ — 三海湾分院页（P1，2026-11-07）
// 承接词：тайцзи ялонг бэй · дадунхай · санаторий тайцзи санья (189/月)
// ⚠️ 地址/电话未确认（属旧站运营方），页面只写地理事实，联系方式引导 WhatsApp
// ============================================================================

type Props = { params: Promise<{ bukhta: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return BUKHTY.map((b) => ({ bukhta: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bukhta } = await params;
  const b = getBukhta(bukhta);
  if (!b) return { title: "Филиал не найден" };
  return {
    title: b.title,
    description: b.description,
    alternates: { canonical: `https://www.fenix-sanyamed.com/filialy/${b.slug}/` },
  };
}

export default async function FilialPage({ params }: Props) {
  const { bukhta } = await params;
  const b = getBukhta(bukhta);
  if (!b) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `Санаторий ТАЙЦЗИ — ${b.name}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: `Санья, бухта ${b.name}`,
      addressRegion: "Хайнань",
      addressCountry: "CN",
    },
    url: `https://www.fenix-sanyamed.com/filialy/${b.slug}/`,
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
        <Link href="/sanya/" className="hover:underline">Санья</Link>
        {" / "}
        <span>{b.name}</span>
      </nav>

      <h1 className="mb-4 text-3xl font-bold md:text-4xl">{b.h1}</h1>
      <p className="mb-10 text-lg leading-relaxed text-zinc-700">
        Санаторий ТАЙЦЗИ работает в бухте {b.name} с командой врачей
        традиционной китайской медицины. Приём ведут врачи с опытом 40+ лет,
        на каждом приёме доступен русскоязычный медицинский переводчик.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Бухта {b.name}</h2>
        <div className="space-y-4 leading-relaxed text-zinc-700">
          <p>{b.character}</p>
          <p>
            <strong>Расположение:</strong> {b.distance}.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Почему выбирают эту бухту</h2>
        <ul className="list-disc space-y-2 pl-6 text-zinc-700">
          {b.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Что рядом</h2>
        <div className="flex flex-wrap gap-2">
          {b.nearby.map((n) => (
            <span key={n} className="rounded-full bg-[var(--surface-alt)] px-4 py-2 text-sm text-zinc-700">
              {n}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Лечение в филиале</h2>
        <div className="space-y-3 leading-relaxed text-zinc-700">
          <p>
            В филиале доступны консультации и пульсовая диагностика,
            иглоукалывание, массаж туйна, прижигание полынными сигарами и
            фитотерапия. Программа подбирается индивидуально по результатам
            диагностики. Имеются противопоказания — необходима консультация
            специалиста.
          </p>
          <p>
            Пациенты других филиалов могут продолжать курс в бухте {b.name}:
            медицинская документация ведётся централизованно.
          </p>
        </div>
      </section>

      {/* Другие филиалы — 内链网格 */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Другие филиалы в Санья</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {BUKHTY.filter((x) => x.slug !== b.slug).map((x) => (
            <Link
              key={x.slug}
              href={`/filialy/${x.slug}/`}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
            >
              <div className="font-semibold">{x.name}</div>
              <div className="mt-1 text-sm text-zinc-500">{x.nameEn}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-[var(--primary)] px-8 py-10 text-center text-white">
        <h2 className="mb-3 text-2xl font-bold">Записаться в филиал {b.name}</h2>
        <p className="mb-6 text-white/90">
          Координатор подскажет, какая бухта подойдёт под ваш план поездки.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waFaqMessage(`Филиал в бухте ${b.name} — консультация`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-[var(--primary)] transition hover:bg-zinc-100"
          >
            Написать в WhatsApp
          </a>
          <Link
            href="/czeny/"
            className="inline-block rounded-full border border-white/60 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
          >
            Цены
          </Link>
        </div>
      </section>
    </main>
  );
}
