import MainLayout from '@/components/MainLayout'
import { projects } from '@/lib/mock-data'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Syntax Software Solutions',
  description: 'Case studies of software projects we have delivered: fintech, healthtech, e-commerce, logistics, and more.',
}

export default function OurWorkPage() {
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
              <span className="text-sm font-semibold text-teal-300">Case Studies</span>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Helping Businesses Grow <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Through</span> Smart Technology
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Real projects, measurable impact. See how we&apos;ve helped companies at every stage turn their vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-teal-50/50 transition-all duration-300 hover:-translate-y-1 ${
                  i === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'h-80' : 'h-56'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-3 shadow-lg">
                      {project.result}
                    </span>
                    <h2 className={`font-extrabold text-white ${i === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">{project.client}</p>
                  </div>
                </div>
                <div className="p-6 lg:p-8 bg-white">
                  <p className="text-gray-600 leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 text-gray-700 px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:border-teal-300 hover:from-teal-100 hover:to-cyan-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Your Project Could Be Next</h2>
          <p className="text-gray-600 text-lg mb-8">Let&apos;s discuss how we can help you build something amazing.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Start a Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
