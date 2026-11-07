import type { Metadata } from "next";
import Link from "next/link";
import { BlogSchema, blogMetadata } from "@/components/BlogSchema";

export const metadata: Metadata = {
  title:
    "Отзывы пациентов о лечении в Китае ТКМ: реальный опыт 2026 | fenix-sanyamed",
  description:
    "Реальные отзывы пациентов о лечении методами традиционной китайской медицины в клинике fenix-sanyamed в Санья. Опыт иглоукалывания, массажа Туйна, фитотерапии.",
  ...blogMetadata({
    title:
      "Отзывы пациентов о лечении в Китае ТКМ: реальный опыт 2026",
    description:
      "Реальные отзывы пациентов о лечении методами ТКМ в клинике fenix-sanyamed в Санья.",
    url: "https://www.fenix-sanyamed.com/blog/otzyvy-patsientov-tkm/",
    datePublished: "2026-10-05",
    dateModified: "2026-10-17",
    keywords: [
      "отзывы иглоукалывание",
      "отзывы лечение в Китае",
      "опыт ТКМ",
      "отзывы пациентов китайская медицина",
    ],
    languages: {
      ru: "https://www.fenix-sanyamed.com/blog/otzyvy-patsientov-tkm/",
      "x-default": "https://www.fenix-sanyamed.com/blog/otzyvy-patsientov-tkm/",
      en: "https://www.fenix-sanyamed.com/en/blog/otzyvy-patsientov-tkm/",
    },
  }),
  keywords: [
    "отзывы иглоукалывание",
    "отзывы лечение в Китае",
    "опыт ТКМ",
    "отзывы пациентов китайская медицина",
  ],
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <BlogSchema
        title="Отзывы пациентов о лечении в Китае ТКМ: реальный опыт 2026"
        description="Реальные отзывы пациентов о лечении методами ТКМ в клинике fenix-sanyamed в Санья. Опыт иглоукалывания, массажа Туйна, фитотерапии."
        url="https://www.fenix-sanyamed.com/blog/otzyvy-patsientov-tkm/"
        datePublished="2026-10-05"
        dateModified="2026-10-17"
        keywords={["отзывы", "опыт ТКМ", "иглоукалывание"]}
      />
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/blog/" className="hover:underline">Блог</Link>
        <span className="mx-2">/</span>
        <span>Отзывы пациентов</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-10-05</p>
      <h1 className="mb-6 text-4xl font-bold">
        Отзывы пациентов о лечении методами ТКМ в нашей клинике
      </h1>

      <p className="mb-6 text-lg italic text-zinc-600">
        Реальные истории людей, которые прошли лечение в нашей клинике традиционной китайской медицины в Санья. Опыт, результаты, советы.
      </p>

      <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm">
        <strong>Важно:</strong> Все истории собраны с согласия пациентов. Индивидуальные результаты лечения могут отличаться. Программа всегда подбирается врачом индивидуально.
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          История 1: Лечение хронической боли в спине (грыжа L4-L5)
        </h2>
        <div className="mb-4 rounded-lg bg-zinc-50 p-5">
          <p className="mb-2 text-sm text-zinc-500">Андрей, 47 лет, Москва</p>
          <p className="mb-3 text-zinc-700 italic">
            «Приехал в клинику в марте 2026 с грыжей L4-L5. В Москве врачи предлагали операцию, но я хотел попробовать консервативное лечение. Врач Ли Юн Фан провёл пульсовую диагностику и назначил комплексную программу: иглоукалывание + массаж Туйна + кетгут-имплантация. После 10 дней лечения боль ушла на 70%, я смог нормально ходить без обезболивающих.»
          </p>
          <p className="text-zinc-700">
            <strong>Программа:</strong> Восстановление опорно-двигательного аппарата, 10 дней
          </p>
          <p className="text-sm text-zinc-500">⭐⭐⭐⭐⭐</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          История 2: Женское здоровье — восстановление цикла
        </h2>
        <div className="mb-4 rounded-lg bg-zinc-50 p-5">
          <p className="mb-2 text-sm text-zinc-500">Елена, 38 лет, Санкт-Петербург</p>
          <p className="mb-3 text-zinc-700 italic">
            «У меня были проблемы с менструальным циклом после длительного стресса. Гинеколог в Москве предложила гормональную терапию, но я отказалась. По совету подруги обратилась в fenix-sanyamed. Врач Чжан Ли Ин подобрала программу из иглоукалывания, фитотерапии и специального массажа. За 14 дней цикл восстановился, плюс улучшилось общее самочувствие. Очень благодарна команде!»
          </p>
          <p className="text-zinc-700">
            <strong>Программа:</strong> Женское здоровье, 14 дней
          </p>
          <p className="text-sm text-zinc-500">⭐⭐⭐⭐⭐</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          История 3: Антистресс после выгорания
        </h2>
        <div className="mb-4 rounded-lg bg-zinc-50 p-5">
          <p className="mb-2 text-sm text-zinc-500">Дмитрий, 42 года, Екатеринбург</p>
          <p className="mb-3 text-zinc-700 italic">
            «IT-менеджер, последние 2 года жуткое выгорание — бессонница, тревожность, хроническая усталость. Друзья посоветовали ТКМ. Прошёл 7-дневную антистресс-программу: иглоукалывание, Туйна, травы. Уже на 3-й день стал нормально спать. После возвращения домой эффект сохраняется — прошло 4 месяца, я всё ещё спокойнее. Возможно вернусь через год.»
          </p>
          <p className="text-zinc-700">
            <strong>Программа:</strong> Антистресс, 7 дней
          </p>
          <p className="text-sm text-zinc-500">⭐⭐⭐⭐⭐</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          История 4: Снижение веса с помощью кетгут-имплантации
        </h2>
        <div className="mb-4 rounded-lg bg-zinc-50 p-5">
          <p className="mb-2 text-sm text-zinc-500">Ольга, 35 лет, Новосибирск</p>
          <p className="mb-3 text-zinc-700 italic">
            «Мой вес до лечения — 84 кг. После 14-дневной программы с кетгут-имплантацией + диетой и физической активностью — 76 кг. Это 8 кг за 2 недели! Кетгут реально работает — аппетит уменьшился, нет срывов. Сейчас дома продолжаю поддерживать результат, вес держится.»
          </p>
          <p className="text-zinc-700">
            <strong>Программа:</strong> Очищение и снижение веса, 14 дней
          </p>
          <p className="text-sm text-zinc-500">⭐⭐⭐⭐⭐</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Что говорят о нашей клинике
        </h2>
        <p className="mb-3 text-zinc-700">
          За 19 лет работы (с 2007 года) мы приняли более 10 000 пациентов из России и стран СНГ. Большинство наших гостей возвращаются к нам снова или рекомендуют клинику друзьям.
        </p>
        <p className="text-zinc-700">
          <strong>Что выделяют наши пациенты:</strong>
        </p>
        <ul className="mb-3 list-disc pl-6 text-zinc-700">
          <li>Профессионализм врачей (опыт более 40 лет)</li>
          <li>Русскоязычный координатор на всех этапах</li>
          <li>Бесплатная первичная диагностика и трансфер</li>
          <li>Доступные цены по сравнению с Европой</li>
          <li>Безвизовый режим — 30 дней без оформления визы</li>
          <li>Красивый климат Хайнаня для восстановления</li>
        </ul>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--primary)] px-8 py-10 text-white">
        <h2 className="mb-4 text-2xl font-bold">
          Хотите стать следующим?
        </h2>
        <p className="mb-6 text-lg text-white/90">
          Запишитесь на бесплатную консультацию — обсудим вашу ситуацию и подберём программу лечения.
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
