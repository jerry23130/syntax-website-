import MainLayout from '@/components/MainLayout'
import { services } from '@/lib/mock-data'
import {
  Code2, Smartphone, Cloud, Palette, Brain, ShieldCheck,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Syntax Software Solutions',
  description: 'End-to-end software development services: custom software, mobile apps, cloud & DevOps, UI/UX design, data & AI, and QA.',
}

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={32} />,
  Smartphone: <Smartphone size={32} />,
  Cloud: <Cloud size={32} />,
  Palette: <Palette size={32} />,
  Brain: <Brain size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
}

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We deep-dive into your business goals, technical requirements, and competitive landscape to build the right foundation.' },
  { step: '02', title: 'Planning', description: 'Detailed project roadmap, architecture design, and sprint planning to ensure delivery milestones are clear and achievable.' },
  { step: '03', title: 'Development', description: 'Agile sprints with regular demos and feedback cycles. You always know exactly where your project stands.' },
  { step: '04', title: 'Launch & Support', description: 'Smooth deployment, comprehensive monitoring, and ongoing support to keep your product running at peak performance.' },
]

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-300">What We Do</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Services Built for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Modern Businesses</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              From a single feature to a full product — our multidisciplinary teams deliver software that scales, performs, and delights users.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="group p-10 rounded-3xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-50/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300 shrink-0 shadow-lg">
                    {iconMap[service.icon]}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 uppercase tracking-wider">0{i + 1}</span>
                    <h2 className="text-2xl font-extrabold text-gray-900 mt-1 mb-3">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center space-x-3 text-sm text-gray-600">
                          <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-700">How We Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Our Development</span><br />
              Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative p-8 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-100 block mb-4">{step.step}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-teal-100 text-lg mb-8">Schedule a free discovery call with our team today.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-teal-600 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Schedule a Free Call</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
