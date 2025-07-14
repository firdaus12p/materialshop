import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Security headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Additional security headers
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");

  // Rate limiting headers (basic implementation)
  const ip = request.ip ?? "127.0.0.1";
  const userAgent = request.headers.get("user-agent") ?? "";

  // Block suspicious user agents
  const suspiciousAgents = ["bot", "crawler", "spider", "scraper"];
  const isSuspicious = suspiciousAgents.some(
    (agent) =>
      userAgent.toLowerCase().includes(agent) &&
      !userAgent.toLowerCase().includes("googlebot") &&
      !userAgent.toLowerCase().includes("bingbot")
  );

  if (isSuspicious && !userAgent.toLowerCase().includes("google")) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  // Block common attack patterns in URL
  const url = request.nextUrl.pathname;
  const maliciousPatterns = [
    "/wp-admin",
    "/wp-login",
    "/.env",
    "/config",
    "/admin",
    "/.git",
    "/phpmyadmin",
    "/.well-known/security.txt",
    "/robots.txt",
  ];

  const isRobotsTxt = url === "/robots.txt";
  const isSitemap = url === "/sitemap.xml";

  if (
    !isRobotsTxt &&
    !isSitemap &&
    maliciousPatterns.some((pattern) => url.includes(pattern))
  ) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
