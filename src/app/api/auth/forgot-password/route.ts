import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendPasswordResetEmail } from '@/lib/email'
import { randomBytes } from 'crypto'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (!user) {
      // Return success even if user doesn't exist (security)
      return NextResponse.json(
        { success: true, message: 'If an account exists, you will receive reset instructions' },
        { status: 200 }
      )
    }

    // Generate unique token identifier
    const uniqueIdentifier = `reset-${user.id}-${Date.now()}`

    // Delete all existing password reset tokens for this user
    try {
      await prisma.verificationToken.deleteMany({
        where: {
          userid: user.id,
          identifier: { startsWith: 'reset-' },
        },
      })
    } catch (error) {
      // Ignore deletion errors
      console.log('No existing tokens to delete')
    }

    // Create password reset token
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

    // Send email (don't block on email error)
    try {
      await sendPasswordResetEmail(user.name || 'User', user.email, resetUrl)
    } catch (emailError) {
      // Email failed but still return success
      console.error('Email send failed:', emailError)
    }

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
