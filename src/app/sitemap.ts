import { MetadataRoute } from 'next'
import { locales } from '../i18n/routing'
import { prisma } from '@/lib/prisma'
import { getSiteUrl } from '@/lib/site-config'

const baseUrl = getSiteUrl()

// Define your main routes here
const routes = [
  '',
  '/study-in-germany',
  '/work-in-germany',
  '/living-in-germany',
  '/contact',
  '/blog',
  '/about',
  '/faq',
  '/privacy',
  '/terms',
]

type BlogPostEntry = {
  slug: string
  updatedat: Date | null
}

async function getBlogPosts(): Promise<BlogPostEntry[]> {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedat: true,
      },
      orderBy: { updatedat: 'desc' },
    })
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts()

  // Generate URLs for each route with each locale
  const routesWithLocales: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of locales) {
      routesWithLocales.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      })
    }
  }

  // Generate URLs for blog posts with each locale
  const blogUrls: MetadataRoute.Sitemap = []
  for (const post of blogPosts) {
    for (const locale of locales) {
      blogUrls.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.updatedat ?? new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/blog/${post.slug}`])
          ),
        },
      })
    }
  }

  // University pages (you can add more routes here)
  const universities = [
    'rwth-aachen-university',
    'heidelberg-university',
    // Add more universities as needed
  ]
  
  const universityUrls: MetadataRoute.Sitemap = []
  for (const university of universities) {
    for (const locale of locales) {
      universityUrls.push({
        url: `${baseUrl}/${locale}/universities/${university}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/universities/${university}`])
          ),
        },
      })
    }
  }

  return [...routesWithLocales, ...blogUrls, ...universityUrls]
}
