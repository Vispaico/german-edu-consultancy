import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StudentDocumentUpload } from '@/components/student/student-document-upload'
import { setRequestLocale } from 'next-intl/server'
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

const documentTypeLabels: Partial<Record<DocumentType, string>> = {
  PASSPORT: 'Passport',
  TRANSCRIPT: 'Transcript',
  DIPLOMA: 'Diploma',
  IELTS_CERTIFICATE: 'IELTS Certificate',
  TOEFL_CERTIFICATE: 'TOEFL Certificate',
  PTE_CERTIFICATE: 'PTE Certificate',
  TESTDAF_CERTIFICATE: 'TestDaF Certificate',
  GOETHE_CERTIFICATE: 'Goethe Certificate',
  RECOMMENDATION_LETTER: 'Recommendation Letter',
  PERSONAL_STATEMENT: 'Personal Statement',
  CV: 'Curriculum Vitae',
  FINANCIAL_PROOF: 'Financial Proof',
  BIRTH_CERTIFICATE: 'Birth Certificate',
  VISA_APPLICATION: 'Visa Application',
  MEDICAL_CERTIFICATE: 'Medical Certificate',
  POLICE_CHECK: 'Police Check',
  OTHER: 'Other Document',
}

const formatDocumentType = (type: DocumentType) =>
  documentTypeLabels[type] ?? type.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())

const formatFileSize = (bytes: number) => {
  if (!bytes) return '—'
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1)
  const value = bytes / Math.pow(1024, i)
  return `${value.toFixed(value >= 10 ? 0 : 1)} ${sizes[i]}`
}

const formatStatusLabel = (status: DocumentStatus) =>
  status.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())

export default async function StudentDocumentsPage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : locales[0]

  setRequestLocale(safeLocale)
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Documents</h1>
        <p className="text-gray-600">Upload and manage your application documents</p>
      </div>

      <StudentDocumentUpload />

      <div className="space-y-4">
        {documents.length === 0 ? (
          <Card>
            <CardContent className="py-10 text-center text-gray-500">
              You have not uploaded any documents yet.
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
                      {formatDocumentType(doc.type)} • {formatFileSize(doc.filesize)} • Uploaded {dateFormatter.format(doc.createdat)}
                    </p>
                    {doc.application?.university && (
                      <p className="text-xs text-gray-500 mt-1">
                        Linked to {doc.application.university.name}
                      </p>
                    )}
                    {doc.notes && (
                      <p className="text-xs text-gray-500 mt-1">Notes: {doc.notes}</p>
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
                        Download
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
