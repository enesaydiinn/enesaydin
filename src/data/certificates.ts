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
  {
    name: "Cambridge İngilizce",
    issuer: "Cambridge İngilizce Değerlendirme",
    area: "Uluslararası İletişim",
    image: "/images/certificate-placeholder.svg",
    description:
      "Uluslararası eğitim ve danışmanlık ortamlarında etkili İngilizce iletişim yetkinliğini destekler."
  },
  {
    name: "Yüksek Lisans",
    issuer: "Akademik Program",
    area: "Bilgisayar Mühendisliği",
    image: "/images/certificate-placeholder.svg",
    description:
      "Teknoloji, yazılım süreçleri ve akademik araştırma yaklaşımını eğitim içeriklerine taşıyan temel."
  },
  {
    name: "PMP Eğitim Çalışmaları",
    issuer: "Kurumsal Eğitim Programları",
    area: "Sınav Hazırlık ve Mentorluk",
    image: "/images/certificate-placeholder.svg",
    description:
      "PMP adayları için sınav stratejisi, soru çözümü ve proje yönetimi kavramlarına yönelik eğitim deneyimi."
  }
];

export type Certification = (typeof certifications)[number];
