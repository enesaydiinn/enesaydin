import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReferenceMarquee } from "@/components/ReferenceMarquee";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Referanslar",
  description:
    "Enes Aydın'ın kamu, özel sektör, teknoloji, finans, telekom ve dijital dönüşüm ekipleriyle eğitim referansları.",
  alternates: {
    canonical: "/referanslar"
  }
};

export default function ReferencesPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Referanslar", href: "/referanslar" }]} />
          <SectionHeading
            eyebrow="Referanslar"
            title="Farklı sektörlerden ekiplerle kurumsal eğitim deneyimi"
            description="Kamu kurumlarından teknoloji şirketlerine kadar farklı ekip profilleri için tasarlanmış eğitim programları."
            level={1}
          />
        </div>
      </section>

      <section className="py-12">
        <ReferenceMarquee />
      </section>
    </>
  );
}
