import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Процедуры традиционной китайской медицины",
  description:
    "Семь процедур традиционной китайской медицины в санатории ТАЙЦЗИ: иглоукалывание, массаж Туйна, фитотерапия, моксотерапия, вакуум-терапия, Гуаша и консультация с пульсовой диагностикой.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/terapii/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/terapii/",
      "x-default": "https://www.fenix-sanyamed.com/terapii/",
      en: "https://www.fenix-sanyamed.com/en/terapii/",
    },
  },
};

const THERAPIES = [
  {
    slug: "igloukalyvanie",
    title: "Иглоукалывание",
    subtitle: "Акупунктура · Рефлексотерапия",
    description:
      "Древнейший метод воздействия на биологически активные точки тела. Более 2000 лет истории.",
    emphasis: "Самая известная русским гостям процедура ТКМ.",
  },
  {
    slug: "tuyna",
    title: "Массаж Туйна",
    subtitle: "Терапевтический массаж",
    description:
      "Давление, растирание, вибрация. Работа с меридианами без проникновения через кожу. Мягко и глубоко.",
    emphasis: "Близок к русской массажной традиции, низкий порог входа.",
  },
  {
    slug: "fitoterapiya",
    title: "Фитотерапия",
    subtitle: "Китайские травы",
    description:
      "Индивидуальные сборы из 300+ натуральных компонентов. Готовим ежедневно. Можно заказать с собой.",
    emphasis: "Перекликается с русской народной традицией травничества.",
  },
  {
    slug: "vakuum-terapiya",
    title: "Вакуум-терапия",
    subtitle: "Лечебные банки",
    description:
      "Современные силиконовые банки с вакуумным насосом. Без огня. Мягкое и безопасное воздействие.",
    emphasis: "Знакомый метод в новом безопасном исполнении.",
  },
  {
    slug: "guasha",
    title: "Гуаша",
    subtitle: "Скребковый массаж",
    description:
      "Нефритовый скребок с маслом. Лицо и тело. Популярно у русских гостей 25–45 лет.",
    emphasis: "Тренд в wellness-индустрии 2023–2026.",
  },
  {
    slug: "mokso-terapiya",
    title: "Моксотерапия",
    subtitle: "Прижигание полынными сигаретами",
    description:
      "Прогревание биологически активных зон полынной сигарой по назначению врача. Улучшает кровообращение, снимает мышечный спазм.",
    emphasis: "Входит в программы восстановления иммунитета.",
  },
  {
    slug: "konsultaciya",
    title: "Консультация врача ТКМ",
    subtitle: "Пульсовая диагностика",
    description:
      "Первичная консультация: пульсовая диагностика, осмотр языка, анализ истории болезни и подбор индивидуальной программы лечения.",
    emphasis: "Бесплатно для иностранных пациентов при записи на программу.",
  },
];

export default function TerapiiPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Процедуры
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Пять направлений традиционной китайской медицины</h1>
        <span className="gold-line mx-auto my-6 block" />
        <p className="font-serif text-lg italic text-zinc-600">
          Более 5000 лет истории. Программа подбирается индивидуально после
          пульсовой диагностики.
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === 5 ТЕРАПИЙ === */}
      <section className="mx-auto max-w-5xl space-y-8">
        {THERAPIES.map((t, idx) => (
          <Link
            key={t.slug}
            href={`/terapii/${t.slug}/`}
            className="card-luxury group block"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-1">
                <span className="font-display text-5xl text-[var(--secondary-dark)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="md:col-span-11">
                <h3 className="mb-2">{t.title}</h3>
                <p className="mb-4 font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]">
                  {t.subtitle}
                </p>
                <span className="gold-line mb-4 block" />
                <p className="mb-4 font-serif text-lg leading-relaxed text-zinc-700">
                  {t.description}
                </p>
                <p className="mb-4 font-serif text-sm italic text-zinc-500">
                  {t.emphasis}
                </p>
                <span className="font-ui text-xs uppercase tracking-luxury text-[var(--primary)] group-hover:text-[var(--primary-dark)]">
                  Подробнее о процедуре →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <div className="mx-auto my-20 max-w-md">
        <div className="divider-double" />
      </div>

      <section className="mx-auto max-w-2xl text-center">
        <p className="hero-eyebrow mb-4">Важно</p>
        <p className="font-serif italic leading-relaxed text-zinc-700">
          Индивидуальные результаты лечения могут отличаться. По отзывам
          пациентов, многие отмечают улучшение самочувствия.
        </p>
        <div className="mt-8">
          <Link href="/kontakty/" className="btn-luxury">
            Получить консультацию
          </Link>
        </div>
      </section>
    </main>
  );
}