import Image from "next/image";
import Link from "next/link";
import { Building2, CalendarDays, Tag } from "lucide-react";

type CourseCardProps = {
  course: {
    title: string;
    institution: string;
    category: string;
    categories?: string[];
    date?: string;
    description: string;
    image: string;
    slug?: string;
  };
  ctaLabel?: string;
  ctaHref?: string;
};

export function CourseCard({
  course,
  ctaLabel = "Benzer Eğitim Talep Et",
  ctaHref = `/iletisim?egitim=${encodeURIComponent(course.slug ?? course.title)}`
}: CourseCardProps) {
  const categoryBadges = course.categories ?? [course.category];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative aspect-[16/9] bg-slate-100">
        <Image
          src={course.image}
          alt={`${course.title} eğitim görseli`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2 text-xs font-semibold text-brand-muted">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            {course.institution}
          </span>
          {categoryBadges.map((category) => (
            <span
              className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-brand-blue"
              key={category}
            >
              <Tag className="h-3.5 w-3.5" aria-hidden="true" />
              {category}
            </span>
          ))}
          {course.date ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-emerald-700">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {course.date}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 font-display text-xl font-bold leading-snug text-brand-navy">
          {course.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted">{course.description}</p>
        <Link
          href={ctaHref}
          className="mt-5 inline-flex min-h-10 items-center justify-center rounded-md border border-brand-line px-4 py-2 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
