import Link from "next/link";
import type { Metadata } from "next";
import { VRACHI } from "@/data/vrachi";
import { PACKAGES, fmtPrice } from "@/data/prices";

export const metadata: Metadata = {
  // absolute: layout 的 template 会追加 "| Санаторий ТАЙЦЗИ"，
  // 本页 title 已含品牌词，用 absolute 避免重复（首页同法）。
  //
  // 词形依据（2026-11-03 Wordstat 实测）：
  //   «санаторий китайской медицины тайцзи» — 121 запроса/мес
  //   «санаторий китайской традиционной медицины тайцзи» — 23
  //   «санаторий китайской традиционной восстановительной медицины тайцзи» — 14
  // → title 必须完整包含连续的 «санаторий китайской медицины тайцзи»，
  //   否则该词族无法命中（旧站靠这个排名，我们此前只写简称）。
  title: {
    absolute: "Санаторий китайской медицины ТАЙЦЗИ в Санье, Хайнань",
  },
  description:
    "Санаторий китайской традиционной восстановительной медицины ТАЙЦЗИ в Санья (Хайнань): врачи с опытом 40+ лет, иглоукалывание, туйна, фитотерапия, моксотерапия. Программы от 7 до 21 дня, русскоязычный координатор, трансфер из аэропорта. Официальный сайт санатория.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/sanatorium-tajczi/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/sanatorium-tajczi/",
      "x-default": "https://www.fenix-sanyamed.com/sanatorium-tajczi/",
      en: "https://www.fenix-sanyamed.com/en/sanatorium-tajczi/",
    },
  },
};

const BRAND_KW = [
  "санаторий тайцзи",
  "санаторий тайцзи санья",
  "санаторий тайцзи лечение",
  "санаторий тайцзи хайнань",
  "тайцзи санаторий китайской медицины",
];

const FAQ = [
  {
    q: "Какой официальный сайт у санатория ТАЙЦЗИ в Санья?",
    a: "Официальный сайт санатория ТАЙЦЗИ — fenix-sanyamed.com: здесь опубликованы актуальные цены, программы и врачи, а запись ведут по телефону +86 131 5895 4278 и почте info@fenix-sanyamed.com. Домен taiji-hainan.ru — старый сайт бренда прежних лет, сейчас он не находится под контролем санатория, и условия на нём могут быть неактуальными. Сайт fenix-sanyamed.ru принадлежит другой клинике («Медицинский центр Феникс») и к санаторию ТАЙЦЗИ отношения не имеет.",
  },
  {
    q: "ТАЙЦЗИ, Феникс и fenix-sanyamed — это одна и та же клиника?",
    a: "Санаторий ТАЙЦЗИ (юридически ООО «Тайцзи») работает в Санья с 2007 года; fenix-sanyamed — это домен его официального сайта и имя координационной службы, которая ведёт русскоязычных пациентов. Отдельная клиника «Медицинский центр Феникс» на домене fenix-sanyamed.ru — другое юридическое лицо с другими врачами и телефонами, это не филиал и не партнёр ТАЙЦЗИ.",
  },
  {
    q: "Чем санаторий ТАЙЦЗИ отличается от отеля и SPA-центра?",
    a: "В санатории все процедуры проводят врачи традиционной китайской медицины с высшим медицинским образованием, а не массажисты без него. Это означает, что программа строится после консультации с пульсовой диагностикой и подбирается под конкретного пациента, а не выдаётся как фиксированный набор. Лицензии и дипломы врачей можно запросить до приезда.",
  },
  {
    q: "Сколько длится лечение в санатории ТАЙЦЗИ?",
    a: "Минимальная программа — 7 дней, оптимальная для большинства задач — 14 дней, максимальная — 21 день. Длительность определяет врач после первичной консультации: он оценивает состояние пациента и задачу, которую нужно решить. Для хронических заболеваний обычно требуется не менее двух недель, чтобы накопился эффект от курса процедур.",
  },
  {
    q: "Нужно ли сдавать анализы до приезда?",
    a: "Желательно, но не обязательно. Если у вас есть анализы, выписки или снимки — отправьте их координатору до приезда, врач изучит их заранее, и первая консультация пройдёт предметно. Если обследований не было, врач проведёт диагностику на месте. В любом случае возьмите с собой все препараты, которые принимаете, в оригинальной упаковке.",
  },
  {
    q: "Как проходит приём в санатории и нужен ли переводчик?",
    a: "Приём ведётся на русском языке — русскоязычный переводчик присутствует на каждой консультации и на всех процедурах, где нужен контакт с врачом. Сама процедура (иглоукалывание, массаж) перевода не требует, но врач всегда объясняет, что делает и зачем, и вы можете задать вопросы в любой момент.",
  },
  {
    q: "Как добраться до санатория из России?",
    a: "Из Москвы в Санья выполняются прямые рейсы «Аэрофлота» и China Southern, время в пути около 10 часов. Для граждан России действует безвизовый режим 30 дней — этого достаточно для любой программы с запасом на адаптацию. От аэропорта Санья Феникс до филиала в Дадунхае — 25–30 минут на такси; до филиалов в Ялунване, Саньябэй и Хайтанване — 30–60 минут. Санаторий предоставляет бесплатный трансфер при предварительной записи.",
  },
  {
    q: "Что входит в стоимость программы санатория ТАЙЦЗИ?",
    a: "В стоимость входят консультации врача ТКМ с пульсовой диагностикой, все процедуры программы, фитотерапия, русскоязычный координатор и трансфер из аэропорта. Проживание, питание и авиабилеты оплачиваются отдельно — это даёт вам свободу выбора отеля и не ограничивает уровень размещения.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Санаторий ТАЙЦЗИ",
  alternateName: "Fenix Sanya Med",
  medicalSpecialty: "TraditionalChineseMedicine",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Санья",
    addressRegion: "Хайнань",
    addressCountry: "CN",
  },
  url: "https://www.fenix-sanyamed.com/sanatorium-tajczi/",
  logo: "https://www.fenix-sanyamed.com/images/logo.png",
  priceRange: "₽₽₽",
  openingHours: "Mo-Su 08:00-18:00",
};

// FAQPage — отдельная структура, чтобы разметка вопросов была валидной
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SanatoriyTajcziPage() {
  const topDocs = VRACHI.filter((v) =>
    ["li-yun-fan", "chzhan-li-in", "yao-dun-yuan"].includes(v.slug)
  );

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* === HERO === */}
      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Санаторий ТАЙЦЗИ — традиционная китайская медицина в Санья
        </h1>
        <p className="text-lg leading-relaxed text-zinc-700">
          Санаторий ТАЙЦЗИ (компания ООО «Тайцзи») — это медицинский центр
          традиционной китайской медицины в городе Санья на острове Хайнань,
          работающий с русскоязычными пациентами с 2014 года. Врачи ТКМ санатория (действующий состав — опыт 40–50 лет)
          ведут приём в четырёх бухтах Санья:
          Дадунхай, Ялунвань, Саньябэй и Хайтанвань. Программы лечения
          строятся индивидуально после
          первичной консультации с пульсовой диагностикой. Официальный сайт
          санатория — fenix-sanyamed.com; сайты taiji-hainan.ru (устаревший)
          и fenix-sanyamed.ru (другая клиника) к работе санатория сейчас
          отношения не имеют.
        </p>
        {/* Официальное полное наименование — именно его ищут в Yandex
            («санаторий китайской традиционной восстановительной медицины
            тайцзи»). Прописан в карточке организации на Яндекс Картах. */}
        <p className="mt-4 border-l-4 border-emerald-600 bg-emerald-50/60 py-3 pl-4 text-sm leading-relaxed text-zinc-700">
          Официальное полное наименование санатория:{" "}
          <strong className="font-semibold text-zinc-900">
            Санаторий китайской традиционной восстановительной медицины ТАЙЦЗИ
          </strong>
          . Юридический адрес:{" "}
          <strong className="font-semibold text-zinc-900">
            Санья, улица Юйялу, 113, 1 этаж
          </strong>{" "}
          (тот же адрес указан в карточке организации на Яндекс Картах).
          Отзывы пациентов собраны на этой странице и на Яндекс Картах.
        </p>
        {/* === КАКОЙ САЙТ ОФИЦИАЛЬНЫЙ (AEO-блок: первый ответ на вопрос
             «официальный сайт санатория тайцзи» — 121 запрос/мес.
             Три домена, одно предложение на каждый, без юридических
             утверждений о старом сайте. Телефон/почта — только
             подтверждённые официальные.) === */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-zinc-300">
                <th className="py-2 pr-4 font-semibold text-zinc-900">Сайт</th>
                <th className="py-2 pr-4 font-semibold text-zinc-900">Статус</th>
                <th className="py-2 font-semibold text-zinc-900">Как проверить</th>
              </tr>
            </thead>
            <tbody className="text-zinc-700">
              <tr className="border-b border-zinc-200">
                <td className="py-2 pr-4 font-semibold text-emerald-800">
                  fenix-sanyamed.com
                </td>
                <td className="py-2 pr-4">
                  Официальный сайт санатория ТАЙЦЗИ (эта страница)
                </td>
                <td className="py-2">
                  Телефон +86 131 5895 4278, почта info@fenix-sanyamed.com
                </td>
              </tr>
              <tr className="border-b border-zinc-200">
                <td className="py-2 pr-4 text-zinc-700">taiji-hainan.ru</td>
                <td className="py-2 pr-4">
                  Старый сайт бренда прежних лет; сейчас не находится
                  под контролем санатория — цены и условия на нём могут быть
                  неактуальны
                </td>
                <td className="py-2">
                  Связь с санаторием — только через официальный сайт
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700">fenix-sanyamed.ru</td>
                <td className="py-2 pr-4">
                  Другая клиника («Медицинский центр Феникс»), не связанная с
                  санаторием ТАЙЦЗИ
                </td>
                <td className="py-2">
                  Другие телефоны и другая организация в контактах
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* === ЧТО ЛЕЧАТ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Направления работы санатория
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          Санаторий ТАЙЦЗИ работает по основным направлениям традиционной
          китайской медицины. Программы подбираются индивидуально — врач
          определяет тактику после первичной консультации и пульсовой
          диагностики, а не по шаблону.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Опорно-двигательный аппарат",
              body: "Позвоночник, грыжи и протрузии дисков, суставы, артрит, последствия травм. Методы: иглоукалывание, туйна, моксотерапия, мануальная терапия.",
              link: "/programmy/vosstanovlenie-oporno-dvigatelnogo-apparata/",
            },
            {
              title: "Внутренние органы и обмен веществ",
              body: "Желудочно-кишечный тракт, печень, почки, эндокринная система. Фитотерапия подбирается под синдром и корректируется каждые три дня.",
              link: "/programmy/normalizatsiya-vnutrennikh-organov/",
            },
            {
              title: "Женское здоровье",
              body: "Подготовка к беременности, нарушения цикла, бесплодие, реабилитация после замершей беременности. Врач может подключить гинеколога.",
              link: "/programmy/zhenskoe-zdorove/",
            },
            {
              title: "Мужское здоровье",
              body: "Простатит, нарушения фертильности, андрологические задачи. Требует УЗИ и анализов — привозите документы на первую консультацию.",
              link: "/programmy/muzhskoe-zdorove/",
            },
            {
              title: "Сердечно-сосудистая реабилитация",
              body: "Восстановление после инфаркта и инсульта, ишемическая болезнь сердца, гипертония. Программа от 14 дней.",
              link: "/programmy/kardiologicheskaya-reabilitatsiya/",
            },
            {
              title: "Антистресс и иммунитет",
              body: "Хроническая усталость, нарушения сна, снижение иммунитета, пищеварительные расстройства на фоне стресса.",
              link: "/programmy/antistress/",
            },
          ].map((d) => (
            <Link
              key={d.title}
              href={d.link}
              className="block rounded-2xl border border-zinc-200 p-5 transition hover:border-emerald-300 hover:bg-emerald-50/50"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">{d.body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* === ВРАЧИ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Врачи санатория ТАЙЦЗИ</h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          В санатории работают восемь врачей традиционной китайской медицины.
          Среди команды — врачи с опытом 40–50 лет; точный стаж каждого указан в профиле:
        </p>
        <div className="space-y-3">
          {topDocs.map((v) => (
            <Link
              key={v.slug}
              href={`/vrachi/${v.slug}/`}
              className="block rounded-xl bg-[var(--surface)] p-5 transition hover:bg-emerald-50/50"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{v.nameRu}</h3>
                <span className="text-sm text-zinc-500">
                  {v.experienceYears > 0 ? `опыт ${v.experienceYears} лет` : "ранее принимал в центре"}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                {v.position.toLowerCase()} · {v.cabLocation.bukhta}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-4">
          <Link
            href="/vrachi/"
            className="text-emerald-700 hover:underline"
          >
            Все восемь врачей →
          </Link>
        </p>
      </section>

      {/* === МЕТОДЫ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Методы лечения в санатории
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          Санаторий ТАЙЦЗИ использует семь основных методов традиционной
          китайской медицины. Все процедуры проводятся врачами ТКМ, а не
          массажистами без медицинского образования — это ключевое отличие
          от SPA-салонов и гостиничных wellness-центров.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Иглоукалывание",
            "Массаж туйна",
            "Моксотерапия",
            "Баночный массаж",
            "Гуаша",
            "Фитотерапия",
            "Вакуум-терапия",
          ].map((m) => (
            <Link
              key={m}
              href="/terapii/"
              className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm text-zinc-700 transition hover:bg-emerald-50"
            >
              {m}
            </Link>
          ))}
        </div>
      </section>

      {/* === ЦЕНЫ === */}
      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Стоимость программ санатория
        </h2>
        <p className="mb-4 leading-relaxed text-zinc-700">
          Стоимость программы зависит от длительности и набора процедур.
          Первичная консультация с пульсовой диагностикой — включена в
          программу, отдельно не оплачивается. Трансфер из аэропорта Санья
          и русскоязычный координатор — включены в стоимость.
        </p>
        <div className="space-y-2">
          {PACKAGES.slice(0, 4).map((p) => (
            <div
              key={p.id}
              className="flex items-baseline justify-between border-b border-zinc-200 pb-2"
            >
              <span className="text-zinc-700">
                {p.name}
              </span>
              <span className="font-semibold text-zinc-900">
                {fmtPrice(p.from, p.to)} ¥
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4">
          <Link href="/czeny/" className="text-emerald-700 hover:underline">
            Полный прайс-лист →
          </Link>
        </p>
      </section>

      {/* === КАК ДОЕХАТЬ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Как добраться до санатория
        </h2>
        <p className="leading-relaxed text-zinc-700">
          Санаторий ТАЙЦЗИ принимает пациентов в четырёх бухтах Санья: Дадунхай, Ялунвань, Саньябэй и Хайтанвань. Наиболее
          удобная для лечения — бухта Дадунхай, где находится медицинский
          центр «Тайцзи» и проживание в шаговой доступности от моря. Прямые
          рейсы из Москвы в Санья выполняют авиакомпании «Аэрофлот» и China
          Southern, время в пути — около 10 часов. Из аэропорта Санья Феникс
          до филиала в Дадунхае — 25–30 минут на такси (до других бухт 30–60 минут), трансфер от санатория
          предоставляется бесплатно при условии предварительной записи.
        </p>
      </section>

      {/* === FAQ === */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Частые вопросы о санатории ТАЙЦЗИ
        </h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4"
            >
              <summary className="cursor-pointer font-semibold text-zinc-900">
                {f.q}
              </summary>
              <p className="mt-3 leading-relaxed text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* === CTA === */}
      <section className="mb-10 rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 text-center">
        <h2 className="mb-3 text-2xl font-semibold">
          Запись на консультацию в санаторий ТАЙЦЗИ
        </h2>
        <p className="mb-5 text-zinc-700">
          Оставьте заявку — русскоязычный координатор свяжется с вами в
          течение рабочего дня, ответит на вопросы и поможет выбрать врача
          и программу.
        </p>
        <Link
          href="/kontakty/"
          className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
        >
          Записаться на приём
        </Link>
      </section>

      {/* === BRAND KW（语义自然嵌入，非堆砌）=== */}
      <p className="text-sm text-zinc-400">
        Санаторий ТАЙЦЗИ в Санья · лечение методами традиционной китайской
        медицины на Хайнане · врачи ТКМ с опытом 40+ лет
      </p>
    </main>
  );
}
