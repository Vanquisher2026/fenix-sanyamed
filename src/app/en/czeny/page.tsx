import type { Metadata } from "next";
import Link from "next/link";
import {
  PROCEDURES_EN,
  PACKAGES_EN,
  ACCOMMODATION_NOTE_EN,
  PRICE_DISCLAIMER_EN,
  fmtPriceEn,
} from "@/data/prices.en";

export const metadata: Metadata = {
  title: "TCM treatment prices in Sanya — how much a course costs",
  description:
    "Cost of acupuncture, Tuina massage and treatment programmes at the TCM medical centre in Hainan. Price guidance in CNY, what a package includes, and how the trip budget adds up.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/czeny/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/czeny/",
      "x-default": "https://www.fenix-sanyamed.com/czeny/",
      en: "https://www.fenix-sanyamed.com/en/czeny/",
    },
  },
  openGraph: {
    title: "TCM treatment prices in Sanya — how much a course costs",
    description:
      "Price guidance for TCM procedures and programmes in Hainan. What a package includes and how the trip budget adds up.",
    url: "https://www.fenix-sanyamed.com/en/czeny/",
    locale: "en_US",
    type: "article",
  },
};

// --- FAQ: formulations follow real English-language search intent ---
const FAQ_EN = [
  {
    q: "How much does treatment in China cost?",
    a: "A single acupuncture or Tuina massage session in Sanya costs on average 150–450 CNY. A turnkey 7-day programme starts at 8,000 CNY and a 14-day programme at 15,000 CNY, excluding accommodation and flights. The final figure depends on the volume of prescribed procedures and is calculated by the physician after the assessment.",
  },
  {
    q: "How much does a course of acupuncture cost?",
    a: "A course usually consists of 5–10 sessions. At 150–400 CNY per session, a course works out at 750–4,000 CNY. The exact number of sessions is determined by the physician on the basis of pulse diagnosis.",
  },
  {
    q: "Is accommodation included in the programme price?",
    a: "No. Accommodation and meals are booked separately. In Sanya they cost from 200 CNY per night for a guesthouse to 800 CNY and above for a first-line hotel. We help you pick an option close to the centre.",
  },
  {
    q: "Is an interpreter included in the price?",
    a: "Yes. A medical interpreter accompanies all consultations and is included in the programme price — it appears as a separate line in the contract and there is no extra charge for interpretation.",
  },
  {
    q: "How much does the first TCM consultation cost?",
    a: "The initial consultation with pulse diagnosis is free. It is needed so the physician can draw up the programme and give you an exact price before treatment begins.",
  },
  {
    q: "Is a deposit required?",
    a: "The deposit is discussed individually. The standard arrangement is to reserve the consultation date without payment, with the course cost calculated after the programme has been agreed on site.",
  },
  {
    q: "Which payment methods are accepted?",
    a: "In Sanya you can pay in cash in CNY, by WeChat Pay, Alipay and UnionPay cards. Cards issued outside China are not accepted everywhere — we tell you the current payment method in advance and help with the exchange.",
  },
  {
    q: "Is a visa needed for Hainan?",
    a: "Many nationalities enter Hainan visa-free for up to 30 days. The exact rules depend on your passport — contact us and we will check what applies to you before you book.",
  },
  {
    q: "Can I stay in a hotel instead of at the sanatorium?",
    a: "Yes. Many patients stay at a hotel and come in for their sessions. This is usually cheaper than the medical building and does not affect the treatment programme.",
  },
  {
    q: "Are there discounts for longer programmes?",
    a: "The cost per day falls as the programme gets longer: a 21-day programme works out cheaper per day than a 7-day one.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_EN.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const offersSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "TAIJI Sanatorium",
  url: "https://www.fenix-sanyamed.com/en/czeny/",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Traditional Chinese medicine procedures",
    itemListElement: PROCEDURES_EN.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name: p.name },
      priceCurrency: "CNY",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: p.from,
        maxPrice: p.to,
      },
    })),
  },
};

export default function EnCzenyPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
      />

      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/en/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Prices</span>
      </nav>

      <h1 className="mb-4 text-4xl font-bold">
        How much does treatment in Sanya cost?
      </h1>

      {/* Direct answer for AI search and the snippet — first 60 words */}
      <p className="mb-6 text-lg leading-relaxed text-zinc-700">
        A single acupuncture or Tuina massage session at the TCM medical centre
        in Sanya costs <strong>150–450 CNY</strong>. A turnkey 7-day programme
        starts at <strong>8,000 CNY</strong> and a 14-day programme at{" "}
        <strong>15,000 CNY</strong>. Accommodation and flights are paid
        separately. The initial consultation with pulse diagnosis is free.
      </p>

      {/* === PROCEDURE TABLE === */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Prices for individual procedures
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-300 text-sm">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 p-3 text-left">
                  Procedure
                </th>
                <th className="border border-zinc-300 p-3 text-left">
                  Session
                </th>
                <th className="border border-zinc-300 p-3 text-left">Course</th>
                <th className="border border-zinc-300 p-3 text-left">
                  Price per session
                </th>
              </tr>
            </thead>
            <tbody>
              {PROCEDURES_EN.map((t) => (
                <tr key={t.slug}>
                  <td className="border border-zinc-300 p-3 font-medium">
                    {t.name}
                  </td>
                  <td className="border border-zinc-300 p-3 text-zinc-700">
                    {t.duration}
                  </td>
                  <td className="border border-zinc-300 p-3 text-zinc-700">
                    {t.course}
                  </td>
                  <td className="border border-zinc-300 whitespace-nowrap p-3 font-medium text-emerald-800">
                    {fmtPriceEn(t.from, t.to)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-zinc-600">
          The herbal therapy price is given per day of the course; all other
          procedures are priced per session.
        </p>
      </section>

      {/* === PACKAGES === */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Turnkey programmes — cost of the full course
        </h2>
        <div className="space-y-4">
          {PACKAGES_EN.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-emerald-200 bg-emerald-50 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="whitespace-nowrap text-lg font-bold text-emerald-800">
                  {fmtPriceEn(p.from, p.to)}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-700">{p.includes}</p>
              <p className="mt-2 text-sm text-zinc-600">
                <strong>Not included:</strong> {p.excludes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === ACCOMMODATION === */}
      <section className="mb-10 rounded-lg bg-zinc-100 p-5">
        <h2 className="mb-3 text-xl font-semibold">
          Planning the total trip budget
        </h2>
        <p className="text-zinc-700">{ACCOMMODATION_NOTE_EN}</p>
      </section>

      <div className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed">
        <strong>Important:</strong> {PRICE_DISCLAIMER_EN}
      </div>

      {/* === FAQ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {FAQ_EN.map((f) => (
            <div
              key={f.q}
              className="rounded-lg border border-zinc-200 p-4"
            >
              <h3 className="mb-2 font-semibold">{f.q}</h3>
              <p className="text-zinc-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">Get an exact price</h2>
        <p className="mb-4 text-sm opacity-90">
          The free consultation with pulse diagnosis lets the physician draw up
          the programme and name the exact cost.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/en/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800"
          >
            Book a consultation
          </Link>
          <a
            href="https://wa.me/8613158954278"
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
