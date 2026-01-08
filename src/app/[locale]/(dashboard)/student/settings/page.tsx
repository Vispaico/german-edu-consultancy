import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { locales } from '@/i18n/routing'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { revalidatePath } from 'next/cache'
import { Link } from '@/navigation'

type PageParams = {
  params: Promise<{ locale: string }>
}

export default async function StudentSettingsPage({ params }: PageParams) {
  const { locale } = await params
  const safeLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : locales[0]

  setRequestLocale(safeLocale)
  const t = await getTranslations({ locale: safeLocale, namespace: 'dashboard.studentPages.settings' })

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

  const profile = {
    firstname: user.student.firstname || '',
    lastname: user.student.lastname || '',
    nationality: user.student.nationality || '',
    city: user.student.city || '',
    address: user.student.address || '',
    phone: user.phone || '',
    email: user.email,
  }

  const updateProfile = async (formData: FormData) => {
    'use server'

    const firstname = formData.get('firstname')?.toString().trim() || profile.firstname
    const lastname = formData.get('lastname')?.toString().trim() || profile.lastname
    const nationality = formData.get('nationality')?.toString().trim() || profile.nationality || 'Vietnam'
    const city = formData.get('city')?.toString().trim() || undefined
    const address = formData.get('address')?.toString().trim() || undefined
    const phone = formData.get('phone')?.toString().trim() || undefined

    await prisma.student.update({
      where: { id: user.student!.id },
      data: {
        firstname,
        lastname,
        nationality,
        city,
        address,
      },
    })

    await prisma.user.update({
      where: { id: user.id },
      data: {
        phone,
      },
    })

    revalidatePath(`/${safeLocale}/student/settings`)
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
        <p className="text-gray-600">{t('description')}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('profileTitle')}</CardTitle>
          <CardDescription>{t('profileDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={updateProfile} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstname">{t('fields.firstname')}</Label>
                <Input id="firstname" name="firstname" defaultValue={profile.firstname} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">{t('fields.lastname')}</Label>
                <Input id="lastname" name="lastname" defaultValue={profile.lastname} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nationality">{t('fields.nationality')}</Label>
                <Input id="nationality" name="nationality" defaultValue={profile.nationality} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">{t('fields.city')}</Label>
                <Input id="city" name="city" defaultValue={profile.city} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">{t('fields.address')}</Label>
              <Input id="address" name="address" defaultValue={profile.address} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t('fields.phone')}</Label>
              <Input id="phone" name="phone" defaultValue={profile.phone} placeholder="+84..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('fields.email')}</Label>
              <Input id="email" name="email" defaultValue={profile.email} readOnly className="bg-gray-50" />
            </div>

            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
              {t('save')}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('passwordTitle')}</CardTitle>
          <CardDescription>{t('passwordDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">{t('resetDescription')}</p>
          <Button asChild variant="outline">
            <Link href="/forgot-password">{t('resetCta')}</Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('notificationsTitle')}</CardTitle>
          <CardDescription>{t('notificationsDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{t('notificationsNote')}</p>
        </CardContent>
      </Card>
    </div>
  )
}
