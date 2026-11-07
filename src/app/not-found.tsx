import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-4 text-6xl">🪡</div>
      <h1 className="mb-4 text-4xl font-bold text-zinc-900">404</h1>
      <h2 className="mb-3 text-2xl font-semibold text-zinc-700">
        Страница не найдена
      </h2>
      <p className="mb-8 text-lg text-zinc-600">
        Возможно, страница была перемещена или удалена. Вернитесь на главную
        или посмотрите наши процедуры.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-block rounded-md bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          На главную
        </Link>
        <Link
          href="/terapii/"
          className="inline-block rounded-md border border-emerald-700 bg-white px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50"
        >
          Все процедуры
        </Link>
      </div>
    </main>
  );
}