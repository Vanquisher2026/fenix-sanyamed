import type { Metadata } from "next";
import Link from "next/link";

// ⚠️ ЧЕРНОВИК — все цифры, имена и показания должны быть подтверждены клиентом.

export const metadata: Metadata = {
  title: "Массаж Туйна в медицинском центре fenix-sanyamed | Цены · Запись · Отзывы",
  description:
    "Китайский лечебный массаж Туйна в медицинском центре традиционной медицины fenix-sanyamed на Хайнане. Индивидуальные программы, русскоязычные переводчики, опытные мастера.",
  alternates: {
    canonical: "https://fenix-sanyamed.com/terapii/tuyna/",
  },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Массаж Туйна",
  alternateName: ["Tuina", "Tui na", "Туй-на"],
  description:
    "Древняя техника лечебного массажа традиционной китайской медицины. Работа с меридианами и акупунктурными точками через давление, растирание, разминание, вибрацию и постукивание.",
  procedureType: "Традиционная китайская медицина",
  bodyLocation: "Всё тело (спина, шея, плечи, ноги, руки)",
  howPerformed:
    "Мастер работает через мягкую ткань или с применением масел. Длительность сеанса 30–60 минут. Курс 3–7 процедур.",
  preparation: "Консультация врача, пульсовая диагностика, сбор анамнеза",
  provider: {
    "@type": "MedicalClinic",
    "@id": "https://fenix-sanyamed.com/#clinic",
  },
};

export default function TuynaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />

      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/terapii/" className="hover:underline">
          Процедуры
        </Link>
        <span className="mx-2">/</span>
        <span>Массаж Туйна</span>
      </nav>

      <h1 className="mb-6 text-4xl font-bold">
        Массаж Туйна в медицинском центре fenix-sanyamed на Хайнане
      </h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Что такое Туйна</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Туйна (推拿, «tuī ná») — древняя техника лечебного массажа, одна из
          основных процедур традиционной китайской медицины. Возраст практики
          — более 2000 лет. Название буквально означает «толкать и
          захватывать»: мастер работает с телом гостя, используя разные техники
          давления, растирания, разминания, постукивания и вибрации.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          В отличие от европейского расслабляющего массажа, Туйна — это{" "}
          <strong>лечебная техника</strong>, которая работает с теми же
          меридианами и точками, что и иглоукалывание, но без проникновения
          через кожу. Многие гости санатория описывают ощущения как «глубокий,
          но мягкий», «совсем не похоже на обычный массаж».
        </p>
        <p className="text-base italic text-gray-700">
          <strong>Важно:</strong> индивидуальные ощущения и реакции могут
          отличаться. Перед первым сеансом врач проводит пульсовую диагностику
          и подбирает технику, длительность и интенсивность индивидуально.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Чем Туйна отличается от обычного массажа</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Параметр</th>
                <th className="border border-gray-300 p-3 text-left">Обычный массаж</th>
                <th className="border border-gray-300 p-3 text-left">Туйна</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Цель</td>
                <td className="border border-gray-300 p-3">Расслабление, комфорт</td>
                <td className="border border-gray-300 p-3">Восстановление баланса, работа с меридианами</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Техники</td>
                <td className="border border-gray-300 p-3">Поглаживание, разминание</td>
                <td className="border border-gray-300 p-3">Давление, растирание, вибрация, постукивание + работа с акупунктурными точками</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Длительность сеанса</td>
                <td className="border border-gray-300 p-3">60–90 мин</td>
                <td className="border border-gray-300 p-3">30–60 мин (лечебный эффект сильнее)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Кто проводит</td>
                <td className="border border-gray-300 p-3">Массажист</td>
                <td className="border border-gray-300 p-3">Мастер Туйна (многолетнее обучение ТКМ)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Подход к телу</td>
                <td className="border border-gray-300 p-3">Зоны напряжения</td>
                <td className="border border-gray-300 p-3">Системная работа с меридианами</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Как проходит сеанс</h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Консультация врача (≈ 15–20 мин)</strong> — пульсовая
            диагностика, уточнение жалоб. Русскоязычный переводчик присутствует
            на всех приёмах.
          </li>
          <li>
            <strong>Сеанс Туйна (≈ 30–60 мин)</strong> — гость лежит на
            специальной кушетке. Мастер работает через мягкую ткань или с
            применением масел (в зависимости от программы). Многие гости
            отмечают, что после сеанса — «как заново родился».
          </li>
          <li>
            <strong>После сеанса</strong> — короткий отдых, тёплый травяной
            напиток.
          </li>
        </ol>
        <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm">
          ⚠️ <strong>Одежда не снимается полностью</strong> — открываются
          только зоны работы. Это принципиальный стандарт санатория: комфорт и
          уважение к гостю.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Длительность и стоимость</h2>
        <div className="rounded-md border border-amber-300 bg-amber-50 p-4 text-sm">
          ⚠️ <strong>Черновые цифры — требуется подтверждение клиента.</strong>{" "}
          В комментариях реальных гостей на Yandex Maps (2024) встречались
          ориентиры: массаж — около 350 юаней за сеанс, программы с Туйна на
          5–7 дней — от 1500 до 2500 юаней.
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Противопоказания</h2>
        <p className="mb-4">
          Перед первым сеансом обязательна консультация врача. Туйна не
          применяется (или применяется с осторожностью) при:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>острых инфекционных заболеваниях, лихорадке</li>
          <li>онкологических заболеваниях (стадия лечения)</li>
          <li>тяжёлых заболеваниях сердечно-сосудистой системы (в острой фазе)</li>
          <li>кожных заболеваниях в зоне предполагаемого воздействия</li>
          <li>тромбозах, тромбофлебитах</li>
          <li>в раннем послеоперационном периоде</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">FAQ — Туйна</h2>
        <div className="space-y-3">
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Чем Туйна отличается от обычного массажа?
            </summary>
            <p className="mt-2">
              Это лечебная техника, работающая с энергетическими меридианами и
              точками тела. В отличие от расслабляющего массажа, Туйна
              направлена на восстановление баланса и работу с конкретными
              состояниями.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Больно ли это?
            </summary>
            <p className="mt-2">
              Нет. Большинство гостей описывают ощущения как «мягкое, но
              глубокое», «очень расслабляющее». Интенсивность всегда
              подбирается индивидуально.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Нужно ли раздеваться?
            </summary>
            <p className="mt-2">
              Нет. Во время сеанса открываются только зоны работы (спина,
              шея, плечи, ноги). Это принципиальный стандарт санатория.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Можно ли совмещать Туйна с иглоукалыванием?
            </summary>
            <p className="mt-2">
              Да. В медицинском центре fenix-sanyamed это одна из самых популярных комбинаций.
              Врач составит индивидуальный план.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Сколько сеансов нужно?
            </summary>
            <p className="mt-2">
              Зависит от индивидуальной ситуации. Врач подбирает программу
              после диагностики. Часто рекомендуют курс 3–7 сеансов.
            </p>
          </details>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Связанные процедуры</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href="/terapii/igloukalyvanie/"
            className="rounded-md border border-gray-300 p-4 hover:bg-gray-50"
          >
            Иглоукалывание →
          </Link>
          <Link
            href="/terapii/vakuum-terapiya/"
            className="rounded-md border border-gray-300 p-4 hover:bg-gray-50"
          >
            Вакуум-терапия (банки) →
          </Link>
          <Link
            href="/terapii/fitoterapiya/"
            className="rounded-md border border-gray-300 p-4 hover:bg-gray-50"
          >
            Фитотерапия →
          </Link>
          <Link
            href="/terapii/guasha/"
            className="rounded-md border border-gray-300 p-4 hover:bg-gray-50"
          >
            Гуаша →
          </Link>
        </div>
      </section>

      <div className="rounded-md border border-blue-300 bg-blue-50 p-6 text-center">
        <h3 className="mb-2 text-xl font-semibold">Записаться на приём</h3>
        <p className="mb-4">
          Свяжитесь с нами — мы подберём индивидуальную программу массажа
          Туйна.
        </p>
        <Link
          href="/kontakty/"
          className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Контакты и запись
        </Link>
      </div>
    </main>
  );
}