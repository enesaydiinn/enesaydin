import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { adminCookieName, verifyAdminSessionToken } from "@/lib/admin-auth";
import { getSupabaseRestConfig } from "@/lib/supabase-rest";

export const runtime = "nodejs";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(adminCookieName)?.value;

  if (!verifyAdminSessionToken(token)) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }

  const supabase = getSupabaseRestConfig();

  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase bağlantı ayarları eksik." },
      { status: 500 }
    );
  }

  const searchParams = new URLSearchParams({
    select: "id,name,company,email,phone,training,training_other,message,source,status,user_agent,created_at",
    order: "created_at.desc",
    limit: "100"
  });

  const response = await fetch(`${supabase.restUrl}/training_requests?${searchParams.toString()}`, {
    headers: {
      ...supabase.headers
    },
    cache: "no-store"
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error("Supabase training requests fetch failed", response.status, details);

    return NextResponse.json(
      { error: "Kayıtlar alınamadı." },
      { status: 502 }
    );
  }

  const requests = await response.json();

  return NextResponse.json({ requests });
}
