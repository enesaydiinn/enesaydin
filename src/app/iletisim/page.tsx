import type { Metadata } from "next";
import { Suspense } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Kurumsal eğitim talebi, teklif ve hızlı bilgi almak için Enes Aydın iletişim formu, telefon, e-posta ve LinkedIn bağlantıları.",
  alternates: {
    canonical: "/iletisim"
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "İletişim", href: "/iletisim" }]} />
          <SectionHeading
            eyebrow="İletişim"
            title="Kurumunuz için eğitim planlayalım"
            description="Talebinizi paylaşın; hedef kitle, eğitim başlığı, süre ve beklenen çıktılar doğrultusunda size özel program hazırlansın."
            level={1}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <Suspense fallback={<div className="min-h-96 rounded-lg border border-brand-line bg-white" />}>
            <ContactForm />
          </Suspense>

          <aside className="rounded-lg border border-brand-line bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-brand-navy">Hızlı Bilgi Al</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              Kurumsal eğitim, danışmanlık veya çevrim içi içerik iş birlikleri için doğrudan iletişim kanallarını kullanabilirsiniz.
            </p>
            <div className="mt-6 space-y-3">
              <a className="flex min-h-12 items-center gap-3 rounded-md border border-brand-line px-4 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue" href={siteConfig.phoneHref}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a className="flex min-h-12 items-center gap-3 rounded-md border border-brand-line px-4 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue" href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <a className="flex min-h-12 items-center gap-3 rounded-md border border-brand-line px-4 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                {siteConfig.linkedinHandle}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
