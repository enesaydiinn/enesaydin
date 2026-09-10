import { NextResponse } from "next/server";

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
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
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

  const response = await fetch(`${supabaseUrl}/rest/v1/training_requests`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
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
    return NextResponse.json(
      { error: "Talep kaydedilemedi. Lütfen tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
