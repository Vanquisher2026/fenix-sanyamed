import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the centre — history and licence",
  description:
    "Traditional Chinese medicine medical centre in Sanya, Hainan, China. History, philosophy and state licence.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/o-sanatorii/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/o-sanatorii/",
      "x-default": "https://www.fenix-sanyamed.com/o-sanatorii/",
      en: "https://www.fenix-sanyamed.com/en/o-sanatorii/",
    },
  },
};

export default function EnOSanatoriiPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          About us
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">
          The <em className="italic">Fenix-Sanyamed</em> medical centre
        </h1>
        <p className="font-serif text-lg italic text-zinc-600">
          Established in 2007 in Sanya, Hainan Island
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === MAIN TEXT === */}
      <section className="mx-auto max-w-3xl">
        <div className="drop-cap mb-12">
          <p className="mb-6 font-serif text-lg leading-relaxed text-zinc-800">
            The <strong>Fenix-Sanyamed</strong> medical centre is a centre of
            traditional Chinese medicine on the tropical island of Hainan. It
            holds a state licence to carry out medical activity.
          </p>

          <p className="mb-6 font-serif text-lg leading-relaxed text-zinc-800">
            Our branch network operates in four bays of Sanya city — Dadonghai,
            Yalong Bay, Sanya Bay and Sanyabei. This allows guests to choose
            the location most convenient for their accommodation and the
            beach.
          </p>

          <p className="mb-6 font-serif text-lg leading-relaxed text-zinc-800">
            The centre is home to a team of highly qualified specialists —
            professors, Doctors of Science and veteran physicians with over 40
            years of clinical experience. Many are recognised in China,
            including experience working in military hospitals.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-800">
            We work on the principle of a holistic approach:
            <em> we treat the person, not the disease</em>. Every guest
            receives an individual programme, drawn up by the physician after
            pulse diagnosis and a detailed consultation.
          </p>
        </div>
      </section>

      {/* === ADVANTAGES === */}
      <section className="mx-auto max-w-5xl py-16">
        <div className="mb-12 text-center">
          <p className="hero-eyebrow mb-4">Advantages</p>
          <h2>What we offer</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-3">State licence</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              The medical centre holds a state licence to provide services in
              the field of traditional Chinese medicine. Our physicians
              undertake continuing professional development every year.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Experienced physicians</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              A team with clinical experience from 20 to over 40 years.
              Professors, Doctors of Science and graduates of leading Chinese
              TCM universities — Shanghai, Heilongjiang, Guangzhou and Hunan.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Four branches in Sanya</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              Branches in Dadonghai, Yalong Bay, Sanya Bay and Sanyabei. You
              can choose the location that suits where you are staying.
            </p>
          </div>

          <div>
            <h3 className="mb-3">A holistic approach</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              Already at the first visit, after history taking and examination,
              our specialists formulate an individual treatment plan. Chinese
              traditional medicine has been tested over millennia.
            </p>
          </div>
        </div>
      </section>

      {/* === DISCLAIMER === */}
      <section className="mx-auto max-w-3xl rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] p-8 text-center">
        <p className="mb-3 font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]">
          Our approach
        </p>
        <p className="font-serif italic leading-relaxed text-zinc-700">
          Individual treatment outcomes may vary. We do not promise a "cure" for
          any specific condition. Our approach is to inform honestly and to
          treat individually.
        </p>
      </section>

      <div className="mt-16 text-center">
        <Link href="/en/kontakty/" className="btn-luxury">
          Get in touch
        </Link>
      </div>
    </main>
  );
}
