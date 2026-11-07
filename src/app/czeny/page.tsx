import type { Metadata } from "next";
import Link from "next/link";
import {
  PROCEDURES,
  PACKAGES,
  ACCOMMODATION_NOTE,
  PRICE_DISCLAIMER,
  fmtPrice,
} from "@/data/prices";
import { REAL_PRICE_GROUPS, REAL_PRICE_TOTAL } from "@/data/prices.real";
import { waFaqMessage } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Цены на лечение в Санья — сколько стоит курс ТКМ",
  description:
    "Полный прайс-лист санатория ТКМ в Санья: 156 процедур с ценами в юанях — иглоукалывание, прижигание, массаж Туйна, косметология и SPA. Стоимость программ лечения, что входит в курс, как рассчитывается бюджет поездки.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/czeny/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/czeny/",
      "x-default": "https://www.fenix-sanyamed.com/czeny/",
      en: "https://www.fenix-sanyamed.com/en/czeny/",
    },
  },
  openGraph: {
    title: "Цены на лечение в Санья — сколько стоит курс ТКМ",
    description:
      "Полный прайс-лист: 156 процедур с ценами в юанях. Что входит в пакет, из чего складывается бюджет поездки.",
    url: "https://www.fenix-sanyamed.com/czeny/",
    locale: "ru_RU",
    type: "article",
  },
};

// --- FAQ: реальные формулировки запросов из Yandex Wordstat ---
const FAQ = [
  {
    q: "Сколько стоит лечение в Китае?",
    a: "Один сеанс иглоукалывания или массажа Туйна в Санья стоит в среднем 150–450 юаней. Программа «под ключ» на 7 дней — от 8 000 юаней, на 14 дней — от 15 000 юаней без учёта проживания и перелёта. Итоговая сумма зависит от объёма назначенных процедур и рассчитывается врачом после диагностики.",
  },
  {
    q: "Сколько стоит курс иглоукалывания?",
    a: "Курс обычно составляет 5–10 сеансов. При стоимости одного сеанса 150–400 юаней курс обходится в 750–4 000 юаней. Точное количество сеансов определяет врач по результатам пульсовой диагностики.",
  },
  {
    q: "Входит ли проживание в стоимость программы?",
    a: "Нет, проживание и питание бронируются отдельно. В Санья они стоят от 200 юаней в сутки за гостевой дом до 800 и более юаней за отель на первой линии. Мы помогаем подобрать вариант рядом с центром.",
  },
  {
    q: "Входит ли переводчик в стоимость?",
    a: "Да. Русскоязычный медицинский переводчик сопровождает все приёмы и входит в стоимость программы — это отдельная строка в договоре, доплата за перевод не взимается.",
  },
  {
    q: "Сколько стоит первичная консультация врача ТКМ?",
    a: "Первичная консультация с пульсовой диагностикой проводится бесплатно. Она нужна, чтобы врач составил программу и назвал точную стоимость до начала лечения.",
  },
  {
    q: "Нужна ли предоплата?",
    a: "Предоплата обсуждается индивидуально. Стандартная схема — бронь даты консультации без оплаты, расчёт за курс после согласования программы на месте.",
  },
  {
    q: "Можно ли оплатить российскими картами?",
    a: "В Санья принимают наличные юани, WeChat Pay, Alipay и карты UnionPay. Карты российских банков работают не везде — мы заранее подсказываем актуальный способ оплаты и помогаем с обменом.",
  },
  {
    q: "Нужна ли виза на Хайнань для лечения?",
    a: "Гражданам России для поездки на Хайнань виза не нужна — действует безвизовый въезд до 30 дней. Подробности в отдельной статье о визе на Хайнань.",
  },
  {
    q: "Можно ли пройти лечение без проживания в санатории?",
    a: "Да. Многие пациенты живут в отеле и приезжают на процедуры. Это обычно дешевле, чем размещение в медицинском корпусе, и не влияет на программу лечения.",
  },
  {
    q: "Есть ли скидки на длительные программы?",
    a: "Стоимость одного дня в программе снижается по мере увеличения её длительности: 21-дневная программа обходится дешевле в пересчёте на день, чем 7-дневная.",
  },
  {
    q: "Сколько стоит лечение суставов в Китае?",
    a: "Программа для костей и суставов строится на сочетании иглоукалывания, массажа Туйна и фитотерапии. Ориентир — от 15 000 юаней за 14 дней. Точная сумма называется после диагностики и зависит от объёма процедур.",
  },
  {
    q: "Что делать, если курс нужно продлить?",
    a: "Продление оформляется на месте. Врач оценивает динамику и, если считает нужным, добавляет сеансы — они оплачиваются по действующему прайсу отдельно.",
  },
  {
    q: "Входят ли лекарства и травы в стоимость?",
    a: "Фитотерапия оплачивается отдельно: 80–300 юаней за день курса в зависимости от состава рецепта. Стоимость травяного курса озвучивается до его начала.",
  },
  {
    q: "Зависит ли стоимость от результата лечения?",
    a: "Нет. Стоимость программы определяется объёмом процедур и не зависит от результата. Индивидуальные результаты могут отличаться — врач обсуждает это на первой консультации.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const offersSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Санаторий ТАЙЦЗИ",
  url: "https://www.fenix-sanyamed.com/czeny/",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Процедуры традиционной китайской медицины",
    itemListElement: PROCEDURES.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name: p.name },
      priceCurrency: "CNY",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: p.from,
        maxPrice: p.to,
      },
    })),
  },
};

// Полный прайс (156 позиций) — в отдельном каталоге, чтобы AI-поисковики
// могли забрать конкретные цены по конкретным процедурам.
const realPriceSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Полный прайс-лист процедур ТКМ в Санье",
  numberOfItems: REAL_PRICE_TOTAL,
  itemListElement: REAL_PRICE_GROUPS.map((g) => ({
    "@type": "OfferCatalog",
    name: g.title,
    itemListElement: g.items.map((it) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: it.name,
        alternateName: it.nameCn,
      },
      priceCurrency: "CNY",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: it.price,
      },
    })),
  })),
};

export default function CzenyPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realPriceSchema) }}
      />

      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span>Стоимость</span>
      </nav>

      <h1 className="mb-4 text-4xl font-bold">
        Сколько стоит лечение в Санья
      </h1>

      {/* Прямой ответ для AI-поиска и сниппета — первые 60 слов */}
      <p className="mb-6 text-lg leading-relaxed text-zinc-700">
        Один сеанс иглоукалывания или массажа Туйна в медицинском центре ТКМ в
        Санья стоит <strong>150–450 юаней</strong>. Программа «под ключ» на 7
        дней — от <strong>8 000 юаней</strong>, на 14 дней — от{" "}
        <strong>15 000 юаней</strong>. Проживание и перелёт оплачиваются
        отдельно. Первичная консультация с пульсовой диагностикой — бесплатно.
      </p>

      {/* === ТАБЛИЦА ПРОЦЕДУР === */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Цены на отдельные процедуры
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-300 text-sm">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 p-3 text-left">
                  Процедура
                </th>
                <th className="border border-zinc-300 p-3 text-left">
                  Сеанс
                </th>
                <th className="border border-zinc-300 p-3 text-left">Курс</th>
                <th className="border border-zinc-300 p-3 text-left">
                  Цена за сеанс
                </th>
              </tr>
            </thead>
            <tbody>
              {PROCEDURES.map((t) => (
                <tr key={t.slug}>
                  <td className="border border-zinc-300 p-3 font-medium">
                    {t.name}
                  </td>
                  <td className="border border-zinc-300 p-3 text-zinc-700">
                    {t.duration}
                  </td>
                  <td className="border border-zinc-300 p-3 text-zinc-700">
                    {t.course}
                  </td>
                  <td className="border border-zinc-300 p-3 whitespace-nowrap font-medium text-emerald-800">
                    {fmtPrice(t.from, t.to)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-zinc-600">
          Цена фитотерапии указана за один день курса, остальных процедур — за
          один сеанс.
        </p>
      </section>

      {/* === РЕАЛЬНЫЙ ПРАЙС (156 позиций) === */}
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">
          Полный прайс-лист процедур: {REAL_PRICE_TOTAL} позиций
        </h2>
        <p className="mb-4 text-zinc-700">
          Ниже — фактические цены санатория в Санья в юанях (CNY) по каждой
          отдельной процедуре: иглоукалывание, прижигание, массаж Туйна,
          физиотерапия, косметология и SPA. Название каждой позиции дано на
          русском и китайском языке — так вы увидите точное название метода,
          которое назовёт врач на приёме.
        </p>

        <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm">
          <p className="mb-1 font-semibold text-emerald-900">
            Ориентировочные цены (参考价)
          </p>
          <p className="text-emerald-800">
            Стоимость указана за один сеанс в китайских юанях (CNY). Итоговую
            сумму подтверждает администратор при записи: в стоимость курса
            входят осмотр врача, консультация и подбор схемы лечения.
          </p>
        </div>

        {REAL_PRICE_GROUPS.map((g) => (
          <div key={g.code} className="mb-8">
            <h3 className="mb-2 text-xl font-semibold">{g.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-zinc-300 text-sm">
                <thead className="bg-zinc-100">
                  <tr>
                    <th className="border border-zinc-300 p-3 text-left">
                      Процедура
                    </th>
                    <th className="border border-zinc-300 p-3 text-left">
                      中文名称
                    </th>
                    <th className="border border-zinc-300 p-3 text-left">
                      Сеанс
                    </th>
                    <th className="border border-zinc-300 p-3 whitespace-nowrap text-left">
                      Цена, юаней
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {g.items.map((it) => (
                    <tr key={it.slug}>
                      <td className="border border-zinc-300 p-3 font-medium">
                        {it.name}
                      </td>
                      <td className="border border-zinc-300 p-3 text-zinc-600">
                        {it.nameCn}
                      </td>
                      <td className="border border-zinc-300 p-3 text-zinc-700">
                        {it.duration || "—"}
                      </td>
                      <td className="border border-zinc-300 p-3 whitespace-nowrap font-medium text-emerald-800">
                        {it.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      {/* === ПАКЕТЫ === */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Программы «под ключ» — стоимость курса
        </h2>
        <div className="space-y-4">
          {PACKAGES.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-emerald-200 bg-emerald-50 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="whitespace-nowrap text-lg font-bold text-emerald-800">
                  {fmtPrice(p.from, p.to)}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-700">{p.days}</p>
              <p className="mt-2 text-sm text-zinc-700">{p.includes}</p>
              <p className="mt-2 text-xs text-zinc-600">
                <strong>Не входит:</strong> {p.excludes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === ПРОЖИВАНИЕ / БЮДЖЕТ === */}
      <section className="mb-10 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Из чего складывается бюджет поездки
        </h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          {ACCOMMODATION_NOTE}
        </p>
      </section>

      {/* === ЧТО ВКЛЮЧЕНО === */}
      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Что входит в стоимость программы
        </h2>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Первичная и заключительная консультации врача ТКМ</li>
          <li>Пульсовая диагностика</li>
          <li>Русскоязычный медицинский переводчик на всех приёмах</li>
          <li>Индивидуальный план лечения в письменном виде</li>
          <li>Трансфер из аэропорта Санья Феникс</li>
        </ul>
        <h3 className="mb-2 mt-6 text-lg font-semibold">Что НЕ входит</h3>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Проживание и питание (бронируются отдельно)</li>
          <li>Авиабилеты</li>
          <li>Фитотерапия, если назначена сверх базовой программы</li>
          <li>Дополнительные процедуры сверх согласованного плана</li>
        </ul>
      </section>

      {/* === FAQ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Частые вопросы о стоимости
        </h2>
        <div className="space-y-4">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="rounded-lg border border-zinc-200 p-4"
            >
              <summary className="cursor-pointer font-medium text-zinc-900">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                {f.a}
              </p>
              {/* WhatsApp с предзаполненным вопросом — пациент не должен
                  переписывать вопрос в чат, достаточно нажать кнопку. */}
              <div className="mt-4">
                <span className="wa-pulse">
                  <span className="wa-pulse__halo" aria-hidden="true" />
                  <a
                    href={waFaqMessage(f.q)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-pulse__btn h-11 gap-2 px-4 text-sm"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z" />
                    </svg>
                    <span>Задать вопрос в WhatsApp</span>
                  </a>
                </span>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* === ДИСКЛЕЙМЕР === */}
      <div className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed">
        <strong>Важно:</strong> {PRICE_DISCLAIMER}
      </div>

      {/* === CTA === */}
      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">
          Узнать точную стоимость вашей программы
        </h2>
        <p className="mb-4 text-sm opacity-90">
          Опишите состояние в сообщении — врач ответит и назовёт ориентир по
          вашей программе. Консультация бесплатная.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Контакты и запись
          </Link>
          <a
            href="https://wa.me/8613158954278"
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold hover:bg-emerald-600"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
