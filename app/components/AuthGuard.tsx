'use client';

// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

// export default function AuthGuard({ children }: { children: React.ReactNode }) {
//   const router = useRouter()
  
//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = document.cookie.includes('auth-token')
//       if (!token) {
//         router.push('/login')
//       }
//     }
    
//     checkAuth()
//   }, [router])

//   return <>{children}</>
// }


import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {useAuthStore} from '@/src/store/auth';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : null;
}