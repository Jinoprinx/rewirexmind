export interface MeditationSession {
    title: string
    duration: string
    category: string
    image?: string
    href?: string
  }
  
  export interface SleepStory {
    title: string
    duration: string
    category: string
    offline?: boolean
  }
  
  export interface MusicTrack {
    title: string
    artist: string
    duration: string
    category: string
  }

  export interface Card {
    title: string
    description: string
    coverImage: string
    profileImage?: string
  }