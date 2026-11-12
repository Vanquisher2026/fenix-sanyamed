# Санаторий ТАЙЦЗИ　—　fenix-sanyamed.com

> 海南中医疗养 + 治疗 · 俄语获客主线站
> **总控台（4 个站全貌）→ `D:\Claw\docs\网站总控台.md`**

| | |
|---|---|
| **域名** | `fenix-sanyamed.com`（apex 301 → www） |
| **托管** | Cloudflare Pages · 项目 `fenix-sanyamed` · 子域 `fenix-sanyamed.pages.dev` |
| **部署** | **GitHub push 即自动上线**（已连 CF，`main` 分支） |
| **仓库** | `github.com/Vanquisher2026/fenix-sanyamed` |
| **构建** | `node scripts/sync-content.mjs && npx next build --webpack` → `out/`（`output: 'export'` 静态导出） |
| **栈** | Next.js 16.3.4 · React 19.2.8 · Tailwind 4 |
| **规模** | 119 URL（俄语 69 / 英文 50） |

## 常用命令

```bash
npm run dev      # 本地开发

npm run build    # 构建（sync-content 会同步 content/ 数据）

# 手动部署（一般不需要，push 会自动触发）
npx wrangler pages deploy out --project-name fenix-sanyamed
```

## 关键文档与路径

| 路径 | 作用 |
|------|------|
| `DEPLOY.md` | 部署与故障排查 |
| `YANDEX-SUBMISSION-GUIDE.md` | Yandex 收录提交 |
| `content/` | 结构化内容数据（由 `scripts/sync-content.mjs` 同步） |
| `scripts/sync-content.mjs` | **构建第一步**，内容源同步 |
| `docs/` | 项目内文档 |

## 配套目录（不在本仓库）

| 目录 | 作用 |
|------|------|
| `D:\Claw\ru-medical` | **运营大脑**：关键词研究、竞品对标、Yandex 实测、CDP 自动化、凭证、记忆 |
| `D:\Claw\ru-medical\ops\cdp\cf.env` | Cloudflare / Hostinger / Yandex Webmaster 凭证（**勿提交**） |
| `D:\Claw\ru-medical\research\` | 全部调研报告（艾灸词簇、竞品实测、关键词规划…） |

## 当前待办（2026-11-12）

1. 🔴 `/reviews/` 独立页缺失 —— 497 个截图词里「评价/信任」层 110 词，是最大意图层
2. 🔴 `/terapii/igloukalyvanie/` **词错配**：slug 是"灸"，正文全是"针"（иглоукалывание×20 / иглокульв×0）；真艾灸页 `/terapii/mokso-terapiya/` 正文一次没写 "иглокульвание"
3. 🔴 `seaviewhainan.com` 与我们的关系待客户确认（曾为 Тайцзи 雅龙湾分院导流，页面现已 404）
4. 🔴 旧站 `taiji-hainan.ru` 法人授权待客户确认（**主站 brand 页暂缓"官方"宣称**）
5. 🟠 A 站 11 处内容待核实
6. 🟠 title 改完后锁 3 周不动（Yandex 会因连日改 title 降抓取）

---

*本文件由 AI 维护。改站点前先看 `D:\Claw\docs\网站总控台.md`。*
