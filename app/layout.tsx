import React from "react"
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/** Self-hosted via fontsource (build works without Google Fonts network fetch). */
const inter = localFont({
  src: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  variable: '--font-body',
  display: 'swap',
  weight: '100 900',
})

const sora = localFont({
  src: '../node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2',
  variable: '--font-sora',
  display: 'swap',
  weight: '100 800',
})

export const metadata: Metadata = {
  title: 'Aikyam',
  description: 'Aikyam a new age faith-tech platform',
  keywords: 'Aikyam, spiritual, Hindu, India',
  creator: 'Aikyam',
  publisher: 'Aikyam',
  metadataBase: new URL('https://shriaikyam.com'),
  openGraph: {
    title: 'Aikyam ',
    description: 'Aikyam a new age faith-tech platform.',
    url: 'https://www.shriaikyam.com',
    siteName: 'Aikyam',
    images: [
      {
        url: 'https://www.shriaikyam.com/logo.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aikyam',
    description: 'Aikyam a new age faith-tech platform.',
  },
  icons: {
    icon: [
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.jpeg',
  },
  generator: 'v0.app'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
