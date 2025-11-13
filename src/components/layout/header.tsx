"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { servicesList } from '@/data/services'

const serviceNavLinks = servicesList.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.title,
  description: service.description,
}))

const navItems = [
  { href: '/universities', label: 'Universities' },
  { href: '/services', label: 'Services', children: serviceNavLinks },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (prev) {
        setIsServicesMenuOpen(false)
      }
      return !prev
    })
  }

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt="Bizz Education Vietnam logo"
              src="/images/Logo-Bizz-Education-Vietnam.svg"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-gray-600 transition hover:text-gray-900 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {item.label}
                      <ChevronDown className="size-4" aria-hidden />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-80 rounded-xl border border-blue-100 bg-white/95 backdrop-blur">
                    <DropdownMenuItem asChild className="flex flex-col gap-1 rounded-lg py-3">
                      <Link href={item.href} className="text-left">
                        <span className="text-sm font-semibold text-gray-900">All Services</span>
                        <span className="text-xs text-gray-500">Explore every way we support your study journey</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="-mx-1" />
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild className="flex flex-col gap-1 rounded-lg py-3">
                        <Link href={child.href} className="text-left">
                          <span className="text-sm font-semibold text-gray-900">{child.label}</span>
                          <span className="text-xs text-gray-500">{child.description}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            {isMenuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden border-t border-gray-200 bg-white ${
          isMenuOpen ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setIsServicesMenuOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-left text-gray-700 transition hover:border-gray-300 hover:text-gray-900 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    aria-expanded={isServicesMenuOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`size-4 transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`space-y-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      isServicesMenuOpen ? 'max-h-80' : 'max-h-0'
                    }`}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsServicesMenuOpen(false)
                      }}
                    >
                      All Services
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsServicesMenuOpen(false)
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsServicesMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex flex-col gap-2 pt-2">
            <Button variant="ghost" asChild>
              <Link
                href="/login"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsServicesMenuOpen(false)
                }}
              >
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="/register"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsServicesMenuOpen(false)
                }}
              >
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
