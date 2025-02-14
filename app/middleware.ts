import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    '/member/:path*',
    '/login',
  ]
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  const isAuthenticated = !!token
  const { pathname } = request.nextUrl

  // Redirect to login if accessing protected routes
  if (pathname.startsWith('/member') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect to dashboard if authenticated
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/member/dashboard', request.url))
  }

  return NextResponse.next()
}