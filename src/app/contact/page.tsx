'use client'

import MainLayout from '@/components/MainLayout'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)

  const { error } = await supabase.from("contacts").insert([
    {
      name: form.name,
      email: form.email,
      company: form.company,
      service: form.service,
      message: form.message,
    },
  ])

  if (error) {
    alert("Error sending message")
    setLoading(false)
    return
  }

  setSubmitted(true)
  setLoading(false)
}

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
              <span className="text-sm font-semibold text-teal-300">Get in Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Let&apos;s Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Together</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Tell us about your project. We respond to every inquiry within 24 hours with personalized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    { icon: <Mail size={18} />, label: 'Email', value: 'hello@syntaxsoftware.dev', href: 'mailto:hello@syntaxsoftware.dev' },
                    { icon: <Phone size={18} />, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                    { icon: <MapPin size={18} />, label: 'Office', value: '123 Tech Street, San Francisco, CA 94105', href: '#' },
                    { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri, 9am–6pm PST', href: '#' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0 shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                        <a href={item.href} className="text-sm text-gray-700 hover:text-teal-600 transition-colors">
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">What to expect</h3>
                <ul className="space-y-3">
                  {[
                    'Response within 24 hours',
                    'Free 30-min discovery call',
                    'No commitment required',
                    'NDA available upon request',
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Message Sent!</h2>
                    <p className="text-gray-500 text-lg">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
                  <h2 className="text-2xl font-extrabold text-gray-900">Send Us a Message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm bg-white transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm bg-white transition"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 text-sm bg-white transition"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm bg-white transition appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option>Custom Software Development</option>
                        <option>Mobile App Development</option>
                        <option>Cloud & DevOps</option>
                        <option>UI/UX Design</option>
                        <option>Data Engineering & AI</option>
                        <option>QA & Testing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm bg-white transition resize-none"
                      placeholder="Tell us about your project, goals, timeline, and budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our Privacy Policy. We will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
