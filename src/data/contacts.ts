// ============================================================================
// КОНТАКТЫ fenix-sanyamed — единый источник правды (обновлено 2026-10-16)
// Меняем только здесь: значение подхватывают
//   • src/app/layout.tsx — schema.org (telephone) + футер
//   • src/app/kontakty   — карточки «Телефон» и «Мессенджеры»
// ============================================================================

/** E.164 без «+» — используется в ссылках wa.me / t.me */
export const PHONE_E164 = "8613158954278";

/** С «+» — для tel: ссылок и schema.org */
export const PHONE_TEL = "+8613158954278";

/** Красивый формат для показа людям */
export const PHONE_DISPLAY = "+86 131 5895 4278";

/** Ссылка для звонка (tel:) */
export const TEL_URL = `tel:${PHONE_TEL}`;

export const CLINIC_EMAIL = "info@fenix-sanyamed.com";

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`;
export const TELEGRAM_URL = `https://t.me/${PHONE_E164}`;

/**
 * Ссылка на WhatsApp с предзаполненным сообщением.
 *
 * wa.me принимает текст в query-параметре `text` (UTF-8, percent-encoded).
 * Это единственный способ передать контекст — номер один на весь центр,
 * поэтому конкретного врача/тему указываем в самом сообщении.
 *
 * @param message текст сообщения от имени пациента
 */
export function whatsappLink(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

/** Готовый текст для обращения к конкретному врачу. */
export function waDoctorMessage(doctorName: string): string {
  return `Здравствуйте! Хочу записаться на консультацию к врачу ${doctorName} (санаторий ТАЙЦЗИ, Санья). Подскажите, пожалуйста, ближайшие даты и свободное время.`;
}

/** Готовый текст для вопроса из блока FAQ. */
export function waFaqMessage(question: string): string {
  return `Здравствуйте! У меня вопрос по санаторию ТАЙЦЗИ в Санья: ${question}`;
}

/**
 * Instagram не поддерживает deep-link по номеру телефона —
 * для кликабельной ссылки нужен username профиля.
 * ⚠️ 2026-11-06 (запрос владельца): ссылку на профиль暂时 скрыта —
 * username оставлен пустым, чтобы кнопка Instagram не вела на
 * https://www.instagram.com/fenix_sanyamed/. Когда профиль снова
 * можно публиковать — просто верните значение в INSTAGRAM_USERNAME.
 */
export const INSTAGRAM_USERNAME = ""; // "fenix_sanyamed" — вернуть при необходимости
export const INSTAGRAM_URL = INSTAGRAM_USERNAME
  ? `https://www.instagram.com/${INSTAGRAM_USERNAME}/`
  : "";

/**
 * VK-сообщество «Лечение позвоночника в Китае» (санаторий ТАЙЦЗИ, Санья).
 * Официальный club-id — работает и без авторизации, в отличие от короткого
 * адреса, который VK резолвит только залогиненным пользователям.
 * Обновлено 2026-11-03.
 */
export const VK_GROUP_URL = "https://vk.ru/club242571810";

export type Messenger = {
  key: "whatsapp" | "telegram" | "instagram" | "vk";
  label: string;
  url: string;
};

/** Единый список мессенджеров: футер (все страницы) + страница контактов */
export const MESSENGERS: Messenger[] = [
  { key: "whatsapp", label: "WhatsApp", url: WHATSAPP_URL },
  { key: "telegram", label: "Telegram", url: TELEGRAM_URL },
  { key: "instagram", label: "Instagram", url: INSTAGRAM_URL },
  { key: "vk", label: "ВКонтакте", url: VK_GROUP_URL },
];
