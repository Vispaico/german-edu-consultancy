import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/navigation'
import { locales } from '@/i18n/routing'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type PageParams = {
  params: Promise<{ locale: string }>
}

export default async function StudentUniversitiesPage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : locales[0]

  setRequestLocale(safeLocale)
  const t = await getTranslations({ locale: safeLocale, namespace: 'dashboard.studentPages.universities' })

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

  const universities = await prisma.university.findMany({
    include: {
      _count: {
        select: { courses: true, applications: true },
      },
    },
    orderBy: { name: 'asc' },
    take: 12,
  })

  const totalUniversities = await prisma.university.count()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('description', { count: totalUniversities })}</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/universities">{t('viewDirectory')}</Link>
        </Button>
      </div>

      {universities.length === 0 ? (
        <Card>
          <CardContent className="py-6 text-center text-gray-500">
            {t('empty')}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {universities.map((uni) => (
            <Card key={uni.id}>
              <CardHeader>
                <CardTitle>{uni.name}</CardTitle>
                <CardDescription>
                  {[uni.city, uni.state].filter(Boolean).join(', ') || uni.country}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {t('programSummary', {
                    programs: uni._count.courses,
                    applications: uni._count.applications,
                  })}
                </p>
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
                  <Link href={`/universities/${uni.slug}`}>{t('viewPrograms')}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
