"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { servicesList } from '@/data/services'
import { Link } from '@/navigation'
import { LanguageSwitcher } from './language-switcher'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const t = useTranslations()
  const tNav = useTranslations('navigation')

  const serviceNavLinks = servicesList.map((service) => ({
    href: `/services/${service.slug}`,
    label: t(service.titleKey),
    description: t(service.descriptionKey),
  }))

  const navItems = [
    {
      label: tNav('items.study'),
      href: '/study-in-germany',
      children: [
        { href: '/study-in-germany', label: tNav('studyMenu.guide'), description: tNav('studyMenu.guideDesc') },
        { href: '/universities', label: tNav('studyMenu.universities'), description: tNav('studyMenu.universitiesDesc') },
        { href: '/vocational-training', label: tNav('studyMenu.vocational'), description: tNav('studyMenu.vocationalDesc') },
      ]
    },
    {
      label: tNav('items.work'),
      href: '/work-in-germany',
      children: [
        { href: '/work-in-germany', label: tNav('workMenu.guide'), description: tNav('workMenu.guideDesc') },
        { href: '/diploma-conversion', label: tNav('workMenu.conversion'), description: tNav('workMenu.conversionDesc') },
      ]
    },
    { href: '/living-in-germany', label: tNav('items.living') },
    {
      label: tNav('servicesMenu.label'),
      href: '/services',
      children: [
        { href: '/services', label: tNav('servicesMenu.allServices'), description: tNav('servicesMenu.allServicesDescription') },
        ...serviceNavLinks
      ]
    },
    { href: '/blog', label: tNav('items.blog') },
    { href: '/contact', label: tNav('items.contact') },
    { href: '/dashboard', label: tNav('items.dashboard') },
  ]

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (prev) {
        setOpenMobileSubmenu(null)
      }
      return !prev
    })
  }

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenu((prev) => (prev === label ? null : label))
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt={tNav('logoAlt')}
              src="/images/Logo-StartinDE.webp"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-gray-600 transition hover:text-gray-900 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 font-medium"
                    >
                      {item.label}
                      <ChevronDown className="size-4 opacity-50" aria-hidden />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-80 rounded-xl border border-blue-100 bg-white/95 backdrop-blur p-2">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild className="rounded-lg p-3 focus:bg-blue-50 cursor-pointer">
                        <Link href={child.href} className="flex flex-col gap-1">
                          <span className="text-sm font-semibold text-gray-900">{child.label}</span>
                          {child.description && (
                            <span className="text-xs text-gray-500">{child.description}</span>
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 font-medium">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/register">{tNav('auth.signup')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">{tNav('mobile.toggle')}</span>
            {isMenuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden border-t border-gray-200 bg-white ${isMenuOpen ? 'max-h-[85vh] overflow-y-auto' : 'max-h-0'
          }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-1">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-gray-700 font-medium hover:bg-gray-50 transition"
                    aria-expanded={openMobileSubmenu === item.label ? 'true' : 'false'}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`size-4 transition-transform ${openMobileSubmenu === item.label ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`space-y-1 overflow-hidden transition-[max-height] duration-300 ease-in-out pl-4 border-l-2 border-gray-100 ml-3 ${openMobileSubmenu === item.label ? 'max-h-96' : 'max-h-0'
                      }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium">{child.label}</div>
                        {child.description && <div className="text-xs text-gray-400 mt-0.5">{child.description}</div>}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
            <LanguageSwitcher />
            <div className="grid grid-cols-2 gap-3 mt-2">
              <Button asChild className="w-full justify-center col-span-2">
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  {tNav('auth.signup')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
