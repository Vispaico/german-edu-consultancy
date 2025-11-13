import Link from "next/link"
import Image from "next/image"
import { BadgeCheck, ChevronRight, Globe2, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"

const stats = [
  {
    label: "Students placed",
    value: "500+",
    icon: GraduationCap,
  },
  {
    label: "Visa success rate",
    value: "95%",
    icon: BadgeCheck,
  },
  {
    label: "Global partner campuses",
    value: "70+",
    icon: Globe2,
  },
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-blue-50 via-white to-blue-100">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-white/90 via-white/60 to-sky-100/10"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-0 z-0 h-80 w-80 translate-x-1/3 rounded-full bg-sky-200/70 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse gap-6 px-6 pb-24 pt-10 sm:gap-10 sm:pt-16 md:px-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex w-full flex-1 flex-col gap-10 text-slate-900">
          <div className="space-y-6">
            <h1 className="text-pretty text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              Study in Australia
              <span className="relative mx-3 inline-flex">
                <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-blue-200" aria-hidden="true" />
                <span className="relative bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  with Confidence.
                </span>
              </span>
              A journey with experts who care.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 sm:text-xl">
              Our dedicated advisors mentor you from course selection to visa approval, ensuring a confident transition into top Australian universities.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <Button
              size="lg"
              className="h-12 rounded-full px-7 text-base font-semibold shadow-lg shadow-blue-500/20 transition-transform duration-200 hover:-translate-y-0.5 bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200"
              asChild
            >
              <Link href="/register" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" aria-hidden />
                <span>Start for Free</span>
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <p className="max-w-md text-sm text-slate-600 sm:text-base">
              Signing up is free. Get free resources.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="flex min-w-56 flex-1 items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-white/40 backdrop-blur"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                    <Icon aria-hidden className="size-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-blue-700">{stat.value}</div>
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center  lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute -left-10 top-12 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl lg:-left-16"
          />
          <div className="relative w-full max-w-152 -translate-y-8 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/70 shadow-2xl ring-1 ring-blue-100/70 backdrop-blur md:-translate-y-10 md:max-w-160 lg:-translate-y-16 lg:max-w-184">
            <div className="relative aspect-square">
              <Image
                alt="Student studying in Australia"
                src="/images/Study-in-Australia.webp"
                fill
                priority
                sizes="(min-width: 1280px) 736px, (min-width: 1024px) 600px, (min-width: 768px) 70vw, 90vw"
                className="absolute inset-0 size-full rounded-[2.25rem] object-cover"
              />
              <div aria-hidden className="hero-image-shine rounded-[2.25rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
