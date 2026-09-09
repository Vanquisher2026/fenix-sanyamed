import type { Metadata } from "next";
import Link from "next/link";
import BilingualContent from "./LanguageSwitcher";

// ⚠️ SEO: единый URL с двуязычным контентом (русский + английский)
// Альтернатива: hreflang + отдельные /en/blog/... страницы (когда будет ресурс).

export const metadata: Metadata = {
  title:
    "5 причин выбрать Хайнань для лечения традиционной китайской медициной",
  description:
    "Хайнань — тропический остров в Китае, идеальное место для традиционной китайской медицины. 5000 лет традиции, мягкий климат, доступные цены, русскоязычные клиники.",
  alternates: {
    canonical:
      "https://fenix-sanyamed.com/blog/5-prichin-vybrat-khainan-dlya-tkm/",
  },
};

const content = {
  ru: {
    title: "5 причин выбрать Хайнань для лечения традиционной китайской медициной",
    navHome: "Главная",
    navBlog: "Блог",
    navCurrent: "5 причин выбрать Хайнань",
    intro:
      "Хайнань — тропический остров на юге Китая, который за последние годы стал одним из самых популярных направлений для русских туристов, ищущих традиционную китайскую медицину (ТКМ). В этой статье разбираем 5 главных причин.",
    reasons: [
      {
        h: "1. Тропический климат ускоряет восстановление",
        p: "Субтропический климат Хайнаня с температурой воздуха 20–28 °C круглый год, высокая влажность и чистый морской воздух создают идеальные условия для восстановления после длительных заболеваний. Многие гости отмечают, что отдых на острове в сочетании с ТКМ даёт более выраженный эффект, чем лечение в северных регионах Китая.",
      },
      {
        h: "2. Богатая история ТКМ с доступом к настоящим специалистам",
        p: "Хайнань — родина многих известных врачей традиционной китайской медицины. Здесь работают как потомственные специалисты, так и выпускники ведущих китайских университетов ТКМ — Шанхайского, Хэйлунцзянского, Гуанчжоуского. Большинство врачей имеют опыт от 20 до 40+ лет клинической практики. В отличие от «модных» клиник в Пекине или Шанхае, на Хайнане можно попасть к настоящему мастеру, который занимается именно лечением, а не PR.",
      },
      {
        h: "3. Доступные цены при высоком качестве",
        p: "Стоимость процедур ТКМ на Хайнане в среднем на 30–50% ниже, чем в Москве или Пекине. Например, сеанс иглоукалывания обходится от 150 юаней (≈ 2000 ₽), курс лечения на 7–10 дней — от 5000–8000 юаней (≈ 65 000–100 000 ₽). При этом качество медицинских услуг соответствует международным стандартам, многие клиники имеют государственную лицензию.",
      },
      {
        h: "4. Полная инфраструктура для русских гостей",
        p: "За последние годы на Хайнане сформировалась полноценная русскоязычная медицинская и туристическая инфраструктура. Многие клиники ТКМ предлагают: русскоязычного координатора, помощь с проживанием, трансфер из аэропорта, перевод медицинской документации. Это устраняет основной барьер — языковой — и делает лечение доступным даже для тех, кто никогда не был в Китае.",
      },
      {
        h: "5. Совмещение лечения с отдыхом",
        p: "В отличие от лечения в клиниках Шанхая или Пекина, где пациент находится в мегаполисе с загрязнённым воздухом и стрессом, Хайнань предлагает настоящий тропический отдых. Пляжи, кокосовые рощи, свежие морепродукты, утренние прогулки вдоль моря — всё это дополняет программу лечения и делает процесс восстановления приятным. Многие гости совмещают лечение с отпуском для всей семьи.",
      },
    ],
    outro:
      "Если вы рассматриваете лечение методами ТКМ на Хайнане, наш медицинский центр fenix-sanyamed готов предложить индивидуальную программу. Бесплатная первичная диагностика и трансфер из аэропорта.",
    cta: "Связаться с нами",
    importantPrefix: "Важно:",
    importantText:
      "индивидуальные результаты могут отличаться. Программа всегда подбирается врачом индивидуально на основании пульсовой диагностики.",
    allArticles: "Все статьи",
  },
  en: {
    title: "5 reasons to choose Hainan for Traditional Chinese Medicine treatment",
    navHome: "Home",
    navBlog: "Blog",
    navCurrent: "5 reasons for Hainan",
    intro:
      "Hainan is a tropical island in southern China that has become one of the most popular destinations for Russian tourists seeking Traditional Chinese Medicine (TCM) in recent years. In this article we break down the top 5 reasons.",
    reasons: [
      {
        h: "1. Tropical climate speeds up recovery",
        p: "Hainan's subtropical climate with year-round temperatures of 20–28°C, high humidity, and clean sea air creates ideal conditions for recovery after long-term illness. Many guests note that a stay on the island combined with TCM gives a more pronounced effect than treatment in northern regions of China.",
      },
      {
        h: "2. Rich TCM history with access to real specialists",
        p: "Hainan is home to many renowned TCM practitioners. Here you can find both hereditary specialists and graduates of leading Chinese TCM universities — Shanghai, Heilongjiang, Guangzhou. Most doctors have between 20 and 40+ years of clinical practice. Unlike 'trendy' clinics in Beijing or Shanghai, in Hainan you can see a real master who is dedicated to healing, not PR.",
      },
      {
        h: "3. Affordable prices with high quality",
        p: "The cost of TCM procedures in Hainan is on average 30–50% lower than in Moscow or Beijing. For example, an acupuncture session costs from 150 yuan (~$20 USD), a 7–10 day treatment program from 5000–8000 yuan (~$700–1100 USD). At the same time, the quality of medical services meets international standards, and many clinics hold a state license.",
      },
      {
        h: "4. Complete infrastructure for Russian guests",
        p: "In recent years, a full-fledged Russian-speaking medical and tourist infrastructure has formed in Hainan. Many TCM clinics offer: a Russian-speaking coordinator, accommodation assistance, airport transfer, translation of medical documents. This removes the main barrier — language — and makes treatment accessible even for those who have never been to China.",
      },
      {
        h: "5. Combining treatment with vacation",
        p: "Unlike treatment in clinics in Shanghai or Beijing, where the patient is in a megacity with polluted air and stress, Hainan offers a real tropical vacation. Beaches, coconut groves, fresh seafood, morning walks by the sea — all of this complements the treatment program and makes the recovery process enjoyable. Many guests combine treatment with a vacation for the whole family.",
      },
    ],
    outro:
      "If you are considering TCM treatment in Hainan, our fenix-sanyamed medical center is ready to offer you an individual program. Free initial diagnosis and airport transfer included.",
    cta: "Contact us",
    importantPrefix: "Important:",
    importantText:
      "Individual results may vary. The program is always tailored by the doctor based on pulse diagnosis.",
    allArticles: "All articles",
  },
};

export default function BlogPost() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-8 text-sm text-zinc-600">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog/" className="hover:underline">
          Блог
        </Link>
        <span className="mx-2">/</span>
        <span>5 причин выбрать Хайнань</span>
      </nav>

      <p className="mb-2 text-sm text-zinc-500">2026-09-06</p>

      <BilingualContent content={content} />
    </main>
  );
}