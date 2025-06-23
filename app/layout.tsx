import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Across - Safe Transactions, Always | Secure Escrow Platform',
  description: 'Across is the future of secure transactions. Eliminate fraud and build trust with our revolutionary escrow platform. Experience hassle-free escrow protection with AcrossPay and AcrossX.',
  keywords: [
    'escrow',
    'secure transactions',
    'fraud protection',
    'payment platform',
    'financial technology',
    'fintech',
    'safe payments',
    'transaction security',
    'AcrossPay',
    'AcrossX',
    'business payments',
    'consumer protection'
  ],
  authors: [{ name: 'Across Team' }],
  creator: 'Across',
  publisher: 'Across',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Across - Safe Transactions, Always',
    description: 'Revolutionary escrow platform eliminating fraud and building trust in every transaction.',
    url: 'https://across.com',
    siteName: 'Across',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Across - Secure Escrow Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Across - Safe Transactions, Always',
    description: 'Revolutionary escrow platform eliminating fraud and building trust in every transaction.',
    images: ['/twitter-image.jpg'],
    creator: '@AcrossOfficial',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Financial Technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
