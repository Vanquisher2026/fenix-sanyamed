// ============================================================================
// 4 филиала в бухтах Санья, Хайнань — на основе данных с fenix-sanyamed.ru
// Используется для Schema.org Place (гео-структурированные данные)
// ⚠️ Координаты приблизительные — уточнить по 百度地图 / Google Maps
// ============================================================================

export type Location = {
  slug: string;
  name: string;
  bukhta: string; // 大东海 / 亚龙湾 / 三亚湾 / 三亚湾 (?)
  hotel: string;
  address: string; // для людей
  lat: number;
  lng: number;
  doctors: string[]; // slug врачей
};

export const LOCATIONS: Location[] = [
  {
    slug: "dadunhay",
    name: "fenix-sanyamed Дадунхай",
    bukhta: "Дадунхай",
    hotel: "Медицинский центр ТАЙЦЗИ / Отель Южный Китай / Отель BaoHong",
    address: "бухта Дадунхай, город Санья, остров Хайнань",
    lat: 18.2208,
    lng: 109.5211,
    doctors: [
      "li-yun-fan",
      "chzhan-li-in",
      "se-li-tsyun",
      "khu-yun-khun",
      "tszya-fen-tszyan",
      "lo-chzhi-zhen",
    ],
  },
  {
    slug: "yalongbey",
    name: "fenix-sanyamed Ялунвань",
    bukhta: "Ялунвань",
    hotel: "Отель Swiss",
    address: "бухта Ялунвань, город Санья, остров Хайнань",
    lat: 18.2006,
    lng: 109.6555,
    doctors: ["khu-yumei"],
  },
  {
    slug: "sanyavan",
    name: "fenix-sanyamed Саньяван",
    bukhta: "Саньяван",
    hotel: "Отель Palm Beach (Палм Бич)",
    address: "бухта Саньяван, город Санья, остров Хайнань",
    lat: 18.2551,
    lng: 109.5023,
    doctors: ["yao-dun-yuan"],
  },
  {
    slug: "sanyabey",
    name: "fenix-sanyamed Саньябэй",
    bukhta: "Саньябэй",
    hotel: "уточняется",
    address: "бухта Саньябэй, город Санья, остров Хайнань",
    lat: 18.2893,
    lng: 109.4925,
    doctors: [],
  },
];

// Главный офис для Schema.org MedicalClinic (MainEntity)
export const MAIN_LOCATION = LOCATIONS[0];