import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { locales } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'

type PageParams = {
  params: Promise<{ locale: string }>
}

const statusStyles: Record<string, string> = {
  DRAFT: 'bg-gray-100 text-gray-600',
  SUBMITTED: 'bg-blue-50 text-blue-600',
  UNDER_REVIEW: 'bg-yellow-50 text-yellow-600',
  OFFER_RECEIVED: 'bg-green-50 text-green-600',
  OFFER_ACCEPTED: 'bg-emerald-50 text-emerald-600',
  VISA_PROCESSING: 'bg-indigo-50 text-indigo-600',
  APPROVED: 'bg-green-600 text-white',
  REJECTED: 'bg-red-50 text-red-600',
  WITHDRAWN: 'bg-gray-200 text-gray-600',
}

const formatStatus = (status: string) =>
  status.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())

export default async function StudentApplicationsPage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : locales[0]

  setRequestLocale(safeLocale)

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/${safeLocale}/login`)
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { student: true },
  })

  if (!user?.student) {
    redirect(`/${safeLocale}/login`)
  }

  const applications = await prisma.application.findMany({
    where: { studentid: user.student.id },
    include: {
      university: true,
      course: true,
      consultant: {
        include: {
          user: true,
        },
      },
    },
    orderBy: { createdat: 'desc' },
  })

  const formatDate = new Intl.DateTimeFormat(safeLocale, { dateStyle: 'medium' })

  const stats = {
    total: applications.length,
    pending: applications.filter((app) => ['SUBMITTED', 'UNDER_REVIEW'].includes(app.status)).length,
    offers: applications.filter((app) => ['OFFER_RECEIVED', 'OFFER_ACCEPTED'].includes(app.status)).length,
    approved: applications.filter((app) => app.status === 'APPROVED').length,
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Applications</h1>
          <p className="text-gray-600">Track every university submission and offer in one place</p>
        </div>
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
          <Link href="/student/applications/new">Start New Application</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Applications</p>
            <p className="text-3xl font-bold mt-2">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">In Review</p>
            <p className="text-3xl font-bold mt-2">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Offers</p>
            <p className="text-3xl font-bold mt-2">{stats.offers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Approved</p>
            <p className="text-3xl font-bold mt-2">{stats.approved}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application Timeline</CardTitle>
          <CardDescription>Latest updates from StartinDE consultants</CardDescription>
        </CardHeader>
        <CardContent>
          {applications.length === 0 ? (
            <p className="text-gray-500 text-center py-6">You have not created any applications yet.</p>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <div key={app.id} className="p-4 border rounded-lg">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{app.university?.name ?? 'Unknown University'}</h3>
                      <p className="text-sm text-gray-600">
                        {app.course?.name || 'General Application'} • Intake {app.intake}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Submitted {app.submittedat ? formatDate.format(app.submittedat) : formatDate.format(app.createdat)}
                      </p>
                      {app.consultant?.user?.name && (
                        <p className="text-xs text-gray-500 mt-1">
                          Consultant: {app.consultant.user.name}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[app.status] ?? 'bg-gray-100 text-gray-600'}`}>
                        {formatStatus(app.status)}
                      </span>
                      <Button size="sm" asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
                        <Link href={`/student/applications/${app.id}`}>View Details</Link>
                      </Button>
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
