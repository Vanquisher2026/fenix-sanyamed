"use client";

import { useState } from "react";

type Lang = "ru" | "en";

type Content = {
  title: string;
  navHome: string;
  navBlog: string;
  navCurrent: string;
  intro: string;
  reasons: { h: string; p: string }[];
  outro: string;
  cta: string;
  importantPrefix: string;
  importantText: string;
  allArticles: string;
};

export default function BilingualContent({ content }: { content: { ru: Content; en: Content } }) {
  const [lang, setLang] = useState<Lang>("ru");
  const c = content[lang];

  return (
    <>
      {/* Language switcher */}
      <div className="mb-6 flex gap-2 text-sm">
        <button
          onClick={() => setLang("ru")}
          className={`rounded-full px-4 py-1 ${
            lang === "ru"
              ? "bg-emerald-700 text-white"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
          }`}
        >
          🇷🇺 Русский
        </button>
        <button
          onClick={() => setLang("en")}
          className={`rounded-full px-4 py-1 ${
            lang === "en"
              ? "bg-emerald-700 text-white"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
          }`}
        >
          🇬🇧 English
        </button>
      </div>

      <h1 className="mb-6 text-4xl font-bold">{c.title}</h1>
      <p className="mb-8 text-lg italic text-zinc-600">{c.intro}</p>

      {c.reasons.map((r, i) => (
        <section key={i} className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">{r.h}</h2>
          <p className="leading-relaxed text-zinc-700">{r.p}</p>
        </section>
      ))}

      <div className="mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-zinc-700">{c.outro}</p>
        <div className="mt-6 text-center">
          <a
            href="/kontakty/"
            className="inline-block rounded-md bg-emerald-700 px-8 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            {c.cta}
          </a>
        </div>
      </div>

      <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm">
        ⚠️ <strong>{c.importantPrefix}</strong> {c.importantText}
      </div>

      <div className="text-center">
        <a href="/blog/" className="text-sm text-emerald-700 hover:underline">
          ← {c.allArticles}
        </a>
      </div>
    </>
  );
}