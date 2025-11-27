import Image from "next/image"
import { Link } from '@/navigation'

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe2, GraduationCap, MapPin, ScrollText } from "lucide-react"

const heroImage =
  "https://images.unsplash.com/photo-1599882168093-8354a2d71343?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2400"

export default function HeidelbergUniversityPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden text-white">
        <Image
          alt="Heidelberg Castle"
          src={heroImage}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-900/75 via-blue-900/70 to-slate-900/80" aria-hidden />
        <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm uppercase tracking-widest">
              Germany&apos;s oldest university • Heidelberg, Baden-Württemberg
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">Heidelberg University</h1>
            <p className="text-lg text-blue-100">
              A world-renowned research university with a strong international focus, known for its excellence in medicine, life sciences, and humanities.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <ScrollText className="size-4" aria-hidden />
                Excellence University in Germany
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                Historic campus in the heart of Heidelberg
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900">Why Vietnamese students choose Heidelberg</h2>
              <p>
                Heidelberg University offers a unique combination of academic excellence, historical charm, and a vibrant international community. Students benefit from world-class research opportunities, close ties to industry, and a supportive environment for international students.
              </p>
              <p>
                With a wide range of English-taught programs and strong support services for international students, Heidelberg provides a welcoming environment to pursue degrees in medicine, law, natural sciences, and humanities.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-6 text-sm text-blue-900">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Signature faculties</p>
                  <p>Faculty of Medicine • Faculty of Law • Faculty of Biosciences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="mt-1 size-5" aria-hidden />
                <div>
                  <p className="font-semibold">Heidelberg advantage</p>
                  <p>Close collaborations with leading research institutes like the German Cancer Research Center (DKFZ).</p>
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
            <h2 className="text-3xl font-semibold text-gray-900">Design your Heidelberg journey with expert support</h2>
            <p className="mt-4 text-gray-600">
              We help you build a competitive application, from scholarship essays to visa preparation.
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
    title: "DAAD Scholarships",
    description: "Numerous scholarship opportunities for international students through the German Academic Exchange Service (DAAD).",
    icon: Globe2,
  },
  {
    title: "Hands-on research",
    description: "Access to state-of-the-art research facilities and close collaboration with industry partners.",
    icon: Building2,
  },
  {
    title: "Supportive community",
    description: "The Vietnamese Students Association in Heidelberg connects newcomers with alumni mentors, cultural events, and internship tips.",
    icon: MapPin,
  },
]
