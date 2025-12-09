import Image from "next/image"
import { Link } from '@/navigation'

import { Button } from "@/components/ui/button"
import { ArrowRight, Compass, GraduationCap, MapPin, Star } from "lucide-react"

const heroImage =
    "https://images.unsplash.com/photo-1564594736624-def7a1a0f3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function TUBerlinPage() {
    return (
        <main className="bg-white">
            <section className="relative isolate overflow-hidden text-white">
                <Image
                    alt="TU Berlin campus"
                    src={heroImage}
                    fill
                    priority
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-900/70 via-blue-900/60 to-slate-900/80" aria-hidden />
                <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
                            TU9 • Berlin
                        </span>
                        <h1 className="text-4xl font-bold sm:text-5xl">Technical University of Berlin</h1>
                        <p className="text-lg text-blue-100">
                            Germany&apos;s capital&apos;s leading technical university, combining engineering excellence with entrepreneurial spirit in Europe&apos;s most vibrant startup ecosystem.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
                            <div className="flex items-center gap-2">
                                <Star className="size-4" aria-hidden />
                                Top 15 in Germany
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4" aria-hidden />
                                Charlottenburg • City West
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
                        <div className="space-y-6 text-gray-600">
                            <h2 className="text-2xl font-semibold text-gray-900">Why choose TU Berlin?</h2>
                            <p>
                                TU Berlin offers international students the unique combination of technical excellence and Berlin&apos;s dynamic startup culture. As a TU9 member, the university provides world-class engineering, computer science, and architecture programs with strong industry connections.
                            </p>
                            <p>
                                Located in Germany&apos;s capital and Europe&apos;s startup hub, students benefit from unparalleled networking opportunities, internships, and career prospects. The diverse international community and vibrant cultural scene make Berlin an exciting place to study.
                            </p>
                        </div>

                        <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
                            <div className="flex items-start gap-3">
                                <GraduationCap className="mt-1 size-5" aria-hidden />
                                <div>
                                    <p className="font-semibold">Top programs</p>
                                    <p>Engineering • Computer Science • Architecture • Economics</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Compass className="mt-1 size-5" aria-hidden />
                                <div>
                                    <p className="font-semibold">Startup ecosystem</p>
                                    <p>Access to Europe's largest startup scene and innovation labs.</p>
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
                        <h2 className="text-3xl font-semibold text-gray-900">Plan your Berlin pathway with us</h2>
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
        title: "Innovation hub",
        description: "Located in Europe's largest startup ecosystem with countless entrepreneurship opportunities.",
        icon: Star,
    },
    {
        title: "International diversity",
        description: "Highly international student body with programs taught in English and German.",
        icon: MapPin,
    },
    {
        title: "Industry connections",
        description: "Strong partnerships with Siemens, Deutsche Bahn, and Berlin's tech companies.",
        icon: Compass,
    },
]
