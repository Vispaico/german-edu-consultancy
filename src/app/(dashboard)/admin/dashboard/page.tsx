import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Overview of platform activity and metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Students</CardDescription>
            <CardTitle className="text-3xl">156</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Active Applications</CardDescription>
            <CardTitle className="text-3xl">89</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-600">24 pending review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Visa Approvals</CardDescription>
            <CardTitle className="text-3xl">95%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600">Success rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Revenue This Month</CardDescription>
            <CardTitle className="text-3xl">₫45M</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600">+18% vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>Latest university applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { student: 'Nguyen Van A', uni: 'University of Melbourne', status: 'Pending Review', date: 'Nov 5, 2025' },
              { student: 'Tran Thi B', uni: 'ANU', status: 'Documents Required', date: 'Nov 4, 2025' },
              { student: 'Le Van C', uni: 'UNSW', status: 'Offer Received', date: 'Nov 3, 2025' },
              { student: 'Pham Thi D', uni: 'Monash', status: 'Under Review', date: 'Nov 2, 2025' }
            ].map((app, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{app.student}</h4>
                  <p className="text-sm text-gray-600">{app.uni}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{app.status}</p>
                    <p className="text-xs text-gray-500">{app.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Document Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { student: 'Nguyen Van A', doc: 'Passport Copy', uploaded: '2 hours ago' },
                { student: 'Tran Thi B', doc: 'IELTS Certificate', uploaded: '5 hours ago' },
                { student: 'Le Van C', doc: 'Transcript', uploaded: '1 day ago' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{item.student}</p>
                    <p className="text-xs text-gray-600">{item.doc}</p>
                  </div>
                  <p className="text-xs text-gray-500">{item.uploaded}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { student: 'Pham Thi D', amount: '₫5,000,000', type: 'Application Fee' },
                { student: 'Hoang Van E', amount: '₫3,000,000', type: 'Consultation Fee' },
                { student: 'Vo Thi F', amount: '₫2,000,000', type: 'Document Translation' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{item.student}</p>
                    <p className="text-xs text-gray-600">{item.type}</p>
                  </div>
                  <p className="font-semibold text-sm">{item.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
