import type { ReactNode } from "react";

export function HeroSection({ children }: { children: ReactNode }) {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-brand-line bg-brand-canvas">
      {children}
    </section>
  );
}
