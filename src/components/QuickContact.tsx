import { Phone } from "lucide-react";

import { siteConfig } from "@/data/site";

export function QuickContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <a
        href={siteConfig.phoneHref}
        className="inline-flex min-h-11 items-center gap-2 rounded-md bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-700"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {siteConfig.phone}
      </a>
    </div>
  );
}
