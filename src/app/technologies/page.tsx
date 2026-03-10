import MainLayout from '@/components/MainLayout'
import { techCategories } from '@/lib/mock-data'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technologies — Syntax Software Solutions',
  description: 'The modern tech stack we use: React, Next.js, Node.js, Python, Go, AWS, Kubernetes, and more.',
}

const whyOurStack = [
  { title: 'Battle-Tested', description: 'Every tool in our stack is proven at scale by leading tech companies worldwide.' },
  { title: 'Open Standards', description: 'We favor open-source solutions with large communities, avoiding vendor lock-in.' },
  { title: 'Performance First', description: 'We choose technologies that deliver superior runtime performance and developer velocity.' },
  { title: 'Future-Proof', description: 'Our stack evolves continuously — we adopt emerging tools that are production-ready.' },
]

export default function TechnologiesPage() {
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
              <span className="text-sm font-semibold text-teal-300">Our Stack</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Technologies We<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Build With</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              We use the right tool for each job. Our carefully curated stack spans the full spectrum from frontend to data engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {techCategories.map((cat) => (
              <div key={cat.category} id={cat.category.toLowerCase()}>
                <div className="flex items-center space-x-4 mb-12">
                  <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">{cat.category}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-teal-200 to-cyan-200" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                  {cat.items.map((tech) => (
                    <div
                      key={tech}
                      className="group p-6 bg-white hover:border-teal-200 border border-gray-100 rounded-3xl text-center transition-all duration-300 cursor-default hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300">
                        <span className="text-xl font-extrabold text-teal-600 group-hover:text-white transition-colors">
                          {tech.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-teal-600 transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Stack */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-700">Our Philosophy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Why We Choose</span><br />
              What We Choose
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyOurStack.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 size={32} className="text-teal-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
          <h2 className="text-4xl font-extrabold text-white mb-4">Have a Tech in Mind?</h2>
          <p className="text-teal-100 text-lg mb-8">We work with your preferred stack or advise on the best fit for your project.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-teal-600 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
