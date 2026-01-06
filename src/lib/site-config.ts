const FALLBACK_SITE_URL = 'https://startin-de.com'

function resolveSiteUrl() {
  const vercelUrl = process.env.VERCEL_URL
  const vercelFull = vercelUrl
    ? vercelUrl.startsWith('http')
      ? vercelUrl
      : `https://${vercelUrl}`
    : null

  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL
    || process.env.NEXT_PUBLIC_URL
    || process.env.NEXTAUTH_URL
    || vercelFull
    || FALLBACK_SITE_URL

  return rawUrl.replace(/\/$/, '')
}

const cachedSiteUrl = resolveSiteUrl()

export function getSiteUrl() {
  return cachedSiteUrl
}

export function getMetadataBase() {
  return new URL(cachedSiteUrl)
}
