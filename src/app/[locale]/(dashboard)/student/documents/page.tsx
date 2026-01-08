import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StudentDocumentUpload } from '@/components/student/student-document-upload'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { locales } from '@/i18n/routing'
import type { DocumentStatus, DocumentType } from '@prisma/client'

type PageParams = {
  params: Promise<{ locale: string }>
}

const statusStyles: Record<DocumentStatus, string> = {
  PENDING: 'bg-yellow-50 text-yellow-600',
  VERIFIED: 'bg-green-50 text-green-600',
  REJECTED: 'bg-red-50 text-red-600',
  EXPIRED: 'bg-gray-100 text-gray-600',
}

const formatFileSize = (bytes: number) => {
  if (!bytes) return '—'
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1)
  const value = bytes / Math.pow(1024, i)
  return `${value.toFixed(value >= 10 ? 0 : 1)} ${sizes[i]}`
}

export default async function StudentDocumentsPage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : locales[0]

  setRequestLocale(safeLocale)
  const t = await getTranslations({ locale: safeLocale, namespace: 'dashboard.studentPages.documents' })
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/${locale}/login`)
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { student: true },
  })

  if (!user?.student) {
    redirect(`/${locale}/login`)
  }

  const documents = await prisma.document.findMany({
    where: { studentid: user.student.id },
    orderBy: { createdat: 'desc' },
    include: {
      application: {
        include: {
          university: true,
        },
      },
    },
  })

  const dateFormatter = new Intl.DateTimeFormat(safeLocale, { dateStyle: 'medium' })

  const formatDocumentType = (type: DocumentType) => {
    const key = `types.${type}` as Parameters<typeof t>[0]
    return t(key, {
      defaultMessage: type.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
    })
  }

  const formatStatusLabel = (status: DocumentStatus) => {
    const key = `status.${status}` as Parameters<typeof t>[0]
    return t(key, {
      defaultMessage: status.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
        <p className="text-gray-600">{t('description')}</p>
      </div>

      <StudentDocumentUpload />

      <div className="space-y-4">
        {documents.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center text-gray-500">
              {t('empty')}
            </CardContent>
          </Card>
        ) : (
          documents.map((doc) => (
            <Card key={doc.id}>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{doc.name || formatDocumentType(doc.type)}</h3>
                    <p className="text-sm text-gray-600">
                      {formatDocumentType(doc.type)} • {formatFileSize(doc.filesize)} • {t('uploadedOn', { date: dateFormatter.format(doc.createdat) })}
                    </p>
                    {doc.application?.university && (
                      <p className="text-xs text-gray-500 mt-1">
                        {t('linkedTo', { university: doc.application.university.name })}
                      </p>
                    )}
                    {doc.notes && (
                      <p className="text-xs text-gray-500 mt-1">{t('notesLabel')}: {doc.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${statusStyles[doc.status]}`}>
                      {formatStatusLabel(doc.status)}
                    </span>
                    <Button
                      size="sm"
                      asChild
                      className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200"
                    >
                      <a href={doc.fileurl} target="_blank" rel="noopener noreferrer">
                        {t('download')}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
