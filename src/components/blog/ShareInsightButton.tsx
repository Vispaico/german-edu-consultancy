'use client'

import { useEffect, useState } from 'react'

import { Facebook, Link2, Linkedin, Mail, MessageCircle, Send, Share2, Twitter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type ShareInsightButtonProps = {
  title: string
  className?: string
}

type Status = 'idle' | 'copied' | 'shared' | 'error'

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  textarea.style.left = '-9999px'

  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()

  document.execCommand('copy')
  document.body.removeChild(textarea)
}

export function ShareInsightButton({ title, className }: ShareInsightButtonProps) {
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (status === 'idle') return
    const timer = window.setTimeout(() => setStatus('idle'), 2000)
    return () => window.clearTimeout(timer)
  }, [status])

  const label =
    status === 'copied'
      ? 'Link copied'
      : status === 'shared'
        ? 'Shared'
        : status === 'error'
          ? 'Could not share'
          : 'Share'

  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const shareLinks = (url: string) => {
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)
    const emailSubject = encodeURIComponent(title)
    const emailBody = encodeURIComponent(`I thought you might like this:\n\n${url}`)
    const whatsappText = encodeURIComponent(`${title}\n${url}`)
    const tweetText = encodeURIComponent(title)

    return {
      email: `mailto:?subject=${emailSubject}&body=${emailBody}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${whatsappText}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" className={className} aria-live="polite">
          <Share2 className="mr-2 size-4" aria-hidden />
          {label}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-60 bg-white/95 text-slate-900 shadow-xl ring-1 ring-slate-200/70 backdrop-blur"
      >
        <DropdownMenuItem
          onSelect={async (event) => {
            event.preventDefault()
            try {
              await copyToClipboard(window.location.href)
              setStatus('copied')
            } catch {
              setStatus('error')
            }
          }}
        >
          <Link2 className="size-4" aria-hidden />
          Copy link
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            const url = window.location.href
            window.location.href = shareLinks(url).email
          }}
        >
          <Mail className="size-4" aria-hidden />
          Email
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            const url = window.location.href
            openShareWindow(shareLinks(url).linkedin)
          }}
        >
          <Linkedin className="size-4" aria-hidden />
          LinkedIn
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            const url = window.location.href
            openShareWindow(shareLinks(url).x)
          }}
        >
          <Twitter className="size-4" aria-hidden />
          X (Twitter)
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            const url = window.location.href
            openShareWindow(shareLinks(url).facebook)
          }}
        >
          <Facebook className="size-4" aria-hidden />
          Facebook
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            const url = window.location.href
            openShareWindow(shareLinks(url).whatsapp)
          }}
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault()
            const url = window.location.href
            openShareWindow(shareLinks(url).telegram)
          }}
        >
          <Send className="size-4" aria-hidden />
          Telegram
        </DropdownMenuItem>

        {canNativeShare && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={async (event) => {
                event.preventDefault()
                try {
                  await navigator.share({ title, url: window.location.href })
                  setStatus('shared')
                } catch (error) {
                  const maybeError = error as { name?: string } | null
                  if (maybeError?.name === 'AbortError') return
                  setStatus('error')
                }
              }}
            >
              <Share2 className="size-4" aria-hidden />
              More…
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
