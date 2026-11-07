import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VRACHI_EN, getVrachEnBySlug } from "@/data/vrachi.en";
import SmartImage from "@/components/SmartImage";

type Props = {
  params: Promise<{ slug: string }>;
};

const DOCTOR_PHOTOS: Record<string, string> = {
  "li-yun-fan": "/images/doctor-li-yun-fan-glavnyy-vrach-shanghai-tcm.png",
  "chzhan-li-in": "/images/doctor-chzhan-li-in-direktor-khailuntszyan-tcm.jpg",
  "yao-dun-yuan": "/images/doctor-yao-dun-yuan-khubejskij-tcm.jpg",
  "se-li-tsyun": "/images/doctor-se-li-tsyun-khunanskij-tcm.jpg",
  "khu-yumei": "/images/doctor-khu-yumei-posol-druzhby-tcm-ukrainy.jpg",
};

export async function generateStaticParams() {
  return VRACHI_EN.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = getVrachEnBySlug(slug);
  if (!v) return { title: "Physician not found" };

  return {
    title: `${v.name} — ${v.specialization[0]}, ${v.experienceYears} yrs`,
    description: `${v.name} — ${v.position.toLowerCase()}, ${v.experienceYears} years of experience. Focus: ${v.specialization.slice(0, 4).join(", ")}.`,
    alternates: {
      canonical: `https://www.fenix-sanyamed.com/en/vrachi/${v.slug}/`,
      languages: {
        ru: `https://www.fenix-sanyamed.com/vrachi/${v.slug}/`,
        "x-default": `https://www.fenix-sanyamed.com/vrachi/${v.slug}/`,
        en: `https://www.fenix-sanyamed.com/en/vrachi/${v.slug}/`,
      },
    },
  };
}

const vrachSchema = (v: NonNullable<ReturnType<typeof getVrachEnBySlug>>) => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  name: v.name,
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
    "@id": "https://www.fenix-sanyamed.com/#clinic",
    name: "Fenix-Sanyamed Medical Centre",
  },
});

export default async function EnVrachPage({ params }: Props) {
  const { slug } = await params;
  const v = getVrachEnBySlug(slug);
  if (!v) notFound();

  const photo = DOCTOR_PHOTOS[v.slug];

  return (
    <main id="main" className="mx-auto max-w-5xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vrachSchema(v)) }}
      />

      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/en/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/en/vrachi/" className="hover:underline">
          Doctors
        </Link>
        <span className="mx-2">/</span>
        <span>{v.name}</span>
      </nav>

      {/* === HEADER WITH PHOTO === */}
      <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          {photo ? (
            <SmartImage
              src={photo}
              alt={`${v.name} (${v.nameCn}) — physician of traditional Chinese medicine at the Fenix-Sanyamed sanatorium, Sanya, Hainan`}
              width={400}
              height={400}
              className="aspect-square w-full rounded-3xl object-cover"
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-[var(--surface-alt)] text-6xl font-bold text-[var(--primary)]">
              {v.name.charAt(0)}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="mb-2 text-4xl font-bold">{v.name}</h1>
          <p className="mb-1 text-zinc-500">
            {v.nameCn} · born {v.birthYear}
          </p>
          <p className="mb-6 text-lg text-[var(--primary)]">{v.position}</p>

          <p className="text-base leading-relaxed text-zinc-700">
            {v.description}
          </p>
        </div>
      </section>

      {/* === BIOGRAPHY === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Biography</h2>
        <p className="text-base leading-relaxed text-zinc-700">
          {v.detailedBio}
        </p>
      </section>

      {v.achievements.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Achievements and awards</h2>
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
        <h2 className="mb-4 text-2xl font-bold">Education</h2>
        <ul className="space-y-2 text-base text-zinc-700">
          {v.education.map((e, i) => (
            <li key={i}>• {e}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Clinical focus</h2>
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
        <h2 className="mb-3 text-xl font-bold">📍 Consulting room</h2>
        <p className="text-base text-zinc-700">
          <strong>{v.cabLocation.bukhta}</strong> Bay
          <br />
          {v.cabLocation.hotel}
          <br />
          {v.cabLocation.floor}
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          Sanya city, Hainan Island, China
        </p>
      </section>

      <div className="disclaimer mb-10">
        ⚠️ <strong>Important:</strong> individual treatment outcomes may vary.
        Every programme is selected for the patient individually by the physician.
      </div>

      <div className="text-center">
        <Link href="/en/kontakty/" className="btn-tilda">
          Book a consultation
        </Link>
      </div>
    </main>
  );
}
