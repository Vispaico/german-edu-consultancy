import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendPasswordResetEmail } from '@/lib/email'
import { randomBytes } from 'crypto'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json(
        { success: true, message: 'If an account exists, you will receive reset instructions' },
        { status: 200 }
      )
    }

    // Generate unique token identifier using timestamp
    const uniqueIdentifier = `password-reset-${user.id}-${Date.now()}`

    // Delete any existing verification tokens for this user
    await prisma.verificationToken.deleteMany({
      where: { userid: user.id },
    })

    // Create password reset token (64 characters hex string)
    const resetToken = randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 3600000) // 1 hour

    // Store in verification token
    await prisma.verificationToken.create({
      data: {
        identifier: uniqueIdentifier,
        token: resetToken,
        expires: expiresAt,
        userid: user.id,
      },
    })

    // Reset URL
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXTAUTH_URL || 'http://localhost:3000'
    const resetUrl = `${baseUrl}/reset-password?token=${resetToken}`

    // Send email
    await sendPasswordResetEmail(user.name, user.email, resetUrl)

    return NextResponse.json(
      { success: true, message: 'Password reset email sent' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
