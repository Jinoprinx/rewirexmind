import { ReactNode } from 'react'
import AuthGuard from '../components/AuthGuard'
import MemberNav from '../components/MemberNav'

export default function MemberLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        {/* <MemberNav /> */}
        <main className="p-6 pb-20">{children}</main>
      </div>
    </AuthGuard>
  )
}