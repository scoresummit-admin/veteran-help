import { HeroSection } from '@/components/home/hero-section'
import { QuickActions } from '@/components/home/quick-actions'
import { SearchSection } from '@/components/home/search-section'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <SearchSection />
      <QuickActions />
    </div>
  )
}