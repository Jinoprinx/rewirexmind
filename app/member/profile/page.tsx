'use client';

// export default function Profile() {
//     return (
//       <div>
//         <h1 className="text-2xl font-bold mb-4">Welcome to Your Profile Page</h1>
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


import {useAuthStore} from '@/src/store/auth';

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user ? (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p>{user.email}</p>
          {/* Add more user info */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">Update Profile</h2>
            <form className="mt-4 space-y-4">
              {/* Input fields */}
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <p className="text-gray-600">Please sign in to view your profile.</p>
        </div>
      )}
    </div>
  );
}