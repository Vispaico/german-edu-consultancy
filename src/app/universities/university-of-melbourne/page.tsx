import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, Compass, GraduationCap, MapPin, Star } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.1.0&auto=format&fit=crop&w=2400&q=80"

export default function UniversityOfMelbournePage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="University of Melbourne campus"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-900/70 via-blue-900/60 to-slate-900/80" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              Group of Eight • Melbourne, Victoria
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">University of Melbourne</h1>
            <p className="text-lg text-blue-100">
              Australia&apos;s leading research university with a global reputation for academic excellence, innovation, and vibrant campus life in the heart of Melbourne&apos;s cultural district.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <Star className="size-4" aria-hidden />
                #1 in Australia (THE 2025)
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Parkville campus • CBD adjacent
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">Why choose the University of Melbourne?</h2>
              <p>
                The University of Melbourne offers Vietnamese students access to world-class teaching, interdisciplinary learning, and a dynamic global alumni network. Students benefit from flexible degree structures, industry-integrated learning, and strong support services tailored for international communities.
              </p>
              <p>
                The Parkville campus blends historic sandstone buildings with cutting-edge research facilities across medicine, engineering, business, and design. With extensive internships and post-study work opportunities, students graduate career-ready for global roles.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Top programs</p>
                  <p>Business & Economics • Biomedicine • Engineering • Law</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Global connections</p>
                  <p>280+ exchange partners and industry mentors across Asia-Pacific.</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Plan your Melbourne pathway with us</h2>
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
    title: "Scholarship opportunities",
    description: "Access to Melbourne International Undergraduate Scholarships and Faculty-specific merits for high-achieving Vietnamese students.",
    icon: Star,
  },
  {
    title: "Immersive campus life",
    description: "Join 200+ clubs including the Melbourne University Vietnamese Students Association and entrepreneurship societies.",
    icon: MapPin,
  },
  {
    title: "Career readiness",
    description: "Internships with Deloitte, PwC, CSL, and start-ups within the Melbourne Innovation District.",
    icon: Compass,
  },
]
