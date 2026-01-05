import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default async function AdminApplicationsPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/login')
  }

  // Fetch all applications with student and university data
  const applications = await prisma.application.findMany({
    include: {
      student: true,
      university: true,
      course: true,
    },
    orderBy: { createdat: 'desc' },
  })

  // Calculate statistics
  const totalApps = applications.length
  const pendingReview = applications.filter((a: any) => a.status === 'SUBMITTED' || a.status === 'UNDER_REVIEW').length
  const approved = applications.filter((a: any) => a.status === 'OFFER_RECEIVED' || a.status === 'APPROVED').length
  const rejected = applications.filter((a: any) => a.status === 'REJECTED' || a.status === 'WITHDRAWN').length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">All Applications</h1>
        <p className="text-gray-600">Manage and track all student applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-3xl font-bold mt-2">{totalApps}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Pending Review</p>
            <p className="text-3xl font-bold mt-2">{pendingReview}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Approved</p>
            <p className="text-3xl font-bold mt-2">{approved}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Rejected</p>
            <p className="text-3xl font-bold mt-2">{rejected}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <Input placeholder="Search applications..." className="max-w-sm" />
        <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
          Filter
        </Button>
      </div>

      {/* Applications List */}
      <Card>
        <CardContent className="pt-6">
          {applications.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No applications yet.</p>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {app.student ? `${app.student.firstname} ${app.student.lastname}` : 'Unknown'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {app.university?.name || 'Unknown'} • {app.course?.name || 'General Application'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(app.createdat).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        app.status === 'OFFER_RECEIVED' ? 'bg-green-50 text-green-600' :
                        app.status === 'APPROVED' ? 'bg-green-50 text-green-600' :
                        app.status === 'UNDER_REVIEW' ? 'bg-yellow-50 text-yellow-600' :
                        app.status === 'SUBMITTED' ? 'bg-blue-50 text-blue-600' :
                        app.status === 'OFFER_ACCEPTED' ? 'bg-cyan-50 text-cyan-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {app.status.replace('_', ' ')}
                      </span>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <Link href={`/admin/applications/${app.id}`}>
                            Review
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          asChild
                        >
                          <Link href={`/admin/applications/${app.id}/delete`}>
                            Delete
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
