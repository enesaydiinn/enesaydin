import { NextResponse } from "next/server";

import { getSupabaseRestConfig } from "@/lib/supabase-rest";

type TrainingRequestPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  training?: string;
  trainingOther?: string;
  message?: string;
  turnstileToken?: string;
};

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: TrainingRequestPayload;
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Geçersiz talep." }, { status: 400 });
    }
    payload = body as TrainingRequestPayload;
  } catch {
    return NextResponse.json({ error: "Geçersiz talep." }, { status: 400 });
  }

  const name = normalizeValue(payload.name);
  const company = normalizeValue(payload.company);
  const email = normalizeValue(payload.email);
  const phone = normalizeValue(payload.phone);
  const training = normalizeValue(payload.training);
  const trainingOther = normalizeValue(payload.trainingOther);
  const message = normalizeValue(payload.message);

  if (!name || !company || !email || !phone || !training || !message) {
    return NextResponse.json(
      { error: "Lütfen tüm zorunlu alanları doldurun." },
      { status: 400 }
    );
  }

  if (/\d/.test(name)) {
    return NextResponse.json(
      { error: "Ad Soyad alanına numara yazılamaz." },
      { status: 400 }
    );
  }

  if (/[A-Za-zÇĞİÖŞÜçğıöşü]/.test(phone)) {
    return NextResponse.json(
      { error: "Telefon alanına harf yazılamaz." },
      { status: 400 }
    );
  }

  if (training === "Diğer" && !trainingOther) {
    return NextResponse.json(
      { error: "Lütfen talep ettiğiniz eğitimi yazın." },
      { status: 400 }
    );
  }

  const siteKey = process.env.TURNSTILE_SITE_KEY?.trim();
  const secretKey = process.env.TURNSTILE_SECRET_KEY?.trim();

  if (Boolean(siteKey) !== Boolean(secretKey)) {
    return NextResponse.json(
      { error: "Doğrulama ayarları eksik. Lütfen daha sonra tekrar deneyin." },
      { status: 503 }
    );
  }

  if (siteKey && secretKey) {
    const token = normalizeValue(payload.turnstileToken);
    if (!token || token.length > 2048) {
      return NextResponse.json(
        { error: "Lütfen bot doğrulamasını tamamlayın." },
        { status: 400 }
      );
    }

    try {
      const verification = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ secret: secretKey, response: token }),
          cache: "no-store",
          signal: AbortSignal.timeout(8000)
        }
      );

      if (!verification.ok) throw new Error(`Turnstile returned ${verification.status}`);

      const result = (await verification.json()) as { success?: boolean };
      if (!result.success) {
        return NextResponse.json(
          { error: "Doğrulama başarısız oldu. Lütfen tekrar deneyin." },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error("Turnstile validation failed", error);
      return NextResponse.json(
        { error: "Doğrulama yapılamadı. Lütfen tekrar deneyin." },
        { status: 502 }
      );
    }
  }

  const supabase = getSupabaseRestConfig();

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase bağlantı ayarları eksik." },
      { status: 500 }
    );
  }

  const response = await fetch(`${supabase.restUrl}/training_requests`, {
    method: "POST",
    headers: {
      ...supabase.headers,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      name,
      company,
      email,
      phone,
      training,
      training_other: trainingOther || null,
      message,
      source: "website",
      user_agent: request.headers.get("user-agent") ?? ""
    })
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error("Supabase training request insert failed", response.status, details);

    return NextResponse.json(
      { error: "Talep kaydedilemedi. Lütfen tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
