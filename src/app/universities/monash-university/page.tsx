import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, CalendarDays, GraduationCap, MapPin, Microscope } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1577878384911-cd47ad473607?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function MonashUniversityPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="Melbourne city skyline"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-900/70 via-slate-900/70 to-blue-900/80" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              Future-focused • Melbourne, Victoria
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">Monash University</h1>
            <p className="text-lg text-blue-100">
              A dynamic, industry-connected university renowned for engineering, health sciences, and business programs across five Melbourne campuses.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <Microscope className="size-4" aria-hidden />
                Top 40 worldwide for Pharmacy & Pharmacology
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Clayton & Caulfield campuses • connected by shuttle
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">Why Monash is a smart fit</h2>
              <p>
                Monash combines globally recognised academics with practical industry immersion. Its Work Integrated Learning programs and Monash Talent recruitment network connect students to internships across Melbourne&apos;s tech, health, and finance sectors.
              </p>
              <p>
                Vietnamese students appreciate Monash&apos;s supportive arrival services, extensive student housing, and vibrant cultural clubs situated in Melbourne—rated one of the world&apos;s most liveable cities.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Key faculties</p>
                  <p>Engineering • Business & Economics • IT • Medicine, Nursing & Health Sciences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Flexible intakes</p>
                  <p>Multiple start dates via Monash College pathways for Year 12 and Diploma graduates.</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Plan your Monash pathway with confidence</h2>
            <p className="mt-4 text-gray-600">
              From Monash College diplomas to direct entry, we align the right pathway with your academic profile.
            </p>
            <Button className="mt-8 h-12 rounded-full px-8 text-base font-semibold" asChild>
              <Link href="/contact">
                Talk to a consultant
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
    title: "Industry partnerships",
    description: "Collaborations with Siemens, IBM, AstraZeneca, and Victorian Government for internships and research projects.",
    icon: Building2,
  },
  {
    title: "Global campuses",
    description: "Opportunities to study at Monash Malaysia, Italy, or Indonesia campuses for global experience.",
    icon: MapPin,
  },
  {
    title: "Research impact",
    description: "Home to the Monash Biomedicine Discovery Institute and world-leading green chemistry labs.",
    icon: Microscope,
  },
]
