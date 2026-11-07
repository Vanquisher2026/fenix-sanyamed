import Link from "next/link";
import type { Metadata } from "next";
import { PACKAGES_EN, fmtPriceEn } from "@/data/prices.en";

export const metadata: Metadata = {
  title: {
    absolute: "Treatment voucher on Hainan — TCM programmes, prices and how to book",
  },
  description:
    "Treatment voucher for traditional Chinese medicine in Sanya: what it includes, prices for 7 to 21 day programmes, how to book, and which documents you need.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/putevka/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/putevka/",
      "x-default": "https://www.fenix-sanyamed.com/putevka/",
      en: "https://www.fenix-sanyamed.com/en/putevka/",
    },
  },
};

const FAQ = [
  {
    q: "What is a treatment voucher and how is it different from a single appointment?",
    a: "A voucher is a contract for medical care issued to a named patient. It includes the initial consultation with pulse diagnosis, an individual treatment plan, daily procedures, adjustments to the plan during the course, a closing consultation with recommendations, the coordinator and airport transfers. A single appointment is one consultation without a committed programme of procedures.",
  },
  {
    q: "Can a voucher be rescheduled or refunded?",
    a: "If dates need to change for family or medical reasons, coordinate it with the coordinator in advance — the sanatorium accommodates wherever a change is technically possible. Refund depends on how many procedures have already been carried out: the unused portion is recalculated. The exact terms are fixed in the agreement you sign before payment.",
  },
  {
    q: "Is the consultation charged separately?",
    a: "No. The initial consultation with a TCM physician and pulse diagnosis is included in the programme price regardless of its length. Only accommodation, meals and flights are charged separately, which leaves you free to choose your own accommodation in Sanya.",
  },
  {
    q: "Can family members or children be treated together?",
    a: "Yes. A separate voucher and a separate plan are issued for each patient. Children under 12 are assessed by a paediatric physician and the set of methods is adjusted — in particular the volume of acupuncture and the intensity of the treatment. Tell the coordinator the age of the child and you will be advised on the best programme.",
  },
  {
    q: "Which documents do I need to book?",
    a: "To book: a valid passport, and — if available — medical documents: blood tests, imaging, discharge summaries. The medical documents are not mandatory, but they let the physician build a more precise plan before you arrive. The coordinator handles everything else.",
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

export default function EnPutevkaPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          A treatment voucher for Hainan
        </h1>
        <p className="text-lg leading-relaxed text-zinc-700">
          A treatment voucher at TAIJI Sanatorium is a contract for medical
          care that covers the initial consultation with a TCM physician and
          pulse diagnosis, daily procedures, phytotherapy, an individual plan
          adjusted over the course, a closing consultation with
          recommendations, the coordinator and airport transfers. The voucher is
          issued to a named patient and cannot be transferred. Duration runs
          from 7 to 21 days.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          What the voucher includes
        </h2>
        <ul className="space-y-2">
          {[
            "Initial consultation with a TCM physician, including pulse diagnosis and physical examination",
            "An individual treatment plan drawn up after that consultation",
            "Daily procedures: acupuncture, TuiNa, moxibustion, phytotherapy — the set depends on your plan",
            "Adjustments to the programme during the course (typically every three days)",
            "Closing consultation with recommendations for after you return home",
            "An English-speaking coordinator for the whole period of your stay",
            "Airport transfer to and from Sanya Phoenix International Airport",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-zinc-700">
              <span className="mt-1 text-emerald-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-4 text-2xl font-semibold">Voucher prices</h2>
        <div className="space-y-2">
          {PACKAGES_EN.filter((p) => ["7 дней","10 дней","14 дней","21 день"].includes(p.days)).map((p) => (
            <div
              key={p.id}
              className="flex items-baseline justify-between border-b border-zinc-200 pb-3"
            >
              <div>
                <span className="font-semibold">{p.days}</span>
                <span className="ml-2 text-sm text-zinc-500">
                  {p.days === "7 дней" && "introductory course"}
                  {(p.days === "10 дней" || p.days === "14 дней") &&
                    "optimal duration"}
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
          Accommodation and flights are not included in the voucher. The
          figures shown cover the medical programme.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">How to book</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 text-lg font-semibold">1. Enquiry</h3>
            <p className="leading-relaxed text-zinc-700">
              Send an enquiry through the form on this site or by messenger.
              The coordinator replies within one working day, clarifies your
              symptoms and objectives, and helps you choose the length of the
              programme.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">2. Medical documents</h3>
            <p className="leading-relaxed text-zinc-700">
              If you have blood tests, imaging or discharge summaries, send them
              to the coordinator before you travel. The physician reviews them
              in advance, so the first consultation is substantive. If there are
              no investigations, the diagnosis is carried out on site.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">3. Entry requirements and flights</h3>
            <p className="leading-relaxed text-zinc-700">
              Send us your passport details and we will confirm the exact entry
              requirements for your nationality. Book flights once the dates are
              agreed — Sanya Phoenix International Airport is served from most
              European cities with one connection.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              4. Arrival and the first consultation
            </h3>
            <p className="leading-relaxed text-zinc-700">
              A driver from the sanatorium meets you at the airport. On the day
              you arrive, rest — the first consultation is scheduled for the
              following day. During it, the physician carries out pulse
              diagnosis and a physical examination, draws up an individual
              treatment plan and agrees it with you.
            </p>
          </div>
        </div>
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
        <h2 className="mb-3 text-2xl font-semibold">Book a treatment voucher</h2>
        <p className="mb-5 text-zinc-700">
          Send us your details and the coordinator will reply with pricing and
          help you choose dates.
        </p>
        <Link
          href="/en/kontakty/"
          className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
        >
          Send an enquiry
        </Link>
      </section>
    </main>
  );
}
