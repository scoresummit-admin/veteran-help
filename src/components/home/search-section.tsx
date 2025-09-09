'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Search } from 'lucide-react'
import { detectCrisisLanguage } from '@/lib/crisis-detection'
import { CrisisCard } from '@/components/crisis/crisis-card'

export function SearchSection() {
  const [query, setQuery] = useState('')
  const [showCrisis, setShowCrisis] = useState(false)

  const handleSearch = () => {
    if (detectCrisisLanguage(query)) {
      setShowCrisis(true)
      return
    }
    
    // Handle normal search logic here
    console.log('Searching for:', query)
  }

  const handleInputChange = (value: string) => {
    setQuery(value)
    setShowCrisis(false)
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      {showCrisis ? (
        <CrisisCard className="max-w-md mx-auto" />
      ) : (
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-brand-ink mb-4">
            What kind of help do you need?
          </h2>
          <p className="text-brand-slate mb-8">
            Search VA facilities, local resources, or ask about benefits and careers
          </p>
          
          <div className="flex gap-2 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-brand-slate" />
              <Input
                value={query}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Find help near you (e.g., Vet Center, housing, SkillBridge)"
                className="pl-10 py-3 text-lg"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="bg-brand-red hover:bg-brand-red/90 px-6 py-3"
            >
              Search
            </Button>
          </div>
          
          <Button variant="outline" className="mb-8">
            <MapPin className="w-4 h-4 mr-2" />
            Use my location
          </Button>
        </div>
      )}
    </section>
  )
}