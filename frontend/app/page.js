"use client"
import SessionType from "../components/SessionType"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        <Features />

        <section id="session-type" className="py-24 lg:py-32 bg-gray-50">
          <SessionType />
        </section>

        <HowItWorks />

        <CTA />
      </main>

      <Footer />
    </div>
  )
}
