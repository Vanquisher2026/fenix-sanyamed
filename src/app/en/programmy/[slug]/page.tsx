import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMMY_EN, getProgrammaEnBySlug } from "@/data/programmy.en";
import { PACKAGES_EN, PRICE_DISCLAIMER_EN, fmtPriceEn } from "@/data/prices.en";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROGRAMMY_EN.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgrammaEnBySlug(slug);
  if (!p) return { title: "Programme not found" };

  return {
    title: `${p.title} in Sanya`,
    description: `${p.description} Duration: ${p.durationDays}. Indications: ${p.indications.slice(0, 4).join(", ")}.`,
    alternates: {
      canonical: `https://www.fenix-sanyamed.com/en/programmy/${p.slug}/`,
      languages: {
        ru: `https://www.fenix-sanyamed.com/programmy/${p.slug}/`,
        "x-default": `https://www.fenix-sanyamed.com/programmy/${p.slug}/`,
        en: `https://www.fenix-sanyamed.com/en/programmy/${p.slug}/`,
      },
    },
  };
}

/** Pick the package matching the recommended programme duration */
function pickPackage(durationDays: string) {
  const d = durationDays.replace(/\s/g, "");
  if (d.includes("21")) return PACKAGES_EN.find((x) => x.id === "21dney");
  if (d.includes("14")) return PACKAGES_EN.find((x) => x.id === "14dney");
  if (d.includes("7")) return PACKAGES_EN.find((x) => x.id === "7dney");
  return PACKAGES_EN.find((x) => x.id === "14dney");
}

/**
 * Additional sections for pages with high search demand, mirroring the
 * Russian SUBSECTIONS map. Formulations are based on real Yandex Wordstat
 * queries for the Russian equivalents.
 */
const SUBSECTIONS_EN: Record<string, { title: string; body: string }[]> = {
  "vosstanovlenie-oporno-dvigatelnogo-apparata": [
    {
      title: "Joint conditions",
      body: "The programme for knee, hip and shoulder joints is built on a combination of acupuncture and Tuina massage together with a course of herbal therapy. The physician selects the points and technique based on pulse diagnosis; the volume of procedures is confirmed after the in-person examination.",
    },
    {
      title: "Spinal conditions",
      body: "Work on the lumbar and cervical spine is carried out through acupuncture, Tuina and cupping. A course usually runs 10–14 days: within that time the physician can assess the dynamics and adjust the plan if needed.",
    },
    {
      title: "Intervertebral disc herniation",
      body: "For hernias the programme is built conservatively, without surgery: muscle spasm is released and blood flow in the affected area improves. The physician reviews the MRI images the patient brings with them and gives an honest assessment of what can be expected in their case.",
    },
    {
      title: "Osteochondrosis and scoliosis",
      body: "Chronic spinal changes require a longer programme and follow-up courses. We discuss this at the first consultation and do not promise what the method cannot deliver.",
    },
  ],
  "iskrivlenie-pozvonochnika": [
    {
      title: "Spinal correction in Sanya",
      body: "The programme combines acupuncture, Tuina massage and therapeutic exercise. The volume of procedures is selected according to the examination and the imaging the patient brings with them.",
    },
    {
      title: "Scoliosis in adults and adolescents",
      body: "The approach differs by age and degree of curvature. The physician reviews an X-ray or MRI, explains the real limits of the method and proposes a programme that matches the patient's expectations.",
    },
  ],
  "normalizatsiya-vnutrennikh-organov": [
    {
      title: "Support for metabolic disorders",
      body: "The programme works through herbal therapy, acupuncture and TCM dietary guidance. Patients continue to take any medication prescribed to them — the TCM programme is an addition to, not a replacement for, their main therapy.",
    },
  ],
};

export default async function EnProgrammaPage({ params }: Props) {
  const { slug } = await params;
  const p = getProgrammaEnBySlug(slug);
  if (!p) notFound();

  const pkg = pickPackage(p.durationDays);
  const subs = SUBSECTIONS_EN[p.slug] || [];

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/en/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/en/programmy/" className="hover:underline">
          Programmes
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

      {/* === DURATION AND COST === */}
      <section className="mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="mb-3 text-2xl font-semibold">Duration and cost</h2>
        <p className="mb-2 text-zinc-700">
          <strong>Recommended duration:</strong> {p.durationDays}
        </p>
        {pkg && (
          <>
            <p className="text-zinc-700">
              <strong>Programme cost guidance:</strong>{" "}
              <span className="font-semibold text-emerald-800">
                {fmtPriceEn(pkg.from, pkg.to)}
              </span>{" "}
              <span className="text-sm text-zinc-600">
                ({pkg.days}, excluding accommodation and flights)
              </span>
            </p>
            <p className="mt-2 text-sm text-zinc-600">{pkg.includes}</p>
          </>
        )}
        <p className="mt-4 text-sm text-zinc-700">
          <Link href="/en/czeny/" className="text-emerald-700 hover:underline">
            Full price table and what the package includes →
          </Link>
        </p>
      </section>

      {/* === INDICATIONS === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Indications</h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          {p.indications.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <p className="mt-4 text-base italic text-zinc-600">
          This list is not an advertisement for treating specific conditions.
          The programme is selected for each patient individually on the basis
          of pulse diagnosis. Individual results may vary.
        </p>
      </section>

      {/* === HIGH-DEMAND SUBSECTIONS === */}
      {subs.length > 0 && (
        <section className="mb-10">
          {subs.map((s) => (
            <div key={s.title} className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">{s.title}</h2>
              <p className="leading-relaxed text-zinc-700">{s.body}</p>
            </div>
          ))}
        </section>
      )}

      {/* === WHAT IS INCLUDED === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          What the programme includes
        </h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          {p.includes.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </section>

      <div className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed">
        <strong>Important:</strong> {PRICE_DISCLAIMER_EN}
      </div>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">Discuss this programme</h2>
        <p className="mb-4 text-sm opacity-90">
          Message us on WhatsApp or leave a request — the physician will reply
          and tell you whether this programme is right for you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/en/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Book now
          </Link>
          <a
            href="https://wa.me/8613158954278"
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold hover:bg-emerald-600"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/en/programmy/"
          className="text-sm text-emerald-700 hover:underline"
        >
          ← All programmes
        </Link>
      </div>
    </main>
  );
}
