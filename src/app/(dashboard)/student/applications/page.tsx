import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function StudentApplicationsPage() {
  const applications = [
    {
      id: 1,
      university: 'University of Melbourne',
      program: 'Master of Computer Science',
      intake: 'February 2025',
      status: 'Under Review',
      submittedDate: '2025-10-20',
      lastUpdate: '2025-11-01'
    },
    {
      id: 2,
      university: 'Australian National University',
      program: 'Master of Engineering',
      intake: 'July 2025',
      status: 'Documents Required',
      submittedDate: '2025-10-25',
      lastUpdate: '2025-11-05'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Applications</h1>
          <p className="text-gray-600">Track and manage your university applications</p>
        </div>
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
          <Link href="/student/applications/new">New Application</Link>
        </Button>
      </div>

      <div className="grid gap-6">
        {applications.map((app) => (
          <Card key={app.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{app.university}</CardTitle>
                  <CardDescription>{app.program}</CardDescription>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                  {app.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Intake</p>
                  <p className="font-medium">{app.intake}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submitted</p>
                  <p className="font-medium">{app.submittedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Update</p>
                  <p className="font-medium">{app.lastUpdate}</p>
                </div>
              </div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
