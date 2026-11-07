import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

export const metadata: Metadata = {
  title: "Как долететь из Москвы до Санья дешево: 5 лайфхаков",
  description:
    "Прямые рейсы Москва — Санья, цены на билеты 2026, лайфхаки для экономии, стыковки через Стамбул/Гуанчжоу, лучшее время для бронирования.",
  ...blogMetadata({
    title: "Как долететь из Москвы до Санья дешево: 5 лайфхаков",
    description:
      "Прямые рейсы Москва — Санья, цены на билеты 2026, лайфхаки для экономии, лучшее время для бронирования.",
    url: "https://www.fenix-sanyamed.com/blog/kak-doletet-iz-moskvy-do-sanya/",
    datePublished: "2026-10-17",
    dateModified: "2026-10-17",
    keywords: [
      "авиабилеты москва санья",
      "прямой рейс москва санья",
      "как долететь до санья",
      "билеты на хайнань",
      "transaero хайнань",
      "авиабилеты на хайнань дешево",
    ],
    languages: {
      ru: "https://www.fenix-sanyamed.com/blog/kak-doletet-iz-moskvy-do-sanya/",
      "x-default": "https://www.fenix-sanyamed.com/blog/kak-doletet-iz-moskvy-do-sanya/",
      en: "https://www.fenix-sanyamed.com/en/blog/kak-doletet-iz-moskvy-do-sanya/",
    },
  }),
};

const FAQ = [
  {
    q: "Сколько лететь из Москвы до Санья?",
    a: "Прямой рейс — около 9 часов. Со стыковкой — 12–18 часов в зависимости от маршрута.",
  },
  {
    q: "Есть ли прямые рейсы из Москвы в Санья?",
    a: "Да. Аэрофлот, Россия и Azur Air выполняют прямые рейсы из Москвы (Шереметьево) в Санья (Phoenix International) в зимнем сезоне 2025/2026. В летнем — обычно чартеры.",
  },
  {
    q: "Сколько стоит билет Москва — Санья в 2026?",
    a: "Туда-обратно эконом-класс: 35 000–75 000 ₽ (декабрь — февраль), 50 000–110 000 ₽ (лето). Прямые — дороже, со стыковкой — дешевле.",
  },
  {
    q: "Когда дешевле всего лететь на Хайнань?",
    a: "Ноябрь (кроме 7–10 ноября) и начало декабря. Март — середина апреля. Летом — дорого, плюс сезон дождей.",
  },
  {
    q: "Можно ли лететь со стыковкой и сэкономить?",
    a: "Да. Стыковки через Стамбул (Turkish Airlines), Дубай (Emirates, Flydubai), Гуанчжоу (China Southern) часто дешевле прямых на 20–40%.",
  },
  {
    q: "Нужна ли транзитная виза?",
    a: "Нет, если не выходите из транзитной зоны аэропорта и пересадка ≤ 24 часа. Безвизовый Хайнань 30 дней начинается от даты прилёта в Санья.",
  },
  {
    q: "Что входит в стоимость билета?",
    a: "Эконом: ручная кладь 5–8 кг + багаж 10–20 кг (зависит от тарифа). Питание — большинство рейсов ~9 часов, на борту кормят, но многие предпочитают свою еду.",
  },
  {
    q: "Где искать дешёвые билеты?",
    a: "Aviasales, Tutu.ru, Ozon Travel, Яндекс Путешествия. Aviasales — лучшая карта цен. Tutu.ru — иногда дешевле внутри РФ. Яндекс Путешествия — кэшбэк баллами Плюса.",
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

const FLIGHT_OPTIONS = [
  {
    title: "Прямой рейс Москва — Санья",
    duration: "9 часов",
    price: "55 000–85 000 ₽",
    pros: "Без пересадок, не устаёте, удобно с детьми",
    cons: "Дороже всего. Только зимний сезон (ноябрь — март)",
    best: "Семьи с детьми, пожилые, те, кто едет впервые",
  },
  {
    title: "Стыковка через Стамбул (Turkish Airlines)",
    duration: "13–15 часов",
    price: "40 000–65 000 ₽",
    pros: "Дешевле на 20–30%, удобный хаб, бесплатный отель при длинной стыковке",
    cons: "Долго, виза не нужна только если в транзитной зоне",
    best: "Бюджетный вариант, если есть запас по времени",
  },
  {
    title: "Стыковка через Дубай (Emirates / Flydubai)",
    duration: "14–17 часов",
    price: "45 000–70 000 ₽",
    pros: "Emirates — комфортный самолёт, на борту еда; Flydubai — дешевле",
    cons: "Долгий перелёт, разница в климате (Дубай +35 в декабре)",
    best: "Если совмещаете лечение с шоппингом в Дубае",
  },
  {
    title: "Стыковка через Гуанчжоу (China Southern)",
    duration: "16–18 часов",
    price: "35 000–55 000 ₽",
    pros: "Самый дешёвый вариант, прямая стыковка на внутренний рейс в Санья",
    cons: "Нужен китайский транзит, не всегда гладко с багажом",
    best: "Самый экономный, если готовы к 18-часовому перелёту",
  },
];

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogSchema
        title="Как долететь из Москвы до Санья дешево: 5 лайфхаков"
        description="Прямые рейсы Москва — Санья, цены 2026, лайфхаки для экономии, лучшее время для бронирования."
        url="https://www.fenix-sanyamed.com/blog/kak-doletet-iz-moskvy-do-sanya/"
        datePublished="2026-10-17"
        dateModified="2026-10-17"
        keywords={["авиабилеты москва санья", "прямой рейс", "Хайнань"]}
      />

      <nav className="mb-6 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/blog/" className="hover:underline">Блог</Link>
        <span className="mx-2">/</span>
        <span>Авиабилеты в Санья</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">Обновлено: 2026-10-17</p>
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
        Как долететь из Москвы до Санья дешево: 5 лайфхаков
      </h1>

      <p className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed sm:text-lg">
        <strong>Короткий ответ</strong>: прямой рейс Москва — Санья идёт 9 часов и
        стоит <strong>55 000–85 000 ₽</strong> туда-обратно (зима 2026).
        Сэкономить 20–40% можно стыковкой через Стамбул или Гуанчжоу. Лучшее время
        бронировать — за 6–8 недель, вылетать — в ноябре или марте.
      </p>

      {/* === 5 лайфхаков === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">5 лайфхаков для дешёвого билета</h2>

        <h3 className="mb-2 text-xl font-semibold">1. Бронируйте за 6–8 недель</h3>
        <p className="mb-4 text-zinc-700">
          По нашим наблюдениям, лучшая цена — за 45–60 дней до вылета. За 2 недели
          — дороже на 30–60%. За 4 месяца — иногда дешевле на чартеры, но
          фиксированные даты.
        </p>

        <h3 className="mb-2 text-xl font-semibold">2. Используйте стыковки</h3>
        <p className="mb-4 text-zinc-700">
          Turkish Airlines через Стамбул и China Southern через Гуанчжоу дают
          экономию 20–40% относительно прямого рейса. Главное — стыковка &lt; 6
          часов, чтобы не устать.
        </p>

        <h3 className="mb-2 text-xl font-semibold">3. Летите в «плечо сезона»</h3>
        <p className="mb-4 text-zinc-700">
          Ноябрь (кроме 4–7 ноября) и начало декабря — дешевле всего.
          Конец января — дорого (китайский Новый год). Март — апрель — хорошее
          соотношение цена/погода.
        </p>

        <h3 className="mb-2 text-xl font-semibold">4. Подпишитесь на ценовые алерты</h3>
        <p className="mb-4 text-zinc-700">
          <strong>Aviasales</strong> — вбейте «Москва → Санья», включите уведомление о
          цене. <strong>Яндекс Путешествия</strong> — то же самое с кэшбэком
          баллами Плюса (5–7% возврата).
        </p>

        <h3 className="mb-2 text-xl font-semibold">5. Чартеры vs регулярные</h3>
        <p className="mb-4 text-zinc-700">
          Чартеры в высокий сезон (декабрь — январь) бывают на 15–25% дешевле
          регулярных, но фиксированные даты и без выбора. В межсезонье — наоборот,
          чартеров нет и регулярные рейсы дорожают.
        </p>
      </section>

      {/* === 4 варианта перелёта === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">4 варианта перелёта</h2>
        <div className="space-y-4">
          {FLIGHT_OPTIONS.map((f) => (
            <div key={f.title} className="rounded-lg border border-zinc-200 p-4">
              <h3 className="mb-1 text-lg font-semibold">{f.title}</h3>
              <p className="mb-2 text-sm text-zinc-600">
                <strong>{f.duration}</strong> · {f.price} туда-обратно
              </p>
              <p className="text-sm text-zinc-700">
                <strong className="text-emerald-700">+</strong> {f.pros}
              </p>
              <p className="text-sm text-zinc-700">
                <strong className="text-rose-700">−</strong> {f.cons}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Лучше для: {f.best}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === Когда дешевле === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Когда дешевле лететь</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-zinc-300 text-sm">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 p-3 text-left">Месяц</th>
                <th className="border border-zinc-300 p-3 text-left">Цена ₽</th>
                <th className="border border-zinc-300 p-3 text-left">Погода в Санья</th>
                <th className="border border-zinc-300 p-3 text-left">Вердикт</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">Ноябрь</td>
                <td className="border border-zinc-300 p-3">38–55 тыс</td>
                <td className="border border-zinc-300 p-3">+24 °C, мало дождей</td>
                <td className="border border-zinc-300 p-3 text-emerald-700 font-medium">✓ Лучший</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Декабрь</td>
                <td className="border border-zinc-300 p-3">55–80 тыс</td>
                <td className="border border-zinc-300 p-3">+22 °C, купание</td>
                <td className="border border-zinc-300 p-3">Дорого, но хорошо</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Январь</td>
                <td className="border border-zinc-300 p-3">65–95 тыс</td>
                <td className="border border-zinc-300 p-3">+22 °C, пик</td>
                <td className="border border-zinc-300 p-3 text-rose-700 font-medium">✗ Пик цен</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Февраль</td>
                <td className="border border-zinc-300 p-3">50–70 тыс</td>
                <td className="border border-zinc-300 p-3">+23 °C, сухо</td>
                <td className="border border-zinc-300 p-3">Хорошо</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Март</td>
                <td className="border border-zinc-300 p-3">45–60 тыс</td>
                <td className="border border-zinc-300 p-3">+25 °C, лучший месяц</td>
                <td className="border border-zinc-300 p-3 text-emerald-700 font-medium">✓ Лучший</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Апрель</td>
                <td className="border border-zinc-300 p-3">48–65 тыс</td>
                <td className="border border-zinc-300 p-3">+27 °C, влажно</td>
                <td className="border border-zinc-300 p-3">Хорошо, дожди</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Май — сентябрь</td>
                <td className="border border-zinc-300 p-3">50–75 тыс</td>
                <td className="border border-zinc-300 p-3">+29…+32 °C, сезон дождей</td>
                <td className="border border-zinc-300 p-3">Прямых рейсов нет</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* === Что делать по прилёте === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">По прилёте в Санья</h2>
        <p className="mb-4 text-zinc-700">
          Аэропорт Phoenix International (SYX) — современный, в 30–40 минутах
          езды до большинства отелей в Дадунхае. При бронировании курса в
          Санатории ТАЙЦЗИ трансфер входит в стоимость — вас встретят с табличкой.
        </p>
        <p className="text-zinc-700">
          Если едете самостоятельно: такси из аэропорта стоит 60–100 ¥ (~700–1 200 ₽),
          автобус № 8 / 27 — 5 ¥ (~50 ₽). Удобнее всего DiDi (китайский Uber) —
          работает в Санья, оплата наличными или WeChat.
        </p>
        <p className="mt-2 text-zinc-700">
          <strong>Безвизовый въезд</strong> для граждан России — до 30 дней,
          начинается от даты прилёта в Санья. Подробности — в{" "}
          <Link href="/blog/visa-khainan-2026/" className="text-emerald-700 hover:underline">
            нашей статье про визу
          </Link>
          .
        </p>
      </section>

      {/* === FAQ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Частые вопросы</h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
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

      {/* === CTA === */}
      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">
          Готовы к поездке?
        </h2>
        <p className="mb-4 text-sm opacity-90">
          Запишитесь на бесплатную консультацию — поможем подобрать программу под
          ваш бюджет.
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
