"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/programmy/", label: "Программы" },
  { href: "/terapii/", label: "Процедуры" },
  { href: "/vrachi/", label: "Врачи" },
  { href: "/o-sanatorii/", label: "О нас" },
  { href: "/kontakty/", label: "Контакты" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-tilda">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-fenix-sanyamed-sanatoriy-tcm-sanya-khainan.png"
            alt="Медицинский центр fenix-sanyamed — традиционная китайская медицина в Санья, Хайнань"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link href="/kontakty/" className="btn-tilda">
            Записаться
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Меню"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
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
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-[var(--border)] py-3 text-base font-medium text-[var(--foreground)] last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakty/"
              className="btn-tilda mt-4 text-center"
              onClick={() => setOpen(false)}
            >
              Записаться
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}