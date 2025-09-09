import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">VetLink SA</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Connecting San Antonio veterans and families with trusted resources for benefits, careers, and support.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Data Sources</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="https://developer.va.gov" className="hover:text-white">VA Facilities API</Link></li>
              <li><Link href="https://www.onetcenter.org" className="hover:text-white">O*NET Interest Profiler</Link></li>
              <li><Link href="https://www.apprenticeship.gov" className="hover:text-white">Apprenticeship.gov</Link></li>
              <li><Link href="https://skillbridge.osd.mil" className="hover:text-white">SkillBridge</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Local Partners</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="https://www.bexar.org/585/Military-Veterans-Services" className="hover:text-white">Bexar County MVSC</Link></li>
              <li><Link href="https://www.sanantonio.gov/MVAD" className="hover:text-white">City MVAD</Link></li>
              <li><Link href="https://www.tvc.texas.gov" className="hover:text-white">Texas Veterans Commission</Link></li>
              <li><Link href="https://www.twc.texas.gov/veterans" className="hover:text-white">TWC Veterans</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            Built for the Presidential AI Challenge • 
            <Link href="/about" className="hover:text-white ml-1">Privacy & Attributions</Link> • 
            <span className="ml-1">No personal data stored</span>
          </p>
        </div>
      </div>
    </footer>
  )
}