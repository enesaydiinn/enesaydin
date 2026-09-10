import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Download } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { achievementAreas, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Enes Aydın'ın proje yönetimi, iş analizi, çevik metodolojiler, yapay zeka ve kurumsal eğitim deneyimi.",
  alternates: {
    canonical: "/hakkimda"
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="rounded-lg border border-brand-line bg-brand-canvas p-8">
            <Image
              src={siteConfig.logo}
              alt="Enes Aydın EA logosu"
              width={682}
              height={286}
              className="mx-auto w-full max-w-sm object-contain"
              priority
            />
          </div>
          <div>
            <Breadcrumbs items={[{ label: "Hakkımda", href: "/hakkimda" }]} />
            <SectionHeading
              eyebrow="Hakkımda"
              title="Enes Aydın Hakkında"
              level={1}
            />
            <div className="mt-6 space-y-4 text-base leading-8 text-brand-muted">
              <p>
                Enes Aydın, proje yönetimi, iş analizi, çevik metodolojiler ve
                yapay zekâ alanlarında uzmanlaşmış bir eğitmen ve teknoloji
                profesyonelidir. PMP®, PSM ve ISTQB sertifikalarına sahip olan
                Aydın, Bilgisayar Mühendisliği alanında doktora çalışmalarına devam
                etmektedir. Aynı zamanda yapay zeka teknolojileri ve bilgi erişim
                sistemleri üzerine araştırmalar yürütmekte olup, yapay zeka
                alanındaki çalışmalarını aktif olarak sürdürmektedir.
              </p>
              <p>
                TSK, SSB, Milli Savunma Bakanlığı, İçişleri Bakanlığı, PTT, TRT,
                TEİAŞ, Turkcell ve Türksat gibi kamu ve özel sektörün önemli
                kurumlarında eğitimler gerçekleştirmiş; proje yönetimi, yazılım
                süreçleri, Agile yaklaşımlar ve yapay zekâ alanlarında kurumlara
                danışmanlık desteği sağlamıştır. BTK Akademi, Udemy, Tutorials
                Point ve çeşitli platformlar üzerinden binlerce kişiye eğitim veren
                Aydın, teknoloji ve eğitim alanındaki çalışmalarını sürdürerek yeni
                nesil teknolojilerin daha geniş kitlelere ulaşmasına katkı sağlamaya
                devam etmektedir.
              </p>
            </div>
            <ButtonLink href={siteConfig.cvHref} icon={<Download className="h-4 w-4" aria-hidden="true" />} className="mt-8">
              CV İndir
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Başarı Alanları"
            title="Uzmanlığı destekleyen temel başlıklar"
            description="Eğitim içerikleri teknik doğruluk, saha pratiği ve kurumsal uygulanabilirlik dengesinde tasarlanır."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievementAreas.map((area) => (
              <div className="flex items-start gap-3 rounded-lg border border-brand-line bg-white p-5 shadow-sm" key={area}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
                <p className="font-semibold text-brand-ink">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
