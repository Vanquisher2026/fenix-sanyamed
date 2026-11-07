import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

const RU_URL = "https://www.fenix-sanyamed.com/blog/otzyvy-patsientov-tkm/";
const EN_URL = "https://www.fenix-sanyamed.com/en/blog/otzyvy-patsientov-tkm/";

export const metadata: Metadata = {
  title: { absolute: "Patient stories: treatment with TCM at our clinic" },
  description:
    "Accounts from patients who completed TCM programmes in Sanya: what they arrived with, how the programme was built, what changed, and what they would do differently.",
  ...blogMetadata({
    title: "Patient stories: treatment with TCM at our clinic",
    description:
      "Accounts from patients who completed TCM programmes in Sanya: what they arrived with, how the programme was built, what changed, and what they would do differently.",
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
    "tcm patient reviews",
    "chinese medicine treatment reviews",
    "acupuncture reviews sanya",
    "patient stories tcm",
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
        title="Patient stories: treatment with TCM at our clinic"
        description="Accounts from patients who completed TCM programmes in Sanya: what they arrived with, how the programme was built, what changed, and what they would do differently."
        url={EN_URL}
        datePublished="2026-10-05"
        dateModified="2026-10-31"
        inLanguage="en"
        keywords={[
    "tcm patient reviews",
    "chinese medicine treatment reviews",
    "acupuncture reviews sanya",
    "patient stories tcm",
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
        <span>Patient stories: treatment with TCM at our clinic</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-10-05</p>
      <h1 className="mb-6 text-4xl font-bold">Patient stories: treatment with TCM at our clinic</h1>

      <p className="mb-8 text-lg italic text-zinc-600">Real accounts from people who went through TCM programmes in Sanya — what they arrived with, how the programme was put together, and what changed.</p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Story 1: chronic back pain (L4–L5 disc herniation)</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Andrey, 47, Moscow. Arrived in March 2026 with an L4–L5 disc herniation. In Moscow he had been offered surgery; he wanted to try conservative management first. Dr Li Yun Fan worked on the musculoskeletal programme for 10 days, combining acupuncture with TuiNa massage and moxibustion. The programme was adjusted twice based on how his back responded.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          What he reported: the pain that woke him at night stopped doing that by the second week, and he was able to sit through a full working day without the painkillers he had started carrying. He continued his course of physiotherapy at home. His own summary was careful: the programme gave him function back, and he understood it was management rather than a cure.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Programme: musculoskeletal recovery, 10 days</li>
          <li>Main methods: acupuncture, TuiNa, moxibustion</li>
          <li>What changed: night pain stopped; he could sit through a workday without analgesics</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Story 2: women's health — cycle restoration</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Elena, 38, St Petersburg. Her menstrual cycle had been disrupted after a long period of stress; a gynaecologist in Moscow had proposed hormonal therapy and she declined. On a colleague's recommendation she came for a 14-day women's health programme.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Dr Se Li Tsun combined acupuncture with a course of Chinese herbal formulations, adjusted every three days as her sleep and energy shifted. What changed by the end: her cycle returned to a regular pattern and the fatigue that had been constant for two years receded enough that she could work a normal week. She notes explicitly that she continued to see her gynaecologist in St Petersburg, and that the two worked in parallel.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Programme: women's health, 14 days</li>
          <li>Main methods: acupuncture, individually adjusted herbal formulations</li>
          <li>What changed: cycle regularity returned; chronic fatigue receded</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Story 3: anti-stress after burnout</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Dmitry, 42, Yekaterinburg. An IT manager with two years of severe burnout: insomnia, anxiety, constant exhaustion that no amount of sleep fixed. He took a 7-day anti-stress programme, which combined acupuncture with moxibustion, gentle movement and a course of Sanya Bay walks.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          What changed: he slept through the night within the first week. The anxiety did not disappear, but it stopped dominating his days — he described it as the difference between a background alarm he could not switch off and one he could. He was clear that the programme did not resolve the workplace cause, and that he continued to see a psychologist at home.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Programme: anti-stress, 7 days</li>
          <li>Main methods: acupuncture, moxibustion, gentle movement, walking therapy</li>
          <li>What changed: sleep normalised; anxiety moved from dominant to manageable</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Story 4: weight loss with catgut embedding</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Olga, 35, Novosibirsk. Weight before treatment: 84 kg. After a 14-day programme with catgut embedding, a calorie-controlled diet and daily activity: 76 kg. Eight kilograms in two weeks.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Her own account was more cautious than the headline number, and worth repeating: the catgut embedding worked on her appetite regulation, but the weight loss required the dietary change she made at home and continued afterwards. She was clear that the embedding alone had not done it.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Programme: cleansing and weight reduction, 14 days</li>
          <li>Main methods: catgut embedding at acupoints, dietary counselling</li>
          <li>What changed: 84 kg → 76 kg with diet and activity alongside the treatment</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">What patients consistently mention</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Across 19 years of operation, from 2007, we have treated more than 10,000 patients from Russia and the CIS. Most of our guests come back to us, or recommend us to people they know. What they single out:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>The professionalism of the physicians — every one of them has more than 40 years of experience</li>
          <li>A Russian-speaking coordinator present at every stage, from the first message to the return flight</li>
          <li>The doctor explaining what they are doing and why, rather than performing procedures silently</li>
          <li>The pace — being able to walk on the beach between sessions instead of spending the day in a building</li>
          <li>Transparency: the programme cost was fixed in writing before the first session, with no additions later</li>
        </ul>
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
