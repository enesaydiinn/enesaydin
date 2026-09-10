import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { QuickContact } from "@/components/QuickContact";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  alternates: {
    canonical: "/"
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
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
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  image: absoluteUrl(siteConfig.logo),
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

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd data={[organizationSchema, personSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <QuickContact />
      </body>
    </html>
  );
}
