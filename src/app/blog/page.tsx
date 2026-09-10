import type { Metadata } from "next";

import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Proje yönetimi, PMP, yapay zeka, DevSecOps, çevik yaklaşım, Scrum ve dijital dönüşüm üzerine kurumsal eğitim yazıları.",
  alternates: {
    canonical: "/blog"
  }
};

const articleListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(`/blog/${post.slug}`),
    item: {
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: siteConfig.name
      }
    }
  }))
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={articleListSchema} />
      <section className="border-b border-brand-line bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <SectionHeading
            eyebrow="Blog"
            title="Proje yönetimi, teknoloji ve kurumsal eğitim notları"
            description="Kurumların teknoloji yetkinliğini güçlendiren gündem başlıkları, kavram açıklamaları ve uygulanabilir öneriler."
            level={1}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
