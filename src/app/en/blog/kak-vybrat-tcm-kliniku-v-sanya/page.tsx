import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

const RU_URL = "https://www.fenix-sanyamed.com/blog/kak-vybrat-tcm-kliniku-v-sanya/";
const EN_URL = "https://www.fenix-sanyamed.com/en/blog/kak-vybrat-tcm-kliniku-v-sanya/";

export const metadata: Metadata = {
  title: { absolute: "How to choose a Traditional Chinese Medicine clinic in Sanya" },
  description:
    "A detailed guide for Russian visitors: what to check when choosing a TCM clinic in Hainan. Licence, doctor qualifications, pulse diagnosis, procedure range, hygiene, language support and pricing transparency.",
  ...blogMetadata({
    title: "How to choose a Traditional Chinese Medicine clinic in Sanya",
    description:
      "A detailed guide for Russian visitors: what to check when choosing a TCM clinic in Hainan. Licence, doctor qualifications, pulse diagnosis, procedure range, hygiene, language support and pricing transparency.",
    url: EN_URL,
    datePublished: "2026-09-06",
    dateModified: "2026-10-31",
    inLanguage: "en",
    blogPath: "/en/blog/",
    blogTitle: "Blog",
    articleSection: "Traditional Chinese Medicine",
    homeLabel: "Home",
  }),
  keywords: [
    "how to choose tcm clinic",
    "tcm clinic sanya",
    "traditional chinese medicine clinic china",
    "choose chinese medicine hospital",
    "tcm clinic reviews",
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
        title="How to choose a Traditional Chinese Medicine clinic in Sanya"
        description="A detailed guide for Russian visitors: what to check when choosing a TCM clinic in Hainan. Licence, doctor qualifications, pulse diagnosis, procedure range, hygiene, language support and pricing transparency."
        url={EN_URL}
        datePublished="2026-09-06"
        dateModified="2026-10-31"
        inLanguage="en"
        keywords={[
    "how to choose tcm clinic",
    "tcm clinic sanya",
    "traditional chinese medicine clinic china",
    "choose chinese medicine hospital",
    "tcm clinic reviews",
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
        <span>How to choose a Traditional Chinese Medicine clinic in Sanya</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-09-06</p>
      <h1 className="mb-6 text-4xl font-bold">How to choose a Traditional Chinese Medicine clinic in Sanya</h1>

      <p className="mb-8 text-lg italic text-zinc-600">A guide for Russian guests to Hainan: what to check when choosing a TCM clinic — licensing, doctors, procedures, prices and safety.</p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">1. Licence and legal status</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          The first thing to check is whether the clinic holds a state licence to practise traditional Chinese medicine. In China this licence is issued separately from general medical practice, so it is a specific and verifiable document rather than a general 'we are a hospital' claim.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Ask to see it. A legitimate clinic produces it without hesitation. Ask which legal entity operates it and whether it appears in the official register of medical institutions.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">2. Doctor qualifications</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          In TCM it is customary to state the university where the doctor trained and the years of practice. For a serious specialist, ten years is a reasonable baseline.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>The TCM university the doctor graduated from (Shanghai University of Traditional Chinese Medicine, Heilongjiang University of Chinese Medicine, and similar)</li>
          <li>Years of clinical practice — from 10 years is normal for a serious specialist</li>
          <li>Whether the doctor holds a title such as senior physician or associate chief physician</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">3. Pulse diagnosis</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          This is the key method of TCM. A genuine practitioner takes the pulse, inspects the tongue, and asks detailed questions about sleep, digestion, temperature preference and energy levels.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          A proper first consultation should take no less than 20–30 minutes. If the 'examination' takes five minutes and procedures are proposed immediately, the diagnosis was never performed.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">4. Range of procedures</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          A good TCM clinic offers considerably more than acupuncture. A full range includes:
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          A clinic offering only acupuncture is not necessarily bad — but you should know in advance whether the treatment you need is available, because building a programme around one method rarely serves a complex complaint.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Acupuncture</li>
          <li>TuiNa massage</li>
          <li>Moxibustion</li>
          <li>Cupping / vacuum therapy</li>
          <li>Gua sha</li>
          <li>Herbal therapy with individually composed formulations</li>
          <li>Acupressure with the needle-knife</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">5. Safety and hygiene</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Non-negotiable standards:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Needles are single-use only</li>
          <li>The sterile package is opened in front of the patient</li>
          <li>The needle guide and the skin are disinfected before insertion</li>
          <li>Used needles go into a sharps container immediately, never back into the tray</li>
          <li>Cupping and gua sha tools are disinfected between patients</li>
          <li>Herbal formulations are prepared from identifiable, dated product</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">6. Language support</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          For Russian visitors this is critical: the clinic must provide a Russian-speaking interpreter at every consultation. Without one you cannot describe symptoms accurately, you cannot understand the doctor's reasoning, and you cannot give informed consent to a plan you have not understood.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Accurately describe symptoms and their history</li>
          <li>Understand the proposed programme and its risks</li>
          <li>Report changes during the course in time</li>
          <li>Understand what the doctor is doing during each session</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">7. Prices and transparency</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          A good clinic provides a written price list before treatment begins. Prices should be clear about: the cost of the consultation; the price of each individual procedure; how many sessions the programme includes; what the programme price includes and what it does not; and the price of accommodation and flights, which are normally separate.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          If the total is only available verbally, after you have already chosen a package, treat that as a warning sign.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">8. What to watch out for</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Red flags:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Promises of '100% cure' or a 'guaranteed result' — this violates both Chinese and Russian advertising law for medical services</li>
          <li>Pressure to pay the full package before the first consultation</li>
          <li>A clinic without a visible licence, or one where the treating 'doctor' turns out to be a masseur</li>
          <li>A five-minute 'examination' followed by an immediate programme proposal</li>
          <li>Needles that are not opened in front of you</li>
          <li>A price list that exists only as a promise</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">How the fenix-sanyamed medical centre is organised</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Our centre has operated since 2007. In that time we have obtained a state TCM licence, built a team of eight physicians with more than 40 years of experience each, and settled into four locations across the bays of Sanya.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Every consultation is conducted in Russian with an interpreter present. Every programme begins with a pulse diagnosis, and the plan is adjusted during the course as your condition changes. Prices are published before you arrive. The initial consultation, the airport transfer and the Russian-speaking coordinator are included in the programme price.
        </p>
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
