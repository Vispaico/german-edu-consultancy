import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import ProfileCard from '@/components/ProfileCard'
import { teamMembers } from '@/data/team'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative isolate flex min-h-[60vh] items-center justify-center overflow-hidden bg-gray-900 text-white">
        <Image
          src="/images/About-startinDE.webp"
          alt="Hamburg Train front of Office of StartinDE"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-blue-950/70" />
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide uppercase backdrop-blur">
              Since 2025
            </span>
            <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
            <p className="text-lg text-blue-100 md:text-xl">
              Your trusted partner for studying in Germany since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="text-2xl mx-auto text-gray-600">
            <p>
              Founded in 2025, StartinDE has helped over 50 Vietnamese students
              achieve their dream of studying at top German universities.<br/><br/>Our team
              of experienced education consultants understands the unique challenges
              Vietnamese students face and provides personalized support throughout
              the entire process.
            </p>
            <p>
              We maintain strong partnerships with over 100 German universities
              and have achieved a 98% visa success rate.<br/><br/>Our commitment to excellence
              and personalized service has made us one of the most trusted education
              consultancies in Vietnam.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Partner Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Visa Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-transparent" aria-hidden />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Meet the advisors
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Our leadership team</h2>
            <p className="mt-4 text-gray-600">
              Bilingual consultants who studied, worked, and built communities across Germany to guide your family every step of the journey.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="mx-auto flex w-full max-w-74 flex-col items-center text-center md:max-w-98"
              >
                <ProfileCard
                  avatarUrl={member.avatarUrl}
                  miniAvatarUrl={member.miniAvatarUrl}
                  iconUrl={member.iconUrl}
                  name={member.name}
                  title={member.role}
                  handle={member.handle}
                  contactText="Connect"
                  contactHref="/contact"
                  innerGradient={member.innerGradient}
                  behindGlowColor={member.behindGlowColor}
                  behindGlowSize={member.behindGlowSize}
                  behindGlowEnabled={false}
                  className="team-card"
                />
                <div className="mt-4 w-full space-y-1 text-sm text-gray-500">
                  <p className="text-center text-balance">{member.focus}</p>
                  <p className="text-center text-xs text-gray-400 text-balance">{member.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let us help you achieve your dream of studying in Germany
          </p>
          <Button
            size="lg"
            className="h-12 rounded-full bg-white px-8 text-base font-semibold text-blue-700 shadow-lg shadow-blue-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:ring-white/60"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}