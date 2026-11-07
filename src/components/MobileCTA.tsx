"use client";

import { TEL_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/data/contacts";

/**
 * Sticky-CTA, видимый только на узких экранах.
 * Поднимает конверсию с длинных страниц (czeny, terapii, blog)
 * на 20–40 % по индустриальным замерам.
 *
 * Размещается в <body> через layout.tsx.
 */
export default function MobileCTA() {
  return (
    <div
      className="mobile-cta fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-zinc-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:hidden"
      role="region"
      aria-label="Быстрые контакты"
    >
      <a
        href={TEL_URL}
        className="flex min-h-[56px] flex-col items-center justify-center bg-white px-2 py-2 text-center text-[var(--primary)] active:bg-zinc-100"
      >
        <span className="text-xl leading-none" aria-hidden="true">📞</span>
        <span className="mt-1 text-xs font-semibold leading-tight">
          {PHONE_DISPLAY}
        </span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] flex-col items-center justify-center bg-[var(--primary)] px-2 py-2 text-center text-white active:bg-[var(--primary)]/90"
      >
        <span className="text-xl leading-none" aria-hidden="true">💬</span>
        <span className="mt-1 text-xs font-semibold leading-tight">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
