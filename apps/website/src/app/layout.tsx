import '@/globals.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'

import { Button } from '@/components/ui/button'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col" suppressHydrationWarning>
        <main className="flex-1">
          <div className="mx-2 my-16 max-w-5xl border-x border-t bg-white lg:mx-auto">{children}</div>
        </main>
        <footer className="border-t bg-gray-100">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm lg:px-0">
            <p>
              Made by{' '}
              <Button variant="link" size="link" asChild>
                <a href="https://onur.dev" target="_blank" rel="noopener noreferrer">
                  Onur
                </a>
              </Button>
              .
            </p>
            <p className="text-gray-500">
              Inspired by{' '}
              <Button variant="link" size="link" className="text-inherit" asChild>
                <a href="https://vercel.com/geist/gauge?ref=gauge.onur.dev" target="_blank" rel="noopener">
                  Geist Design System
                </a>
              </Button>{' '}
              from the Vercel team and by{' '}
              <Button variant="link" size="link" className="text-inherit" asChild>
                <a href="https://geist-gauge.vercel.app?ref=gauge.onur.dev" target="_blank" rel="noopener noreferrer">
                  geist-gauge
                </a>
              </Button>{' '}
              from Ajay.
            </p>
          </div>
        </footer>
        <TailwindIndicator />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Gauge',
  description: 'An aesthetic and customizable circular visual component for React.',
  metadataBase: new URL('https://gauge.onur.dev'),
  openGraph: {
    title: 'Gauge',
    description: 'An aesthetic and customizable circular visual component for React.',
    url: 'https://gauge.onur.dev',
    siteName: 'Gauge',
    locale: 'en-US',
    type: 'website'
  },
  keywords: ['react', 'gauge', 'circular', 'progress', 'chart', 'percentage', 'progress bar', 'progress circle', 'pie'],
  twitter: {
    site: '@onurschu',
    creator: '@onurschu',
    card: 'summary_large_image'
  }
}

export const viewport: Viewport = {
  themeColor: 'white',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1
}
