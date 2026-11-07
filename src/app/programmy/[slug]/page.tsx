import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMMY, getProgrammaBySlug } from "@/data/programmy";
import { getProgrammySeo } from "@/data/seo/programmy.seo";
import { PACKAGES, PRICE_DISCLAIMER, fmtPrice } from "@/data/prices";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROGRAMMY.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgrammaBySlug(slug);
  if (!p) return { title: "Программа не найдена" };

  return {
    title: `${p.title} — программа лечения в Санья`,
    description: `${p.description} Длительность: ${p.durationDays}. Показания: ${p.indications.slice(0, 4).join(", ")}.`,
    alternates: {
      canonical: `https://www.fenix-sanyamed.com/programmy/${p.slug}/`,
      languages: {
        ru: `https://www.fenix-sanyamed.com/programmy/${p.slug}/`,
        "x-default": `https://www.fenix-sanyamed.com/programmy/${p.slug}/`,
        en: `https://www.fenix-sanyamed.com/en/programmy/${p.slug}/`,
      },
    },
  };
}

/** Подбор пакета по рекомендованной длительности программы */
function pickPackage(durationDays: string) {
  const d = durationDays.replace(/\s/g, "");
  if (d.includes("21")) return PACKAGES.find((x) => x.id === "21dney");
  if (d.includes("14")) return PACKAGES.find((x) => x.id === "14dney");
  if (d.includes("7")) return PACKAGES.find((x) => x.id === "7dney");
  return PACKAGES.find((x) => x.id === "14dney");
}

/**
 * Дополнительные подразделы для страниц с высоким поисковым спросом.
 * Формулировки взяты из реальных запросов Yandex Wordstat:
 * «лечение суставов в китае» (587/мес), «лечение позвоночника в китае» (476),
 * «лечение грыжи в китае» (262), «лечение остеохондроза в китае» (36).
 */
const SUBSECTIONS: Record<
  string,
  { title: string; body: string }[]
> = {
  "vosstanovlenie-oporno-dvigatelnogo-apparata": [
    {
      title: "Лечение суставов в Китае",
      body: "Программа для коленных, тазобедренных и плечевых суставов строится на сочетании иглоукалывания и массажа Туйна с курсом фитотерапии. Врач подбирает точки и технику по результатам пульсовой диагностики, объём процедур уточняется после очного осмотра.",
    },
    {
      title: "Лечение позвоночника в Китае",
      body: "Работа с поясничным и шейным отделами ведётся через иглоукалывание, Туйна и вакуум-терапию. Курс обычно 10–14 дней: за это время врач успевает оценить динамику и, при необходимости, скорректировать план.",
    },
    {
      title: "Межпозвоночная грыжа",
      body: "При грыжах программа строится консервативно, без хирургического вмешательства: снимается мышечный спазм, улучшается кровообращение в зоне поражения. Врач оценивает снимки МРТ, которые пациент привозит с собой, и честно говорит, чего можно ожидать в его случае.",
    },
    {
      title: "Остеохондроз и сколиоз",
      body: "Хронические изменения позвоночника требуют более длинной программы и поддерживающих курсов. Мы обсуждаем это на первой консультации и не обещаем того, чего метод не даёт.",
    },
  ],
  "iskrivlenie-pozvonochnika": [
    {
      title: "Лечение позвоночника в Китае",
      body: "Программа сочетает иглоукалывание, массаж Туйна и лечебную гимнастику. Объём процедур подбирается по результатам осмотра и снимкам, которые пациент привозит с собой.",
    },
    {
      title: "Сколиоз у взрослых и подростков",
      body: "Подход различается по возрасту и степени искривления. Врач оценивает рентген или МРТ, объясняет реальные границы метода и предлагает программу, сопоставимую с ожиданиями пациента.",
    },
  ],
  "normalizatsiya-vnutrennikh-organov": [
    {
      title: "Поддержка при нарушениях обмена веществ",
      body: "Программа работает через фитотерапию, иглоукалывание и диетические рекомендации ТКМ. Пациент продолжает принимать назначенные ему лекарства — программа ТКМ является дополнением, а не заменой основной терапии.",
    },
  ],
};

export default async function ProgrammaPage({ params }: Props) {
  const { slug } = await params;
  const p = getProgrammaBySlug(slug);
  if (!p) notFound();

  const pkg = pickPackage(p.durationDays);
  const subs = SUBSECTIONS[p.slug] || [];
  const seo = getProgrammySeo(p.slug);

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/programmy/" className="hover:underline">
          Программы
        </Link>
        <span className="mx-2">/</span>
        <span>{p.title}</span>
      </nav>

      <div className="mb-8 flex items-start gap-4">
        <div className="text-5xl">{p.emoji}</div>
        <h1 className="text-4xl font-bold">{p.title}</h1>
      </div>

      <p className="mb-8 text-lg leading-relaxed text-zinc-700">
        {p.description}
      </p>

      {/* === ДЛИТЕЛЬНОСТЬ И СТОИМОСТЬ === */}
      <section className="mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="mb-3 text-2xl font-semibold">
          Длительность и стоимость
        </h2>
        <p className="mb-2 text-zinc-700">
          <strong>Рекомендованная длительность:</strong> {p.durationDays}
        </p>
        {pkg && (
          <>
            <p className="text-zinc-700">
              <strong>Ориентир стоимости программы:</strong>{" "}
              <span className="font-semibold text-emerald-800">
                {fmtPrice(pkg.from, pkg.to)}
              </span>{" "}
              <span className="text-sm text-zinc-600">
                ({pkg.days}, без проживания и перелёта)
              </span>
            </p>
            <p className="mt-2 text-sm text-zinc-600">{pkg.includes}</p>
          </>
        )}
        <p className="mt-4 text-sm text-zinc-700">
          <Link href="/czeny/" className="text-emerald-700 hover:underline">
            Полная таблица цен и что входит в пакет →
          </Link>
        </p>
      </section>

      {/* === ПОКАЗАНИЯ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Показания</h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          {p.indications.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <p className="mt-4 text-base italic text-zinc-600">
          Список не является рекламой лечения конкретных заболеваний.
          Программа подбирается врачом индивидуально на основании пульсовой
          диагностики. Индивидуальные результаты могут отличаться.
        </p>
      </section>

      {/* === ПОДРАЗДЕЛЫ ПО ВЫСОКОЧАСТОТНЫМ ЗАПРОСАМ === */}
      {subs.length > 0 && (
        <section className="mb-10">
          {subs.map((s) => (
            <div key={s.title} className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">{s.title}</h2>
              <p className="leading-relaxed text-zinc-700">{s.body}</p>
            </div>
          ))}
        </section>
      )}

      {/* === ЧТО ВХОДИТ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Что входит в программу
        </h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          {p.includes.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </section>

      {/* === B4: ПРОГРАММА ПО ДНЯМ === */}
      {seo && seo.dayPlan.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Программа по дням</h2>
          <ol className="space-y-4">
            {seo.dayPlan.map((d) => (
              <li
                key={d.day}
                className="rounded-2xl border border-zinc-200 p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                  {d.day}
                </h3>
                <p className="leading-relaxed text-zinc-700">{d.what}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm italic text-zinc-600">
            Схема приведена как типичный сценарий. Конкретная
            последовательность процедур определяется врачом после
            консультации и может корректироваться по ходу курса.
          </p>
        </section>
      )}

      {/* === B4: ПРОЖИВАНИЕ И ПИТАНИЕ === */}
      {seo && (
        <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Проживание и питание
          </h2>
          <p className="leading-relaxed text-zinc-700">{seo.living}</p>
        </section>
      )}

      {/* === B4: КАК ПОДГОТОВИТЬСЯ К ПОЕЗДКЕ === */}
      {seo && seo.preparation && (
        <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Как подготовиться к поездке
          </h2>
          <p className="leading-relaxed text-zinc-700">{seo.preparation}</p>
        </section>
      )}

      {/* === B4: КОМУ НЕ ПОДХОДИТ === */}
      {seo && seo.notFor.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">Кому не подходит</h2>
          <ul className="list-disc space-y-2 pl-6 text-zinc-700">
            {seo.notFor.map((n, idx) => (
              <li key={idx}>{n}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm italic text-zinc-600">
            Если что-то из перечисленного относится к вам, скажите об этом
            врачу на консультации — в большинстве случаев программа
            корректируется, а в ряде случаев врач честно откажет в
            назначении. Это лучше, чем потерять деньги и время.
          </p>
        </section>
      )}

      {/* === B4: ПОСЛЕ ВОЗВРАЩЕНИЯ === */}
      {seo && (
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            После возвращения: наблюдение
          </h2>
          <p className="leading-relaxed text-zinc-700">{seo.followUp}</p>
        </section>
      )}

      <div className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed">
        <strong>Важно:</strong> {PRICE_DISCLAIMER}
      </div>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">
          Обсудить эту программу
        </h2>
        <p className="mb-4 text-sm opacity-90">
          Напишите в WhatsApp или оставьте заявку — врач ответит и скажет,
          подходит ли вам эта программа.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Записаться
          </Link>
          <a
            href="https://wa.me/8613158954278"
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold hover:bg-emerald-600"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/programmy/"
          className="text-sm text-emerald-700 hover:underline"
        >
          ← Все программы
        </Link>
      </div>
    </main>
  );
}
