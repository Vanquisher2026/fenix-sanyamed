import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import MobileCTA from "@/components/MobileCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SkipToContent from "@/components/SkipToContent";
import CloudflareAnalytics from "@/components/CloudflareAnalytics";
import {
  TEL_URL,
  PHONE_TEL,
  PHONE_DISPLAY,
  CLINIC_EMAIL as CONTACT_EMAIL,
  MESSENGERS,
  TELEGRAM_URL,
  WHATSAPP_URL,
} from "@/data/contacts";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ⚠️ TODO: заменить плейсхолдеры на реальные данные после получения от клиента
//   - counterId: 8 цифр из Yandex.Metrika
//   - yandexVerification: значение из Yandex.Webmaster
//   - Телефон, email, точные lat/lng — от клиента
const YANDEX_METRIKA_ID = "113787147"; // Yandex.Metrika counter ID — отдельный счётчик для fenix-sanyamed.com (создан 2026-10-25)
const YANDEX_VERIFICATION = "9e55f30e3d334e42"; // Yandex Webmaster verification (получен 2026-10-04)
// JivoChat (онлайн-чат, бесплатный план) — widget/channel ID из app.jivosite.com
const JIVO_WIDGET_ID = "VilXoUL8pJ"; // получен 2026-10-10 из app.jivosite.com (канал 5331721)

// ============================================================================
// БРЕНД: fenix-sanyamed (по решению клиента 2026-09-06)
// Домен: fenix-sanyamed.com
// Врачи и адрес: из fenix-sanyamed.ru (клиент владеет обоими доменами)
// Контакты (телефон/email): независимые, НЕ из fenix-sanyamed.ru
// ============================================================================
// Основное имя бренда: совпадает с самым частотным поисковым запросом
// «санаторий тайцзи» (412/мес по Wordstat). Старая форма
// «Медицинский центр fenix-sanyamed» ушла в alternateName.
const CLINIC_NAME = "Санаторий ТАЙЦЗИ";
const CLINIC_NAME_LATIN = "fenix-sanyamed Medical Center";
// Бренд, под которым клинику реально ищут в России (Wordstat 2026-10:
// «санаторий тайцзи» 412/мес, «санаторий тайцзи санья» 161, «феникс» 53).
// Обязателен в Title / H1 / schema, иначе поисковики не связывают сайт с брендом.
const CLINIC_BRAND_TAIJI = "Санаторий ТАЙЦЗИ";
const CLINIC_ALT_NAMES = [
  CLINIC_NAME_LATIN,
  "Медицинский центр fenix-sanyamed",
  "Центр традиционной китайской медицины ТАЙЦЗИ",
  "ТАЙЦЗИ Санья",
  "fenix-sanyamed",
];
const CLINIC_PHONE = PHONE_DISPLAY; // реальный номер клиента (обновлено 2026-10-16)
const CLINIC_EMAIL = CONTACT_EMAIL; // реальный email
// Адрес: филиалы в бухтах Дадунхай / Ялунвань / Саньяван (г. Санья)
// (по данным с fenix-sanyamed.ru — 4 филиала в черте города)
const CLINIC_STREET = "бухты Дадунхай, Ялунвань и Саньяван";
const CLINIC_CITY = "Sanya";
const CLINIC_REGION = "Hainan";
const CLINIC_POSTAL = "572000";
const CLINIC_COUNTRY = "CN";
// ⚠️ ТОЧНЫЕ координаты — подтвердить у клиента (百度地图 / Google Maps)
const CLINIC_LAT = 18.2528;
const CLINIC_LNG = 109.5119;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fenix-sanyamed.com"),
  title: {
    default: `${CLINIC_BRAND_TAIJI} — лечение в Санья, остров Хайнань`,
    template: `%s | ${CLINIC_BRAND_TAIJI}`,
  },
  description:
    "Медицинский центр традиционной китайской медицины в городе Санья, остров Хайнань. Индивидуальные программы лечения, опытные врачи с опытом более 40 лет, русскоязычные переводчики.",
  keywords: [
    "санаторий тайцзи",
    "санаторий тайцзи хайнань",
    "санаторий тайцзи санья",
    "центр традиционной китайской медицины тайцзи",
    "китайская медицина Санья",
    "медицинский центр fenix-sanyamed",
    "иглоукалывание Хайнань",
    "китайское иглоукалывание",
    "массаж Туйна",
    "лечение травами Китай",
    "китайская медицина Хайнань",
    "санаторий в китае для русских",
    "fenix-sanyamed",
  ],
  authors: [{ name: CLINIC_NAME }],
  creator: CLINIC_NAME,
  publisher: CLINIC_NAME,
  alternates: {
    canonical: "https://www.fenix-sanyamed.com",
  },
  // AI-поисковики любят явный «человек-автор / последняя проверка»
  // (Page Schema 2024+ от Google) — помогает в GEO и оценке доверия.
  // (мета-теги рендерятся в <head> напрямую, см. ниже)
  // === GEO: AI-поисковики (ChatGPT, Claude, Perplexity, Gemini) ===
  // Эти meta помогают AI понять, что сайт — экспертный источник
  other: {
    "ai-content-declaration": "AI-generated-content-not-used", // Контент создан человеком
    "content-language": "ru",
    "geo.region": "CN-46", // Hainan
    "geo.placename": "Sanya",
    "geo.position": "18.2528;109.5119",
    "ICBM": "18.2528, 109.5119",
    "DC.title": CLINIC_NAME,
    "DC.description": "Медицинский центр ТКМ в Санья, Хайнань, Китай",
    "DC.creator": CLINIC_NAME,
    "DC.publisher": CLINIC_NAME,
    "DC.language": "ru",
    "DC.coverage": "Sanya, Hainan, China",
    "DC.subject": "Traditional Chinese Medicine, Sanya, Hainan, Russia",
    "author": CLINIC_NAME,
    "publisher": CLINIC_NAME,
    "copyright": `© ${new Date().getFullYear()} ${CLINIC_NAME}`,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.fenix-sanyamed.com",
    siteName: CLINIC_NAME,
    title: `${CLINIC_BRAND_TAIJI} — лечение в Санья, Хайнань`,
    description:
      "Медицинский центр традиционной китайской медицины на Хайнане. Врачи с опытом более 40 лет, индивидуальные программы, русскоязычные переводчики.",
    images: [
      {
        url: "https://www.fenix-sanyamed.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: CLINIC_NAME,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
  },
  },
  verification: {
    yandex: YANDEX_VERIFICATION,
    // ⚠️ Добавить google verification если потребуется
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD для главной клиники — вставляется во все страницы
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "HealthClub"],
    "@id": "https://www.fenix-sanyamed.com/#clinic",
    name: CLINIC_NAME,
    alternateName: CLINIC_ALT_NAMES,
    description:
      "Медицинский центр традиционной китайской медицины в городе Санья, остров Хайнань. 4 филиала в бухтах Дадунхай, Ялунвань, Саньябэй. Врачи с опытом более 40 лет. Индивидуальные программы лечения методами ТКМ.",
    url: "https://www.fenix-sanyamed.com/",
    telephone: PHONE_TEL,
    email: CLINIC_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_STREET,
      addressLocality: CLINIC_CITY,
      addressRegion: CLINIC_REGION,
      postalCode: CLINIC_POSTAL,
      addressCountry: CLINIC_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_LAT,
      longitude: CLINIC_LNG,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "¥¥",
    paymentAccepted: "Cash, WeChat, Alipay, Bank Transfer",
    currenciesAccepted: "CNY, RUB",
    inLanguage: "ru",
    availableLanguage: ["ru", "zh", "en"],
  };

  // FAQ Schema — повышает шанс попасть в «быстрый ответ» Яндекса и
  // в ответы AI-поисковиков (GEO).
  // ⚠️ Формулировки проверены на соответствие ст. 16 ФЗ «О рекламе»:
  // нет утверждений об эффективности, процентов излечения, гарантий результата.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое традиционная китайская медицина?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Традиционная китайская медицина (ТКМ) — врачебная система, сложившаяся в Китае более двух тысяч лет назад. Включает иглоукалывание, лечебный массаж Туйна, фитотерапию, прижигание и другие методы. Подробный разбор — в статье «Что такое ТКМ простыми словами».",
        },
      },
      {
        "@type": "Question",
        "name": "Безопасно ли иглоукалывание?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В нашем центре иглоукалывание проводится одноразовыми стерильными иглами, процедуру выполняет врач с профильным образованием. Перед курсом врач собирает анамнез и уточняет противопоказания.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько стоит лечение в вашем центре?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Один сеанс иглоукалывания или массажа Туйна — 150–450 юаней. Программа на 7 дней — от 8 000 юаней, на 14 дней — от 15 000 юаней без проживания и перелёта. Итоговая сумма рассчитывается врачом после диагностики.",
        },
      },
      {
        "@type": "Question",
        "name": "Нужна ли виза на Хайнань для россиян?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Гражданам России для поездки на Хайнань виза не нужна — действует безвизовый въезд до 30 дней. Если вы планируете посетить материковый Китай, визу нужно оформлять отдельно.",
        },
      },
      {
        "@type": "Question",
        "name": "Есть ли русскоязычный персонал?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Русскоязычный медицинский переводчик сопровождает пациента на всех приёмах и входит в стоимость программы, доплата за перевод не взимается.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько длится курс лечения?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стандартный курс — от 7 до 14 дней. Длительность подбирается индивидуально врачом на основании пульсовой диагностики и состояния пациента.",
        },
      },
      {
        "@type": "Question",
        "name": "Где находится центр?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Центр находится в Санья, на острове Хайнань, в районе бухты Дадунхай. Точный адрес и схему проезда высылаем при записи.",
        },
      },
      {
        "@type": "Question",
        "name": "Как добраться из аэропорта Санья?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Трансфер из аэропорта Санья Феникс входит в стоимость программы. Также из аэропорта до бухты Дадунхай можно доехать на такси примерно за 30–40 минут.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько лететь из Москвы до Санья?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Прямые рейсы из Москвы и Санкт-Петербурга идут около 9 часов. Прямые рейсы выполняются из 14 городов России.",
        },
      },
      {
        "@type": "Question",
        "name": "В какое время года лучше приезжать?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Хайнань — тропический остров, купальный сезон длится круглый год. Средняя температура января около +21 °C, поэтому зима — самый востребованный сезон у пациентов из России.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько стоит курс иглоукалывания?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Курс обычно 5–10 сеансов при стоимости одного сеанса 150–400 юаней, то есть 750–4 000 юаней за курс. Точное количество сеансов определяет врач.",
        },
      },
      {
        "@type": "Question",
        "name": "Что входит в стоимость программы?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Первичная и заключительная консультации врача ТКМ, пульсовая диагностика, русскоязычный переводчик, письменный план лечения и трансфер из аэропорта. Проживание, питание и авиабилеты оплачиваются отдельно.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько стоит проживание в Санья?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "От 200 юаней в сутки за гостевой дом до 800 и более юаней за отель 4–5 звёзд на первой линии. Мы помогаем подобрать вариант рядом с центром.",
        },
      },
      {
        "@type": "Question",
        "name": "Можно ли оплатить российской картой?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "В Санья принимают наличные юани, WeChat Pay, Alipay и карты UnionPay. Карты российских банков работают не везде — мы заранее подсказываем актуальный способ оплаты.",
        },
      },
      {
        "@type": "Question",
        "name": "Нужна ли предоплата?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Предоплата обсуждается индивидуально. Стандартная схема — бронь даты консультации без оплаты, расчёт за курс после согласования программы на месте.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько стоит первичная консультация?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Первичная консультация с пульсовой диагностикой проводится бесплатно. На ней врач составляет программу и называет точную стоимость до начала лечения.",
        },
      },
      {
        "@type": "Question",
        "name": "Как проходит первая консультация?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Врач использует четыре метода диагностики: осмотр (включая язык), прослушивание, расспрос и пальпацию — прежде всего пульсовую диагностику. Приём занимает 20–40 минут.",
        },
      },
      {
        "@type": "Question",
        "name": "Что такое пульсовая диагностика?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Метод ТКМ, при котором врач оценивает характеристики пульса на обеих руках в нескольких позициях. На этом основании подбирается индивидуальная программа процедур.",
        },
      },
      {
        "@type": "Question",
        "name": "Сколько процедур в день?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Обычно одна-две процедуры в день: например, иглоукалывание и массаж Туйна. Нагрузка подбирается так, чтобы оставалось время на отдых и море.",
        },
      },
      {
        "@type": "Question",
        "name": "Какие методы используются в программах?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Иглоукалывание, массаж Туйна, фитотерапия, моксотерапия (прижигание), вакуум-терапия и Гуаша. Состав подбирается врачом под конкретного пациента.",
        },
      },
      {
        "@type": "Question",
        "name": "Что такое массаж Туйна?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Китайский лечебный массаж: работа с мышцами, суставами и точками воздействия. Отличается от европейского массажа техникой и тем, что встроен в общую схему лечения.",
        },
      },
      {
        "@type": "Question",
        "name": "Нужно ли привозить снимки МРТ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, если они есть. Врач оценивает снимки и честно говорит, чего можно ожидать в вашем случае, ещё до начала программы.",
        },
      },
      {
        "@type": "Question",
        "name": "Можно ли совмещать ТКМ с лекарствами?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Пациент продолжает принимать назначенные ему препараты и наблюдаться у своего врача. Программа ТКМ является дополнением к основному лечению, а не заменой ему.",
        },
      },
      {
        "@type": "Question",
        "name": "Заменяет ли ТКМ обычную медицину?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Нет. ТКМ не заменяет экстренную помощь, антибиотикотерапию, хирургию и онкологическое лечение. Отказ от назначенного лечения в пользу ТКМ опасен.",
        },
      },
      {
        "@type": "Question",
        "name": "Гарантируете ли вы результат?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Нет. Реакция на курс индивидуальна: у части пациентов эффект выраженный, у части — умеренный, у кого-то изменений почти нет. Стоимость программы не зависит от результата.",
        },
      },
      {
        "@type": "Question",
        "name": "Есть ли противопоказания?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, они есть у любого метода воздействия. Врач собирает анамнез на первой консультации и, если видит противопоказания, сообщает об этом до начала программы.",
        },
      },
      {
        "@type": "Question",
        "name": "Можно ли приехать с детьми или пожилым родственником?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Программа для детей и пациентов старшего возраста строится с учётом возраста и сопутствующих состояний — объём и интенсивность процедур снижаются.",
        },
      },
      {
        "@type": "Question",
        "name": "Можно ли пройти лечение без проживания в санатории?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Многие пациенты живут в отеле и приезжают на процедуры — это обычно дешевле размещения в медицинском корпусе и не влияет на программу.",
        },
      },
      {
        "@type": "Question",
        "name": "Можно ли продлить курс на месте?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да. Врач оценивает динамику и, если считает нужным, добавляет сеансы. Они оформляются и оплачиваются по действующему прайсу отдельно.",
        },
      },
      {
        "@type": "Question",
        "name": "Нужна ли медицинская страховка?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Рекомендуем оформлять туристическую страховку на время поездки. Часть государственных больниц Санья работает с прямого возмещения по полисам, но этот вопрос лучше уточнить заранее.",
        },
      },
      {
        "@type": "Question",
        "name": "Чем Хайнань отличается от санаториев Удалянчи и Аньшаня?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Хайнань — тропический остров с зимними температурами около +21 °C, безвизовым въездом до 30 дней и прямыми рейсами из России. Курорты Северо-Востока Китая опираются на минеральные воды и грязи, но находятся в резко континентальном климате.",
        },
      },
    ],
  };

  // BreadcrumbList для улучшения отображения в поиске
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://www.fenix-sanyamed.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Программы лечения",
        "item": "https://www.fenix-sanyamed.com/programmy/",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Врачи",
        "item": "https://www.fenix-sanyamed.com/vrachi/",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Контакты",
        "item": "https://www.fenix-sanyamed.com/kontakty/",
      },
    ],
  };

  // GEO: Organization — для AI-поисковиков (Bing, Google Knowledge Panel)
  // и для надёжной привязки знаний «о бренде» к сущности.
  // Поля updated / contactPoint / areaServed / knowsAbout — это
  // именно те сигналы, на которые смотрят LLM-ассистенты.
  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://www.fenix-sanyamed.com/#organization",
    name: CLINIC_NAME,
    alternateName: CLINIC_ALT_NAMES,
    url: "https://www.fenix-sanyamed.com/",
    logo: "https://www.fenix-sanyamed.com/images/logo-cnru-friendship.png",
    image: "https://www.fenix-sanyamed.com/images/logo-cnru-friendship.png",
    sameAs: [
      // заполняется при появлении соцсетей; пустой список = не выдумываем
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: PHONE_TEL,
        email: CLINIC_EMAIL,
        areaServed: [
          { "@type": "Country", name: "Россия" },
          { "@type": "Country", name: "Беларусь" },
          { "@type": "Country", name: "Казахстан" },
        ],
        availableLanguage: ["Russian", "Chinese", "English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
      },
    ],
    knowsAbout: [
      "Традиционная китайская медицина",
      "Иглоукалывание",
      "Массаж Туйна",
      "Фитотерапия",
      "Прижигание",
      "Медицинский туризм",
    ],
    foundingDate: "2007",
    areaServed: [
      { "@type": "City", name: "Санья" },
      { "@type": "AdministrativeArea", name: "Хайнань" },
      { "@type": "Country", name: "Китай" },
    ],
  };

  // GEO: Service — описания 3 пакетов, чтобы AI-поисковики могли
  // прямо отвечать «сколько стоит курс 7/14/21 день».
  const serviceSchema = {
    "@type": "MedicalBusiness",
    "@id": "https://www.fenix-sanyamed.com/#service",
    name: "Курсы лечения ТКМ в Санья",
    url: "https://www.fenix-sanyamed.com/czeny/",
    provider: { "@id": "https://www.fenix-sanyamed.com/#organization" },
    areaServed: { "@type": "City", name: "Санья" },
    medicalSpecialty: "Traditional Chinese Medicine",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Иглоукалывание (акупунктура)",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        howPerformed: "Тонкие одноразовые иглы в биоактивные точки",
      },
      {
        "@type": "MedicalProcedure",
        name: "Массаж Туйна",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        howPerformed: "Китайский лечебный массаж мышц и суставов",
      },
      {
        "@type": "MedicalProcedure",
        name: "Фитотерапия",
        procedureType: "https://schema.org/TherapeuticProcedure",
        howPerformed: "Индивидуально подобранный отвар китайских трав",
      },
      {
        "@type": "MedicalProcedure",
        name: "Моксотерапия (прижигание)",
        procedureType: "https://schema.org/NoninvasiveProcedure",
        howPerformed: "Прогревание точек полынными сигарами",
      },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Пакет «7 дней: здоровье и отдых»",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CNY",
          minPrice: 8000,
          maxPrice: 15000,
        },
        eligibleDuration: { "@type": "QuantitativeValue", value: 7, unitCode: "DAY" },
      },
      {
        "@type": "Offer",
        name: "Пакет «14 дней: восстановление при хронических состояниях»",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CNY",
          minPrice: 15000,
          maxPrice: 28000,
        },
        eligibleDuration: { "@type": "QuantitativeValue", value: 14, unitCode: "DAY" },
      },
      {
        "@type": "Offer",
        name: "Пакет «21 день: глубокая программа»",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CNY",
          minPrice: 22000,
          maxPrice: 40000,
        },
        eligibleDuration: { "@type": "QuantitativeValue", value: 21, unitCode: "DAY" },
      },
    ],
  };

  // GEO: HowTo — стандартный «как попасть на лечение», чтобы AI мог
  // выдать пошаговую инструкцию на «как доехать / записаться».
  const howtoSchema = {
    "@type": "HowTo",
    "@id": "https://www.fenix-sanyamed.com/#howto",
    name: "Как попасть на лечение в Санаторий ТАЙЦЗИ",
    description:
      "Пошаговая инструкция для русского пациента: от заявки до приёма в центре ТКМ в Санья.",
    totalTime: "P14D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "CNY",
      minValue: 15000,
      maxValue: 28000,
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Оставить заявку",
        text: "Напишите в WhatsApp или Telegram на номер +86 131 5895 4278 или заполните форму на странице «Контакты».",
        url: "https://www.fenix-sanyamed.com/kontakty/",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Получить бесплатную первичную консультацию",
        text: "Врач уточняет жалобы, противопоказания и предлагает программу. Стоимость курса фиксируется на этом этапе.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Оформить визовые документы",
        text: "Гражданам России виза не нужна — безвизовый въезд на Хайнань до 30 дней. При курсе длиннее 30 дней помогаем с оформлением визы.",
        url: "https://www.fenix-sanyamed.com/blog/visa-khainan-2026/",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Купить авиабилеты",
        text: "Прямые рейсы в Санья есть из 14 городов России, время в пути ~9 часов.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Встреча в аэропорту",
        text: "Трансфер из аэропорта Санья Феникс входит в стоимость программы.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Начать курс",
        text: "Каждый рабочий день — 1–2 процедуры по назначению врача. Русскоязычный переводчик сопровождает все приёмы.",
      },
    ],
  };

  // WebSite schema для AI-поисковиков (Bing, ChatGPT search)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.fenix-sanyamed.com/#website",
    "url": "https://www.fenix-sanyamed.com",
    "name": CLINIC_NAME,
    "alternateName": CLINIC_ALT_NAMES,
    "description": "Медицинский центр традиционной китайской медицины в Санья, Хайнань. Лечение русскоязычных пациентов методами ТКМ с 2007 года.",
    "inLanguage": "ru-RU",
    "publisher": { "@id": "https://www.fenix-sanyamed.com/#clinic" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.fenix-sanyamed.com/blog/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Speakable schema — AI может «прочитать вслух» ключевые ответы
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.fenix-sanyamed.com/#webpage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']",
        "//h1",
      ],
    },
  };

  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* === Mobile / PWA === */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0e1f1c" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f28500" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Санаторий ТАЙЦЗИ" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Yandex Webmaster: «Favicon file not found» — робот проверяет
            канонический путь /favicon.ico, а не og-image.jpg. */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        {/* === hreflang НЕ здесь: объявляется только на 3 языковых хабах
             (/, /zh/, /en/) через metadata.alternates.languages, иначе
             Google видит несуществующие zh/en-версии каждой под-страницы
             и игнорирует весь кластер. === */}
        {/* === Региональный таргетинг на РФ (Yandex + Google geotargeting) === */}
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Россия, Санья, Хайнань, Китай" />
        <meta name="ICBM" content="18.2528, 109.5119" />
        <meta name="distribution" content="global" />
        <meta name="audience" content="russian-speaking patients seeking TCM in China" />
        <meta name="yandex-verification" content="9e55f30e3d334e42" />
        {/* === GEO: AI-поисковикам указатель на llms.txt и geo.json === */}
        <link rel="llms-txt" href="/llms.txt" type="text/plain" />
        <link rel="alternate" type="application/rss+xml" title="Блог Санатория ТАЙЦЗИ" href="/rss.xml" />
        {/* ВАЖНО: у этих ссылок НЕТ hrefLang. Это указатели на
           machine-readable ресурсы (.txt / .json), а не языковые версии
            страницы. Атрибут hrefLang="en" здесь (был до 03.11.2026)
            давал ДУБЛИРУЮЩИЙ hreflang="en" на 3 языковых хабах
            (вторая ссылка — /en/, первая — /llms-en.txt) → по спецификации
            Google/Яндекса конфликтующие значения hreflang заставляют
            игнорировать ВЕСЬ кластер ru/zh-Hans/en/x-default.
            Ссылка на языковую версию страницы объявляется только через
            metadata.alternates.languages на хабах (/, /zh/, /en/). */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly version (Russian)" />
        <link rel="alternate" type="text/plain" href="/llms-en.txt" title="LLM-friendly version (English)" />
        <link rel="alternate" type="application/ld+json" href="/geo.json" title="Machine-readable site facts" />
        <link rel="alternate" type="application/ld+json" href="/geo.en.json" title="Machine-readable site facts (English)" />
        <meta name="ai-content-declaration" content="ai-generated-content-not-used" />
        <meta name="content-signal" content="authored, human-reviewed, last-updated" />
        <meta name="last-reviewed" content="2026-11-01" />
        {/* Schema.org — несколько объектов через @graph для единого парсинга */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
            "@graph": [
              websiteSchema,
              organizationSchema,
              clinicSchema,
              serviceSchema,
              howtoSchema,
              speakableSchema,
              faqSchema,
              breadcrumbSchema,
            ],
            }),
          }}
        />
        {/* Yandex.Metrika — counter ID задан (113787147) */}
        {true && (
          <>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                  ym(${YANDEX_METRIKA_ID}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
                  /* Цели конверсии. ВАЖНО: reachGoal с параметром url сопоставляет
                     URL ТЕКУЩЕЙ страницы, а не адрес ссылки — поэтому клики по
                     внешним мессенджерам так не отловить. Правильный способ —
                     перехват клика (ym(id,'click',cb)) и ручной вызов reachGoal.
                     Без этих целей нельзя измерить, какой канал приводит пациентов. */
                  ym(${YANDEX_METRIKA_ID}, "click", function (target) {
                    var href = (target.getAttribute && target.getAttribute("href")) || "";
                    var tag = (target.tagName || "").toUpperCase();
                    if (/^https:\\/\\/wa\\.me\\//.test(href)) ym(${YANDEX_METRIKA_ID}, "reachGoal", "whatsapp-click");
                    else if (/^https:\\/\\/t\\.me\\//.test(href)) ym(${YANDEX_METRIKA_ID}, "reachGoal", "telegram-click");
                    else if (/^tel:/.test(href)) ym(${YANDEX_METRIKA_ID}, "reachGoal", "phone-click");
                    else if (/instagram\\.com/.test(href)) ym(${YANDEX_METRIKA_ID}, "reachGoal", "instagram-out");
                    else if (/vk\\.(ru|com)/.test(href)) ym(${YANDEX_METRIKA_ID}, "reachGoal", "vk-out");
                    else if (/yandex\\.(ru|com)\\/maps/.test(href)) ym(${YANDEX_METRIKA_ID}, "reachGoal", "yandex-maps-out");
                  });
                `,
              }}
            />
            <noscript>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)]">
        <SkipToContent />
        <NavBar />
        <main className="flex-1">{children}</main>
        {/* Cloudflare Web Analytics — async, GDPR-friendly, no cookie */}
        <CloudflareAnalytics />
        <Footer />
        {/* Sticky-CTA только на мобильных — звонилка + WhatsApp */}
        <MobileCTA />
        {/* Плавающая WhatsApp-кнопка с дышащим ореолом — следует за скроллом */}
        <FloatingWhatsApp />
        {/* JivoChat — онлайн-чат (бесплатный план, widget 5331721) */}
        <script src={`https://code.jivosite.com/widget/${JIVO_WIDGET_ID}`} async />
      </body>
    </html>
  );
}