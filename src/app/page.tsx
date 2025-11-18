import Image from 'next/image'
import Link from 'next/link'

import HeroSection from '@/components/home/HeroSection'
import { Button } from '@/components/ui/button'
import { servicesList } from '@/data/services'
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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive support for your study abroad journey</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {servicesList.map((service) => {
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
                    Explore {service.title}
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
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Why Vietnamese families trust us</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Results-driven guidance backed by proven expertise</h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine deep knowledge of German education with tailored support in Vietnamese to deliver confident study abroad journeys.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {chooseUsHighlights.map((item) => {
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
            <span className="rounded-full border border-white/20 px-4 py-1 text-sm uppercase tracking-wider text-blue-100">Student journeys</span>
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">Real stories from Vietnamese students thriving in Germany</h2>
            <p className="max-w-2xl text-blue-100">
              Hear how our mentorship transformed uncertainty into scholarships, visa approvals, and successful careers across Germany.
            </p>
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
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">Why Germany stands out</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Key facts Vietnamese families ask us every day</h2>
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
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Simple and transparent</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Your roadmap from dream to German campus</h2>
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
              common questions
            </span>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">Everything Vietnamese parents ask before choosing Germany</h2>
            <p className="mt-4 max-w-2xl text-blue-100">
              We answer in Vietnamese and English so families feel confident about every decision.
            </p>
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
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Final step</span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Book your free consultation with our senior advisors</h2>
            <p className="mt-4 text-blue-100">
              Share your study goals and receive a personalised German study pathway in 48 hours—complete with scholarship options and visa roadmap.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-base font-semibold text-blue-700 shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:ring-white/60"
                asChild
              >
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 size-5" aria-hidden />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/70 bg-white/10 px-8 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                asChild
              >
                <Link href="/faq">View FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const chooseUsHighlights = [
  {
    icon: ShieldCheck,
    stat: '98%',
    statLabel: 'Visa approval',
    title: 'German student visa success specialists',
    description: 'Meticulous documentation reviews and weekly mock interviews keep our approval rate above the German average.'
  },
  {
    icon: GraduationCap,
    stat: '150+',
    statLabel: 'Scholarships earned',
    title: 'Scholarship strategies tailored to Vietnamese GPA profiles',
    description: 'We align your academic strengths with faculty-specific scholarships across TU9 and other leading universities.'
  },
  {
    icon: HeartHandshake,
    stat: '12',
    statLabel: 'Years guiding families',
    title: 'Advisors who studied and lived in Germany',
    description: 'Bilingual counsellors share lived experience—from picking suburbs to opening your first bank account.'
  },
  {
    icon: Building2,
    stat: '100+',
    statLabel: 'Partner universities',
    title: 'Direct partnerships for faster offers',
    description: 'Receive priority application reviews thanks to long-term collaborations with leading German institutions.'
  }
]

const testimonials = [
  {
    name: 'Nguyễn Hoàng Anh',
    university: 'Master of Data Science, TU Munich',
    story:
      '“The team coached me through the TestDaF and helped negotiate a DAAD scholarship. I landed an internship in my first semester.”',
    result: 'Now working part-time at a Munich data consultancy',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.1.0&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Trần Quỳnh Mai',
    university: 'Bachelor of Medicine, Heidelberg University',
    story:
      '“My parents were nervous about the visa process. The advisors handled the blocked account, health insurance, and even arranged student housing in Heidelberg.”',
    result: 'Visa issued in 8 weeks • Currently a medical assistant at Heidelberg University Hospital',
    image:
      'https://images.unsplash.com/photo-1629087994868-fb0d5178ef98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlldG5hbWVzZSUyMHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D&auto=jpg&fit=crop&q=60&w=400'
  },
  {
    name: 'Phạm Minh Đức',
    university: 'Bachelor of Computer Science, RWTH Aachen',
    story:
      '“They mapped out my coding portfolio, arranged alumni interviews, and secured me a 20% university scholarship despite limited extracurriculars.”',
    result: 'Intern software engineer at a Berlin fintech start-up',
    image:
      'https://images.unsplash.com/photo-1658200685735-2996b1af9423?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=jpg&fit=crop&q=60&w=400'
  }
]

const quickFacts = [
  {
    icon: Plane,
    value: 'EUR 0',
    label: 'Average tuition per year',
    description: 'Public universities in Germany generally have no tuition fees for international students.'
  },
  {
    icon: CalendarCheck,
    value: '18 months',
    label: 'Post-study work rights',
    description: 'Graduates from German universities can apply for an 18-month residence permit to find work.'
  },
  {
    icon: Compass,
    value: 'Top 10',
    label: 'Global quality of life ranking',
    description: 'German cities consistently rank high for quality of life, infrastructure, and safety.'
  },
  {
    icon: Star,
    value: '120 days/year',
    label: 'Work during study',
    description: 'Student visas allow up to 120 full days or 240 half days of work per year.'
  }
]

const processSteps = [
  {
    icon: HeartHandshake,
    title: 'Discovery & consultation',
    description: 'We audit your academics, finances, and German level, then co-create a shortlist of universities and scholarships.'
  },
  {
    icon: GraduationCap,
    title: 'Application preparation',
    description: 'Motivational letter workshops, recommendation coaching, and certified document translations in Vietnamese and German.'
  },
  {
    icon: ShieldCheck,
    title: 'Visa & compliance',
    description: 'Visa interview practice, financial evidence review, and health insurance setup with weekly progress updates.'
  },
  {
    icon: Plane,
    title: 'Arrival & settlement',
    description: 'Airport pick-up coordination, housing guidance, Blocked Account/city registration, and introductions to Vietnamese alumni groups.'
  }
]

const faqs = [
  {
    question: 'What happens if my visa gets rejected?',
    answer:
      'Our compliance team reviews the refusal letter, prepares an appeal strategy within seven business days, and supports re-application at no additional consultancy fee.'
  },
  {
    question: 'How much savings do I need to prove for the visa?',
    answer:
      'Most Vietnamese applicants need evidence of around EUR 11,208 per year for living expenses, usually in a blocked account. We help structure bank certificates and sponsor letters correctly.'
  },
  {
    question: 'Can I work while studying?',
    answer:
      'Yes. Student visas allow 120 full days or 240 half days of work per year. We provide resume and job search support before you arrive.'
  },
  {
    question: 'How long does the process take from consultation to departure?',
    answer:
      'Typically 6–8 months: 3-4 months for university offers, 2-3 months for visa, plus 1 month for pre-departure preparation depending on your intake.'
  }
]
