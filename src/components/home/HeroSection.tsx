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
    <section className="relative isolate overflow-hidden">
      <Image
        alt="Berlin cityscape background"
        src="/images/Start-in-DE.webp"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-br from-black/50 via-slate-700/25 to-blue-700/55"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-6 pb-24 pt-16 sm:gap-12 md:px-12 lg:px-20">
        <div className="max-w-3xl space-y-6 text-white">
          <h1 className="text-pretty text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            Live in Germany
            <span className="relative mx-3 inline-flex">
              <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-white/30" aria-hidden />
              <span className="relative bg-linear-to-r from-sky-300 to-green-300 bg-clip-text text-transparent">
                with Confidence.
              </span>
            </span>
            A journey with experts who care.
          </h1>
          <p className="max-w-2xl text-lg text-white rounded-2xl bg-white/15 p-4 shadow-sm ring-1 ring-white/20 backdrop-blur sm:text-xl">
            Our dedicated advisors mentor you from program selection to visa approval, ensuring a smooth transition into the German life.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3">
          <Button
            size="lg"
            className="h-16 rounded-full px-7 text-lg font-semibold shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:-translate-y-0.5 bg-linear-to-br from-black/80 via-red-500/80 to-yellow-400/90 text-white hover:bg-blue-400 focus-visible:ring-blue-200"
            asChild
          >
            <Link href="/register" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" aria-hidden />
              <span>Start for Free - Free Resources inside</span>
              <ChevronRight className="h-6 w-6" aria-hidden />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex min-w-56 flex-1 items-center gap-4 rounded-2xl bg-white/15 p-4 shadow-sm ring-1 ring-white/20 backdrop-blur"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-600/50 text-blue-100">
                  <Icon aria-hidden className="size-6" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <p className="text-sm font-medium text-blue-100">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
