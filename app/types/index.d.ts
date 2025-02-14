interface MeditationSession {
    title: string
    duration: string
    category: string
  }
  
  interface SleepStory {
    title: string
    duration: string
    category: string
    offline?: boolean
  }
  
  interface MusicTrack {
    title: string
    artist: string
    duration: string
    category: string
  }

  interface Card {
    title: string
    description: string
    coverImage: string
    profileImage?: string
  }