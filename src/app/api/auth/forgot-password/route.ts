import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendPasswordResetEmail } from '@/lib/email'
import { nanoid } from 'nanoid'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      // Return success even if user doesn't exist (security)
      return NextResponse.json(
        { success: true, message: 'If an account exists, you will receive reset instructions' },
        { status: 200 }
      )
    }

    // Create password reset token
    const resetToken = nanoid(32)
    const expiresAt = new Date(Date.now() + 3600000) // 1 hour

    // Store in verification token
    await prisma.verificationToken.create({
      data: {
        identifier: `reset-${user.email}`,
        token: resetToken,
        expires: expiresAt,
        userid: user.id,
      },
    })

    // Reset URL
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
    const resetUrl = `${baseUrl}/reset-password?token=${resetToken}`

    // Send email
    await sendPasswordResetEmail(user.name, user.email, resetUrl)

    return NextResponse.json(
      { success: true, message: 'Password reset email sent' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
