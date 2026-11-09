import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { waDoctorMessage } from "@/data/contacts";
import { VRACHI } from "@/data/vrachi";

// 4 врача санатория — реальные специалисты (фото и данные taiji-hainan.ru)
const REAL_DOCTORS = [
  { slug: "van-limin", img: "/images/doctors/van-limin.jpg", name: "Ван Лимин", nameCn: "王利民", position: "Главный врач", exp: "опыт 43 года", spec: "Иглоукалывание, моксотерапия, фитотерапия; ортопедия и реабилитация", alt: "Ван Лимин (王利民) — главный врач санатория ТАЙЦЗИ в Санья, опыт 43 года" },
  { slug: "van-czunhay", img: "/images/doctors/van-czunhay.jpg", name: "Ван Цзюньхай", nameCn: "王均海", position: "Заместитель главного врача", exp: "опыт 50 лет", spec: "Терапия внутренних органов, гастроскопия, программы очищения", alt: "Ван Цзюньхай (王均海) — заместитель главного врача, опыт 50 лет, Санья" },
  { slug: "sun-vensyue", img: "/images/doctors/sun-vensyue.jpg", name: "Сунь Вэнсюэ", nameCn: "孙文学", position: "Заместитель главного врача", exp: "опыт 40 лет", spec: "Пульсовая диагностика, акупунктура, программы женского здоровья", alt: "Сунь Вэнсюэ (孙文学) — заместитель главного врача, опыт 40 лет, Санья" },
  { slug: "uj-sihaj", img: "/images/doctors/uj-sihaj.jpg", name: "Юй Сихай", nameCn: "于锡海", position: "Главный врач филиала", exp: "опыт 50 лет", spec: "Китайский точечный массаж, иглонож, позвоночник и суставы", alt: "Юй Сихай (于锡海) — главный врач филиала санатория ТАЙЦЗИ, опыт 50 лет" },
];

export const metadata: Metadata = {
  // Wordstat: «врачи ткм в санья», «китайский врач иглоукалывание»
  title: "Врачи ТКМ в Санья — китайские врачи санатория ТАЙЦЗИ (Хайнань)",
  description:
    "Врачи традиционной китайской медицины в Санья: главные врачи с опытом 40–50 лет, выпускники ведущих университетов ТКМ Китая. Иглоукалывание, массаж туйна, фитотерапия. Запись на приём к врачу в санатории ТАЙЦЗИ на Хайнане.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/vrachi/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/vrachi/",
      "x-default": "https://www.fenix-sanyamed.com/vrachi/",
      en: "https://www.fenix-sanyamed.com/en/vrachi/",
    },
  },
};

export default function VrachiPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Врачи
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Врачи ТКМ в Санья — команда санатория ТАЙЦЗИ</h1>
        <span className="gold-line mx-auto my-6 block" />
        <p className="font-serif text-lg italic text-zinc-600">
          Главные врачи и их заместители с клиническим опытом 40–50 лет.
          Выпускники Хэйлунцзянского, Шанхайского и Чанчуньского
          университетов традиционной китайской медицины.
        </p>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === 4 ВРАЧА (реальные, с фото) === */}
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REAL_DOCTORS.map((v) => (
            <div key={v.slug} className="card-luxury group text-center">
              {/* Фото врача */}
              <div className="mx-auto mb-4 h-56 w-56 overflow-hidden rounded-full border-4 border-[var(--surface-alt)] shadow-lg sm:h-48 sm:w-48">
                <SmartImage
                  src={v.img}
                  alt={v.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg">{v.name}</h3>
              <p className="mb-1 font-ui text-xs uppercase tracking-luxury text-zinc-500">
                {v.nameCn} · {v.exp}
              </p>
              <span className="gold-line mx-auto mb-3 block" />
              <p className="mb-2 font-serif text-base italic text-[var(--primary)]">
                {v.position}
              </p>
              <p className="mb-4 font-serif text-sm leading-relaxed text-zinc-700">
                {v.spec}
              </p>
              {/* Прямая связь с врачом через WhatsApp */}
              <div className="mb-2 flex flex-wrap items-center justify-center gap-3">
                <span className="wa-pulse">
                  <span className="wa-pulse__halo" aria-hidden="true" />
                  <a
                    href={waDoctorMessage(v.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-pulse__btn h-11 w-11"
                    aria-label={`Написать в WhatsApp: ${v.name}`}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z" />
                    </svg>
                  </a>
                </span>
                <span className="font-ui text-xs uppercase tracking-luxury text-zinc-500">
                  Записаться
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Доверие: краткая сводка */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-[var(--surface-alt)] p-6 text-center">
          <p className="font-serif italic leading-relaxed text-zinc-700">
            Все врачи принимают в филиалах санатория ТАЙЦЗИ в бухтах Дадунхай
            и Ялунвань. На каждом приёме присутствует русскоязычный
            медицинский переводчик — это входит в стоимость программы.
          </p>
        </div>

        {/* === Каталог профилей: 8 врачей с подробными страницами ===
            Эти страницы раньше были «островами» (на них не вела ни одна
            внутренняя ссылка) — из-за этого 7 из 8 не попали в индекс
            Google. Каталог ниже даёт каждой странице внутренний ссылочный
            вес с правильным анкором. */}
        <div className="mx-auto mt-12 max-w-3xl">
          <h2 className="mb-4 text-center text-xl">
            Профили врачей — подробно об образовании и опыте
          </h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[...VRACHI].sort((a, b) => (a.status === "archive" ? 1 : 0) - (b.status === "archive" ? 1 : 0)).map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/vrachi/${v.slug}/`}
                  className="font-serif text-base text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  {v.nameRu} ({v.nameCn})
                </Link>
                <span className="text-sm text-zinc-500">
                  {" "}— {v.position}, опыт {v.experienceYears} лет{v.status === "archive" ? " · ранее работал в центре" : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* Старый список из 10 врачей заменён на актуальную четвёрку выше */}

      <section className="mx-auto max-w-2xl text-center">
        <p className="hero-eyebrow mb-4">Важно</p>
        <p className="font-serif italic leading-relaxed text-zinc-700">
          Индивидуальные результаты лечения могут отличаться. Программа
          всегда подбирается врачом индивидуально на основании пульсовой
          диагностики.
        </p>
        <div className="mt-8">
          <Link href="/kontakty/" className="btn-luxury">
            Записаться на приём
          </Link>
        </div>
      </section>
    </main>
  );
}