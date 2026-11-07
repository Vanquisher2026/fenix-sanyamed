import Link from "next/link";
import type { Metadata } from "next";
import { PACKAGES_EN, fmtPriceEn } from "@/data/prices.en";

export const metadata: Metadata = {
  title: {
    absolute: "Sanatorium in Hainan, China — TCM treatment in Sanya, prices and programmes",
  },
  description:
    "Traditional Chinese medicine sanatorium on Hainan Island: treatment programmes from 7 to 21 days, prices, physicians, methods. English-speaking coordinator, airport transfer, visa support.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/sanatoriy-khaynanya/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/sanatoriy-khaynanya/",
      "x-default": "https://www.fenix-sanyamed.com/sanatoriy-khaynanya/",
      en: "https://www.fenix-sanyamed.com/en/sanatoriy-khaynanya/",
    },
  },
};

const FAQ = [
  {
    q: "Why is Hainan a good destination for traditional Chinese medicine?",
    a: "Hainan is the only Chinese province where TCM is developed as a state-level branch of healthcare, with dedicated licensed hospitals alongside private centres. Add a tropical climate of 24–28 °C, direct international flights to Sanya, and a concentration of properly qualified physicians, and it becomes one of the strongest destinations for a treatment course.",
  },
  {
    q: "How much does TCM treatment in Sanya cost?",
    a: "The medical part depends on the programme length: roughly 8,000–15,000 CNY for 7 days, 20,000–38,000 CNY for 14 days and 32,000–58,000 CNY for 21 days. The physician gives the exact figure after the consultation, once the set of procedures is clear. Accommodation and flights are quoted separately.",
  },
  {
    q: "Who performs the procedures — physicians or therapists?",
    a: "Physicians. Every method of traditional Chinese medicine at TAIJI Sanatorium is delivered by a TCM physician with a university degree and more than 40 years of clinical practice. This is the essential difference from a hotel spa, where treatment is performed by a therapist working from a script. Copies of the physicians' diplomas and the clinic licence can be requested before you travel.",
  },
  {
    q: "Do I need a visa to come for treatment on Hainan?",
    a: "Most visitors from Europe, North America, Australia and much of Asia do not need a visa for a short stay in Hainan. Entry requirements depend on your nationality — send us your passport details and we will confirm the exact position for your case before you book anything.",
  },
  {
    q: "What is the best time of year to travel to Hainan for treatment?",
    a: "October through April is the most comfortable: 24–28 °C, manageable humidity, and the clinics are less crowded outside the Chinese New Year period. The summer months are hot and humid, but every procedure remains available and there is more scope for gentle outdoor recovery between sessions.",
  },
  {
    q: "Can I combine treatment with a holiday?",
    a: "Yes, and many patients do. Sanya is a resort city with beaches, hotels and restaurants, and the programme is typically 14 days with sessions scheduled in the morning or early afternoon, leaving the rest of the day free. The beaches of Dadonghai and Yalong Bay are a five to fifteen minute walk from the clinics.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "TAIJI Sanatorium, Hainan Island",
  medicalSpecialty: "TraditionalChineseMedicine",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sanya",
    addressRegion: "Hainan",
    addressCountry: "CN",
  },
  url: "https://www.fenix-sanyamed.com/en/sanatoriy-khaynanya/",
  priceRange: "¥¥¥",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EnSanatoriyKhaynanyaPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          A TCM sanatorium on Hainan Island
        </h1>
        <p className="text-lg leading-relaxed text-zinc-700">
          Hainan is the only region in China where traditional Chinese medicine
          is developed as an official branch of healthcare at provincial level.
          TAIJI Sanatorium in the city of Sanya works with international
          patients and is one of the few centres on the island where
          consultations are conducted by physicians with a university degree in
          TCM and more than 40 years of clinical practice — not by therapists
          without medical training.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Why Hainan for TCM treatment
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Climate and recovery
            </h3>
            <p className="leading-relaxed text-zinc-700">
              Tropical Hainan (average annual temperature 24 °C, humidity
              70–80%) creates conditions in which the body recovers faster
              than in a temperate climate. Warm air, sea water and round-the-
              clock access to TCM procedures is something no clinic in
              northern Europe can offer.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">Flights and access</h3>
            <p className="leading-relaxed text-zinc-700">
              Sanya Phoenix International Airport receives direct flights from
              China, Southeast Asia and — with one connection — most European
              cities. The transfer from the airport to Dadonghai Bay, where
              the medical centre is located, takes about 20 minutes.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">Cost</h3>
            <p className="leading-relaxed text-zinc-700">
              The full cost of a course on Hainan — procedures, accommodation
              and flights — is usually below what the same volume of treatment
              costs in a European TCM clinic, while the physicians hold
              Chinese medical degrees and Chinese clinical experience rather
              than their European equivalents.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Treatment programmes on Hainan
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          The length of the programme is set by the physician after the
          consultation. Seven days is the minimum, 14 days is optimal for most
          conditions, and 21 days is the maximum. Every programme includes an
          initial consultation with pulse diagnosis, daily procedures and
          herbal therapy.
        </p>
        <div className="space-y-2">
          {PACKAGES_EN.filter((p) => ["7 дней","14 дней","21 день"].includes(p.days)).map((p) => (
            <div
              key={p.id}
              className="flex items-baseline justify-between border-b border-zinc-200 pb-3"
            >
              <div>
                <span className="font-semibold">{p.days}</span>
                <span className="ml-2 text-sm text-zinc-500">
                  {p.days === "7 дней" && "introductory course"}
                  {p.days === "14 дней" && "optimal for most conditions"}
                  {p.days === "21 день" && "in-depth programme"}
                </span>
              </div>
              <span className="font-semibold text-zinc-900">
                {fmtPriceEn(p.from, p.to)} ¥
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Prices shown cover the medical programme (procedures, consultations
          and herbal therapy). Accommodation and flights are quoted
          separately.
        </p>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-4 text-2xl font-semibold">
          TCM physicians on Hainan
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          Eight physicians of traditional Chinese medicine practise at TAIJI
          Sanatorium. All are graduates of Chinese medical universities, with
          clinical experience from 40 years upwards. Four have worked in state
          hospitals and two are retired military physicians.
        </p>
        <Link
          href="/en/vrachi/"
          className="inline-block rounded-full border border-emerald-300 px-6 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50"
        >
          All physicians →
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          How to choose a sanatorium in Hainan
        </h2>
        <p className="leading-relaxed text-zinc-700">
          Dozens of centres on Hainan call themselves TCM sanatoriums, and
          the differences between them are substantial. The first criterion is
          who performs the treatment: a physician with a medical degree, or a
          masseur without one. At TAIJI Sanatorium every procedure is delivered
          by a TCM physician, and copies of their diplomas and the clinic
          licence can be requested before you travel. The second criterion is
          whether the programme is individual: a fixed set of procedures
          without a consultation and a pulse diagnosis is a wellness service,
          not treatment.
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
        <h2 className="mb-3 text-2xl font-semibold">
          Find out whether treatment on Hainan suits you
        </h2>
        <p className="mb-5 text-zinc-700">
          Send us your details and the coordinator will answer questions about
          the programme, prices, entry requirements and dates.
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
