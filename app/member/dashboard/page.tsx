// app/member/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { api } from '@/src/lib/api';

export default function DashboardPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const data = await api.get('/content/meditation-sessions');
        setSessions(data);
      } catch (error) {
        console.error('Failed to fetch sessions:', error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Meditation Sessions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sessions.map((session) => (
          <div key={session.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{session.title}</h2>
            <p className="text-gray-600">{session.duration} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
}






// export default function Dashboard() {
//     return (
//       <div>
//         <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h2 className="text-lg font-semibold mb-2">Daily Progress</h2>
//             <p className="text-gray-600">5/7 days completed</p>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h2 className="text-lg font-semibold mb-2">Recent Activities</h2>
//             <ul className="text-gray-600 list-disc pl-4">
//               <li>Morning Meditation (10min)</li>
//               <li>Sleep Story (25min)</li>
//             </ul>
//           </div>
//           <div className="bg-white p-6 rounded-xl shadow-sm">
//             <h2 className="text-lg font-semibold mb-2">Achievements</h2>
//             <div className="flex gap-2">
//               <span className="bg-primary text-white px-2 py-1 rounded-full text-sm">
//                 Beginner
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }