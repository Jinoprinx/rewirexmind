// app/masterclass/page.tsx
import { FaRegUser, FaMoon, FaMusic, FaEllipsisH, FaDownload } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';

export default function MasterclassPage() {
  const classes = [
    { 
      title: 'Embracing Stillness',
      expert: 'Dr. Michael Breus',
      duration: '1h 15min',
      offline: true
    },
    {
      title: 'Better Sleep',
      expert: 'Dr. Rebecca Robbins',
      duration: '45min',
      offline: false
    },
    {
      title: 'Mindful Living',
      expert: 'Jon Kabat-Zinn',
      duration: '2h 10min',
      offline: true
    },
    {
      title: 'Stress Management',
      expert: 'Dr. Elissa Epel',
      duration: '55min',
      offline: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      {/* Header */}
      <header className="p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Masterclasses taught by<br />
          <span className="text-indigo-600">world-renowned experts</span>
        </h1>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-lg font-semibold text-gray-700">Calm Masterclass</h2>
          <span className="text-sm text-gray-500">My</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Available Offline
          </h2>
          <FaDownload className="text-indigo-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{cls.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{cls.expert}</p>
                </div>
                {cls.offline && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Offline
                  </span>
                )}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-indigo-600 text-sm">{cls.duration}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full">
        <div className="flex justify-around p-4">
          {[
            { icon: FaRegUser, label: 'For You', active: true },
            { icon: FaMoon, label: 'Sleep' },
            { icon: GiMeditation, label: 'Meditate' },
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
    </div>
  );
}