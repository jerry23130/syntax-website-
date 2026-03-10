import MainLayout from '@/components/MainLayout'
import { teamMembers } from '@/lib/mock-data'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, ArrowRight, Target, Users, Zap, Globe } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Syntax Software Solutions',
  description: 'Meet the Syntax Software Solutions team. Learn about our mission, values, and the people who make it happen.',
}

const values = [
  { icon: <Target size={24} />, title: 'Outcome-Focused', description: 'We measure success by your results, not lines of code. Every decision is tied to business impact.' },
  { icon: <Users size={24} />, title: 'True Partnership', description: 'We embed into your team, communicate transparently, and treat your goals as our own.' },
  { icon: <Zap size={24} />, title: 'Engineering Excellence', description: 'Clean code, robust architecture, and best practices are non-negotiable on every project.' },
  { icon: <Globe size={24} />, title: 'Diverse & Global', description: 'Our team spans multiple continents, bringing diverse perspectives to every challenge.' },
]

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-teal-600 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-teal-400 text-sm font-bold uppercase tracking-widest">Our Story</span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Built by Engineers,<br />
              <span className="text-teal-400">For Builders</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Syntax Software Solutions was founded with a simple belief: the best software companies are built on trust, talent, and a relentless commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-500 text-sm font-bold uppercase tracking-widest">Our Mission</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6">
                Accelerating Digital Transformation for Every Business
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Founded in 2016, Syntax Software Solutions has grown from a small team of 5 engineers to a 50+ person organization serving clients across North America, Europe, and Asia-Pacific.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We started because we believed there was a better way to build software products — one where the agency is a true partner, not just a vendor. Where transparency, quality, and speed aren&apos;t tradeoffs, but core commitments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '200+', label: 'Projects Delivered' },
                { value: '50+', label: 'Engineers' },
                { value: '8+', label: 'Years in Business' },
                { value: '30+', label: 'Countries Served' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
                  <p className="text-4xl font-extrabold text-teal-600 mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-500 text-sm font-bold uppercase tracking-widest">The People</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Meet Our Team</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              World-class engineers, designers, and strategists united by a passion for building great products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-transparent group-hover:border-teal-400 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-teal-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 max-w-xs mx-auto">{member.bio}</p>
                <div className="flex justify-center space-x-2">
                  {member.linkedin && (
                    <a href={member.linkedin} className="w-8 h-8 bg-gray-100 hover:bg-teal-600 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all">
                      <Linkedin size={14} />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="w-8 h-8 bg-gray-100 hover:bg-teal-600 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all">
                      <Twitter size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Join Our Team</h2>
          <p className="text-teal-100 text-lg mb-8">
            We&apos;re always looking for talented engineers, designers, and strategists who want to build remarkable things.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-teal-600 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors"
          >
            <span>View Open Positions</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
