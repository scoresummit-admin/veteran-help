// Crisis keyword detection for safety guardrails
const CRISIS_KEYWORDS = [
  'suicide',
  'kill myself',
  'end my life',
  'want to die',
  'hurt myself',
  'self harm',
  'self-harm',
  'harm others',
  'hurt others',
  'kill someone',
  'murder',
  'homicide',
  'crisis',
  'emergency mental health',
  'thoughts of death',
  'suicidal',
  'homicidal'
]

export function detectCrisisLanguage(text: string): boolean {
  const lowerText = text.toLowerCase()
  return CRISIS_KEYWORDS.some(keyword => lowerText.includes(keyword))
}

export const CRISIS_RESOURCES = {
  phone: {
    primary: '988',
    extension: 'Press 1',
    display: 'Dial 988, then Press 1'
  },
  text: '838255',
  chat: 'https://www.veteranscrisisline.net/get-help-now/chat/',
  website: 'https://www.veteranscrisisline.net/'
}