import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AdminApplicationsPage() {
  const applications = [
    { id: 1, student: 'Nguyen Van A', university: 'University of Melbourne', program: 'Master CS', status: 'Under Review', date: '2025-11-01' },
    { id: 2, student: 'Tran Thi B', university: 'ANU', program: 'Master Engineering', status: 'Documents Required', date: '2025-11-02' },
    { id: 3, student: 'Le Van C', university: 'UNSW', program: 'Master Business', status: 'Offer Received', date: '2025-10-28' },
    { id: 4, student: 'Pham Thi D', university: 'Monash', program: 'Master IT', status: 'Submitted', date: '2025-11-03' }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">All Applications</h1>
        <p className="text-gray-600">Manage and track all student applications</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total', value: '89', color: 'blue' },
          { label: 'Pending Review', value: '24', color: 'yellow' },
          { label: 'Approved', value: '52', color: 'green' },
          { label: 'Rejected', value: '13', color: 'red' }
        ].map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{app.student}</h3>
                    <p className="text-sm text-gray-600">{app.university} - {app.program}</p>
                    <p className="text-xs text-gray-500 mt-1">{app.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600">
                      {app.status}
                    </span>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
