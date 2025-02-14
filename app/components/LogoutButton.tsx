// components/LogoutButton.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="text-gray-600 hover:text-primary transition-colors"
    >
      Log Out
    </button>
  )
}