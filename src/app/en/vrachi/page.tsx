import type { Metadata } from "next";
import Link from "next/link";
import { VRACHI_EN } from "@/data/vrachi.en";

export const metadata: Metadata = {
  title: "Doctors of traditional Chinese medicine",
  description:
    "A team of traditional Chinese medicine physicians with 20 to over 40 years of clinical experience. Professors and Doctors of Science, graduates of leading Chinese TCM universities.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/vrachi/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/vrachi/",
      "x-default": "https://www.fenix-sanyamed.com/vrachi/",
      en: "https://www.fenix-sanyamed.com/en/vrachi/",
    },
  },
};

export default function EnVrachiPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Doctors
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Our medical team</h1>
        <span className="gold-line mx-auto my-6 block" />
        <p className="font-serif text-lg italic text-zinc-600">
          Professors, Doctors of Science and veteran physicians with clinical
          experience from 20 to over 40 years. Graduates of leading Chinese
          universities of traditional Chinese medicine.
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === DOCTORS (active team first, archive below) === */}
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[...VRACHI_EN].sort((a, b) => (a.status === "archive" ? 1 : 0) - (b.status === "archive" ? 1 : 0)).map((v, idx) => (
            <Link
              key={v.slug}
              href={`/en/vrachi/${v.slug}/`}
              className="card-luxury group block text-center"
            >
              <span className="mb-3 inline-block font-display text-4xl text-[var(--secondary-dark)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-1">{v.name}</h3>
              <p className="mb-3 font-ui text-xs uppercase tracking-luxury text-zinc-500">
                {v.nameCn} · born {v.birthYear}
              </p>
              <span className="gold-line mx-auto mb-3 block" />
              <p className="mb-3 font-serif text-base italic text-[var(--primary)]">
                {v.position}
              </p>
              {v.status === "archive" && (
                <p className="mb-2 font-ui text-xs text-zinc-400">
                  Previously practiced at the center — archival profile
                </p>
              )}
              <p className="mb-4 font-serif leading-relaxed text-zinc-700">
                {v.description}
              </p>
              <p className="font-ui text-xs uppercase tracking-luxury text-[var(--primary)] group-hover:text-[var(--primary-dark)]">
                About this physician →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto my-20 max-w-md">
        <div className="divider-double" />
      </div>

      <section className="mx-auto max-w-2xl text-center">
        <p className="hero-eyebrow mb-4">Important</p>
        <p className="font-serif italic leading-relaxed text-zinc-700">
          Individual treatment outcomes may vary. Every programme is selected
          for the patient individually on the basis of pulse diagnosis.
        </p>
        <div className="mt-8">
          <Link href="/en/kontakty/" className="btn-luxury">
            Book a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
