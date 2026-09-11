import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

const lastModified = new Date("2026-09-12");

const staticRoutes = [
  { href: "/", priority: 1 },
  { href: "/kurumsal-egitimler", priority: 0.9 },
  { href: "/online-egitimler", priority: 0.85 },
  { href: "/sertifikalar", priority: 0.8 },
  { href: "/konferanslar", priority: 0.8 },
  { href: "/referanslar", priority: 0.75 },
  { href: "/hakkimda", priority: 0.75 },
  { href: "/blog", priority: 0.8 },
  { href: "/iletisim", priority: 0.85 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: item.priority
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.72,
    images: [absoluteUrl(post.coverImage)]
  }));

  return [...pages, ...blogRoutes];
}
