import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, CalendarDays, GraduationCap, MapPin, Microscope } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1564594736624-def7a1a0f3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function LmuMunichPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="Munich city skyline"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-900/70 via-slate-900/70 to-blue-900/80" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              Excellence in research • Munich, Bavaria
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">LMU Munich</h1>
            <p className="text-lg text-blue-100">
              One of Europe&apos;s leading research universities, offering a wide range of subjects and a vibrant student life in the heart of Munich.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <Microscope className="size-4" aria-hidden />
                42 Nobel laureates affiliated with the university
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Main campus in the Maxvorstadt district
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">Why LMU is a smart fit</h2>
              <p>
                LMU combines world-class research with a strong focus on teaching. Its central location in Munich provides students with access to numerous cultural attractions, internships, and job opportunities in a thriving economic hub.
              </p>
              <p>
                Vietnamese students appreciate LMU&apos;s comprehensive support services, including language courses, orientation programs, and a dedicated international office, making the transition to studying in Germany seamless.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Key faculties</p>
                  <p>Medicine • Law • Business Administration • Physics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Flexible intakes</p>
                  <p>Winter and Summer semester start dates for most programs.</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Plan your LMU pathway with confidence</h2>
            <p className="mt-4 text-gray-600">
              From language preparation to direct entry, we align the right pathway with your academic profile.
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
    description: "Collaborations with BMW, Siemens, Allianz, and numerous startups for internships and research projects.",
    icon: Building2,
  },
  {
    title: "Global network",
    description: "Opportunities to study at partner universities worldwide for global experience.",
    icon: MapPin,
  },
  {
    title: "Research impact",
    description: "Home to the Munich Center for Neurosciences and the Center for Integrated Protein Science Munich.",
    icon: Microscope,
  },
]
