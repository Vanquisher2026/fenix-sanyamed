# terapii/ — 俄文疗法详情页初稿

> 创建日期：2026-09-05
> 状态：**文档草稿**（不是生产代码）
> 用法：俄文内容由真人校对后再迁入 Next.js 的 `src/app/terapii/<slug>/page.tsx`

---

## 为什么先做文档而不是直接写页面

- 俄文内容**必须**由俄语母语者 / 中文+俄文双语者校对（专有名词、术语、地名）
- 价格 / 医生 / 禁忌 / 适应症**必须**以诊所真实信息为准
- 草稿只面向「内容质量」，不面向「代码运行」

**好处**：
- 不污染 `taiji-hainan/src/app/`（保持"暂停"状态）
- 您 / 校对者可以直接在 Markdown 中 review，**和代码解耦**
- 改完 / 校对完，我 5 分钟转成 Next.js 页面（含 Schema.org + 内链 + 中文/俄文对照）

---

## 已完成（2026-09-05）

| # | Slug | 元素优先级（Playbook 3.2） | 文档 |
|---|---|---|---|
| 1 | `igloukalyvanie` | 🥇 针灸 — 俄客最熟悉 | [igloukalyvanie.md](./igloukalyvanie.md) |
| 2 | `tuyna` | 🥈 推拿 — 门槛最低 | [tuyna.md](./tuyna.md) |

---

## 待完成（按 Playbook 3.2 优先级）

| # | Slug | 元素 | 状态 |
|---|---|---|---|
| 3 | `fitoterapiya` | 🥉 草药 — 俄民间文化共鸣 | ⏭️ 待起草 |
| 4 | `vakuum-terapiya` | 4. 拔罐 — 俄罗斯已有市场 | ⏭️ 待起草 |
| 5 | `guasha` | 5. 刮痧 — IG/YouTube 推火 | ⏭️ 待起草 |
| 6 | `iglonozh` | 不重点推（俄客陌生） | ⏸️ 暂缓 |

---

## 校对 Checklist（每篇发布前必做）

| # | 检查项 | 来源 |
|---|---|---|
| 1 | 真实价格（人民币 → 卢布可保留双币种） | 诊所财务 |
| 2 | 真实医生 / 真实大师名 | 诊所人事 |
| 3 | 真实禁忌症 / 适应症（**法律敏感**） | 主治医师 |
| 4 | 俄文语法（俄语母语者） | 校对者 |
| 5 | 文化桥接表述是否符合俄客心理（Playbook 3.6） | 文化顾问 |
| 6 | 真实照片（≥5 张，无脸患者） | 诊所摄影 |

---

## 转 Next.js 页面的迁移模板（写代码时使用）

每个 `terapii/<slug>.md` → `taiji-hainan/src/app/terapii/<slug>/page.tsx` + 共享 `terapii/layout.tsx` 共享头/侧栏。

**结构**：
- `metadata`（Meta title / description / OG）从 §0 取
- `<h1>` 从 §0 取
- 正文从 §1-§7 取
- FAQ 用 `<details>` HTML 元素
- 内链用 Next.js `<Link>`
- Schema.org JSON-LD 从 §9 取，渲染到 `<head>`

**预计每篇页面代码**：80-150 行 TSX + 1 个 layout 文件。

---

*本文档由工作流生成 · 对应 Playbook 3.2 / 3.4 / 3.6*