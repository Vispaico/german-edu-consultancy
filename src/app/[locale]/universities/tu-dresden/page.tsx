import Image from "next/image"
import { Link } from '@/navigation'

import { Button } from "@/components/ui/button"
import { ArrowRight, Compass, GraduationCap, MapPin, Star } from "lucide-react"

const heroImage =
    "https://images.unsplash.com/photo-1564594736624-def7a1a0f3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function TUDresdenPage() {
    return (
        <main className="bg-white">
            <section className="relative isolate overflow-hidden text-white">
                <Image
                    alt="TU Dresden campus"
                    src={heroImage}
                    fill
                    priority
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-900/70 via-blue-900/60 to-slate-900/80" aria-hidden />
                <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
                            TU9 • Dresden, Saxony
                        </span>
                        <h1 className="text-4xl font-bold sm:text-5xl">TU Dresden</h1>
                        <p className="text-lg text-blue-100">
                            One of Germany&apos;s leading technical universities and Excellence University, combining engineering excellence with cutting-edge research in the beautiful baroque city of Dresden.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
                            <div className="flex items-center gap-2">
                                <Star className="size-4" aria-hidden />
                                Top 20 in Germany
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4" aria-hidden />
                                Baroque city • Eastern Germany
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
                        <div className="space-y-6 text-gray-600">
                            <h2 className="text-2xl font-semibold text-gray-900">Why choose TU Dresden?</h2>
                            <p>
                                TU Dresden offers international students access to world-class engineering and natural sciences programs in one of Germany&apos;s most beautiful cities. As both a TU9 member and Excellence University, Dresden combines technical excellence with comprehensive research facilities.
                            </p>
                            <p>
                                Located in the cultural heart of Saxony, students enjoy affordable living costs, a rich cultural heritage, and strong connections to the region&apos;s growing technology sector. The university&apos;s modern campus and research clusters create excellent opportunities for innovation.
                            </p>
                        </div>

                        <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
                            <div className="flex items-start gap-3">
                                <GraduationCap className="mt-1 size-5" aria-hidden />
                                <div>
                                    <p className="font-semibold">Top programs</p>
                                    <p>Engineering • Computer Science • Natural Sciences • Medicine</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Compass className="mt-1 size-5" aria-hidden />
                                <div>
                                    <p className="font-semibold">Innovation clusters</p>
                                    <p>Leading research in microelectronics and materials science.</p>
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
                        <h2 className="text-3xl font-semibold text-gray-900">Plan your Dresden pathway with us</h2>
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
        title: "Microelectronics hub",
        description: "Located in Europe's leading microelectronics region with strong industry ties.",
        icon: Star,
    },
    {
        title: "Affordable living",
        description: "Lower cost of living compared to western German cities with excellent quality of life.",
        icon: MapPin,
    },
    {
        title: "Cultural richness",
        description: "Beautiful baroque architecture, world-class museums, and vibrant arts scene.",
        icon: Compass,
    },
]
