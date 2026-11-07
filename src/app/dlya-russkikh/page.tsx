import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema } from "@/components/BlogSchema";

/**
 * /dlya-russkikh —专题总览页
 *
 * Эта страница — главная входная точка для русскоязычных пациентов.
 * Структура и формулировки заточены под типичные запросы Яндекса:
 *   «лечение в китае для русских», «ткм для русских», «санаторий
 *   хайнань для русских», «китайская медицина русские пациенты».
 *
 * Страница служит «hub» — собирает линками все остальные разделы
 * и блог-статьи, повышая внутренний link equity и тематический
 * сигнал для Yandex/Google multiregional ranking.
 */
export const metadata: Metadata = {
  title: "Санаторий ТАЙЦЗИ — лечение ТКМ на Хайнане для русских",
  description:
    "Санаторий традиционной китайской медицины на острове Хайнань (Санья) для русскоязычных пациентов: иглоукалывание, массаж Туйна, фитотерапия. Безвизовый въезд до 30 дней, русскоязычный переводчик, трансфер из аэропорта.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/dlya-russkikh/",
  },
  keywords: [
    "китайская медицина для русских",
    "лечение в китае для русских",
    "ткм хайнань русские",
    "санаторий китай русские",
    "лечение в китае на хайнане русским",
    "китайская медицина санья русские",
    "иглоукалывание для русских",
    "ткm для русскоязычных",
    "медицинский туризм китай россия",
    "лечение суставов в китае для русских",
  ],
  openGraph: {
    title: "Санаторий ТАЙЦЗИ — лечение ТКМ на Хайнане для русских",
    description:
      "Традиционная китайская медицина на Хайнане для русскоязычных пациентов. Безвизовый въезд, переводчик, программа подбирается врачом индивидуально.",
    url: "https://www.fenix-sanyamed.com/dlya-russkikh/",
    type: "article",
    locale: "ru_RU",
    images: [
      {
        url: "https://www.fenix-sanyamed.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// Целевая аудитория для Audience schema
const AUDIENCE = "Russian-speaking patients from Russia, Belarus, Kazakhstan, Ukraine who are looking for traditional Chinese medicine treatment in Sanya, Hainan, China.";

const PAGE_FAQ = [
  {
    q: "Нужна ли виза на Хайнань для россиян?",
    a: "Нет. Для граждан России действует безвизовый въезд на Хайнань сроком до 30 дней. Для поездки нужен загранпаспорт со сроком действия не менее 6 месяцев и обратный билет.",
  },
  {
    q: "Есть ли в санатории русскоязычный персонал?",
    a: "Да. На все приёмы с пациентом ходит русскоязычный медицинский переводчик. Стоимость переводчика уже входит в программу — отдельной доплаты нет.",
  },
  {
    q: "Сколько стоит лечение в Китае?",
    a: "Один сеанс иглоукалывания или массажа Туйна — 150–450 юаней. Программа на 7 дней — от 8 000 ¥, на 14 дней — от 15 000 ¥. Проживание и перелёт оплачиваются отдельно. Подробные цены — на странице /czeny/.",
  },
  {
    q: "Как попасть к вам на лечение?",
    a: "Напишите в WhatsApp или Telegram на номер +86 131 5895 4278 — координатор проведёт бесплатную первичную консультацию и подберёт программу. Консультация бесплатная.",
  },
  {
    q: "Какие программы лечения доступны?",
    a: "Иглоукалывание, массаж Туйна, фитотерапия, моксотерапия, вакуум-терапия, Гуаша. Программы подбираются врачом индивидуально после пульсовой диагностики. Полный список — на /programmy/.",
  },
  {
    q: "Где находится санаторий?",
    a: "Санаторий расположен в городе Санья на острове Хайнань (Китай), в бухтах Дадунхай, Ялунвань и Саньяван. Трансфер из аэропорта Санья Феникс входит в стоимость.",
  },
  {
    q: "Можно ли оплачивать российскими картами?",
    a: "Принимаются наличные юани, WeChat Pay, Alipay, UnionPay. Карты российских банков работают в Санья ограниченно — мы заранее подскажем актуальный способ оплаты.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PAGE_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const audienceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Лечение ТКМ для русскоязычных пациентов",
  serviceType: "Traditional Chinese Medicine for Russian-speaking patients",
  provider: { "@id": "https://www.fenix-sanyamed.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "Россия" },
    { "@type": "Country", name: "Беларусь" },
    { "@type": "Country", name: "Казахстан" },
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.fenix-sanyamed.com/dlya-russkikh/",
    availableLanguage: ["Russian"],
  },
  audience: {
    "@type": "PeopleAudience",
    name: "Russian-speaking patients",
    geographicArea: { "@type": "Country", name: "Россия" },
    description: AUDIENCE,
  },
};

export default function DlyaRusskikhPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(audienceSchema) }}
      />
      <BlogSchema
        title="Санаторий ТАЙЦЗИ — лечение ТКМ на Хайнане для русских"
        description="Санаторий традиционной китайской медицины в Санья для русскоязычных пациентов: безвиз, переводчик, программа подбирается врачом индивидуально."
        url="https://www.fenix-sanyamed.com/dlya-russkikh/"
        datePublished="2026-10-17"
        dateModified="2026-10-17"
        keywords={["китайская медицина для русских", "Хайнань русским", "санаторий ТАЙЦЗИ"]}
      />

      <nav className="mb-6 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">Главная</Link>
        <span className="mx-2">/</span>
        <span>Для русских пациентов</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">Обновлено: 2026-10-17</p>
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
        Лечение ТКМ на Хайнане для русскоязычных пациентов
      </h1>

      {/* Прямой ответ — для AI-поиска и сниппета */}
      <p className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed sm:text-lg">
        <strong>Санаторий ТАЙЦЗИ</strong> (fenix-sanyamed) — медицинский центр
        традиционной китайской медицины в городе <strong>Санья, остров
        Хайнань, Китай</strong>, с 2007 года. Принимаем русскоязычных пациентов
        из России, Беларуси и Казахстана. Безвизовый въезд на Хайнань до 30
        дней, русскоязычный медицинский переводчик входит в стоимость,
        первичная консультация с пульсовой диагностикой — бесплатно.
        <Link href="/kontakty/" className="ml-2 text-emerald-700 underline">
          Записаться →
        </Link>
      </p>

      {/* 5 причин */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">5 причин выбрать нас</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              title: "Работаем с 2007 года",
              body: "Государственная лицензия КНР. Врачи с опытом более 40 лет, профильное китайское образование. По данным TASS, в 2025 году наши коллеги в Санья приняли более 10 700 иностранных пациентов.",
            },
            {
              title: "Безвизовый въезд для граждан РФ",
              body: "До 30 дней пребывания на Хайнане без визы. Прямые рейсы в Санья из 14 городов России, время в пути ~9 часов. Трансфер из аэропорта бесплатный.",
            },
            {
              title: "Русскоязычный переводчик",
              body: "Переводчик сопровождает все приёмы и входит в стоимость программы. Доплата за русский язык не взимается.",
            },
            {
              title: "Программа подбирается индивидуально",
              body: "Сначала — бесплатная консультация и пульсовая диагностика. Врач составляет план лечения под конкретного пациента. Стоимость называется до начала лечения.",
            },
            {
              title: "Тропический климат круглый год",
              body: "Средняя температура января в Санья — +21 °C. Купальный сезон длится круглый год. Это не Сочи: море тёплое даже зимой.",
            },
            {
              title: "Понятные цены",
              body: "Сеанс — 150–450 юаней. Программа на 14 дней — от 15 000 ¥. Проживание и перелёт оплачиваются отдельно. Полный бюджет 14 дней обычно 30 000–55 000 ¥.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-zinc-200 p-4"
            >
              <h3 className="mb-2 text-lg font-semibold text-emerald-800">
                {c.title}
              </h3>
              <p className="text-sm text-zinc-700">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Путь от заявки до лечения */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Как попасть к нам на лечение
        </h2>
        <ol className="list-decimal space-y-3 pl-6 text-zinc-700">
          <li>
            <strong>Заявка в WhatsApp</strong> — напишите на номер +86 131
            5895 4278. Координатор ответит в течение 24 часов.
          </li>
          <li>
            <strong>Бесплатная консультация</strong> — врач уточняет жалобы и
            противопоказания, предлагает программу, называет стоимость.
          </li>
          <li>
            <strong>Авиабилеты и виза</strong> — гражданам РФ виза не нужна.
            Прямые рейсы из Москвы и Санкт-Петербурга идут около 9 часов.
            Подробнее —{" "}
            <Link href="/blog/visa-khainan-2026/" className="text-emerald-700 hover:underline">
              в нашей статье о визе
            </Link>
            .
          </li>
          <li>
            <strong>Встреча в аэропорту</strong> — трансфер из Санья Феникс
            входит в стоимость.
          </li>
          <li>
            <strong>Лечение</strong> — 1–2 процедуры в день по назначению
            врача, с переводчиком.
          </li>
        </ol>
      </section>

      {/* Ссылки на ключевые разделы */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Полезные разделы</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href="/czeny/"
            className="block rounded-lg border border-zinc-200 p-4 hover:border-emerald-600"
          >
            <h3 className="font-semibold text-emerald-800">Цены на лечение</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Сколько стоит курс иглоукалывания, массажа Туйна, программы на
              7 / 14 / 21 день.
            </p>
          </Link>
          <Link
            href="/programmy/"
            className="block rounded-lg border border-zinc-200 p-4 hover:border-emerald-600"
          >
            <h3 className="font-semibold text-emerald-800">Программы лечения</h3>
            <p className="mt-1 text-sm text-zinc-700">
              10 направлений: суставы и позвоночник, внутренние органы,
              женское здоровье, антистресс и др.
            </p>
          </Link>
          <Link
            href="/vrachi/"
            className="block rounded-lg border border-zinc-200 p-4 hover:border-emerald-600"
          >
            <h3 className="font-semibold text-emerald-800">Врачи</h3>
            <p className="mt-1 text-sm text-zinc-700">
              8 врачей с опытом от 15 до 40+ лет. Шанхайская, Хубэйская,
              Хунаньская школы ТКМ.
            </p>
          </Link>
          <Link
            href="/blog/visa-khainan-2026/"
            className="block rounded-lg border border-zinc-200 p-4 hover:border-emerald-600"
          >
            <h3 className="font-semibold text-emerald-800">Виза на Хайнань</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Безвизовый въезд для граждан РФ — правила, документы, сроки.
            </p>
          </Link>
          <Link
            href="/blog/hainan-ili-udalyanchi-sravnenie/"
            className="block rounded-lg border border-zinc-200 p-4 hover:border-emerald-600"
          >
            <h3 className="font-semibold text-emerald-800">Хайнань или Удалянчи</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Сравнение курортов Китая: климат, виза, перелёт, профиль
              лечения.
            </p>
          </Link>
          <Link
            href="/blog/chto-takoe-tkm/"
            className="block rounded-lg border border-zinc-200 p-4 hover:border-emerald-600"
          >
            <h3 className="font-semibold text-emerald-800">Что такое ТКМ</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Инь-Ян, У-Син, Ци, меридианы — основы метода простым языком.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Частые вопросы</h2>
        <div className="space-y-3">
          {PAGE_FAQ.map((f) => (
            <details key={f.q} className="rounded-lg border border-zinc-200 p-4">
              <summary className="cursor-pointer font-medium text-zinc-900">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">
          Записаться на консультацию
        </h2>
        <p className="mb-4 text-sm opacity-90">
          Консультация бесплатная. Координатор ответит в течение 24 часов.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800"
          >
            Контакты
          </Link>
          <a
            href="https://wa.me/8613158954278"
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
