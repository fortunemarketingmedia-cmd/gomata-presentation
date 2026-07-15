import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "@/utils/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow Next.js assets, public images, and login page
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/login" ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".mp4")
  ) {
    // If user is already logged in and tries to access /login, redirect to home
    if (pathname === "/login") {
      const token = request.cookies.get("token")?.value;
      if (token) {
        const decoded = await verifyJwt(token);
        if (decoded) {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }
    }
    return NextResponse.next();
  }

  // Get token cookie
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Verify JWT
  const decoded = await verifyJwt(token);
  if (!decoded) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.set("token", "", { maxAge: 0, path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect all routes except static assets and media extensions
    "/((?!_next/static|_next/image|images|favicon.ico|.*\\.webp$|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.mp4$).*)",
  ],
};
