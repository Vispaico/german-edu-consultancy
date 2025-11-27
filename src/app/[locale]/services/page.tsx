import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { servicesList } from '@/data/services'
import { Link } from '@/navigation'

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = await Promise.resolve(params)
  const t = await getTranslations({ locale })

  const heroTitle = t('services.page.hero.title')
  const heroDescription = t('services.page.hero.description')
  const heroQuote = t('services.page.hero.quote')
  const heroQuoteAuthor = t('services.page.hero.quoteAuthor')
  const ctaTitle = t('services.page.cta.title')
  const ctaDescription = t('services.page.cta.description')

  const cards = servicesList.map((service) => ({
    slug: service.slug,
    emoji: service.emoji,
    title: t(service.titleKey),
    description: t(service.descriptionKey),
    features: t.raw(service.featuresKey) as string[],
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              {heroTitle}
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              {heroDescription}
            </p>
            <Card className="mx-auto max-w-2xl border-blue-100 bg-blue-50/40 shadow-sm">
              <CardContent className="flex flex-col items-center gap-4 px-6 py-6 text-left sm:flex-row sm:items-start">
                <div className="shrink-0 overflow-hidden rounded-full border border-blue-200 shadow-sm">
                  <Image
                    src="/images/team/marita_avatar.webp"
                    alt="Marita Teitge"
                    width={64}
                    height={64}
                    className="h-16 w-16 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <p className="text-sm text-gray-600">
                    “{heroQuote}”
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{heroQuoteAuthor}</p>
                    <p className="text-xs uppercase tracking-wide text-blue-600">StartinDE</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((service) => {
              const href = `/services/${service.slug}`
              return (
                <Card key={service.slug} className="h-full">
                  <CardHeader>
                    <div className="text-4xl mb-2">{service.emoji}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      size="lg"
                      className="mt-6 w-full rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200"
                    >
                      <Link href={href}>{t('home.services.explore', { title: service.title })}</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
          <Button
            size="lg"
            className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-blue-500/20 transition-transform duration-200 hover:-translate-y-0.5"
            asChild
          >
            <Link href="/contact">{t('common.bookConsultation')}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
