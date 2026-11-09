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
syncContacts();

console.log(
  changed.length
    ? "✅ CMS 内容已回灌:\n  " + changed.join("\n  ")
    : "（content/ 为空——跳过回灌，保持现有数据）"
);
