'use client'

import { useEffect, useMemo, useState } from 'react'
import { Link, usePathname, useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STUDENT_NAV = [
  { key: 'dashboard', href: '/student/dashboard', icon: '📊' },
  { key: 'applications', href: '/student/applications', icon: '📝' },
  { key: 'universities', href: '/student/universities', icon: '🎓' },
  { key: 'documents', href: '/student/documents', icon: '📄' },
  { key: 'tests', href: '/student/tests', icon: '📚' },
  { key: 'messages', href: '/student/messages', icon: '💬' },
  { key: 'settings', href: '/student/settings', icon: '⚙️' },
]

const ADMIN_NAV = [
  { key: 'dashboard', href: '/admin/dashboard', icon: '📊' },
  { key: 'students', href: '/admin/students', icon: '👥' },
  { key: 'applications', href: '/admin/applications', icon: '📝' },
  { key: 'universities', href: '/admin/universities', icon: '🎓' },
  { key: 'payments', href: '/admin/payments', icon: '💰' },
  { key: 'blog', href: '/admin/blog', icon: '📰' },
  { key: 'settings', href: '/admin/settings', icon: '⚙️' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const tNav = useTranslations('dashboardNav')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isStudent = pathname?.startsWith('/student')
  const isAdmin = pathname?.startsWith('/admin')

  const navigation = useMemo(() => (isStudent ? STUDENT_NAV : isAdmin ? ADMIN_NAV : []), [isStudent, isAdmin])

  useEffect(() => {
    navigation.forEach((item) => {
      router.prefetch?.(item.href)
    })
  }, [navigation, router])

  return (
    <div className="min-h-screen bg-gray-50 pt-[72px]">
      <div className="flex">
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-x-0 bottom-0 top-[72px] z-20 block bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed left-0 top-[72px] z-30 h-[calc(100vh-72px)] w-64 border-r bg-white shadow-lg transition-transform duration-200 ease-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <span className="font-bold text-lg">StartinDE</span>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden />
                <span className="sr-only">Close navigation</span>
              </Button>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto p-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{tNav(`${isStudent ? 'student' : 'admin'}.${item.key}`)}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="mt-auto px-4 pb-4 pt-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">{tNav('logout')}</Link>
              </Button>
            </div>
          </div>
        </aside>

        <div className="flex min-h-[calc(100vh-72px)] w-full flex-col lg:pl-64">
          <header className="sticky top-[72px] z-10 flex items-center justify-between border-b bg-white px-4 py-3 lg:hidden">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
              <span className="text-lg font-semibold">BIZZ EDUCATION</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">{tNav('logout')}</Link>
            </Button>
          </header>

          <main className="flex-1 px-4 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pb-12 lg:pt-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
