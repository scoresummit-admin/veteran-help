// O*NET Military Crosswalk data and utilities
export interface MilitaryOccupation {
  branch: string
  code: string
  title: string
  civilianJobs: CivilianJob[]
}

export interface CivilianJob {
  socCode: string
  title: string
  description: string
  skills: string[]
  matchScore: number
}

// Sample MOS/AFSC data - in production this would come from O*NET API
export const MILITARY_OCCUPATIONS: Record<string, MilitaryOccupation> = {
  '68W': {
    branch: 'Army',
    code: '68W',
    title: 'Combat Medic Specialist',
    civilianJobs: [
      {
        socCode: '31-9092',
        title: 'Medical Assistant',
        description: 'Perform administrative and certain clinical duties under the direction of a physician.',
        skills: ['Patient Care', 'Medical Terminology', 'Vital Signs', 'Emergency Response'],
        matchScore: 95
      },
      {
        socCode: '29-2041',
        title: 'Emergency Medical Technician',
        description: 'Assess injuries, administer emergency medical care, and extricate trapped individuals.',
        skills: ['Emergency Medicine', 'CPR', 'Patient Assessment', 'Medical Equipment'],
        matchScore: 90
      },
      {
        socCode: '31-1131',
        title: 'Nursing Assistant',
        description: 'Provide or assist with basic care or support services for patients.',
        skills: ['Patient Care', 'Health Monitoring', 'Medical Records', 'Communication'],
        matchScore: 85
      }
    ]
  },
  '25B': {
    branch: 'Army',
    code: '25B',
    title: 'Information Technology Specialist',
    civilianJobs: [
      {
        socCode: '15-1232',
        title: 'Computer Network Support Specialist',
        description: 'Analyze, test, troubleshoot, and evaluate existing network systems.',
        skills: ['Network Administration', 'Troubleshooting', 'Hardware Installation', 'Security'],
        matchScore: 92
      },
      {
        socCode: '15-1231',
        title: 'Computer Network Architect',
        description: 'Design and build data communication networks.',
        skills: ['Network Design', 'System Architecture', 'Project Management', 'Technical Documentation'],
        matchScore: 88
      },
      {
        socCode: '15-1244',
        title: 'Network and Computer Systems Administrator',
        description: 'Install, configure, and maintain an organization\'s local area network.',
        skills: ['System Administration', 'Network Security', 'Server Management', 'User Support'],
        matchScore: 90
      }
    ]
  }
}

export function searchMilitaryOccupation(query: string): MilitaryOccupation | null {
  const upperQuery = query.toUpperCase()
  
  // Direct code match
  if (MILITARY_OCCUPATIONS[upperQuery]) {
    return MILITARY_OCCUPATIONS[upperQuery]
  }
  
  // Search by title
  for (const [code, occupation] of Object.entries(MILITARY_OCCUPATIONS)) {
    if (occupation.title.toLowerCase().includes(query.toLowerCase())) {
      return occupation
    }
  }
  
  return null
}

export function generateApprenticeshipLink(socCode: string, location = 'San Antonio, TX'): string {
  const baseUrl = 'https://www.apprenticeship.gov/career-seekers/program-finder'
  const params = new URLSearchParams({
    location,
    occupation: socCode
  })
  return `${baseUrl}?${params.toString()}`
}

export function generateSkillBridgeLink(location = 'JBSA'): string {
  return 'https://skillbridge.osd.mil/company-finder.htm'
}