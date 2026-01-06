import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendPasswordResetEmail } from '@/lib/email'
import { randomBytes } from 'crypto'
import { defaultLocale } from '@/i18n/routing'

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
    } catch {
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
    const resolvedBaseUrl = (process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')).replace(/\/$/, '')
    const resetLocale = process.env.DEFAULT_LOCALE || defaultLocale
    const resetUrl = `${resolvedBaseUrl}/${resetLocale}/reset-password?token=${resetToken}`

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
  } catch (error) {
    console.error('Forgot password error:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
