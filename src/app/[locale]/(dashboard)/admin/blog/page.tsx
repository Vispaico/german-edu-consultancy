import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from '@/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function AdminBlogPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/login')
  }

  // Fetch all posts
  const posts = await prisma.blogPost.findMany({
    include: { author: true },
    orderBy: { createdat: 'desc' },
  })

  // Calculate stats
  const totalPosts = posts.length
  const publishedPosts = posts.filter((p: any) => p.published).length
  const totalViews = posts.reduce((sum: any, p: any) => sum + p.views, 0)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Blog Management</h1>
          <p className="text-gray-600">Create and manage blog posts</p>
        </div>
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
          <Link href="/admin/blog/new">Create New Post</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Posts</p>
            <p className="text-3xl font-bold mt-2">{totalPosts}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Published</p>
            <p className="text-3xl font-bold mt-2">{publishedPosts}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Drafts</p>
            <p className="text-3xl font-bold mt-2">{totalPosts - publishedPosts}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Views</p>
            <p className="text-3xl font-bold mt-2">{totalViews}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <Input placeholder="Search posts..." className="max-w-sm" />
        <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
          Filter
        </Button>
      </div>

      {/* Posts List */}
      <Card>
        <CardContent className="pt-6">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No posts yet. Create your first post!</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post: any) => (
                <div key={post.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{post.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          post.language === 'en' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {post.language.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span>{post.slug}</span>
                        <span>•</span>
                        <span>{post.views} views</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          post.published 
                            ? 'bg-green-50 text-green-600' 
                            : 'bg-yellow-50 text-yellow-600'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
                        <Link href={`/admin/blog/${post.id}/edit`}>Edit</Link>
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={async () => {
                          if (confirm('Are you sure you want to delete this post?')) {
                            await fetch(`/api/blog/${post.id}`, { method: 'DELETE' })
                            window.location.reload()
                          }
                        }}
                        variant="destructive"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
