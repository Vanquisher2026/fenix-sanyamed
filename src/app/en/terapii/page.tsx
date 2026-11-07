import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traditional Chinese medicine procedures in Sanya",
  description:
    "Seven traditional Chinese medicine procedures at the TAIJI Sanatorium: acupuncture, Tuina massage, herbal therapy, moxibustion, cupping, gua sha and pulse diagnosis consultation.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/terapii/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/terapii/",
      "x-default": "https://www.fenix-sanyamed.com/terapii/",
      en: "https://www.fenix-sanyamed.com/en/terapii/",
    },
  },
};

const THERAPIES_EN = [
  {
    slug: "igloukalyvanie",
    title: "Acupuncture",
    subtitle: "Acupuncture · Reflexotherapy",
    description:
      "The oldest method of acting on bioactive points of the body. Over 2000 years of history.",
    emphasis: "The procedure Russian guests know best.",
  },
  {
    slug: "tuyna",
    title: "Tuina Massage",
    subtitle: "Therapeutic massage",
    description:
      "Pressure, kneading, vibration. Works on the meridians without penetrating the skin. Gentle and deep.",
    emphasis: "Close to the Russian massage tradition, a low threshold to start with.",
  },
  {
    slug: "fitoterapiya",
    title: "Herbal Therapy",
    subtitle: "Chinese herbs",
    description:
      "Individual blends from 300+ natural components. Prepared fresh every day. Can be taken away with you.",
    emphasis: "Echoes the Russian folk tradition of herbal medicine.",
  },
  {
    slug: "mokso-terapiya",
    title: "Moxibustion",
    subtitle: "Mugwort warming",
    description:
      "Warming of bioactive zones with a smouldering mugwort cigar as prescribed by the physician. Improves circulation and releases muscle spasm.",
    emphasis: "Included in the immune recovery programmes.",
  },
  {
    slug: "vakuum-terapiya",
    title: "Cupping Therapy",
    subtitle: "Cupping massage",
    description:
      "Modern silicone cups with a vacuum pump. No fire. A gentle and safe form of stimulation.",
    emphasis: "A familiar method in a new, safe execution.",
  },
  {
    slug: "guasha",
    title: "Gua Sha",
    subtitle: "Scraping massage",
    description:
      "A jade scraper with oil. Face and body. Popular with Russian guests aged 25–45.",
    emphasis: "A wellness trend of 2023–2026.",
  },
  {
    slug: "konsultaciya",
    title: "TCM Physician Consultation",
    subtitle: "Pulse diagnosis",
    description:
      "Initial consultation: pulse diagnosis, tongue examination, medical history and selection of an individual treatment programme.",
    emphasis: "Free for international patients booking a programme.",
  },
];

export default function EnTerapiiPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Procedures
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Traditional Chinese medicine procedures</h1>
        <span className="gold-line mx-auto my-6 block" />
        <p className="font-serif text-lg italic text-zinc-600">
          Seven procedures practised at the TAIJI Sanatorium. The initial
          consultation with pulse diagnosis is free for international patients.
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === PROCEDURE CARDS === */}
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {THERAPIES_EN.map((t, idx) => (
            <Link
              key={t.slug}
              href={`/en/terapii/${t.slug}/`}
              className="card-luxury group block"
            >
              <span className="mb-3 inline-block font-display text-4xl text-[var(--secondary-dark)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-1">{t.title}</h3>
              <p className="mb-3 font-ui text-xs uppercase tracking-luxury text-zinc-500">
                {t.subtitle}
              </p>
              <span className="gold-line mb-3 block" />
              <p className="mb-3 font-serif leading-relaxed text-zinc-700">
                {t.description}
              </p>
              <p className="font-serif text-sm italic text-[var(--primary)]">
                {t.emphasis}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto my-20 max-w-md">
        <div className="divider-double" />
      </div>

      <div className="text-center">
        <Link href="/en/kontakty/" className="btn-tilda">
          Book a consultation
        </Link>
      </div>
    </main>
  );
}
