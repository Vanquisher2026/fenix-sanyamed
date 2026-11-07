import type { Metadata } from "next";
import Link from "next/link";
import {
  TEL_URL,
  PHONE_DISPLAY,
  CLINIC_EMAIL,
  WHATSAPP_URL,
  TELEGRAM_URL,
  INSTAGRAM_URL,
} from "@/data/contacts";
import { whatsappLink } from "@/data/contacts";
import { LOCATIONS } from "@/data/locations";
import { VRACHI } from "@/data/vrachi";
import ContactForm from "@/components/ContactForm";

// Телефон и мессенджеры — реальные (обновлено 2026-10-16).
// Точные координаты филиалов — TBD.

export const metadata: Metadata = {
  // Ключевое слово из Wordstat: «санаторий в санье контакты», «запись на лечение в китае»
  title: "Контакты санатория ТАЙЦЗИ в Санья — запись на лечение в Китае",
  description:
    "Контакты санатория ТАЙЦЗИ в Санья (Хайнань, Китай): WhatsApp и Telegram с русскоязычным координатором, телефон, адреса четырёх филиалов в бухтах Дадунхай и Ялунвань, запись на лечение в Китай онлайн и схема проезда от аэропорта.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/kontakty/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/kontakty/",
      "x-default": "https://www.fenix-sanyamed.com/kontakty/",
      en: "https://www.fenix-sanyamed.com/en/kontakty/",
    },
  },
};

export default function KontaktyPage() {
  return (
    <main id="main" className="px-6 py-20">
      {/* === HEADER: 关键词 H1 + 副标 === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Контакты
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">
          Контакты санатория ТАЙЦЗИ в Санья
        </h1>
        <p className="font-serif text-lg italic text-zinc-600">
          Запись на лечение в Китае без посредников: отвечает
          русскоязычный координатор санатория, а не колл-центр.
          Работаем с 2007 года, государственная лицензия.
        </p>
      </section>

      {/* === ГЛАВНЫЕ КНОПКИ СВЯЗИ: 一步直达，置于首屏 === */}
      <section className="mx-auto mt-12 max-w-3xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* WhatsApp — зелёная, с дышащим ореолом (мотив FAB) */}
          <a
            href={whatsappLink("Здравствуйте! Хочу записаться на лечение в санаторий ТАЙЦЗИ в Санья. Подскажите программу и даты.")}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-pulse h-auto w-full"
          >
            <span className="wa-pulse__halo" aria-hidden="true" />
            <span className="wa-pulse__btn h-16 w-full justify-center gap-3 px-6 text-base">
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.28 4.87L2 22l5.27-1.26C8.69 21.55 10.31 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.5 0-2.9-.44-4.08-1.2l-.29-.18-3.11.75.77-3.02-.19-.31A8.19 8.19 0 0 1 3.8 12c0-4.53 3.67-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.67 8.2-8.2 8.2zm4.64-6.1c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.16-.47-.29z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="font-bold">WhatsApp</span>
                <span className="text-xs font-normal opacity-90">Живой человек · ответ за 15–30 минут</span>
              </span>
            </span>
          </a>

          {/* Telegram — фирменный синий, крупная кнопка */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#229ED9] px-6 text-base font-bold text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#1b8ac4] active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="flex flex-col items-start leading-tight">
              <span className="font-bold">Telegram</span>
              <span className="text-xs font-normal opacity-90">Координатор онлайн ежедневно 09:00–20:00</span>
            </span>
          </a>
        </div>

        {/* 辅助通道：电话/邮件/Instagram 一行小按钮 */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={TEL_URL}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
          >
            <span aria-hidden="true">📞</span> {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${CLINIC_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 hover:bg-zinc-50"
          >
            <span aria-hidden="true">✉️</span> {CLINIC_EMAIL}
          </a>
          {INSTAGRAM_URL && (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-pink-400 px-5 py-2.5 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              <span aria-hidden="true">📸</span> Instagram
            </a>
          )}
        </div>
      </section>

      <div className="mx-auto my-16 max-w-md">
        <div className="divider-double" />
      </div>

      {/* === КОНТАКТНЫЕ КАРТОЧКИ === */}
      <section className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Адрес */}
          <div className="card-luxury">
            <p className="hero-eyebrow mb-3 text-[var(--secondary-dark)]">
              Адрес
            </p>
            <h3 className="mb-4">Санаторий ТАЙЦЗИ</h3>
            <span className="gold-line mb-4 block" />
            <p className="mb-1 font-serif text-zinc-700">
              бухты Дадунхай, Ялунвань и Саньяван
            </p>
            <p className="font-serif text-zinc-700">
              город Санья, остров Хайнань, Китай
            </p>
            <p className="mt-2 font-ui text-xs uppercase tracking-luxury text-zinc-500">
              572000 · Китай
            </p>
          </div>

          {/* Телефон */}
          <div className="card-luxury">
            <p className="hero-eyebrow mb-3 text-[var(--secondary-dark)]">
              Телефон
            </p>
            <h3 className="mb-4">Свяжитесь напрямую</h3>
            <span className="gold-line mb-4 block" />
            <p className="mb-2 font-serif text-zinc-700">
              <a
                href={TEL_URL}
                className="font-display text-lg hover:text-[var(--primary)]"
              >
                <strong>{PHONE_DISPLAY}</strong>
              </a>
            </p>
            <p className="font-serif text-sm italic text-zinc-600">
              WhatsApp и Telegram — по этому номеру
            </p>
          </div>

          {/* Email */}
          <div className="card-luxury">
            <p className="hero-eyebrow mb-3 text-[var(--secondary-dark)]">
              Email
            </p>
            <h3 className="mb-4">Напишите нам</h3>
            <span className="gold-line mb-4 block" />
            <p className="mb-2 font-serif text-zinc-700">
              <a
                href={`mailto:${CLINIC_EMAIL}`}
                className="font-display hover:text-[var(--primary)]"
              >
                <strong>{CLINIC_EMAIL}</strong>
              </a>
            </p>
            <p className="font-serif text-sm italic text-zinc-600">
              Отвечаем в течение 24 часов
            </p>
          </div>

          {/* Часы работы */}
          <div className="card-luxury">
            <p className="hero-eyebrow mb-3 text-[var(--secondary-dark)]">
              Часы работы
            </p>
            <h3 className="mb-4">Ежедневно</h3>
            <span className="gold-line mb-4 block" />
            <p className="mb-1 font-display text-2xl text-[var(--primary)]">
              09:00 — 20:00
            </p>
            <p className="font-serif text-sm italic text-zinc-600">
              UTC+8 (по времени Хайнаня). Запись по телефону или через форму
              ниже.
            </p>
          </div>
        </div>
      </section>

      {/* === МЕССЕНДЖЕРЫ: 旧弱按钮区已被首屏大按钮取代，保留说明文字 === */}
      <section className="mx-auto mt-16 max-w-3xl text-center">
        <p className="hero-eyebrow mb-3 text-[var(--secondary-dark)]">
          Как это работает
        </p>
        <h2>Запись на лечение — в три шага</h2>
        <span className="gold-line mx-auto my-4 block" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { n: "1", t: "Напишите нам", d: "WhatsApp или Telegram — русскоязычный координатор на связи ежедневно." },
            { n: "2", t: "Бесплатная консультация", d: "Врач с 40-летним опытом разберёт вашу ситуацию и предложит индивидуальную программу." },
            { n: "3", t: "Прилетайте — встретим", d: "Бесплатный трансфер из аэропорта Санья Феникс и размещение у моря." },
          ].map((s) => (
            <div key={s.n} className="card-luxury text-left">
              <p className="font-display text-3xl text-[var(--secondary-dark)]">{s.n}</p>
              <h3 className="mb-2 text-base">{s.t}</h3>
              <p className="font-serif text-sm leading-relaxed text-zinc-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === КАРТА (заглушка) === */}
      <section className="mx-auto mt-20 max-w-5xl">
        <div className="mb-8 text-center">
          <p className="hero-eyebrow mb-3">Расположение</p>
          <h2>Как нас найти</h2>
        </div>

        <div className="relative overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)]">
          <div className="flex h-80 items-center justify-center px-6 text-center">
            <div>
              <div className="mb-4 font-display text-5xl text-[var(--secondary-dark)]">
                ◇
              </div>
              <p className="mb-2 font-display text-xl">Санаторий ТАЙЦЗИ</p>
              <p className="font-serif text-zinc-700">
                бухта Дадунхай, Ялунвань, Саньяван
              </p>
              <p className="font-serif text-sm text-zinc-500">
                город Санья, остров Хайнань
              </p>
              <p className="mt-3 font-ui text-xs uppercase tracking-luxury text-zinc-400">
                Интерактивная карта · скоро
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === КАК ДОБРАТЬСЯ + ЧТО ДАЛЬШЕ === */}
      <section className="mx-auto mt-20 max-w-5xl">
        <div className="mb-8 text-center">
          <p className="hero-eyebrow mb-3">Организация поездки</p>
          <h2>Как добраться и что происходит после заявки</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="mb-3 font-display text-xl">
              От аэропорта Санья Феникс
            </h3>
            <p className="mb-3 font-serif text-zinc-700">
              Аэропорт Санья Феникс (SYX) находится примерно в 30 километрах
              от заливов Дадунхай и Саньяван, около 50 километров до Ялонгбэя.
              На такси или в заказном трансфере — 40–60 минут в зависимости от
              трафика. Координатор сообщает конкретный адрес отеля и
              ориентиры после бронирования.
            </p>
            <p className="mb-3 font-serif text-zinc-700">
              Если вы летите с пересадкой через Пекин или Гуанчжоу, имейте в
              виду: внутренний перелёт в Санью — отдельный билет, и между
              рейсами нужно закладывать минимум 4 часа на пересадку и
              получение багажа.
            </p>
            <p className="font-serif text-sm text-zinc-600">
              Нужна виза КНР. Для граждан России доступны групповые туры и
              упрощённые правила для отдельных категорий — актуальные условия
              лучше уточнить перед бронированием. Разбор документов есть в{" "}
              <Link
                href="/blog/visa-khainan-2026/"
                className="text-emerald-700 hover:underline"
              >
                статье о визе
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="mb-3 font-display text-xl">
              Порядок записи на приём
            </h3>
            <ol className="mb-3 list-decimal space-y-2 pl-5 font-serif text-zinc-700">
              <li>
                Вы оставляете заявку в форме ниже или пишете в WhatsApp —
                координатор отвечает в течение 24 часов.
              </li>
              <li>
                Обсуждаем задачу: с какой жалобой обращаетесь, какие
                обследования уже есть, сколько планируете провести времени.
              </li>
              <li>
                Подбираем врача и отеля, считаем стоимость программы —
                фиксируем её до начала лечения.
              </li>
              <li>
                На первичной консультации врач проводит пульсовую
                диагностику и составляет индивидуальный план. Консультация
                бесплатна.
              </li>
            </ol>
            <p className="font-serif text-sm text-zinc-600">
              Персональный медицинский переводчик присутствует на каждом
              приёме — документы и заключения вы получаете на русском языке.
            </p>
          </div>
        </div>
      </section>

      {/* === ФИЛИАЛЫ === */}
      <section className="mx-auto mt-20 max-w-5xl">
        <div className="mb-8 text-center">
          <p className="hero-eyebrow mb-3">Адреса</p>
          <h2>Наши филиалы и врачи</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {LOCATIONS.map((l) => (
            <div
              key={l.slug}
              className="rounded-2xl border border-[var(--border)] p-5"
            >
              <h3 className="mb-2 font-display text-lg">{l.name}</h3>
              <p className="mb-1 font-serif text-sm text-zinc-700">
                {l.address}
              </p>
              <p className="mb-3 font-serif text-sm text-zinc-600">
                {l.hotel}
              </p>
              {l.doctors.length > 0 && (
                <p className="font-serif text-sm text-zinc-600">
                  Принимают:{" "}
                  {l.doctors
                    .map((d) => VRACHI.find((v) => v.slug === d)?.nameRu)
                    .filter(Boolean)
                    .join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* === ФОРМА ЗАПИСИ === */}
      <section className="mx-auto mt-20 max-w-2xl">
        <div className="mb-8 text-center">
          <p className="hero-eyebrow mb-3">Запись на приём</p>
          <h2>Оставьте заявку</h2>
          <span className="gold-line mx-auto my-4 block" />
          <p className="font-serif text-lg italic text-zinc-600">
            Координатор свяжется с вами в течение 24 часов
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}