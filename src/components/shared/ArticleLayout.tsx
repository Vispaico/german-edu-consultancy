"use client"

import { ReactNode } from 'react'
import { Link } from '@/navigation'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

interface ArticleLayoutProps {
  children: ReactNode
  sidebar?: ReactNode
  toc?: Array<{ id: string; title: string }>
  relatedLinks?: Array<{ href: string; title: string; description?: string }>
  className?: string
}

export function ArticleLayout({
  children,
  sidebar,
  toc,
  relatedLinks,
  className,
}: ArticleLayoutProps) {
  return (
    <div className={cn("container mx-auto px-4 py-12", className)}>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="prose prose-lg prose-blue max-w-none">
            {children}
          </article>

          {/* Related Links / Interlinking */}
          {relatedLinks && relatedLinks.length > 0 && (
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Topics</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="group block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-100"
                  >
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 flex items-center gap-2">
                      {link.title}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    {link.description && (
                      <p className="mt-2 text-sm text-gray-600">{link.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0 space-y-8">
          {/* Table of Contents */}
          {toc && toc.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-sm">On this page</h3>
              <nav className="flex flex-col gap-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 border-l-2 border-transparent hover:border-blue-600 pl-3 -ml-3"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          )}
          
          {sidebar}
        </aside>
      </div>
    </div>
  )
}
