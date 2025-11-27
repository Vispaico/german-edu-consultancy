import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AdminStudentsPage() {
  const students = [
    { id: 1, name: 'Nguyen Van A', email: 'nguyenvana@email.com', phone: '+84 123 456 789', status: 'Active', applications: 2 },
    { id: 2, name: 'Tran Thi B', email: 'tranthib@email.com', phone: '+84 987 654 321', status: 'Active', applications: 1 },
    { id: 3, name: 'Le Van C', email: 'levanc@email.com', phone: '+84 555 666 777', status: 'Active', applications: 3 },
    { id: 4, name: 'Pham Thi D', email: 'phamthid@email.com', phone: '+84 111 222 333', status: 'Pending', applications: 0 }
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Students</h1>
          <p className="text-gray-600">Manage all registered students</p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">Add New Student</Button>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <Input placeholder="Search students..." className="max-w-sm" />
        <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:text-blue-800">Filter</Button>
      </div>

      {/* Students Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {students.map((student) => (
              <div key={student.id} className="p-4 border rounded-lg flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold">{student.name}</h3>
                  <p className="text-sm text-gray-600">{student.email} • {student.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{student.applications} Applications</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      student.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                  <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
