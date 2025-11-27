import { createNavigation } from 'next-intl/navigation'

import { locales, defaultLocale } from './i18n/routing'

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
})
