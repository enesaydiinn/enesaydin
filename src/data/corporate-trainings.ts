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
  {
    slug: "is-analizi",
    title: "İş Analizi ve Gereksinim Yönetimi",
    institution: "Proje ve Ürün Ekipleri",
    category: "İş Analizi",
    image: "/images/course-analysis.svg",
    description:
      "Paydaş analizi, süreç modelleme, kullanıcı hikayeleri ve kabul kriterleri üzerinden net gereksinim yönetimi yaklaşımı."
  },
  {
    slug: "dijital-donusum",
    title: "Dijital Dönüşüm Yol Haritası",
    institution: "Yönetim ve Dönüşüm Ekipleri",
    category: "Dijital Dönüşüm",
    image: "/images/course-transformation.svg",
    description:
      "Teknoloji yatırımlarını süreç, insan, veri ve ölçüm boyutlarıyla ele alan kurumlara özel dönüşüm çerçevesi."
  },
  {
    slug: "veri-analitigi",
    title: "Veri Analitiği Farkındalığı",
    institution: "İş Birimleri",
    category: "Veri Analitiği",
    image: "/images/course-data.svg",
    description:
      "Karar alma kültürünü veriyle güçlendirmek isteyen ekipler için metrik, raporlama ve analitik düşünme programı."
  },
  {
    slug: "teknoloji-farkindaligi",
    title: "Kurum İçi Teknoloji Farkındalığı",
    institution: "Tüm Departmanlar",
    category: "Kurum İçi Teknoloji Farkındalığı",
    image: "/images/course-awareness.svg",
    description:
      "Yapay zeka, siber güvenlik, bulut, veri ve modern yazılım süreçlerini teknik olmayan ekipler için anlaşılır hale getirir."
  },
  {
    slug: "itil-bt-servis-yonetimi",
    title: "ITIL ve BT Servis Yönetimi",
    institution: "BT Operasyon Ekipleri",
    category: "ITIL ve BT Servis Yönetimi",
    image: "/images/course-project.svg",
    description:
      "BT hizmet yönetimi, değer akışı, olay/problem yönetimi ve hizmet kalitesi odağında kurum içi BT olgunluğunu artırır."
  }
];

export type CorporateTraining = (typeof corporateTrainings)[number];
