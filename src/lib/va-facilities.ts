// Types for VA Facilities API
export interface VAFacility {
  id: string
  type: string
  attributes: {
    name: string
    facility_type: string
    classification?: string
    website?: string
    lat: number
    long: number
    address: {
      mailing: object
      physical: {
        zip: string
        city: string
        state: string
        address_1: string
        address_2?: string
        address_3?: string
      }
    }
    phone: {
      main: string
      fax?: string
      mental_health_clinic?: string
      pharmacy?: string
      after_hours?: string
      patient_advocate?: string
      enrollment_coordinator?: string
    }
    hours?: {
      monday?: string
      tuesday?: string
      wednesday?: string
      thursday?: string
      friday?: string
      saturday?: string
      sunday?: string
    }
    services?: {
      other?: string[]
      health?: Array<{
        sl1: string[]
        sl2?: string[]
      }>
    }
  }
}

export interface VAFacilitiesResponse {
  data: VAFacility[]
  meta: {
    pagination: {
      current_page: number
      per_page: number
      total_pages: number
      total_entries: number
    }
  }
}

const VA_API_BASE = process.env.VA_FACILITIES_API_BASE_URL || 'https://api.va.gov/services/va_facilities/v1'

export async function searchVAFacilities(
  zip?: string,
  lat?: number,
  lng?: number,
  facilityType?: string,
  radius = 50
): Promise<VAFacilitiesResponse> {
  const params = new URLSearchParams()
  
  if (zip) {
    params.append('zip', zip)
  }
  if (lat && lng) {
    params.append('lat', lat.toString())
    params.append('long', lng.toString())
  }
  if (facilityType) {
    params.append('type', facilityType)
  }
  
  params.append('per_page', '20')
  params.append('radius', radius.toString())

  const response = await fetch(`${VA_API_BASE}/facilities?${params.toString()}`)
  
  if (!response.ok) {
    throw new Error(`VA Facilities API error: ${response.status}`)
  }

  return response.json()
}

export const FACILITY_TYPES = {
  'va_medical_center': 'VA Medical Center',
  'va_clinic': 'VA Clinic', 
  'vet_center': 'Vet Center',
  'va_benefits_facility': 'VA Benefits Office',
  'va_cemetery': 'VA Cemetery'
}

export function getFacilityTypeDisplay(type: string): string {
  return FACILITY_TYPES[type as keyof typeof FACILITY_TYPES] || type
}