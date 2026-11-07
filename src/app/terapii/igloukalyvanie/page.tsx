import type { Metadata } from "next";
import Link from "next/link";
import { getTerapiiSeo } from "@/data/seo/terapii.seo";

const SEO = getTerapiiSeo("igloukalyvanie");

// ⚠️ ЧЕРНОВИК — все цифры, имена и показания должны быть подтверждены клиентом.
//   Перед публикацией обязательно:
//   1) Проверить реальные цены (раздел "Длительность и стоимость")
//   2) Проверить имена врачей
//   3) Согласовать точные показания / противопоказания с главным врачом
//   4) Заменить placeholder фотографии на реальные фото санатория

export const metadata: Metadata = {
  // title 按 GSC 实测词序优化：хайнань иглоукалывание（排名 7.0 → 目标前 5）
  // 「Иглоукалывание на Хайнане」词形与搜索 query 完全一致
  title: "Иглоукалывание на Хайнане — цены и запись в Санья",
  description:
    "Иглоукалывание (акупунктура) на Хайнане в Санья: центр традиционной китайской медицины, врачи с опытом 40+ лет, индивидуальные программы после пульсовой диагностики, русскоязычный координатор. Цены на курс.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/terapii/igloukalyvanie/",
    // hreflang ВЗАИМЕН: EN-страница /en/terapii/igloukalyvanie/ уже
    // ссылается сюда (ru + x-default), но RU-страница не отвечала →
    // Яндекс/Google игнорируют весь кластер. Статический маршрут
    // затеняет динамический terapii/[slug], поэтому блок languages
    // нужно дублировать здесь (см. terapii/tuyna/page.tsx).
    languages: {
      ru: "https://www.fenix-sanyamed.com/terapii/igloukalyvanie/",
      "x-default": "https://www.fenix-sanyamed.com/terapii/igloukalyvanie/",
      en: "https://www.fenix-sanyamed.com/en/terapii/igloukalyvanie/",
    },
  },
};

const procedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Иглоукалывание",
  alternateName: ["Акупунктура", "Рефлексотерапия", "Иглорефлексотерапия"],
  description:
    "Метод традиционной китайской медицины: введение тонких одноразовых игл в биологически активные точки тела для восстановления баланса.",
  procedureType: "Традиционная китайская медицина",
  bodyLocation: "Точки акупунктуры на теле",
  howPerformed:
    "Врач устанавливает от 6 до 20 одноразовых стерильных игл на 20–40 минут. Сеансы рекомендуются курсом 5–10 процедур.",
  preparation: "Консультация врача, пульсовая диагностика, сбор анамнеза",
  provider: {
    "@type": "MedicalClinic",
    "@id": "https://www.fenix-sanyamed.com/#clinic",
  },
};

export default function IgloukalyvaniePage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />

      {/* Breadcrumb navigation */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/terapii/" className="hover:underline">
          Процедуры
        </Link>
        <span className="mx-2">/</span>
        <span>Иглоукалывание</span>
      </nav>

      <h1 className="mb-6 text-4xl font-bold">
        Иглоукалывание на Хайнане — центр ТКМ в Санья
      </h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Что такое иглоукалывание
        </h2>
        <p className="mb-4 text-lg leading-relaxed">
          Иглоукалывание — один из древнейших методов традиционной китайской
          медицины. Возраст практики — более 2000 лет. Суть метода: врач вводит
          очень тонкие одноразовые иглы в определённые точки на теле — они
          расположены вдоль так называемых <strong>меридианов</strong>{" "}
          (энергетических каналов). Цель — восстановить свободное движение
          энергии и помочь телу вернуться к естественному балансу.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Иглы — одноразовые, стерильные, очень тонкие (диаметр около 0,2 мм).
          Многие наши гости отмечают, что ощущения во время сеанса мягче, чем
          они ожидали. Многие описывают их как «лёгкое покалывание», «тепло»
          или «приятное расслабление».
        </p>
        <p className="text-base italic text-gray-700">
          <strong>Важно:</strong> индивидуальные ощущения и реакции могут
          отличаться. Перед первым сеансом врач проводит пульсовую диагностику
          и подбирает точки и длительность воздействия индивидуально.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Китайское иглоукалывание: чем отличается от европейского
        </h2>
        <p className="mb-4">
          Китайское иглоукалывание — это часть целостной системы ТКМ, а не
          отдельная процедура. Европейская акупунктура чаще работает по
          протоколу «симптом → набор точек». В китайской традиции врач сначала
          проводит пульсовую диагностику и осмотр языка, а затем выстраивает
          схему, которая может меняться от сеанса к сеансу.
        </p>
        <p className="mb-4">
          Практические отличия, которые заметны пациенту:
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>
            иглы тоньше и ставятся на меньшую глубину, чем в европейских
            клиниках;
          </li>
          <li>
            количество и расположение точек пересматривается по ходу курса, а не
            фиксируется один раз;
          </li>
          <li>
            иглоукалывание почти всегда сочетается с другими методами — Туйна,
            прижиганием, фитотерапией.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Иглоукалывание в Китае для русских пациентов
        </h2>
        <p className="mb-4">
          Русские пациенты приезжают на Хайнань за иглоукалыванием по двум
          причинам: цена и доступность. Сеанс в Санья стоит 150–400 юаней — это
          заметно дешевле, чем в Москве, при том что процедуру выполняет врач с
          китайским профильным образованием.
        </p>
        <p className="mb-4">
          Вторая причина — логистика. Для граждан России действует безвизовый
          въезд на Хайнань до 30 дней, а прямые рейсы в Санья летают из 14
          городов России. Курс из 10 сеансов легко укладывается в две недели
          вместе с отдыхом на море.
        </p>
        <p className="mb-4">
          Русскоязычный медицинский переводчик сопровождает все приёмы и входит
          в стоимость программы — языковой барьер на диагностике отсутствует.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Когда применяют иглоукалывание
        </h2>
        <p className="mb-4">
          В нашем санатории иглоукалывание часто включают в программы при
          следующих состояниях (список не является рекламой лечения конкретных
          заболеваний):
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-6">
          <li>боли в спине и шее, остеохондроз, грыжи межпозвонковых дисков</li>
          <li>хронические головные боли, мигрени</li>
          <li>нарушения сна, синдром хронической усталости</li>
          <li>восстановление после перенесённых заболеваний</li>
          <li>хронические заболевания желудочно-кишечного тракта</li>
          <li>аллергические реакции в период ремиссии</li>
          <li>боли в суставах, артрозы</li>
        </ul>
        <p className="text-base italic text-gray-700">
          По отзывам пациентов, многие отмечают улучшение самочувствия.
          Индивидуальные результаты могут отличаться — программа всегда
          подбирается врачом на основании пульсовой диагностики.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Как проходит сеанс в медицинском центре fenix-sanyamed
        </h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Первичная консультация (≈ 30 мин)</strong> — врач проводит
            пульсовую диагностику, осмотр языка, беседу с гостем.
            Русскоязычный переводчик присутствует на всех приёмах — ничего не
            теряется в переводе.
          </li>
          <li>
            <strong>Составление индивидуальной программы</strong> — врач
            объясняет, какие точки будут задействованы, как часто и какой
            длительности сеансы.
          </li>
          <li>
            <strong>Сеанс иглоукалывания (≈ 40–60 мин)</strong> — гость лежит
            в тихой, тёплой комнате. Врач устанавливает от 6 до 20 игл
            (зависит от программы). Гость отдыхает, многие засыпают — это
            нормально.
          </li>
          <li>
            <strong>После сеанса</strong> — короткий отдых, тёплый травяной
            напиток. Врач обсуждает ощущения, корректирует программу при
            необходимости.
          </li>
        </ol>
        <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm">
          ⚠️ <strong>Все иглы — одноразовые</strong>, вскрываются при госте.
          Это принципиальный стандарт нашего санатория.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">
          Длительность и стоимость
        </h2>
        <p className="mb-4 text-lg text-zinc-700">
          Один сеанс китайского иглоукалывания в Санья стоит{" "}
          <strong>150–400 юаней</strong>. Курс из 5–10 сеансов обходится в
          750–4 000 юаней. Первичная консультация с пульсовой диагностикой —
          бесплатно.
        </p>
        <table className="mt-6 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">
                Параметр
              </th>
              <th className="border border-gray-300 p-3 text-left">
                Ориентир
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-3">
                Длительность одного сеанса
              </td>
              <td className="border border-gray-300 p-3">40–60 минут</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">
                Рекомендованный курс
              </td>
              <td className="border border-gray-300 p-3">5–10 сеансов</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">
                Консультация врача
              </td>
              <td className="border border-gray-300 p-3">
                включена в стоимость курса
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3">
                Русскоязычный переводчик
              </td>
              <td className="border border-gray-300 p-3">
                включён во все приёмы
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Противопоказания</h2>
        <p className="mb-4">
          Перед первым сеансом обязательна консультация врача. Иглоукалывание
          не применяется (или применяется с осторожностью) при:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>онкологических заболеваниях (стадия лечения)</li>
          <li>острых инфекционных заболеваниях, лихорадке</li>
          <li>тяжёлых заболеваниях сердечно-сосудистой системы (в острой фазе)</li>
          <li>беременности (отдельные точки и техники)</li>
          <li>нарушениях свёртываемости крови</li>
          <li>кожных заболеваниях в зоне предполагаемого воздействия</li>
        </ul>
      </section>

      {/* === B3: ПОСЛЕ СЕАНСА === */}
      {SEO && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">
            После сеанса: что происходит
          </h2>
          <p className="leading-relaxed">{SEO.after}</p>
        </section>
      )}

      {/* === B3: КАК ПОДГОТОВИТЬСЯ === */}
      {SEO && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">
            Как подготовиться к приёму
          </h2>
          <p className="leading-relaxed">{SEO.combination}</p>
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">FAQ — Иглоукалывание</h2>
        <div className="space-y-3">
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Это больно?
            </summary>
            <p className="mt-2">
              Нет. Иглы очень тонкие. Большинство гостей описывают ощущения
              как лёгкое покалывание или тепло. Многие засыпают во время
              сеанса.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Это безопасно?
            </summary>
            <p className="mt-2">
              В нашем санатории используются только одноразовые стерильные
              иглы. Перед сеансом врач проводит диагностику и учитывает
              противопоказания.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Сколько сеансов нужно?
            </summary>
            <p className="mt-2">
              Зависит от индивидуальной ситуации. Врач подбирает программу
              после диагностики. Часто рекомендуют курс 5–10 сеансов.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Можно ли совмещать с другими процедурами?
            </summary>
            <p className="mt-2">
              Да. В медицинском центре fenix-sanyamed часто сочетают иглоукалывание с массажем
              Туйна и фитотерапией. Врач составит индивидуальный план.
            </p>
          </details>
          <details className="rounded-md border border-gray-300 p-4">
            <summary className="cursor-pointer font-semibold">
              Нужен ли переводчик?
            </summary>
            <p className="mt-2">
              Нет, не нужно беспокоиться — русскоязычный медицинский
              переводчик присутствует на всех приёмах.
            </p>
          </details>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Связанные процедуры</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href="/terapii/tuyna/"
            className="rounded-md border border-gray-300 p-4 hover:bg-gray-50"
          >
            Туйна — китайский лечебный массаж →
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
          Свяжитесь с нами — мы подберём индивидуальную программу
          иглоукалывания.
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