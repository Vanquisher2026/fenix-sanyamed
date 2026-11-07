// ============================================================================
// English mirror of the PROFILE map in src/app/terapii/[slug]/page.tsx.
// Kept in a separate file so the Russian file stays untouched.
// ============================================================================

export type ProcedureProfileEn = {
  cn: string;
  short: string;
  description: string;
  indications: string[];
  durationNote: string;
};

export const PROFILE_EN: Record<string, ProcedureProfileEn> = {
  igloukalyvanie: {
    cn: "针灸",
    short: "Acupuncture",
    description:
      "Acupuncture is one of the core methods of traditional Chinese medicine. Thin single-use sterile needles are inserted into bioactive points on the body (meridians). The stimulus normalises the movement of Qi, improves circulation and is used for pain syndromes and chronic conditions.",
    indications: [
      "Chronic back and neck pain",
      "Tension headaches, migraines",
      "Insomnia and sleep disturbance",
      "Neuralgia",
      "Recovery after stroke (as prescribed by the physician)",
    ],
    durationNote:
      "For the first 5 minutes you feel a light tingling. Then comes deep relaxation. Many patients fall asleep during the session.",
  },
  tuyna: {
    cn: "推拿",
    short: "Tuina — therapeutic massage",
    description:
      "Tuina is the Chinese therapeutic massage, distinct from the European tradition. The practitioner works not only on muscles but also on joints, trigger points and meridians. It is applied for back pain, joint conditions and recovery after injury.",
    indications: [
      "Back, neck and lower back pain",
      "Osteochondrosis, disc protrusion",
      "Joint conditions",
      "Muscle tension",
      "Recovery after sports injury",
    ],
    durationNote:
      "A session can feel intense — a 'good pain'. Afterwards you feel lightness and relaxation.",
  },
  "mokso-terapiya": {
    cn: "艾灸",
    short: "Moxibustion (mugwort warming)",
    description:
      "Moxibustion warms bioactive points with smouldering mugwort (a cigar or cone form). The method is particularly suited to 'cold' patterns: chronic pain, cold extremities, menstrual irregularity and a weakened immune system.",
    indications: [
      "Chronic pain in the back and joints",
      "Cold in the extremities, chilliness",
      "Menstrual cycle irregularities",
      "Reduced immunity",
      "Chronic fatigue",
    ],
    durationNote:
      "The procedure is comfortable — a gentle warmth and a pleasant mugwort aroma.",
  },
  "vakuum-terapiya": {
    cn: "拔罐",
    short: "Cupping therapy",
    description:
      "Cupping places special cups on the skin to create local suction. It stimulates circulation and lymph flow and is used for cold-type conditions, muscular pain and bronchitis.",
    indications: [
      "Colds and bronchitis",
      "Muscle pain and spasm",
      "Congestion in the back",
      "Cellulite (within combined programmes)",
    ],
    durationNote:
      "Red marks may remain after the procedure; they usually clear within 2–3 days.",
  },
  guasha: {
    cn: "刮痧",
    short: "Gua sha — scraping massage",
    description:
      "Gua sha works on the skin with a special scraper (jade, horn or plastic). It releases 'sha' — stagnant patterns — improves microcirculation and reduces muscle tension. It is applied for 'cold' conditions and pain syndromes.",
    indications: [
      "Colds, early-stage respiratory infection",
      "Muscle tension in the neck, shoulders and back",
      "Tension headaches",
      "Chronic fatigue",
    ],
    durationNote:
      "Red streaks ('sha') appear after the session and clear within 3–5 days — this is a normal reaction.",
  },
  fitoterapiya: {
    cn: "中药",
    short: "Herbal therapy (Chinese herbs)",
    description:
      "Herbal therapy involves drinking decoctions of medicinal herbs selected individually by the physician. In China this is an independent discipline: a TCM physician may adjust the composition every 3 days depending on how the patient responds. The herbs are sourced from established Chinese provinces (Yunnan, Guizhou, Sichuan).",
    indications: [
      "Gastrointestinal conditions (gastritis, dyspepsia)",
      "Chronic conditions of various profiles",
      "Recovery after a prolonged illness",
      "Reduced immunity",
      "A complement to acupuncture and Tuina",
    ],
    durationNote:
      "The decoction is handed over each morning in a thermos. It tastes bitter, but you get used to it within 1–2 days. The composition changes every 3 days.",
  },
  konsultaciya: {
    cn: "诊脉",
    short: "TCM physician consultation",
    description:
      "An initial consultation with a physician of traditional Chinese medicine. It includes an examination, tongue diagnosis, pulse diagnosis and history taking. You leave with an individual treatment plan and a cost estimate for the course.",
    indications: [
      "Any visit to the clinic",
      "Before starting any treatment programme",
    ],
    durationNote:
      "Free. It takes place in a calm setting with an interpreter. You leave with a clear plan and a fixed price.",
  },
};
