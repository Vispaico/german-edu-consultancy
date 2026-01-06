import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from '@/navigation'

type PageParams = {
  params: Promise<{ locale: string }>
}

export default async function AdminStudentsPage({ params }: PageParams) {
  const { locale } = await params
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect(`/${locale}/login`)
  }

  // Fetch all students with their roles
  const students = await prisma.student.findMany({
    include: {
      user: {
        select: {
          email: true,
          createdat: true,
        },
      },
    },
    orderBy: { createdat: 'desc' },
  })

  // Get application counts for each student
  const studentsWithApps = await Promise.all(
    students.map(async (student) => {
      const applicationsCount = await prisma.application.count({
        where: { studentid: student.id },
      })
      return {
        ...student,
        applicationsCount,
        displayName: `${student.firstname} ${student.lastname}`.trim() || student.user.email,
      }
    })
  )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Students</h1>
          <p className="text-gray-600">Manage all registered students</p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200" asChild>
          <Link href="/admin/students/new">
            Add New Student
          </Link>
        </Button>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <Input placeholder="Search students by name or email..." className="max-w-sm" />
        <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
          Filter
        </Button>
      </div>

      {/* Students Table */}
      <Card>
        <CardContent className="pt-6">
          {studentsWithApps.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No students registered yet.</p>
          ) : (
            <div className="space-y-4">
              {studentsWithApps.map((student) => (
                <div key={student.id} className="p-4 border rounded-lg flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{student.displayName}</h3>
                    <p className="text-sm text-gray-600">
                      {student.user.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{student.applicationsCount} Applications</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600">
                        Active
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200"
                      asChild
                    >
                      <Link href={`/admin/students/${student.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Total Students</p>
            <p className="text-3xl font-bold mt-2">{studentsWithApps.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">Active Applications</p>
            <p className="text-3xl font-bold mt-2">
              {studentsWithApps.reduce((sum, s) => sum + s.applicationsCount, 0)}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
