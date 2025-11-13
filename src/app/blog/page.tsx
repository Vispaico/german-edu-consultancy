import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/data/blog-posts'

const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Study Abroad Blog</h1>
          <p className="text-xl text-gray-600">
            Tips, guides, and insights for Vietnamese students studying in Australia
          </p>
        </div>

        {/* Categories Filter */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 text-4xl">{post.emoji}</div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{post.author}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-2xl mx-auto mt-16">
          <Card className="bg-blue-50">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get the latest articles, tips, and updates delivered to your inbox
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
