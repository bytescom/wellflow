"use client"
import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { useScrollAnimation } from './useScrollAnimation'

const CTA = () => {
    useScrollAnimation()

    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-emerald-200 via-emerald-700 to-teal-700 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
                <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    Ready to Start Your Wellness Journey?
                </h2>

                <p className="scroll-animate scroll-animate-delay-1 text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of wellness creators sharing their passion and building a healthier world together.
                </p>

                <div className="scroll-animate scroll-animate-delay-2 flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Link href="/signup" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-gray-50 font-semibold text-lg px-6 sm:px-8 py-4 rounded-md shadow-2xs hover:shadow-emerald-100 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center mx-auto sm:mx-0 cursor-pointer">
                            Get Started Free
                            <FaArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                    <Link href="/explore" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent text-lg px-6 sm:px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer">
                            Explore Sessions
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default CTA
