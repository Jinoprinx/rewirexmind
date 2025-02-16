// app/components/BottomNav.tsx
'use client'

import { FaRegUser, FaMoon, FaMusic, FaEllipsisH } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi' // removed the import of GiNightSleep
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function BottomNav() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Ensure client-side only rendering
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navItems = [
    { path: '/', icon: FaRegUser, label: 'For You' },
    { path: '/sleep-stories', icon: FaMoon, label: 'Sleep' },
    { path: '/meditate', icon: GiMeditation, label: 'Meditate' },
    { path: '/music', icon: FaMusic, label: 'Music' },
    { path: '/masterclass', icon: FaEllipsisH, label: 'More' },
  ]

  if (!isMounted) return null // Prevent SSR mismatch

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around p-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center p-2 ${
              pathname === item.path ? 'text-primary' : 'text-gray-500'
            }`}
            prefetch={false} // Disable prefetch for static pages
          >
            <item.icon className="text-xl" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}