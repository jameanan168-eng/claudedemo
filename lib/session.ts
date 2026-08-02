import "server-only";
import { cookies } from "next/headers";
import { signPayload } from "@/lib/sign";

const COOKIE_NAME = "admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 วัน

function getSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET is not set");
  return secret;
}

export async function createSession() {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `admin.${expires}`;
  const signature = await signPayload(payload, getSecret());
  const value = `${payload}.${signature}`;

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  if (!value) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const [prefix, expiresStr, signature] = parts;
  const payload = `${prefix}.${expiresStr}`;

  const expected = await signPayload(payload, getSecret());
  if (expected !== signature) return false;
  if (Number(expiresStr) < Date.now()) return false;

  return true;
}
