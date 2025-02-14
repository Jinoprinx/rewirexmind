'use client';
import {useAuthStore} from '@/src/store/auth';

export default function SettingsPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="p-6">
      {isAuthenticated ? (
        <div className="space-y-8">
          <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Notification Preferences</h2>
            {/* Add notification settings */}
          </div>
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-lg font-semibold mb-2">Privacy Settings</h2>
            {/* Add privacy settings */}
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <p className="text-gray-600">Please sign in to manage settings.</p>
        </div>
      )}
    </div>
  );
}