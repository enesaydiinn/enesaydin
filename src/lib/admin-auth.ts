import { createHmac, timingSafeEqual } from "crypto";

export const adminCookieName = "enes_admin_session";
const sessionDurationSeconds = 60 * 60 * 8;

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function hasAdminConfig() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && getSessionSecret());
}

export function validateAdminCredentials(username: string, password: string) {
  const adminUsername = process.env.ADMIN_USERNAME ?? "";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "";

  return safeEqual(username, adminUsername) && safeEqual(password, adminPassword);
}

export function createAdminSessionToken() {
  const expiresAt = Math.floor(Date.now() / 1000) + sessionDurationSeconds;
  const payload = `admin.${expiresAt}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyAdminSessionToken(token?: string) {
  if (!token || !getSessionSecret()) {
    return false;
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    return false;
  }

  const [role, expiresAt, signature] = parts;
  const payload = `${role}.${expiresAt}`;
  const expiresAtNumber = Number(expiresAt);

  if (role !== "admin" || !Number.isFinite(expiresAtNumber)) {
    return false;
  }

  if (expiresAtNumber < Math.floor(Date.now() / 1000)) {
    return false;
  }

  return safeEqual(signature, sign(payload));
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: sessionDurationSeconds
};
