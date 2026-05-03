// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import BottomNav from "./components/BottomNav";

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
      <BottomNav />
      </body>
    </html>
  );
}
