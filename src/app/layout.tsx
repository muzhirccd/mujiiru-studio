import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Akuma Studio — Illustration & Visual Art',
  description: 'Independent illustrator specializing in anime-inspired fantasy artwork, VTuber assets, and visual storytelling.',
  keywords: ['illustrator', 'anime art', 'VTuber assets', 'fantasy illustration', 'commission'],
  openGraph: {
    title: 'Akuma Studio',
    description: 'Bringing stories to life through illustration.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
