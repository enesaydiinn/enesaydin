import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-brand-navy">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-brand-muted">
            Proje yönetimi, teknoloji danışmanlığı, yapay zeka ve kurumsal eğitim
            programlarıyla kurumların dönüşüm yolculuğuna eşlik eder.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase text-brand-navy">Menü</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navigation.map((item) => (
              <Link
                className="text-sm text-brand-muted transition hover:text-brand-blue"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase text-brand-navy">İletişim</h2>
          <div className="mt-4 space-y-3 text-sm text-brand-muted">
            <a className="flex items-center gap-2 transition hover:text-brand-blue" href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <a className="flex items-center gap-2 transition hover:text-brand-blue" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a className="flex items-center gap-2 transition hover:text-brand-blue" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              {siteConfig.linkedinHandle}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-line py-5">
        <p className="mx-auto max-w-7xl px-4 text-sm text-brand-muted sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Enes Aydın. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
