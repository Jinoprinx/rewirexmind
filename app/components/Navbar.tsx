// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-indigo-600">RewireXmind</span>
        </Link>
        <div className="space-x-4">
          <Link href="/login">
            <span className="text-gray-600 hover:text-indigo-600">Login</span>
          </Link>
          <Link href="/signup">
            <span className="text-gray-600 hover:text-indigo-600">Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
