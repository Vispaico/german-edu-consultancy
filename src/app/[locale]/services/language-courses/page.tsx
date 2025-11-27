import Image from 'next/image'
import { Link } from '@/navigation'
import {
    BookOpen,
    ClipboardList,
    FileSignature,
    Headphones,
    Languages,
    Award,
    Users,
    ArrowRight,
    CheckCircle2,
    MapPin,
    Clock,
    GraduationCap,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { constructMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = constructMetadata({
    title: 'German Language Courses - Learn German for University & Work in Germany',
    description: 'Professional German language courses for all levels (A1-C2). Prepare for TestDaF, DSH, Goethe, and telc exams. Experienced instructors and flexible schedules for international students.',
    keywords: [
        'german language courses',
        'learn german in germany',
        'german classes for foreigners',
        'testdaf preparation course',
        'german language school',
        'intensive german course',
        'german for university',
        'german language training',
    ],
})

const languageCenters = [
    {
        id: 1,
        name: 'Goethe-Institut',
        city: 'Multiple Cities',
        logo: '🎓',
        levels: 'A1 - C2',
        specialization: 'Official Goethe certificates',
        description: 'World-renowned German language courses with official certification recognized globally.',
    },
    {
        id: 2,
        name: 'Volkshochschule (VHS)',
        city: 'Nationwide',
        logo: '📚',
        levels: 'A1 - C1',
        specialization: 'Affordable community courses',
        description: 'Government-subsidized language schools offering quality courses at affordable prices.',
    },
    {
        id: 3,
        name: 'Private Language School',
        city: 'Berlin, Munich, Hamburg',
        logo: '🌟',
        levels: 'A1 - C2',
        specialization: 'Intensive & evening courses',
        description: 'Flexible schedules with small class sizes and personalized attention.',
    },
    {
        id: 4,
        name: 'University Language Center',
        city: 'Major University Cities',
        logo: '🏛️',
        levels: 'A1 - C2',
        specialization: 'Academic German preparation',
        description: 'University-affiliated language centers preparing students for academic studies.',
    },
]

const service = {
    hero: {
        eyebrow: 'Language mastery',
        title: 'German Language Courses',
        description:
            'Professional German language training from A1 to C2 levels. Prepare for university admission, work opportunities, and daily life in Germany with experienced instructors and proven methods.',
        image:
            'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400',
        imageAlt: 'Students learning German in a classroom',
    },
    stats: [
        {
            value: 'A1-C2',
            label: 'All CEFR levels',
            description: 'Complete pathway from beginner to advanced German proficiency.',
        },
        {
            value: '8-12 weeks',
            label: 'Intensive courses',
            description: 'Progress one full level in just 8-12 weeks with intensive training.',
        },
        {
            value: '95%',
            label: 'Exam success rate',
            description: 'Students achieve their target level in TestDaF, DSH, Goethe, or telc exams.',
        },
    ],
    benefits: [
        {
            icon: BookOpen,
            title: 'Structured curriculum',
            description: 'Follow proven learning methods aligned with CEFR standards and German university requirements.',
        },
        {
            icon: Headphones,
            title: 'Interactive learning',
            description: 'Practice speaking, listening, reading, and writing with experienced native German instructors.',
        },
        {
            icon: Award,
            title: 'Exam preparation',
            description: 'Specialized courses for TestDaF, DSH, Goethe-Zertifikat, and telc examinations.',
        },
    ],
    focus: {
        eyebrow: 'Course options',
        title: 'Flexible learning formats for your schedule',
        description:
            'Choose from intensive full-time courses, evening classes, weekend programs, or online learning to fit your lifestyle and goals.',
        bullets: [
            'Intensive courses: 20-25 hours/week for rapid progress',
            'Evening classes: 2-3 times/week for working professionals',
            'Online courses: Live virtual classes with interactive materials',
        ],
        image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
        imageAlt: 'German language classroom with interactive learning',
    },
    support: {
        eyebrow: 'Beyond the classroom',
        title: 'Complete support for your German learning journey',
        description:
            'Access additional resources, cultural activities, and personalized guidance to accelerate your language acquisition and cultural integration.',
        bullets: [
            'Free placement test to determine your starting level',
            'Cultural workshops and conversation clubs for practice',
            'Study materials and online resources included in course fee',
        ],
        image:
            'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2200',
        imageAlt: 'Students practicing German conversation',
    },
}

export default function LanguageCoursesPage() {
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
                        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">What you get</span>
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Professional German language training</h2>
                        <p className="mt-4 text-gray-600">
                            Learn from experienced instructors using proven methods to help you achieve fluency and pass certification exams.
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

            {/* Language Centers Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Partner institutions</span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">German Language Centers</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            We work with reputable language schools across Germany to help you find the perfect course for your needs and goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {languageCenters.map((center) => (
                            <div key={center.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{center.logo}</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{center.name}</h3>
                                        <div className="mt-2 space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <MapPin className="w-4 h-4 text-blue-600" />
                                                {center.city}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <GraduationCap className="w-4 h-4 text-blue-600" />
                                                Levels: {center.levels}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Award className="w-4 h-4 text-blue-600" />
                                                {center.specialization}
                                            </div>
                                        </div>
                                        <p className="mt-3 text-sm text-gray-600">{center.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500 italic">
                            * Placeholder information - Real German language centers will be added here
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative isolate overflow-hidden py-20">
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600 via-blue-700 to-slate-900" aria-hidden />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden />
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-md">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Start your German learning journey today</h2>
                        <p className="mt-4 text-blue-100">
                            Get personalized course recommendations and find the perfect German language program for your goals.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="h-12 rounded-full bg-white px-8 text-base font-semibold text-blue-700 shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:ring-white/60"
                                asChild
                            >
                                <Link href="/contact">
                                    Get course recommendations
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
