import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { QueryProvider } from '@/components/providers/query-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: 'VetLink SA - Veterans Help Center',
  description: 'Find veteran support in San Antonio, fast. Search trusted VA and local resources for benefits, careers, and well-being.',
  keywords: 'veterans, San Antonio, VA facilities, benefits, careers, military transition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen bg-brand-bg">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <QueryProvider>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}