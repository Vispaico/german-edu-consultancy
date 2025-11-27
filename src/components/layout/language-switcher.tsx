'use client'

import { useTransition } from 'react'
import { useLocale } from 'next-intl'

import { locales, localeNames, type Locale } from '@/i18n/routing'
import { usePathname, useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [pending, startTransition] = useTransition()
  const t = useTranslations('common')

  return (
    <label className="inline-flex items-center gap-2 text-sm text-gray-600">
      <span className="sr-only">{t('localeSwitcherLabel')}</span>
      <select
        className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={locale}
        disabled={pending}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale
          startTransition(() => {
            router.replace(pathname, { locale: nextLocale })
          })
        }}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeNames[code]}
          </option>
        ))}
      </select>
    </label>
  )
}
