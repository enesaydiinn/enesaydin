import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function QuickContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden enesaydin29 hesabına yaz"
        className="inline-flex min-h-11 items-center gap-2.5 rounded-md bg-emerald-600 px-4 py-3 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
          <WhatsAppIcon className="h-5 w-5" />
        </span>
        <span className="text-sm font-bold">İletişime geç!</span>
      </a>
    </div>
  );
}
