import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  FileText, 
  Briefcase, 
  Users, 
  Phone,
  ExternalLink 
} from 'lucide-react'

const QUICK_ACTIONS = [
  {
    title: 'Find VA Facilities',
    description: 'Locate Vet Centers, VAMCs, and clinics near you',
    icon: MapPin,
    href: '/facilities',
    color: 'text-brand-blue'
  },
  {
    title: 'Benefits & Claims',
    description: 'Disability claims, GI Bill, and compensation help',
    icon: FileText,
    href: '/benefits',
    color: 'text-brand-navy'
  },
  {
    title: 'Career Transition',
    description: 'Military skills to civilian jobs, apprenticeships',
    icon: Briefcase,
    href: '/careers',
    color: 'text-brand-blue'
  },
  {
    title: 'Local Resources',
    description: 'San Antonio and Bexar County veteran services',
    icon: Users,
    href: '/resources',
    color: 'text-brand-navy'
  }
]

const EMERGENCY_CONTACTS = [
  {
    title: 'Veterans Crisis Line',
    phone: '988 → Press 1',
    description: '24/7 crisis support',
    urgent: true
  },
  {
    title: 'Bexar County MVSC',
    phone: '(210) 335-2273',
    description: 'Local veterans services'
  },
  {
    title: 'JBSA Family Readiness',
    phone: '(210) 671-1110',
    description: 'Military family support'
  }
]

export function QuickActions() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Quick Action Cards */}
      <div>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-brand-ink mb-8 text-center">
          Popular Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon
            return (
              <Card key={action.title} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center mb-3">
                    <Icon className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <CardTitle className="text-lg font-heading">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-brand-slate text-sm mb-4 leading-relaxed">
                    {action.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={action.href}>
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div>
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-brand-ink mb-8 text-center">
          Important Phone Numbers
        </h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {EMERGENCY_CONTACTS.map((contact) => (
            <Card key={contact.title} className={`${contact.urgent ? 'border-brand-red/30 bg-brand-red/5' : 'border-brand-slate/20'}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`font-semibold ${contact.urgent ? 'text-brand-red' : 'text-brand-ink'}`}>
                      {contact.title}
                    </h3>
                    <p className={`text-lg font-bold ${contact.urgent ? 'text-brand-red' : 'text-brand-navy'} mb-1`}>
                      {contact.phone}
                    </p>
                    <p className="text-xs text-brand-slate">
                      {contact.description}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost" className="ml-2">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}