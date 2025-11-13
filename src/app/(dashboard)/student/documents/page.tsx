'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function StudentDocumentsPage() {
  const [uploading, setUploading] = useState(false)

  const documents = [
    { id: 1, name: 'Passport Copy', type: 'PASSPORT', status: 'Verified', uploadedDate: '2025-10-15', size: '2.3 MB' },
    { id: 2, name: 'IELTS Certificate', type: 'IELTS_CERTIFICATE', status: 'Verified', uploadedDate: '2025-10-18', size: '1.8 MB' },
    { id: 3, name: 'Bachelor Transcript', type: 'TRANSCRIPT', status: 'Pending', uploadedDate: '2025-11-01', size: '3.2 MB' },
    { id: 4, name: 'Recommendation Letter', type: 'RECOMMENDATION_LETTER', status: 'Rejected', uploadedDate: '2025-10-25', size: '1.5 MB' }
  ]

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return
    setUploading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setUploading(false)
    alert('Document uploaded successfully!')
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Documents</h1>
        <p className="text-gray-600">Upload and manage your application documents</p>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upload New Document</CardTitle>
          <CardDescription>Supported formats: PDF, JPG, PNG (Max 10MB)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              disabled={uploading}
            />
            <Button disabled={uploading} className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">
              {uploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold">{doc.name}</h3>
                  <p className="text-sm text-gray-600">
                    {doc.type} • {doc.size} • Uploaded {doc.uploadedDate}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    doc.status === 'Verified' ? 'bg-green-50 text-green-600' :
                    doc.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' :
                    'bg-red-50 text-red-600'
                  }`}>
                    {doc.status}
                  </span>
                  <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200">Download</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
