"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ButtonLink";

const sectionNavigation = [
  { label: "Ana Sayfa", href: "/#anasayfa" },
  { label: "Kurumsal Eğitimler", href: "/#kurumsal-egitimler" },
  { label: "Online Eğitimler", href: "/#online-egitimler" },
  { label: "Referanslar", href: "/#referanslar" },
  { label: "Hakkımda", href: "/#hakkimda" },
  { label: "Blog", href: "/#blog" },
  { label: "İletişim", href: "/#iletisim" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/#anasayfa"
          className="flex min-w-0 items-center gap-3"
          aria-label="Enes Aydın ana sayfa"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={siteConfig.logo}
            width={158}
            height={66}
            alt="Enes Aydın EA monogram logosu"
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Ana menü">
          {sectionNavigation.map((item) => {
            const active = pathname === "/" && item.href === "/#anasayfa";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-brand-muted transition hover:bg-slate-100 hover:text-brand-navy",
                  active && "bg-slate-100 text-brand-navy"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/iletisim" className="hidden px-4 py-2.5 sm:inline-flex">
            Eğitim Talep Et
          </ButtonLink>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-line text-brand-ink transition hover:border-brand-blue hover:text-brand-blue xl:hidden"
            type="button"
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-brand-line bg-white xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="Mobil menü">
            {sectionNavigation.map((item) => {
              const active = pathname === "/" && item.href === "/#anasayfa";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "whitespace-nowrap rounded-md px-3 py-3 text-sm font-semibold text-brand-muted transition hover:bg-slate-100 hover:text-brand-navy",
                    active && "bg-slate-100 text-brand-navy"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href="/iletisim" className="mt-2 w-full sm:hidden">
              Eğitim Talep Et
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
