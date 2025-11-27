import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import HeroSection from '@/components/home/HeroSection'
import { Button } from '@/components/ui/button'
import { servicesList } from '@/data/services'
import { Link } from '@/navigation'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Plane,
  ShieldCheck,
  Star,
} from 'lucide-react'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const heroContent = t.raw('hero') as {
    titlePrefix: string
    titleSegment: string
    titleSuffix: string
    description: string
    primaryCta: string
    stats: Record<string, { label: string; value: string }>
  }

  const serviceCards = servicesList.map((service) => ({
    slug: service.slug,
    emoji: service.emoji,
    title: t(service.titleKey),
    description: t(service.descriptionKey),
  }))

  const whyHighlights = (t.raw('home.whyUs.highlights') as Array<{
    stat: string
    statLabel: string
    title: string
    description: string
  }>).map((item, index) => {
    const icons = [ShieldCheck, GraduationCap, HeartHandshake, Building2]
    return { ...item, icon: icons[index] ?? ShieldCheck }
  })

  const testimonials = t.raw('home.testimonials.items') as Array<{
    name: string
    university: string
    story: string
    result: string
    image: string
  }>

  const quickFacts = (t.raw('home.quickFacts.items') as Array<{
    label: string
    value: string
    description: string
  }>).map((fact, index) => {
    const icons = [Plane, CalendarCheck, Compass, Star]
    return { ...fact, icon: icons[index] ?? Plane }
  })

  const processSteps = (t.raw('home.process.steps') as Array<{
    title: string
    description: string
  }>).map((step, index) => {
    const icons = [HeartHandshake, GraduationCap, ShieldCheck, Plane]
    return { ...step, icon: icons[index] ?? HeartHandshake }
  })

  const faqs = t.raw('home.faq.items') as Array<{ question: string; answer: string }>

  return (
    <main className="min-h-screen">
      <HeroSection
        titlePrefix={heroContent.titlePrefix}
        titleSegment={heroContent.titleSegment}
        titleSuffix={heroContent.titleSuffix}
        description={heroContent.description}
        primaryCta={heroContent.primaryCta}
        stats={[
          { label: heroContent.stats.students.label, value: heroContent.stats.students.value, icon: GraduationCap },
          { label: heroContent.stats.visa.label, value: heroContent.stats.visa.value, icon: ShieldCheck },
          { label: heroContent.stats.partners.label, value: heroContent.stats.partners.value, icon: HeartHandshake },
        ]}
      />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.services.title')}</h2>
            <p className="text-gray-600">{t('home.services.description')}</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {serviceCards.map((service) => {
              const href = `/services/${service.slug}`
              return (
                <Link
                  key={service.slug}
                  href={href}
                  className="group flex h-full flex-col rounded-lg bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 text-4xl">{service.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-gray-600">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    {t('home.services.explore', { title: service.title })}
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">{t('home.whyUs.eyebrow')}</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{t('home.whyUs.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('home.whyUs.description')}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyHighlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/40 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600/90 text-white">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-700">{item.stat}</p>
                      <p className="text-xs uppercase tracking-wide text-blue-600">{item.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="relative isolate overflow-hidden py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-linear-to-br from-slate-900 via-slate-900 to-blue-900" aria-hidden />
        <Image
          alt="Students celebrating in Germany"
          src="/images/Study-in-Germany-Testimonial.webp"
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="rounded-full border border-white/20 px-4 py-1 text-sm uppercase tracking-wider text-blue-100">
              {t('home.testimonials.eyebrow')}
            </span>
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">{t('home.testimonials.title')}</h2>
            <p className="max-w-2xl text-blue-100">{t('home.testimonials.description')}</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="relative size-16 overflow-hidden rounded-full border border-white/20">
                    <Image
                      alt={testimonial.name}
                      src={testimonial.image}
                      width={80}
                      height={80}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-blue-100">{testimonial.university}</p>
                  </div>
                </div>
                <p className="mt-6 flex-1 text-left text-sm text-blue-100">“{testimonial.story}”</p>
                <div className="mt-6 flex items-center gap-2 text-left text-sm font-medium text-blue-200">
                  <CheckCircle2 className="size-4" aria-hidden />
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts About Germany */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl text-center md:mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">{t('home.quickFacts.eyebrow')}</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{t('home.quickFacts.title')}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl bg-white p-6 shadow-sm">
                <fact.icon className="size-10 text-blue-600" aria-hidden />
                <p className="mt-6 text-2xl font-bold text-gray-900">{fact.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-blue-600">{fact.label}</p>
                <p className="mt-3 text-sm text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">{t('home.process.eyebrow')}</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{t('home.process.title')}</h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative flex h-full flex-col rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <step.icon className="size-6" aria-hidden />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Step {index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-linear-to-br from-red-500/30 via-white/20 to-blue-500/40 blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-20%] h-96 w-96 rounded-full bg-linear-to-tr from-blue-500/30 via-white/10 to-red-500/30 blur-3xl" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -skew-y-6">
            <div className="mx-auto h-64 w-[120%] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_14px,rgba(239,68,68,0.22)_14px,rgba(239,68,68,0.22)_28px,rgba(37,99,235,0.24)_28px,rgba(37,99,235,0.24)_42px)] opacity-30 blur-lg" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-white/20 px-4 py-1 text-sm uppercase tracking-wider text-blue-200">
              {t('home.faq.eyebrow')}
            </span>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">{t('home.faq.title')}</h2>
            <p className="mt-4 max-w-2xl text-blue-100">{t('home.faq.description')}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/70">FAQ {index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-blue-100">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600 via-blue-700 to-slate-900" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-md">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">{t('home.cta.eyebrow')}</span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{t('home.cta.title')}</h2>
            <p className="mt-4 text-blue-100">{t('home.cta.description')}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-base font-semibold text-blue-700 shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:ring-white/60"
                asChild
              >
                <Link href="/contact">
                  {t('home.cta.primary')}
                  <ArrowRight className="ml-2 size-5" aria-hidden />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/70 bg-white/10 px-8 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                asChild
              >
                <Link href="/faq">{t('home.cta.secondary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
