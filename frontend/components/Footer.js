import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="px-4 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <p className="text-center sm:text-left">WellFlow © 2025. All rights reserved.</p>
                <nav className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-end">
                    <Link href="/about" className="hover:underline hover:text-gray-700 transition-colors">About</Link>
                    <Link href="/resources" className="hover:underline hover:text-gray-700 transition-colors">Sessions</Link>
                    <Link href="/privacy" className="hover:underline hover:text-gray-700 transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:underline hover:text-gray-700 transition-colors">Terms</Link>
                    <Link href="/support" className="hover:underline hover:text-gray-700 transition-colors">Support</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
