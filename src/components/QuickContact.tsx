import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function QuickContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden @enesaydin29 hesabına yaz"
        className="inline-flex min-h-11 items-center gap-2 rounded-md bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-700"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {siteConfig.whatsappHandle}
      </a>
    </div>
  );
}
