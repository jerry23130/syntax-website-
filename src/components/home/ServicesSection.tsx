import Link from 'next/link'
import { ArrowRight, CheckCircle2, Code2, Smartphone, Cloud, Palette, Brain, ShieldCheck } from 'lucide-react'
import { services } from '@/lib/mock-data'

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={28} />,
  Smartphone: <Smartphone size={28} />,
  Cloud: <Cloud size={28} />,
  Palette: <Palette size={28} />,
  Brain: <Brain size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156 163 175 / 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-teal-700">Industry Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">End-to-End</span><br />
            Software Services
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From ideation to deployment and beyond — we cover every stage of the software development lifecycle with precision and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl border border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-50/50 transition-all duration-500 cursor-pointer hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-cyan-50 group-hover:from-teal-600 group-hover:to-cyan-600 rounded-2xl flex items-center justify-center text-teal-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    {iconMap[service.icon]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-teal-50 group-hover:bg-teal-100 rounded-full flex items-center justify-center transition-colors">
                        <CheckCircle2 size={14} className="text-teal-600" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{f}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-100 group-hover:border-teal-200 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 group-hover:text-teal-600 transition-colors">Learn more</span>
                    <ArrowRight size={16} className="text-teal-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Explore All Services</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
