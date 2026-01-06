import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'

type PageParams = {
  params: Promise<{ locale: string }>
}

export default async function StudentDashboard({ params }: PageParams) {
  const { locale } = await params
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/${locale}/login`)
  }

  // Get the user from database with their student profile
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { student: true },
  })

  if (!user || !user.student) {
    redirect(`/${locale}/login`)
  }

  const student = user.student
  const displayName = user.student?.firstname && user.student?.lastname 
    ? `${user.student.firstname} ${user.student.lastname}` 
    : user.email

  // Fetch real statistics
  const [
    totalApplications,
    pendingDocuments,
    scheduledTests,
    unreadMessages,
    recentApplications,
    visaApplication,
  ] = await Promise.all([
    prisma.application.count({ where: { studentid: student.id } }),
    prisma.document.count({
      where: {
        studentid: student.id,
        status: 'PENDING',
      },
    }),
    prisma.testBooking.count({
      where: {
        studentid: student.id,
        status: 'CONFIRMED',
        resultdate: { gte: new Date() },
      },
    }),
    prisma.message.count({
      where: {
        studentid: student.id,
        readat: null,
      },
    }),
    prisma.application.findMany({
      where: { studentid: student.id },
      take: 3,
      orderBy: { createdat: 'desc' },
      include: { university: true, course: true },
    }),
    prisma.application.findFirst({
      where: { studentid: student.id },
      orderBy: { createdat: 'desc' },
    }),
  ])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {displayName}!
        </h1>
        <p className="text-gray-600">Here&apos;s an overview of your application progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Active Applications</CardDescription>
            <CardTitle className="text-3xl">{totalApplications}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Documents Pending</CardDescription>
            <CardTitle className="text-3xl">{pendingDocuments}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Tests Scheduled</CardDescription>
            <CardTitle className="text-3xl">{scheduledTests}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Unread Messages</CardDescription>
            <CardTitle className="text-3xl">{unreadMessages}</CardTitle>
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
          {recentApplications.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No applications yet.</p>
          ) : (
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{app.university.name}</h3>
                    <p className="text-sm text-gray-600">{app.course?.name || 'General Application'}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      app.status === 'APPROVED' ? 'bg-green-50 text-green-600' :
                      app.status === 'OFFER_RECEIVED' ? 'bg-blue-50 text-blue-600' :
                      app.status === 'UNDER_REVIEW' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {app.status.replace('_', ' ')}
                    </span>
                    <Button size="sm" asChild>
                      <Link href={`/student/applications/${app.id}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Visa Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Visa Application Status</CardTitle>
          <CardDescription>German Student Visa</CardDescription>
        </CardHeader>
        <CardContent>
          {!visaApplication ? (
            <p className="text-gray-500 text-center py-4">
              Submit an application first to track visa status.
            </p>
          ) : (
            <div className="space-y-4">
              {(() => {
                const visaStatus = visaApplication.visastatus
                const timeline = [
                  { step: 'Not Started', status: 'NOT_STARTED', label: 'Not Started' },
                  { step: 'Documents Preparation', status: 'DOCUMENTS_PREPARATION', label: 'Documents Preparation' },
                  { step: 'Application Submitted', status: 'SUBMITTED', label: 'Submitted' },
                  { step: 'Biometrics Done', status: 'BIOMETRICS_DONE', label: 'Biometrics Completed' },
                  { step: 'Medical Examination', status: 'MEDICAL_DONE', label: 'Medical Completed' },
                  { step: 'Processing', status: 'PROCESSING', label: 'Under Processing' },
                  { step: 'Approved', status: 'APPROVED', label: 'Visa Approved' },
                  { step: 'Rejected', status: 'REJECTED', label: 'Visa Rejected' },
                ]
                
                const currentIndex = timeline.findIndex(t => t.status === visaStatus)
                
                return timeline.slice(0, visaStatus === 'REJECTED' ? currentIndex + 1 : currentIndex + 1).map((item, idx) => {
                  const isCompleted = idx < currentIndex || item.status === 'APPROVED'
                  const isCurrent = item.status === visaStatus && visaStatus !== 'APPROVED' && visaStatus !== 'REJECTED'
                  
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCompleted ? 'bg-green-100 text-green-600' :
                        isCurrent ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {isCompleted ? '✓' : idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.label}</h4>
                        {isCurrent && (
                          <p className="text-sm text-blue-600">Current Status</p>
                        )}
                        {isCompleted && idx === currentIndex - 1 && item.status !== 'APPROVED' && (
                          <p className="text-sm text-green-600">Completed</p>
                        )}
                      </div>
                    </div>
                  )
                })
              })()}
            </div>
          )}
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
                <h3 className="font-semibold">Study in Germany with Confidence</h3>
                <p className="text-sm text-gray-600">Comprehensive guide to prepare for your studies.</p>
              </div>
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
                <a href="/api/student-downloads/study-in-germany-with-confidence" download>
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
