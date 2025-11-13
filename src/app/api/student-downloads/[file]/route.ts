import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

const DOWNLOADABLE_FILES = {
  'study-in-australia-with-confidence': {
    fileName: 'study-in-australia-with-confidence.pdf',
    downloadName: 'study-in-australia-with-confidence.pdf',
    contentType: 'application/pdf',
  },
} as const

type FileKey = keyof typeof DOWNLOADABLE_FILES

export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> }
) {
  const { file } = await context.params
  const fileKey = file as FileKey
  const fileConfig = DOWNLOADABLE_FILES[fileKey]

  if (!fileConfig) {
    return NextResponse.json({ message: 'File not found' }, { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'src', 'templates', fileConfig.fileName)

  try {
    const fileBuffer = await fs.readFile(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': fileConfig.contentType,
        'Content-Disposition': `attachment; filename="${fileConfig.downloadName}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('Failed to read download file:', error)
    return NextResponse.json({ message: 'Unable to download file' }, { status: 500 })
  }
}
