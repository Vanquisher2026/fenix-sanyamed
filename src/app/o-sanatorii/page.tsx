import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О санатории ТАЙЦЗИ в Санья — история, лицензии, 4 филиала на Хайнане",
  description:
    "Медицинский центр традиционной китайской медицины в городе Санья. История, философия, государственная лицензия.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/o-sanatorii/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/o-sanatorii/",
      "x-default": "https://www.fenix-sanyamed.com/o-sanatorii/",
      en: "https://www.fenix-sanyamed.com/en/o-sanatorii/",
    },
  },
};

export default function OSanatoriiPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          О нас
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">
          О санатории ТАЙЦЗИ в Санья
        </h1>
        <p className="font-serif text-lg italic text-zinc-600">
          Основано в 2007 году в городе Санья, остров Хайнань
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === ОСНОВНОЙ ТЕКСТ === */}
      <section className="mx-auto max-w-3xl">
        <div className="drop-cap mb-12">
          <p className="mb-6 font-serif text-lg leading-relaxed text-zinc-800">
            Медицинский центр <strong>fenix-sanyamed</strong> — центр
            традиционной китайской медицины на тропическом острове Хайнань.
            Имеет государственную лицензию на осуществление медицинской
            деятельности.
          </p>

          <p className="mb-6 font-serif text-lg leading-relaxed text-zinc-800">
            Наша филиальная сеть работает в четырёх бухтах города Санья —
            Дадунхай, Ялунвань, Саньяван и Саньябэй. Это позволяет гостям
            выбрать наиболее удобную локацию рядом с отелями и пляжами.
          </p>

          <p className="mb-6 font-serif text-lg leading-relaxed text-zinc-800">
            В центре работает команда высококлассных специалистов — профессоров,
            докторов наук, врачей-ветеранов с клиническим опытом более 40 лет.
            Многие из них — известные в Китае специалисты, в том числе с опытом
            работы в военных госпиталях.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-800">
            Мы работаем в философии целостного подхода:
            <em> лечим не болезнь, а человека</em>. Каждый гость получает
            индивидуальную программу, составленную врачом после пульсовой
            диагностики и подробной беседы.
          </p>
        </div>
      </section>

      {/* === ПРЕИМУЩЕСТВА === */}
      <section className="mx-auto max-w-5xl py-16">
        <div className="mb-12 text-center">
          <p className="hero-eyebrow mb-4">Преимущества</p>
          <h2>Что мы предлагаем</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-3">Государственная лицензия</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              Медицинский центр имеет государственную лицензию на оказание
              услуг в области традиционной китайской медицины. Лучшие врачи,
              ежегодно проходящие повышение квалификации.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Опытные врачи</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              Команда врачей с клиническим опытом от 20 до 40+ лет. Профессора,
              доктора наук, выпускники ведущих китайских университетов ТКМ —
              Шанхайского, Хэйлунцзянского, Гуанчжоуского, Хунаньского.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Четыре филиала в Санья</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              Филиалы в бухтах Дадунхай, Ялунвань, Саньяван и Саньябэй. Вы
              можете выбрать локацию, наиболее удобную для вашего проживания.
            </p>
          </div>

          <div>
            <h3 className="mb-3">Целостный подход</h3>
            <span className="gold-line mb-3 block" />
            <p className="font-serif leading-relaxed text-zinc-700">
              Уже на первом приёме, после сбора анамнеза и осмотра, наши
              специалисты формулируют индивидуальный план лечения. Китайская
              традиционная медицина проверена тысячелетиями.
            </p>
          </div>
        </div>
      </section>

      {/* === DISCLAIMER === */}
      <section className="mx-auto max-w-3xl rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] p-8 text-center">
        <p className="mb-3 font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]">
          Наш подход
        </p>
        <p className="font-serif italic leading-relaxed text-zinc-700">
          Индивидуальные результаты лечения могут отличаться. Мы не обещаем
          «излечения» конкретных заболеваний. Наш подход — информировать
          честно и лечить индивидуально.
        </p>
      </section>

      <div className="mt-16 text-center">
        <Link href="/kontakty/" className="btn-luxury">
          Связаться с нами
        </Link>
      </div>
    </main>
  );
}