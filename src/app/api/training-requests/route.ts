import { NextResponse } from "next/server";

import { getSupabaseRestConfig } from "@/lib/supabase-rest";

type TrainingRequestPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  training?: string;
  message?: string;
};

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const supabase = getSupabaseRestConfig();

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase bağlantı ayarları eksik." },
      { status: 500 }
    );
  }

  const payload = (await request.json()) as TrainingRequestPayload;
  const name = normalizeValue(payload.name);
  const company = normalizeValue(payload.company);
  const email = normalizeValue(payload.email);
  const phone = normalizeValue(payload.phone);
  const training = normalizeValue(payload.training);
  const message = normalizeValue(payload.message);

  if (!name || !company || !email || !phone || !training || !message) {
    return NextResponse.json(
      { error: "Lütfen tüm zorunlu alanları doldurun." },
      { status: 400 }
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
