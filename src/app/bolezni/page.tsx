import type { Metadata } from "next";
import Link from "next/link";
import { BOLEZNI } from "@/data/bolezni";

export const metadata: Metadata = {
  title: "Лечение заболеваний в Китае методами ТКМ — Санаторий ТАЙЦЗИ",
  description:
    "Как лечат заболевания в Китае: псориаз, остеохондроз, грыжа позвоночника, артроз, бессонница, реабилитация после инсульта, ЖКТ, простатит, диабет, аллергия. Методы традиционной китайской медицины в Санья.",
  alternates: { canonical: "https://www.fenix-sanyamed.com/bolezni/" },
};

export default function BolezniIndex() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Лечение заболеваний в Китае методами ТКМ
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-zinc-700">
        В санатории ТАЙЦЗИ (Санья, Хайнань) пациенты чаще всего приезжают
        лечить заболевания опорно-двигательного аппарата, нервной системы и
        внутренних органов. Ниже — как работают с каждым заболеванием: методы,
        ход курса и соответствующие программы.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {BOLEZNI.map((b) => (
          <Link
            key={b.slug}
            href={`/bolezni/${b.slug}/`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]"
          >
            <h2 className="mb-2 font-semibold">{b.h1}</h2>
            <p className="text-sm leading-relaxed text-zinc-600">
              {b.intro.slice(0, 140)}…
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-[var(--surface-alt)] p-5 text-sm text-zinc-600">
        <strong>Важно:</strong> информация носит справочный характер.
        Программа подбирается врачом индивидуально после пульсовой
        диагностики. Имеются противопоказания — необходима консультация
        специалиста.
      </div>
    </main>
  );
}
