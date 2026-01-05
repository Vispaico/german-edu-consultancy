import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/login')
  }

  // Fetch real statistics
  const [
    totalStudents,
    pendingApplications,
    approvedVisas,
    totalPayments,
    recentApplications,
    pendingDocuments,
    recentPayments
  ] = await Promise.all([
    prisma.user.count({ where: { role: 'STUDENT' } }),
    prisma.application.count({
      where: {
        status: { in: ['SUBMITTED', 'UNDER_REVIEW'] }
      }
    }),
    prisma.application.count({
      where: { visastatus: 'APPROVED' }
    }),
    prisma.payment.aggregate({
      _sum: { amount: true }
    }),
    prisma.application.findMany({
      take: 5,
      orderBy: { createdat: 'desc' },
      include: {
        student: true,
        university: true
      }
    }),
    prisma.document.findMany({
      where: { status: 'PENDING' },
      take: 5,
      orderBy: { createdat: 'desc' },
      include: { student: true }
    }),
    prisma.payment.findMany({
      where: { status: 'PENDING' },
      take: 5,
      orderBy: { createdat: 'desc' },
      include: { student: true }
    })
  ])

  const visaRate = await prisma.application.count().then((total: number) =>
    total > 0 ? Math.round((approvedVisas / total) * 100) : 0
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome, {session.user.name}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Students</CardDescription>
            <CardTitle className="text-3xl">{totalStudents}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Registered students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Active Applications</CardDescription>
            <CardTitle className="text-3xl">{pendingApplications}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-600">Pending review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Visa Approvals</CardDescription>
            <CardTitle className="text-3xl">{visaRate}%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-600">Success rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-3xl">
              {totalPayments._sum.amount ? `${(totalPayments._sum.amount / 1000000).toFixed(0)}M` : '0M'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">VNĐ collected</p>
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
          {recentApplications.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No applications yet</p>
          ) : (
            <div className="space-y-4">
              {recentApplications.map((app: any) => (
                <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">
                      {app.student.firstname} {app.student.lastname}
                    </h4>
                    <p className="text-sm text-gray-600">{app.university.name}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{app.status}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(app.createdat).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pending Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Document Verification</CardTitle>
          </CardHeader>
          <CardContent>
            {pendingDocuments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No pending documents</p>
            ) : (
              <div className="space-y-3">
                {pendingDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">
                        {doc.student.firstname} {doc.student.lastname}
                      </p>
                      <p className="text-xs text-gray-600">{doc.type}</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(doc.createdat).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Verification</CardTitle>
          </CardHeader>
          <CardContent>
            {recentPayments.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No pending payments</p>
            ) : (
              <div className="space-y-3">
                {recentPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">
                        {payment.student.firstname} {payment.student.lastname}
                      </p>
                      <p className="text-xs text-gray-600">{payment.type}</p>
                    </div>
                    <p className="font-semibold text-sm">
                      {payment.amount.toLocaleString()} VNĐ
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
