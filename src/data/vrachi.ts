// ============================================================================
// Данные о врачах — АВТОГЕНЕРАЦИЯ из content/doctors (CMS). НЕ РЕДАКТИРОВАТЬ ВРУЧНУЮ.
// Источник: Static CMS → sync-content.mjs → vrachi.ts
// Актуальный состав: 12 врач(ей), обновлено при сборке 2026-11-09
// ============================================================================

export type Vrach = {
  slug: string;
  nameRu: string;
  nameCn: string; // 中文姓名
  birthYear: number;
  position: string; // должность
  education: string[]; //学历列表
  experienceStart: number; // начало карьеры
  experienceYears: number; // опыт в годах
  specialization: string[]; //专长
  description: string; // общая характеристика (для карточки)
  achievements: string[]; // награды, патенты, публикации
  cabLocation: { bukhta: string; hotel: string; floor: string }; // кабинет
  detailedBio: string; // развёрнутая биография
  teacher?: string;
  militaryExperience?: string;
  internationalExperience?: string;
  status?: "active" | "archive"; // archive = 前团队成员（页面保留，收录权重不丢）
};

export const VRACHI: Vrach[] = [
  {
    slug: "chzhan-li-in",
    nameRu: "Чжан Ли Ин",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
  {
    slug: "khu-yumei",
    nameRu: "Ху Юэмэй",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
  {
    slug: "khu-yun-khun",
    nameRu: "Ху Юн Хун",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
  {
    slug: "li-yun-fan",
    nameRu: "Ли Юн Фан",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
  {
    slug: "lo-chzhi-zhen",
    nameRu: "Ло Чжи Жэнь",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
  {
    slug: "se-li-tsyun",
    nameRu: "Се Ли Цюнь",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
  {
    slug: "sun-vensyue",
    nameRu: "Сунь Вэньсюэ",
    nameCn: "",
    birthYear: 1986,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1986,
    experienceYears: 40,
    specialization: ["иглотерапия","ортопедия и реабилитация","позвоночник и суставы"],
    description: "Заместитель главного врача, врач высшей категории. 40 лет клинической практики: иглотерапия, ортопедия и реабилитация.",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "Заместитель главного врача, врач высшей категории. 40 лет клинической практики: иглотерапия, ортопедия и реабилитация.",
    status: "active",
  },
  {
    slug: "tszya-fen-tszyan",
    nameRu: "Цзя Фэн Цзян",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
  {
    slug: "uj-sihaj",
    nameRu: "Юй Сихай",
    nameCn: "",
    birthYear: 1976,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1976,
    experienceYears: 50,
    specialization: ["иглорефлексотерапия","китайский точечный массаж","позвоночник и суставы"],
    description: "Заведующий филиалом, врач высшей категории. 50 лет практики: иглорефлексотерапия, точечный массаж, позвоночник и суставы.",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "Заведующий филиалом, врач высшей категории. 50 лет практики: иглорефлексотерапия, точечный массаж, позвоночник и суставы.",
    status: "active",
  },
  {
    slug: "van-czunhay",
    nameRu: "Ван Цзюньхай",
    nameCn: "",
    birthYear: 1976,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1976,
    experienceYears: 50,
    specialization: ["терапия внутренних органов","гастроэнтерология ТКМ","очищающие программы"],
    description: "Заместитель главного врача, врач высшей категории. 50 лет практики: терапия внутренних органов, очищающие программы организма.",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "Заместитель главного врача, врач высшей категории. 50 лет практики: терапия внутренних органов, очищающие программы организма.",
    status: "active",
  },
  {
    slug: "van-limin",
    nameRu: "Ван Лимин",
    nameCn: "",
    birthYear: 1983,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1983,
    experienceYears: 43,
    specialization: ["иглотерапия","моксотерапия","травяная фитотерапия","ортопедия и реабилитация"],
    description: "Главный врач центра, врач высшей категории. 43 года практики: иглотерапия, моксотерапия, фитотерапия, реабилитация.",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "Главный врач центра, врач высшей категории. 43 года практики: иглотерапия, моксотерапия, фитотерапия, реабилитация.",
    status: "active",
  },
  {
    slug: "yao-dun-yuan",
    nameRu: "Яо Дун Юань",
    nameCn: "",
    birthYear: 1970,
    position: "Врач высшей категории",
    education: [],
    experienceStart: 1996,
    experienceYears: 0,
    specialization: [],
    description: "",
    achievements: [],
    cabLocation: {"bukhta":"Дадунхай","hotel":"Медицинский центр ТАЙЦЗИ","floor":"1 этаж"},
    detailedBio: "",
    status: "archive",
  },
];

export function getVrachBySlug(slug: string): Vrach | undefined {
  return VRACHI.find((v) => v.slug === slug);
}
