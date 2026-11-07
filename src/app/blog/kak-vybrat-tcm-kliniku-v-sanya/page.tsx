import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

export const metadata: Metadata = {
  title:
    "Как выбрать клинику ТКМ в Санья: гид для русских гостей | fenix-sanyamed",
  description:
    "Подробный гид: как выбрать клинику традиционной китайской медицины на Хайнане. На что обратить внимание: лицензия, врачи, процедуры, цены, безопасность.",
  ...blogMetadata({
    title: "Как выбрать клинику ТКМ в Санья: гид для русских гостей",
    description:
      "Как выбрать клинику ТКМ в Санья: лицензия, врачи, процедуры, цены, безопасность.",
    url: "https://www.fenix-sanyamed.com/blog/kak-vybrat-tcm-kliniku-v-sanya/",
    datePublished: "2026-09-06",
    dateModified: "2026-10-17",
    keywords: ["выбрать клинику ТКМ", "Санья", "Хайнань", "русский гид"],
    languages: {
      ru: "https://www.fenix-sanyamed.com/blog/kak-vybrat-tcm-kliniku-v-sanya/",
      "x-default": "https://www.fenix-sanyamed.com/blog/kak-vybrat-tcm-kliniku-v-sanya/",
      en: "https://www.fenix-sanyamed.com/en/blog/kak-vybrat-tcm-kliniku-v-sanya/",
    },
  }),
};

export default function BlogPost() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <BlogSchema
        title="Как выбрать клинику ТКМ в Санья: гид для русских гостей"
        description="Как выбрать клинику традиционной китайской медицины на Хайнане: лицензия, врачи, процедуры, цены, безопасность."
        url="https://www.fenix-sanyamed.com/blog/kak-vybrat-tcm-kliniku-v-sanya/"
        datePublished="2026-09-06"
        dateModified="2026-10-17"
        keywords={["выбрать клинику", "ТКМ", "Санья"]}
      />
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog/" className="hover:underline">
          Блог
        </Link>
        <span className="mx-2">/</span>
        <span>Как выбрать клинику ТКМ</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-09-06</p>
      <h1 className="mb-6 text-4xl font-bold">
        Как выбрать клинику традиционной китайской медицины в Санья
      </h1>

      <p className="mb-6 text-lg italic text-zinc-600">
        Гид для русских гостей Хайнаня: на что обратить внимание при выборе
        клиники ТКМ — лицензия, врачи, процедуры, цены, безопасность.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          1. Лицензия и правовой статус
        </h2>
        <p className="mb-3 text-zinc-700">
          Первое, что нужно проверить — наличие у клиники государственной
          лицензии на осуществление медицинской деятельности в области
          традиционной китайской медицины. В Китае такая лицензия выдаётся
          отдельно от общеврачебной практики.
        </p>
        <p className="text-zinc-700">
          <strong>Что спросить у клиники:</strong> номер лицензии, дата
          выдачи, орган выдавший. Эту информацию можно проверить через
          китайские открытые реестры.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          2. Квалификация врачей
        </h2>
        <p className="mb-3 text-zinc-700">
          Обратите внимание на образование и опыт врачей. В ТКМ принято
          указывать университет, где врач проходил обучение, и годы практики.
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Университет ТКМ, который окончил врач (например, Шанхайский, Хэйлунцзянский)</li>
          <li>Опыт работы (от 10 лет — норма для серьёзного специалиста)</li>
          <li>Наличие учёной степени (доктор наук — приветствуется)</li>
          <li>Специализация (ортопедия, гинекология, общая практика — что соответствует вашим задачам)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          3. Пульсовая диагностика
        </h2>
        <p className="mb-3 text-zinc-700">
          Это ключевой метод ТКМ. Настоящий врач ТКМ проводит диагностику по
          пульсу, осматривает язык, задаёт подробные вопросы о состоянии.
          <strong> Длительность первичной диагностики должна быть не менее 20–30 минут.</strong>
        </p>
        <p className="text-zinc-700">
          Если «диагностика» занимает 5 минут и сразу предлагают процедуры —
          это повод усомниться в квалификации.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          4. Спектр процедур
        </h2>
        <p className="mb-3 text-zinc-700">
          Хорошая клиника ТКМ предлагает не только иглоукалывание. Полный
          спектр включает:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Иглоукалывание (акупунктура)</li>
          <li>Массаж Туйна</li>
          <li>Фитотерапия (китайские травы)</li>
          <li>Вакуум-терапия (банки)</li>
          <li>Гуаша</li>
          <li>Прогревание мокса (艾灸)</li>
          <li>Иглонож (малая операция без разреза)</li>
          <li>Имплантация кетгута (для программ снижения веса)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          5. Безопасность и гигиена
        </h2>
        <p className="mb-3 text-zinc-700">
          Обязательные стандарты безопасности:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>
            <strong>Иглы — только одноразовые.</strong> Вскрытие упаковки при
            пациенте.
          </li>
          <li>Банки — современные силиконовые (не стеклянные с огнём)</li>
          <li>Стерильные инструменты</li>
          <li>Чистое бельё, одноразовые простыни</li>
          <li>Врач моет руки / использует перчатки при необходимости</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          6. Языковая поддержка
        </h2>
        <p className="mb-3 text-zinc-700">
          Для русских гостей критично: клиника должна предоставлять
          русскоязычного переводчика на всех приёмах. Без этого вы не
          сможете:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Точно описать симптомы</li>
          <li>Понять рекомендации врача</li>
          <li>Узнать противопоказания конкретной процедуры</li>
        </ul>
        <p className="mt-3 text-zinc-700">
          <strong>Проверьте заранее:</strong> есть ли постоянный
          русскоязычный координатор, а не «по запросу за дополнительную
          плату».
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          7. Цены и прозрачность
        </h2>
        <p className="mb-3 text-zinc-700">
          Хорошая клиника предоставляет <strong>письменный прейскурант</strong>{" "}
          до начала лечения. Цены должны быть чёткими:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Стоимость консультации</li>
          <li>Стоимость каждой процедуры (за сеанс)</li>
          <li>Стоимость курса (если предлагают пакет)</li>
          <li>Что включено / что не включено</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          8. Чего остерегаться
        </h2>
        <p className="mb-3 text-zinc-700">
          <strong>Красные флаги:</strong>
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>
            Обещания «100% излечения», «гарантированный результат» — это
            нарушение как российского, так и китайского законодательства о
            рекламе медицинских услуг.
          </li>
          <li>Требование предоплаты за весь курс до первой консультации</li>
          <li>Отсутствие лицензии или отказ её показать</li>
          <li>«Диагностика» за 5 минут и сразу процедуры</li>
          <li>Отсутствие русскоязычного переводчика</li>
        </ul>
      </section>

      <section className="mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">
          Как устроен медицинский центр fenix-sanyamed
        </h2>
        <p className="mb-3 text-zinc-700">
          Наш центр работает с <strong>2007 года</strong>. За это время мы:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-zinc-700">
          <li>Получили государственную лицензию на ТКМ</li>
          <li>Открыли 4 филиала в бухтах Санья (Дадунхай, Ялунвань, Саньябэй)</li>
          <li>Собрали команду из 8 врачей с опытом 20–43 лет</li>
          <li>Разработали 10 комплексных программ для разных состояний</li>
        </ul>
        <p className="mt-4 text-zinc-700">
          Для русских гостей — бесплатная первичная диагностика и бесплатный
          трансфер из аэропорта.
        </p>
        <div className="mt-6 text-center">
          <Link
            href="/kontakty/"
            className="inline-block rounded-md bg-emerald-700 px-8 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Записаться на консультацию
          </Link>
        </div>
      </section>

      <div className="mt-10 text-center">
        <Link href="/blog/" className="text-sm text-emerald-700 hover:underline">
          ← Все статьи
        </Link>
      </div>
    </main>
  );
}