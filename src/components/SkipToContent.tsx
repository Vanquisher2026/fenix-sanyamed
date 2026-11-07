/**
 * Skip-to-content — a11y ссылка для пользователей клавиатуры / TalkBack.
 * Появляется только при фокусе. Перепрыгивает клавиатурную навигацию
 * мимо NavBar сразу к основному контенту.
 */
export default function SkipToContent() {
  return (
    <a
      href="#main"
      className="skip-to-content sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
    >
      Перейти к основному содержимому
    </a>
  );
}
