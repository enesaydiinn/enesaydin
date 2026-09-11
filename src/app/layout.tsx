import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { QuickContact } from "@/components/QuickContact";
import { corporateTrainings, onlineCourses, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Enes Aydın",
    "kurumsal eğitim",
    "proje yönetimi eğitimi",
    "PMP eğitimi",
    "PMP proje yönetimi",
    "yapay zeka eğitimi",
    "ChatGPT eğitimi",
    "prompt engineering eğitimi",
    "DevSecOps eğitimi",
    "Jira eğitimi",
    "Scrum eğitimi",
    "ITIL eğitimi",
    "yazılım testi eğitimi",
    "dijital dönüşüm danışmanlığı"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.baseUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Kurumsal Eğitim",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.png?v=2",
        type: "image/png",
        sizes: "512x512"
      },
      {
        url: "/icon.png?v=2",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.logo),
        width: 366,
        height: 207,
        alt: "Enes Aydın EA logosu"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.logo)]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
  colorScheme: "light"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.baseUrl}/#website`,
  name: siteConfig.title,
  alternateName: [siteConfig.name, siteConfig.domain],
  url: siteConfig.baseUrl,
  inLanguage: "tr-TR",
  publisher: {
    "@id": `${siteConfig.baseUrl}/#organization`
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.baseUrl}/#organization`,
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  logo: absoluteUrl(siteConfig.logo),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.linkedin]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.baseUrl}/#person`,
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  image: absoluteUrl(siteConfig.profilePhoto),
  worksFor: {
    "@id": `${siteConfig.baseUrl}/#organization`
  },
  jobTitle: ["Proje Yöneticisi", "Teknoloji Danışmanı", "Kurumsal Eğitmen"],
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.linkedin],
  knowsAbout: [
    "Proje Yönetimi",
    "Yapay Zeka",
    "İstem Mühendisliği",
    "DevSecOps",
    "Çevik Yaklaşım",
    "Yazılım Testi",
    "Dijital Dönüşüm"
  ]
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.baseUrl}/#professional-service`,
  name: siteConfig.title,
  url: siteConfig.baseUrl,
  image: absoluteUrl(siteConfig.logo),
  logo: absoluteUrl(siteConfig.logo),
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  founder: {
    "@id": `${siteConfig.baseUrl}/#person`
  },
  areaServed: {
    "@type": "Country",
    name: "Türkiye"
  },
  serviceType: [
    "Kurumsal eğitim",
    "Proje yönetimi eğitimi",
    "Yapay zeka eğitimi",
    "Teknoloji danışmanlığı",
    "Dijital dönüşüm danışmanlığı"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kurumsal ve çevrim içi eğitim katalogları",
    itemListElement: [
      ...corporateTrainings.map((training) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: training.title,
          description: training.description,
          provider: {
            "@id": `${siteConfig.baseUrl}/#organization`
          }
        }
      })),
      ...onlineCourses.map((course) => ({
        "@type": "Offer",
        url: course.href,
        itemOffered: {
          "@type": "Course",
          name: course.title,
          description: course.description,
          provider: {
            "@id": `${siteConfig.baseUrl}/#organization`
          }
        }
      }))
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.png?v=2" sizes="512x512" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={[websiteSchema, organizationSchema, personSchema, professionalServiceSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <QuickContact />
      </body>
    </html>
  );
}
