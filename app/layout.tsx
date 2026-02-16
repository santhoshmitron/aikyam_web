import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aikyam — Sacred Digital Harmony',
  description: 'Aikyam unites temples, priests, and devotees through authentic, priest-led digital darshans and poojas. Experience sacred digital harmony on Android & iOS.',
  keywords: 'Aikyam, temples, priests, darshan, pooja, spiritual, Hindu, India, divine connection',
  creator: 'Aikyam',
  publisher: 'Aikyam',
  metadataBase: new URL('https://aikyam.in'),
  openGraph: {
    title: 'Aikyam — Sacred Digital Harmony',
    description: 'Experience priest-led digital darshans and personalized poojas with verified priests.',
    url: 'https://aikyam.in',
    siteName: 'Aikyam',
    images: [
      {
        url: 'https://aikyam.in/logo.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aikyam — Sacred Digital Harmony',
    description: 'Experience priest-led digital darshans and personalized poojas with verified priests.',
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
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
