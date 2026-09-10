import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Ana Sayfa", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav className="mb-6 text-sm font-medium text-brand-muted" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, index) => {
            const current = index === allItems.length - 1;

            return (
              <li className="flex items-center gap-2" key={item.href}>
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {current ? (
                  <span className="text-brand-ink" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link className="transition hover:text-brand-blue" href={item.href}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
