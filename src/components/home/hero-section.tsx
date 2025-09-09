import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-brand-navy to-brand-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6 leading-tight">
            Find veteran support in San Antonio, fast.
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Search trusted VA and local resources for benefits, careers, and well-being.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 flex-1 max-w-md">
              <input
                type="text"
                placeholder="Find help near you (e.g., Vet Center, housing, SkillBridge)"
                className="w-full bg-transparent text-white placeholder-white/70 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <button className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Search
            </button>
          </div>
          
          <p className="text-sm text-white/70 mt-4">
            Try: "78208", "Vet Center", "disability claims", "Army 68W jobs"
          </p>
        </div>
      </div>
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-r from-brand-navy/80 to-brand-blue/80"></div>
        {/* In production, would use San Antonio skyline image */}
      </div>
    </section>
  )
}