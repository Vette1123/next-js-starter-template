import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Providers } from '@/providers/provider'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { TailwindIndicator } from '@/components/tailwind-indicator'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'flex h-screen flex-col font-sans antialiased',
            fontSans.variable
          )}
        >
          <Providers>
            <SiteHeader />
            <div className="flex-1 overflow-auto py-4">{children}</div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  )
}
