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

  // Add pathname to headers for layout detection
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', path);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Configure which routes to run proxy on
export const config = {
  matcher: [
    '/admin/:path*', // Protect all admin routes
    '/login', // Add pathname header for login route
    '/((?!api|_next/static|_next/image|favicon.ico).*)', // Add pathname header for all other routes
  ],
};
