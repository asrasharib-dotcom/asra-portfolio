import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Asra Sharib — Social Media Manager & Content Strategist',
    template: '%s — Asra Sharib',
  },
  description:
    'Asra Sharib is a Social Media Manager and Content Strategist helping brands communicate, connect and grow through strategic content, creative campaigns and AI-powered videos.',
  keywords: [
    'Social Media Manager',
    'Content Strategist',
    'AI Video Creation',
    'Meta Ads',
    'Content Calendars',
    'Asra Sharib',
  ],
  openGraph: {
    title: 'Asra Sharib — Creative Ideas. Strategic Impact.',
    description:
      'Social Media Manager and Content Strategist. Social media strategy, content creation and AI-powered videos.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
