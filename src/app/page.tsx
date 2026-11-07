import Link from "next/link";
import type { Metadata } from "next";
import SmartImage from "@/components/SmartImage";
import { waDoctorMessage, waFaqMessage } from "@/data/contacts";
import { VRACHI } from "@/data/vrachi";

// --- FAQ главной страницы: реальные формулировки из Yandex Wordstat ---
// Вопрос = целевое ключевое слово, ответ = развёрнутая релевантная выжимка.
const FAQ_HOME = [
  {
    q: "Нужна ли виза на Хайнань для лечения в Китае?",
    a: "Да, для лечения на острове Хайнань россиянам нужна виза на Хайнань. Мы помогаем с оформлением: подсказываем нужный тип визы, готовим приглашение от санатория и записываем в консульство в Москве.",
  },
  {
    q: "Сколько стоит лечение в Китае и что входит в санаторную путёвку?",
    a: "Цена зависит от программы и длительности курса. В путёвку входят консультации врачей, диагностика по пульсу, процедуры, питание и проживание. Актуальный прайс-лист санатория ТАЙЦЗИ в Санья — на странице цен.",
  },
  {
    q: "Как проходит китайское иглоукалывание в санатории?",
    a: "Иглоукалывание проводят врачи с опытом более 40 лет: одноразовые металлические иглы вводятся в биологически активные точки по схеме, которую составляет врач после пульсовой диагностики. Курс назначается по рекомендации врача.",
  },
  {
    q: "Где находится санаторий ТАЙЦЗИ в Санья и как проходит трансфер?",
    a: "Санаторий ТАЙЦЗИ в Санья на Хайнане работает с 2007 года: четыре филиала в бухтах Дадунхай, Ялунвань, Саньябэй и Хайтанвань. Трансфер из аэропорта Санья-Феникс бесплатный, встречает русскоязычный координатор.",
  },
  {
    q: "Как проходит первый визит и бесплатная диагностика?",
    a: "В первый день врач проводит пульсовую диагностику, осмотр языка и подробный опрос. По результатам составляется индивидуальная программа лечения: процедуры, фитотерапия и график консультаций. Диагностика бесплатна и входит в санаторную путёвку.",
  },
];

export const metadata: Metadata = {
  // absolute: 首页不套用 layout 的 "| Санаторий ТАЙЦЗИ" 后缀，避免标题过长
  title: {
    absolute: "Санаторий ТАЙЦЗИ — традиционная китайская медицина в Санья",
  },
  description:
    "Санаторий ТАЙЦЗИ (fenix-sanyamed) в Санья, остров Хайнань: бесплатная диагностика и трансфер, иглоукалывание, массаж туйна, фитотерапия, женское здоровье. Врачи ТКМ с опытом от 40 лет, русскоязычный координатор.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/",
      "x-default": "https://www.fenix-sanyamed.com/",
      "zh-Hans": "https://www.fenix-sanyamed.com/zh/",
      en: "https://www.fenix-sanyamed.com/en/",
    },
  },
};

const PROGRAMS = [
  { slug: "normalizatsiya-vnutrennikh-organov", img: "/images/programs/program-1.jpg", title: "Нормализация работы внутренних органов", alt: "Программа нормализации работы внутренних органов — санаторий ТКМ fenix-sanyamed в Санья, Хайнань" },
  { slug: "vosstanovlenie-oporno-dvigatelnogo-apparata", img: "/images/programs/program-2.jpg", title: "Восстановление функций опорно-двигательного аппарата", alt: "Восстановление опорно-двигательного аппарата — лечение позвоночника и суставов в Санья, Хайнань" },
  { slug: "zhenskoe-zdorove", img: "/images/programs/program-3.jpg", title: "Восстановление женской мочеполовой системы", alt: "Программа восстановления женского здоровья — китайская медицина в Санья, Хайнань" },
  { slug: "antistress", img: "/images/programs/program-4.jpg", title: "Программа «Антистресс»", alt: "Программа Антистресс — традиционная китайская медицина на Хайнане" },
  { slug: "kardiologicheskaya-reabilitatsiya", img: "/images/programs/program-5.jpg", title: "Кардиологическая реабилитационная программа", alt: "Кардиологическая реабилитация в санатории ТКМ fenix-sanyamed, Санья, Хайнань" },
  { slug: "ochishchenie-i-snizhenie-vesa", img: "/images/programs/program-6.jpg", title: "Программа очищения и снижения веса", alt: "Программа очищения и снижения веса методами ТКМ в Санья, Хайнань" },
  { slug: "ukreplenie-organizma", img: "/images/programs/program-7.jpg", title: "Общее укрепление организма", alt: "Общее укрепление организма — санаторий традиционной китайской медицины в Санья" },
  { slug: "muzhskoe-zdorove", img: "/images/programs/program-8.jpg", title: "Восстановление мужской мочеполовой системы", alt: "Программа восстановления мужского здоровья — ТКМ в Санья, Хайнань" },
  { slug: "immunitet-i-pishchevarenie", img: "/images/programs/program-9.jpg", title: "Повышение иммунитета и улучшение пищеварения", alt: "Программа повышения иммунитета и улучшения пищеварения — санаторий в Санья, Хайнань" },
  { slug: "iskrivlenie-pozvonochnika", img: "/images/programs/program-10.jpg", title: "Коррекция искривлений позвоночника и улучшение осанки", alt: "Коррекция искривлений позвоночника и улучшение осанки — китайская медицина в Санья" },
];

export default function HomePage() {
  // FAQPage schema — Yandex/Google показывают вопрос-ответ прямо в выдаче.
  // Без разметки вопросы из FAQ не попадут в расширенные сниппеты.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_HOME.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div id="main" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* === HERO: 2025 迎新春晚会大合影（真实场景，原色） === */}
      <section className="hero-section relative mb-12 md:mb-16">
        <div className="relative h-[380px] sm:h-[450px] md:h-[600px]">
          <SmartImage
            src="/images/hero-taiji-2025-group.jpg"
            alt="Коллектив санатория ТАЙЦЗИ на праздновании 18-летия, Санья, Хайнань — традиционная китайская медицина"
            width={1600}
            height={600}
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* 文字区加半透明深蓝色块（设计稿同款）保证可读性 */}
          <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/85 via-[#0A1C2E]/40 to-[#0A1C2E]/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
            <h1 className="mb-4 max-w-3xl text-2xl font-bold text-white drop-shadow-lg sm:text-3xl md:mb-6 md:text-5xl">
              Санаторий ТАЙЦЗИ в Санья: лечение в Китае методами ТКМ
            </h1>
            <p className="mb-2 max-w-2xl text-base font-medium text-[#4FC3E8] drop-shadow-md sm:text-lg md:text-xl">
              Традиционная китайская медицина на острове Хайнань
            </p>
            <p className="mb-6 max-w-2xl text-sm text-white/90 drop-shadow-md sm:text-base md:mb-8">
              Бесплатная диагностика и трансфер из аэропорта Санья
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakty/" className="btn-tilda text-sm sm:text-base">
                Записаться на консультацию
              </Link>
              <Link
                href="/programmy/"
                className="inline-block rounded-full bg-[#1A3A5C] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#254B73] sm:px-10 sm:py-4 sm:text-sm"
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
            // title 带关键词锚文本（内链权重传递）：хайнань иглоукалывание（GSC 排名 7.0）
            { title: "Диагностика по пульсу", desc: "Измерение ЧСС и качества физиологических функций. Врач также осматривает язык, измеряет давление, исследует ушные раковины." },
            { title: "Иглоукалывание на Хайнане", slug: "/terapii/igloukalyvanie/", desc: "Воздействие на биологически активные точки специальными одноразовыми металлическими иглами. Применяется в составе индивидуальной программы, которую врач составляет по результатам диагностики." },
            { title: "Имплантация кетгута", desc: "Вживление специальной хирургической нити в биоактивные точки. Метод включается в программы снижения веса по решению врача и только после консультации." },
            { title: "Китайские целебные травы", slug: "/terapii/fitoterapiya/", desc: "Приём отваров из китайских трав. Врачи подбирают сбор индивидуально и пересматривают состав по ходу курса." },
            { title: "Иглонож", desc: "Метод работы с мышечными и фасциальными спайками. Применяется по назначению врача в составе программы." },
            { title: "Прижигание полынными сигарами", slug: "/terapii/mokso-terapiya/", desc: "Прогревание биологически активных зон полынными сигарами. Одна из техник традиционной китайской медицины, применяемая по назначению врача." },
          ].map((s) => (
            <div key={s.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="mb-3 text-lg font-bold">
                {s.slug ? (
                  <Link href={s.slug} className="hover:text-[var(--accent)]">{s.title}</Link>
                ) : (
                  s.title
                )}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === НОВОЕ (P1): Санья · Филиалы · Заболевания — вход с главной ===
          中文：新页入口，把首页权重传给 /sanya/ /filialy/ /bolezni/，
          同时直接承接 китайская медицина санья (527/月) 等大词。 */}
      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Лечение в Санья на Хайнане
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-700">
            Центр традиционной китайской медицины работает в четырёх бухтах
            Санья с 2007 года.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/sanya/" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]">
            <h3 className="mb-2 text-lg font-bold text-[var(--accent)]">Китайская медицина в Санья</h3>
            <p className="text-sm leading-relaxed text-zinc-700">
              Курорт, климат и как организовано лечение: от диагностики до
              программ реабилитации.
            </p>
          </Link>
          <Link href="/filialy/" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]">
            <h3 className="mb-2 text-lg font-bold text-[var(--accent)]">Наши филиалы — 4 бухты</h3>
            <p className="text-sm leading-relaxed text-zinc-700">
              Дадунхай, Ялунвань, Саньябэй и Хайтанвань — выберите бухту под
              ваш план поездки.
            </p>
          </Link>
          <Link href="/bolezni/" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]">
            <h3 className="mb-2 text-lg font-bold text-[var(--accent)]">Как лечат заболевания в Китае</h3>
            <p className="text-sm leading-relaxed text-zinc-700">
              Псориаз, остеохондроз, грыжа позвоночника, артроз, бессонница,
              реабилитация после инсульта и другие направления.
            </p>
          </Link>
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
        {/* 真实医生团队 — 照片来自 taiji-hainan.ru 官方医生卡片（3100×4134 高清裁切） */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { slug: "van-limin", img: "/images/doctors/van-limin.jpg", name: "Ван Лимин", position: "Главный врач · опыт 43 года", alt: "Ван Лимин (王利民) — главный врач, 43 года опыта, санаторий ТАЙЦЗИ в Санья" },
            { slug: "van-czunhay", img: "/images/doctors/van-czunhay.jpg", name: "Ван Цзюньхай", position: "Зам. главного врача · опыт 50 лет", alt: "Ван Цзюньхай (王均海) — заместитель главного врача, 50 лет опыта, Санья" },
            { slug: "sun-vensyue", img: "/images/doctors/sun-vensyue.jpg", name: "Сунь Вэнсюэ", position: "Зам. главного врача · опыт 40 лет", alt: "Сунь Вэнсюэ (孙文学) — заместитель главного врача, 40 лет опыта, Санья" },
            { slug: "uj-sihaj", img: "/images/doctors/uj-sihaj.jpg", name: "Юй Сихай", position: "Главный врач · 50 лет", alt: "Юй Сихай (于锡海) — главный врач, 50 лет опыта, санаторий ТАЙЦЗИ" },
          ].map((d) => (
            <div key={d.slug} className="doctor-card group">
              {/* 注意：4 位新医生的详情页数据（vrachi.ts）尚未录入，
                  因此卡片暂不做整卡链接，保留 WA 直连咨询入口。
                  详情页数据补齐后可恢复 Link 包裹。 */}
              <SmartImage
                src={d.img}
                alt={d.alt}
                width={400}
                height={400}
                className="doctor-photo"
              />
              <div className="p-4 text-center">
                <h3 className="mb-1 text-base font-bold">{d.name}</h3>
                <p className="mb-1 text-xs text-[var(--muted)]">{d.position}</p>
              </div>
              {/* Прямая связь с врачом через WhatsApp — с дышащим ореолом.
                  На мобильных 2-колоночная сетка: кнопка не должна выпирать,
                  поэтому размеры и отступы адаптивные. */}
              <div className="flex justify-center pb-4">
                <span className="wa-pulse">
                  <span className="wa-pulse__halo" aria-hidden="true" />
                  <a
                    href={waDoctorMessage(d.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-pulse__btn h-10 w-10"
                    aria-label={`Написать в WhatsApp: ${d.name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      aria-hidden="true"
                      fill="currentColor"
                      className="h-[18px] w-[18px]"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* SEO 优势区（设计稿同款 6 卡，承接 P1 关键词） */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Государственная лицензия", d: "Медицинский центр работает с 2007 года — подтверждённый санаторий в Китае, а не частный кабинет." },
            { t: "4 филиала в Санья", d: "Дадунхай, Ялунвань, Саньябэй и Хайтанвань — в пешей доступности от пляжа и аэропорта." },
            { t: "Китайское иглоукалывание", d: "Иглонож, кетгут, прижигание полынными сигарами и фитотерапия подбираются врачом индивидуально." },
            { t: "Русскоязычный координатор", d: "Ведём вас от заявки до выписки: виза на Хайнань, трансфер, проживание — на русском языке." },
            { t: "Прозрачные цены", d: "Прайс-лист и санаторные путёвки в открытом доступе. Бесплатная первичная диагностика и трансфер." },
            { t: "Отзывы пациентов", d: "Реальные отзывы о лечении в Китае и санатории Тайцзи — что говорят пациенты о результатах." },
          ].map((a) => (
            <div key={a.t} className="rounded-2xl bg-[var(--surface-alt)] p-6">
              <h3 className="mb-2 text-lg font-bold text-[var(--accent)]">{a.t}</h3>
              <p className="text-sm leading-relaxed text-zinc-700">{a.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/vrachi/" className="btn-tilda-secondary">
            Все врачи
          </Link>
        </div>
        {/* Каталог профилей: 8 врачей с подробными страницами.
            Раньше эти страницы были «островами» (без внутренних ссылок),
            из-за чего 7 из 8 не попали в индекс Google. */}
        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-2 text-center sm:grid-cols-2">
          {VRACHI.map((v) => (
            <li key={v.slug} className="text-sm">
              <Link
                href={`/vrachi/${v.slug}/`}
                className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
              >
                {v.nameRu}
              </Link>
              <span className="text-zinc-500">
                {" "}— {v.position}, {v.experienceYears} лет
              </span>
            </li>
          ))}
        </ul>
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
              городе Санья — бухты Дадунхай, Ялунвань, Саньябэй и Хайтанвань.
            </p>
            <p>
              В центре работает команда высококлассных специалистов, в том
              числе ряд известных в Китае профессоров и врачей-ветеранов с
              опытом более 40 лет клинической работы.
            </p>
            <p>
              Специалисты владеют традиционными методиками диагностики,
              лечения и реабилитации, а также сочетают эти методы
              с современными технологиями в области медицины.
            </p>
          </div>
        </div>
      </section>

      {/* === FAQ: частые вопросы (реальные формулировки из Yandex Wordstat) ===
          Каждый ответ — с кнопкой WhatsApp, в сообщение подставляется
          сам вопрос, чтобы пациенту не приходилось его переписывать. */}
      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
            Частые вопросы о лечении в Китае
          </h2>
          <p className="mb-8 text-center text-base text-zinc-700">
            Санаторий ТАЙЦЗИ в Санья — лечение на Хайнане для русских
            туристов с 2007 года
          </p>
          <div className="space-y-3">
            {FAQ_HOME.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-[var(--border)] bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold text-[var(--foreground)]">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                  {f.a}
                </p>
                <div className="mt-4">
                  <span className="wa-pulse">
                    <span className="wa-pulse__halo" aria-hidden="true" />
                    <a
                      href={waFaqMessage(f.q)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-pulse__btn h-11 gap-2 px-4 text-sm"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        aria-hidden="true"
                        fill="currentColor"
                        className="h-[18px] w-[18px]"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z" />
                      </svg>
                      <span>Задать вопрос в WhatsApp</span>
                    </a>
                  </span>
                </div>
              </details>
            ))}
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