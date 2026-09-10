export const conferences = [
  {
    slug: "kurumsal-yapay-zeka-okuryazarligi",
    title: "MEB Maziden Atiye",
    venue: "Cumhurbaşkanlığı",
    image: "/images/konferans-yapay-zeka-okuryazarligi.png",
    description:
      "Cumhurbaşkanlığı Ahlat Külliyesinde genç yeteneklerle bir araya gelinerek kariyer çalışmaları yürütülmüştür."
  },
  {
    slug: "pmp-proje-yonetimi-gelecegi",
    title: "MEB Dijital Gelişim",
    venue: "Profesyonel Topluluk",
    image: "/images/konferans-pmp-proje-yonetimi.png",
    description:
      "Milli Eğitim Bakanlığı koordinasyonunda, dijital teknolojilerin eğitim süreçlerine entegrasyonuna yönelik çalışmalar yürütülmüştür."
  },
  {
    slug: "devsecops-kurumsal-donusum",
    title: "Üniversiteler Girişimcilik Buluşmaları",
    venue: "Teknoloji Zirvesi",
    image: "/images/konferans-devsecops-guvenli-yazilim.png",
    description:
      "Üniversitelerde yeteneklerde bir araya gelerek sektör trendleri ve girişimcilik temasıyla bir araya gelindi."
  }
];

export type Conference = (typeof conferences)[number];
