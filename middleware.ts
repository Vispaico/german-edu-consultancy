import createMiddleware from 'next-intl/middleware'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './src/i18n/routing'

type Locale = (typeof locales)[number]

// Middleware for locale detection
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
})

const protectedPrefixes = ['/admin', '/student', '/dashboard'] as const
const publicPrefixes = ['/login', '/register', '/forgot-password', '/reset-password'] as const

function getPathInfo(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]
  const hasLocale = locales.includes(maybeLocale as Locale)
  const locale = hasLocale ? (maybeLocale as Locale) : defaultLocale
  const pathSegments = hasLocale ? segments.slice(1) : segments
  const normalizedPath = '/' + pathSegments.join('/')
  const cleanPath = normalizedPath.replace(/\/+$/, '')
  return {
    locale,
    normalizedPath: cleanPath === '' ? '/' : cleanPath,
  }
}

export default async function middleware(req: NextRequest) {
  // First, handle locale detection
  const intlResponse = intlMiddleware(req)

  const { locale, normalizedPath } = getPathInfo(req.nextUrl.pathname)

  const isProtectedPath = protectedPrefixes.some((path) =>
    normalizedPath === path || normalizedPath.startsWith(`${path}/`)
  )

  const isPublicPath = publicPrefixes.some((path) =>
    normalizedPath === path || normalizedPath.startsWith(`${path}/`)
  )

  if (isProtectedPath && !isPublicPath) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    
    if (!token) {
      const loginUrl = new URL(`/${locale}/login`, req.url)
      return NextResponse.redirect(loginUrl)
    }

    // Check if user has appropriate role
    if (normalizedPath.startsWith('/admin') && token.role !== 'ADMIN') {
      const dashboardUrl = new URL(`/${locale}/student/dashboard`, req.url)
      return NextResponse.redirect(dashboardUrl)
    }

    if (normalizedPath === '/dashboard') {
      const destination = token.role === 'ADMIN' || token.role === 'CONSULTANT'
        ? `/${locale}/admin/dashboard`
        : `/${locale}/student/dashboard`
      return NextResponse.redirect(new URL(destination, req.url))
    }

    if (normalizedPath.startsWith('/dashboard') && token.role === 'ADMIN') {
      const adminDashboardUrl = new URL(`/${locale}/admin/dashboard`, req.url)
      return NextResponse.redirect(adminDashboardUrl)
    }
  }

  return intlResponse
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
