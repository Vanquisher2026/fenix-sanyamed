// ============================================================================
// English mirror of src/data/vrachi.ts — English version of the doctors data.
// The Russian source file is left untouched so the live /vrachi/ pages and
// their Yandex rankings cannot be affected by this addition.
//
// Compliance note (same rules as the Russian file):
//   - Factual information about education, qualifications and clinical focus only
//   - No cure-rate or efficacy claims, no outcome guarantees
//   - No patient, expert or institutional endorsements
// ============================================================================

export type VrachEn = {
  slug: string;
  name: string;
  nameCn: string;
  birthYear: number;
  position: string;
  education: string[];
  experienceStart: number;
  experienceYears: number;
  specialization: string[];
  description: string;
  achievements: string[];
  cabLocation: { bukhta: string; hotel: string; floor: string };
  detailedBio: string;
  teacher?: string;
  militaryExperience?: string;
  internationalExperience?: string;
};

export const VRACHI_EN: VrachEn[] = [
  {
    slug: "li-yun-fan",
    name: "Li Yun Fan",
    nameCn: "李永方",
    birthYear: 1964,
    position: "Chief Physician, Doctor of Science",
    education: [
      "Shanghai University of Traditional Chinese Medicine (1999, doctoral degree)",
      "上海中医药大学，博士",
    ],
    experienceStart: 1983,
    experienceYears: 42,
    specialization: [
      "orthopedics",
      "spine treatment",
      "disc protrusion and herniation",
      "joint disease",
      "manual therapy",
      "neurological conditions",
      "autoimmune conditions",
      "acupuncture",
      "acupotomy (needle-knife release)",
      "thread embedding therapy",
    ],
    description:
      "Chief Physician of the Fenix-Sanyamed medical centre. Over 42 years of clinical practice in traditional Chinese medicine. Professor, Doctor of Science.",
    achievements: [
      "Published more than 30 scientific papers",
      "Holds 1 national patent for a traditional Chinese medicinal preparation",
      "Developed 8 traditional Chinese medicinal formulations",
      "Completed 2 national research projects",
      "Published a two-volume scientific work on Chinese medicine",
      "Deep study of the classical treatises: Huangdi Neijing, Shanghan Zabinlun, Jingui Yaolue, Wenbin Tiaobozhiz and Shennong Bencao Jing",
    ],
    cabLocation: {
      bukhta: "Dadonghai",
      hotel: "Fenix Medical Centre",
      floor: "1st floor",
    },
    detailedBio:
      "Professor Li Yun Fan was born in Hebei Province and has practised traditional Chinese medicine for more than 42 years, with extensive theoretical and clinical experience. He is a military physician of the highest category specialising in traditional Chinese acupuncture, and worked for more than 30 years at the 301 Military Hospital (中国人民解放军总医院). His strengths lie in acupuncture, herbal therapy, acupotomy, thread embedding and manual therapy, as well as other combined traditional medicine procedures. His scientific approach is combined with a thorough knowledge of the classical TCM canon, allowing him to apply time-tested methods to contemporary clinical cases.",
    militaryExperience:
      "Worked for more than 30 years at the 301 Military Hospital (中国人民解放军总医院)",
  },
  {
    slug: "chzhan-li-in",
    name: "Zhang Li Ying",
    nameCn: "张丽颖",
    birthYear: 1960,
    position: "Director of the Centre, Doctor of Science",
    education: [
      "Heilongjiang University of Chinese Medicine (1982, doctoral degree)",
      "黑龙江中医大学，博士",
    ],
    experienceStart: 1982,
    experienceYears: 43,
    specialization: [
      "internal organ diseases",
      "autoimmune conditions",
      "spine treatment",
      "gynaecological conditions",
      "excess weight",
      "ischaemic heart disease",
      "nephrotic syndrome",
      "cerebral thrombosis",
      "stroke",
      "chronic hepatitis",
      "cirrhosis of the liver",
      "gastritis",
      "peptic ulcer disease",
      "arthritis",
      "hernias",
      "infertility",
    ],
    description:
      "Director of the Fenix-Sanyamed medical centre. Over 43 years of clinical practice. One of the centre's leading specialists in internal organ diseases and gynaecology.",
    achievements: [
      "National award recipient for achievements in scientific research",
      "Developed and applies in practice unique methods for the treatment of common and complex conditions",
    ],
    cabLocation: {
      bukhta: "Dadonghai",
      hotel: "South China Hotel",
      floor: "Basement level",
    },
    detailedBio:
      "Zhang Li Ying is a professor of traditional medicine and Director of the medical centre. Born and raised in Heilongjiang Province in northeast China, she completed her doctoral studies at Heilongjiang University of Chinese Medicine in 1982. She brings extensive clinical experience and applies traditional Chinese medicine methods — acupuncture, acupotomy, moxibustion and herbal therapy — to a broad range of conditions, including ischaemic heart disease, nephrotic syndrome, cerebral thrombosis, stroke, chronic hepatitis, cirrhosis of the liver, gastritis, peptic ulcer disease, arthritis, hernias, irregular menstruation, infertility and paediatric enuresis. She is a national award recipient for achievements in scientific research.",
  },
  {
    slug: "yao-dun-yuan",
    name: "Yao Dong Yuan",
    nameCn: "姚栋元",
    birthYear: 1970,
    position: "Physician, Doctor of Science",
    education: [
      "Hubei University of Chinese Medicine, Xianning (1993, master's degree)",
      "湖北中医药大学，硕士",
    ],
    experienceStart: 1996,
    experienceYears: 30,
    specialization: [
      "orthopedics",
      "internal organ diseases",
      "gynaecology",
      "insomnia",
      "cardiovascular conditions",
      "cerebrovascular conditions",
      "spleen and stomach disorders",
      "hepatobiliary conditions",
      "kidney diseases",
      "uterine fibroids",
      "ovarian cysts",
      "infertility",
      "breast hyperplasia",
    ],
    description:
      "Physician at the Fenix-Sanyamed medical centre. Over 30 years of clinical practice. Focus: orthopedics, gynaecology, cardiovascular conditions and psychological wellbeing.",
    achievements: [
      "More than 30 years of in-depth research into internal organ diseases, gynaecology and orthopedics",
      "Conducts individual consultations on improving health condition through TCM methods",
      "Provides psychological health consultations in relation to symptoms",
    ],
    cabLocation: {
      bukhta: "Sanya Bay",
      hotel: "Palm Beach Hotel",
      floor: "1st floor",
    },
    detailedBio:
      "Yao Dong Yuan graduated from Hubei University of Chinese Medicine in Xianning in 1993. He has more than 30 years of clinical experience. His research focuses on internal organ diseases, gynaecology, orthopedics, pain conditions and psychological conditions associated with impaired health. He applies traditional Chinese medicine to the treatment of spleen and stomach disorders, hepatobiliary conditions, kidney diseases, insomnia and headache; gynaecological conditions including irregular menstruation, uterine fibroids, ovarian cysts, infertility, breast hyperplasia and gynaecological inflammation; and orthopaedic conditions including pain in the limbs, muscular neuralgia, and pain in the neck, shoulder, lower back and legs. He conducts individual consultations on improving health condition and advises on psychological health in relation to symptoms.",
  },
  {
    slug: "se-li-tsyun",
    name: "Xie Li Qun",
    nameCn: "谢丽群",
    birthYear: 1972,
    position: "Physician",
    education: [
      "Hunan University of Chinese Medicine (1996, master's degree)",
      "湖南中医药大学，硕士",
    ],
    experienceStart: 1996,
    experienceYears: 29,
    specialization: [
      "gynaecology consultation",
      "respiratory conditions",
      "rejuvenation",
      "digestive conditions",
      "weight management programmes",
      "cervical spondylosis",
      "frozen shoulder",
      "lumbar disc herniation",
      "arthritis and osteoarthritis",
      "cough, chronic bronchitis, asthma",
      "shingles, acne, dermatitis, eczema",
      "dysmenorrhoea, premature ovarian insufficiency",
      "tinnitus, hearing loss, laryngitis, rhinitis",
      "obesity",
      "autoimmune conditions",
      "neurological conditions",
    ],
    description:
      "Physician at the Fenix-Sanyamed medical centre. Focus: women's health, respiratory conditions and weight management programmes.",
    achievements: [
      "Student of the renowned physician Professor Shi Xuemin",
      "Skilled in acupotomy, acupuncture and moxibustion",
    ],
    cabLocation: {
      bukhta: "Dadonghai",
      hotel: "BaoHong Hotel",
      floor: "1st floor",
    },
    detailedBio:
      "Xie Li Qun has practised clinical traditional Chinese medicine since graduating from Hunan University of Chinese Medicine in 1996 — more than 29 years. She studied under the renowned physician Professor Shi Xuemin. She is skilled at selecting and composing individual TCM herbal prescriptions, and highly proficient in acupotomy, acupuncture and moxibustion. She locates acupuncture points with high precision for bone and joint conditions (cervical spondylosis, frozen shoulder, lumbar disc herniation, arthritis, osteoarthritis), respiratory conditions (cough, chronic bronchitis, asthma), skin conditions (shingles, acne, allergic dermatitis, eczema), gynaecological conditions (irregular menstruation, dysmenorrhoea, premature ovarian insufficiency, functional uterine bleeding), conditions of the five senses (tinnitus, hearing loss, chronic laryngitis, rhinitis), metabolic conditions (obesity), and autoimmune and neurological conditions.",
    teacher: "Professor Shi Xuemin (施学敏)",
  },
  {
    slug: "khu-yun-khun",
    name: "Hu Yong Hong",
    nameCn: "胡永洪",
    birthYear: 1963,
    position: "Physician",
    education: [
      "Heilongjiang University of Chinese Medicine (1992)",
      "黑龙江中医药大学，专家",
    ],
    experienceStart: 1992,
    experienceYears: 33,
    specialization: [
      "orthopedics",
      "spine treatment",
      "disc protrusion and herniation",
      "joint disease",
      "thyroid nodules",
      "cysts",
    ],
    description:
      "Physician at the Fenix-Sanyamed medical centre. Focus: orthopedics, spine treatment and thyroid conditions.",
    achievements: [],
    cabLocation: {
      bukhta: "Dadonghai",
      hotel: "Fenix Medical Centre",
      floor: "1st floor",
    },
    detailedBio:
      "Hu Yong Hong is a physician of traditional Chinese medicine with more than 33 years of clinical practice. He graduated from Heilongjiang University of Chinese Medicine in 1992. He specialises in orthopedics, spine treatment and joint conditions, as well as the treatment of thyroid nodules and cysts of various locations.",
  },
  {
    slug: "tszya-fen-tszyan",
    name: "Jia Feng Jiang",
    nameCn: "贾凤江",
    birthYear: 1985,
    position: "Physician",
    education: [
      "Changchun University of Chinese Medicine (2005)",
      "长春中医药大学",
    ],
    experienceStart: 2005,
    experienceYears: 20,
    specialization: [
      "allergy treatment",
      "spine treatment",
      "joint conditions",
      "rheumatism",
      "urological conditions",
      "male reproductive health",
      "shingles",
      "acne",
      "dermatitis",
      "eczema",
    ],
    description:
      "Physician at the Fenix-Sanyamed medical centre. Focus: allergy treatment, spine and joint conditions, and dermatological conditions.",
    achievements: [],
    cabLocation: {
      bukhta: "Dadonghai",
      hotel: "Fenix Medical Centre",
      floor: "1st floor",
    },
    detailedBio:
      "Jia Feng Jiang is a physician of traditional Chinese medicine and a graduate of Changchun University of Chinese Medicine (2005), with more than 20 years of clinical practice. He specialises in allergic reactions, spine and joint conditions, rheumatism, urological conditions, as well as skin conditions including shingles, acne, dermatitis and eczema.",
  },
  {
    slug: "khu-yumei",
    name: "Hu Yue Mei",
    nameCn: "胡月梅",
    birthYear: 1966,
    position: "Physician, Doctor of Science",
    education: [
      "Heilongjiang University of Chinese Medicine (2011)",
      "黑龙江中医药大学，博士",
    ],
    experienceStart: 2005,
    experienceYears: 30,
    specialization: [
      "nervous system conditions",
      "post-stroke rehabilitation",
      "facial nerve paralysis",
      "trigeminal neuralgia",
      "post-herpetic neuralgia",
      "cervical osteochondrosis",
      "intervertebral disc herniation",
      "knee joint pain",
      "insomnia",
      "anxiety",
      "depression",
      "menopausal syndrome",
    ],
    description:
      "Physician at the Fenix-Sanyamed medical centre. Doctor of Science. Focus: nervous system conditions, post-stroke rehabilitation and spine and joint conditions.",
    achievements: [
      "Received in-depth knowledge and personally transmitted skills from TCM master Sun Shentian (孙申田)",
      "Founded a TCM clinic in Kyiv, Ukraine",
      "Awarded the title of Ambassador of Friendship of Chinese and Ukrainian Traditional Medicine",
      "Invited repeatedly to international scientific conferences on acupuncture",
      "Provides medical services to members of the Ukrainian parliament",
    ],
    cabLocation: {
      bukhta: "Yalong Bay",
      hotel: "Swiss Hotel",
      floor: "7th floor",
    },
    detailedBio:
      "Hu Yue Mei is a Doctor of Science in acupuncture and moxibustion and a student of TCM master Sun Shentian (孙申田). She graduated from Heilongjiang University of Chinese Medicine with a degree in acupuncture and Tuina massage. She has 30 years of clinical experience. She received in-depth knowledge and personally transmitted skills from master Sun Shentian in the treatment of nervous system conditions (paralysis following stroke, facial nerve paralysis, complex neuralgias and others), as well as complex and rare conditions. Throughout more than 30 years of practice she has followed the principle of humane practice, actively promoting traditional Chinese medicine abroad. She founded a TCM clinic in Kyiv, Ukraine, where she provides medical services to members of the Ukrainian parliament, the Chinese diaspora, students from China and patients from different countries. She was awarded the title of Ambassador of Friendship of Chinese and Ukrainian Traditional Medicine.",
    teacher: "TCM master Sun Shentian (孙申田)",
    internationalExperience:
      "Founded a TCM clinic in Kyiv, Ukraine and receives members of the Ukrainian parliament",
  },
  {
    slug: "lo-chzhi-zhen",
    name: "Luo Zhi Ren",
    nameCn: "罗志仁",
    birthYear: 1966,
    position: "Deputy Chief Physician",
    education: [
      "Shanxi Taiyuan University of Chinese Medicine (1985)",
      "山西太原中医药大学，专家",
    ],
    experienceStart: 1985,
    experienceYears: 40,
    specialization: [
      "spine treatment",
      "joint conditions",
      "knee conditions",
      "cardiovascular conditions",
      "digestive conditions",
      "urological conditions",
    ],
    description:
      "Deputy Chief Physician of the Fenix-Sanyamed medical centre. Over 40 years of clinical practice. Focus: spine treatment, joint conditions and the cardiovascular system.",
    achievements: [],
    cabLocation: {
      bukhta: "Dadonghai",
      hotel: "Fenix Medical Centre",
      floor: "1st floor",
    },
    detailedBio:
      "Luo Zhi Ren is Deputy Chief Physician of the Fenix-Sanyamed medical centre and a graduate of Shanxi Taiyuan University of Chinese Medicine (1985). With more than 40 years of clinical practice, he specialises in the treatment of the spine, joints, knees, cardiovascular and digestive systems, and urological conditions.",
  },
];

export function getVrachEnBySlug(slug: string): VrachEn | undefined {
  return VRACHI_EN.find((v) => v.slug === slug);
}
