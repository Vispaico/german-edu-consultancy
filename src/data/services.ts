export type ServiceSummary = {
  slug: string
  title: string
  emoji: string
  description: string
  features: string[]
}

export const servicesList: ServiceSummary[] = [
  {
    slug: 'university-selection',
    title: 'University Selection',
    emoji: '🎓',
    description:
      'Expert guidance to choose the right university and program matching your goals, budget, and career aspirations.',
    features: [
      'Personalized university recommendations',
      'Program comparison and analysis',
      'Career outcome insights',
      'Scholarship opportunities',
    ],
  },
  {
    slug: 'application-support',
    title: 'Application Support',
    emoji: '📝',
    description:
      'Complete assistance with university applications, from document preparation to submission.',
    features: [
      'Application form completion',
      'Document verification',
      'Statement of Purpose editing',
      'Recommendation letter guidance',
    ],
  },
  {
    slug: 'visa-processing',
    title: 'Visa Processing',
    emoji: '✈️',
    description:
      'Step-by-step support for German student visa with high success rate.',
    features: [
      'Visa eligibility assessment',
      'Document preparation',
      'Application lodgement',
      'Interview preparation',
    ],
  },
  {
    slug: 'test-preparation',
    title: 'Test Preparation',
    emoji: '📚',
    description: 'IELTS, TOEFL, and PTE test booking assistance and preparation resources.',
    features: [
      'Test center booking',
      'Study materials',
      'Practice tests',
      'Score improvement tips',
    ],
  },
  {
    slug: 'career-counseling',
    title: 'Career Counseling',
    emoji: '💼',
    description: 'Professional advice on career paths and job prospects in Germany.',
    features: [
      'Industry insights',
      'Job market analysis',
      'Resume building',
      'Interview preparation',
    ],
  },
  {
    slug: 'pre-departure-support',
    title: 'Pre-Departure Support',
    emoji: '🏠',
    description:
      'Accommodation, travel, and settlement assistance for your move to Germany.',
    features: [
      'Accommodation booking',
      'Airport pickup arrangement',
      'Bank account setup',
      'Orientation sessions',
    ],
  },
]

export type ServiceSlug = (typeof servicesList)[number]['slug']
