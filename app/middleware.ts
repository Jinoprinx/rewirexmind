import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/member']
const authRoutes = ['/login']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  const isAuthenticated = !!token

  // Redirect protected routes
  if (protectedRoutes.some(prefix => request.nextUrl.pathname.startsWith(prefix))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Redirect auth routes if authenticated
  if (authRoutes.includes(request.nextUrl.pathname)) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/member/dashboard', request.url))
    }
  }

  return NextResponse.next()
}