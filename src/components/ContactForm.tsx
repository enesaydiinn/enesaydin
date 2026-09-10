"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";

import { corporateTrainings } from "@/data/site";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  training: string;
  trainingOther: string;
  message: string;
};

type FormField = keyof FormValues;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  training: "",
  trainingOther: "",
  message: ""
};

const inputClassName =
  "min-h-11 rounded-md border px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue";

const errorInputClassName = "border-red-500 bg-red-50 focus:border-red-600";

function getFieldError(field: FormField, values: FormValues) {
  const value = values[field].trim();

  if (!value && field !== "trainingOther") {
    return "Bu alan zorunludur.";
  }

  if (field === "name" && /\d/.test(value)) {
    return "Ad Soyad alanına numara yazılamaz.";
  }

  if (field === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Geçerli bir e-posta adresi yazın.";
  }

  if (field === "phone" && /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(value)) {
    return "Telefon alanına harf yazılamaz.";
  }

  if (field === "trainingOther" && values.training === "Diğer" && !value) {
    return "Lütfen talep ettiğiniz eğitimi yazın.";
  }

  return "";
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const requestedTraining = searchParams.get("egitim") ?? "";
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const selectedTraining = useMemo(() => {
    const course = corporateTrainings.find((item) => item.slug === requestedTraining);
    return course?.title ?? requestedTraining;
  }, [requestedTraining]);

  useEffect(() => {
    setValues((currentValues) => ({
      ...currentValues,
      training: selectedTraining
    }));
  }, [selectedTraining]);

  function updateField(field: FormField, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
      ...(field === "training" && value !== "Diğer" ? { trainingOther: "" } : {})
    }));
    setSent(false);
  }

  function markTouched(field: FormField) {
    setTouched((currentTouched) => ({
      ...currentTouched,
      [field]: true
    }));
  }

  function shouldShowError(field: FormField) {
    if (field === "name" && /\d/.test(values.name)) {
      return true;
    }

    if (field === "phone" && /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(values.phone)) {
      return true;
    }

    if (field === "email" && values.email && getFieldError("email", values)) {
      return true;
    }

    return Boolean(touched[field] || submitAttempted);
  }

  function fieldError(field: FormField) {
    const fieldErrorMessage = getFieldError(field, values);
    return shouldShowError(field) ? fieldErrorMessage : "";
  }

  function fieldClassName(field: FormField, baseClassName = inputClassName) {
    return cn(
      baseClassName,
      fieldError(field) ? errorInputClassName : "border-brand-line"
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = (Object.keys(values) as FormField[]).filter((field) => getFieldError(field, values));

    setError("");
    setSent(false);
    setSubmitAttempted(true);

    if (nextErrors.length > 0) {
      setError("Lütfen kırmızı işaretli alanları düzeltin.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/training-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          training: values.training,
          trainingOther: values.trainingOther,
          message: values.message
        })
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(result?.error ?? "Talep kaydedilemedi. Lütfen tekrar deneyin.");
        return;
      }

      form.reset();
      setValues(initialValues);
      setTouched({});
      setSubmitAttempted(false);
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
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            onBlur={() => markTouched("name")}
            pattern="^[^0-9]+$"
            title="Ad Soyad alanına numara yazılamaz."
            className={fieldClassName("name")}
            autoComplete="name"
            aria-invalid={Boolean(fieldError("name"))}
            aria-describedby={fieldError("name") ? "name-error" : undefined}
          />
          {fieldError("name") ? <span id="name-error" className="text-xs font-semibold text-red-600">{fieldError("name")}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Kurum Adı
          <input
            name="company"
            required
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            onBlur={() => markTouched("company")}
            className={fieldClassName("company")}
            autoComplete="organization"
            aria-invalid={Boolean(fieldError("company"))}
            aria-describedby={fieldError("company") ? "company-error" : undefined}
          />
          {fieldError("company") ? <span id="company-error" className="text-xs font-semibold text-red-600">{fieldError("company")}</span> : null}
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          E-posta
          <input
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            onBlur={() => markTouched("email")}
            className={fieldClassName("email")}
            autoComplete="email"
            aria-invalid={Boolean(fieldError("email"))}
            aria-describedby={fieldError("email") ? "email-error" : undefined}
          />
          {fieldError("email") ? <span id="email-error" className="text-xs font-semibold text-red-600">{fieldError("email")}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Telefon
          <input
            name="phone"
            required
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            onBlur={() => markTouched("phone")}
            inputMode="tel"
            pattern="^[0-9+()\\s-]+$"
            title="Telefon alanına harf yazılamaz."
            className={fieldClassName("phone")}
            autoComplete="tel"
            aria-invalid={Boolean(fieldError("phone"))}
            aria-describedby={fieldError("phone") ? "phone-error" : undefined}
          />
          {fieldError("phone") ? <span id="phone-error" className="text-xs font-semibold text-red-600">{fieldError("phone")}</span> : null}
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Talep Edilen Eğitim
        <select
          name="training"
          value={values.training}
          onChange={(event) => updateField("training", event.target.value)}
          onBlur={() => markTouched("training")}
          required
          className={fieldClassName("training", `${inputClassName} bg-white`)}
          aria-invalid={Boolean(fieldError("training"))}
          aria-describedby={fieldError("training") ? "training-error" : undefined}
        >
          <option value="">Eğitim seçiniz</option>
          {corporateTrainings.map((training) => (
            <option key={training.slug} value={training.title}>
              {training.title}
            </option>
          ))}
          <option value="Diğer">Diğer</option>
        </select>
        {fieldError("training") ? <span id="training-error" className="text-xs font-semibold text-red-600">{fieldError("training")}</span> : null}
      </label>
      {values.training === "Diğer" ? (
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Talep Edilen Diğer Eğitim
          <input
            name="trainingOther"
            required
            value={values.trainingOther}
            onChange={(event) => updateField("trainingOther", event.target.value)}
            onBlur={() => markTouched("trainingOther")}
            className={fieldClassName("trainingOther")}
            placeholder="Talep ettiğiniz eğitimi yazın"
            aria-invalid={Boolean(fieldError("trainingOther"))}
            aria-describedby={fieldError("trainingOther") ? "training-other-error" : undefined}
          />
          {fieldError("trainingOther") ? (
            <span id="training-other-error" className="text-xs font-semibold text-red-600">{fieldError("trainingOther")}</span>
          ) : null}
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Mesaj
        <textarea
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          onBlur={() => markTouched("message")}
          className={fieldClassName("message", "rounded-md border px-3 py-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue")}
          aria-invalid={Boolean(fieldError("message"))}
          aria-describedby={fieldError("message") ? "message-error" : undefined}
        />
        {fieldError("message") ? <span id="message-error" className="text-xs font-semibold text-red-600">{fieldError("message")}</span> : null}
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
