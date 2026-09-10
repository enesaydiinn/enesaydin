import Image from "next/image";
import { ExternalLink, Layers3, MonitorPlay } from "lucide-react";

type OnlineCourseCardProps = {
  course: {
    title: string;
    platform: string;
    level?: string;
    description: string;
    image?: string;
    imageFit?: "cover" | "contain";
    href: string;
  };
};

export function OnlineCourseCard({ course }: OnlineCourseCardProps) {
  const imageClassName =
    course.imageFit === "contain" ? "object-contain object-center p-6" : "object-cover";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      {course.image ? (
        <div className="relative aspect-[16/9] bg-slate-100">
          <Image
            src={course.image}
            alt={`${course.title} çevrim içi eğitim görseli`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={imageClassName}
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-brand-muted">
            <MonitorPlay className="h-3.5 w-3.5" aria-hidden="true" />
            {course.platform}
          </span>
          {course.level ? (
            <span className="inline-flex w-fit items-center gap-2 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-brand-blue">
              <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
              {course.level}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 font-display text-xl font-bold leading-snug text-brand-navy">
          {course.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted">{course.description}</p>
        <a
          href={course.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Eğitime Git
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
