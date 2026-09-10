import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { ConferenceCard } from "@/components/ConferenceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { conferences } from "@/data/site";

export const metadata: Metadata = {
  title: "Konferanslar",
  description:
    "Enes Aydın'ın yapay zeka, proje yönetimi, DevSecOps ve dijital dönüşüm konularındaki kurumsal konferans ve konuşma başlıkları.",
  alternates: {
    canonical: "/konferanslar"
  }
};

export default function ConferencesPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Konferanslar", href: "/konferanslar" }]} />
          <SectionHeading
            eyebrow="Konferanslar"
            title="Prestijli etkinlikler için teknoloji ve dönüşüm konuşmaları"
            description="Kurum içi zirveler, yönetici buluşmaları, teknoloji etkinlikleri ve profesyonel topluluklar için sahne/etkinlik formatına uygun konuşma başlıkları."
            level={1}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/iletisim">Konferans Talep Et</ButtonLink>
            <ButtonLink href="/referanslar" variant="secondary">
              Referansları Gör
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {conferences.map((conference) => (
            <ConferenceCard conference={conference} key={conference.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
