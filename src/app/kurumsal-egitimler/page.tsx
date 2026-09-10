import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingFilterGrid } from "@/components/TrainingFilterGrid";
import { corporateTrainings, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kurumsal Eğitimler",
  description:
    "Yapay zeka, proje yönetimi, PMP, çevik yaklaşım, DevSecOps, yazılım test, iş analizi ve dijital dönüşüm alanlarında kurumsal eğitimler.",
  alternates: {
    canonical: "/kurumsal-egitimler"
  }
};

const courseSchema = corporateTrainings.map((course) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.title,
  description: course.description,
  provider: {
    "@type": "Person",
    name: siteConfig.name,
    sameAs: siteConfig.baseUrl
  },
  image: absoluteUrl(course.image),
  about: course.category,
  url: absoluteUrl(`/iletisim?egitim=${course.slug}`)
}));

export default function CorporateTrainingsPage() {
  return (
    <>
      <JsonLd data={courseSchema} />
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Kurumsal Eğitimler", href: "/kurumsal-egitimler" }]} />
          <SectionHeading
            eyebrow="Kurumsal Eğitimler"
            title="Ekiplerinize özel teknoloji ve proje yönetimi programları"
            description="Her eğitim; kurum hedefi, ekip profili, süreç olgunluğu ve beklenen iş çıktısına göre uyarlanabilir şekilde tasarlanır."
            level={1}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/iletisim">Eğitim Talep Et</ButtonLink>
            <ButtonLink href="/referanslar" variant="secondary">
              Referansları İncele
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrainingFilterGrid trainings={corporateTrainings} />
        </div>
      </section>
    </>
  );
}
