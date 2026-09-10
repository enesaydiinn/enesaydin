import Image from "next/image";
import { MapPin } from "lucide-react";

type ConferenceCardProps = {
  conference: {
    slug: string;
    title: string;
    venue: string;
    image: string;
    description: string;
  };
};

export function ConferenceCard({ conference }: ConferenceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative aspect-[16/9] bg-slate-100">
        <Image
          src={conference.image}
          alt={`${conference.title} konferans görseli`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-brand-muted">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {conference.venue}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold leading-snug text-brand-navy">
          {conference.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted">{conference.description}</p>
      </div>
    </article>
  );
}
