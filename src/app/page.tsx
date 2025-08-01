import { LandingPage } from '@/templates/landing-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site.',
  description: 'Sell your products as an affiliate in only one place',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.',
    description: 'Sell your products as an affiliate in only one place',
    url: 'https://blog-next-page-routes.vercel.app/og-image.jpg',
    siteName: 'Site.',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://blog-next-page-routes.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.',
      },
    ],
  },
}

export default function Homepage() {
  return <LandingPage />
}
