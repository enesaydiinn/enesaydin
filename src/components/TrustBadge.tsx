import { CheckCircle2 } from "lucide-react";

export function TrustBadge({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-brand-line bg-white p-4 text-sm font-semibold text-brand-ink shadow-sm">
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
      {children}
    </div>
  );
}
