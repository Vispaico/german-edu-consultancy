'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ success: boolean; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      setMessage({
        success: res.ok,
        text: data.message || (res.ok ? 'Subscribed successfully!' : 'Failed to subscribe'),
      })

      if (res.ok) {
        setEmail('')
      }
    } catch {
      setMessage({
        success: false,
        text: 'Failed to subscribe. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-blue-50 py-12 border-t border-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates about studying in Germany, visa tips, scholarship opportunities, and more.
          </p>

          {message && (
            <div className={`mb-4 p-3 rounded-md text-sm ${
              message.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
