import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function AdminBlogPage() {
  const posts = [
    { id: 1, title: 'Top 10 Universities in Australia', status: 'Published', views: 1234, date: '2025-11-05' },
    { id: 2, title: 'IELTS Preparation Tips', status: 'Published', views: 892, date: '2025-11-03' },
    { id: 3, title: 'Student Visa Guide 2025', status: 'Published', views: 2156, date: '2025-11-01' },
    { id: 4, title: 'Cost of Living in Australia', status: 'Draft', views: 0, date: '2025-10-30' }
  ]

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
            <p className="text-3xl font-bold mt-2">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Published</p>
            <p className="text-3xl font-bold mt-2">18</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Drafts</p>
            <p className="text-3xl font-bold mt-2">6</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Views</p>
            <p className="text-3xl font-bold mt-2">45.2K</p>
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
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{post.title}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.views} views</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        post.status === 'Published' 
                          ? 'bg-green-50 text-green-600' 
                          : 'bg-yellow-50 text-yellow-600'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">Edit</Button>
                    <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">View</Button>
                    <Button size="sm" variant="destructive">Delete</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
