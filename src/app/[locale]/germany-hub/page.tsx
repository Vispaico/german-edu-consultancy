import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, BadgeCheck, Briefcase, GraduationCap, Home } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'

type PageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'germanyHub' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function GermanyHubPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'germanyHub' })

  const pillars = [
    {
      slug: '/study-in-germany',
      icon: GraduationCap,
      title: t('pillars.study.title'),
      description: t('pillars.study.description'),
      highlights: t.raw('pillars.study.highlights') as string[],
    },
    {
      slug: '/living-in-germany',
      icon: Home,
      title: t('pillars.living.title'),
      description: t('pillars.living.description'),
      highlights: t.raw('pillars.living.highlights') as string[],
    },
    {
      slug: '/vocational-training',
      icon: Briefcase,
      title: t('pillars.vocational.title'),
      description: t('pillars.vocational.description'),
      highlights: t.raw('pillars.vocational.highlights') as string[],
    },
    {
      slug: '/diploma-conversion',
      icon: BadgeCheck,
      title: t('pillars.conversion.title'),
      description: t('pillars.conversion.description'),
      highlights: t.raw('pillars.conversion.highlights') as string[],
    },
  ]

  const usageSteps = t.raw('usage.steps') as string[]

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 border-b border-blue-100">
        <div className="container mx-auto px-4 py-16 md:py-20 max-w-5xl space-y-6">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">{t('hero.eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">{t('hero.title')}</h1>
          <p className="text-lg text-gray-700 max-w-3xl">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link href="/study-in-germany">{t('hero.primaryCta')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-6 border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <Link href="/services">{t('hero.secondaryCta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-6">
          <div className="space-y-2 max-w-3xl">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">{t('pillars.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('pillars.title')}</h2>
            <p className="text-gray-600">{t('pillars.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Card key={pillar.slug} className="h-full border-blue-100/70 shadow-sm">
                  <CardHeader className="flex flex-row gap-3 items-start">
                    <div className="rounded-full bg-blue-50 text-blue-700 p-3">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{pillar.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      {pillar.highlights.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <ArrowRight className="h-4 w-4 text-blue-500 mt-1" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Link href={pillar.slug}>{pillar.title}</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">{t('usage.title')}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{t('hero.eyebrow')}</h3>
            <p className="text-gray-600">{t('usage.description')}</p>
          </div>
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-6 space-y-4 shadow-sm">
            <ol className="space-y-3 list-decimal list-inside text-gray-700">
              {usageSteps.map((step, idx) => (
                <li key={idx} className="pl-1">
                  {step}
                </li>
              ))}
            </ol>
            <p className="text-sm text-blue-900">{t('usage.note')}</p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-blue-50/70 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-2xl font-bold text-gray-900">{t('services.title')}</h4>
            <p className="text-gray-700">{t('services.description')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button asChild size="lg" className="h-11 px-6 rounded-full">
              <Link href="/contact">{t('services.primaryCta')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 px-6 rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <Link href="/services">{t('services.secondaryCta')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
