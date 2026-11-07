import type { Metadata } from "next";
import Link from "next/link";
import { PROGRAMMY_EN } from "@/data/programmy.en";
import { PROCEDURES_EN, PACKAGES_EN, fmtPriceEn } from "@/data/prices.en";

export const metadata: Metadata = {
  title: "Taiji Sanatorium (Fenix-Sanyamed) — TCM in Sanya, Hainan",
  description:
    "Traditional Chinese Medicine centre in Sanya, Hainan, China. Acupuncture, Tuina massage, herbal medicine, moxibustion. International patients welcome — free initial consultation with pulse diagnosis.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/",
      "x-default": "https://www.fenix-sanyamed.com/",
      "zh-Hans": "https://www.fenix-sanyamed.com/zh/",
      en: "https://www.fenix-sanyamed.com/en/",
    },
  },
};

export default function EnHomePage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-10 sm:py-12">
      <p className="mb-2 text-sm text-zinc-500">Updated 2026-10-31</p>
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
        Taiji Sanatorium
        <br />
        <span className="text-xl text-zinc-600 sm:text-2xl">
          Fenix-Sanyamed TCM Center · Sanya, Hainan, China
        </span>
      </h1>

      <p className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed">
        <strong>Taiji Sanatorium</strong> was established in 2007 in Sanya, Hainan
        Province, China (four branches: Dadonghai Bay, Yalong Bay, Sanya Bay and
        Sanyabei). We specialise in Traditional Chinese Medicine for
        international patients. Treatments: acupuncture, Tuina massage,
        moxibustion, cupping, gua sha, herbal medicine.
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">About</h2>
        <p className="mb-3 text-zinc-700">
          Taiji is a state-licensed TCM medical institution in Sanya, China.
          Eight doctors with 20–43 years of experience, trained at top Chinese
          TCM universities (Shanghai, Heilongjiang, Hubei, Hunan). A medical
          interpreter accompanies all consultations.
        </p>
        <p className="mb-3 text-zinc-700">
          We work on the principle of a holistic approach: we treat the person,
          not the disease. Every guest receives an individual programme, drawn
          up by the physician after pulse diagnosis and a detailed
          consultation. Four branches across Sanya city let you stay close to
          the beach or your hotel.
        </p>
        <p className="text-zinc-700">
          The initial consultation with pulse diagnosis is free for
          international patients, so you can find out what a course would
          involve — and what it would cost — before you commit to anything.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Treatment programmes</h2>
        <p className="mb-4 text-zinc-700">
          Ten programmes covering the most common requests we receive. Each one
          is adapted to the individual after the consultation.
        </p>
        <ul className="space-y-2 text-zinc-700">
          {PROGRAMMY_EN.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/en/programmy/${p.slug}/`}
                className="hover:underline"
              >
                <strong>{p.title}</strong>
              </Link>{" "}
              — {p.durationDays}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link href="/en/programmy/" className="text-emerald-700 hover:underline">
            All ten programmes in detail →
          </Link>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Procedures &amp; prices</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-300 text-sm">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 p-2 text-left">
                  Procedure
                </th>
                <th className="border border-zinc-300 p-2 text-left">
                  Duration
                </th>
                <th className="border border-zinc-300 p-2 text-left">
                  Course
                </th>
                <th className="border border-zinc-300 p-2 text-left">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {PROCEDURES_EN.map((p) => (
                <tr key={p.slug}>
                  <td className="border border-zinc-300 p-2 font-medium">
                    {p.name}
                  </td>
                  <td className="border border-zinc-300 p-2 text-zinc-700">
                    {p.duration}
                  </td>
                  <td className="border border-zinc-300 p-2 text-zinc-700">
                    {p.course}
                  </td>
                  <td className="border border-zinc-300 whitespace-nowrap p-2 font-medium text-emerald-800">
                    {fmtPriceEn(p.from, p.to)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          Herbal medicine is priced per day of the course; all other procedures
          per session. Prices are guidance — the final figure is confirmed
          after the consultation.
        </p>
        <p className="mt-4">
          <Link href="/en/czeny/" className="text-emerald-700 hover:underline">
            Full price table and FAQ →
          </Link>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Packages</h2>
        <ul className="space-y-3 text-zinc-700">
          {PACKAGES_EN.map((p) => (
            <li key={p.id} className="rounded-lg border border-zinc-200 p-4">
              <strong>{p.name}</strong> —{" "}
              <span className="font-semibold text-emerald-800">
                {fmtPriceEn(p.from, p.to)}
              </span>
              <span className="mt-1 block text-sm text-zinc-600">
                {p.includes}
              </span>
              <span className="mt-1 block text-sm text-zinc-500">
                Not included: {p.excludes}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-zinc-500">
          Accommodation (200–800 CNY/night) and flights extra. Typical 14-day
          total budget including travel is 30,000–55,000 CNY.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Practical information</h2>
        <ul className="space-y-2 text-zinc-700">
          <li>
            <strong>Visa:</strong> many nationalities enter Hainan visa-free for
            up to 30 days. We check what applies to your passport before you
            book.
          </li>
          <li>
            <strong>Payment:</strong> cash in CNY, WeChat Pay, Alipay and
            UnionPay cards are accepted in Sanya.
          </li>
          <li>
            <strong>Language:</strong> a medical interpreter accompanies all
            consultations and is included in the programme price.
          </li>
          <li>
            <strong>Accommodation:</strong> booked separately — from 200 CNY
            per night for a guesthouse to 800+ CNY for a first-line hotel. We
            help you pick an option close to the centre.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Contact</h2>
        <div className="rounded-lg border border-zinc-200 p-4">
          <p className="mb-2 text-zinc-700">
            <strong>Address:</strong> Sanya, Hainan, China (four branches:
            Dadonghai, Yalong Bay, Sanya Bay, Sanyabei)
          </p>
          <p className="mb-2 text-zinc-700">
            <strong>Phone / WhatsApp:</strong> +86 131 5895 4278
          </p>
          <p className="mb-2 text-zinc-700">
            <strong>Email:</strong> info@fenix-sanyamed.com
          </p>
          <p className="mb-2 text-zinc-700">
            <strong>Hours:</strong> 08:00 – 21:00 daily (UTC+8)
          </p>
        </div>
      </section>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">Book a consultation</h2>
        <p className="mb-4 text-sm opacity-90">
          Free initial consultation. Reply within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/8613158954278"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800"
          >
            WhatsApp
          </a>
          <Link
            href="/en/kontakty/"
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold"
          >
            Contact form
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-zinc-500">
        <Link href="/" className="hover:underline">
          Русская версия
        </Link>
        {" · "}
        <Link href="/zh/" className="hover:underline">
          中文版
        </Link>
      </div>
    </main>
  );
}
