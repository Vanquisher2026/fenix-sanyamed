import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "SPA and cosmetic TCM treatments in Hainan — skin, face and body",
  },
  description:
    "SPA programmes and cosmetic treatments using traditional Chinese medicine in Sanya: gua sha for the face, acupuncture for rejuvenation, herbal therapy for skin. Delivered by TCM physicians with 40+ years of experience.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/spa-i-krasota/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/spa-i-krasota/",
      "x-default": "https://www.fenix-sanyamed.com/spa-i-krasota/",
      en: "https://www.fenix-sanyamed.com/en/spa-i-krasota/",
    },
  },
};

const FAQ = [
  {
    q: "How does a sanatorium SPA differ from a hotel spa?",
    a: "The treatment is delivered by physicians of traditional Chinese medicine with a university medical degree, not by spa therapists. The approach is built from the meridian map and the condition of the internal systems, not from a standard protocol — two women with the same skin complaint receive different programmes because the underlying causes differ.",
  },
  {
    q: "How many sessions are needed to see results?",
    a: "For the face: 7–10 gua sha sessions, or 10–14 acupuncture sessions. Results accumulate in both cases — visible changes usually appear towards the end of the second week rather than after the first session. A 14-day programme is the practical minimum for a full course.",
  },
  {
    q: "Are there contraindications?",
    a: "Yes. The general contraindications for TCM methods include acute infectious disease and fever, active cancer treatment, acute cardiovascular disease, severe clotting disorders, and pregnancy for some techniques. A consultation with a physician before the first session is mandatory — they determine what is appropriate in your case.",
  },
  {
    q: "Can a SPA programme be combined with treatment of a health condition?",
    a: "Yes, and it often works better. Alongside treatment for a gynaecological or musculoskeletal condition, acupuncture and herbal therapy for general tone can be added. The important point is that it is one programme built by one physician, so the methods support rather than contradict each other.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EnSpaKrasotaPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          SPA and cosmetic treatments with TCM
        </h1>
        <p className="text-lg leading-relaxed text-zinc-700">
          The SPA programmes at TAIJI Sanatorium are not hotel wellness. They
          are medical treatments from traditional Chinese medicine, aimed at the
          skin of the face and body, at hair and at general tone. Every
          procedure is performed by a TCM physician rather than a cosmetician
          without medical training — which means the treatment acts not only on
          the surface of the skin but on the internal causes of its condition.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Face treatments</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 text-lg font-semibold">Gua sha for the face</h3>
            <p className="leading-relaxed text-zinc-700">
              Massage with a smooth-edged scraping tool along the meridians of
              the face — improves microcirculation, reduces puffiness and evens
              out skin tone. At TAIJI Sanatorium the direction of the strokes is
              determined from an individual meridian map by the physician, not
              from a tutorial. A course is 7–10 sessions.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Acupuncture for rejuvenation
            </h3>
            <p className="leading-relaxed text-zinc-700">
              Needles are placed at points on the face and neck associated with
              muscle tone and skin circulation. Unlike cosmetic mesotherapy,
              acupuncture works through the nervous system rather than by
              injecting substances. A course is 10–14 sessions, with the effect
              building towards the end of the second week.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Body treatments</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 text-lg font-semibold">TuiNa for the body</h3>
            <p className="leading-relaxed text-zinc-700">
              Deep TuiNa massage releases muscular tension, improves lymphatic
              drainage and skin tone. In a SPA programme it is delivered in a
              gentler mode than the therapeutic version — focused on relaxation
              and skin quality rather than on deep tissue work.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">Cupping and vacuum therapy</h3>
            <p className="leading-relaxed text-zinc-700">
              Vacuum therapy improves circulation in the subcutaneous tissue and
              is used for the appearance of cellulite and loss of skin tone.
              Both classic glass cupping and modern vacuum apparatus are
              available; the choice depends on the area and the objective.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Herbal therapy for skin and hair
        </h2>
        <p className="leading-relaxed text-zinc-700">
          In traditional Chinese medicine, the condition of skin and hair is a
          reflection of internal systems — the liver, kidneys and spleen. That
          is why external procedures alone are often not enough: the
          physician selects a herbal formulation to correct the underlying
          imbalance, and the formulation is replaced every three days as the
          condition shifts. The herbs are sourced from the provinces of
          Yunnan, Guizhou and Sichuan.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          How a sanatorium SPA differs from a hotel spa
        </h2>
        <p className="leading-relaxed text-zinc-700">
          The central difference is who performs the treatment. In a hotel spa
          the masseur holds a certificate from a one-week course and works to a
          fixed protocol. At TAIJI Sanatorium the treatment is performed by a
          physician of traditional Chinese medicine who can see not only the
          skin but the state of the meridians and the internal systems. It
          means two people with identical skin complaints receive different
          programmes — because the underlying causes differ.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4"
            >
              <summary className="cursor-pointer font-semibold text-zinc-900">
                {f.q}
              </summary>
              <p className="mt-3 leading-relaxed text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 text-center">
        <h2 className="mb-3 text-2xl font-semibold">Book a SPA programme</h2>
        <p className="mb-5 text-zinc-700">
          Send us your details and the coordinator will reply with options and
          answer your questions.
        </p>
        <Link
          href="/en/kontakty/"
          className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
        >
          Contact the sanatorium
        </Link>
      </section>
    </main>
  );
}
