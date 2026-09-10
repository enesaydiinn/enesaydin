export { blogPosts, getBlogPost } from "@/data/blog-posts";
export { certifications } from "@/data/certificates";
export { conferences } from "@/data/conferences";
export { corporateTrainings } from "@/data/corporate-trainings";
export { onlineCourses } from "@/data/online-courses";
export { references } from "@/data/references";

export const siteConfig = {
  name: "Enes Aydın",
  domain: "enesaydin.org",
  baseUrl: "https://enesaydin.org",
  logo: "/logo-ea.png",
  profilePhoto: "/images/enes-aydin-profile.jpeg",
  profilePhotoAlt: "Enes Aydın profesyonel profil fotoğrafı",
  title: "Enes Aydın | Kurumsal Teknoloji ve Proje Yönetimi Eğitimleri",
  description:
    "Enes Aydın; proje yönetimi, teknoloji danışmanlığı, kurumsal yapay zeka eğitimi ve dijital dönüşüm alanlarında kurumlara sonuç odaklı eğitimler sunar.",
  phone: "0850 XXX XX XX",
  phoneHref: "tel:0850XXXXXXX",
  whatsappHref: "https://wa.me/90850XXXXXXX",
  email: "enes@cenglab.com",
  linkedin: "https://www.linkedin.com/in/enesaydin29/",
  linkedinHandle: "enesaydin29",
  cvHref: "/enes-aydin-cv.pdf"
};

export const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kurumsal Eğitimler", href: "/kurumsal-egitimler" },
  { label: "Online Eğitimler", href: "/online-egitimler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Hakkımda", href: "/hakkimda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" }
];

export const trustIndicators = [
  "PMP Sertifikalı Proje Yöneticisi",
  "Kurumsal Eğitim Deneyimi",
  "Yapay Zeka ve Teknoloji Odaklı Eğitimler",
  "Kamu ve Özel Sektör Referansları",
  "Online Platformlarda Yayınlanmış Eğitimler"
];

export const impactMetrics = [
  { value: "100.00+", label: "Online Öğrenci" },
  { value: "1000+", label: "Eğitim Verilen Katılımcı" },
  { value: "100+", label: "Eğitim Verilen Kurum" },
  { value: "50+", label: "Eğitim İçeriği" }
];

export const achievementAreas = [
  "Proje Yöneticisi",
  "Teknoloji Danışmanı",
  "Kurumsal Eğitmen",
  "Yapay Zeka ve yazılım süreçleri alanında eğitimci",
  "Bilgisayar Mühendisliği altyapısına sahip uzman",
  "PMP sertifikalı proje yöneticisi",
  "PSM ve ISTQB sertifikalarına sahip",
  "Cambridge İngilizce sertifikasına sahip",
  "Yüksek lisans geçmişi",
  "Doktora çalışmaları",
  "Kamu ve özel sektör eğitimleri",
  "Çevrim içi eğitim platformlarında içerik üretimi"
];
