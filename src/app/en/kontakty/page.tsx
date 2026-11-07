import type { Metadata } from "next";
import Link from "next/link";
import {
  TEL_URL,
  PHONE_DISPLAY,
  CLINIC_EMAIL,
  MESSENGERS,
} from "@/data/contacts";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact and booking",
  description:
    "Contact details for the traditional Chinese medicine medical centre in Sanya, Hainan, China. Address, phone, and the online booking form for a consultation.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/en/kontakty/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/kontakty/",
      "x-default": "https://www.fenix-sanyamed.com/kontakty/",
      en: "https://www.fenix-sanyamed.com/en/kontakty/",
    },
  },
};

export default function EnKontaktyPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Contact
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Get in touch</h1>
        <p className="font-serif text-lg italic text-zinc-600">
          An English-speaking coordinator is on hand. We will put together an
          individual programme and answer all your questions.
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === CONTACT CARDS === */}
      <section className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Address */}
          <div className="card-luxury">
            <p className="hero-eyebrow mb-3 text-[var(--secondary-dark)]">
              Address
            </p>
            <h3 className="mb-4">TAIJI Sanatorium</h3>
            <span className="gold-line mb-4 block" />
            <p className="mb-1 font-serif text-zinc-700">
              Dadonghai, Yalong Bay and Sanya Bay
            </p>
            <p className="font-serif text-zinc-700">
              Sanya city, Hainan Island, China
            </p>
            <p className="mt-2 font-ui text-xs uppercase tracking-luxury text-zinc-500">
              International patient centre
            </p>
          </div>

          {/* Phone */}
          <div className="card-luxury">
            <p className="hero-eyebrow mb-3 text-[var(--secondary-dark)]">
              Phone
            </p>
            <h3 className="mb-4">Call the coordinator</h3>
            <span className="gold-line mb-4 block" />
            <p className="mb-4 font-serif text-2xl text-zinc-800">
              <a href={TEL_URL} className="hover:underline">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mb-4 font-serif text-zinc-700">
              <a href={`mailto:${CLINIC_EMAIL}`} className="hover:underline">
                {CLINIC_EMAIL}
              </a>
            </p>
            <p className="font-ui text-xs uppercase tracking-luxury text-zinc-500">
              Daily, 08:00–21:00 China time
            </p>
          </div>
        </div>
      </section>

      {/* === MESSENGERS === */}
      <section className="mx-auto my-16 max-w-5xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Write to us on
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {MESSENGERS.filter((m) => m.url).map((m) => (
            <a
              key={m.key}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
            >
              {m.label}
            </a>
          ))}
        </div>
      </section>

      {/* === BOOKING FORM === */}
      <section className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Request a consultation
        </h2>
        <ContactForm />
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      <section className="mx-auto max-w-2xl text-center">
        <p className="hero-eyebrow mb-4">Before you come</p>
        <p className="font-serif italic leading-relaxed text-zinc-700">
          The initial consultation with pulse diagnosis is free. Bring your
          MRI or X-ray images and any current medication list — the physician
          will review them with you and draw up an individual programme.
        </p>
        <div className="mt-8">
          <Link href="/en/czeny/" className="btn-luxury">
            See the price list
          </Link>
        </div>
      </section>
    </main>
  );
}
