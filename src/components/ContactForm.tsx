"use client";

import { useState } from "react";
import { PHONE_E164 } from "@/data/contacts";

/**
 * ContactForm — клиентский компонент, который:
 *   1. Собирает имя / телефон / email / программу / сообщение
 *   2. На submit формирует WhatsApp deeplink с предзаполненным текстом
 *   3. Открывает wa.me в новой вкладке
 *   4. Копирует то же сообщение в clipboard (резерв)
 *
 * Не требует backend — работает на статическом хостинге.
 * Lead capture — на стороне WhatsApp (русский координатор).
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const contact = (fd.get("contact") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const programma = (fd.get("programma") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    if (!name || !contact) {
      alert("Пожалуйста, заполните имя и телефон / мессенджер.");
      return;
    }

    const programLabels: Record<string, string> = {
      konsultaciya: "Только консультация",
      igloukalyvanie: "Иглоукалывание",
      tuyna: "Массаж Туйна",
      normalizatsiya: "Нормализация работы органов",
      "oporno-dvigatelnyy": "Опорно-двигательный аппарат",
      "zhenskoe-zdorove": "Женское здоровье",
      antistress: "Антистресс",
    };
    const program = programLabels[programma] || "— не выбрано —";

    const text = [
      "Здравствуйте! Я заполнил форму на fenix-sanyamed.com.",
      "",
      `Имя: ${name}`,
      `Телефон / мессенджер: ${contact}`,
      email ? `Email: ${email}` : null,
      `Интересующая программа: ${program}`,
      message ? `Сообщение: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    // Резервная копия в clipboard
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* не критично */
    }

    // Открываем WhatsApp
    const url = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    // Yandex.Metrika: цель «form-submit» + «whatsapp-click» (форма ведёт в WhatsApp,
    // а window.open не считается кликом по ссылке — ловим вручную).
    try {
      const ym = (window as unknown as { ym?: (id: number, a: string, b: string) => void }).ym;
      if (typeof ym === "function") {
        ym(113787147, "reachGoal", "form-submit");
        ym(113787147, "reachGoal", "whatsapp-click");
      }
    } catch {
      /* метрика не должна ломать форму */
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-6 text-center">
        <div className="mb-2 text-3xl">✓</div>
        <h3 className="mb-2 text-lg font-semibold text-emerald-800">
          Заявка подготовлена
        </h3>
        <p className="text-sm text-zinc-700">
          Мы открыли WhatsApp с заполненным сообщением. Нажмите{" "}
          <strong>«Отправить»</strong> в WhatsApp — координатор ответит в
          течение 24 часов.
        </p>
        <p className="mt-2 text-xs text-zinc-500">
          Копия сообщения также сохранена в буфер обмена.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-emerald-700 hover:underline"
        >
          ← Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="k-name"
          className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]"
        >
          Ваше имя
        </label>
        <input
          id="k-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-serif focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>
      <div>
        <label
          htmlFor="k-contact"
          className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]"
        >
          Телефон или мессенджер
        </label>
        <input
          id="k-contact"
          type="tel"
          name="contact"
          required
          autoComplete="tel"
          inputMode="tel"
          enterKeyHint="next"
          placeholder="+7 999 123-45-67 или @username"
          className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-serif focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
        />
        <p className="mt-1 text-xs text-zinc-500">
          На телефоне откроется цифровая клавиатура. Укажите мессенджер
          (WhatsApp / Telegram) в сообщении ниже.
        </p>
      </div>
      <div>
        <label
          htmlFor="k-email"
          className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]"
        >
          Email (по желанию)
        </label>
        <input
          id="k-email"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-serif focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>
      <div>
        <label
          htmlFor="k-programma"
          className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]"
        >
          Интересующая программа
        </label>
        <select
          id="k-programma"
          name="programma"
          className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-serif focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
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
        <label
          htmlFor="k-message"
          className="mb-2 block font-ui text-xs uppercase tracking-luxury text-[var(--secondary-dark)]"
        >
          Сообщение
        </label>
        <textarea
          id="k-message"
          name="message"
          rows={4}
          enterKeyHint="send"
          placeholder="Расскажите о ваших пожеланиях или задайте вопрос"
          className="w-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-base font-serif focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn-luxury min-h-[48px] w-full px-8 py-3 text-base sm:w-auto"
        >
          Отправить в WhatsApp
        </button>
        <p className="mt-2 text-xs text-zinc-500">
          Нажимая кнопку, вы соглашаетесь с переходом в WhatsApp.
          Сообщение автоматически скопируется в буфер обмена как резерв.
        </p>
      </div>
    </form>
  );
}
