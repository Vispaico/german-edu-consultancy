import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const resetSchema = z.object({
  token: z.string(),
  password: z.string().min(8),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const result = resetSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      )
    }

    const { token, password } = result.data

    // Find valid token
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token,
        identifier: { startsWith: 'reset-' },
        expires: { gt: new Date() },
      },
      include: { user: true },
    })

    if (!verificationToken || !verificationToken.user) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 400 }
      )
    }

    // Update password
    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.update({
      where: { id: verificationToken.user.id },
      data: { password: hashedPassword },
    })

    // Delete used token
    await prisma.verificationToken.delete({
      where: { id: verificationToken.id },
    })

    return NextResponse.json(
      { success: true, message: 'Password reset successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
