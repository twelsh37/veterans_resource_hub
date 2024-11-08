import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Simpler public routes array
const publicRoutes = [
  "/",
  "/sign-in",
  "/api/public"
];

export default clerkMiddleware((auth, req) => {
  // Check if the current path is public
  const isPublicRoute = publicRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isPublicRoute && !auth.userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

// Simpler matcher configuration
export const config = {
  matcher: [
    '/(.*)',
    '/api/:path*'
  ]
};