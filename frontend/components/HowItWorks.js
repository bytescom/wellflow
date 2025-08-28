"use client"
import React from 'react'
import { useScrollAnimation } from './useScrollAnimation'

const HowItWorks = () => {
    useScrollAnimation()

    return (
        <section id="how-it-works" className="py-20 sm:py-32 lg:py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Simple Steps to Wellness Creation
                    </h2>
                    <p className="scroll-animate scroll-animate-delay-1 mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                        Transform your wellness journey in three easy steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Step 1 */}
                    <div className="scroll-animate scroll-animate-delay-2 group relative h-auto sm:h-[15rem] bg-white rounded-2xl p-6 sm:p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30 ring-4 ring-white text-sm sm:text-base">
                                1
                            </div>
                        </div>
                        <div className="pt-[2.5rem] sm:pt-[3rem] text-center space-y-3 sm:space-y-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                Sign Up & Create
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Create your account in seconds and start building your first wellness session with our guided editor and templates.
                            </p>
                        </div>
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                    </div>

                    {/* Step 2 */}
                    <div className="scroll-animate scroll-animate-delay-3 group relative h-auto sm:h-[15rem] bg-white rounded-2xl p-6 sm:p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 ring-4 ring-white text-sm sm:text-base">
                                2
                            </div>
                        </div>
                        <div className="pt-[2.5rem] sm:pt-[3rem] text-center space-y-3 sm:space-y-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                Design & Save
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Use our intuitive tools to craft your session. Everything auto-saves with version history so you can work at your own pace.
                            </p>
                        </div>
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                    </div>

                    {/* Step 3 */}
                    <div className="scroll-animate scroll-animate-delay-4 group relative h-auto sm:h-[15rem] bg-white rounded-2xl p-6 sm:p-8 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden md:col-span-2 lg:col-span-1">
                        <div className="absolute -top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 ring-4 ring-white text-sm sm:text-base">
                                3
                            </div>
                        </div>
                        <div className="pt-[2.5rem] sm:pt-[3rem] text-center space-y-3 sm:space-y-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                Share & Connect
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                Publish your sessions to the community and discover amazing content from other wellness creators worldwide.
                            </p>
                            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
