import React from 'react'
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <header className="w-full flex items-center px-4 py-4 md:px-6 lg:px-8 bg-white shadow-sm">
            <Link href="/" className="flex items-center group">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FaHeart className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-2xl font-semibold text-gray-900">WellFlow</span>
            </Link>

            <nav className="ml-auto flex items-center gap-8">
                <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    Features
                </a>
                <a href="#session-type" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    Session Type
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    How it Works
                </a>

                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    Login
                </Link>

                <Link href="/signup" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-md hover:opacity-90">
                    Get Started
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
