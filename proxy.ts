import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Proxy function to protect admin routes
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the path is an admin route
  const isAdminRoute = path.startsWith('/admin');

  // Get token from cookies
  const token = request.cookies.get('authToken')?.value;

  // If accessing admin route without token, redirect to login
  if (isAdminRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path); // Save the intended destination
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Configure which routes to run proxy on
export const config = {
  matcher: [
    '/admin/:path*', // Protect all admin routes
  ],
};
