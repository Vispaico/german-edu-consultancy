import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendNewsletterConfirmation } from '@/lib/email'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate input
    const result = newsletterSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const { email } = result.data

    // Check if already subscribed
    const existing = await prisma.newsletter.findFirst({
      where: {
        email,
        active: true,
      },
    })

    if (existing) {
      return NextResponse.json(
        { success: true, message: 'Already subscribed' },
        { status: 200 }
      )
    }

    // Generate unsubscribe token
    const unsubscribeToken = Buffer.from(`${email}-${Date.now()}`).toString('base64')

    // Subscribe
    await prisma.newsletter.create({
      data: {
        email,
        active: true,
        unsubscribetoken: unsubscribeToken,
        ipaddress: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
      },
    })

    // Send confirmation email
    await sendNewsletterConfirmation(null, email)

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
