import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  // Format as (XXX) XXX-XXXX
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  
  return phone
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959 // Radius of the Earth in miles
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const d = R * c // Distance in miles
  return Math.round(d * 10) / 10
}

function deg2rad(deg: number): number {
  return deg * (Math.PI/180)
}

export function isBusinessHours(hours: string): boolean {
  // Simple check - in a real app this would be more sophisticated
  const now = new Date()
  const currentHour = now.getHours()
  const currentDay = now.getDay()
  
  // Basic business hours assumption: Mon-Fri 8am-5pm
  if (currentDay === 0 || currentDay === 6) return false
  return currentHour >= 8 && currentHour < 17
}