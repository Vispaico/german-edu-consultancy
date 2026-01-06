'use client'

import { useState } from 'react'
import { useRouter } from '@/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Tiếng Việt' },
]

export default function NewBlogPostPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    language: languageOptions[0].value,
    excerpt: '',
    category: '',
    tags: '',
    coverImage: '',
    content: '',
    metatitle: '',
    metadescription: '',
    published: true,
  })
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [uploading, setUploading] = useState(false)

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleTitleChange = (value: string) => {
    handleInputChange('title', value)
    if (!formData.slug) {
      const generated = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
      handleInputChange('slug', generated)
    }
  }

  const handleCoverUpload = async (file: File) => {
    setUploading(true)
    setStatus(null)
    try {
      const uploadData = new FormData()
      uploadData.append('file', file)
      const response = await fetch('/api/blog/upload', {
        method: 'POST',
        body: uploadData,
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image')
      }
      handleInputChange('coverImage', data.url)
      setStatus({ type: 'success', message: 'Cover image uploaded successfully.' })
    } catch (error) {
      console.error('Cover upload failed:', error)
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Failed to upload cover image.' })
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(null)
    setSubmitting(true)
    try {
      const payload = {
        slug: formData.slug.trim(),
        language: formData.language,
        title: formData.title.trim(),
        excerpt: formData.excerpt || null,
        content: formData.content,
        coverImage: formData.coverImage || null,
        category: formData.category || null,
        tags: formData.tags
          ? JSON.stringify(
              formData.tags
                .split(',')
                .map((tag) => tag.trim())
                .filter(Boolean)
            )
          : null,
        published: formData.published,
        metatitle: formData.metatitle || null,
        metadescription: formData.metadescription || null,
      }

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create blog post')
      }

      setStatus({ type: 'success', message: 'Blog post created successfully.' })
      setTimeout(() => router.push('/admin/blog'), 1000)
    } catch (error) {
      console.error('Create blog post failed:', error)
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Failed to create blog post.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Create New Blog Post</h1>
        <p className="text-gray-600">Publish a new story for the StartinDE community.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          {status && (
            <div
              className={`mb-4 rounded-md border p-3 text-sm ${
                status.type === 'success'
                  ? 'border-green-200 bg-green-50 text-green-700'
                  : 'border-red-200 bg-red-50 text-red-700'
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Scholarship guide for 2025"
                  value={formData.title}
                  onChange={(event) => handleTitleChange(event.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  placeholder="scholarship-guide-2025"
                  value={formData.slug}
                  onChange={(event) => handleInputChange('slug', event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => handleInputChange('language', value)}
                >
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  placeholder="Scholarships"
                  value={formData.category}
                  onChange={(event) => handleInputChange('category', event.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="One paragraph summary that appears on the blog list."
                value={formData.excerpt}
                onChange={(event) => handleInputChange('excerpt', event.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content (HTML)</Label>
              <Textarea
                id="content"
                placeholder="Paste formatted HTML content or use a rich text editor output."
                value={formData.content}
                onChange={(event) => handleInputChange('content', event.target.value)}
                rows={10}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="visa, scholarships"
                  value={formData.tags}
                  onChange={(event) => handleInputChange('tags', event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metatitle">Meta Title</Label>
                <Input
                  id="metatitle"
                  placeholder="SEO title override"
                  value={formData.metatitle}
                  onChange={(event) => handleInputChange('metatitle', event.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="metadescription">Meta Description</Label>
              <Textarea
                id="metadescription"
                placeholder="SEO description override"
                value={formData.metadescription}
                onChange={(event) => handleInputChange('metadescription', event.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover">Cover Image</Label>
              <Input
                id="cover"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0]
                  if (file) {
                    handleCoverUpload(file)
                  }
                }}
              />
              {formData.coverImage && (
                <p className="text-sm text-gray-600">Current image URL: {formData.coverImage}</p>
              )}
            </div>

            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(event) => handleInputChange('published', event.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              Published immediately
            </label>

            <div className="flex flex-wrap gap-4">
              <Button type="submit" disabled={submitting || uploading}>
                {submitting ? 'Creating...' : 'Create Post'}
              </Button>
              <Button type="button" variant="outline" disabled={submitting} onClick={() => router.push('/admin/blog')}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
