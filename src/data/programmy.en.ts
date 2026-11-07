// ============================================================================
// English mirror of src/data/programmy.ts — English version of the 10 treatment
// programmes. The Russian source file is left untouched so the live /programmy/
// pages and their Yandex rankings cannot be affected.
//
// ⚠️ Prices are still TBD in both language versions — they require confirmation
//    against the clinical protocol before publication.
// ============================================================================

export type ProgrammaEn = {
  slug: string;
  title: string;
  emoji: string;
  indications: string[];
  durationDays: string;
  price: string;
  description: string;
  includes: string[];
};

export const PROGRAMMY_EN: ProgrammaEn[] = [
  {
    slug: "normalizatsiya-vnutrennikh-organov",
    title: "Internal Organ Function Normalisation",
    emoji: "🫀",
    indications: [
      "hypertension",
      "elevated blood cholesterol",
      "diabetes mellitus",
      "gout",
      "neurasthenia",
      "heart conditions",
      "headaches",
      "pyelonephritis",
      "sinusitis",
      "urolithiasis",
    ],
    durationDays: "10–14 days",
    price: "TBD",
    description:
      "A programme aimed at restoring the function of internal organs using traditional Chinese medicine methods. The selection of procedures is based on individual pulse diagnosis.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual treatment plan",
      "daily procedures (acupuncture, Tuina, herbal therapy — as prescribed)",
    ],
  },
  {
    slug: "vosstanovlenie-oporno-dvigatelnogo-apparata",
    title: "Musculoskeletal System Recovery",
    emoji: "🦴",
    indications: [
      "spinal conditions",
      "muscular conditions",
      "joint conditions",
      "varicose veins",
      "psoriasis",
      "vitiligo",
    ],
    durationDays: "10–14 days",
    price: "TBD",
    description:
      "A programme addressing musculoskeletal conditions with TCM methods, combining acupuncture, Tuina massage and other techniques.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual treatment plan",
      "daily procedures",
    ],
  },
  {
    slug: "zhenskoe-zdorove",
    title: "Women's Urogenital Health",
    emoji: "🌸",
    indications: [
      "inflammatory conditions of the female reproductive organs",
      "vulvitis",
      "vaginitis",
      "vulvovaginitis",
      "cystitis",
      "infertility",
      "menstrual cycle irregularities",
      "menopause",
    ],
    durationDays: "10–14 days",
    price: "TBD",
    description:
      "A women's health programme addressing inflammatory conditions, infertility, menstrual irregularities and menopausal discomfort with TCM methods.",
    includes: [
      "consultation with a TCM physician (female physician where available)",
      "pulse diagnosis",
      "individual treatment plan",
      "daily procedures plus herbal therapy",
    ],
  },
  {
    slug: "antistress",
    title: "Anti-Stress Programme",
    emoji: "🧘",
    indications: ["stress", "increased fatigue", "chronic fatigue syndrome"],
    durationDays: "7–10 days",
    price: "TBD",
    description:
      "A programme for recovery after stress and for relief of chronic fatigue syndrome, combining gentle TCM techniques with walking and rest on a tropical island.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual recovery plan",
      "daily gentle procedures (Tuina, gua sha, moxa warming)",
    ],
  },
  {
    slug: "kardiologicheskaya-reabilitatsiya",
    title: "Cardiac Rehabilitation Programme",
    emoji: "❤️",
    indications: ["post-stroke conditions", "post-infarction conditions"],
    durationDays: "14–21 days",
    price: "TBD",
    description:
      "A rehabilitation programme following stroke or myocardial infarction, restoring function with TCM methods under the supervision of an experienced physician.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual rehabilitation plan",
      "daily procedures (acupuncture, Tuina, herbal therapy)",
    ],
  },
  {
    slug: "ochishchenie-i-snizhenie-vesa",
    title: "Detox and Weight Management",
    emoji: "🍵",
    indications: [
      "chronic gastrointestinal conditions",
      "biliary tract conditions",
      "tendency to constipation",
      "excessive gas",
      "oedema",
      "metabolic disorders",
      "excess weight",
    ],
    durationDays: "14–21 days",
    price: "TBD",
    description:
      "A comprehensive programme for body cleansing and weight management with TCM methods, combining herbal therapy, acupuncture and dietary guidance.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual nutrition and procedures plan",
      "daily procedures (herbal therapy, acupuncture, Tuina)",
    ],
  },
  {
    slug: "ukreplenie-organizma",
    title: "General Body Fortification",
    emoji: "💪",
    indications: [
      "mental overwork",
      "physical overwork",
      "weakened immune system",
    ],
    durationDays: "7–10 days",
    price: "TBD",
    description:
      "A programme for general body fortification and immune support, suitable for recovery after sustained workloads, business trips and long-haul flights.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual fortification plan",
      "daily procedures (herbal therapy, moxa warming, Tuina)",
    ],
  },
  {
    slug: "muzhskoe-zdorove",
    title: "Men's Urogenital Health",
    emoji: "🌿",
    indications: [
      "inflammatory conditions of the male reproductive organs",
      "non-gonococcal urethritis",
      "prostatitis",
      "epididymitis",
      "orchitis",
      "balanoposthitis",
      "benign prostatic hyperplasia",
      "infertility",
      "erectile dysfunction",
      "premature ejaculation",
    ],
    durationDays: "10–14 days",
    price: "TBD",
    description:
      "A men's health programme using TCM methods, addressing prostatitis, infertility, erectile dysfunction and other urological conditions.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual treatment plan",
      "daily procedures plus herbal therapy",
    ],
  },
  {
    slug: "immunitet-i-pishchevarenie",
    title: "Immune Support and Digestion",
    emoji: "🥗",
    indications: [
      "mental overwork",
      "physical overwork",
      "functional gastrointestinal disorders",
    ],
    durationDays: "10–14 days",
    price: "TBD",
    description:
      "A programme to support immunity and normalise digestive function using TCM methods.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual treatment plan",
      "daily procedures (herbal therapy, acupuncture)",
    ],
  },
  {
    slug: "iskrivlenie-pozvonochnika",
    title: "Spinal Curvature Correction and Posture Improvement",
    emoji: "🧘‍♀️",
    indications: [
      "scoliosis",
      "other forms of spinal curvature",
      "postural disorders",
    ],
    durationDays: "14–21 days",
    price: "TBD",
    description:
      "A programme for correcting spinal curvature and improving posture with TCM methods, combining manual therapy, acupuncture and specialised exercises.",
    includes: [
      "initial and final consultation with a TCM physician",
      "pulse diagnosis",
      "individual correction plan",
      "daily procedures (manual therapy, acupuncture, Tuina)",
    ],
  },
];

export function getProgrammaEnBySlug(slug: string): ProgrammaEn | undefined {
  return PROGRAMMY_EN.find((p) => p.slug === slug);
}
