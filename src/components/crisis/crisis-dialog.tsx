'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Phone, MessageSquare, ExternalLink, AlertTriangle } from 'lucide-react'
import { CRISIS_RESOURCES } from '@/lib/crisis-detection'

interface CrisisDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CrisisDialog({ open, onOpenChange }: CrisisDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-brand-red/20">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-brand-red" />
          </div>
          <DialogTitle className="text-brand-red font-heading text-xl">
            Crisis Support Available Now
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <p className="text-center text-brand-ink">
            If you're in crisis, trained counselors are standing by to help.
          </p>
          
          {/* Primary Phone Option */}
          <div className="bg-brand-red/5 p-4 rounded-2xl border border-brand-red/20">
            <h3 className="font-semibold text-brand-red mb-2 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Veterans Crisis Line
            </h3>
            <p className="text-2xl font-bold text-brand-red mb-2">
              988 → Press 1
            </p>
            <p className="text-sm text-brand-slate">
              24/7 confidential support from trained counselors
            </p>
          </div>

          {/* Alternative Contact Methods */}
          <div className="grid grid-cols-1 gap-3">
            <Button
              variant="outline"
              className="justify-start h-auto p-4 border-brand-red/30 hover:border-brand-red"
              asChild
            >
              <a href={`sms:${CRISIS_RESOURCES.text}`}>
                <MessageSquare className="w-4 h-4 mr-3 text-brand-red" />
                <div className="text-left">
                  <div className="font-semibold">Text Crisis Line</div>
                  <div className="text-sm text-brand-slate">Text {CRISIS_RESOURCES.text}</div>
                </div>
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="justify-start h-auto p-4 border-brand-red/30 hover:border-brand-red"
              asChild
            >
              <a href={CRISIS_RESOURCES.chat} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-3 text-brand-red" />
                <div className="text-left">
                  <div className="font-semibold">Online Chat</div>
                  <div className="text-sm text-brand-slate">Private chat with counselor</div>
                </div>
              </a>
            </Button>
          </div>

          <div className="text-center text-xs text-brand-slate pt-4 border-t">
            <p>All services are free, confidential, and available 24/7</p>
            <a 
              href={CRISIS_RESOURCES.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:underline"
            >
              Learn more at veteranscrisisline.net
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}