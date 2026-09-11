import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CertificationCard } from "@/components/CertificationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications } from "@/data/site";

export const metadata: Metadata = {
  title: "Sertifikalar",
  description:
    "PMP, PSM, ISTQB, Cambridge İngilizce ve doktora çalışmalarıyla proje yönetimi, çevik çalışma, yazılım testi, iletişim ve akademik uzmanlık alanları.",
  alternates: {
    canonical: "/sertifikalar"
  }
};

export default function CertificationsPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Sertifikalar", href: "/sertifikalar" }]} />
          <SectionHeading
            eyebrow="Sertifikalar"
            title="Eğitim ve danışmanlık yaklaşımını güçlendiren yetkinlikler"
            description="Sertifikalar proje yönetimi, çevik çalışma, yazılım kalite süreçleri, uluslararası iletişim ve akademik altyapı alanlarını destekler."
            level={1}
          />
          <ButtonLink href="/iletisim" className="mt-8 w-fit">
            Eğitim Talep Et
          </ButtonLink>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {certifications.map((certification) => (
            <CertificationCard certification={certification} key={certification.name} />
          ))}
        </div>
      </section>
    </>
  );
}
