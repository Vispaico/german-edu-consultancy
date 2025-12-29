'use client'

import { Link } from '@/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useMemo } from 'react'
import { Search, Filter, MapPin, Award, GraduationCap } from 'lucide-react'

type University = {
  id: number
  name: string
  city: string
  state: string
  type: 'University' | 'University of Applied Sciences' | 'Technical University'
  ranking: string
  tuition: string
  logo: string
  slug: string
  programs: string[]
}

const universities: University[] = [
  {
    id: 1,
    name: 'Technical University of Munich (TUM)',
    city: 'Munich',
    state: 'Bavaria',
    type: 'Technical University',
    ranking: '#1 in Germany',
    tuition: 'No tuition fees',
    logo: '🎓',
    slug: 'technical-university-of-munich',
    programs: ['Engineering', 'Computer Science', 'Natural Sciences', 'Medicine']
  },
  {
    id: 2,
    name: 'Heidelberg University',
    city: 'Heidelberg',
    state: 'Baden-Württemberg',
    type: 'University',
    ranking: '#2 in Germany',
    tuition: 'No tuition fees',
    logo: '🏛️',
    slug: 'heidelberg-university',
    programs: ['Medicine', 'Law', 'Natural Sciences', 'Humanities']
  },
  {
    id: 3,
    name: 'LMU Munich',
    city: 'Munich',
    state: 'Bavaria',
    type: 'University',
    ranking: '#3 in Germany',
    tuition: 'No tuition fees',
    logo: '🎯',
    slug: 'lmu-munich',
    programs: ['Medicine', 'Law', 'Business', 'Humanities']
  },
  {
    id: 4,
    name: 'Free University of Berlin',
    city: 'Berlin',
    state: 'Berlin',
    type: 'University',
    ranking: '#4 in Germany',
    tuition: 'No tuition fees',
    logo: '📚',
    slug: 'free-university-of-berlin',
    programs: ['Humanities', 'Social Sciences', 'Natural Sciences', 'Medicine']
  },
  {
    id: 5,
    name: 'Humboldt University of Berlin',
    city: 'Berlin',
    state: 'Berlin',
    type: 'University',
    ranking: '#5 in Germany',
    tuition: 'No tuition fees',
    logo: '🔬',
    slug: 'humboldt-university-of-berlin',
    programs: ['Humanities', 'Law', 'Medicine', 'Natural Sciences']
  },
  {
    id: 6,
    name: 'RWTH Aachen University',
    city: 'Aachen',
    state: 'North Rhine-Westphalia',
    type: 'Technical University',
    ranking: '#6 in Germany',
    tuition: 'No tuition fees',
    logo: '🌟',
    slug: 'rwth-aachen-university',
    programs: ['Engineering', 'Computer Science', 'Natural Sciences', 'Medicine']
  },
  {
    id: 7,
    name: 'Karlsruhe Institute of Technology (KIT)',
    city: 'Karlsruhe',
    state: 'Baden-Württemberg',
    type: 'Technical University',
    ranking: '#7 in Germany',
    tuition: 'No tuition fees',
    logo: '⚙️',
    slug: 'karlsruhe-institute-of-technology',
    programs: ['Engineering', 'Computer Science', 'Natural Sciences']
  },
  {
    id: 8,
    name: 'University of Bonn',
    city: 'Bonn',
    state: 'North Rhine-Westphalia',
    type: 'University',
    ranking: '#8 in Germany',
    tuition: 'No tuition fees',
    logo: '🎓',
    slug: 'university-of-bonn',
    programs: ['Law', 'Economics', 'Medicine', 'Natural Sciences']
  },
  {
    id: 9,
    name: 'University of Freiburg',
    city: 'Freiburg',
    state: 'Baden-Württemberg',
    type: 'University',
    ranking: '#9 in Germany',
    tuition: 'No tuition fees',
    logo: '🌲',
    slug: 'university-of-freiburg',
    programs: ['Medicine', 'Law', 'Natural Sciences', 'Humanities']
  },
  {
    id: 10,
    name: 'University of Tübingen',
    city: 'Tübingen',
    state: 'Baden-Württemberg',
    type: 'University',
    ranking: '#10 in Germany',
    tuition: 'No tuition fees',
    logo: '📖',
    slug: 'university-of-tubingen',
    programs: ['Medicine', 'Theology', 'Natural Sciences', 'Humanities']
  },
  {
    id: 11,
    name: 'TU Berlin',
    city: 'Berlin',
    state: 'Berlin',
    type: 'Technical University',
    ranking: 'Top 15',
    tuition: 'No tuition fees',
    logo: '🏗️',
    slug: 'tu-berlin',
    programs: ['Engineering', 'Computer Science', 'Architecture', 'Economics']
  },
  {
    id: 12,
    name: 'University of Göttingen',
    city: 'Göttingen',
    state: 'Lower Saxony',
    type: 'University',
    ranking: 'Top 15',
    tuition: 'No tuition fees',
    logo: '🔭',
    slug: 'university-of-gottingen',
    programs: ['Natural Sciences', 'Medicine', 'Humanities', 'Social Sciences']
  },
  {
    id: 13,
    name: 'University of Hamburg',
    city: 'Hamburg',
    state: 'Hamburg',
    type: 'University',
    ranking: 'Top 20',
    tuition: 'No tuition fees',
    logo: '⚓',
    slug: 'university-of-hamburg',
    programs: ['Law', 'Medicine', 'Business', 'Natural Sciences']
  },
  {
    id: 14,
    name: 'University of Cologne',
    city: 'Cologne',
    state: 'North Rhine-Westphalia',
    type: 'University',
    ranking: 'Top 20',
    tuition: 'No tuition fees',
    logo: '🏛️',
    slug: 'university-of-cologne',
    programs: ['Economics', 'Law', 'Medicine', 'Social Sciences']
  },
  {
    id: 15,
    name: 'TU Dresden',
    city: 'Dresden',
    state: 'Saxony',
    type: 'Technical University',
    ranking: 'Top 20',
    tuition: 'No tuition fees',
    logo: '🏰',
    slug: 'tu-dresden',
    programs: ['Engineering', 'Computer Science', 'Natural Sciences', 'Medicine']
  }
]

const cities = Array.from(new Set(universities.map(u => u.city))).sort()
const types = Array.from(new Set(universities.map(u => u.type))).sort()

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  const filteredUniversities = useMemo(() => {
    return universities.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCity = selectedCity === 'all' || uni.city === selectedCity
      const matchesType = selectedType === 'all' || uni.type === selectedType

      return matchesSearch && matchesCity && matchesType
    })
  }, [searchTerm, selectedCity, selectedType])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            German Universities
          </h1>
          <p className="text-xl text-gray-600">
            Browse top-ranked universities offering world-class education with no tuition fees
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
                  &ldquo;Choosing the right university isn&apos;t about ranking alone—it&apos;s about matching your ambitions with a campus that supports them. Our team curates shortlists based on your goals, portfolio, and visa strategy so you can focus on thriving once you land in Germany.&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Do Thi Huyen · General Director & Operation Manager</p>
                  <p className="text-xs uppercase tracking-wide text-blue-600">StartinDE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-8 space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="font-bold text-gray-900">Filter Universities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* City Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="all">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="all">All Types</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredUniversities.length}</span> of {universities.length} universities
            </div>
          </div>
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredUniversities.map((uni) => (
            <Card key={uni.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{uni.logo}</div>
                <CardTitle className="text-lg">{uni.name}</CardTitle>
                <CardDescription>
                  <span className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3 h-3" />
                    {uni.city}, {uni.state}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold">Ranking:</span> {uni.ranking}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Type:</span> {uni.type}
                </div>
                <div className="text-sm text-green-700 font-semibold">
                  ✓ {uni.tuition}
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2">Popular Programs:</p>
                  <div className="flex flex-wrap gap-1">
                    {uni.programs.slice(0, 3).map((program, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
                  <Link href={`/universities/${uni.slug}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No universities found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm('')
                setSelectedCity('all')
                setSelectedType('all')
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
