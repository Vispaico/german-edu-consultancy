import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET - List all blog posts
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const language = searchParams.get('language') || 'en'
    const published = searchParams.get('published') !== 'false'

    const posts = await prisma.blogPost.findMany({
      where: {
        language,
        published,
      },
      orderBy: { createdat: 'desc' },
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

// POST - Create new blog post
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const { slug, language, title, excerpt, content, coverImage, category, tags, published, metatitle, metadescription } = body

    // Check if slug already exists for this language
    const existing = await prisma.blogPost.findFirst({
      where: {
        slug,
        language,
      },
    })

    if (existing) {
      return NextResponse.json(
        { error: 'A post with this slug already exists in this language' },
        { status: 400 }
      )
    }

    const post = await prisma.blogPost.create({
      data: {
        slug,
        language,
        title,
        excerpt: excerpt || null,
        content,
        coverimage: coverImage || null,
        category: category || null,
        tags: tags || null,
        published: published || false,
        publishedat: published ? new Date() : null,
        metatitle: metatitle || null,
        metadescription: metadescription || null,
        authorid: session.user.id,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Blog POST error:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
