import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROCEDURES_EN } from "@/data/prices.en";
import { PROFILE_EN } from "@/data/procedures.en";
import { BlogSchema } from "@/components/BlogSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROCEDURES_EN.map((p) => ({ slug: p.slug }));
}

function getProc(slug: string) {
  return PROCEDURES_EN.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProc(slug);
  if (!p) return {};
  const profile = PROFILE_EN[slug];
  return {
    title: `${p.name} in Sanya — prices and booking`,
    description:
      profile?.description?.slice(0, 160) ||
      `${p.name} at the TAIJI Sanatorium, Sanya. ${p.duration}, ${p.course}.`,
    alternates: {
      canonical: `https://www.fenix-sanyamed.com/en/terapii/${slug}/`,
      languages: {
        ru: `https://www.fenix-sanyamed.com/terapii/${slug}/`,
        "x-default": `https://www.fenix-sanyamed.com/terapii/${slug}/`,
        en: `https://www.fenix-sanyamed.com/en/terapii/${slug}/`,
      },
    },
  };
}

export default async function EnProcedurePage({ params }: Props) {
  const { slug } = await params;
  const p = getProc(slug);
  if (!p) notFound();
  const profile = PROFILE_EN[slug];

  const priceText =
    p.from === 0 ? "free" : `${p.from}–${p.to} ¥ per session`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: p.name,
    alternateName: [profile?.cn].filter(Boolean),
    description: profile?.description,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    howPerformed: profile?.description?.slice(0, 200),
    offers:
      p.from > 0
        ? {
            "@type": "Offer",
            priceCurrency: "CNY",
            price: p.from,
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "CNY",
              minPrice: p.from,
              maxPrice: p.to,
            },
          }
        : undefined,
  };

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogSchema
        title={`${p.name} in Sanya — prices and booking`}
        description={profile?.description?.slice(0, 160) || ""}
        url={`https://www.fenix-sanyamed.com/en/terapii/${slug}/`}
        datePublished="2026-10-18"
        dateModified="2026-10-18"
        keywords={[p.name, p.slug, "Sanya", "Hainan", "TCM"]}
      />

      <nav className="mb-6 text-sm text-zinc-600">
        <Link href="/en/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/en/terapii/" className="hover:underline">
          Procedures
        </Link>
        <span className="mx-2">/</span>
        <span>{p.name}</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">Updated: 2026-10-18</p>
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
        {p.name}{" "}
        {profile?.cn && (
          <span className="text-zinc-500">({profile.cn})</span>
        )}
      </h1>

      <p className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed sm:text-lg">
        <strong>Cost:</strong> {priceText} · <strong>Duration:</strong>{" "}
        {p.duration} · <strong>Course:</strong> {p.course}
        {p.from === 0 && (
          <span className="mt-2 block text-sm text-emerald-700">
            ✓ The initial consultation is free. Book on WhatsApp.
          </span>
        )}
      </p>

      {profile && (
        <>
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">What it is</h2>
            <p className="leading-relaxed text-zinc-700">
              {profile.description}
            </p>
          </section>

          {profile.indications.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold">
                When it is applied
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                {profile.indications.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              How a session works
            </h2>
            <p className="leading-relaxed text-zinc-700">
              {profile.durationNote}
            </p>
          </section>
        </>
      )}

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Programme cost</h2>
        <p className="mb-4 text-zinc-700">
          {p.from === 0
            ? "The initial consultation is free. You leave with an individual plan."
            : "A single session is around 150–400 ¥. A 7-day course starts at 8,000 ¥, a 14-day course at 15,000 ¥. The price depends on the number of procedures and the length of the programme."}
        </p>
        <p className="text-zinc-700">
          Accommodation and flights are paid separately. The full budget for 14
          days is typically 30,000–55,000 ¥ per person including flights.
        </p>
      </section>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">Book a consultation</h2>
        <p className="mb-4 text-sm opacity-90">
          Free. The coordinator replies within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/en/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800"
          >
            Contact us
          </Link>
          <a
            href={`https://wa.me/8613158954278?text=${encodeURIComponent(`Hello! I am interested in ${p.name} at the TAIJI Sanatorium. Could you tell me the cost and the nearest dates?`)}`}
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
