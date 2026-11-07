// ============================================================================
// English mirror of src/data/prices.ts — single source of truth for pricing,
// duplicated for the English pages. The Russian file is left untouched.
//
// ⚠️ The figures below are ORIENTATION RANGES (price bands) assembled from
//    open public sources on the Sanya market, not a price list of this clinic:
//      • 三亚市中医院 (Sanya Municipal TCM Hospital) — open rehabilitation
//        service table: acupuncture 50–100 CNY/session, massage
//        100–180 CNY/session, 8–20 sessions per course.
//      • Commercial TCM centres in Hainan (2026 surveys): acupuncture and
//        moxibustion 200–500 CNY/session, massage 100–300 CNY/session.
//      • Package medical tourism (vseputi.com, 15 days with accommodation
//        and meals) — from 2,900 USD per person.
//    The actual price is confirmed by the administration at booking.
// ============================================================================

export type PriceRowEn = {
  slug: string;
  name: string;
  duration: string;
  course: string;
  from: number;
  to: number;
};

/** Individual procedures — price per SESSION, in CNY */
export const PROCEDURES_EN: PriceRowEn[] = [
  {
    slug: "konsultaciya",
    name: "TCM physician consultation + pulse diagnosis",
    duration: "30 min",
    course: "1–2 visits",
    from: 0,
    to: 0, // initial consultation — free
  },
  {
    slug: "igloukalyvanie",
    name: "Acupuncture (针灸)",
    duration: "40–60 min",
    course: "5–10 sessions",
    from: 150,
    to: 400,
  },
  {
    slug: "tuyna",
    name: "Tuina massage (推拿)",
    duration: "30–60 min",
    course: "3–7 sessions",
    from: 200,
    to: 450,
  },
  {
    slug: "mokso-terapiya",
    name: "Moxibustion (艾灸)",
    duration: "30–45 min",
    course: "5–10 sessions",
    from: 100,
    to: 200,
  },
  {
    slug: "vakuum-terapiya",
    name: "Cupping therapy (拔罐)",
    duration: "30–45 min",
    course: "3–5 sessions",
    from: 100,
    to: 180,
  },
  {
    slug: "guasha",
    name: "Gua sha (刮痧)",
    duration: "30–60 min",
    course: "3–10 sessions",
    from: 120,
    to: 250,
  },
  {
    slug: "fitoterapiya",
    name: "Herbal therapy (decoction, 中药)",
    duration: "daily",
    course: "as prescribed",
    from: 80,
    to: 300, // per day of the course
  },
];

export type PackageRowEn = {
  id: string;
  name: string;
  days: string;
  includes: string;
  from: number;
  to: number;
  excludes: string;
};

/** Turnkey programmes — price for the WHOLE programme, in CNY */
export const PACKAGES_EN: PackageRowEn[] = [
  {
    id: "7dney",
    name: "7-day package: health and rest",
    days: "7 days",
    includes:
      "Daily TCM physiotherapy + tai chi classes + beach rest. Suitable for neck, shoulder and lower back pain, sleep disturbance and general fatigue.",
    from: 8000,
    to: 15000,
    excludes: "Accommodation, meals, air tickets",
  },
  {
    id: "14dney",
    name: "14-day package: recovery for chronic conditions",
    days: "14 days",
    includes:
      "Systematic TCM correction + rehabilitation sessions + wellness rest. Suitable for hypertension, metabolic disorders, and bone and joint conditions.",
    from: 15000,
    to: 28000,
    excludes: "Accommodation, meals, air tickets",
  },
  {
    id: "21dney",
    name: "21-day package: deep programme",
    days: "21 days",
    includes:
      "Maximum treatment density, two consultations with a TCM professor, an individual herbal course.",
    from: 22000,
    to: 40000,
    excludes: "Accommodation, meals, air tickets",
  },
];

/** Accommodation guidance so the patient can budget the full trip */
export const ACCOMMODATION_NOTE_EN =
  "Accommodation is booked separately: from 200 CNY per night (guesthouse) " +
  "to 800+ CNY per night (4–5 star hotel on the first line). " +
  "A 14-day trip typically works out at 30,000–55,000 CNY per person " +
  "including flights.";

/** Mandatory note on the pricing pages */
export const PRICE_DISCLAIMER_EN =
  "Prices are indicative and reflect the range of open offers on the Sanya " +
  "market. The final cost is calculated by the physician after an in-person " +
  "assessment and depends on the volume of prescribed procedures. " +
  "The cost does not depend on the outcome of treatment; individual results " +
  "may vary.";

/** Price formatting: 0 → "free", otherwise "150–400 ¥" */
export function fmtPriceEn(from: number, to: number): string {
  if (from === 0 && to === 0) return "free";
  if (from === to) return `${from.toLocaleString("en-US")} ¥`;
  return `${from.toLocaleString("en-US")}–${to.toLocaleString("en-US")} ¥`;
}
