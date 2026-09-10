import type { MetadataRoute } from "next";

import { blogPosts, navigation } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = navigation.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: new Date("2026-06-01"),
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes];
}
