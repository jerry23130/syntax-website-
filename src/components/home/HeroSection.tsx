import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, BarChart3, Zap, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-32">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-300">Available for New Projects</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">World-Class</span><br />
              Software Solutions
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Partner with industry experts to deliver scalable, high-performance software that drives real business results. We transform complex challenges into competitive advantages.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: <BarChart3 size={20} />, label: '500+', sublabel: 'Projects Delivered' },
                { icon: <Zap size={20} />, label: '98%', sublabel: 'Client Satisfaction' },
                { icon: <Shield size={20} />, label: '24/7', sublabel: 'Support & Maintenance' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-teal-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center text-teal-400 mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Main visual */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                    alt="Development team collaborating on software project"
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle2 size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">Project Success</h3>
                        <p className="text-sm text-gray-200">On-time, every time</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        'Custom software development',
                        'Cloud architecture & DevOps',
                        'UI/UX design & user research'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-teal-500/20 border border-teal-400/30 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-teal-400 rounded-full" />
                          </div>
                          <span className="text-white text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-white text-2xl font-bold">S</div>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                <Zap size={20} className="text-teal-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
