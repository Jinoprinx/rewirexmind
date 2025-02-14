'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MemberNav() {
  const pathname = usePathname()
  
  const links = [
    { path: '/member/dashboard', label: 'Dashboard' },
    { path: '/member/profile', label: 'Profile' },
    { path: '/member/settings', label: 'Settings' },
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href='/'>
              <h1 className="text-xl font-bold text-primary">RewireXmind</h1>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                } px-1 py-2 text-sm font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}