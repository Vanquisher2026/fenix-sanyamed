import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROCEDURES } from "@/data/prices";
import { getTerapiiSeo } from "@/data/seo/terapii.seo";
import { BlogSchema } from "@/components/BlogSchema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROCEDURES.map((p) => ({ slug: p.slug }));
}

function getProc(slug: string) {
  return PROCEDURES.find((p) => p.slug === slug);
}

const PROFILE: Record<string, { cn: string; short: string; description: string; indications: string[]; durationNote: string; }> = {
  igloukalyvanie: {
    cn: "针灸",
    short: "Акупунктура",
    description:
      "Иглоукалывание (акупунктура) — один из основных методов традиционной китайской медицины. Тонкие одноразовые стерильные иглы вводятся в биоактивные точки на теле (меридианы). Воздействие нормализует движение Ци, улучшает кровообращение, помогает при болевых синдромах и хронических состояниях.",
    indications: [
      "Хронические боли в спине и шее",
      "Головные боли напряжения, мигрени",
      "Бессонница и нарушения сна",
      "Невралгии",
      "Восстановление после инсультов (по назначению врача)",
    ],
    durationNote:
      "Первые 5 минут ощущается лёгкое покалывание. Затем — глубокое расслабление. Многие пациенты засыпают во время сеанса.",
  },
  tuyna: {
    cn: "推拿",
    short: "Туйна — лечебный массаж",
    description:
      "Туйна — китайский лечебный массаж, отличающийся от европейского. Мастер работает не только с мышцами, но и с суставами, точками воздействия, меридианами. Применяется при болях в спине, заболеваниях суставов, восстановлении после травм.",
    indications: [
      "Боли в спине, шее, пояснице",
      "Остеохондроз, протрузии",
      "Заболевания суставов",
      "Мышечное напряжение",
      "Восстановление после спортивных травм",
    ],
    durationNote:
      "Сеанс может ощущаться интенсивно — «хорошая боль». После процедуры — чувство лёгкости и расслабления.",
  },
  "mokso-terapiya": {
    cn: "艾灸",
    short: "Моксотерапия (прижигание полынью)",
    description:
      "Моксотерапия — прогревание биоактивных точек тлеющей полынью (сигарой или конусами). Метод особенно эффективен при «холодных» состояниях: хронические боли, зябкость, нарушения менструального цикла, слабый иммунитет.",
    indications: [
      "Хронические боли в спине и суставах",
      "Холод в конечностях, зябкость",
      "Нарушения менструального цикла",
      "Сниженный иммунитет",
      "Хроническая усталость",
    ],
    durationNote:
      "Процедура комфортная — ощущается мягкое тепло и приятный аромат полыни.",
  },
  "vakuum-terapiya": {
    cn: "拔罐",
    short: "Вакуум-терапия (баночный массаж)",
    description:
      "Вакуум-терапия — установка специальных банок на кожу для создания локального вакуума. Стимулирует кровообращение и лимфоток, помогает при простудных состояниях, мышечных болях, бронхите.",
    indications: [
      "Простудные заболевания, бронхит",
      "Мышечные боли и спазмы",
      "Застойные явления в спине",
      "Целлюлит (в комплексных программах)",
    ],
    durationNote:
      "После процедуры могут остаться красные пятна, которые проходят за 2–3 дня.",
  },
  guasha: {
    cn: "刮痧",
    short: "Гуаша — скребковый массаж",
    description:
      "Гуаша — воздействие на кожу специальным скребком (из нефрита, рога или пластика). Выводит «ша» — застойные явления, улучшает микроциркуляцию, уменьшает мышечное напряжение. Эффективно при «застуженных» состояниях и болевых синдромах.",
    indications: [
      "Простудные состояния, начальная стадия ОРВИ",
      "Мышечное напряжение в шее, плечах, спине",
      "Головные боли напряжения",
      "Хроническая усталость",
    ],
    durationNote:
      "После сеанса появляются красные следы («ша»), которые проходят за 3–5 дней — это нормальная реакция вывода токсинов.",
  },
  fitoterapiya: {
    cn: "中药",
    short: "Фитотерапия (китайские травы)",
    description:
      "Фитотерапия — приём отваров из лекарственных трав, подобранных врачом индивидуально. В Китае это самостоятельная дисциплина: врач ТКМ может корректировать состав каждые 3 дня в зависимости от динамики. Травы привозят из проверенных китайских провинций (Юньнань, Гуйчжоу, Сычуань).",
    indications: [
      "Заболевания ЖКТ (гастрит, диспепсия)",
      "Хронические состояния различного профиля",
      "Восстановление после длительной болезни",
      "Сниженный иммунитет",
      "Дополнение к иглоукалыванию / Туйна",
    ],
    durationNote:
      "Отвар выдаётся каждое утро в термосе. На вкус горько, но привыкаешь за 1–2 дня. Состав меняется каждые 3 дня.",
  },
  konsultaciya: {
    cn: "诊脉",
    short: "Консультация врача ТКМ",
    description:
      "Первичная консультация с врачом традиционной китайской медицины. Включает осмотр, диагностику по языку, пульсовую диагностику, сбор анамнеза. По итогам — индивидуальный план лечения и расчёт стоимости курса.",
    indications: [
      "Любое обращение в клинику",
      "Перед началом любой программы лечения",
    ],
    durationNote:
      "Бесплатно. Проходит в спокойной обстановке с русскоязычным переводчиком. По итогам — ясный план и фиксированная цена.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProc(slug);
  if (!p) return {};
  const profile = PROFILE[slug];
  return {
    title: `${p.name} в Санья — цены и запись`,
    description: profile?.description?.slice(0, 160) || `${p.name} в Санатории ТАЙЦЗИ, Санья. ${p.duration}, ${p.course}.`,
    alternates: {
      canonical: `https://www.fenix-sanyamed.com/terapii/${slug}/`,
      languages: {
        ru: `https://www.fenix-sanyamed.com/terapii/${slug}/`,
        "x-default": `https://www.fenix-sanyamed.com/terapii/${slug}/`,
        en: `https://www.fenix-sanyamed.com/en/terapii/${slug}/`,
      },
    },
  };
}

export default async function ProcedurePage({ params }: Props) {
  const { slug } = await params;
  const p = getProc(slug);
  if (!p) notFound();
  const profile = PROFILE[slug];
  const seo = getTerapiiSeo(slug);

  const priceText = p.from === 0
    ? "бесплатно"
    : `${p.from}–${p.to} ¥ за сеанс`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: p.name,
    alternateName: [profile?.cn].filter(Boolean),
    description: profile?.description,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    howPerformed: profile?.description?.slice(0, 200),
    offers: p.from > 0 ? {
      "@type": "Offer",
      priceCurrency: "CNY",
      price: p.from,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CNY",
        minPrice: p.from,
        maxPrice: p.to,
      },
    } : undefined,
  };

  const faqSchema =
    seo && seo.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: seo.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogSchema
        title={`${p.name} в Санья — цены и запись`}
        description={profile?.description?.slice(0, 160) || ""}
        url={`https://www.fenix-sanyamed.com/terapii/${slug}/`}
        datePublished="2026-10-18"
        dateModified="2026-10-18"
        keywords={[p.name, p.slug, "Санья", "Хайнань", "ТКМ"]}
      />

      <nav className="mb-6 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/terapii/" className="hover:underline">Процедуры</Link>
        <span className="mx-2">/</span>
        <span>{p.name}</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">Обновлено: 2026-10-18</p>
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
        {p.name}{" "}
        {profile?.cn && (
          <span className="text-zinc-500">({profile.cn})</span>
        )}
      </h1>

      <p className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed sm:text-lg">
        <strong>Стоимость:</strong> {priceText} · <strong>Длительность:</strong> {p.duration} · <strong>Курс:</strong> {p.course}
        {p.from === 0 && (
          <span className="block mt-2 text-sm text-emerald-700">
            ✓ Первичная консультация бесплатна. Запишитесь в WhatsApp.
          </span>
        )}
      </p>

      {profile && (
        <>
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Что это такое</h2>
            <p className="text-zinc-700 leading-relaxed">{profile.description}</p>
          </section>

          {profile.indications.length > 0 && (
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold">Когда применяется</h2>
              <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                {profile.indications.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Как проходит сеанс</h2>
            <p className="text-zinc-700 leading-relaxed">{profile.durationNote}</p>
          </section>

          {/* === B3: НОВЫЕ СМЫСЛОВЫЕ БЛОКИ === */}
          {seo && (
            <>
              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold">
                  Отличие от других методов
                </h2>
                <p className="text-zinc-700 leading-relaxed">{seo.difference}</p>
              </section>

              <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Противопоказания и ограничения
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-zinc-700">
                  {seo.contraindications.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-zinc-600">
                  Перечень приведён в ознакомительном порядке. Полный список
                  противопоказаний и окончательное решение о допуске к
                  процедуре принимает врач на консультации.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold">
                  После сеанса: что происходит
                </h2>
                <p className="text-zinc-700 leading-relaxed">{seo.after}</p>
              </section>

              <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Как подготовиться к приёму
                </h2>
                <p className="text-zinc-700 leading-relaxed">{seo.combination}</p>
              </section>

              <section className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold">Частые вопросы</h2>
                <div className="space-y-3">
                  {seo.faq.map((f) => (
                    <details
                      key={f.q}
                      className="rounded-2xl bg-[var(--surface)] p-5"
                    >
                      <summary className="cursor-pointer font-semibold text-zinc-900">
                        {f.q}
                      </summary>
                      <p className="mt-3 text-zinc-700 leading-relaxed">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </>
          )}
        </>
      )}

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Стоимость программы</h2>
        <p className="text-zinc-700 mb-4">
          {p.from === 0
            ? "Первичная консультация — бесплатно. По итогам — индивидуальный план."
            : "Один сеанс — 150–400 ¥ в среднем. Курс на 7 дней — от 8 000 ¥, на 14 дней — от 15 000 ¥. Цена зависит от количества процедур и длительности программы."}
        </p>
        <p className="text-zinc-700">
          Проживание и перелёт оплачиваются отдельно. Полный бюджет 14 дней обычно 30 000–55 000 ¥ на человека с перелётом.
        </p>
      </section>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">Записаться на консультацию</h2>
        <p className="mb-4 text-sm opacity-90">
          Бесплатно. Координатор ответит в течение 24 часов.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800"
          >
            Контакты
          </Link>
          <a
            href={`https://wa.me/8613158954278?text=${encodeURIComponent(`Здравствуйте! Интересует ${p.name} в Санатории ТАЙЦЗИ. Подскажите стоимость и ближайшие даты.`)}`}
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
