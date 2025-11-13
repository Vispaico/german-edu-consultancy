import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const universities = [
  {
    id: 1,
    name: 'University of Melbourne',
    city: 'Melbourne',
    state: 'Victoria',
    ranking: '#1 in Australia',
    tuition: 'AUD $30,000 - $45,000/year',
    logo: '🎓',
    slug: 'university-of-melbourne'
  },
  {
    id: 2,
    name: 'Australian National University',
    city: 'Canberra',
    state: 'ACT',
    ranking: '#2 in Australia',
    tuition: 'AUD $32,000 - $48,000/year',
    logo: '🏛️',
    slug: 'australian-national-university'
  },
  {
    id: 3,
    name: 'University of New South Wales',
    city: 'Sydney',
    state: 'NSW',
    ranking: '#3 in Australia',
    tuition: 'AUD $35,000 - $50,000/year',
    logo: '🎯',
    slug: 'university-of-new-south-wales'
  },
  {
    id: 4,
    name: 'University of Sydney',
    city: 'Sydney',
    state: 'NSW',
    ranking: '#4 in Australia',
    tuition: 'AUD $33,000 - $49,000/year',
    logo: '📚',
    slug: 'university-of-sydney'
  },
  {
    id: 5,
    name: 'Monash University',
    city: 'Melbourne',
    state: 'Victoria',
    ranking: '#5 in Australia',
    tuition: 'AUD $30,000 - $44,000/year',
    logo: '🔬',
    slug: 'monash-university'
  },
  {
    id: 6,
    name: 'University of Queensland',
    city: 'Brisbane',
    state: 'Queensland',
    ranking: '#6 in Australia',
    tuition: 'AUD $31,000 - $46,000/year',
    logo: '🌟',
    slug: 'university-of-queensland'
  }
]

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Australian Universities
          </h1>
          <p className="text-xl text-gray-600">
            Browse top-ranked universities offering world-class education
          </p>
          <Card className="mx-auto max-w-2xl border-blue-100 bg-white/80 shadow-sm">
            <CardContent className="flex flex-col items-center gap-4 px-6 py-6 text-left sm:flex-row sm:items-start">
              <div className="shrink-0 overflow-hidden rounded-full border border-blue-100 shadow-sm">
                <Image
                  src="/images/team/van_avatar.webp"
                  alt="Ha Van"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-sm text-gray-600">
                  “Choosing the right university isn&apos;t about ranking alone—it&apos;s about matching your ambitions with a campus that supports them. Our team curates shortlists based on your goals, portfolio, and visa strategy so you can focus on thriving once you land in Australia.”
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Nguyen Duyen Ha Van · Operation Manager</p>
                  <p className="text-xs uppercase tracking-wide text-blue-600">BIZZ Education Vietnam</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {universities.map((uni) => (
            <Card key={uni.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{uni.logo}</div>
                <CardTitle className="text-lg">{uni.name}</CardTitle>
                <CardDescription>{uni.city}, {uni.state}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Ranking:</span> {uni.ranking}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Tuition:</span> {uni.tuition}
                </div>
                <Button asChild className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
                  <Link href={`/universities/${uni.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
