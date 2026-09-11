import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ButtonLink";
import { CertificationCard } from "@/components/CertificationCard";
import { ConferenceCard } from "@/components/ConferenceCard";
import { CourseCard } from "@/components/CourseCard";
import { OnlineCourseCard } from "@/components/OnlineCourseCard";
import { ReferenceMarquee } from "@/components/ReferenceMarquee";
import { SectionHeading } from "@/components/SectionHeading";
import {
  blogPosts,
  certifications,
  conferences,
  corporateTrainings,
  impactMetrics,
  onlineCourses,
  siteConfig,
  trustIndicators
} from "@/data/site";

export const metadata: Metadata = {
  title: "Kurumsal Teknoloji ve Proje Yönetimi Eğitimleri",
  description:
    "Enes Aydın ile proje yönetimi, yapay zeka, yazılım süreçleri ve dijital dönüşüm alanlarında kurumsal eğitim programları.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <section
        id="anasayfa"
        className="hero-grid relative scroll-mt-24 overflow-hidden border-b border-brand-line bg-brand-canvas"
      >
        <div className="relative mx-auto grid max-w-7xl content-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[76vh] lg:grid-cols-[1fr_0.82fr] lg:items-center lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-brand-line bg-white px-3 py-2 text-sm font-semibold text-brand-ink shadow-sm">
              <Image
                src={siteConfig.logo}
                alt="Enes Aydın EA logosu"
                width={96}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span>Proje Yöneticisi · Teknoloji Danışmanı · Kurumsal Eğitmen</span>
            </div>
            <h1 className="font-display text-3xl font-extrabold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Kurumları Geleceğe Taşıyoruz
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
              Enes Aydın; proje yönetimi, teknoloji danışmanlığı, yapay zeka,
              yazılım süreçleri ve dijital dönüşüm alanlarında kurumlara uygulanabilir,
              ölçülebilir ve sonuç odaklı eğitimler sunar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/iletisim">Kurumsal Eğitim Talep Et</ButtonLink>
              <ButtonLink href="/#kurumsal-egitimler" variant="secondary">
                Eğitimleri İncele
              </ButtonLink>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src={siteConfig.profilePhoto}
                alt={siteConfig.profilePhotoAlt}
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-5">
            {trustIndicators.map((indicator) => (
              <div
                key={indicator}
                className="flex items-start gap-2 rounded-lg border border-brand-line bg-white p-4 text-sm font-semibold text-brand-ink shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
                {indicator}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-brand-line bg-brand-canvas p-5">
              <p className="font-display text-3xl font-bold text-brand-navy">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-brand-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kurumsal-egitimler" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Kurumsal Eğitimler"
              title="Öne çıkan eğitim başlıkları"
              description="Kurumunuzun hedeflerine, ekip olgunluğuna ve sektör dinamiklerine göre uyarlanabilen pratik programlar."
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {corporateTrainings.slice(0, 6).map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="online-egitimler" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Çevrim İçi Eğitimler"
            title="Yayınlanmış dijital eğitim içerikleri"
            description="Udemy, BTK Akademi, TutorialsPoint ve Uphop gibi platformlarda erişilebilen çevrim içi eğitimler."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {onlineCourses.map((course) => (
              <OnlineCourseCard course={course} key={`${course.platform}-${course.title}`} />
            ))}
          </div>
        </div>
      </section>

      <section id="konferanslar" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Konferanslar"
              title="Kurumsal etkinlikler için güçlü konuşma başlıkları"
              description="Yapay zeka, proje yönetimi, DevSecOps ve dijital dönüşüm konularında sahneye uygun, güven veren konferans içerikleri."
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {conferences.map((conference) => (
              <ConferenceCard conference={conference} key={conference.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="referanslar" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Referanslar"
            title="Kamu ve özel sektörde güven veren eğitim deneyimi"
            description="Farklı sektörlerden ekipler için tasarlanmış teknoloji, proje yönetimi ve dönüşüm eğitimleri."
            align="center"
          />
        </div>
        <div className="mt-10">
          <ReferenceMarquee />
        </div>
      </section>

      <section id="hakkimda" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Hakkımda"
              title="Teknik altyapıyı iş hedeflerine bağlayan eğitim yaklaşımı"
              description="Proje yöneticiliği, teknoloji danışmanlığı ve kurumsal eğitmenlik deneyimini bir araya getirerek ekiplerin uygulayabileceği programlar tasarlar."
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/hakkimda" variant="secondary">
                Hakkımda
              </ButtonLink>
              <ButtonLink href={siteConfig.cvHref} variant="dark" icon={<BookOpen className="h-4 w-4" aria-hidden="true" />}>
                CV İndir
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "PMP odaklı proje yönetimi", text: "Standartları günlük proje kararlarına dönüştüren içerik." },
              { icon: Sparkles, title: "Yapay zeka farkındalığı", text: "Departmanlara özel uygulanabilir kullanım senaryoları." },
              { icon: GraduationCap, title: "Kurumsal eğitim tasarımı", text: "Ölçülebilir çıktılar ve kurum ihtiyaçlarına göre program." },
              { icon: Award, title: "Sertifikalı uzmanlık", text: "PMP, PSM, ISTQB ve akademik çalışma altyapısı." }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-brand-line bg-brand-canvas p-5">
                <item.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sertifikalar" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Sertifikalar"
              title="Yetkinlik alanlarını destekleyen sertifikalar"
              description="Proje yönetimi, çevik yaklaşımlar, yazılım testi ve global iletişim alanlarında güçlü uzmanlık zemini."
            />
            <ButtonLink href="/sertifikalar" variant="secondary" className="w-fit">
              Sertifikaları Gör
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.slice(0, 4).map((certification) => (
              <CertificationCard certification={certification} key={certification.name} />
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Proje yönetimi ve teknoloji gündeminden notlar"
            description="Kurumsal eğitimlerde sık karşılaşılan konulara yönelik kısa, uygulanabilir ve SEO dostu içerikler."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="scroll-mt-24 border-y border-brand-line bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-brand-blue">Kurumunuz İçin Eğitim Planlayalım</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-navy md:text-4xl">
              Size özel eğitim programı oluşturalım
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-muted">
              Ekip yapınızı, hedeflerinizi ve mevcut olgunluk seviyenizi birlikte değerlendirip uygulanabilir bir eğitim planı hazırlayalım.
            </p>
          </div>
          <ButtonLink href="/iletisim" variant="primary">
            Kurumsal Eğitim Teklifi Al
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
