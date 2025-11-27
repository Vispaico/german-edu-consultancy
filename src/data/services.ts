export type ServiceSummary = {
  slug: string
  emoji: string
  titleKey: string
  descriptionKey: string
  featuresKey: string
}

const baseKey = 'services.cards'

export const servicesList: ServiceSummary[] = [
  {
    slug: 'university-selection',
    emoji: '🎓',
    titleKey: `${baseKey}.university-selection.title`,
    descriptionKey: `${baseKey}.university-selection.description`,
    featuresKey: `${baseKey}.university-selection.features`,
  },
  {
    slug: 'application-support',
    emoji: '📝',
    titleKey: `${baseKey}.application-support.title`,
    descriptionKey: `${baseKey}.application-support.description`,
    featuresKey: `${baseKey}.application-support.features`,
  },
  {
    slug: 'visa-processing',
    emoji: '✈️',
    titleKey: `${baseKey}.visa-processing.title`,
    descriptionKey: `${baseKey}.visa-processing.description`,
    featuresKey: `${baseKey}.visa-processing.features`,
  },
  {
    slug: 'test-preparation',
    emoji: '📚',
    titleKey: `${baseKey}.test-preparation.title`,
    descriptionKey: `${baseKey}.test-preparation.description`,
    featuresKey: `${baseKey}.test-preparation.features`,
  },
  {
    slug: 'career-counseling',
    emoji: '💼',
    titleKey: `${baseKey}.career-counseling.title`,
    descriptionKey: `${baseKey}.career-counseling.description`,
    featuresKey: `${baseKey}.career-counseling.features`,
  },
  {
    slug: 'pre-departure-support',
    emoji: '🏠',
    titleKey: `${baseKey}.pre-departure-support.title`,
    descriptionKey: `${baseKey}.pre-departure-support.description`,
    featuresKey: `${baseKey}.pre-departure-support.features`,
  },
]

export type ServiceSlug = (typeof servicesList)[number]['slug']
