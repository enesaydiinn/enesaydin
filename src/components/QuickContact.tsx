import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function QuickContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden enesaydin29 hesabına yaz"
        className="group inline-flex h-12 w-12 items-center gap-2 overflow-hidden rounded-full bg-emerald-600 px-3 text-white shadow-soft transition-[width,background-color] duration-300 ease-out hover:w-44 hover:bg-emerald-700 focus-visible:w-44 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 motion-reduce:duration-0"
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-32 group-hover:opacity-100 group-focus-visible:max-w-32 group-focus-visible:opacity-100 motion-reduce:duration-0">
          İletişime geç!
        </span>
      </a>
    </div>
  );
}
