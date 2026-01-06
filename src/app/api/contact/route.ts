import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendContactNotification } from '@/lib/email'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate input
    const result = contactSchema.safeParse(body)
    if (!result.success) {
      console.log('Validation error:', result.error.flatten().fieldErrors)
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, phone, message } = result.data

    // Store in database
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        message,
        status: 'new',
        ipaddress: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
        useragent: req.headers.get('user-agent') || 'unknown',
      },
    })

    // Send email notification (non-blocking)
    sendContactNotification({ name, email, phone, message }).catch(err => {
      console.error('Failed to send contact notification email:', err)
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
