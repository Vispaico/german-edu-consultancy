import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, MapPin, ShieldCheck, Sun, Waves } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1599946343341-f52361ae9699?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function HumboldtUniversityOfBerlinPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="Berlin skyline and Spree river"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-900/65 via-blue-900/65 to-slate-900/80" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              University of Excellence • Berlin
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">Humboldt University of Berlin</h1>
            <p className="text-lg text-blue-100">
              A leading German university with a rich history and a strong focus on research and teaching in the humanities, social sciences, and natural sciences.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <Sun className="size-4" aria-hidden />
                Vibrant cultural scene in the heart of Berlin
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Campus in Mitte, Berlin&apos;s central district
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">Why Humboldt University attracts Vietnamese students</h2>
              <p>
                Humboldt University offers a unique blend of tradition and innovation, with a strong emphasis on interdisciplinary research and a global perspective. Its location in the heart of Berlin provides students with unparalleled access to cultural institutions, political organizations, and a thriving startup scene.
              </p>
              <p>
                The university provides comprehensive arrival support, German language courses, and an active Vietnamese Student Association organising career mentoring and cultural celebrations throughout the year.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Top study areas</p>
                  <p>Humanities • Social Sciences • Law • Life Sciences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Campus lifestyle</p>
                  <p>Vibrant student clubs, historic university buildings, and easy access to Berlin&apos;s cultural hotspots.</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Let&apos;s craft your Humboldt admissions plan</h2>
            <p className="mt-4 text-gray-600">
              We align coursework prerequisites, scholarship options, and visa preparation tailored to your timeline.
            </p>
            <Button className="mt-8 h-12 rounded-full px-8 text-base font-semibold" asChild>
              <Link href="/contact">
                Schedule a consultation
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
    title: "Research prowess",
    description: "Home to numerous research centers and part of the Berlin University Alliance, a consortium of excellence.",
    icon: ShieldCheck,
  },
  {
    title: "Entrepreneurial spirit",
    description: "Humboldt&apos;s startup services help students launch their businesses with support from Berlin&apos;s vibrant ecosystem.",
    icon: Waves,
  },
  {
    title: "Great lifestyle",
    description: "Affordable living, a multicultural environment, and a rich cultural scene in one of Europe&apos;s most exciting cities.",
    icon: Sun,
  },
]
