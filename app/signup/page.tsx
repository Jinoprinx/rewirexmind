// pages/signup.js
import Link from 'next/link';
import { FaGoogle, FaApple } from 'react-icons/fa';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
        <Link href='/'>
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">R</span>
          </div>
        </Link>
        </div>

        {/* Slogan */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-light text-gray-800 mb-2">
            Sleep more. <br />
            Stress less.
          </h1>
          <p className="text-indigo-600 font-medium">Live better.</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Re-enter Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        {/* Social Login */}
        <div className="mt-8">
          <p className="text-center text-gray-600 text-sm mb-4">
            Or signup with
          </p>
          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200">
              <FaGoogle className="text-gray-700" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-200">
              <FaApple className="text-gray-700" />
            </button>
          </div>
          <div className="text-center text-sm text-gray-600 mt-4">
            <p className="mt-4 text-center">
               Already have an account?{" "}
               <Link href="/login" className="text-indigo-600 hover:text-indigo-600">
                 Sign In
               </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}