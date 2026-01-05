import { Link } from '@/navigation'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { Calendar, Eye, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShareInsightButton } from '@/components/blog/ShareInsightButton'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

async function BlogPostContent({ slug }: { slug: string }) {
  const res = await fetch(`http://localhost:3000/api/blog?language=en`, {
    cache: 'no-store',
  })
  const posts = await res.json()
  const post = posts.find((p: any) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const publishedAt = post.publishedat ? new Date(post.publishedat).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : ''

  const createdAt = new Date(post.createdat).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Get related posts
  const relatedPosts = posts
    .filter((p: any) => p.id !== post.id && p.published && p.category === post.category)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="container relative mx-auto max-w-4xl px-4 pb-16 pt-24">
          <div className="space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-blue-100 transition hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="inline-flex items-center gap-2">
              {post.category && (
                <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold uppercase">
                  {post.category}
                </span>
              )}
              {post.tags && (
                <span className="text-xs text-blue-100">
                  {Array.isArray(post.tags) ? post.tags.join(', ') : post.tags}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>

            {post.excerpt && (
              <p className="text-lg text-blue-100/90 max-w-2xl">{post.excerpt}</p>
            )}

            <div className="flex items-center gap-4 text-sm text-blue-100/80">
              <span>{publishedAt || createdAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views} views
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild variant="secondary">
                <Link href="/contact">Speak with an advisor</Link>
              </Button>
              <ShareInsightButton
                title={post.title}
                className="border border-white/20 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      <article className="mt-10 sm:mt-14 lg:mt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              {post.coverimage && (
                <img
                  src={post.coverimage}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
                />
              )}

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((related: any) => (
                    <div key={related.id} className="rounded-lg border hover:shadow-lg transition-shadow">
                      {related.coverimage && (
                        <img
                          src={related.coverimage}
                          alt={related.title}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                      )}
                      <div className="p-4">
                        <h4 className="font-semibold line-clamp-2">{related.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">
                          {new Date(related.createdat).toLocaleDateString()}
                        </p>
                        <Button asChild className="w-full mt-4" size="sm">
                          <Link href={`/blog/${related.slug}`}>
                            Read
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  )
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPostContent slug={slug} />
    </Suspense>
  )
}
