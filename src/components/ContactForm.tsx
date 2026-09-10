"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";

import { corporateTrainings } from "@/data/site";

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedTraining = searchParams.get("egitim") ?? "";
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedTraining = useMemo(() => {
    const course = corporateTrainings.find((item) => item.slug === requestedTraining);
    return course?.title ?? requestedTraining;
  }, [requestedTraining]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setError("");
    setSent(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/training-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          training: formData.get("training"),
          message: formData.get("message")
        })
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(result?.error ?? "Talep kaydedilemedi. Lütfen tekrar deneyin.");
        return;
      }

      form.reset();
      setSent(true);
    } catch {
      setError("Talep gönderilemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {isSubmitting ? "Gönderiliyor..." : "Eğitim Talebi Gönder"}
      </button>
      {sent ? (
        <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          Eğitim talebiniz alındı. En kısa sürede sizinle iletişime geçilecektir.
        </p>
      ) : null}
      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </form>
  );
}
