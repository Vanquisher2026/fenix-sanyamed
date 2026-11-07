# -*- coding: utf-8 -*-
"""把 research/旧站价目表_分组.json 转成主站 src/data/prices.real.ts

生成真实价目表数据（俄语名 + 中文名 + 价格 + 时长），供 /czeny/ 页面使用。
"""
import json
import io
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = "D:/Claw/ru-medical/research/旧站价目表_分组.json"
OUT = os.path.join(HERE, "..", "src", "data", "prices.real.ts")

ORDER = [
    ("diagnosis", "Диагностика и консультация"),
    ("acupuncture", "Иглоукалывание и смежные методы"),
    ("moxa", "Прогревание и прижигание"),
    ("massage", "Массаж и мануальная работа"),
    ("complex", "Комплексные программы воздействия"),
    ("cosmo", "Косметология и SPA"),
    ("pharm", "Фитотерапия и лекарственные препараты"),
    ("other", "Прочие процедуры"),
]


def slugify(s):
    t = s.lower()
    t = re.sub(r"[а-яё]", lambda m: {
        "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "e",
        "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m",
        "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
        "ф": "f", "х": "h", "ц": "c", "ч": "ch", "ш": "sh", "щ": "sch",
        "ъ": "", "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya",
    }.get(m.group(0), m.group(0)), t)
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    return t[:60] or "item"


def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def main():
    data = json.load(io.open(SRC, encoding="utf-8"))
    lines = []
    lines.append("// ============================================================================")
    lines.append("// РЕАЛЬНЫЙ ПРАЙС — данные санатория «Тайцзи» (Санья), 抓取 2026-11-04")
    lines.append("//")
    lines.append("// ⚠️ ВАЖНО О ПРОИСХОЖДЕНИИ")
    lines.append("// Это ФАКТИЧЕСКИЕ цены конкретного санатория в юанях (CNY), а не")
    lines.append("// «ориентировочные диапазоны». На странице они показываются как")
    lines.append("// «参考价 / ориентировочные цены», окончательная сумма подтверждается")
    lines.append("// администрацией при записи.")
    lines.append("//")
    lines.append("// Источник: test.taiji-hainan.ru/lechebnyj-profil/stoimost-lecheniya/praice-list")
    lines.append("// Соскраплено: scripts/scrape_old_price.py → research/旧站价目表.json")
    lines.append("//")
    lines.append("// ❌ НЕ переносить вместе с ценами: адреса, телефоны, контакты — они")
    lines.append("// принадлежат оператору старого сайта.")
    lines.append("// ============================================================================")
    lines.append("")
    lines.append("export type RealPrice = {")
    lines.append("  slug: string;")
    lines.append("  /** название на русском */")
    lines.append("  name: string;")
    lines.append("  /** 名称（中文） */")
    lines.append("  nameCn: string;")
    lines.append("  /** цена в юанях за сеанс */")
    lines.append("  price: number;")
    lines.append("  /** длительность сеанса */")
    lines.append("  duration: string;")
    lines.append("};")
    lines.append("")
    lines.append("export type RealPriceGroup = {")
    lines.append("  code: string;")
    lines.append("  title: string;")
    lines.append("  items: RealPrice[];")
    lines.append("};")
    lines.append("")

    total = 0
    for code, title in ORDER:
        g = data.get(code)
        if not g:
            continue
        items = g["items"]
        lines.append(f"const {code.upper()}_ITEMS: RealPrice[] = [")
        used = set()
        for it in items:
            s = slugify(it["ru"])
            base = s
            n = 2
            while s in used:
                s = f"{base}-{n}"
                n += 1
            used.add(s)
            lines.append("  {")
            lines.append(f'    slug: "{s}",')
            lines.append(f'    name: "{esc(it["ru"])}",')
            lines.append(f'    nameCn: "{esc(it["cn"])}",')
            lines.append(f'    price: {it["price"]},')
            lines.append(f'    duration: "{esc(it["duration"])}",')
            lines.append("  },")
        lines.append("];")
        lines.append("")
        total += len(items)

    lines.append("export const REAL_PRICE_GROUPS: RealPriceGroup[] = [")
    for code, title in ORDER:
        if code not in data:
            continue
        lines.append("  {")
        lines.append(f'    code: "{code}",')
        lines.append(f'    title: "{esc(title)}",')
        lines.append(f"    items: {code.upper()}_ITEMS,")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append("/** Всего позиций в реальном прайсе */")
    lines.append(f"export const REAL_PRICE_TOTAL = {total};")
    lines.append("")

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    io.open(OUT, "w", encoding="utf-8").write("\n".join(lines))
    print(f"✅ {OUT}")
    print(f"   {total} 项，{len([c for c, _ in ORDER if c in data])} 个分组")


if __name__ == "__main__":
    main()
