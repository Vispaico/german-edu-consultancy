import { Link } from '@/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const universities = [
  {
    id: 1,
    name: 'Technical University of Munich',
    city: 'Munich',
    state: 'Bavaria',
    ranking: '#1 in Germany',
    tuition: 'No tuition fees',
    logo: '🎓',
    slug: 'technical-university-of-munich'
  },
  {
    id: 2,
    name: 'Heidelberg University',
    city: 'Heidelberg',
    state: 'Baden-Württemberg',
    ranking: '#2 in Germany',
    tuition: 'No tuition fees',
    logo: '🏛️',
    slug: 'heidelberg-university'
  },
  {
    id: 3,
    name: 'LMU Munich',
    city: 'Munich',
    state: 'Bavaria',
    ranking: '#3 in Germany',
    tuition: 'No tuition fees',
    logo: '🎯',
    slug: 'lmu-munich'
  },
  {
    id: 4,
    name: 'Free University of Berlin',
    city: 'Berlin',
    state: 'Berlin',
    ranking: '#4 in Germany',
    tuition: 'No tuition fees',
    logo: '📚',
    slug: 'free-university-of-berlin'
  },
  {
    id: 5,
    name: 'Humboldt University of Berlin',
    city: 'Berlin',
    state: 'Berlin',
    ranking: '#5 in Germany',
    tuition: 'No tuition fees',
    logo: '🔬',
    slug: 'humboldt-university-of-berlin'
  },
  {
    id: 6,
    name: 'RWTH Aachen University',
    city: 'Aachen',
    state: 'North Rhine-Westphalia',
    ranking: '#6 in Germany',
    tuition: 'No tuition fees',
    logo: '🌟',
    slug: 'rwth-aachen-university'
  }
]

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            German Universities
          </h1>
          <p className="text-xl text-gray-600">
            Browse top-ranked universities offering world-class education
          </p>
          <Card className="mx-auto max-w-2xl border-blue-100 bg-white/80 shadow-sm">
            <CardContent className="flex flex-col items-center gap-4 px-6 py-6 text-left sm:flex-row sm:items-start">
              <div className="shrink-0 overflow-hidden rounded-full border border-blue-100 shadow-sm">
                <Image
                  src="/images/team/huyen_avatar.webp"
                  alt="Do Thi Huyen"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-sm text-gray-600">
                  “Choosing the right university isn&apos;t about ranking alone—it&apos;s about matching your ambitions with a campus that supports them. Our team curates shortlists based on your goals, portfolio, and visa strategy so you can focus on thriving once you land in Germany.”
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Do Thi Huyen · General Director & Operation Manager</p>
                  <p className="text-xs uppercase tracking-wide text-blue-600">StartinDE</p>
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
