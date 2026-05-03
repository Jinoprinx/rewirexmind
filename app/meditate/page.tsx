'use client'

import { useState } from 'react'
import AudioPlayer, { Track } from '@/app/components/AudioPlayer'

interface MeditationSession {
  title: string
  duration: string
  category: string
  image: string
  sound: string
  color: string
}

const sessions: MeditationSession[] = [
  {
    title: 'Morning Calm',
    duration: '10 min',
    category: 'Anxiety Relief',
    image: '/images/medi1.png',
    sound: '/meditation-sounds/medi1.mp3',
    color: '#7c3aed',
  },
  {
    title: 'Deep Sleep',
    duration: '20 min',
    category: 'Sleep',
    image: '/images/medi.png',
    sound: '/meditation-sounds/medi2.mp3',
    color: '#1d4ed8',
  },
  {
    title: 'Forest Breathwork',
    duration: '15 min',
    category: 'Focus & Clarity',
    image: '/images/medi1.png',
    sound: '/meditation-sounds/medi3.mp3',
    color: '#065f46',
  },
  {
    title: 'Ocean Drift',
    duration: '30 min',
    category: 'Deep Relaxation',
    image: '/images/medi.png',
    sound: '/meditation-sounds/medi1.mp3',
    color: '#0e7490',
  },
  {
    title: 'Night Unwind',
    duration: '25 min',
    category: 'Stress Relief',
    image: '/images/medi1.png',
    sound: '/meditation-sounds/medi2.mp3',
    color: '#6d28d9',
  },
]

export default function MeditatePage() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  function handleCardClick(index: number) {
    const s = sessions[index]

    if (playingIndex === index) {
      // Tapping the active card closes the player
      setCurrentTrack(null)
      setPlayingIndex(null)
      return
    }

    setPlayingIndex(index)
    setCurrentTrack({
      title: s.title,
      subtitle: s.category,
      src: s.sound,
      color: s.color,
    })
  }

  function handlePlayerClose() {
    setCurrentTrack(null)
    setPlayingIndex(null)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#1a0533] to-[#0d1b2a] pb-36 pt-6 px-4">
        <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">Meditation</h1>
        <p className="text-purple-300 text-sm mb-6">Tap a session to start your practice</p>

        <div className="grid grid-cols-1 gap-5">
          {sessions.map((session, index) => {
            const isActive = playingIndex === index

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="relative h-56 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform duration-200"
                style={{
                  backgroundImage: `url(${session.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent group-hover:from-black/85 transition-all duration-300" />

                {/* Active glow border */}
                {isActive && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 3px ${session.color}` }}
                  />
                )}

                {/* Pulse ring when playing */}
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="w-20 h-20 rounded-full border-2 border-white/40 animate-ping"
                      style={{ animationDuration: '1.5s' }}
                    />
                  </div>
                )}

                {/* Play / Pause button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-white/30 scale-110 opacity-100'
                        : 'bg-black/30 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
                    }`}
                  >
                    {isActive ? (
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <h2 className="text-xl font-bold leading-tight mb-0.5">{session.title}</h2>
                      <span className="text-xs font-medium text-purple-200 uppercase tracking-wide">
                        {session.category}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {session.duration}
                      </span>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full transition-colors ${
                          isActive ? 'text-white' : 'bg-white/10 text-purple-200'
                        }`}
                        style={isActive ? { background: session.color } : {}}
                      >
                        {isActive ? '▶ Now playing' : '🎵 Tap to play'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <AudioPlayer track={currentTrack} onClose={handlePlayerClose} />
    </>
  )
}