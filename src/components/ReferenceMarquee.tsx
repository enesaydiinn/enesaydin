import Image from "next/image";

import { references } from "@/data/site";
import { cn } from "@/lib/utils";

type Reference = (typeof references)[number];

export function ReferenceLogoCard({ reference }: { reference: Reference }) {
  return (
    <div className="flex h-24 min-w-56 items-center justify-center rounded-lg border border-brand-line bg-white px-6 py-4 shadow-sm">
      <div className={cn("relative h-14 w-44", reference.logoFrameClassName)}>
        <Image
          src={reference.logo}
          alt={`${reference.name} logosu`}
          fill
          sizes="176px"
          className={cn("object-contain object-center", reference.logoClassName)}
        />
      </div>
      <span className="sr-only">{reference.name}</span>
    </div>
  );
}

export function ReferenceMarquee() {
  const items = [...references, ...references];

  return (
    <div className="group overflow-hidden border-y border-brand-line bg-white py-5">
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {items.map((reference, index) => (
          <ReferenceLogoCard reference={reference} key={`${reference.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}
