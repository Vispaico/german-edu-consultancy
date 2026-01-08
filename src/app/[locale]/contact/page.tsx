'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const t = useTranslations('contact')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || t('form.error'))
        return
      }

      setSubmitted(true)
    } catch {
      alert(t('form.error'))
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t('form.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t('form.successTitle')}</h3>
                  <p className="text-gray-600">{t('form.successDescription')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('form.fields.name')}</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.fields.email')}</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('form.fields.phone')}</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('form.fields.message')}</Label>
                    <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200"
                    disabled={loading}
                  >
                    {loading ? t('form.buttonLoading') : t('form.button')}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">{t('info.location.title')}</h3>
                <p className="text-gray-600">
                  {t('info.location.addressLine1')}<br />
                  {t('info.location.addressLine2')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">{t('info.phone.title')}</h3>
                <p className="text-gray-600">{t('info.phone.value')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">{t('info.email.title')}</h3>
                <p className="text-gray-600">{t('info.email.value')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">{t('info.hours.title')}</h3>
                <p className="text-gray-600">
                  {t('info.hours.weekdays')}<br />
                  {t('info.hours.saturday')}<br />
                  {t('info.hours.sunday')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
