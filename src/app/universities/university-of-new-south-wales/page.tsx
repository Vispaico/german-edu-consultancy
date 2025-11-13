import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Building2, GraduationCap, MapPin, Rocket } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1758907849443-85180b999c7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function UniversityOfNewSouthWalesPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="Sydney skyline at dusk"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900/75 via-blue-900/65 to-slate-900/85" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              Innovation powerhouse • Sydney, NSW
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">University of New South Wales (UNSW Sydney)</h1>
            <p className="text-lg text-blue-100">
              A leading global university for engineering, business, and technology with strong industry partnerships and entrepreneurial focus in Sydney&apos;s thriving knowledge precinct.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <Rocket className="size-4" aria-hidden />
                Ranked #19 worldwide for Graduate Employability
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Kensington campus • 5 km from CBD
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">Why UNSW appeals to ambitious Vietnamese students</h2>
              <p>
                UNSW delivers hands-on learning built around industry placements, hackathons, and startup incubators. Its 3+2 flexible degree options make it easy to double major or pursue postgraduate pathways in business, engineering, and computer science.
              </p>
              <p>
                Support services include dedicated Southeast Asian advisers, IELTS bridging, and a vibrant Vietnamese Students Society that helps newcomers settle quickly into Sydney life.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Flagship faculties</p>
                  <p>UNSW Business School • School of Computer Science & Engineering • Built Environment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Career advantage</p>
                  <p>Access to UNSW Founders Program, Co-op Scholarships, and global internships.</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Kickstart your UNSW strategy with our advisors</h2>
            <p className="mt-4 text-gray-600">
              We help map prerequisites, scholarship timelines, and the GTE process tailored to your goals.
            </p>
            <Button className="mt-8 h-12 rounded-full px-8 text-base font-semibold" asChild>
              <Link href="/contact">
                Speak to an advisor
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
    title: "Scholarships & Co-op",
    description: "Highly competitive UNSW Co-op Scholarship program offering paid industry placements and tuition support.",
    icon: Briefcase,
  },
  {
    title: "Campus experience",
    description: "State-of-the-art labs, NIDA theatre partnership, and easy access to Sydney beaches and CBD.",
    icon: Building2,
  },
  {
    title: "Global network",
    description: "300,000+ alumni working in tech, finance, and creative industries across the world.",
    icon: Rocket,
  },
]
