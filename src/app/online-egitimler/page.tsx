import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { OnlineCourseFilterGrid } from "@/components/OnlineCourseFilterGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { onlineCourses, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Çevrim İçi Eğitimler",
  description:
    "Udemy, BTK Akademi, TutorialsPoint ve Uphop platformlarında yayınlanmış proje yönetimi, yapay zeka ve çevik yaklaşım eğitimleri.",
  alternates: {
    canonical: "/online-egitimler"
  }
};

const onlineCourseSchema = onlineCourses.map((course) => ({
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
  url: course.href
}));

export default function OnlineTrainingsPage() {
  return (
    <>
      <JsonLd data={onlineCourseSchema} />
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Çevrim İçi Eğitimler", href: "/online-egitimler" }]} />
          <SectionHeading
            eyebrow="Çevrim İçi Eğitimler"
            title="Platformlarda yayınlanmış eğitim içerikleri"
            description="Bireysel gelişim ve ekip içi öğrenme için erişilebilir çevrim içi eğitim kaynakları."
            level={1}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <OnlineCourseFilterGrid courses={onlineCourses} />
        </div>
      </section>
    </>
  );
}
