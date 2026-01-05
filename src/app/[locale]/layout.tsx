import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { ResponsiveAdSlot } from '@/components/ads/ResponsiveAdSlot'
import { NewsletterSignup } from '@/components/layout/newsletter'
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

  // Get the pathname for generating alternates
  // Note: This is a simplified version - in production you'd want to capture the full path
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://startin-de.com'
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${safeLocale}`,
      languages: {
        en: `${baseUrl}/en`,
        vi: `${baseUrl}/vi`,
      },
    },
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
      <NewsletterSignup />
      <Footer locale={safeLocale} />
    </NextIntlClientProvider>
  )
}
