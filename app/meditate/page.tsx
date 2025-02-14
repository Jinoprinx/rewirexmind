import { MeditationSession } from '@/types'

export default function MeditatePage() {
  const sessions: MeditationSession[] = [
    { 
      title: 'Morning Calm', 
      duration: '10min', 
      category: 'Anxiety Relief',
      image: '/images/medi1.png' // Add image paths
    },
    { 
      title: 'Deep Sleep', 
      duration: '20min', 
      category: 'Sleep',
      image: '/images/medi.png'
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Meditation</h1>
      <div className="grid grid-cols-1 gap-6">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="relative h-64 rounded-2xl shadow-2xl overflow-hidden group"
            style={{
              backgroundImage: `url(${session.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            
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
          </div>
        ))}
      </div>
    </div>
  )
}