import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Медицинский центр fenix-sanyamed | Лечение в Санья, Хайнань",
  description:
    "Бесплатная диагностика и трансфер • Китайская традиционная медицина • Иглоукалывание • Лечебный массаж • Женское здоровье • Фитотерапия. Опытные врачи в Санья.",
};

const PROGRAMS = [
  { slug: "normalizatsiya-vnutrennikh-organov", img: "/images/programma-1-normalizatsiya-vnutrennikh-organov.png", title: "Нормализация работы внутренних органов", alt: "Программа нормализации работы внутренних органов — санаторий ТКМ fenix-sanyamed в Санья, Хайнань" },
  { slug: "vosstanovlenie-oporno-dvigatelnogo-apparata", img: "/images/programma-2-vosstanovlenie-oporno-dvigatelnogo-apparata.png", title: "Восстановление функций опорно-двигательного аппарата", alt: "Восстановление опорно-двигательного аппарата — лечение позвоночника и суставов в Санья, Хайнань" },
  { slug: "zhenskoe-zdorove", img: "/images/programma-3-zhenskoe-zdorove-vosstanovlenie.png", title: "Восстановление женской мочеполовой системы", alt: "Программа восстановления женского здоровья — китайская медицина в Санья, Хайнань" },
  { slug: "antistress", img: "/images/programma-4-antistress-sanya.png", title: "Программа «Антистресс»", alt: "Программа Антистресс — традиционная китайская медицина на Хайнане" },
  { slug: "kardiologicheskaya-reabilitatsiya", img: "/images/programma-5-kardiologicheskaya-reabilitatsiya.png", title: "Кардиологическая реабилитационная программа", alt: "Кардиологическая реабилитация в санатории ТКМ fenix-sanyamed, Санья, Хайнань" },
  { slug: "ochishchenie-i-snizhenie-vesa", img: "/images/programma-6-ochishchenie-i-snizhenie-vesa.png", title: "Программа очищения и снижения веса", alt: "Программа очищения и снижения веса методами ТКМ в Санья, Хайнань" },
  { slug: "obshchee-ukreplenie", img: "/images/programma-7-obshchee-ukreplenie-organizma.png", title: "Общее укрепление организма", alt: "Общее укрепление организма — санаторий традиционной китайской медицины в Санья" },
  { slug: "muzhskoe-zdorove", img: "/images/programma-8-muzhskoe-zdorove-vosstanovlenie.png", title: "Восстановление мужской мочеполовой системы", alt: "Программа восстановления мужского здоровья — ТКМ в Санья, Хайнань" },
  { slug: "immunitet-i-pishchevarenie", img: "/images/programma-9-immunitet-i-pishchevarenie.png", title: "Повышение иммунитета и улучшение пищеварения", alt: "Программа повышения иммунитета и улучшения пищеварения — санаторий в Санья, Хайнань" },
  { slug: "korrektsiya-pozvonochnika", img: "/images/programma-10-korrektsiya-pozvonochnika-osanka.png", title: "Коррекция искривлений позвоночника и улучшение осанки", alt: "Коррекция искривлений позвоночника и улучшение осанки — китайская медицина в Санья" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* === HERO === */}
      <section className="hero-section relative mb-12 md:mb-16">
        <div className="relative h-[380px] sm:h-[450px] md:h-[600px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-sanatoriy-tcm-fenix-sanyamed-sanya-khainan.jpeg"
            alt="Медицинский центр fenix-sanyamed — традиционная китайская медицина в Санья, Хайнань"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
            <h1 className="mb-4 max-w-3xl text-2xl font-bold text-white sm:text-3xl md:mb-6 md:text-5xl">
              Медицинский центр
              <br />
              <span className="text-[var(--primary-soft)]">fenix-sanyamed</span>
            </h1>
            <p className="mb-2 max-w-2xl text-base font-medium text-white/95 sm:text-lg md:mb-2 md:text-xl">
              Бесплатная диагностика и трансфер
            </p>
            <p className="mb-6 max-w-2xl text-sm text-white/85 sm:text-base md:mb-8">
              Китайская традиционная медицина · Иглоукалывание · Лечебный
              массаж · Женское здоровье · Фитотерапия
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakty/" className="btn-tilda text-sm sm:text-base">
                Записаться на консультацию
              </Link>
              <Link
                href="/programmy/"
                className="inline-block rounded-full border-2 border-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[var(--primary)] sm:px-10 sm:py-4 sm:text-sm"
              >
                Все программы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === 10 ПРОГРАММ === */}
      <section className="section-padding">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Лечебные программы
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-700">
            10 направлений традиционной китайской медицины. Каждая программа
            подбирается индивидуально на основании пульсовой диагностики.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PROGRAMS.map((p) => (
            <Link
              key={p.slug}
              href={`/programmy/${p.slug}/`}
              className="card-tilda"
              style={{ backgroundImage: `url(${p.img})` }}
              aria-label={p.alt}
              title={p.title}
            >
              <div className="card-tilda-overlay" />
              <div className="card-tilda-content">
                <h3>{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* === УСЛУГИ === */}
      <section className="section-padding">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Описание услуг
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Диагностика по пульсу", desc: "Измерение ЧСС и качества физиологических функций. Врач также осматривает язык, измеряет давление, исследует ушные раковины." },
            { title: "Иглотерапия", desc: "Воздействие на биологически активные точки специальными одноразовыми металлическими иглами. Способствует общему укреплению организма." },
            { title: "Имплантация кетгута", desc: "Безболезненное вживление специальной хирургической нити в биоактивные точки. Особенно эффективно в комплексной терапии снижения веса." },
            { title: "Китайские целебные травы", desc: "Фитотерапия восстанавливает общий баланс в организме. Наши врачи подбирают индивидуальные сборы." },
            { title: "Иглонож", desc: "Кожное введение иглоножа или рассечение спаек. Снимает поражение в костях, суставах, мышцах." },
            { title: "Прижигание полынными сигарами", desc: "Прогревание биологически активных зон полынными сигарами. Эффективно при простуде и болезненных менструациях." },
          ].map((s) => (
            <div key={s.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === ВРАЧИ === */}
      <section className="section-padding">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Наши врачи</h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-700">
            Профессионалы традиционной китайской медицины с опытом работы
            более 40 лет
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { slug: "li-yun-fan", img: "/images/doctor-li-yun-fan-glavnyy-vrach-shanghai-tcm.png", name: "Ли Юн Фан", alt: "Ли Юн Фан — главный врач санатория fenix-sanyamed в Санья, Хайнань" },
            { slug: "chzhan-li-in", img: "/images/doctor-chzhan-li-in-direktor-khailuntszyan-tcm.jpg", name: "Чжан Ли Ин", alt: "Чжан Ли Ин — директор медицинского центра fenix-sanyamed в Санья" },
            { slug: "yao-dun-yuan", img: "/images/doctor-yao-dun-yuan-khubejskij-tcm.jpg", name: "Яо Дун Юань", alt: "Яо Дун Юань — врач традиционной китайской медицины в Санья, Хайнань" },
            { slug: "se-li-tsyun", img: "/images/doctor-se-li-tsyun-khunanskij-tcm.jpg", name: "Се Ли Цюнь", alt: "Се Ли Цюнь — врач ТКМ в медицинском центре fenix-sanyamed, Санья" },
          ].map((d) => (
            <Link
              key={d.slug}
              href={`/vrachi/${d.slug}/`}
              className="doctor-card group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.alt} className="doctor-photo" />
              <div className="p-4 text-center">
                <h3 className="mb-1 text-base font-bold">{d.name}</h3>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Подробнее →
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/vrachi/" className="btn-tilda-secondary">
            Все врачи
          </Link>
        </div>
      </section>

      {/* === О НАС === */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[var(--surface)] p-8 md:p-12">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">О нас</h2>
          <div className="space-y-4 text-base leading-relaxed text-zinc-700">
            <p>
              <strong>Медицинский центр «fenix-sanyamed»</strong> основан в
              2007 году, имеет государственную лицензию на оказание услуг в
              области традиционной китайской медицины.
            </p>
            <p>
              Центр имеет филиальную сеть. Четыре филиала представлены в
              городе Санья — бухтах Дадунхай, Ялунбэй и Саньябэй.
            </p>
            <p>
              В центре работает команда высококлассных специалистов, в том
              числе ряд известных в Китае профессоров и врачей-ветеранов с
              опытом более 40 лет клинической работы.
            </p>
            <p>
              Специалисты владеют традиционными методиками диагностики,
              лечения и реабилитации, а также эффективно сочетают эти методы
              с современными технологиями в области медицины.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="section-padding">
        <div className="rounded-3xl bg-[var(--primary)] px-8 py-12 text-center text-white md:px-16 md:py-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Запишитесь на консультацию
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Бесплатная первичная диагностика. Трансфер из аэропорта.
            Русскоязычный координатор.
          </p>
          <Link href="/kontakty/" className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-wider text-[var(--primary)] transition hover:bg-zinc-100">
            Связаться с нами
          </Link>
        </div>
      </section>

      {/* === DISCLAIMER === */}
      <section className="py-8">
        <div className="disclaimer mx-auto max-w-3xl text-center">
          <p>
            <strong>Важно:</strong> Индивидуальные результаты лечения могут
            отличаться. Программа всегда подбирается врачом индивидуально на
            основании пульсовой диагностики. По отзывам пациентов, многие
            отмечают улучшение самочувствия.
          </p>
        </div>
      </section>
    </div>
  );
}