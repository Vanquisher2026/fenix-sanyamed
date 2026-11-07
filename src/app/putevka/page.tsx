import Link from "next/link";
import type { Metadata } from "next";
import { PACKAGES, fmtPrice } from "@/data/prices";

export const metadata: Metadata = {
  title: {
    absolute: "Санаторная путёвка на Хайнань — лечение ТКМ, цены и оформление",
  },
  description:
    "Санаторная путёвка на Хайнань: программы лечения ТКМ от 7 до 21 дня, что входит в путёвку, стоимость, документы для оформления. Санаторий ТАЙЦЗИ в Санья.",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/putevka/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/putevka/",
      "x-default": "https://www.fenix-sanyamed.com/putevka/",
      en: "https://www.fenix-sanyamed.com/en/putevka/",
    },
  },
};

const FAQ = [
  {
    q: "Что такое санаторная путёвка и чем она отличается от обычной записи?",
    a: "Путёвка — это договор на медицинское обслуживание, оформленный на конкретного пациента. В неё входит первичная консультация с пульсовой диагностикой, индивидуальный план лечения, ежедневные процедуры, корректировка плана по ходу курса, финальная консультация, русскоязычный координатор и трансфер из аэропорта. Обычная запись — это разовый приём без закреплённого плана процедур.",
  },
  {
    q: "Можно ли перенести путёвку или вернуть деньги?",
    a: "Если даты переносятся по семейным или медицинским причинам, согласуйте это с координатором заранее — санаторий идёт навстречу, когда перенос возможен технически. Возврат средств зависит от того, сколько процедур уже проведено: неиспользованная часть программы пересчитывается. Точные условия фиксируются в договоре, который вы подписываете до оплаты.",
  },
  {
    q: "Нужно ли платить за консультацию отдельно?",
    a: "Нет. Первичная консультация врача ТКМ с пульсовой диагностикой включена в стоимость программы независимо от её длительности. Отдельно оплачиваются только проживание, питание и авиабилеты — это даёт вам возможность самостоятельно выбрать уровень размещения в Санья.",
  },
  {
    q: "Можно ли в санатории лечиться с ребёнком или членом семьи?",
    a: "Да, на каждого пациента оформляется отдельная путёвка и отдельный план процедур. Дети до 12 лет проходят консультацию с педиатром, и набор методов для них корректируется — в частности, объём иглоукалывания и сила воздействия уменьшаются. Напишите координатору возраст ребёнка, и он подскажет оптимальную программу.",
  },
  {
    q: "Какие документы нужны для оформления путёвки?",
    a: "Для оформления — загранпаспорт (действующий 6 месяцев после даты возвращения) и, если есть, медицинские документы: анализы, выписки, снимки. Медицинские документы не обязательны, но они позволяют врачу построить план процедур точнее ещё до вашего приезда. Всё остальное оформляет координатор.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PutevkaPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Санаторная путёвка на Хайнань
        </h1>
        <p className="text-lg leading-relaxed text-zinc-700">
          Санаторная путёвка в санаторий ТАЙЦЗИ на Хайнане — это договор на
          медицинское обслуживание, который включает первичную консультацию
          врача ТКМ с пульсовой диагностикой, ежедневные процедуры и
          фитотерапию. Путёвка оформляется на конкретного пациента и не
          передаётся. Длительность — от 7 до 21 дня.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Что входит в санаторную путёвку
        </h2>
        <ul className="space-y-2">
          {[
            "Первичная консультация врача ТКМ с пульсовой диагностикой и осмотром",
            "Индивидуальный план лечения, составленный после консультации",
            "Ежедневные процедуры: иглоукалывание, туйна, моксотерапия, фитотерапия (набор зависит от программы)",
            "Корректировка программы по ходу курса (обычно каждые 3 дня)",
            "Финальная консультация с рекомендациями после возвращения",
            "Русскоязычный координатор на весь период лечения",
            "Трансфер из аэропорта Санья Феникс и обратно",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-zinc-700">
              <span className="mt-1 text-emerald-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-3xl bg-[var(--surface)] p-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Стоимость санаторных путёвок
        </h2>
        <div className="space-y-2">
          {PACKAGES.filter((p) => ["7 дней","10 дней","14 дней","21 день"].includes(p.days)).map((p) => (
            <div
              key={p.id}
              className="flex items-baseline justify-between border-b border-zinc-200 pb-3"
            >
              <div>
                <span className="font-semibold">{p.days}</span>
                <span className="ml-2 text-sm text-zinc-500">
                  {p.days === "7 дней" && "ознакомительный курс"}
                  {(p.days === "10 дней" || p.days === "14 дней") && "оптимальная длительность"}
                  {p.days === "21 день" && "глубокая программа"}
                </span>
              </div>
              <span className="font-semibold text-zinc-900">
                {fmtPrice(p.from, p.to)} ¥
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Проживание и перелёт в стоимость путёвки не входят. Цена указана
          за медицинскую часть.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Как оформить санаторную путёвку
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 text-lg font-semibold">1. Заявка</h3>
            <p className="leading-relaxed text-zinc-700">
              Оставьте заявку через форму на сайте или мессенджер.
              Координатор свяжется с вами в течение рабочего дня, уточнит
              жалобы и цели, поможет выбрать длительность программы.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              2. Медицинские документы
            </h3>
            <p className="leading-relaxed text-zinc-700">
              Если есть анализы, выписки, снимки — отправьте их координатору
              до приезда. Врач изучит их заранее, чтобы первая консультация
              прошла предметно. Если обследований нет — ничего страшного,
              врач проведёт диагностику на месте.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">3. Виза и перелёт</h3>
            <p className="leading-relaxed text-zinc-700">
              Для граждан РФ действует безвизовый режим 30 дней — этого
              достаточно для любой программы. Прямые рейсы из Москвы в Санья
              выполняют «Аэрофлот» и China Southern. Билеты рекомендуем
              бронировать после согласования дат с санаторием.
            </p>
          </div>
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              4. Приезд и первая консультация
            </h3>
            <p className="leading-relaxed text-zinc-700">
              В аэропорту вас встретит водитель санатория. В день приезда
              рекомендуется отдых — первая консультация назначается на
              следующий день. На консультации врач проводит пульсовую
              диагностику, осмотр, составляет индивидуальный план лечения и
              согласовывает его с вами.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Частые вопросы о путёвке
        </h2>
        <div className="space-y-3">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="rounded-xl border border-zinc-200 bg-[var(--surface)] p-4"
            >
              <summary className="cursor-pointer font-semibold text-zinc-900">
                {f.q}
              </summary>
              <p className="mt-3 leading-relaxed text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-10 rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 text-center">
        <h2 className="mb-3 text-2xl font-semibold">
          Оформить санаторную путёвку
        </h2>
        <p className="mb-5 text-zinc-700">
          Оставьте заявку — координатор ответит на вопросы по путёвке,
          ценам и поможет выбрать даты.
        </p>
        <Link
          href="/kontakty/"
          className="inline-block rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-emerald-700"
        >
          Оставить заявку
        </Link>
      </section>
    </main>
  );
}
