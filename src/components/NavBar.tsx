"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TEL_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/data/contacts";
import SmartImage from "@/components/SmartImage";

const NAV_LINKS = [
  { href: "/programmy/", label: "Программы" },
  { href: "/terapii/", label: "Процедуры" },
  { href: "/vrachi/", label: "Врачи" },
  { href: "/o-sanatorii/", label: "О нас" },
  { href: "/czeny/", label: "Цены" },
  { href: "/kontakty/", label: "Контакты" },
];

// Верхняя ссылка для иностранных пациентов — главная точка входа для
// русскоязычной аудитории (страница /dlya-russkikh/ была без входящих ссылок).
const FOREIGN_PATIENTS = {
  href: "/dlya-russkikh/",
  label: "Иностранным пациентам",
};

// === English navigation ===
// English pages live under /en/... and are built from their own route tree,
// so the Russian NavBar labels would be wrong for English-speaking visitors.
// We swap the whole label set based on the current pathname prefix.
const NAV_LINKS_EN = [
  { href: "/en/programmy/", label: "Programmes" },
  { href: "/en/terapii/", label: "Procedures" },
  { href: "/en/vrachi/", label: "Doctors" },
  { href: "/en/o-sanatorii/", label: "About us" },
  { href: "/en/czeny/", label: "Prices" },
  { href: "/en/kontakty/", label: "Contact" },
];

const FOREIGN_PATIENTS_EN = {
  href: "/en/kontakty/",
  label: "Book a consultation",
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // English pages are prefixed with /en/ — switch labels accordingly.
  const isEn = !!pathname && pathname.startsWith("/en");
  const navLinks = isEn ? NAV_LINKS_EN : NAV_LINKS;
  const foreignPatients = isEn ? FOREIGN_PATIENTS_EN : FOREIGN_PATIENTS;
  const homeHref = isEn ? "/en/" : "/";

  // Закрываем мобильное меню при ресайзе выше md
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Закрываем по ESC (a11y)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="nav-tilda">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href={homeHref}
          className="flex items-center gap-3"
          aria-label={isEn ? "Taiji Sanatorium — home" : "Санаторий ТАЙЦЗИ — на главную"}
        >
          {/* Логотип «китайско-российская дружба» — квадратный, работает
              и на 320px (без текстового «хвоста» старого логотипа).
              ВАЖНО: размер задаём inline — в globals.css есть НЕслоёное
              правило `img{height:auto}`, которое в Tailwind v4 перебивает
              утилитарные классы (.h-10) из @layer utilities. */}
          <SmartImage
            src="/images/logo-cnru-friendship.png"
            alt={isEn ? "Taiji Sanatorium — traditional Chinese medicine in Sanya" : "Санаторий ТАЙЦЗИ — традиционная китайская медицина в Санья"}
            width={512}
            height={512}
            style={{ height: "2.5rem", width: "auto" }}
            className="sm:!h-[2.75rem]"
          />
          <span className="hidden font-bold leading-tight text-[var(--accent)] sm:block">
            Санаторий ТАЙЦЗИ
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <Link
            href={foreignPatients.href}
            className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {foreignPatients.label}
          </Link>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <span className="wa-pulse">
            <span className="wa-pulse__halo" aria-hidden="true" />
            <Link
              href={WHATSAPP_URL}
              className="wa-pulse__btn h-11 px-5 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                isEn
                  ? "WhatsApp — write to Taiji Sanatorium"
                  : "WhatsApp — написать в санаторий ТАЙЦЗИ"
              }
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z" />
              </svg>
              <span className="hidden lg:inline">WhatsApp</span>
            </Link>
          </span>
        </div>

        {/* Mobile burger — 44x44pt (Apple HIG). shrink-0 + min-w guards against
            flex compression on narrow viewports, which was shrinking it to 31px. */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md hover:bg-zinc-100 active:bg-zinc-200 md:hidden"
          aria-label={open ? (isEn ? "Close menu" : "Закрыть меню") : (isEn ? "Open menu" : "Открыть меню")}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <div className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-6 bg-[var(--foreground)] transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[var(--foreground)] transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[var(--foreground)] transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile WhatsApp round button — с дышащим ореолом, как плавающая FAB.
            На мобильных нет постоянной точки входа в WhatsApp в шапке,
            а меню-бургер прячет контакт за двумя тапами. */}
        <span className="wa-pulse wa-pulse--mobile-only">
          <span className="wa-pulse__halo" aria-hidden="true" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse__btn h-11 w-11"
            aria-label={
              isEn
                ? "WhatsApp — write to Taiji Sanatorium"
                : "WhatsApp — написать в санаторий ТАЙЦЗИ"
            }
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z" />
            </svg>
          </a>
        </span>
      </div>

      {/* Mobile menu — full panel, 56pt row, +quick phone CTA */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--border)] bg-[var(--background)] shadow-lg md:hidden"
        >
          <div className="mx-auto max-w-6xl px-4 py-2">
            <Link
              href={foreignPatients.href}
              className="flex items-center border-b border-[var(--border)] py-4 text-base font-semibold text-[var(--primary)]"
              onClick={() => setOpen(false)}
            >
              {foreignPatients.label}
            </Link>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center border-b border-[var(--border)] py-4 text-base font-medium text-[var(--foreground)] last:border-b-0 active:bg-zinc-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={TEL_URL}
              className="mt-4 flex items-center justify-center gap-2 bg-[var(--primary)] px-6 py-4 text-center font-semibold text-white"
            >
              <span aria-hidden="true">📞</span>
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 border-2 border-[var(--primary)] px-6 py-4 text-center font-semibold text-[var(--primary)] active:bg-zinc-50"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
