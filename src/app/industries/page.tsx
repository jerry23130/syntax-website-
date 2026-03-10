import MainLayout from '@/components/MainLayout'
import { industries } from '@/lib/mock-data'
import {
  Banknote, HeartPulse, ShoppingCart, GraduationCap,
  Truck, Building2, Layers, Play, ArrowRight, CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries — Syntax Software Solutions',
  description: 'Industry-specific software solutions for FinTech, HealthTech, E-Commerce, EdTech, Logistics, and more.',
}

const iconMap: Record<string, React.ReactNode> = {
  Banknote: <Banknote size={36} />,
  HeartPulse: <HeartPulse size={36} />,
  ShoppingCart: <ShoppingCart size={36} />,
  GraduationCap: <GraduationCap size={36} />,
  Truck: <Truck size={36} />,
  Building2: <Building2 size={36} />,
  Layers: <Layers size={36} />,
  Play: <Play size={36} />,
}

const industryDetails: Record<string, { challenges: string[]; solutions: string[] }> = {
  FinTech: {
    challenges: ['Regulatory compliance', 'Real-time data processing', 'Fraud detection', 'Legacy system integration'],
    solutions: ['PCI-DSS compliant payment flows', 'Real-time transaction engines', 'ML-powered fraud detection', 'Core banking APIs'],
  },
  HealthTech: {
    challenges: ['HIPAA compliance', 'EHR integration', 'Telemedicine scalability', 'Data security'],
    solutions: ['HIPAA-compliant architecture', 'HL7/FHIR API integration', 'WebRTC video platforms', 'End-to-end encryption'],
  },
  'E-Commerce': {
    challenges: ['Peak traffic scaling', 'Cart abandonment', 'Multi-channel commerce', 'Personalization'],
    solutions: ['Headless commerce platforms', 'AI-driven recommendations', 'Omnichannel inventory', 'Performance optimization'],
  },
  EdTech: {
    challenges: ['Learner engagement', 'Scalable content delivery', 'Progress tracking', 'Live class infrastructure'],
    solutions: ['Adaptive learning algorithms', 'Video CDN integration', 'LMS platforms', 'Live streaming at scale'],
  },
  Logistics: {
    challenges: ['Real-time tracking', 'Route optimization', 'Warehouse management', 'Driver apps'],
    solutions: ['GPS/IoT tracking systems', 'AI route optimization', 'WMS platforms', 'Cross-platform mobile apps'],
  },
  'Real Estate': {
    challenges: ['Virtual tours', 'Lease management', 'Tenant portals', 'MLS integration'],
    solutions: ['3D virtual tour tech', 'Digital lease workflows', 'Tenant self-service portals', 'MLS/IDX API integration'],
  },
  SaaS: {
    challenges: ['Multi-tenancy', 'Subscription billing', 'Feature gating', 'Rapid iteration'],
    solutions: ['Tenant-isolated architecture', 'Stripe/billing integration', 'Feature flag systems', 'CI/CD for fast deploys'],
  },
  'Media & Entertainment': {
    challenges: ['Streaming at scale', 'Content protection', 'Global CDN', 'Monetization'],
    solutions: ['HLS/DASH streaming', 'DRM implementation', 'Multi-CDN routing', 'Ad-tech integration'],
  },
}

export default function IndustriesPage() {
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
              <span className="text-sm font-semibold text-teal-300">Who We Serve</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Deep Domain<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Expertise</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Every industry has unique challenges. We bring both technical excellence and domain knowledge to build solutions that truly fit.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((ind, i) => {
            const details = industryDetails[ind.name]
            return (
              <div
                key={ind.name}
                id={ind.name.toLowerCase().replace(/\s+/g, '')}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl text-teal-600 mb-6 shadow-lg">
                    {iconMap[ind.icon]}
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{ind.name}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{ind.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Start a Project</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
                {details && (
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Challenges We Solve</h3>
                      <ul className="space-y-3">
                        {details.challenges.map((c) => (
                          <li key={c} className="flex items-start space-x-3 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-red-500 shrink-0 mt-1.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 border border-teal-100 shadow-lg">
                      <h3 className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-4">Our Solutions</h3>
                      <ul className="space-y-3">
                        {details.solutions.map((s) => (
                          <li key={s} className="flex items-start space-x-3 text-sm text-gray-700">
                            <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
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
          <h2 className="text-4xl font-extrabold text-white mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-teal-100 text-lg mb-8">We build custom solutions for any domain. Let&apos;s talk about your specific needs.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-teal-600 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
