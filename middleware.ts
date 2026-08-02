import { NextResponse, type NextRequest } from "next/server";
import { signPayload } from "@/lib/sign";

const COOKIE_NAME = "admin_session";

async function isValidSession(value: string | undefined) {
  if (!value) return false;
  const secret = process.env.SESSION_SECRET;
  if (!secret) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const [prefix, expiresStr, signature] = parts;
  const payload = `${prefix}.${expiresStr}`;
  const expected = await signPayload(payload, secret);

  if (expected !== signature) return false;
  if (Number(expiresStr) < Date.now()) return false;

  return true;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const cookie = request.cookies.get(COOKIE_NAME)?.value;
    if (!(await isValidSession(cookie))) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
