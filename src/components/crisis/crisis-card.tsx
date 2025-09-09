'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Phone, MessageSquare, ExternalLink } from 'lucide-react'
import { CRISIS_RESOURCES } from '@/lib/crisis-detection'

interface CrisisCardProps {
  className?: string
}

export function CrisisCard({ className }: CrisisCardProps) {
  return (
    <Card className={`border-brand-red/30 bg-brand-red/5 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
          <AlertTriangle className="w-8 h-8 text-brand-red" />
        </div>
        <CardTitle className="text-brand-red font-heading text-xl">
          Crisis Support Needed
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-center text-brand-ink font-medium">
          I detected you may need immediate help. Please reach out to crisis support right away.
        </p>
        
        {/* Primary Phone CTA */}
        <div className="bg-brand-red/10 p-4 rounded-xl border border-brand-red/20 text-center">
          <p className="text-3xl font-bold text-brand-red mb-1">
            988
          </p>
          <p className="text-brand-red font-semibold mb-1">
            Press 1 for Veterans
          </p>
          <p className="text-sm text-brand-slate">
            24/7 confidential crisis support
          </p>
        </div>

        {/* Alternative Methods */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white"
            asChild
          >
            <a href={`sms:${CRISIS_RESOURCES.text}`}>
              <MessageSquare className="w-4 h-4 mr-1" />
              Text {CRISIS_RESOURCES.text}
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white"
            asChild
          >
            <a href={CRISIS_RESOURCES.chat} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              Chat Online
            </a>
          </Button>
        </div>

        <div className="text-center text-xs text-brand-slate pt-2 border-t border-brand-red/20">
          <p>Free, confidential support available 24/7</p>
        </div>
      </CardContent>
    </Card>
  )
}