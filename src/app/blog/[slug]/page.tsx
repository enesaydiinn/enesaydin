import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getBlogPost, siteConfig } from "@/data/site";
import { absoluteUrl, cn, formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      publishedTime: post.publishedAt,
      authors: [siteConfig.name],
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post.coverImage),
          alt: `${post.title} kapak görseli`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [absoluteUrl(post.coverImage)]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: absoluteUrl(post.coverImage),
    inLanguage: "tr-TR",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.baseUrl
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo)
      }
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article className="bg-white">
        <header className="border-b border-brand-line py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${post.slug}` }
              ]}
            />
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-muted">
              <span className="rounded-md bg-blue-50 px-2.5 py-1 text-brand-blue">{post.category}</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-muted">{post.excerpt}</p>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-brand-line bg-brand-canvas">
              <Image
                src={post.coverImage}
                alt={`${post.title} kapak görseli`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className={cn(
                  "object-center",
                  post.coverImageFit === "contain" ? "object-contain p-6" : "object-cover"
                )}
                priority
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg leading-8 text-brand-ink">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-brand-line bg-brand-canvas p-6">
            <h2 className="font-display text-2xl font-bold text-brand-navy">
              Kurumunuz için bu başlıkta eğitim planlayalım
            </h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              İçeriği ekip seviyenize, sektörünüze ve hedeflediğiniz çıktılara göre birlikte netleştirebiliriz.
            </p>
            <ButtonLink href="/iletisim" className="mt-5 w-fit">
              Eğitim Talep Et
            </ButtonLink>
          </div>
        </div>
      </article>
    </>
  );
}
