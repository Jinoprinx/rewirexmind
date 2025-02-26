'use client';

import Card from "@/app/components/card";

export default function ProfilePage() {
  const user = true  //useAuthStore((state) => state.user);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {user ? (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
          <Card
             href="/"
             mainImage="/images/profile.png"
             title="Your Profile"
             description="You can view and update your profile here."
             profileImage="/images/recent.png"
          />
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p>User Email</p> {/*user.email*/}
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