"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaStar, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from './useScrollAnimation'

const HeroSection = () => {
    useScrollAnimation()

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-300 via-white to-gray-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
                <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-4 sm:space-y-6 flex flex-col items-center md:items-start">
                            <div className="scroll-animate inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 mb-4">
                                <FaStar className="h-4 w-4" />
                                <span className="hidden sm:inline">Trusted by 10,000+ wellness creators</span>
                                <span className="sm:hidden">10,000+ creators trust us</span>
                            </div>
                            <h1 className="scroll-animate scroll-animate-delay-1 text-center md:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                                Create & Share Your
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    {" "}
                                    Wellness Journey
                                </span>
                            </h1>
                            <p className="scroll-animate scroll-animate-delay-2 text-center md:text-left text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Design beautiful yoga routines, meditation scripts, and breathing exercises. Share your wellness
                                sessions with a thriving community and discover transformative practices.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="scroll-animate scroll-animate-delay-3 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start mt-10 sm:mt-4">
                            <button className="w-1/2 w-auto flex items-center justify-center gap-2 px-[10vw] sm:px-6 py-4 text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
                                Start Creating Free
                                <FaArrowRight className="h-4 w-4" />
                            </button>
                            <button className="w-1/2 w-auto px-[10vw] sm:px-6 py-4 text-base font-medium text-gray-700 border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-400 rounded-md transition duration-200 cursor-pointer">
                                Explore Sessions
                            </button>
                        </div>

                        <div className="scroll-animate scroll-animate-delay-4 text-[10px] sm:text-sm flex justify-center md:justify-start items-center gap-2 sm:gap-8 sm:pt-4">
                            <div className="flex items-center gap-1 sm:gap-2">
                                <FaCheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0" />
                                <span className="text-gray-600">No credit card required</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <FaCheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0" />
                                <span className="text-gray-600">Free forever plan</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative scroll-animate scroll-animate-delay-5">
                        {/* Glowing animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-3xl opacity-10 animate-pulse"/>

                        <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-900/10 p-3 sm:p-5 border border-gray-100">
                            <div className="relative w-full h-80 sm:h-96 lg:h-100 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/wellflow-hero.jpg"
                                    alt="WellnessFlow App Interface"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection
