import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const STATIC_FILE_REGEX = /\.[^/]+$/;

function isAllowedPath(pathname: string): boolean {
  if (pathname === "/") return true;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") return true;

  // Allow temple profile pages: /<templeId>/profile
  if (/^\/[^/]+\/profile\/?$/.test(pathname)) return true;
  // Allow careers detail page links from home cards
  if (/^\/careers\/[^/]+\/?$/.test(pathname)) return true;

  // Keep framework and API routes accessible
  if (pathname.startsWith("/api/")) return true;
  if (pathname.startsWith("/_next/")) return true;
  if (pathname.startsWith("/favicon")) return true;
  if (STATIC_FILE_REGEX.test(pathname)) return true;

  return false;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isAllowedPath(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/:path*"],
};
