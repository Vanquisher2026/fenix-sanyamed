import type { Metadata } from "next";
import Link from "next/link";
import { PROGRAMMY_EN } from "@/data/programmy.en";

export const metadata: Metadata = {
  title: "TCM treatment programmes in Sanya",
  description:
    "Ten traditional Chinese medicine treatment programmes in Sanya, Hainan: internal organ function, musculoskeletal recovery, women's health, anti-stress, weight management and more.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/programmy/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/programmy/",
      "x-default": "https://www.fenix-sanyamed.com/programmy/",
      en: "https://www.fenix-sanyamed.com/en/programmy/",
    },
  },
};

export default function EnProgrammyPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Programmes
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Ten treatment programmes</h1>
        <span className="gold-line mx-auto my-6 block" />
        <p className="font-serif text-lg italic text-zinc-600">
          Every programme is selected individually on the basis of pulse
          diagnosis and a detailed consultation with the physician.
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === 10 PROGRAMMES === */}
      <section className="mx-auto max-w-6xl space-y-6">
        {PROGRAMMY_EN.map((p, idx) => (
          <Link
            key={p.slug}
            href={`/en/programmy/${p.slug}/`}
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
                  Read more →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      <div className="text-center">
        <Link href="/en/kontakty/" className="btn-tilda">
          Ask about a programme
        </Link>
      </div>
    </main>
  );
}
