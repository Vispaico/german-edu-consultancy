import Image from 'next/image'
import { Link } from '@/navigation'
import {
  Briefcase,
  ClipboardList,
  FileSignature,
  Plane,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { constructMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = constructMetadata({
  title: 'Vocational Training in Germany (Ausbildung) - Earn While You Learn',
  description: 'Discover dual-system apprenticeships in Germany. Get paid €900+/month while training in IT, healthcare, mechanics, and crafts. 90% employment rate after graduation.',
  keywords: [
    'ausbildung in germany',
    'vocational training germany',
    'dual education system germany',
    'apprenticeship in germany for foreigners',
    'paid vocational training germany',
    'ausbildung for international students',
    'learn and earn in germany',
    'german vocational schools',
  ],
})

const service = {
  slug: 'vocational-training',
  hero: {
    eyebrow: 'Hands-on careers',
    title: 'Vocational Training in Germany',
    description:
      'Explore dual-system apprenticeships that blend classroom theory with paid, on-the-job training, creating a direct pathway to skilled employment in Germany’s strongest industries.',
    image:
      'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
    imageAlt: 'Technician working on a complex piece of machinery',
  },
  stats: [
    {
      value: '300+',
      label: 'Recognized occupations',
      description: 'Access a wide range of state-recognized vocational roles in IT, healthcare, mechanics, and crafts.',
    },
    {
      value: '€900+',
      label: 'Average monthly stipend',
      description: 'Earn while you learn with a competitive training salary that covers living expenses.',
    },
    {
      value: '90%',
      label: 'Employment rate',
      description: 'Graduates are often hired directly by their training companies, ensuring a seamless career start.',
    },
  ],
  benefits: [
    {
      icon: Briefcase,
      title: 'Practical skill mastery',
      description: 'Gain certified, in-demand skills through real-world projects at leading German companies.',
    },
    {
      icon: ShieldCheck,
      title: 'Job security',
      description: 'Enter high-demand fields with qualifications that are respected globally and lead to permanent residency.',
    },
    {
      icon: TrendingUp,
      title: 'Debt-free education',
      description: 'Your training is company-sponsored, and you receive a monthly salary, avoiding student loans.',
    },
  ],
  focus: {
    eyebrow: 'Your training pathway',
    title: 'From application to apprenticeship contract',
    description:
      'We guide you through finding the right "Ausbildung" program, preparing a compelling application, and acing interviews with German companies.',
    bullets: [
      'Matching your interests with available apprenticeship roles in your desired city',
      'Crafting a German-style CV (Lebenslauf) and cover letter that impresses employers',
      'Intensive interview coaching to handle technical and behavioral questions',
    ],
    image:
      'https://images.unsplash.com/photo-1758873268379-39301764793f?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Advisor helping a student with their vocational training application',
  },
  support: {
    eyebrow: 'Seamless integration',
    title: 'Full support for a successful start in Germany',
    description:
      'Our support extends beyond the contract, helping you with visa processes, finding accommodation, and adapting to the German work culture.',
    bullets: [
      'Specialized visa guidance for vocational trainees, including financial proofs',
      'Accommodation support and city registration (Anmeldung) assistance',
      'Cultural workshops on workplace etiquette and communication in Germany',
    ],
    image:
      'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
    imageAlt: 'A group of young professionals in a modern German office',
  },
  process: [
    {
      icon: ClipboardList,
      title: 'Career assessment',
      description: 'Identify your skills and interests to find the perfect vocational training field.',
    },
    {
      icon: FileSignature,
      title: 'Application crafting',
      description: 'Prepare a standout application package tailored to German employers.',
    },
    {
      icon: Users,
      title: 'Interview preparation',
      description: 'Undergo mock interviews to build confidence and refine your answers.',
    },
    {
      icon: Plane,
      title: 'Relocation support',
      description: 'Receive comprehensive assistance with visa, housing, and settling in.',
    },
  ],
  cta: {
    title: 'Start your hands-on career in Germany',
    description:
      'Contact us for a consultation to explore vocational training opportunities and begin your application.',
    buttonLabel: 'Explore vocational training',
  },
}

export default function VocationalTrainingPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt={service.hero.imageAlt}
          src={service.hero.image}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900/85 via-slate-900/80 to-blue-900/75" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              {service.hero.eyebrow}
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{service.hero.title}</h1>
            <p className="text-lg text-blue-100 sm:text-xl">{service.hero.description}</p>
            <div className="flex flex-wrap gap-3 text-sm text-blue-100/90">
              {service.stats.slice(0, 2).map((stat) => (
                <span key={`${stat.label}-eyebrow`} className="rounded-full border border-white/20 px-3 py-1">
                  {stat.value} · {stat.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {service.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6 shadow-sm">
                <p className="text-3xl font-bold text-blue-800">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-blue-600">{stat.label}</p>
                <p className="mt-3 text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">What this service delivers</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Support crafted for Vietnamese students heading to Germany</h2>
            <p className="mt-4 text-gray-600">
              Every engagement blends local expertise, bilingual communication, and actionable steps so your family feels confident at every milestone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="rounded-2xl border border-white bg-white p-6 shadow-sm">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">{service.focus.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{service.focus.title}</h2>
              <p className="mt-4 text-gray-600">{service.focus.description}</p>
              <ul className="mt-6 space-y-3">
                {service.focus.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="mt-1 size-5 text-blue-600" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/services">Back to services overview</Link>
                </Button>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Talk to an advisor
                    <ArrowRight className="ml-2 size-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <Image
                alt={service.focus.imageAlt}
                src={service.focus.image}
                fill
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="relative order-last h-80 overflow-hidden rounded-3xl lg:order-first">
              <Image
                alt={service.support.imageAlt}
                src={service.support.image}
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">{service.support.eyebrow}</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{service.support.title}</h2>
              <p className="mt-4 text-gray-600">{service.support.description}</p>
              <ul className="mt-6 space-y-3">
                {service.support.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="mt-1 size-5 text-blue-600" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Our proven process</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">From first chat to confident results</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="flex h-full flex-col rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Step {index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600 via-blue-700 to-slate-900" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{service.cta.title}</h2>
            <p className="mt-4 text-blue-100">{service.cta.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-base font-semibold text-blue-700 shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:ring-white/60"
                asChild
              >
                <Link href="/contact">
                  {service.cta.buttonLabel}
                  <ArrowRight className="ml-2 size-5" aria-hidden />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/70 bg-white/10 px-8 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                asChild
              >
                <Link href="/services">
                  View all services
                  <ArrowRight className="ml-2 size-5" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}