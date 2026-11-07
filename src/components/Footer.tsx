"use client";

import { usePathname } from "next/navigation";
import {
  TEL_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  TELEGRAM_URL,
  INSTAGRAM_URL,
  VK_GROUP_URL,
  MESSENGERS,
  CLINIC_EMAIL as CONTACT_EMAIL,
} from "@/data/contacts";

/**
 * Footer — language-aware.
 *
 * The English pages live under /en/... and reuse the same layout, so the
 * footer has to switch its wording and its link targets depending on the
 * current pathname prefix. Russian links stay untouched.
 */

const T = {
  ru: {
    contact: "Свяжитесь с нами",
    brand: "fenix-sanyamed",
    brandSub: "Традиционная китайская медицина\nв Санья, остров Хайнань",
    branches: "4 филиала в бухтах Дадунхай, Ялунвань, Саньяван",
    nav: "Навигация",
    foreign: "Иностранным пациентам",
    whereInRu: "Где нас найти в России",
    social: "Соцсети",
    right: "Все права защищены",
  },
  en: {
    contact: "Get in touch",
    brand: "fenix-sanyamed",
    brandSub: "Traditional Chinese medicine\nin Sanya, Hainan Island",
    branches: "4 branches in Dadonghai, Yalong Bay and Sanya Bay",
    nav: "Navigation",
    foreign: "For international patients",
    whereInRu: "Where to find us in Russia",
    social: "Social media",
    right: "All rights reserved",
  },
} as const;

export default function Footer() {
  const pathname = usePathname();
  const isEn = !!pathname && pathname.startsWith("/en");
  const t = isEn ? T.en : T.ru;

  const NAV = isEn
    ? [
        { href: "/en/sanatorium-tajczi/", label: "TAIJI Sanatorium" },
        { href: "/en/sanatoriy-khaynanya/", label: "Sanatorium on Hainan" },
        { href: "/en/programmy/", label: "Treatment programmes" },
        { href: "/en/terapii/", label: "TCM procedures" },
        { href: "/en/vrachi/", label: "Doctors" },
        { href: "/en/o-sanatorii/", label: "About us" },
        { href: "/en/czeny/", label: "Prices" },
        { href: "/en/putevka/", label: "Treatment voucher" },
        { href: "/en/spa-i-krasota/", label: "SPA and cosmetics" },
        { href: "/en/kontakty/", label: "Contact" },
      ]
    : [
        { href: "/sanatorium-tajczi/", label: "Санаторий ТАЙЦЗИ" },
        { href: "/sanatoriy-khaynanya/", label: "Санаторий на Хайнане" },
        { href: "/programmy/", label: "Программы лечения" },
        { href: "/terapii/", label: "Процедуры ТКМ" },
        { href: "/vrachi/", label: "Врачи" },
        { href: "/o-sanatorii/", label: "О санатории" },
        { href: "/czeny/", label: "Цены" },
        { href: "/putevka/", label: "Санаторная путёвка" },
        { href: "/spa-i-krasota/", label: "SPA и косметология" },
        { href: "/kontakty/", label: "Контакты" },
      ];

  const FOREIGN = isEn
    ? [
        { href: "/en/", label: "English home" },
        { href: "/en/czeny/", label: "Prices" },
        { href: "/en/geo/", label: "How to get here" },
        { href: "/", label: "Русская версия" },
        { href: "/zh/", label: "中文版" },
      ]
    : [
        { href: "/dlya-russkikh/", label: "Русскоязычным гостям" },
        { href: "/en/", label: "English version" },
        { href: "/zh/", label: "中文版" },
        { href: "/blog/", label: "Блог и гиды" },
        { href: "/geo/", label: "Как добраться" },
      ];

  return (
    <div className="mx-auto max-w-6xl">
      {/* === СВЯЗАТЬСЯ С НАМИ: телефон + мессенджеры (видно на всех страницах) === */}
      <div className="mb-10 border-b border-white/20 pb-8">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="mb-1 font-ui text-xs uppercase tracking-luxury text-white/60">
              {t.contact}
            </p>
            <a
              href={TEL_URL}
              className="font-display text-2xl text-white hover:text-[var(--secondary-dark)]"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-1 text-sm text-white/70">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {/* Пустой URL (например, Instagram временно скрыт) — элемент не рендерится */}
            {MESSENGERS.filter((m) => m.url).map((m) => (
              <li key={m.key}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/40 px-5 py-2.5 font-ui text-xs uppercase tracking-luxury text-white transition hover:border-white hover:bg-white/10"
                >
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-base font-bold">fenix-sanyamed</h3>
          <p className="mb-3 text-sm text-white/80">
            {t.brandSub.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 ? <br /> : null}
              </span>
            ))}
          </p>
          <p className="text-xs text-white/60">
            {t.branches}
          </p>
        </div>
        <div>
                <h3 className="mb-4 text-base font-bold">{t.nav}</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  {NAV.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
        <div>
                <h3 className="mb-4 text-base font-bold">{t.foreign}</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  {FOREIGN.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
        <div>
          <h3 className="mb-4 text-base font-bold">
            {t.whereInRu}
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
          <h3 className="mb-4 text-base font-bold">{t.social}</h3>
          {/* Официальные кнопки-логотипы мессендеров и соцсетей —
              брендовые цвета платформ повышают доверие и CTR */}
          <ul className="flex flex-wrap items-start gap-3">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:scale-110 hover:bg-[#1fbb59]"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                title="Telegram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-md transition hover:scale-110 hover:bg-[#1b8ac4]"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </li>
            {INSTAGRAM_URL && (
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md transition hover:scale-110"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </li>
            )}
            <li>
              <a
                href={VK_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                title="ВКонтакте"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077FF] text-white shadow-md transition hover:scale-110 hover:bg-[#0062cc]"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
                  <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.504 1.524-1.417 2.283-2.394 4.835-3.897 4.835-.785 0-1.126-.415-1.126-1.338V7.343c0-.906-.26-1.311-1.294-1.311H8.512c-.689 0-1.06.276-1.06.671 0 1.02 2.661 2.062 2.661 4.742 0 2.179-1.555 5.414-4.316 5.414H1.504c-.853 0-1.294.351-1.294.8 0 .432.452.828 1.174 1.344 2.601 1.853 6.216 5.646 7.622 10.391.135.452.41.75.977.75h3.521c.863 0 1.126-.431 1.126-.979 0-.271-.058-.596-.104-.896-.353-2.058-.787-3.525-.787-3.525z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
        {isEn ? "© 2026 Fenix-Sanyamed Medical Centre." : "© 2026 Медицинский центр fenix-sanyamed."} {t.right}.
      </div>
    </div>
  );
}
