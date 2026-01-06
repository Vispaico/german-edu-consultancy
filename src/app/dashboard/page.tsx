import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { defaultLocale } from '@/i18n/routing'

export default async function DashboardRedirectPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/${defaultLocale}/login`)
  }

  const role = session.user.role

  if (role === 'ADMIN' || role === 'CONSULTANT') {
    redirect(`/${defaultLocale}/admin/dashboard`)
  } else {
    redirect(`/${defaultLocale}/student/dashboard`)
  }
}
