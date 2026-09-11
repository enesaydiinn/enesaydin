"use client";

import { FormEvent, useEffect, useState } from "react";
import { Lock, LogOut, RefreshCw } from "lucide-react";

type TrainingRequest = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  training: string;
  message: string;
  status: string;
  source: string;
  created_at: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [requests, setRequests] = useState<TrainingRequest[]>([]);

  async function loadRequests() {
    setIsLoading(true);
    setError("");

    const response = await fetch("/api/admin/training-requests", {
      cache: "no-store"
    });

    setIsLoading(false);

    if (response.status === 401) {
      setIsAuthenticated(false);
      return;
    }

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(result?.error ?? "Kayıtlar alınamadı.");
      return;
    }

    const result = (await response.json()) as { requests: TrainingRequest[] };
    setRequests(result.requests);
    setIsAuthenticated(true);
  }

  useEffect(() => {
    void loadRequests();
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsSubmitting(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password")
      })
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(result?.error ?? "Giriş yapılamadı.");
      return;
    }

    setIsAuthenticated(true);
    await loadRequests();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST"
    });

    setIsAuthenticated(false);
    setRequests([]);
  }

  if (isLoading && !isAuthenticated) {
    return (
      <div className="rounded-lg border border-brand-line bg-white p-6 text-sm font-semibold text-brand-muted shadow-sm">
        Admin paneli hazırlanıyor...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <form className="mx-auto max-w-md rounded-lg border border-brand-line bg-white p-6 shadow-sm" onSubmit={handleLogin}>
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue text-white">
            <Lock className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-navy">Admin Girişi</h2>
            <p className="mt-1 text-sm text-brand-muted">Eğitim taleplerini görüntülemek için giriş yapın.</p>
          </div>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Kullanıcı adı
          <input
            name="username"
            required
            className="min-h-11 rounded-md border border-brand-line px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
            autoComplete="username"
          />
        </label>
        <label className="mt-4 grid gap-2 text-sm font-semibold text-brand-ink">
          Şifre
          <input
            name="password"
            type="password"
            required
            className="min-h-11 rounded-md border border-brand-line px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
            autoComplete="current-password"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
        {error ? <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p> : null}
      </form>
    );
  }

  return (
    <div className="rounded-lg border border-brand-line bg-white shadow-sm">
      <div className="flex flex-col justify-between gap-4 border-b border-brand-line p-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold text-brand-navy">Eğitim Talepleri</h2>
          <p className="mt-1 text-sm text-brand-muted">Son 100 kayıt listelenir.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => void loadRequests()}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-brand-line px-4 text-sm font-semibold text-brand-ink transition hover:border-brand-blue hover:text-brand-blue"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Yenile
          </button>
          <button
            type="button"
            onClick={() => void handleLogout()}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-brand-navy px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Çıkış
          </button>
        </div>
      </div>

      {error ? <p className="m-5 rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{error}</p> : null}

      {requests.length === 0 ? (
        <div className="p-8 text-center text-sm font-semibold text-brand-muted">Henüz eğitim talebi bulunmuyor.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-brand-line text-left text-sm">
            <thead className="bg-brand-canvas text-xs font-bold uppercase tracking-wide text-brand-muted">
              <tr>
                <th className="px-4 py-3">Tarih</th>
                <th className="px-4 py-3">Ad Soyad</th>
                <th className="px-4 py-3">Kurum</th>
                <th className="px-4 py-3">Eğitim</th>
                <th className="px-4 py-3">İletişim</th>
                <th className="px-4 py-3">Mesaj</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-line">
              {requests.map((request) => (
                <tr key={request.id} className="align-top">
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-brand-ink">{formatDate(request.created_at)}</td>
                  <td className="px-4 py-4 font-semibold text-brand-navy">{request.name}</td>
                  <td className="px-4 py-4 text-brand-ink">{request.company}</td>
                  <td className="px-4 py-4 text-brand-ink">{request.training}</td>
                  <td className="px-4 py-4 text-brand-muted">
                    <a className="block font-semibold text-brand-blue" href={`mailto:${request.email}`}>
                      {request.email}
                    </a>
                    <a className="mt-1 block text-brand-ink" href={`tel:${request.phone}`}>
                      {request.phone}
                    </a>
                  </td>
                  <td className="max-w-sm px-4 py-4 leading-6 text-brand-muted">{request.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
