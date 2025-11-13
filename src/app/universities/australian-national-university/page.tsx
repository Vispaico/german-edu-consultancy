import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe2, GraduationCap, MapPin, ScrollText } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1719918508801-0dd00797d959?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function AustralianNationalUniversityPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="Parliament House in Canberra"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900/75 via-blue-900/70 to-slate-900/80" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              Flagship research • Canberra, ACT
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">Australian National University (ANU)</h1>
            <p className="text-lg text-blue-100">
              A globally ranked institution located in Australia&apos;s capital, known for leadership in public policy, sciences, and Asia-Pacific studies.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <ScrollText className="size-4" aria-hidden />
                QS Top 30 worldwide
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Acton campus overlooking Lake Burley Griffin
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">Why Vietnamese students choose ANU</h2>
              <p>
                ANU offers a personalised academic experience with small cohort sizes, access to world-leading researchers, and strong ties to government and diplomatic communities. Students benefit from mentorship, internships, and policy immersion unique to the capital city.
              </p>
              <p>
                With modern residential colleges and support services tailored for Southeast Asian students, ANU provides a supportive environment to pursue degrees in public policy, engineering, business, and emerging sciences.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Signature faculties</p>
                  <p>National Security College • Crawford School of Public Policy • ANU College of Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Canberra advantage</p>
                  <p>Policy internships with Australian government departments and embassies.</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Design your ANU journey with expert support</h2>
            <p className="mt-4 text-gray-600">
              We help you build a competitive application, from scholarship essays to GTE preparation.
            </p>
            <Button className="mt-8 h-12 rounded-full px-8 text-base font-semibold" asChild>
              <Link href="/contact">
                Plan a consultation
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
    title: "Scholarships for Vietnam",
    description: "ANU Global Diversity Scholarships and College of Business & Economics merits dedicated to Southeast Asian applicants.",
    icon: Globe2,
  },
  {
    title: "Hands-on research",
    description: "Access the ANU Innovation Institute, National Computational Infrastructure, and astronomy labs.",
    icon: Building2,
  },
  {
    title: "Supportive community",
    description: "Vietnamese Students Association connects newcomers with alumni mentors, cultural events, and internship tips.",
    icon: MapPin,
  },
]
