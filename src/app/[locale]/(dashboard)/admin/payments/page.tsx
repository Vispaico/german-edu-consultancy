import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface PaymentWithDetails {
  id: string
  amount: number
  type: string
  method: string
  status: string
  transferdate: Date | null
  student: {
    firstname: string | null
    lastname: string | null
    user: {
      email: string | null
    } | null
  } | null
  application: {
    university: {
      name: string | null
    }
  } | null
}

export default async function AdminPaymentsPage({ searchParams }: { searchParams?: Promise<{ status?: string }> }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/login')
  }

  const resolvedSearchParams = await searchParams
  const filterStatus = resolvedSearchParams?.status

  // Fetch payments with student and application data
  const payments = await prisma.payment.findMany({
    where: filterStatus ? { status: filterStatus as any } : undefined,
    include: {
      student: {
        include: {
          user: true,
        },
      },
      application: {
        include: {
          university: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: { createdat: 'desc' },
  })

  // Calculate statistics
  const totalPayments = payments.length
  const pendingPayments = payments.filter((p) => p.status === 'PENDING').length
  const completedPayments = payments.filter((p) => p.status === 'COMPLETED').length
  
  // Calculate total amount for this month
  const now = new Date()
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const thisMonthTotal = payments
    .filter((p) => p.createdat >= thisMonthStart && (p.status === 'COMPLETED' || p.status === 'VERIFIED'))
    .reduce((sum, p) => sum + p.amount, 0)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount)
  }

  const formatPaymentType = (type: string) => {
    return type.replace(/_/g, ' ').replace(/ FEE/gi, ' Fee')
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Payment Management</h1>
          <p className="text-gray-600">Track and verify student payments</p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200" asChild>
          <Link href="/admin/payments/new">
            Record Payment
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total This Month</p>
            <p className="text-3xl font-bold mt-2">{formatCurrency(thisMonthTotal)}</p>
            <p className="text-sm text-green-600 mt-1">All verified payments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Pending Verification</p>
            <p className="text-3xl font-bold mt-2">{pendingPayments}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-3xl font-bold mt-2">{completedPayments}</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Input placeholder="Search payments..." className="max-w-sm" />
        <Select defaultValue={filterStatus || 'all'}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Payments</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="VERIFIED">Verified</SelectItem>
            <SelectItem value="COMPLETED">Completed</SelectItem>
            <SelectItem value="REJECTED">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Payments List */}
      <Card>
        <CardContent className="pt-6">
          {payments.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No payments recorded yet.</p>
          ) : (
            <div className="space-y-4">
              {payments.map((payment) => (
                <div key={payment.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {payment.student
                          ? `${payment.student.firstname} ${payment.student.lastname}`.trim() || payment.student.user?.email || 'Unknown'
                          : 'Unknown Student'}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {formatPaymentType(payment.type)} • {payment.method.replace(/_/g, ' ')}
                        {payment.application?.university?.name && ` • ${payment.application.university.name}`}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(payment.createdat).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold">{formatCurrency(payment.amount)}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          payment.status === 'COMPLETED' ? 'bg-green-50 text-green-600' :
                          payment.status === 'VERIFIED' ? 'bg-blue-50 text-blue-600' :
                          payment.status === 'PENDING' ? 'bg-yellow-50 text-yellow-600' :
                          payment.status === 'REJECTED' ? 'bg-red-50 text-red-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {payment.status.replace(/_/g, ' ')}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {payment.status === 'PENDING' && (
                          <Button
                            size="sm"
                            className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200"
                            asChild
                          >
                            <Link href={`/admin/payments/${payment.id}/verify`}>Verify</Link>
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                        >
                          <Link href={`/admin/payments/${payment.id}`}>View</Link>
                        </Button>
                      </div>
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
