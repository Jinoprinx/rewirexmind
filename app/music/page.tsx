// pages/music.js
import { FaRegUser, FaMoon, FaMusic, FaEllipsisH } from 'react-icons/fa';
import { GiSoundWaves } from 'react-icons/gi';

export default function MusicPage() {
  const soundscapes = [
    { title: 'How Do You Sleep?', category: 'Sleep Mix', duration: '45min' },
    { title: 'Sam Smith', category: 'Healing Piano', duration: '32min' },
    { title: 'Cascade Falls', category: 'Nature Sounds', duration: '52min' },
    { title: 'Ocean Waves', category: 'Ambient Noise', duration: '60min' },
    { title: 'Forest Night', category: 'Nature Sounds', duration: '48min' },
    { title: 'Zen Garden', category: 'Meditation', duration: '41min' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      {/* Header */}
      <header className="p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Music to help you focus,<br />
          <span className="text-indigo-600">relax and sleep</span>
        </h1>
        <p className="text-gray-500 mt-2">Music</p>
      </header>

      {/* Main Content */}
      <main className="p-6 flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          AllMyFeaturedSoundscapes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {soundscapes.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                </div>
                <span className="text-indigo-600 font-medium">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full">
        <div className="flex justify-around p-4">
          {[
            { icon: FaRegUser, label: 'For You' },
            { icon: FaMoon, label: 'Sleep' },
            { icon: GiSoundWaves, label: 'Meditate' },
            { icon: FaMusic, label: 'Music', active: true },
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

      {/* Floating Player */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-center">
        <div className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-4">
          <span className="text-sm">Now Playing: Healing Piano</span>
          <button className="hover:text-indigo-200">⏸️</button>
        </div>
      </div>
    </div>
  );
}