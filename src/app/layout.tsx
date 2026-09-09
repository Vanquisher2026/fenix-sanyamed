import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

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
const YANDEX_METRIKA_ID = "XXXXXXXX"; // ЗАМЕНИТЬ
const YANDEX_VERIFICATION = "XXXXXXXXXXXXXXXX"; // ЗАМЕНИТЬ (или удалить тег)

// ============================================================================
// БРЕНД: fenix-sanyamed (по решению клиента 2026-09-06)
// Домен: fenix-sanyamed.com
// Врачи и адрес: из fenix-sanyamed.ru (клиент владеет обоими доменами)
// Контакты (телефон/email): независимые, НЕ из fenix-sanyamed.ru
// ============================================================================
const CLINIC_NAME = "Медицинский центр fenix-sanyamed";
const CLINIC_NAME_LATIN = "fenix-sanyamed Medical Center";
const CLINIC_PHONE = "+86-898-XXXXXXXX"; // ЗАМЕНИТЬ на реальный +86 номер (НЕ из fenix-sanyamed.ru)
const CLINIC_EMAIL = "info@fenix-sanyamed.com"; // ЗАМЕНИТЬ на реальный email
// Адрес: филиалы в бухтах Дадунхай / Ялонгбэй / Саньяван (г. Санья)
// (по данным с fenix-sanyamed.ru — 4 филиала в черте города)
const CLINIC_STREET = "бухты Дадунхай, Ялонгбэй и Саньяван";
const CLINIC_CITY = "Sanya";
const CLINIC_REGION = "Hainan";
const CLINIC_POSTAL = "572000";
const CLINIC_COUNTRY = "CN";
// ⚠️ ТОЧНЫЕ координаты — подтвердить у клиента (百度地图 / Google Maps)
const CLINIC_LAT = 18.2528;
const CLINIC_LNG = 109.5119;

export const metadata: Metadata = {
  metadataBase: new URL("https://fenix-sanyamed.com"),
  title: {
    default: `${CLINIC_NAME} | Лечение в Санья, Хайнань`,
    template: `%s | ${CLINIC_NAME}`,
  },
  description:
    "Медицинский центр традиционной китайской медицины в городе Санья, остров Хайнань. Индивидуальные программы лечения, опытные врачи с опытом более 40 лет, русскоязычные переводчики.",
  keywords: [
    "китайская медицина Санья",
    "медицинский центр fenix-sanyamed",
    "иглоукалывание Хайнань",
    "массаж Туйна",
    "лечение травами Китай",
    "китайская медицина Хайнань",
    "Феникс Санья",
    "fenix-sanyamed",
  ],
  authors: [{ name: CLINIC_NAME }],
  creator: CLINIC_NAME,
  publisher: CLINIC_NAME,
  alternates: {
    canonical: "https://fenix-sanyamed.com",
    languages: { ru: "https://fenix-sanyamed.com" },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://fenix-sanyamed.com",
    siteName: CLINIC_NAME,
    title: `${CLINIC_NAME} | Лечение в Санья, Хайнань`,
    description:
      "Медицинский центр традиционной китайской медицины на Хайнане. Врачи с опытом более 40 лет, индивидуальные программы, русскоязычные переводчики.",
    images: [
      {
        url: "https://fenix-sanyamed.com/og-image.jpg",
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
    "@id": "https://fenix-sanyamed.com/#clinic",
    name: CLINIC_NAME,
    alternateName: CLINIC_NAME_LATIN,
    description:
      "Медицинский центр традиционной китайской медицины в городе Санья, остров Хайнань. 4 филиала в бухтах Дадунхай, Ялунбэй, Саньябэй. Врачи с опытом более 40 лет. Индивидуальные программы лечения методами ТКМ.",
    url: "https://fenix-sanyamed.com/",
    telephone: CLINIC_PHONE,
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

  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Schema.org для всей клиники — повторяется на каждой странице */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        {/* Yandex.Metrika — TODO: раскомментировать после получения counterId */}
        {YANDEX_METRIKA_ID !== "XXXXXXXX" && (
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
        <NavBar />
        <main className="flex-1">{children}</main>
        <footer className="bg-[var(--accent)] px-6 py-12 text-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <h3 className="mb-4 text-base font-bold">fenix-sanyamed</h3>
                <p className="mb-3 text-sm text-white/80">
                  Традиционная китайская медицина
                  <br />в Санья, остров Хайнань
                </p>
                <p className="text-xs text-white/60">
                  4 филиала в бухтах Дадунхай, Ялонгбэй, Саньяван
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-base font-bold">Навигация</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="/programmy/" className="hover:text-white">
                      Программы лечения
                    </a>
                  </li>
                  <li>
                    <a href="/terapii/" className="hover:text-white">
                      Процедуры ТКМ
                    </a>
                  </li>
                  <li>
                    <a href="/vrachi/" className="hover:text-white">
                      Врачи
                    </a>
                  </li>
                  <li>
                    <a href="/o-sanatorii/" className="hover:text-white">
                      О нас
                    </a>
                  </li>
                  <li>
                    <a href="/kontakty/" className="hover:text-white">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-base font-bold">
                  Где нас найти в России
                </h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a
                      href="https://yandex.ru/maps/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Яндекс Карты
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://2gis.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      2ГИС
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zen.yandex.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Яндекс Дзен
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://webmaster.yandex.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Яндекс Вебмастер
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-base font-bold">Соцсети</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a
                      href="https://vk.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      ВКонтакте
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
              © 2026 Медицинский центр fenix-sanyamed. Все права защищены.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}