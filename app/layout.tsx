// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
// import dynamic from 'next/dynamic'

// // Dynamically import BottomNav to prevent SSR issues
// const BottomNav = dynamic(() => import('@/components/BottomNav'), {
//   ssr: false,
//   loading: () => <div className="h-16" /> // Loading placeholder
// })

export const metadata: Metadata = {
  title: "RewireXmind",
  description: "Rewire your mind and manifest your dreams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-gray-50">
      <div className="pb-16">{children}</div>
      </body>
    </html>
  );
}
