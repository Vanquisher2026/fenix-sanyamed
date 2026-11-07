import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

const RU_URL = "https://www.fenix-sanyamed.com/blog/chto-takoe-tkm/";
const EN_URL = "https://www.fenix-sanyamed.com/en/blog/chto-takoe-tkm/";

export const metadata: Metadata = {
  title: { absolute: "Traditional Chinese Medicine: what it actually is" },
  description:
    "TCM explained plainly: Yin-Yang and the Five Phases, the concept of Qi, meridians, the four diagnostic methods, the main treatment methods — and where the method stops working.",
  ...blogMetadata({
    title: "Traditional Chinese Medicine: what it actually is",
    description:
      "TCM explained plainly: Yin-Yang and the Five Phases, the concept of Qi, meridians, the four diagnostic methods, the main treatment methods — and where the method stops working.",
    url: EN_URL,
    datePublished: "2026-10-17",
    dateModified: "2026-10-31",
    inLanguage: "en",
    blogPath: "/en/blog/",
    blogTitle: "Blog",
    articleSection: "Traditional Chinese Medicine",
    homeLabel: "Home",
  }),
  keywords: [
    "traditional chinese medicine",
    "what is traditional chinese medicine",
    "tcm fundamentals",
    "yin yang five elements",
    "acupuncture how it works",
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
        title="Traditional Chinese Medicine: what it actually is"
        description="TCM explained plainly: Yin-Yang and the Five Phases, the concept of Qi, meridians, the four diagnostic methods, the main treatment methods — and where the method stops working."
        url={EN_URL}
        datePublished="2026-10-17"
        dateModified="2026-10-31"
        inLanguage="en"
        keywords={[
    "traditional chinese medicine",
    "what is traditional chinese medicine",
    "tcm fundamentals",
    "yin yang five elements",
    "acupuncture how it works",
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
        <span>Traditional Chinese Medicine: what it actually is</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-10-17</p>
      <h1 className="mb-6 text-4xl font-bold">Traditional Chinese Medicine: what it actually is</h1>

      <p className="mb-8 text-lg italic text-zinc-600">The fundamentals of TCM: the philosophy underneath it, how a practitioner actually diagnoses you, and the honest limits of the method.</p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">A short definition</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Traditional Chinese medicine is a medical system that developed in China more than two thousand years ago. It treats the body as one connected system, where physical condition, emotions and lifestyle are linked, and it selects the intervention individually — acupuncture, TuiNa massage, herbal formulations, moxibustion.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          What this means in practice: two people with the same complaint may receive completely different treatment. The doctor does not treat the label on your medical record; the doctor treats what your pulse, tongue and history tell them.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">The philosophical base: Yin-Yang and the Five Phases</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Two ideas carry the whole system. The first is Yin and Yang — the two complementary sides of any process (exhaustion and recovery, cold and heat, activity and rest). The second is Wu Xing, the Five Phases: Wood, Fire, Earth, Metal and Water. Each phase corresponds to organ systems, to seasons, to flavours and to emotions.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          This is the language a TCM doctor uses to say what exactly is out of balance in a particular patient. It is not anatomy and it is not physics — it is a model. Like any model, it is useful when it fits the case and useless when it does not.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Qi and meridians</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Qi is the term TCM uses for the body's vital activity or functional capacity. Meridians (jing-luo) are the pathways along which that activity is described as moving; acupuncture points lie on them.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          It is worth being precise here: meridians are not anatomical structures in the way veins or nerves are. They belong to the theoretical model of TCM. That does not make the system invalid — it means you should judge it on clinical results rather than on whether the anatomy lines up.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">How a TCM doctor diagnoses you: four methods</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Four methods: inspection (including the tongue), listening and smelling, inquiry, and palpation — above all pulse diagnosis, where the doctor takes the pulse on both wrists at several positions and depths.
        </p>
        <p className="mb-3 leading-relaxed text-zinc-700">
          A proper first consultation should take at least 20–30 minutes. If the examination takes five minutes and procedures are proposed immediately, that is not diagnosis — it is a sales script.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Inspection — the tongue: coating colour and thickness, moisture, cracks</li>
          <li>Listening and smelling — the voice, breathing, body odour</li>
          <li>Inquiry — sleep, digestion, temperature preference, energy levels, menstrual history</li>
          <li>Palpation — the pulse at three positions on each wrist, and abdominal palpation</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">The main treatment methods</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Seven methods cover most clinical work at our centre. Each has a defined scope, defined contraindications and a defined expected course.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Acupuncture — insertion of fine needles at specific points to regulate function</li>
          <li>TuiNa massage — rhythmic manual therapy on the musculoskeletal system</li>
          <li>Moxibustion — warming with burning mugwort, used for cold patterns and chronic pain</li>
          <li>Cupping (vacuum therapy) — suction over the skin to affect the deeper layers</li>
          <li>Gua sha — scraping of the skin with a smooth-edged tool</li>
          <li>Herbal therapy (phytotherapy) — individual Chinese herbal formulations taken orally</li>
          <li>Acupressure with the needle-knife (iglonozh) — a less invasive alternative to needles for some indications</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Where TCM stops working</h2>
        <p className="mb-3 leading-relaxed text-zinc-700">
          Honesty matters more than marketing here. TCM is a complement to primary medical care, not a replacement for it.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>It is not emergency care. Acute conditions — cardiac events, strokes, sepsis, acute abdominal pain — require hospital treatment.</li>
          <li>It does not replace oncology, surgery, dentistry or psychiatric care in acute states.</li>
          <li>It does not replace medication for conditions that require it, such as insulin-dependent diabetes or hypertension. A responsible TCM doctor tells you to continue your prescribed treatment.</li>
          <li>It does not work equally for every condition, and the honest answer to 'will this help me' depends on the specific diagnosis, not on the method's reputation.</li>
        </ul>
      </section>


      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-3">
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">What is traditional Chinese medicine in plain terms?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">A medical system developed in China over two thousand years ago. It views the body as a whole where physical condition, emotions and lifestyle are connected, and it selects the intervention individually — acupuncture, TuiNa massage, herbal formulations, moxibustion.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">What are the philosophical foundations of TCM?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">Two pillars: the doctrine of Yin and Yang (the two complementary sides of any process) and the doctrine of the Five Phases — Wood, Fire, Earth, Metal and Water. This is the descriptive language a TCM doctor uses to say what exactly is out of balance in a given patient.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">What are Qi and meridians?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">Qi is the term TCM uses for the body's vital activity. Meridians (jing-luo) are the pathways along which that activity is described as moving; acupuncture points lie on them. Meridians are not anatomical structures in the usual sense — they belong to the theoretical model of TCM.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">What happens during a TCM consultation?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">Four diagnostic methods: inspection (including the tongue), listening and smelling, inquiry, and palpation — above all pulse diagnosis on both wrists at several positions. An individual treatment programme is then built on that assessment.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">Is TCM safe?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">When performed by a qualified practitioner with sterile single-use needles and a clear scope of practice, the methods we offer have well-established safety profiles and defined contraindications. Your doctor will go through those contraindications with you before the first session.</p>
          </details>
          <details className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4">
            <summary className="cursor-pointer font-semibold">Can I stop my medication while undergoing treatment?</summary>
            <p className="mt-3 leading-relaxed text-zinc-700">No. TCM is a complement to primary medical care. Continue any prescribed medication, and tell your TCM doctor about everything you take so the programme can be adjusted accordingly.</p>
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
