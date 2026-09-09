import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VRACHI, getVrachBySlug } from "@/data/vrachi";

type Props = {
  params: Promise<{ slug: string }>;
};

// Карта врач → фото (скачано с fenix-sanyamed.ru)
const DOCTOR_PHOTOS: Record<string, string> = {
  "li-yun-fan": "/images/doctor-li-yun-fan-glavnyy-vrach-shanghai-tcm.png",
  "chzhan-li-in": "/images/doctor-chzhan-li-in-direktor-khailuntszyan-tcm.jpg",
  "yao-dun-yuan": "/images/doctor-yao-dun-yuan-khubejskij-tcm.jpg",
  "se-li-tsyun": "/images/doctor-se-li-tsyun-khunanskij-tcm.jpg",
  "khu-yumei": "/images/doctor-khu-yumei-posol-druzhby-tcm-ukrainy.jpg",
};

export async function generateStaticParams() {
  return VRACHI.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = getVrachBySlug(slug);
  if (!v) return { title: "Врач не найден" };

  return {
    title: `${v.nameRu} — врач китайской медицины | fenix-sanyamed`,
    description: `${v.position}. Опыт ${v.experienceYears} лет. Специализация: ${v.specialization.slice(0, 5).join(", ")}.`,
    alternates: {
      canonical: `https://fenix-sanyamed.com/vrachi/${v.slug}/`,
    },
  };
}

const vrachSchema = (v: NonNullable<ReturnType<typeof getVrachBySlug>>) => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  name: v.nameRu,
  alternateName: v.nameCn,
  birthDate: v.birthYear.toString(),
  jobTitle: v.position,
  knowsAbout: v.specialization,
  description: v.description,
  alumniOf: v.education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.split("(")[0].trim(),
  })),
  worksFor: {
    "@type": "MedicalClinic",
    "@id": "https://fenix-sanyamed.com/#clinic",
    name: "Медицинский центр fenix-sanyamed",
  },
});

export default async function VrachPage({ params }: Props) {
  const { slug } = await params;
  const v = getVrachBySlug(slug);
  if (!v) notFound();

  const photo = DOCTOR_PHOTOS[v.slug];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vrachSchema(v)) }}
      />

      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/vrachi/" className="hover:underline">
          Врачи
        </Link>
        <span className="mx-2">/</span>
        <span>{v.nameRu}</span>
      </nav>

      {/* === HEADER С ФОТО === */}
      <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          {photo ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={photo}
              alt={`${v.nameRu} (${v.nameCn}) — врач традиционной китайской медицины в санатории fenix-sanyamed, Санья, Хайнань`}
              className="aspect-square w-full rounded-3xl object-cover"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-[var(--surface-alt)] text-6xl font-bold text-[var(--primary)]">
              {v.nameRu.charAt(0)}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="mb-2 text-4xl font-bold">{v.nameRu}</h1>
          <p className="mb-1 text-zinc-500">
            {v.nameCn} · {v.birthYear} г.р.
          </p>
          <p className="mb-6 text-lg text-[var(--primary)]">{v.position}</p>

          <p className="text-base leading-relaxed text-zinc-700">
            {v.description}
          </p>
        </div>
      </section>

      {/* === БИОГРАФИЯ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Биография</h2>
        <p className="text-base leading-relaxed text-zinc-700">
          {v.detailedBio}
        </p>
      </section>

      {v.achievements.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Достижения и награды</h2>
          <ul className="space-y-2">
            {v.achievements.map((a, i) => (
              <li
                key={i}
                className="rounded-2xl bg-[var(--surface)] p-4 text-sm text-zinc-700"
              >
                {a}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-4 text-2xl font-bold">Образование</h2>
        <ul className="space-y-2 text-base text-zinc-700">
          {v.education.map((e, i) => (
            <li key={i}>• {e}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Специализация</h2>
        <div className="flex flex-wrap gap-2">
          {v.specialization.map((s) => (
            <span
              key={s}
              className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm text-zinc-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-3 text-xl font-bold">📍 Кабинет врача</h2>
        <p className="text-base text-zinc-700">
          бухта <strong>{v.cabLocation.bukhta}</strong>
          <br />
          {v.cabLocation.hotel}
          <br />
          {v.cabLocation.floor}
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          город Санья, остров Хайнань, Китай
        </p>
      </section>

      <div className="disclaimer mb-10">
        ⚠️ <strong>Важно:</strong> индивидуальные результаты лечения могут
        отличаться. Программа всегда подбирается врачом индивидуально.
      </div>

      <div className="text-center">
        <Link href="/kontakty/" className="btn-tilda">
          Записаться на приём
        </Link>
      </div>
    </main>
  );
}