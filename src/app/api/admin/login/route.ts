import { NextResponse } from "next/server";

import {
  adminCookieName,
  adminCookieOptions,
  createAdminSessionToken,
  hasAdminConfig,
  validateAdminCredentials
} from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!hasAdminConfig()) {
    return NextResponse.json(
      { error: "Admin giriş ayarları eksik." },
      { status: 500 }
    );
  }

  const payload = (await request.json()) as { username?: string; password?: string };
  const username = typeof payload.username === "string" ? payload.username.trim() : "";
  const password = typeof payload.password === "string" ? payload.password : "";

  if (!validateAdminCredentials(username, password)) {
    return NextResponse.json(
      { error: "Kullanıcı adı veya şifre hatalı." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName, createAdminSessionToken(), adminCookieOptions);

  return response;
}
