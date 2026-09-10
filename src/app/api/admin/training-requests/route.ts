import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { adminCookieName, verifyAdminSessionToken } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(adminCookieName)?.value;

  if (!verifyAdminSessionToken(token)) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Supabase bağlantı ayarları eksik." },
      { status: 500 }
    );
  }

  const searchParams = new URLSearchParams({
    select: "id,name,company,email,phone,training,message,source,status,user_agent,created_at",
    order: "created_at.desc",
    limit: "100"
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/training_requests?${searchParams.toString()}`, {
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`
    },
    cache: "no-store"
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Kayıtlar alınamadı." },
      { status: 502 }
    );
  }

  const requests = await response.json();

  return NextResponse.json({ requests });
}
