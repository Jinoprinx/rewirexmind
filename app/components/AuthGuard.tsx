'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  
  useEffect(() => {
    const checkAuth = async () => {
      const token = document.cookie.includes('auth-token')
      if (!token) {
        router.push('/login')
      }
    }
    
    checkAuth()
  }, [router])

  return <>{children}</>
}