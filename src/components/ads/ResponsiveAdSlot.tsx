'use client'

import { useEffect, useState } from 'react'

import AdBanner from './AdBanner'

type ResponsiveAdSlotProps = {
  label: string
  backgroundClass?: string
  className?: string
}

type AdVariant = 'desktop' | 'mobile'

const DESKTOP_BREAKPOINT = 1024

export function ResponsiveAdSlot({ label, backgroundClass = 'bg-white', className = '' }: ResponsiveAdSlotProps) {
  const [variant, setVariant] = useState<AdVariant | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`)

    const updateVariant = (matches: boolean) => {
      setVariant(matches ? 'desktop' : 'mobile')
    }

    updateVariant(mediaQuery.matches)

    const listener = (event: MediaQueryListEvent) => updateVariant(event.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener)
      return () => mediaQuery.removeEventListener('change', listener)
    }

    mediaQuery.addListener(listener)
    return () => mediaQuery.removeListener(listener)
  }, [])

  if (variant === null) {
    return <section className={`${backgroundClass} py-3 sm:py-4 ${className}`} aria-label={`${label} sponsor placement`} />
  }

  return (
    <section aria-label={`${label} sponsor placement`} className={`${backgroundClass} py-3 sm:py-4 ${className}`}>
      {variant === 'desktop' ? (
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-2xl border border-blue-100/60 bg-white/90 px-3 py-2 shadow-sm">
            <AdBanner key="desktop" title={`${label} desktop banner`} width={728} height={90} className="w-[728px]" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-2xl border border-blue-100/60 bg-white/90 px-2 py-2 shadow-sm">
            <AdBanner key="mobile" title={`${label} mobile banner`} width={320} height={50} className="w-[320px]" />
          </div>
        </div>
      )}
    </section>
  )
}
