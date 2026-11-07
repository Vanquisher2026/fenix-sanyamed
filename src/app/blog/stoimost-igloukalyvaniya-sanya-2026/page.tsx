import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

export const metadata: Metadata = {
  title:
    "Стоимость лечения иглоукалыванием в Санья в 2026 году | fenix-sanyamed",
  description:
    "Цены на иглоукалывание, массаж Туйна и комплексные программы ТКМ в клинике fenix-sanyamed в Санья.",
  ...blogMetadata({
    title:
      "Стоимость лечения иглоукалыванием в Санья в 2026 году",
    description:
      "Цены на иглоукалывание, массаж Туйна и комплексные программы ТКМ в клинике fenix-sanyamed в Санья.",
    url: "https://www.fenix-sanyamed.com/blog/stoimost-igloukalyvaniya-sanya-2026/",
    datePublished: "2026-10-04",
    dateModified: "2026-10-17",
    keywords: [
      "стоимость иглоукалывания",
      "цена иглоукалывания в Китае",
      "программы ТКМ цена",
    ],
    languages: {
      ru: "https://www.fenix-sanyamed.com/blog/stoimost-igloukalyvaniya-sanya-2026/",
      "x-default": "https://www.fenix-sanyamed.com/blog/stoimost-igloukalyvaniya-sanya-2026/",
      en: "https://www.fenix-sanyamed.com/en/blog/stoimost-igloukalyvaniya-sanya-2026/",
    },
  }),
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <BlogSchema
        title="Стоимость лечения иглоукалыванием в Санья в 2026 году"
        description="Цены на иглоукалывание, массаж Туйна и комплексные программы ТКМ в клинике fenix-sanyamed в Санья."
        url="https://www.fenix-sanyamed.com/blog/stoimost-igloukalyvaniya-sanya-2026/"
        datePublished="2026-10-04"
        dateModified="2026-10-17"
        keywords={["стоимость иглоукалывания", "ТКМ цена"]}
      />
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/blog/" className="hover:underline">Блог</Link>
        <span className="mx-2">/</span>
        <span>Стоимость иглоукалывания</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-10-04</p>
      <h1 className="mb-6 text-4xl font-bold">
        Стоимость лечения иглоукалыванием в Санья в 2026 году
      </h1>

      <p className="mb-6 text-lg italic text-zinc-600">
        Полный разбор ценообразования на лечение методами ТКМ в клиниках Саньи.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Что входит в стоимость лечения</h2>
        <p className="mb-3 text-zinc-700">
          Бесплатно: первичная диагностика по пульсу, трансфер из аэропорта,
          русскоязычный координатор, подбор индивидуальной программы лечения.
        </p>
        <p className="text-zinc-700">
          В стоимость курса входят: процедуры ТКМ (иглоукалывание, Туйна,
          прижигание, кетгут-имплантация), консультации врачей с опытом более
          40 лет, повторные диагностики.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Наиболее востребованные процедуры
        </h2>
        <ul className="list-disc pl-6 text-zinc-700">
          <li>Иглоукалывание — хронические боли, бессонница, головные боли</li>
          <li>Массаж Туйна — остеохондроз, восстановление ОДА</li>
          <li>Фитотерапия — общее укрепление организма</li>
          <li>Кетгут-имплантация — снижение веса</li>
          <li>Прижигание — простудные заболевания</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Почему лечение в Китае дешевле
        </h2>
        <p className="text-zinc-700">
          Стоимость лечения в нашей клинике на 30-40% ниже, чем в европейских
          центрах ТКМ, при сопоставимом качестве. Дополнительно экономите на
          билетах (прямые рейсы Москва-Санья) и безвизовом режиме.
        </p>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--primary)] px-8 py-10 text-white">
        <h2 className="mb-4 text-2xl font-bold">
          Запишитесь на бесплатную консультацию
        </h2>
        <p className="mb-6 text-lg text-white/90">
          Узнайте точную стоимость лечения. Бесплатная первичная диагностика,
          трансфер из аэропорта, русскоязычный координатор.
        </p>
        <Link
          href="/kontakty/"
          className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-wider text-[var(--primary)] transition hover:bg-zinc-100"
        >
          Связаться с нами
        </Link>
      </section>
    </main>
  );
}
