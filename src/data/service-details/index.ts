import type { Locale } from '@/i18n/routing'

import type { ServiceSlug } from '../services'
import { serviceDetailsEn } from './en'
import { serviceDetailsVi } from './vi'

const registries: Record<Locale, typeof serviceDetailsEn> = {
  en: serviceDetailsEn,
  vi: serviceDetailsVi,
}

export function getServiceDetails(locale: Locale) {
  return registries[locale] ?? serviceDetailsEn
}

export function getServiceDetail(locale: Locale, slug: ServiceSlug) {
  const record = getServiceDetails(locale)
  return record[slug]
}

export function getServiceDetailSlugs() {
  return Object.keys(serviceDetailsEn) as ServiceSlug[]
}
