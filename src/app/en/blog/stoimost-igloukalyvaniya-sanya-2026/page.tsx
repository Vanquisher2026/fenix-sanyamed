import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

const RU_URL = "https://www.fenix-sanyamed.com/blog/stoimost-igloukalyvaniya-sanya-2026/";
const EN_URL = "https://www.fenix-sanyamed.com/en/blog/stoimost-igloukalyvaniya-sanya-2026/";

export const metadata: Metadata = {
  title: { absolute: "Acupuncture cost in Sanya: 2026 prices" },
  description:
    "How the price of an acupuncture course in Sanya is built up: session price, number of sessions, what the programme includes, accommodation, flights and the total budget.",
  ...blogMetadata({
    title: "Acupuncture cost in Sanya: 2026 prices",
    description:
      "How the price of an acupuncture course in Sanya is built up: session price, number of sessions, what the programme includes, accommodation, flights and the total budget.",
    url: EN_URL,
    datePublished: "2026-10-04",
    dateModified: "2026-10-31",
    inLanguage: "en",
    blogPath: "/en/blog/",
    blogTitle: "Blog",
    articleSection: "Traditional Chinese Medicine",
    homeLabel: "Home",
  }),
  keywords: [
    "acupuncture cost",
    "acupuncture price china",
    "tcm treatment cost sanya",
    "how much does tcm cost",
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
        title="Acupuncture cost in Sanya: 2026 prices"
        description="How the price of an acupuncture course in Sanya is built up: session price, number of sessions, what the programme includes, accommodation, flights and the total budget."
        url={EN_URL}
        datePublished="2026-10-04"
        dateModified="2026-10-31"
        inLanguage="en"
        keywords={[
    "acupuncture cost",
    "acupuncture price china",
    "tcm treatment cost sanya",
    "how much does tcm cost",
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
        <span>Acupuncture cost in Sanya: 2026 prices</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-10-04</p>
      <h1 className="mb-6 text-4xl font-bold">Acupuncture cost in Sanya: 2026 prices</h1>

      <p className="mb-8 text-lg italic text-zinc-600">A full breakdown of what TCM treatment costs in Sanya clinics — what is included, what is separate, and where the total budget actually goes.</p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">What the treatment price includes</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Included free of charge: the initial pulse diagnosis, the airport transfer, the Russian-speaking coordinator, and selection of an individual treatment programme. These are not charged as extras later.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Included in the course price: the TCM procedures themselves (acupuncture, TuiNa, moxibustion, catgut embedding), consultations with physicians who have more than 40 years of experience, and repeat pulse diagnostics during the course so the plan can be adjusted.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Not included: accommodation, meals, and flights. Keeping these separate is deliberate — it means you choose your own hotel rather than accepting a bundled one.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">The most requested procedures</h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Acupuncture — chronic pain, insomnia, headaches</li>
          <li>TuiNa massage — osteochondrosis, recovery of the musculoskeletal system</li>
          <li>Herbal therapy — general strengthening, constitutional support</li>
          <li>Catgut embedding — appetite regulation for weight management</li>
          <li>Moxibustion — chronic cold-pattern conditions, respiratory complaints</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Why treatment in China costs less</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Treatment at our centre runs 30–40% below comparable European TCM centres at comparable quality. The saving comes from the cost base — medical staffing costs, facility costs and the fact that Chinese health insurance treats TCM as medicine — not from a reduction in what is delivered.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          On top of that there are two further savings that are easy to overlook: direct Moscow–Sanya flights are cheaper than the equivalent European package, and the visa-free regime removes the visa fee and the paperwork risk entirely.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Planning the total budget</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          For a realistic figure, take the programme price, add accommodation at 200–800 CNY per night depending on the bay and the season, add flights, and add a margin for food and local transport.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Across our programmes, a 14-day medical course including accommodation and flights typically lands in the range of 40,000–70,000 CNY. A 21-day course with more demanding objectives runs higher. When you request a quote, the coordinator sends a written breakdown in three lines — medical programme, accommodation, flights — with no hidden additions.
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
