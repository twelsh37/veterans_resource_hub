import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export function middleware(request: NextRequest) {
  console.log('Middleware is running');

  const { userId } = getAuth(request);
  console.log('User ID:', userId);

  if (userId) {
    return NextResponse.redirect(new URL('/(authenticated)/welcome', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Apply middleware to the root path
};