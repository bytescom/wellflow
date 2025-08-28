"use client"
import React from 'react'
import { FaHeart, FaPlay, FaWind, FaArrowRight } from "react-icons/fa"
import { useScrollAnimation } from './useScrollAnimation'

const SessionType = () => {
    useScrollAnimation()

    return (
        <div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center space-y-4 sm:space-y-6 mb-16 sm:mb-20">
                    <div className="scroll-animate inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full text-sm font-medium text-purple-700 mb-4">
                        <FaHeart className="h-4 w-4" />
                        Session Types
                    </div>
                    <h2 className="scroll-animate scroll-animate-delay-1 text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                        Create Any Type of
                        <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                            Wellness Session
                        </span>
                    </h2>
                    <p className="scroll-animate scroll-animate-delay-2 text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        From gentle yoga flows to powerful breathing techniques, our platform provides specialized tools and
                        templates for every wellness practice, designed by experts for creators like you.
                    </p>
                </div>

                {/* Session Types Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {/* Yoga Routines */}
                    <div className="scroll-animate scroll-animate-delay-3 group relative">
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 overflow-hidden h-auto sm:h-[34rem] w-full sm:w-[23rem]">
                            <div className="relative z-10">
                                <div className="mb-6 sm:mb-8">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-emerald-500/25 mb-4 sm:mb-6">
                                        <FaHeart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                            Yoga Routines
                                        </h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-4" />
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-center mb-6 sm:mb-8 text-sm sm:text-base">
                                    Design flowing sequences with pose instructions, timing, modifications, and beautiful visual
                                    guides for practitioners of all levels and abilities.
                                </p>

                                <div className="space-y-3 mb-6 sm:mb-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                        <span>Pose library with 500+ asanas</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                                        <span>Sequence builder with timing</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                                        <span>Modification suggestions</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 group-hover:scale-105 px-4 py-3 rounded-lg flex items-center justify-center">
                                    Start Creating Yoga
                                    <FaArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Meditation Scripts */}
                    <div className="scroll-animate scroll-animate-delay-4 group relative">
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 overflow-hidden h-auto sm:h-[34rem] w-full sm:w-[23rem]">
                            <div className="relative z-10">
                                <div className="mb-6 sm:mb-8">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-blue-500/25 mb-4 sm:mb-6">
                                        <FaPlay className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            Meditation Scripts
                                        </h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4" />
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-center mb-6 sm:mb-8 text-sm sm:text-base">
                                    Craft guided meditations with timing cues, visualization prompts, and calming narratives that
                                    inspire inner peace and mindfulness.
                                </p>

                                <div className="space-y-3 mb-6 sm:mb-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        <span>Script templates & prompts</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                        <span>Audio timing markers</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                        <span>Background music integration</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 group-hover:scale-105 px-4 py-3 rounded-lg flex items-center justify-center">
                                    Start Creating Meditations
                                    <FaArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Breathing Exercises */}
                    <div className="scroll-animate scroll-animate-delay-5 group relative md:col-span-2 lg:col-span-1">
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 overflow-hidden h-auto sm:h-[34rem] w-full sm:w-[23rem]">
                            <div className="relative z-10">
                                <div className="mb-6 sm:mb-8">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl shadow-purple-500/25 mb-4 sm:mb-6">
                                        <FaWind className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            Breathing Exercises
                                        </h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4" />
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-center mb-6 sm:mb-8 text-sm sm:text-base">
                                    Create structured breathwork sessions with patterns, counts, and relaxation techniques for stress
                                    relief and enhanced well-being.
                                </p>

                                <div className="space-y-3 mb-6 sm:mb-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                        <span>Breathing pattern library</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full" />
                                        <span>Visual breathing guides</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full" />
                                        <span>Progress tracking</span>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 group-hover:scale-105 px-4 py-3 rounded-lg flex items-center justify-center">
                                    Start Creating Breathwork
                                    <FaArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-24 sm:mt-36 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {/* Sessions Created */}
                    <div className="scroll-animate scroll-animate-delay-1 text-center p-4 sm:p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                        <span className="absolute top-0 left-1/2 h-0.5 w-0 bg-emerald-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                            50,000+
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                            Sessions Created
                        </div>
                    </div>

                    {/* Active Creators */}
                    <div className="scroll-animate scroll-animate-delay-2 text-center p-4 sm:p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                        <span className="absolute top-0 left-1/2 h-0.5 w-0 bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            10,000+
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                            Active Creators
                        </div>
                    </div>

                    {/* Sessions Completed */}
                    <div className="scroll-animate scroll-animate-delay-3 text-center p-4 sm:p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                        <span className="absolute top-0 left-1/2 h-0.5 w-0 bg-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                            2M+
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                            Sessions Completed
                        </div>
                    </div>

                    {/* Satisfaction Rate */}
                    <div className="scroll-animate scroll-animate-delay-4 text-center p-4 sm:p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                        <span className="absolute top-0 left-1/2 h-0.5 w-0 bg-amber-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></span>
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                            98%
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                            Satisfaction Rate
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SessionType