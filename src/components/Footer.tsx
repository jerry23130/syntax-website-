import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-white text-xl">
                Syntax <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Software</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-8">
              We help startups and enterprises build scalable, high-performance software solutions using modern technologies — on time, on budget, every time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group">
                <Twitter size={18} className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group">
                <Linkedin size={18} className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group">
                <Github size={18} className="text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['Custom Software', 'Mobile Apps', 'Cloud & DevOps', 'UI/UX Design', 'Data & AI', 'QA & Testing'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Work', href: '/our-work' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/about#careers' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-teal-400 transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <a href="mailto:hello@syntaxsoftware.dev" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  hello@syntaxsoftware.dev
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <span className="text-gray-400">
                  123 Tech Street<br />San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Syntax Software Solutions. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
