import { MeditationSession } from '@/types'
import { FaRegUser, FaMoon, FaMusic, FaEllipsisH } from 'react-icons/fa'
import { GiNightSleep } from 'react-icons/gi'
import Link from 'next/link'

export default function SleepStoriesPage() {
  const sessions: MeditationSession[] = [
    { 
      title: 'Healthy Night nap', 
      duration: '10min', 
      category: 'Anxiety Relief',
      image: '/images/sleep.png',
      href: '/sleep-stories/healthy-night-nap' // Add unique href for each session
    },
    { 
      title: 'Deep Sleep for a Healthy Body', 
      duration: '20min', 
      category: 'Sleep',
      image: '/images/story8.png',
      href: '/sleep-stories/deep-sleep'
    },
    { 
      title: 'Managing Office Stress', 
      duration: '30min', 
      category: 'Sleep',
      image: '/images/consult1.png',
      href: '/sleep-stories/office-stress'
    },
    { 
      title: '3 Steps to Healthy Sleep', 
      duration: '15min', 
      category: 'Sleep',
      image: '/images/medi.png',
      href: '/sleep-stories/healthy-sleep'
    },
    { 
      title: 'Living in Sleep-Denial', 
      duration: '20min', 
      category: 'Sleep',
      image: '/images/story4.png',
      href: '/sleep-stories/sleep-denial'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      {/* Header */}
      <header className="p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Sleep Stories to help<br />
          <span className="text-indigo-600">you fall asleep</span>
        </h1>
        <p className="text-gray-500 mt-2">SLEEP STORIES</p>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-600 mb-4">My Recommended Fiction</h1>
        <div className="grid grid-cols-1 gap-6">
          {sessions.map((session, index) => (
            <Link
              key={index}
              href={session.href}
              className="block relative h-64 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              style={{
                backgroundImage: `url(${session.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-1">{session.title}</h2>
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-gray-200">
                    {session.category}
                  </span>
                  <span className="text-lg font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {session.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full">
        <div className="flex justify-around p-4">
          {[
            { icon: FaRegUser, label: 'For You' },
            { icon: FaMoon, label: 'Sleep', active: true },
            { icon: GiNightSleep, label: 'Meditate' },
            { icon: FaMusic, label: 'Music' },
            { icon: FaEllipsisH, label: 'More' },
          ].map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center space-y-1 ${
                item.active ? 'text-indigo-600' : 'text-gray-500'
              }`}
            >
              <item.icon className="text-xl" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4">
        <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
          <GiNightSleep className="text-2xl" />
        </button>
      </div>
    </div>
  )
}