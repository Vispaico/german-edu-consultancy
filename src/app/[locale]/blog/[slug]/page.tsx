import Image from 'next/image'
import { Link } from '@/navigation'
import { notFound } from 'next/navigation'

import { ArrowLeft, CalendarDays, Clock, Share2, Tag } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { blogPostBySlug, blogPosts } from '@/data/blog-posts'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await Promise.resolve(params)
  const post = blogPostBySlug[slug]

  if (!post) {
    return {
      title: 'Article not found | Edu Consultancy',
    }
  }

  return {
    title: `${post.title} | Edu Consultancy Blog`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await Promise.resolve(params)
  const post = blogPostBySlug[slug]

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_65%)]" aria-hidden />
        <div className="absolute inset-x-0 bottom-[-30%] h-[500px] bg-[repeating-linear-gradient(120deg,_rgba(255,255,255,0.06)_0px,_rgba(255,255,255,0.06)_14px,_rgba(59,130,246,0.18)_14px,_rgba(59,130,246,0.18)_28px,_rgba(239,68,68,0.18)_28px,_rgba(239,68,68,0.18)_42px)] opacity-30 blur-2xl" aria-hidden />

        <div className="container relative mx-auto grid gap-10 px-4 pb-16 pt-24 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-100 transition hover:text-white">
                <ArrowLeft className="size-4" aria-hidden />
                Back to Blog
              </Link>
              <span className="hidden h-4 w-px bg-white/20 lg:block" aria-hidden />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
                {post.category}
              </span>
            </div>
            <h1 className="text-pretty text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="max-w-2xl text-lg text-blue-100/90">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100/80">
              <span className="inline-flex items-center gap-2">
                <Tag className="size-4" aria-hidden />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" aria-hidden />
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4" aria-hidden />
                {post.readTime}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="secondary" className="rounded-full">
                <Link href="/contact">Speak with an advisor</Link>
              </Button>
              <Button variant="ghost" className="rounded-full border border-white/20 text-white hover:border-white/40">
                <Share2 className="mr-2 size-4" aria-hidden />
                Share insight
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-xl">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" aria-hidden />
            <span className="absolute left-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-3xl">
              {post.emoji}
            </span>
          </div>
        </div>
      </section>

      <article className="mt-10 space-y-16 sm:mt-14 lg:mt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-16 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200/60 md:p-12">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-10 md:space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.highlights && (
                  <div className="mt-8 rounded-3xl bg-blue-50/80 p-7 text-sm text-blue-900 sm:mt-10 sm:p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-600">Highlights</h3>
                    <ul className="mt-3 space-y-2">
                      {section.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 inline-block size-2 rounded-full bg-blue-500" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.image && (
                  <div className="mt-8 overflow-hidden rounded-3xl sm:mt-10">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={1200}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </section>
            ))}

            <aside className="rounded-3xl bg-slate-900/90 p-8 text-white">
              <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-blue-100">Key takeaways</h3>
              <ul className="mt-6 space-y-4 text-blue-100/90">
                {post.takeaway.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-2 inline-flex size-2 rounded-full bg-gradient-to-r from-red-400 to-blue-400" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-blue-100/60 bg-blue-50/60 p-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Need personalised guidance?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Our advisors help you translate these insights into a tailored German study plan for your family.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <Link href="/contact">Book a consultation</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-blue-300 text-blue-700">
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
