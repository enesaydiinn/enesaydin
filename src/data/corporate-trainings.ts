export const corporateTrainings = [
  {
    slug: "yapay-zeka-prompt-engineering",
    title: "CBAP İş Analizi",
    institution: "Kurumlara Özel",
    category: "CBAP İş Analizi",
    image: "/images/cbap-is-analizi-icisleri.jpeg",
    description:
      "Ekiplerin üretken yapay zeka araçlarını güvenli, ölçülebilir ve iş sonuçlarına bağlı şekilde kullanmasını sağlayan uygulamalı eğitim."
  },
  {
    slug: "proje-yonetimi-temelleri",
    title: "PMP Proje Yönetimi",
    institution: "Kurumsal Sınıf",
    category: "Proje Yönetimi",
    image: "/images/proje-yonetimi-ptt.png",
    description:
      "Kapsam, zaman, maliyet, risk ve paydaş yönetimini gerçek kurum senaryoları üzerinden ele alan pratik proje yönetimi programı."
  },
  {
    slug: "pmp-hazirlik",
    title: "ISTQB Yazılım Test Mühendisliği",
    institution: "Profesyonel Ekipler",
    category: "ISTQB",
    image: "/images/pmp-hazirlik-teias.png",
    description:
      "PMP sınav yaklaşımı, PMBOK kavramları, çevik pratikler ve örnek soru çözüm tekniklerini kapsayan odaklı hazırlık eğitimi."
  },
  {
    slug: "agile-scrum",
    title: "BPMN / Jira Eğitimi",
    institution: "Ürün ve Yazılım Ekipleri",
    category: "BPMN / JIRA",
    categories: ["BPMN", "JIRA"],
    image: "/images/cevik-scrum-online-toplanti.png",
    description:
      "Scrum rolleri, ritüelleri, backlog yönetimi ve hibrit proje modellerini ekiplerin günlük çalışma düzenine bağlayan eğitim."
  },
  {
    slug: "devsecops",
    title: "Agile Süreç Yönetimi",
    institution: "BT ve Güvenlik Ekipleri",
    category: "PSM",
    image: "/images/devsecops-tsk.jpeg",
    description:
      "Scrum rolleri, ritüelleri, backlog yönetimi ve hibrit proje modellerini ekiplerin günlük çalışma düzenine bağlayan eğitim."
  },
  {
    slug: "yazilim-test-surecleri",
    title: "Yapay Zeka ile Verimlilik",
    institution: "Kalite ve Yazılım Ekipleri",
    category: "Yapay Zeka",
    image: "/images/yazilim-test-av.png",
    description:
      "Ekiplerin üretken yapay zeka araçlarını güvenli, ölçülebilir ve iş sonuçlarına bağlı şekilde kullanmasını sağlayan uygulamalı eğitim."
  },
];

export type CorporateTraining = (typeof corporateTrainings)[number];
