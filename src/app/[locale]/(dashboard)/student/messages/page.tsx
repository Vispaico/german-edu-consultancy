import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { locales } from '@/i18n/routing'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { revalidatePath } from 'next/cache'

type PageParams = {
  params: Promise<{ locale: string }>
}

const formatTimestamp = (date: Date, locale: string) =>
  new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(date)

export default async function StudentMessagesPage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : locales[0]

  setRequestLocale(safeLocale)
  const t = await getTranslations({ locale: safeLocale, namespace: 'dashboard.studentPages.messages' })

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

  const messages = await prisma.message.findMany({
    where: { studentid: user.student.id },
    orderBy: { createdat: 'asc' },
    include: {
      consultant: {
        include: {
          user: true,
        },
      },
    },
  })

  const sendMessage = async (formData: FormData) => {
    'use server'

    const content = formData.get('message')

    if (!content || typeof content !== 'string' || !content.trim()) {
      return
    }

    await prisma.message.create({
      data: {
        studentid: user.student!.id,
        content: content.trim(),
        isfromstudent: true,
      },
    })

    revalidatePath(`/${safeLocale}/student/messages`)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
        <p className="text-gray-600">{t('description')}</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4 mb-6 h-96 overflow-y-auto pr-2">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500">{t('empty')}</p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isfromstudent ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-md p-4 rounded-lg ${
                      msg.isfromstudent ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">
                      {msg.isfromstudent ? t('you') : msg.consultant?.user?.name || t('consultant')}
                    </p>
                    <p>{msg.content}</p>
                    <p className={`text-xs mt-2 ${msg.isfromstudent ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formatTimestamp(msg.createdat, safeLocale)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <form action={sendMessage} className="space-y-3">
            <Textarea
              name="message"
              rows={3}
              placeholder={t('placeholder')}
              required
              className="resize-none"
            />
            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
              {t('send')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
