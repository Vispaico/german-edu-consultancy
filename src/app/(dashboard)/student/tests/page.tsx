'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function StudentTestsPage() {
  const upcomingTests = [
    {
      id: 1,
      type: 'IELTS Academic',
      center: 'British Council - Haiphong UAC',
      date: '2025-11-15',
      time: '09:00 AM',
      status: 'Confirmed'
    }
  ]

  const pastTests = [
    {
      id: 2,
      type: 'IELTS Academic',
      date: '2025-09-20',
      score: 7.5,
      breakdown: 'L: 8.0, R: 7.5, W: 7.0, S: 7.5'
    }
  ]

  const testCenters = [
    { name: 'British Council - Haiphong UAC', location: 'Haiphong', provider: 'British Council' },
    { name: 'IDP IELTS - HCMC', location: 'Ho Chi Minh City', provider: 'IDP' },
    { name: 'British Council - HCMC UAC', location: 'Ho Chi Minh City', provider: 'British Council' }
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Language Tests</h1>
          <p className="text-gray-600">Book and manage your IELTS, TOEFL, and PTE tests</p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">Book New Test</Button>
      </div>

      {/* Upcoming Tests */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tests</CardTitle>
          <CardDescription>Your scheduled language tests</CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingTests.length > 0 ? (
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <div key={test.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{test.type}</h3>
                      <p className="text-sm text-gray-600 mt-1">{test.center}</p>
                      <p className="text-sm text-gray-600">
                        📅 {test.date} at {test.time}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
                      {test.status}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">View Details</Button>
                    <Button size="sm" variant="destructive">Cancel</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No upcoming tests scheduled</p>
          )}
        </CardContent>
      </Card>

      {/* Past Results */}
      <Card>
        <CardHeader>
          <CardTitle>Test Results</CardTitle>
          <CardDescription>Your previous test scores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastTests.map((test) => (
              <div key={test.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{test.type}</h3>
                    <p className="text-sm text-gray-600">Test Date: {test.date}</p>
                    <p className="text-sm text-gray-600">{test.breakdown}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{test.score}</div>
                    <p className="text-sm text-gray-600">Overall</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Centers */}
      <Card>
        <CardHeader>
          <CardTitle>Test Centers in Vietnam</CardTitle>
          <CardDescription>Available IELTS test centers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {testCenters.map((center, idx) => (
              <div key={idx} className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{center.name}</h4>
                  <p className="text-sm text-gray-600">{center.location} • {center.provider}</p>
                </div>
                <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">View Schedule</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
