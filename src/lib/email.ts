import nodemailer from 'nodemailer'

interface EmailConfig {
  to: string | string[]
  subject: string
  html: string
  cc?: string[]
}

const isEmailConfigured = Boolean(
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
)

// Create transporter with Hostinger SMTP when config is available
const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: (process.env.SMTP_SECURE || 'false').toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null

const fromEmail = process.env.EMAIL_NOREPLY || process.env.SMTP_USER || ''
const ccEmails = process.env.EMAIL_CC?.split(',').map(e => e.trim()) || []
const fallbackContactRecipient = process.env.EMAIL_CONTACT || process.env.EMAIL_INFO || process.env.SMTP_USER || ''

export async function sendEmail({ to, subject, html, cc }: EmailConfig) {
  if (!isEmailConfigured || !transporter || !fromEmail) {
    console.warn('Email service not fully configured. Skipping send for subject:', subject)
    return { success: false, error: 'EMAIL_NOT_CONFIGURED' as const }
  }

  try {
    const ccList = [...ccEmails, ...(cc || [])]

    await transporter.sendMail({
      from: `"StartinDE" <${fromEmail}>`,
      to: Array.isArray(to) ? to : [to],
      cc: ccList.length > 0 ? ccList : undefined,
      subject,
      html,
    })

    console.log(`Email sent to: ${Array.isArray(to) ? to.join(', ') : to}`)
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

// Email templates
export const emailTemplates = {
  // Welcome/Email verification email
  signup: (name: string, verifyUrl?: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Willkommen bei StartinDE</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #1e40af; margin-bottom: 10px;">Willkommen bei StartinDE! 🎓</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Hi ${name},
          </p>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Vielen Dank für Ihre Anmeldung bei StartinDE! Wir freuen uns, Sie auf Ihrem Weg zum Studium in Deutschland zu unterstützen.
            Cảm ơn bạn đã đăng ký với StartinDE! Chúng tôi rất vui mừng được hỗ trợ bạn trên hành trình du học tại Đức.
            Thank you for signing up with StartinDE! We're excited to help you on your journey to study in Germany.
          </p>
          ${verifyUrl ? `
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verifyUrl}" style="display: inline-block; background-color: #1e40af; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Email</a>
          </div>
          ` : ''}
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Beste Grüsse,<br>
            Das StartinDE Team
          </p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>2025 StartinDE - Your trusted partner for studying in Germany</p>
        </div>
      </div>
    </body>
    </html>
  `,

  // Password reset email
  passwordReset: (name: string, resetUrl: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Password - StartinDE</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #1e40af; margin-bottom: 10px;">Reset Your Password 🔐</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Hi ${name},
          </p>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Wir haben eine Anfrage zum Zurücksetzen Ihres Passworts erhalten. Klicken Sie auf die Schaltfläche unten, um ein neues Passwort zu erstellen:
            Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu của bạn. Vui lòng nhấp vào nút bên dưới để tạo mật khẩu mới:
            We received a request to reset your password. Click the button below to create a new password:
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="display: inline-block; background-color: #1e40af; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Dieser Link ist nur noch eine Stunde gültig. Falls Sie diese E-Mail nicht angefordert haben, ignorieren Sie sie bitte.
            Liên kết này sẽ hết hạn sau 1 giờ. Nếu bạn không yêu cầu liên kết này, vui lòng bỏ qua email này.
            This link will expire in 1 hour. If you didn't request this, please ignore this email.
          </p>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Beste Grüsse,<br>
            Das StartinDE Team
          </p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>2025 StartinDE - Your trusted partner for studying in Germany</p>
        </div>
      </div>
    </body>
    </html>
  `,

  // Contact form notification
  contactForm: (data: { name: string; email: string; phone: string; message: string }) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #1e40af; margin-bottom: 10px;">New Contact Form Submission 📬</h1>
          <p style="color: #666; font-size: 16px;">A new inquiry has been submitted:</p>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0; color: #333;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0; color: #333;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0; color: #333;"><strong>Phone:</strong> ${data.phone}</p>
            <p style="margin: 10px 0; color: #333;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; color: #666; line-height: 1.6; padding-left: 20px;">${data.message}</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>2025 StartinDE - Your trusted partner for studying in Germany</p>
        </div>
      </div>
    </body>
    </html>
  `,

  // Newsletter confirmation
  newsletterConfirm: (name: string | null) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Newsletter Subscription Confirmed</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: white; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #1e40af; margin-bottom: 10px;">You're Subscribed! 🎉</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            ${name ? `Hi ${name},` : 'Hi,'}
          </p>
          <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Vielen Dank für Ihr Abonnement des StartinDE-Newsletters! Sie erhalten regelmäßig Neuigkeiten zum Studieren in Deutschland, Visatipps, Stipendienmöglichkeiten und vieles mehr.
            Cảm ơn bạn đã đăng ký nhận bản tin StartinDE! Bạn sẽ nhận được thông tin cập nhật về việc du học tại Đức, mẹo xin visa, cơ hội học bổng và nhiều hơn nữa.
            Thank you for subscribing to the StartinDE newsletter! You'll receive updates about studying in Germany, visa tips, scholarship opportunities, and more.
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
           Falls Sie kein Abonnement abgeschlossen haben, kontaktieren Sie uns bitte unter info@startin-de.com.
           Nếu bạn chưa đăng ký, vui lòng liên hệ với chúng tôi qua địa chỉ info@startin-de.com
           If you didn't subscribe, please contact us at info@startin-de.com 
          </p>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Beste Grüße,<br>
            Das StartinDE Team
          </p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
          <p>2025 StartinDE - Your trusted partner for studying in Germany</p>
        </div>
      </div>
    </body>
    </html>
  `,

  newsletterAdminAlert: (data: { email: string; ip?: string; userAgent?: string }) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Newsletter Subscriber</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: white; border-radius: 8px; padding: 32px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <h1 style="color: #1e40af; margin-bottom: 16px;">New Newsletter Subscriber</h1>
          <p style="color: #333; font-size: 15px; line-height: 1.6;">A visitor just joined the StartinDE newsletter.</p>
          <div style="margin-top: 20px; padding: 16px; border-radius: 8px; background-color: #f9fafb;">
            <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
            ${data.ip ? `<p style="margin: 8px 0;"><strong>IP Address:</strong> ${data.ip}</p>` : ''}
            ${data.userAgent ? `<p style="margin: 8px 0;"><strong>User Agent:</strong> ${data.userAgent}</p>` : ''}
          </div>
          <p style="color: #666; font-size: 13px; margin-top: 24px;">Reply directly to reach out or add them to your CRM.</p>
        </div>
      </div>
    </body>
    </html>
  `,
}

export async function sendSignupEmail(name: string, email: string, verifyUrl?: string) {
  return sendEmail({
    to: email,
    subject: 'Welcome to StartinDE! 🎓',
    html: emailTemplates.signup(name, verifyUrl),
    cc: [process.env.EMAIL_CONTACT!, process.env.EMAIL_INFO!].filter(Boolean),
  })
}

export async function sendPasswordResetEmail(name: string, email: string, resetUrl: string) {
  return sendEmail({
    to: email,
    subject: 'Reset Your Password - StartinDE',
    html: emailTemplates.passwordReset(name, resetUrl),
  })
}

export async function sendContactNotification(data: { name: string; email: string; phone: string; message: string }) {
  if (!fallbackContactRecipient) {
    console.warn('No contact recipient email configured. Contact notification stored only.')
    return { success: false, error: 'CONTACT_RECIPIENT_MISSING' as const }
  }

  return sendEmail({
    to: fallbackContactRecipient,
    subject: `New Contact: ${data.name}`,
    html: emailTemplates.contactForm(data),
  })
}

export async function sendNewsletterConfirmation(name: string | null, email: string) {
  return sendEmail({
    to: email,
    subject: 'You\'re Subscribed! 🎉',
    html: emailTemplates.newsletterConfirm(name),
    cc: [process.env.EMAIL_INFO!].filter(Boolean),
  })
}

export async function sendNewsletterAdminNotification(data: { email: string; ip?: string | null; userAgent?: string | null }) {
  if (!fallbackContactRecipient) {
    console.warn('No contact recipient email configured. Skipping newsletter admin notification.')
    return { success: false, error: 'CONTACT_RECIPIENT_MISSING' as const }
  }

  return sendEmail({
    to: fallbackContactRecipient,
    subject: `New Newsletter Subscriber: ${data.email}`,
    html: emailTemplates.newsletterAdminAlert({
      email: data.email,
      ip: data.ip ?? undefined,
      userAgent: data.userAgent ?? undefined,
    }),
  })
}
