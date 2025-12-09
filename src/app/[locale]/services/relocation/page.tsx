import Image from 'next/image'
import { Link } from '@/navigation'
import {
    Briefcase,
    ClipboardList,
    FileSignature,
    Plane,
    ShieldCheck,
    Home,
    MapPin,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { constructMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = constructMetadata({
    title: 'Relocation Services Germany - Smooth Settlement Support for International Students',
    description: 'Complete relocation support for moving to Germany. Housing assistance, city registration (Anmeldung), bank account setup, and cultural orientation. Arrive ready and confident.',
    keywords: [
        'relocation services germany',
        'moving to germany support',
        'germany settlement assistance',
        'anmeldung help germany',
        'housing assistance germany',
        'expat relocation germany',
        'international student relocation',
        'germany arrival support',
    ],
})

const service = {
    slug: 'relocation',
    hero: {
        eyebrow: 'Arrive ready',
        title: 'Relocation & Settlement Support',
        description:
            'From accommodation to cultural orientation, we choreograph every detail so you land in Germany confident and connected. Complete support for a smooth transition to your new life.',
        image:
            'https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
        imageAlt: 'Plane flying into the sky',
    },
    stats: [
        {
            value: '200+',
            label: 'Successful relocations',
            description: 'Students and professionals settled across German cities with our comprehensive support.',
        },
        {
            value: '48 hrs',
            label: 'Arrival response',
            description: 'Onshore support team ready to help with emergencies, bank setup, and SIM activation.',
        },
        {
            value: '30 days',
            label: 'Welcome onboarding',
            description: 'Guided checklists covering Anmeldung, health insurance, and academic orientation.',
        },
    ],
    benefits: [
        {
            icon: Home,
            title: 'Housing assistance',
            description: 'Find safe, verified accommodation vetted by our local team in your university city.',
        },
        {
            icon: Plane,
            title: 'Arrival coordination',
            description: 'Airport pickup, SIM setup, and transport rehearsals before your first day.',
        },
        {
            icon: MapPin,
            title: 'City registration support',
            description: 'Complete Anmeldung process, bank account opening, and essential bureaucracy.',
        },
    ],
    focus: {
        eyebrow: 'Pre-departure planning',
        title: 'Everything organized before you board the plane',
        description:
            'Receive a personalized departure binder with booking confirmations, emergency contacts, and customs guidance in English and your native language.',
        bullets: [
            'Pre-booked airport transfers with English-speaking drivers in major cities',
            'Bank account and Anmeldung appointments scheduled before arrival',
            'Packing lists tailored to German climate and accommodation type',
        ],
        image:
            'https://images.unsplash.com/photo-1695510757259-643081efedf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
        imageAlt: 'Suitcase packed with travel essentials and study materials',
    },
    support: {
        eyebrow: 'Settle with confidence',
        title: 'On-ground support in your new city',
        description:
            'Our local teams in Berlin, Munich, and other major cities welcome you with city tours, budgeting workshops, and community introductions.',
        bullets: [
            'Welcome orientation covering public transport, shopping, and emergency contacts',
            'Assistance with health insurance registration and university enrollment',
            'Monthly city guides featuring student deals, events, and community meetups',
        ],
        image:
            'https://images.unsplash.com/photo-1684278799715-cdc2e26becf6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
        imageAlt: 'Group of international students exploring a new city together',
    },
    process: [
        {
            icon: ClipboardList,
            title: 'Pre-departure planning',
            description: 'We book flights, housing, and airport pickups while coordinating with your family.',
        },
        {
            icon: FileSignature,
            title: 'Documentation prep',
            description: 'Prepare all required documents for Anmeldung, bank account, and university enrollment.',
        },
        {
            icon: Plane,
            title: 'Arrival support',
            description: 'Dedicated arrival buddy helps you settle into accommodation and navigate first days.',
        },
        {
            icon: Home,
            title: '30-day settlement',
            description: 'City tours, bureaucracy assistance, and continued check-ins for smooth integration.',
        },
    ],
    cta: {
        title: 'Land in Germany feeling supported from day one',
        description:
            'Reserve your relocation package to secure housing, airport pickup, and cultural onboarding.',
        buttonLabel: 'Plan my arrival',
    },
}

export default function RelocationPage() {
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
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Complete relocation support for international students</h2>
                        <p className="mt-4 text-gray-600">
                            Every step is handled with care, from finding accommodation to navigating German bureaucracy, so you can focus on your studies.
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
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">From planning to settlement</h2>
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
