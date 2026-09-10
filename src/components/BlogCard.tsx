import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";

import { cn, formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: {
    slug: string;
    title: string;
    category: string;
    publishedAt: string;
    readingTime?: string;
    coverImage?: string;
    coverImageFit?: "cover" | "contain";
    excerpt: string;
  };
};

export function BlogCard({ post }: BlogCardProps) {
  const postHref = `/blog/${post.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative aspect-[16/9] bg-slate-100">
        <Image
          src={post.coverImage ?? "/images/blog-placeholder.svg"}
          alt={`${post.title} blog kapak görseli`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "object-center",
            post.coverImageFit === "contain" ? "object-contain p-6" : "object-cover"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-muted">
        <span className="rounded-md bg-blue-50 px-2.5 py-1 text-brand-blue">{post.category}</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        {post.readingTime ? (
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readingTime}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 font-display text-xl font-bold leading-snug text-brand-navy">
        <Link
          href={postHref}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
        >
          {post.title}
        </Link>
      </h3>
      <Link
        href={postHref}
        target="_blank"
        rel="noreferrer"
        className="mt-3 block flex-1 text-sm leading-6 text-brand-muted transition hover:text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
      >
        {post.excerpt}
      </Link>
      </div>
    </article>
  );
}
