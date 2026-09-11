export const certifications = [
  {
    name: "PMP",
    issuer: "Proje Yönetimi Enstitüsü",
    area: "Proje Yönetimi",
    image: "/images/certifications/pmp.png",
    description:
      "Klasik, çevik ve hibrit proje yönetimi yaklaşımlarını kurumsal uygulama disiplinine bağlayan yetkinlik."
  },
  {
    name: "PSM",
    issuer: "Scrum.org",
    area: "Çevik ve Scrum",
    image: "/images/certifications/psm.png",
    description:
      "Scrum rolleri, değerleri, etkinlikleri ve takım içi çevik çalışma pratiklerine odaklanan uzmanlık."
  },
  {
    name: "ISTQB",
    issuer: "Uluslararası Yazılım Test Yeterlilikleri Kurulu",
    area: "Yazılım Test",
    image: "/images/certifications/istqb.png",
    description:
      "Test yaşam döngüsü, kalite yaklaşımı, hata yönetimi ve test tasarım tekniklerini kapsayan sertifikasyon."
  },
  {
    name: "Doktora",
    issuer: "Bilgisayar Mühendisliği",
    area: "Doktora Çalışmaları",
    image: "/images/certifications/doktora.webp",
    description:
      "Bilgisayar mühendisliği alanındaki doktora çalışmalarıyla teknoloji, yazılım süreçleri ve akademik araştırma yaklaşımını destekleyen uzmanlık zemini."
  },
];

export type Certification = (typeof certifications)[number];
