import createMiddleware from 'next-intl/middleware'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './src/i18n/routing'

// Middleware for locale detection
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
})

export default async function middleware(req: NextRequest) {
  // First, handle locale detection
  const intlResponse = intlMiddleware(req)
  if (intlResponse) return intlResponse

  // Check if it's a protected route
  const isProtectedPath = 
    req.nextUrl.pathname.startsWith('/admin') || 
    req.nextUrl.pathname.startsWith('/student') ||
    req.nextUrl.pathname.startsWith('/dashboard')

  // Public routes that don't require auth
  const publicPaths = ['/login', '/register', '/forgot-password', '/reset-password', '/api']
  const isPublicPath = publicPaths.some(path => req.nextUrl.pathname.startsWith(path))

  // If it's a protected route (and not a public path), check auth
  if (isProtectedPath && !isPublicPath) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    
    if (!token) {
      // Redirect to login
      const loginUrl = new URL('/login', req.url)
      return NextResponse.redirect(loginUrl)
    }

    // Check if user has appropriate role
    if (req.nextUrl.pathname.startsWith('/admin') && token.role !== 'ADMIN') {
      const dashboardUrl = new URL('/dashboard', req.url)
      return NextResponse.redirect(dashboardUrl)
    }

    if (req.nextUrl.pathname.startsWith('/dashboard') && token.role === 'ADMIN') {
      const adminDashboardUrl = new URL('/admin/dashboard', req.url)
      return NextResponse.redirect(adminDashboardUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
