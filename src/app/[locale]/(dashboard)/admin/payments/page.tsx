import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AdminPaymentsPage() {
  const payments = [
    { id: 1, student: 'Nguyen Van A', amount: '₫5,000,000', type: 'Application Fee', method: 'Bank Transfer', status: 'Pending', date: '2025-11-05' },
    { id: 2, student: 'Tran Thi B', amount: '₫3,000,000', type: 'Consultation Fee', method: 'VietQR', status: 'Verified', date: '2025-11-04' },
    { id: 3, student: 'Le Van C', amount: '₫2,000,000', type: 'Document Translation', method: 'Bank Transfer', status: 'Completed', date: '2025-11-03' }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Payment Management</h1>
        <p className="text-gray-600">Track and verify student payments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total This Month</p>
            <p className="text-3xl font-bold mt-2">₫45M</p>
            <p className="text-sm text-green-600 mt-1">+18% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Pending Verification</p>
            <p className="text-3xl font-bold mt-2">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-3xl font-bold mt-2">142</p>
          </CardContent>
        </Card>
      </div>

      {/* Payments List */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{payment.student}</h3>
                    <p className="text-sm text-gray-600">{payment.type} • {payment.method}</p>
                    <p className="text-xs text-gray-500 mt-1">{payment.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold">{payment.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        payment.status === 'Completed' ? 'bg-green-50 text-green-600' :
                        payment.status === 'Verified' ? 'bg-blue-50 text-blue-600' :
                        'bg-yellow-50 text-yellow-600'
                      }`}>
                        {payment.status}
                      </span>
                    </div>
                    {payment.status === 'Pending' && (
                      <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">Verify</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
