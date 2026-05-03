'use client'

import { useEffect, useRef, useState } from 'react'

export interface Track {
  title: string
  subtitle: string
  src: string
  color?: string
}

interface AudioPlayerProps {
  track: Track | null
  onClose: () => void
}

export default function AudioPlayer({ track, onClose }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  // When track changes, load & auto-play
  useEffect(() => {
    if (!track) return

    if (audioRef.current) {
      audioRef.current.pause()
    }
    const audio = new Audio(track.src)
    audioRef.current = audio

    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime)
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
    })
    audio.addEventListener('ended', () => setIsPlaying(false))

    audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [track])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current
    if (!audio) return
    const val = Number(e.target.value)
    const newTime = (val / 100) * audio.duration
    audio.currentTime = newTime
    setProgress(val)
  }

  function formatTime(s: number) {
    if (!s || isNaN(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  function handleClose() {
    audioRef.current?.pause()
    setIsPlaying(false)
    onClose()
  }

  if (!track) return null

  const accent = track.color ?? '#7c3aed'

  return (
    <div
      className="fixed bottom-16 left-0 right-0 z-[9998] mx-3 mb-2 rounded-2xl shadow-2xl overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${accent}dd, #0d1b2a)` }}
    >
      {/* Progress bar */}
      <div className="relative h-1 bg-white/20">
        <div
          className="h-full bg-white/80 transition-all"
          style={{ width: `${progress}%` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={handleSeek}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
        />
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        {/* Animated equaliser bars when playing */}
        <div className="flex items-end gap-[3px] w-8 h-7 shrink-0">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                background: 'white',
                height: isPlaying ? `${20 + i * 15}%` : '30%',
                animation: isPlaying ? `eq-bar ${0.5 + i * 0.15}s ease-in-out infinite alternate` : 'none',
                transition: 'height 0.3s',
              }}
            />
          ))}
        </div>

        {/* Track info */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm truncate">{track.title}</p>
          <p className="text-white/60 text-xs truncate">{track.subtitle}</p>
        </div>

        {/* Time */}
        <span className="text-white/60 text-xs shrink-0">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition shrink-0"
        >
          {isPlaying ? (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Close */}
        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition shrink-0"
        >
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes eq-bar {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </div>
  )
}
