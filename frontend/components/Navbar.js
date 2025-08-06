import Link from 'next/link'
import React from 'react'
import { FaHeart } from "react-icons/fa"

const Navbar = () => {
  return (
    <header className="px-6 lg:px-8 h-16 flex items-center border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-0 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <FaHeart className="h-3 w-3 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900 tracking-tight ">WellFlow</span>
        </Link>
        <nav className="ml-auto flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#session-type" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Session Type
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            How it Works
          </a>
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
          <Link href="/signup" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 px-4 py-2 rounded-md flex items-center justify-center">
            Get Started
          </Link>
        </nav>
      </header>
  )
}

export default Navbar