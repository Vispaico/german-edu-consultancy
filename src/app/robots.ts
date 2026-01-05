import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://startin-de.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/dashboard/', '/student/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
