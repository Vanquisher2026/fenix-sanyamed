import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

const RU_URL = "https://www.fenix-sanyamed.com/blog/visa-khainan-2026/";
const EN_URL = "https://www.fenix-sanyamed.com/en/blog/visa-khainan-2026/";

export const metadata: Metadata = {
  title: { absolute: "China visa for medical treatment in 2026: the Hainan visa-free regime" },
  description:
    "Russian citizens may stay in Hainan visa-free for up to 30 days. Practical details: permitted length of stay, documents required, entry rules for treatment at a TCM clinic, and what to do if the course is longer.",
  ...blogMetadata({
    title: "China visa for medical treatment in 2026: the Hainan visa-free regime",
    description:
      "Russian citizens may stay in Hainan visa-free for up to 30 days. Practical details: permitted length of stay, documents required, entry rules for treatment at a TCM clinic, and what to do if the course is longer.",
    url: EN_URL,
    datePublished: "2026-10-05",
    dateModified: "2026-10-31",
    inLanguage: "en",
    blogPath: "/en/blog/",
    blogTitle: "Blog",
    articleSection: "Traditional Chinese Medicine",
    homeLabel: "Home",
  }),
  keywords: [
    "visa free china hainan",
    "russia china visa 2026",
    "hainan visa for russians",
    "medical treatment china visa",
    "how long can russians stay in china",
  ],
  alternates: {
    canonical: EN_URL,
    languages: {
      ru: RU_URL,
      "x-default": RU_URL,
      en: EN_URL,
    },
  },
};

export default function EnBlogPost() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <BlogSchema
        title="China visa for medical treatment in 2026: the Hainan visa-free regime"
        description="Russian citizens may stay in Hainan visa-free for up to 30 days. Practical details: permitted length of stay, documents required, entry rules for treatment at a TCM clinic, and what to do if the course is longer."
        url={EN_URL}
        datePublished="2026-10-05"
        dateModified="2026-10-31"
        inLanguage="en"
        keywords={[
    "visa free china hainan",
    "russia china visa 2026",
    "hainan visa for russians",
    "medical treatment china visa",
    "how long can russians stay in china",
  ]}
        blogPath="/en/blog/"
        blogTitle="Blog"
        articleSection="Traditional Chinese Medicine"
        homeLabel="Home"
      />
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/en/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/en/blog/" className="hover:underline">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span>China visa for medical treatment in 2026: the Hainan visa-free regime</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-10-05</p>
      <h1 className="mb-6 text-4xl font-bold">China visa for medical treatment in 2026: the Hainan visa-free regime</h1>

      <p className="mb-8 text-lg italic text-zinc-600">A complete guide for Russian citizens: how to reach a Chinese TCM clinic without a visa, and with the minimum possible paperwork.</p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">The Russia–China (Hainan) visa-free regime in 2026</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Russian citizens may enter and stay in China without a visa for up to 30 days, counted from the date of entry. Hainan is included, so a treatment course in Sanya falls under exactly the same rule as a holiday trip.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          For our programmes this matters: the longest course we offer is 21 days, leaving nine days of margin for the flight, arrival and the initial adjustment to the climate before the first session.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Permitted stay: up to 30 days from entry</li>
          <li>Purpose: tourism, business, medical treatment, and visiting relatives</li>
          <li>Group: organised tours and individual travel</li>
          <li>Validity: the 30-day allowance is granted on each entry and cannot be extended inside the country</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Documents required to enter Hainan</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          The list is short, and this is the single most common source of anxiety for first-time travellers.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Documents that are NOT required: a visa, a medical certificate, vaccination certificates, an invitation letter, or proof of employment.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>A valid international passport, with at least 6 months of validity remaining and two blank pages</li>
          <li>A completed arrival card, provided on the aircraft or at the border</li>
          <li>Return or onward ticket details — not always checked, but worth having</li>
          <li>Proof of accommodation (hotel booking confirmation) — also not always checked, but recommended</li>
          <li>Medical insurance covering the period of stay, which we recommend regardless</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">If the treatment course is longer than 30 days</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          If a course needs to exceed 30 days, or if you want to combine treatment with a longer stay, options include extending the stay through a medical extension procedure at the local public security bureau; travelling on a private or group visa arranged through a tour operator; or splitting the stay — leave and re-enter to reset the 30-day allowance.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          The extension route requires a medical certificate from a Chinese hospital and is far simpler to arrange when the clinic coordinates it. If your course may exceed 30 days, tell the coordinator before you book the flight.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Getting from Russia to Sanya</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Direct flights operate from Moscow to Sanya with both Aeroflot and China Southern, roughly 10 hours in the air. Connections via Istanbul, Guangzhou or Harbin usually cost less and can be shorter in total if the layover is well timed.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          On arrival, Sanya Phoenix Airport is 20 minutes by taxi from Dadonghai Bay, where our medical centre is located. Free transfer from the airport is included in the programme.
        </p>
      </section>


      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-3">
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">Do Russian citizens need a visa to Hainan for treatment?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">No. Russian citizens may enter and stay in China visa-free for up to 30 days, and medical treatment is one of the permitted purposes. Hainan is included in the same regime.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">How long can I stay in Hainan without a visa?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">Up to 30 days counted from the date of entry. The allowance is granted on each entry and cannot be extended inside the country without a formal extension procedure.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">What documents do I need to enter Hainan?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">A valid international passport with at least six months of validity remaining, a completed arrival card, and — recommended though not always checked — a return ticket, accommodation confirmation and medical insurance for the period of stay.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">Can I get medical treatment in China without a visa?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">Yes. Treatment at a TCM clinic falls under the permitted purposes of the visa-free regime. Our clinic provides invitation documentation and, where a course exceeds 30 days, coordinates the medical extension with the relevant authorities.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">Do I need any medical certificates or vaccinations?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">No vaccination or medical certificate is required for entry under the visa-free regime. Travel medical insurance is not mandatory but is strongly recommended, and a copy of your medical records is genuinely useful for the doctor.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">What if my treatment course is longer than 30 days?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">A medical extension can be arranged through the local public security bureau with a certificate from a Chinese hospital, or the stay can be split across two entries. Tell the coordinator before booking so the paperwork is arranged in advance.</p>
          </details>
        </div>
      </section>

      <div className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-zinc-700">
        <strong>Important:</strong> Individual results may vary. The programme is
        always tailored by the physician based on pulse diagnosis. Traditional
        Chinese medicine is a complement to primary medical care, not a
        replacement for it.
      </div>

      <p className="mt-8 text-sm text-zinc-500">
        Read the Russian version of this article:{" "}
        <a href={RU_URL} className="text-emerald-700 hover:underline">
          {RU_URL}
        </a>
      </p>

      <div className="mt-8 text-center">
        <a
          href="/en/kontakty/"
          className="inline-block rounded-md bg-emerald-700 px-8 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Contact us
        </a>
      </div>
    </main>
  );
}
