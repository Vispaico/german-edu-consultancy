import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { LoginForm } from '@/components/auth/LoginForm'

type DashboardPageProps = {
  params: Promise<{ locale: string }>
}

export default async function LocaleDashboardRedirect({ params }: DashboardPageProps) {
  const { locale } = await params
  const session = await getServerSession(authOptions)

  if (!session) {
    // Show login form directly on the dashboard page
    return <LoginForm />
  }

  const role = session.user.role
  if (role === 'ADMIN' || role === 'CONSULTANT') {
    redirect(`/${locale}/admin/dashboard`)
  }

  redirect(`/${locale}/student/dashboard`)
}
