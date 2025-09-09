'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, AlertTriangle } from 'lucide-react'
import { CrisisDialog } from '@/components/crisis/crisis-dialog'
import { useState } from 'react'

export function Header() {
  const [crisisOpen, setCrisisOpen] = useState(false)

  return (
    <>
      <header className="bg-brand-card border-b border-brand-slate/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VL</span>
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg text-brand-ink">VetLink SA</h1>
                <p className="text-xs text-brand-slate -mt-1">Veterans Help Center</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/facilities" className="text-brand-slate hover:text-brand-navy transition-colors">
                Resources
              </Link>
              <Link href="/benefits" className="text-brand-slate hover:text-brand-navy transition-colors">
                Benefits & Careers
              </Link>
              <Link href="/about" className="text-brand-slate hover:text-brand-navy transition-colors">
                About
              </Link>
            </nav>

            {/* Crisis Button */}
            <Button
              variant="outline"
              onClick={() => setCrisisOpen(true)}
              className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-200 ml-4"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Crisis Support</span>
              <span className="sm:hidden">Crisis</span>
            </Button>
          </div>

          {/* Crisis Banner */}
          <div className="py-2 bg-brand-red/10 border-t border-brand-red/20">
            <p className="text-sm text-brand-red text-center">
              <Phone className="w-4 h-4 inline mr-1" />
              In crisis? <strong>Dial 988, then Press 1</strong> (Veterans) • Text 838255 • 
              <Button
                variant="link"
                onClick={() => setCrisisOpen(true)}
                className="text-brand-red hover:text-brand-red/80 p-0 h-auto font-normal underline ml-1"
              >
                Chat online
              </Button>
            </p>
          </div>
        </div>
      </header>

      <CrisisDialog open={crisisOpen} onOpenChange={setCrisisOpen} />
    </>
  )
}