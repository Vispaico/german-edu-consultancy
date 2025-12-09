import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { ResponsiveAdSlot } from '@/components/ads/ResponsiveAdSlot'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { locales } from '@/i18n/routing'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number]) ? (locale as (typeof locales)[number]) : locales[0]
  const t = await getTranslations({ locale: safeLocale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number]) ? (locale as (typeof locales)[number]) : locales[0]
  setRequestLocale(safeLocale)

  let messages
  try {
    messages = await getMessages({ locale: safeLocale })
  } catch (error) {
    console.error(error)
    notFound()
  }

  return (
    <NextIntlClientProvider locale={safeLocale} messages={messages}>
      <Header />
      <div className="min-h-[50vh]">{children}</div>
      <ResponsiveAdSlot label="Sitewide bottom sponsor" backgroundClass="bg-blue-50/40" className="border-t border-blue-100/40" />
      <Footer />
    </NextIntlClientProvider>
  )
}
