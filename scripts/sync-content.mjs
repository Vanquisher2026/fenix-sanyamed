// ============================================================================
// content/ → src/data 回灌脚本（构建时执行）
// 作用：CMS 发布的内容（content/）自动同步到网站数据层（src/data/）
// 闭环：CMS 改价 → commit → CF 构建（跑本脚本）→ 页面自动更新
// 使用：node scripts/sync-content.mjs（已接入 build 命令链）
// ============================================================================

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTENT = join(ROOT, "content");
const DATA = join(ROOT, "src", "data");

let changed = [];

// ---------- 1) 价格：content/prices/*.json → src/data/prices.cms.json ----------
function syncPrices() {
  const dir = join(CONTENT, "prices");
  if (!existsSync(dir)) return;
  const items = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    try {
      const j = JSON.parse(readFileSync(join(dir, f), "utf-8"));
      if (j.name && j.price) items.push(j);
    } catch {}
  }
  if (items.length) {
    const out = join(DATA, "prices.cms.json");
    writeFileSync(out, JSON.stringify(items, null, 2));
    changed.push(`prices: ${items.length} 项 → prices.cms.json`);
  }
}

// ---------- 2) 医生：content/doctors → src/data/vrachi.cms.json ----------
function syncDoctors() {
  const dir = join(CONTENT, "doctors");
  if (!existsSync(dir)) return;
  const items = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    try {
      const j = JSON.parse(readFileSync(join(dir, f), "utf-8"));
      if (j.nameRu) items.push(j);
    } catch {}
  }
  if (items.length) {
    writeFileSync(join(DATA, "vrachi.cms.json"), JSON.stringify(items, null, 2));
    changed.push(`doctors: ${items.length} 人 → vrachi.cms.json`);
  }
}

// ---------- 2b) 医生渲染层：content/doctors 直接生成 src/data/vrachi.ts ----------
// CMS 是医生的唯一事实源：CMS 人数变化 → vrachi.ts 重写 → 页面/sitemap 自动跟随
function renderDoctors() {
  const dir = join(CONTENT, "doctors");
  if (!existsSync(dir)) return;
  const items = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json"))) {
    try {
      const j = JSON.parse(readFileSync(join(dir, f), "utf-8"));
      if (j.nameRu && j.slug) items.push(j);
    } catch {}
  }
  if (!items.length) return;
  const spec = (j) =>
    Array.isArray(j.spec) ? j.spec : String(j.spec || "").split(/,\s*/).filter(Boolean);
  const exp = (j) => Number(j.exp) || Number(j.experienceYears) || 0;
  const pos = (j) => j.position || "Врач высшей категории";
  const edu = (j) => (Array.isArray(j.education) ? j.education : []).filter(Boolean);
  const eduCn = (j) => (Array.isArray(j.educationCn) ? j.educationCn : []).filter(Boolean);
  const year = (j) => Number(j.birthYear) || (exp(j) ? new Date().getFullYear() - exp(j) : 1970);

  const list = items.map((j) => `  {
    slug: ${JSON.stringify(j.slug)},
    nameRu: ${JSON.stringify(j.nameRu)},
    nameCn: ${JSON.stringify(j.nameCn || "")},
    birthYear: ${year(j)},
    position: ${JSON.stringify(pos(j))},
    education: ${JSON.stringify([...edu(j), ...eduCn(j)])},
    experienceStart: ${new Date().getFullYear() - (exp(j) || 30)},
    experienceYears: ${exp(j)},
    specialization: ${JSON.stringify(spec(j))},
    description: ${JSON.stringify(j.bio || j.description || "")},
    achievements: ${JSON.stringify((Array.isArray(j.achievements) ? j.achievements : []).filter(Boolean))},
    cabLocation: ${JSON.stringify(j.cabLocation || { bukhta: "Дадунхай", hotel: "Медицинский центр ТАЙЦЗИ", floor: "1 этаж" })},
    detailedBio: ${JSON.stringify(j.detailedBio || j.bio || "")},
  },`).join("\n");

  const ts = `// ============================================================================
// Данные о врачах — АВТОГЕНЕРАЦИЯ из content/doctors (CMS). НЕ РЕДАКТИРОВАТЬ ВРУЧНУЮ.
// Источник: Static CMS → sync-content.mjs → vrachi.ts
// Актуальный состав: ${items.length} врач(ей), обновлено при сборке ${new Date().toISOString().slice(0, 10)}
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
};

export const VRACHI: Vrach[] = [
${list}
];

export function getVrachBySlug(slug: string): Vrach | undefined {
  return VRACHI.find((v) => v.slug === slug);
}
`;
  const out = join(DATA, "vrachi.ts");
  const prev = existsSync(out) ? readFileSync(out, "utf-8") : "";
  if (prev !== ts) {
    writeFileSync(out, ts);
    changed.push(`doctors 渲染层: vrachi.ts 重写（${items.length} 人）`);
  }
}

// ---------- 3) 联系方式 ----------
function syncContacts() {
  const f = join(CONTENT, "settings", "contacts.json");
  if (existsSync(f)) {
    const j = JSON.parse(readFileSync(f, "utf-8"));
    writeFileSync(join(DATA, "contacts.cms.json"), JSON.stringify(j, null, 2));
    changed.push("contacts → contacts.cms.json");
  }
}

// ---------- 执行 ----------
syncPrices();
syncDoctors();
renderDoctors();
syncContacts();

console.log(
  changed.length
    ? "✅ CMS 内容已回灌:\n  " + changed.join("\n  ")
    : "（content/ 为空——跳过回灌，保持现有数据）"
);
