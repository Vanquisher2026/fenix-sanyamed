import type { Metadata } from "next";
import Link from "next/link";

// ⚠️ ЧЕРНОВИК — все цены — TBD
// Перед публикацией: получить реальный прайс от клиента и заменить TBD

export const metadata: Metadata = {
  title: "Стоимость лечения в fenix-sanyamed | Прейскурант, пакеты, акции",
  description:
    "Стоимость процедур в медицинском центре традиционной китайской медицины fenix-sanyamed на Хайнане. Индивидуальные программы, пакеты услуг.",
  alternates: {
    canonical: "https://fenix-sanyamed.com/czeny/",
  },
};

const THERAPIES = [
  {
    slug: "igloukalyvanie",
    name: "Иглоукалывание",
    duration: "40–60 мин",
    course: "5–10 сеансов",
  },
  {
    slug: "tuyna",
    name: "Массаж Туйна",
    duration: "30–60 мин",
    course: "3–7 сеансов",
  },
  {
    slug: "fitoterapiya",
    name: "Фитотерапия",
    duration: "ежедневно",
    course: "по назначению",
  },
  {
    slug: "vakuum-terapiya",
    name: "Вакуум-терапия",
    duration: "30–45 мин",
    course: "3–5 сеансов",
  },
  {
    slug: "guasha",
    name: "Гуаша",
    duration: "30–60 мин",
    course: "3–10 сеансов",
  },
];

export default function CzenyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span>Стоимость</span>
      </nav>

      <h1 className="mb-4 text-4xl font-bold">Стоимость лечения</h1>
      <p className="mb-4 text-lg text-zinc-700">
        Стоимость зависит от индивидуальной программы. Ниже приведены
        ориентиры по основным процедурам. Точную стоимость уточняйте при
        записи.
      </p>

      <div className="mb-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm">
        ⚠️ <strong>Все цены ниже — TBD.</strong> Перед публикацией требуется
        заполнить реальные цифры из прайс-листа санатория.
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-zinc-300">
          <thead className="bg-zinc-100">
            <tr>
              <th className="border border-zinc-300 p-3 text-left">
                Процедура
              </th>
              <th className="border border-zinc-300 p-3 text-left">
                Длительность
              </th>
              <th className="border border-zinc-300 p-3 text-left">
                Курс
              </th>
              <th className="border border-zinc-300 p-3 text-left">
                Стоимость
              </th>
            </tr>
          </thead>
          <tbody>
            {THERAPIES.map((t) => (
              <tr key={t.slug}>
                <td className="border border-zinc-300 p-3">
                  <Link
                    href={`/terapii/${t.slug}/`}
                    className="font-medium text-emerald-700 hover:underline"
                  >
                    {t.name}
                  </Link>
                </td>
                <td className="border border-zinc-300 p-3 text-sm text-zinc-700">
                  {t.duration}
                </td>
                <td className="border border-zinc-300 p-3 text-sm text-zinc-700">
                  {t.course}
                </td>
                <td className="border border-zinc-300 p-3">
                  <span className="inline-block rounded bg-amber-100 px-2 py-1 text-xs text-amber-900">
                    TBD
                  </span>
                </td>
              </tr>
            ))}
            <tr>
              <td className="border border-zinc-300 p-3 font-medium">
                Консультация врача ТКМ
              </td>
              <td className="border border-zinc-300 p-3 text-sm text-zinc-700">
                30 мин
              </td>
              <td className="border border-zinc-300 p-3 text-sm text-zinc-700">
                1+ сеансов
              </td>
              <td className="border border-zinc-300 p-3">
                <span className="inline-block rounded bg-amber-100 px-2 py-1 text-xs text-amber-900">
                  TBD
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="mt-12 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="mb-3 text-xl font-semibold">Что включено</h2>
        <ul className="list-disc space-y-1 pl-6 text-sm text-zinc-700">
          <li>Первичная и заключительная консультации врача ТКМ</li>
          <li>Пульсовая диагностика</li>
          <li>Русскоязычный медицинский переводчик на всех приёмах</li>
          <li>
            Индивидуальный план лечения на бумаге{" "}
            <span className="inline-block rounded bg-amber-100 px-1 text-xs text-amber-900">
              TBD — формат
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="mb-3 text-xl font-semibold">Что НЕ включено</h2>
        <ul className="list-disc space-y-1 pl-6 text-sm text-zinc-700">
          <li>Проживание (бронируется отдельно)</li>
          <li>Питание</li>
          <li>Авиабилеты</li>
          <li>Дополнительные процедуры сверх программы</li>
        </ul>
      </section>

      <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm">
        ⚠️ <strong>Важно:</strong> индивидуальные результаты могут
        отличаться. Стоимость программы не зависит от результата. Перед
        записью рекомендуем получить{" "}
        <Link href="/kontakty/" className="text-emerald-700 hover:underline">
          бесплатную консультацию
        </Link>
        .
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/kontakty/"
          className="inline-block rounded-md bg-emerald-700 px-8 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Узнать точную стоимость
        </Link>
      </div>
    </main>
  );
}