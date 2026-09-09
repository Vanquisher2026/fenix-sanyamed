import type { Metadata } from "next";
import Link from "next/link";

// ⚠️ Телефон, email и точные координаты — TBD (плейсхолдеры)

export const metadata: Metadata = {
  title: "Контакты и запись | Медицинский центр fenix-sanyamed, Санья",
  description:
    "Контакты медицинского центра традиционной китайской медицины в городе Санья. Адрес, телефон, форма записи на приём.",
  alternates: {
    canonical: "https://fenix-sanyamed.com/kontakty/",
  },
};

export default function KontaktyPage() {
  return (
    <main className="px-6 py-20">
      {/* === HEADER === */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6">
          <span className="gold-line" />
          Контакты
          <span className="gold-line" />
        </p>
        <h1 className="mb-6">Связаться с нами</h1>
        <p className="font-serif text-lg italic text-zinc-600">
          Русскоязычный координатор на связи. Подберём индивидуальную
          программу и ответим на все вопросы.
        </p>
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
              бухты Дадунхай, Ялонгбэй и Саньяван
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
              <strong className="font-display text-lg">+86-898-XXXXXXXX</strong>
              <span className="ml-2 inline-block border border-amber-300 bg-amber-50 px-2 py-0.5 font-ui text-xs uppercase tracking-luxury text-amber-900">
                TBD
              </span>
            </p>
            <p className="font-serif text-sm italic text-zinc-600">
              WhatsApp / WeChat / Telegram доступны по этому номеру
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
              <strong className="font-display">info@fenix-sanyamed.com</strong>
              <span className="ml-2 inline-block border border-amber-300 bg-amber-50 px-2 py-0.5 font-ui text-xs uppercase tracking-luxury text-amber-900">
                TBD
              </span>
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
                бухта Дадунхай, Ялонгбэй, Саньяван
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

        <form className="space-y-6">
          <div>
            <label className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]">
              Ваше имя
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-serif focus:border-[var(--primary)] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]">
              Телефон или мессенджер
            </label>
            <input
              type="text"
              name="contact"
              required
              placeholder="WhatsApp / WeChat / Telegram"
              className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-serif focus:border-[var(--primary)] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]">
              Интересующая программа
            </label>
            <select
              name="programma"
              className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-serif focus:border-[var(--primary)] focus:outline-none"
            >
              <option value="">— Выберите программу —</option>
              <option value="konsultaciya">Только консультация</option>
              <option value="igloukalyvanie">Иглоукалывание</option>
              <option value="tuyna">Массаж Туйна</option>
              <option value="normalizatsiya">Нормализация работы органов</option>
              <option value="oporno-dvigatelnyy">Опорно-двигательный аппарат</option>
              <option value="zhenskoe-zdorove">Женское здоровье</option>
              <option value="antistress">Антистресс</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]">
              Сообщение
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Расскажите о ваших пожеланиях или задайте вопрос"
              className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-serif focus:border-[var(--primary)] focus:outline-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled
              className="btn-luxury opacity-50"
            >
              Отправить заявку
            </button>
          </div>
          <p className="text-center font-serif text-xs italic text-zinc-500">
            ⚠️ Перед публикацией: подключить форму к реальному backend
            (Telegram bot / Formspree).
          </p>
        </form>
      </section>
    </main>
  );
}