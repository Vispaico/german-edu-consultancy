import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { locales } from '@/i18n/routing'
import { setRequestLocale } from 'next-intl/server'

type PageParams = {
  params: Promise<{ locale: string }>
}

export default async function AdminUniversitiesPage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : locales[0]

  setRequestLocale(safeLocale)

  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect(`/${safeLocale}/login`)
  }

  const universities = await prisma.university.findMany({
    include: {
      _count: {
        select: { courses: true, applications: true },
      },
    },
    orderBy: { updatedat: 'desc' },
  })

  const totals = universities.reduce(
    (acc, uni) => {
      acc.programs += uni._count.courses
      acc.activeApplications += uni._count.applications
      return acc
    },
    { programs: 0, activeApplications: 0 }
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Universities</h1>
          <p className="text-gray-600">Live partner data synced with the central database</p>
        </div>
        <Button
          asChild
          variant="outline"
          className="hover:bg-blue-50 hover:text-blue-700"
        >
          <a href="mailto:partners@startin-de.com" target="_blank" rel="noreferrer">
            Submit Update
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Partners</p>
            <p className="text-3xl font-bold mt-2">{universities.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Programs Listed</p>
            <p className="text-3xl font-bold mt-2">{totals.programs}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Active Applications</p>
            <p className="text-3xl font-bold mt-2">{totals.activeApplications}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          {universities.length === 0 ? (
            <p className="text-center text-gray-500 py-6">No universities added yet.</p>
          ) : (
            <div className="space-y-4">
              {universities.map((uni) => (
                <div key={uni.id} className="p-4 border rounded-lg flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{uni.name}</h3>
                    <p className="text-sm text-gray-600">
                      {[uni.city, uni.state].filter(Boolean).join(', ') || uni.country}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {uni._count.courses} programs • {uni._count.applications} active applications
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/universities/${uni.slug}`}>View</Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                    >
                      <a
                        href={`mailto:partners@startin-de.com?subject=${encodeURIComponent(`Update request for ${uni.name}`)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Request Update
                      </a>
                    </Button>
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
