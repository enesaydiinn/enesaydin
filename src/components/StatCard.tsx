export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-brand-line bg-brand-canvas p-5">
      <p className="font-display text-3xl font-bold text-brand-navy">{value}</p>
      <p className="mt-2 text-sm font-medium text-brand-muted">{label}</p>
    </div>
  );
}
