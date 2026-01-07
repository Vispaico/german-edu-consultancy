'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type StudentDocumentUploadProps = {
  onUploadComplete?: () => void
}

export function StudentDocumentUpload({ onUploadComplete }: StudentDocumentUploadProps) {
  const [uploading, setUploading] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length || uploading) return
    setUploading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      onUploadComplete?.()
    } finally {
      setUploading(false)
    }
  }

  return (
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
          <Button
            type="button"
            disabled={uploading}
            className="bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200"
          >
            {uploading ? 'Uploading…' : 'Upload'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
