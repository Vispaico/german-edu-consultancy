import { Link } from '@/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Suspense } from 'react'
import { prisma } from '@/lib/prisma'
import type { BlogPost } from '@prisma/client'

export const revalidate = 0

async function BlogContent({ locale }: { locale: string }) {
  let posts: BlogPost[] = []

  try {
    posts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      orderBy: { createdat: 'desc' },
    })
  } catch (error) {
    console.error('Failed to load blog posts:', error)
  }

  const localizedPosts = posts.filter((post) => post.language === locale)
  const displayPosts = localizedPosts.length > 0 ? localizedPosts : posts

  // Get unique categories from posts
  const categories = [
    'All',
    ...Array.from(
      new Set(
        displayPosts
          .map((post) => post.category)
          .filter((category): category is string => Boolean(category))
      )
    ),
  ]

  return (
    <>
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Study Abroad Blog</h1>
        <p className="text-xl text-gray-600">
          Tips, guides, and insights for international students studying in Germany
        </p>
      </div>

      {/* Categories Filter */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((cat: string) => (
            <Button
              key={cat}
              variant={cat === 'All' ? 'default' : 'outline'}
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {displayPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600">No blog posts yet. Coming soon!</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <Card key={post.id} className="transition-shadow hover:shadow-lg">
              {post.coverimage && (
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={post.coverimage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      post.language === 'en' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {post.language.toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  {post.category && (
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  )}
                  <span>{post.views} views</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt || ''}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {new Date(post.createdat).toLocaleDateString()}
                  </span>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent locale={locale} />
        </Suspense>
      </div>
    </div>
  )
}
