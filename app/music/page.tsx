'use client'

import { useState } from 'react'
import AudioPlayer, { Track } from '@/app/components/AudioPlayer'

interface Song {
  title: string
  artist: string
  category: string
  duration: string
  src: string
  color: string
}

const songs: Song[] = [
  {
    title: 'How Do You Sleep?',
    artist: 'Sam Smith',
    category: 'Sleep Mix',
    duration: '3:33',
    src: '/music/song1.mp3',
    color: '#7c3aed',
  },
  {
    title: 'Healing Piano',
    artist: 'Ambient Studio',
    category: 'Relaxation',
    duration: '4:12',
    src: '/music/song2.mp3',
    color: '#1d4ed8',
  },
  {
    title: 'Cascade Falls',
    artist: 'Nature Sounds',
    category: 'Nature Sounds',
    duration: '5:20',
    src: '/music/song3.mp3',
    color: '#065f46',
  },
  {
    title: 'Ocean Waves',
    artist: 'Deep Blue',
    category: 'Ambient Noise',
    duration: '6:00',
    src: '/music/song4.mp3',
    color: '#0e7490',
  },
  {
    title: 'Forest Night',
    artist: 'Woodland Sounds',
    category: 'Nature Sounds',
    duration: '4:48',
    src: '/music/song5.mp3',
    color: '#166534',
  },
  {
    title: 'Zen Garden',
    artist: 'Meditation Co.',
    category: 'Meditation',
    duration: '4:01',
    src: '/music/song6.mp3',
    color: '#92400e',
  },
  {
    title: 'Starlight Drift',
    artist: 'Cosmos Audio',
    category: 'Sleep Mix',
    duration: '3:50',
    src: '/music/song7.mp3',
    color: '#312e81',
  },
]

const categoryColors: Record<string, string> = {
  'Sleep Mix': 'bg-purple-500/20 text-purple-300',
  'Relaxation': 'bg-blue-500/20 text-blue-300',
  'Nature Sounds': 'bg-emerald-500/20 text-emerald-300',
  'Ambient Noise': 'bg-cyan-500/20 text-cyan-300',
  'Meditation': 'bg-amber-500/20 text-amber-300',
}

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  function handleSongClick(index: number) {
    const song = songs[index]

    if (playingIndex === index) {
      setCurrentTrack(null)
      setPlayingIndex(null)
      return
    }

    setPlayingIndex(index)
    setCurrentTrack({
      title: song.title,
      subtitle: song.artist,
      src: song.src,
      color: song.color,
    })
  }

  function handlePlayerClose() {
    setCurrentTrack(null)
    setPlayingIndex(null)
  }

  const categories = Array.from(new Set(songs.map((s) => s.category)))

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#1a1045] to-[#0d1b2a] pb-40 pt-6">
        {/* Header */}
        <header className="px-5 pb-4 border-b border-white/10">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Music
          </h1>
          <p className="text-indigo-300 text-sm mt-1">
            Focus, relax &amp; sleep — tap any track to play
          </p>
        </header>

        {/* Category filter pills */}
        <div className="flex gap-2 overflow-x-auto px-5 py-4 no-scrollbar">
          <button
            onClick={() => {}}
            className="shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/70 hover:bg-white/20 transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Track list */}
        <div className="px-4 flex flex-col gap-3">
          {songs.map((song, index) => {
            const isActive = playingIndex === index

            return (
              <div
                key={index}
                onClick={() => handleSongClick(index)}
                className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? 'bg-white/15 shadow-lg'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                style={isActive ? { boxShadow: `0 0 0 1.5px ${song.color}80` } : {}}
              >
                {/* Track number / animated bars */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${song.color}33` }}
                >
                  {isActive ? (
                    <div className="flex items-end gap-[2px] h-5 w-5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            background: song.color,
                            animation: `eq-bar ${0.4 + i * 0.2}s ease-in-out infinite alternate`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <span className="text-white/40 text-sm font-bold">{index + 1}</span>
                  )}
                </div>

                {/* Song info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-semibold text-sm truncate"
                    style={{ color: isActive ? song.color : 'white' }}
                  >
                    {song.title}
                  </p>
                  <p className="text-white/50 text-xs truncate mt-0.5">{song.artist}</p>
                </div>

                {/* Category badge */}
                <span
                  className={`hidden sm:block shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    categoryColors[song.category] ?? 'bg-white/10 text-white/50'
                  }`}
                >
                  {song.category}
                </span>

                {/* Duration / Play icon */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-white/40 text-xs">{song.duration}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
                      isActive ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/15'
                    }`}
                  >
                    {isActive ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <AudioPlayer track={currentTrack} onClose={handlePlayerClose} />

      <style>{`
        @keyframes eq-bar {
          from { height: 30%; }
          to   { height: 100%; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  )
}