"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useId, useState } from "react";

type CertificationCardProps = {
  certification: {
    name: string;
    issuer: string;
    area: string;
    image?: string;
    description: string;
  };
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const titleId = useId();
  const imageSrc = certification.image ?? "/images/certificate-placeholder.svg";

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  return (
    <article className="overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm">
      <button
        type="button"
        className="relative block aspect-[16/9] w-full cursor-zoom-in bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
        onClick={() => setIsPreviewOpen(true)}
        aria-label={`${certification.name} sertifika görselini büyüt`}
      >
        <Image
          src={imageSrc}
          alt={`${certification.name} sertifika görseli`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain object-center"
        />
      </button>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-brand-navy">
          {certification.name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-brand-blue">{certification.issuer}</p>
        <p className="mt-1 text-sm text-brand-muted">{certification.area}</p>
        <p className="mt-4 text-sm leading-6 text-brand-muted">{certification.description}</p>
      </div>
      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl">
            <h2 id={titleId} className="sr-only">
              {certification.name} sertifika görseli
            </h2>
            <button
              type="button"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              onClick={() => setIsPreviewOpen(false)}
              aria-label="Sertifika görselini kapat"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="relative h-[82vh] max-h-[900px] min-h-[320px] bg-slate-100">
              <Image
                src={imageSrc}
                alt={`${certification.name} sertifika görseli`}
                fill
                sizes="100vw"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}
