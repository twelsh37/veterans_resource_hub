import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Updated public routes array to explicitly list all public paths
const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/api/public",
  "/_next", // Required for Next.js resources
  "/favicon.ico",
  "/assets" // If you have a public assets folder
];

export default clerkMiddleware((auth, req) => {
  const isPublicRoute = publicRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );

  // If the route is not public and user is not authenticated
  if (!isPublicRoute && !auth.userId) {
    const signInUrl = new URL('/sign-in', req.url);
    // Preserve the original URL as redirect_url
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // For authenticated routes or public routes, continue
  return NextResponse.next();
});

// Updated matcher configuration to catch all routes while excluding static files
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ]
};