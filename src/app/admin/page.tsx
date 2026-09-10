import type { Metadata } from "next";

import { AdminDashboard } from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Panel",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return (
    <section className="min-h-[70vh] bg-brand-canvas py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase text-brand-blue">Admin Panel</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Eğitim talebi kayıtları
          </h1>
        </div>
        <AdminDashboard />
      </div>
    </section>
  );
}
