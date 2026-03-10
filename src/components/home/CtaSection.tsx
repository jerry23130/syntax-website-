import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Tilted Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl transform rotate-2 hover:rotate-1 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Two professionals collaborating on laptops"
                fill
                sizes="50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-300">Ready to Scale?</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Want to accelerate<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">software development</span><br />
              at your company?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              <span className="text-teal-400 font-semibold">See how we can help.</span> Our expert teams deliver scalable solutions on time, every time.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span>Schedule a Call</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
