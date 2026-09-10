"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";

import { corporateTrainings, siteConfig } from "@/data/site";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedTraining = searchParams.get("egitim") ?? "";
  const [sent, setSent] = useState(false);

  const selectedTraining = useMemo(() => {
    const course = corporateTrainings.find((item) => item.slug === requestedTraining);
    return course?.title ?? requestedTraining;
  }, [requestedTraining]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = "Kurumsal Eğitim Talebi";
    const body = [
      `Ad Soyad: ${formData.get("name")}`,
      `Kurum Adı: ${formData.get("company")}`,
      `E-posta: ${formData.get("email")}`,
      `Telefon: ${formData.get("phone")}`,
      `Talep Edilen Eğitim: ${formData.get("training")}`,
      "",
      `Mesaj: ${formData.get("message")}`
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="grid gap-4 rounded-lg border border-brand-line bg-white p-5 shadow-sm" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Ad Soyad
          <input
            name="name"
            required
            className="min-h-11 rounded-md border border-brand-line px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Kurum Adı
          <input
            name="company"
            required
            className="min-h-11 rounded-md border border-brand-line px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
            autoComplete="organization"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          E-posta
          <input
            name="email"
            type="email"
            required
            className="min-h-11 rounded-md border border-brand-line px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Telefon
          <input
            name="phone"
            required
            className="min-h-11 rounded-md border border-brand-line px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Talep Edilen Eğitim
        <select
          name="training"
          defaultValue={selectedTraining}
          className="min-h-11 rounded-md border border-brand-line bg-white px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
        >
          <option value="">Eğitim seçiniz</option>
          {corporateTrainings.map((training) => (
            <option key={training.slug} value={training.title}>
              {training.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Mesaj
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-md border border-brand-line px-3 py-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Eğitim Talebi Gönder
      </button>
      {sent ? (
        <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          Talep bilgileri e-posta taslağına aktarıldı.
        </p>
      ) : null}
    </form>
  );
}
