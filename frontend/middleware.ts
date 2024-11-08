import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/api/public",
  "/_next",
  "/favicon.ico",
];

export default clerkMiddleware((auth, req) => {
  // Check if the current path is public
  const isPublicRoute = publicRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );

  // If the route is not public and user is not authenticated
  if (!isPublicRoute && !auth.userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // For authenticated routes or public routes, continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ]
};