import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { locales } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/navigation'

type PageParams = {
  params: Promise<{ locale: string }>
}

const statusBadgeClasses: Record<string, string> = {
  PENDING: 'bg-yellow-50 text-yellow-600',
  CONFIRMED: 'bg-green-50 text-green-600',
  COMPLETED: 'bg-blue-50 text-blue-600',
  CANCELLED: 'bg-red-50 text-red-600',
  NO_SHOW: 'bg-gray-100 text-gray-600',
}

const formatStatus = (status: string) =>
  status.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())

export default async function StudentTestsPage({ params }: PageParams) {
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

  const testBookings = await prisma.testBooking.findMany({
    where: { studentid: user.student.id },
    orderBy: { testdate: 'asc' },
  })

  const now = new Date()
  const upcoming = testBookings.filter(
    (booking) => booking.testdate >= now && !['COMPLETED', 'CANCELLED', 'NO_SHOW'].includes(booking.status)
  )
  const past = testBookings.filter(
    (booking) => booking.testdate < now || ['COMPLETED', 'CANCELLED', 'NO_SHOW'].includes(booking.status)
  )

  const formatDateTime = (date: Date) =>
    new Intl.DateTimeFormat(safeLocale, { dateStyle: 'long', timeStyle: 'short' }).format(date)

  const centerSummary = testBookings.reduce<Record<string, { location: string; count: number }>>((acc, booking) => {
    const key = booking.testcenter
    if (!acc[key]) {
      acc[key] = { location: booking.location, count: 0 }
    }
    acc[key].count += 1
    return acc
  }, {})

  const uniqueCenters = Object.entries(centerSummary)

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Language Tests</h1>
          <p className="text-gray-600">Your IELTS, TOEFL, and PTE bookings managed in one view</p>
        </div>
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
          <Link href="/contact">Request New Test Booking</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tests</CardTitle>
          <CardDescription>Confirmed or pending seats</CardDescription>
        </CardHeader>
        <CardContent>
          {upcoming.length === 0 ? (
            <p className="text-gray-500 text-center py-6">You have no upcoming tests scheduled.</p>
          ) : (
            <div className="space-y-4">
              {upcoming.map((test) => (
                <div key={test.id} className="p-4 border rounded-lg">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{formatStatus(test.testtype)}</h3>
                      <p className="text-sm text-gray-600">{test.testcenter} • {test.location}</p>
                      <p className="text-sm text-gray-600">{formatDateTime(test.testdate)}</p>
                      {test.registrationid && (
                        <p className="text-xs text-gray-500 mt-1">Registration ID: {test.registrationid}</p>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusBadgeClasses[test.status] ?? 'bg-gray-100 text-gray-600'
                    }`}>
                      {formatStatus(test.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Results & History</CardTitle>
          <CardDescription>Scores from completed tests</CardDescription>
        </CardHeader>
        <CardContent>
          {past.length === 0 ? (
            <p className="text-gray-500 text-center py-6">No completed tests yet.</p>
          ) : (
            <div className="space-y-4">
              {past.map((test) => (
                <div key={test.id} className="p-4 border rounded-lg">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-semibold">{formatStatus(test.testtype)}</h3>
                      <p className="text-sm text-gray-600">{formatDateTime(test.testdate)}</p>
                      {test.notes && <p className="text-sm text-gray-500">{test.notes}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase text-gray-500">Overall</p>
                      <p className="text-3xl font-bold text-blue-600">{test.score ?? '—'}</p>
                      {test.resultdate && (
                        <p className="text-xs text-gray-500">Posted {formatDateTime(test.resultdate)}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {testBookings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Frequently Used Test Centers</CardTitle>
            <CardDescription>Based on your confirmed and past bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {uniqueCenters.map(([center, info]) => (
                <div key={center} className="p-3 border rounded-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{center}</h4>
                    <p className="text-sm text-gray-600">{info.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{info.count} booking{info.count > 1 ? 's' : ''}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
