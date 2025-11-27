import Image from "next/image"
import { Link } from '@/navigation'

import { Button } from "@/components/ui/button"
import { ArrowRight, Compass, GraduationCap, MapPin, Star } from "lucide-react"

const heroImage =
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function UniversityOfColognePage() {
    return (
        <main className="bg-white">
            <section className="relative isolate overflow-hidden text-white">
                <Image
                    alt="University of Cologne campus"
                    src={heroImage}
                    fill
                    priority
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-900/70 via-blue-900/60 to-slate-900/80" aria-hidden />
                <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
                            Excellence University • Cologne, North Rhine-Westphalia
                        </span>
                        <h1 className="text-4xl font-bold sm:text-5xl">University of Cologne</h1>
                        <p className="text-lg text-blue-100">
                            One of Germany&apos;s largest and oldest universities, renowned for economics, law, medicine, and social sciences in the heart of the Rhine region.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
                            <div className="flex items-center gap-2">
                                <Star className="size-4" aria-hidden />
                                Top 20 in Germany
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4" aria-hidden />
                                Rhine metropolis • Western Germany
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
                        <div className="space-y-6 text-gray-600">
                            <h2 className="text-2xl font-semibold text-gray-900">Why choose University of Cologne?</h2>
                            <p>
                                The University of Cologne offers Vietnamese students access to one of Germany&apos;s most comprehensive academic institutions. As an Excellence University, Cologne is particularly strong in economics, law, medicine, and social sciences with excellent international programs.
                            </p>
                            <p>
                                Located in the vibrant Rhine metropolis, students enjoy a dynamic cultural scene, excellent public transport, and strong connections to major German and international companies. The university&apos;s modern campus and research facilities provide an ideal learning environment.
                            </p>
                        </div>

                        <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
                            <div className="flex items-start gap-3">
                                <GraduationCap className="mt-1 size-5" aria-hidden />
                                <div>
                                    <p className="font-semibold">Top programs</p>
                                    <p>Economics • Law • Medicine • Social Sciences</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Compass className="mt-1 size-5" aria-hidden />
                                <div>
                                    <p className="font-semibold">Business excellence</p>
                                    <p>Top-ranked business school and economics programs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-3">
                        {highlights.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                <item.icon className="size-8 text-blue-600" aria-hidden />
                                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="mt-3 text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl rounded-3xl border border-blue-100 bg-blue-50/50 p-10 text-center">
                        <h2 className="text-3xl font-semibold text-gray-900">Plan your Cologne pathway with us</h2>
                        <p className="mt-4 text-gray-600">
                            Our advisors guide you through course selection, scholarship strategy, and visa preparation tailored to your academic goals.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Button className="h-12 rounded-full px-8 text-base font-semibold" asChild>
                                <Link href="/contact">
                                    Book a free consultation
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

const highlights = [
    {
        title: "Business hub",
        description: "Strong connections to major corporations and the Rhine-Ruhr business region.",
        icon: Star,
    },
    {
        title: "Cultural diversity",
        description: "Vibrant international city with rich cultural heritage and modern amenities.",
        icon: MapPin,
    },
    {
        title: "Research strength",
        description: "Excellence clusters in aging research, plant sciences, and quantum matter.",
        icon: Compass,
    },
]
