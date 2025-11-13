import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AdminUniversitiesPage() {
  const universities = [
    { id: 1, name: 'University of Melbourne', city: 'Melbourne', programs: 45, students: 23 },
    { id: 2, name: 'Australian National University', city: 'Canberra', programs: 38, students: 18 },
    { id: 3, name: 'UNSW', city: 'Sydney', programs: 52, students: 31 }
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Universities</h1>
          <p className="text-gray-600">Manage partner universities and programs</p>
        </div>
        <Button>Add University</Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {universities.map((uni) => (
              <div key={uni.id} className="p-4 border rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{uni.name}</h3>
                  <p className="text-sm text-gray-600">{uni.city} • {uni.programs} programs • {uni.students} students</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
