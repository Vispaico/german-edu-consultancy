import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function StudentUniversitiesPage() {
  const universities = [
    { id: 1, name: 'University of Melbourne', city: 'Melbourne', ranking: '#1', programs: 45 },
    { id: 2, name: 'Australian National University', city: 'Canberra', ranking: '#2', programs: 38 },
    { id: 3, name: 'UNSW', city: 'Sydney', ranking: '#3', programs: 52 },
    { id: 4, name: 'University of Sydney', city: 'Sydney', ranking: '#4', programs: 48 }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Browse Universities</h1>
        <p className="text-gray-600">Explore Australian universities and programs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {universities.map((uni) => (
          <Card key={uni.id}>
            <CardHeader>
              <CardTitle>{uni.name}</CardTitle>
              <CardDescription>{uni.city} • {uni.ranking} in Australia</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{uni.programs} programs available</p>
              <Button className="w-full">View Programs</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
