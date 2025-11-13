import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
        <p className="text-gray-600">Here&apos;s an overview of your application progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Active Applications</CardDescription>
            <CardTitle className="text-3xl">2</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Documents Pending</CardDescription>
            <CardTitle className="text-3xl">3</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Test Scheduled</CardDescription>
            <CardTitle className="text-3xl">1</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Unread Messages</CardDescription>
            <CardTitle className="text-3xl">5</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Current Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Current Applications</CardTitle>
          <CardDescription>Track your university applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { uni: 'University of Melbourne', program: 'Master of Computer Science', status: 'Under Review', color: 'blue' },
              { uni: 'ANU', program: 'Master of Engineering', status: 'Documents Required', color: 'yellow' }
            ].map((app, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{app.uni}</h3>
                  <p className="text-sm text-gray-600">{app.program}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm bg-${app.color}-50 text-${app.color}-600`}>
                    {app.status}
                  </span>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Visa Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Visa Application Timeline</CardTitle>
          <CardDescription>Australian Student Visa (Subclass 500)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { step: 'Document Preparation', status: 'completed', date: 'Oct 15, 2025' },
              { step: 'Application Submitted', status: 'completed', date: 'Oct 22, 2025' },
              { step: 'Biometrics Done', status: 'completed', date: 'Oct 28, 2025' },
              { step: 'Medical Examination', status: 'current', date: 'Scheduled for Nov 10, 2025' },
              { step: 'Visa Decision', status: 'pending', date: 'Pending' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.status === 'completed' ? 'bg-green-100 text-green-600' :
                  item.status === 'current' ? 'bg-blue-100 text-blue-600' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {item.status === 'completed' ? '✓' : idx + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.step}</h4>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Downloadable Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Downloadable Resources</CardTitle>
          <CardDescription>Access helpful documents anytime</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">Study in Australia with Confidence</h3>
                <p className="text-sm text-gray-600">Comprehensive guide to prepare for your studies.</p>
              </div>
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
                <a href="/api/student-downloads/study-in-australia-with-confidence" download>
                  Download
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="font-semibold mb-2">New Application</h3>
            <p className="text-sm text-gray-600 mb-4">Start a new university application</p>
            <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
              <Link href="/student/applications/new">Apply Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-2">📄</div>
            <h3 className="font-semibold mb-2">Upload Documents</h3>
            <p className="text-sm text-gray-600 mb-4">Submit required documents</p>
            <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
              <Link href="/student/documents">Upload</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="pt-6 text-center">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="font-semibold mb-2">Book Test</h3>
            <p className="text-sm text-gray-600 mb-4">Schedule IELTS, TOEFL, or PTE</p>
            <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
              <Link href="/student/tests">Book Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
