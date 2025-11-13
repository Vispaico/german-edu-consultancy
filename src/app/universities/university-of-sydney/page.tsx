import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, HeartHandshake, MapPin, ShieldCheck, Trophy } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1656501378592-efc5bc197d73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function UniversityOfSydneyPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="University of Sydney Quadrangle"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900/70 via-blue-900/65 to-slate-900/80" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              Heritage & innovation • Sydney, NSW
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">University of Sydney</h1>
            <p className="text-lg text-blue-100">
              Australia&apos;s first university, blending sandstone heritage with leading research across health, engineering, business, and creative arts.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <Trophy className="size-4" aria-hidden />
                QS Top 20 worldwide (2025)
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Camperdown/Darlington campus • minutes from CBD
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">A supportive pathway for Vietnamese students</h2>
              <p>
                The University of Sydney offers flexible double degrees, early professional placements, and research-led teaching that prepares students for global careers. Vietnamese learners benefit from strong health sciences, data, and design programs complemented by internship pipelines.
              </p>
              <p>
                Campus life is vibrant with cultural societies, state-of-the-art sport facilities, and the renowned International Student Support hub providing visa, housing, and employment guidance.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Standout faculties</p>
                  <p>Sydney Business School • Faculty of Medicine & Health • School of Computer Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeartHandshake className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Student care</p>
                  <p>Dedicated academic advisors, peer mentoring, and VietSoc mentoring for first-year students.</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Map your University of Sydney application with us</h2>
            <p className="mt-4 text-gray-600">
              From portfolio guidance to clinical placement preparation, our consultants assist every step.
            </p>
            <Button className="mt-8 h-12 rounded-full px-8 text-base font-semibold" asChild>
              <Link href="/contact">
                Book a consultation
                <ArrowRight className="ml-2 size-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

const highlights = [
  {
    title: "Research excellence",
    description: "Join world-leading labs in AI, health tech, and sustainability, with access to the Sydney Nano and Charles Perkins Centre.",
    icon: BookOpen,
  },
  {
    title: "City lifestyle",
    description: "Live near Newtown&apos;s creative district, with quick transport to internships in Sydney&apos;s CBD and tech precincts.",
    icon: MapPin,
  },
  {
    title: "Global alumni",
    description: "400,000+ alumni worldwide, including high-profile leaders across medicine, law, and the arts.",
    icon: Trophy,
  },
]
