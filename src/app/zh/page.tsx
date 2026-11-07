import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "三业泰济中医院 (Fenix-Sanyamed) — 海南三亚中医诊疗",
  description:
    "海南三亚泰济中医院，俄罗斯患者的中医诊疗中心。针灸、推拿、中药。中文官方页面。",
  alternates: {
    canonical: "https://www.fenix-sanyamed.com/zh/",
    languages: {
      ru: "https://www.fenix-sanyamed.com/",
      "x-default": "https://www.fenix-sanyamed.com/",
      "zh-Hans": "https://www.fenix-sanyamed.com/zh/",
      en: "https://www.fenix-sanyamed.com/en/",
    },
  },
};

export default function ZhHomePage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-10 sm:py-12">
      <p className="mb-2 text-sm text-zinc-500">2026-10-18 更新</p>
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
        三业泰济中医院
        <br />
        <span className="text-xl text-zinc-600 sm:text-2xl">Fenix-Sanyamed TCM Center · 海南三亚</span>
      </h1>

      <p className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed">
        <strong>泰济中医院</strong> 成立于 2007 年，位于中国海南省三亚市（大东海、亚龙湾、三亚湾）。
        面向俄罗斯、独联体及国际患者，提供传统中医诊疗服务。
        主治方向：针灸、推拿、中药、火罐、刮痧、艾灸。
      </p>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">医院简介</h2>
        <p className="mb-3 text-zinc-700">
          三业泰济中医院是中国卫生部门正式批准的中医医疗机构，
          位于海南三亚市三个主要湾区（大东海、亚龙湾、三亚湾）。
          现有8位医师，平均执业经验 15–40 年，
          毕业于上海、湖北、湖南等中国知名中医药大学。
        </p>
        <p className="text-zinc-700">
          医院配备俄语医疗翻译全程陪同，
          2007 年起累计接待超过 1 万名俄语患者。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">主要服务</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold">针灸</h3>
            <p className="mt-1 text-sm text-zinc-700">单次 150–400 元 · 5–10 次为一疗程</p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold">推拿</h3>
            <p className="mt-1 text-sm text-zinc-700">单次 200–450 元 · 3–7 次为一疗程</p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold">艾灸</h3>
            <p className="mt-1 text-sm text-zinc-700">单次 100–200 元</p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold">火罐 / 刮痧</h3>
            <p className="mt-1 text-sm text-zinc-700">单次 100–250 元</p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold">中药</h3>
            <p className="mt-1 text-sm text-zinc-700">每日 80–300 元 · 个性化配方</p>
          </div>
          <div className="rounded-lg border border-zinc-200 p-4">
            <h3 className="font-semibold">初诊（含脉诊）</h3>
            <p className="mt-1 text-sm text-zinc-700">免费</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">疗程套餐</h2>
        <ul className="space-y-3 text-zinc-700">
          <li className="rounded-lg border border-zinc-200 p-4">
            <strong>7 天套餐：</strong> 8 000–15 000 元（含每日治疗 + 太极 + 海滩休养）
          </li>
          <li className="rounded-lg border border-zinc-200 p-4">
            <strong>14 天套餐：</strong> 15 000–28 000 元（含系统中医调理 + 康复训练 + 健康休养）
          </li>
          <li className="rounded-lg border border-zinc-200 p-4">
            <strong>21 天深度套餐：</strong> 22 000–40 000 元（含完整中医治疗 + 长期调理方案）
          </li>
        </ul>
        <p className="mt-3 text-sm text-zinc-500">
          住宿（200–800 元/晚）和机票另计。14 天完整预算（治疗+住宿+机票）约 30 000–55 000 元。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">联系方式</h2>
        <div className="rounded-lg border border-zinc-200 p-4">
          <p className="mb-2 text-zinc-700">
            <strong>地址：</strong> 中国海南省三亚市（大东海、亚龙湾、三亚湾三个院区）
          </p>
          <p className="mb-2 text-zinc-700">
            <strong>电话：</strong> +86 131 5895 4278（俄语、英语、中文）
          </p>
          <p className="mb-2 text-zinc-700">
            <strong>WhatsApp：</strong> +86 131 5895 4278
          </p>
          <p className="mb-2 text-zinc-700">
            <strong>工作时间：</strong> 每日 09:00 – 20:00（UTC+8）
          </p>
        </div>
      </section>

      <div className="rounded-lg bg-emerald-700 p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">预约咨询</h2>
        <p className="mb-4 text-sm opacity-90">
          初诊免费。24 小时内回复。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakty/"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-emerald-800"
          >
            查看中文联系方式
          </Link>
          <a
            href="https://wa.me/8613158954278"
            className="inline-block rounded-md border border-white px-6 py-3 font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-zinc-500">
        <Link href="/" className="hover:underline">Русская версия</Link>
        {" · "}
        <Link href="/en/" className="hover:underline">English version</Link>
      </p>
    </main>
  );
}
