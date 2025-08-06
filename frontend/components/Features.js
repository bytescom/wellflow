import React from 'react'
import { PiSparkleFill } from "react-icons/pi"
import { FaHeart, FaArrowRight, FaBolt, FaCheckCircle, FaUsers } from 'react-icons/fa'

const Features = () => {
    return (
        <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center space-y-6 mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 rounded-full text-sm font-medium text-emerald-700 mb-4">
                        <PiSparkleFill className="h-4 w-4" />
                        Powerful Features
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                        Everything You Need for
                        <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                            Wellness Creation
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Professional-grade tools designed to help you create, manage, and share transformative wellness
                        experiences with a thriving global community.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Feature 1 - Session Builder */}
                    <div className="group relative flex-1 min-w-0">
                        <div className="relative border-0 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden group rounded-2xl flex flex-col justify-between px-8 py-10 h-[34rem] w-[23rem]">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                            <div className="flex flex-col justify-between">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-500/25">
                                        <FaHeart className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        <PiSparkleFill className="h-3 w-3 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                    AI-Powered Session Builder
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base mb-6">
                                    Create detailed yoga routines, meditation scripts, and breathing exercises with our intelligent
                                    drag-and-drop editor, smart templates, and AI-powered suggestions.
                                </p>
                            </div>
                            <div >
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                        <span>Drag & drop interface</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                                        <span>Smart content suggestions</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        <span>Professional templates</span>
                                    </div>
                                </div>
                                <button className="w-full justify-start text-emerald-600 hover:text-emerald-700 border-emerald-100 hover:bg-emerald-100 group-hover:bg-emerald-50 bg-transparent border-0 p-3 rounded flex items-center cursor-pointer">
                                    Learn more{" "}
                                    <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 - Auto-Save */}
                    <div className="group relative flex-1 min-w-0">
                        <div className="relative border-0 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden group rounded-2xl flex flex-col justify-between px-8 py-10 h-[34rem] w-[23rem]">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                            <div >
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/25">
                                        <FaBolt className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        <FaCheckCircle className="h-3 w-3 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    Smart Auto-Save & Sync
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base mb-6">
                                    Never lose your work with intelligent auto-saving, real-time collaboration, version history, seamless sync across all your devices, offline access, cloud backup, instant updates, and mobile compatibility.
                                </p>
                            </div>
                            <div >
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        <span>Real-time auto-save</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                        <span>Version history</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                        <span>Cross-device sync</span>
                                    </div>
                                </div>
                                <button className="w-full justify-start text-blue-600 hover:text-blue-700 hover:bg-blue-100 group-hover:bg-blue-50 border-blue-100 bg-transparent border-0 p-3 rounded flex items-center cursor-pointer ">
                                    Learn more{" "}
                                    <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 - Community */}
                    <div className="group relative flex-1 min-w-0">
                        <div className="relative border-0 shadow-xl shadow-gray-900/5 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden group rounded-2xl flex flex-col justify-between px-8 py-10 h-[34rem] w-[23rem]">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                            <div>
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/25">
                                        <FaUsers className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        <FaHeart className="h-3 w-3 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                                    Global Community Hub
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base mb-6">
                                    Connect with a vibrant wellness community, share your sessions, discover transformative practices, and collaborate with creators worldwide for growth, support, and inspiration.
                                </p>
                            </div>
                            <div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                        <span>10,000+ active creators</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-pink-500 rounded-full" />
                                        <span>Instant feedback & reviews</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        <span>Collaborative features</span>
                                    </div>
                                </div>
                                <button className="w-full justify-start text-purple-600 hover:text-purple-700 hover:bg-purple-100 border-purple-100 group-hover:bg-purple-50 bg-transparent border-0 p-3 rounded flex items-center cursor-pointer">
                                    Learn more{" "}
                                    <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
