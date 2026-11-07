import Link from "next/link";
import type { Metadata } from "next";
import { VRACHI_EN } from "@/data/vrachi.en";
import { PACKAGES_EN, fmtPriceEn } from "@/data/prices.en";

export const metadata: Metadata = {
  title: {
    absolute: "TAIJI Sanatorium — Traditional Chinese Medicine in Sanya, Hainan",
  },
  description:
    "TAIJI Sanatorium in Sanya, Hainan Island: TCM physicians with 40+ years of experience, acupuncture, TuiNa massage, moxibustion, herbal therapy. Treatment programmes from 7 to 21 days, free airport transfer, English-speaking coordinator.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/sanatorium-tajczi/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/sanatorium-tajczi/",
      "x-default": "https://www.fenix-sanyamed.com/sanatorium-tajczi/",
      en: "https://www.fenix-sanyamed.com/en/sanatorium-tajczi/",
    },
  },
};

const FAQ = [
  {
    q: "What is the TAIJI Sanatorium in Sanya?",
    a: "A medical centre of traditional Chinese medicine in Sanya, Hainan Island, operated by the company Fenix since 2007. Eight TCM physicians with more than 40 years of clinical practice each see patients across three bays of Sanya. Programmes are built individually after an initial consultation with pulse diagnosis.",
  },
  {
    q: "How long does treatment at TAIJI Sanatorium take?",
    a: "The minimum programme is 7 days, 14 days is optimal for most conditions, and the maximum is 21 days. The physician sets the duration after the first consultation, based on your condition and the objective being treated. Longer courses give chronic conditions the repetition they need to hold.",
  },
  {
    q: "Do I need medical tests before arriving?",
    a: "They help but are not required. If you have blood tests, imaging or discharge summaries, send them to the coordinator before you travel — the physician reviews them in advance so the first consultation is productive. If you have no investigations, the diagnosis is done on site. Bring all your current medication in its original packaging.",
  },
  {
    q: "Who performs the procedures at the sanatorium?",
    a: "TCM physicians with a university degree in traditional Chinese medicine and more than 40 years of practice. This is the central distinction between a medical sanatorium and a spa: every method we offer is delivered by a licensed physician, not by a therapist working from a video tutorial.",
  },
  {
    q: "How do I reach Sanya from Europe?",
    a: "Sanya Phoenix International Airport is served by direct and connecting flights from most major European hubs, with connections via Beijing, Guangzhou, Shanghai or Doha. Transfer from the airport to the medical centre in Dadonghai Bay takes about 20 minutes and is provided free of charge with the programme.",
  },
  {
    q: "What does the treatment price include?",
    a: "The initial consultation with pulse diagnosis, all procedures in your programme, herbal formulations, the English-speaking coordinator and airport transfers. Accommodation, meals and flights are quoted separately so you can choose your own hotel in whichever bay suits you.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "TAIJI Sanatorium",
  alternateName: "Fenix Sanya Med",
  medicalSpecialty: "TraditionalChineseMedicine",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sanya",
    addressRegion: "Hainan",
    addressCountry: "CN",
  },
  url: "https://www.fenix-sanyamed.com/en/sanatorium-tajczi/",
  logo: "https://www.fenix-sanyamed.com/images/logo.png",
  priceRange: "¥¥¥",
  openingHours: "Mo-Su 08:00-18:00",
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

export default function EnSanatoriumTajcziPage() {
  const topDocs = VRACHI_EN.filter((v) =>
    ["li-yun-fan", "chzhan-li-in", "yao-dun-yuan"].includes(v.slug)
  );

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
          TAIJI Sanatorium — traditional Chinese medicine in Sanya
        </h1>
        <p className="text-lg leading-relaxed text-zinc-700">
          TAIJI Sanatorium (Fenix Sanya Med) is a medical centre of traditional
          Chinese medicine in the city of Sanya on Hainan Island, China,
          serving international patients since 2014. Eight TCM physicians with
          more than 40 years of experience each practise across three bays of
          Sanya: Dadonghai, Sanya Bay and Yalong Bay. Treatment programmes are
          built individually after an initial consultation with pulse
          diagnosis — not sold as a fixed package.
        </p>
        {/* Official registered name and address — the same wording used on the
            organisation's Yandex Maps listing, so the address stays consistent
            across every directory (NAP consistency). */}
        <p className="mt-4 border-l-4 border-emerald-600 bg-emerald-50/60 py-3 pl-4 text-sm leading-relaxed text-zinc-700">
          Official registered name:{" "}
          <strong className="font-semibold text-zinc-900">
            Санаторий китайской традиционной восстановительной медицины ТАЙЦЗИ
          </strong>{" "}
          (TAIJI Sanatorium of Traditional Chinese Rehabilitative Medicine).
          Registered address:{" "}
          <strong className="font-semibold text-zinc-900">
            113 Yuyalu Street, 1st floor, Sanya, Hainan
          </strong>{" "}
          — the same address listed on the organisation&apos;s Yandex Maps
          entry. This is the official website of TAIJI Sanatorium: current
          prices, the physicians&apos; schedule and treatment programmes are
          published here.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Areas of practice
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          TAIJI Sanatorium covers the main areas of traditional Chinese
          medicine. The physician determines the approach after the first
          consultation and pulse diagnosis rather than following a fixed
          protocol.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Musculoskeletal conditions",
              body: "Spine, disc herniations and protrusions, joints, arthritis, recovery after injury. Methods: acupuncture, TuiNa, moxibustion, manual therapy.",
              link: "/en/programmy/vosstanovlenie-oporno-dvigatelnogo-apparata/",
            },
            {
              title: "Internal organs and metabolism",
              body: "Digestive system, liver, kidneys, endocrine function. Herbal formulations are matched to the pattern and adjusted every three days.",
              link: "/en/programmy/normalizatsiya-vnutrennikh-organov/",
            },
            {
              title: "Women's health",
              body: "Cycle disorders, preparation for pregnancy, fertility, rehabilitation after pregnancy loss. The physician may involve a gynaecologist.",
              link: "/en/programmy/zhenskoe-zdorove/",
            },
            {
              title: "Men's health",
              body: "Prostate conditions, fertility concerns, andrological problems. Requires ultrasound and laboratory results — bring them to the first consultation.",
              link: "/en/programmy/muzhskoe-zdorove/",
            },
            {
              title: "Cardiovascular rehabilitation",
              body: "Recovery after myocardial infarction and stroke, ischaemic heart disease, hypertension. Minimum programme length 14 days.",
              link: "/en/programmy/kardiologicheskaya-reabilitatsiya/",
            },
            {
              title: "Anti-stress and immunity",
              body: "Chronic fatigue, sleep disruption, reduced immunity, stress-related digestive problems.",
              link: "/en/programmy/antistress/",
            },
          ].map((d) => (
            <Link
              key={d.title}
              href={d.link}
              className="block rounded-2xl border border-zinc-200 p-5 transition hover:border-emerald-300 hover:bg-emerald-50/50"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">{d.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Physicians at TAIJI Sanatorium
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          Eight physicians of traditional Chinese medicine practise at the
          sanatorium. Three of them are senior specialists with more than
          40 years of experience:
        </p>
        <div className="space-y-3">
          {topDocs.map((v) => (
            <Link
              key={v.slug}
              href={`/en/vrachi/${v.slug}/`}
              className="block rounded-xl bg-[var(--surface)] p-5 transition hover:bg-emerald-50/50"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{v.name}</h3>
                <span className="text-sm text-zinc-500">
                  {v.experienceYears} years of experience
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-600">{v.position}</p>
            </Link>
          ))}
        </div>
        <p className="mt-4">
          <Link href="/en/vrachi/" className="text-emerald-700 hover:underline">
            All eight physicians →
          </Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Treatment methods
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          Seven methods of traditional Chinese medicine cover most clinical
          work here. All of them are performed by TCM physicians — this is the
          key difference between a medical sanatorium and a hotel spa, where
          the treatment is delivered by a therapist without medical training.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Acupuncture",
            "TuiNa massage",
            "Moxibustion",
            "Cupping",
            "Gua sha",
            "Herbal therapy",
            "Vacuum therapy",
          ].map((m) => (
            <Link
              key={m}
              href="/en/terapii/"
              className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm text-zinc-700 transition hover:bg-emerald-50"
            >
              {m}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-4 text-2xl font-semibold">Programme prices</h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          The cost depends on the length of the programme and the set of
          procedures. The initial consultation with pulse diagnosis is included
          in the programme price, as are airport transfers and the
          English-speaking coordinator.
        </p>
        <div className="space-y-2">
          {PACKAGES_EN.slice(0, 4).map((p) => (
            <div
              key={p.id}
              className="flex items-baseline justify-between border-b border-zinc-200 pb-2"
            >
              <span className="text-zinc-700">{p.name}</span>
              <span className="font-semibold text-zinc-900">
                {fmtPriceEn(p.from, p.to)} ¥
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4">
          <Link href="/en/czeny/" className="text-emerald-700 hover:underline">
            Full price list →
          </Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Getting to the sanatorium
        </h2>
        <p className="leading-relaxed text-zinc-700">
          TAIJI Sanatorium receives patients in three bays of Sanya. Dadonghai
          Bay is the most convenient for treatment: the Fenix medical centre
          and accommodation are within walking distance of the sea. Sanya Phoenix
          International Airport is about 20 minutes away by taxi, and the
          sanatorium provides a free transfer on prior arrangement.
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
          Book a consultation at TAIJI Sanatorium
        </h2>
        <p className="mb-5 text-zinc-700">
          Send your enquiry and the coordinator will reply within one working
          day, answer your questions and help you choose a physician and a
          programme.
        </p>
        <Link
          href="/en/kontakty/"
          className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
        >
          Book a consultation
        </Link>
      </section>

      <p className="text-sm text-zinc-400">
        TAIJI Sanatorium, Sanya · traditional Chinese medicine on Hainan Island
        · TCM physicians with 40+ years of experience
      </p>
    </main>
  );
}
