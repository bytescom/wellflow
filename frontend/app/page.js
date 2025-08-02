import Image from "next/image";
import { FaStar, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <section className="bg-gradient-to-br from-gray-50 to-emerald-200">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700">
                  <FaStar className="h-4 w-4" />
                  Trusted by 10,000+ wellness creators
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Create & Share Your <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Wellness Journey
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Design beautiful yoga routines, meditation scripts, and breathing exercises.
                  Share your wellness sessions with a thriving community.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-400 to-teal-600 text-white px-6 py-4 rounded-md hover:opacity-90 transition-opacity flex items-center cursor-pointer hover:bg-emerald-700">
                  Start Creating Free
                  <FaArrowRight className="ml-2" />
                </button>
                <button className="border border-gray-200 px-6 py-4 rounded-md bg-emerald-50 transition-colors cursor-pointer text-emerald-600">
                  Explore Sessions
                </button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600" />
                  <span className="text-sm text-gray-600">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600" />
                  <span className="text-sm text-gray-600">Free forever plan</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="bg-white h-[30rem] w-[35rem] rounded-3xl shadow-xl p-6 border border-gray-100">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/wellflow-hero.jpg"
                  alt="Picture of the author"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
