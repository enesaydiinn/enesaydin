export const onlineCourses = [
  {
    title: "Python & Yapay Zeka Eğitimleri",
    platform: "Udemy",
    level: "Orta Seviye",
    image: "/images/online-pmp-temelleri.avif",
    imageFit: "contain" as const,
    href: "https://www.udemy.com/user/enes-aydin-57/",
    description:
      "Python programlama dilini gerçek hayat projeleri yaparak öğren. Yapay Zeka temellerini yeniden keşfet."
  },
  {
    title: "Yapay Zeka Eğitimi",
    platform: "BTK Akademi",
    level: "Başlangıç",
    image: "/images/online-btk-akademi.jpg",
    imageFit: "contain" as const,
    href: "https://www.btkakademi.gov.tr/portal/course/yapay-zeka-ve-algoritmalarina-giris-17500",
    description:
      "Yapay Zeka temellerini anlayarak kavra, uygulamalı örneklerle yeniden keşfet."
  },
  {
    title: "AI Core Concept",
    platform: "TutorialsPoint",
    level: "Orta Seviye",
    image: "/images/online-tutorialspoint-logo.png",
    imageFit: "contain" as const,
    href: "https://market.tutorialspoint.com/profile/enes-aydin",
    description:
      "Rediscover artificial intelligence technology with practical examples."
  },
  {
    title: "AI with Practical Examples",
    platform: "Uphop",
    level: "Başlangıç-Orta",
    image: "/images/online-uphop-logo.jpeg",
    imageFit: "contain" as const,
    href: "https://www.uphop.ai/app/c/a0b145cb-39a7-48a3-9c46-dec540b8daff",
    description:
      "Are you ready to embark on a step-by-step journey into artificial intelligence? Let's rediscover AI now."
  }
];

export type OnlineCourse = (typeof onlineCourses)[number];
