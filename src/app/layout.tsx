import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import '@/components/ProfileCard.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Edu Consultancy',
  description: 'Vietnam-focused guidance for studying, working, and living in Germany.',
  other: {
    'google-adsense-account': 'ca-pub-3279949468229929',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3279949468229929"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
