'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const servicesMenu = {
  title: 'Services',
  columns: [
    {
      heading: 'Development',
      links: [
        { label: 'Custom Software Development', href: '/services#custom' },
        { label: 'Web Application Development', href: '/services#web' },
        { label: 'Mobile App Development', href: '/services#mobile' },
        { label: 'API Development & Integration', href: '/services#api' },
        { label: 'Legacy Modernization', href: '/services#legacy' },
      ],
    },
    {
      heading: 'Design & Strategy',
      links: [
        { label: 'UI/UX Design', href: '/services#design' },
        { label: 'Product Strategy', href: '/services#strategy' },
        { label: 'Design Systems', href: '/services#design-systems' },
        { label: 'User Research', href: '/services#research' },
      ],
    },
    {
      heading: 'Cloud & Operations',
      links: [
        { label: 'Cloud Architecture', href: '/services#cloud' },
        { label: 'DevOps & CI/CD', href: '/services#devops' },
        { label: 'Infrastructure as Code', href: '/services#iac' },
        { label: 'QA & Testing', href: '/services#qa' },
      ],
    },
    {
      heading: 'Data & AI',
      links: [
        { label: 'Data Engineering', href: '/services#data' },
        { label: 'Machine Learning', href: '/services#ml' },
        { label: 'AI Integration', href: '/services#ai' },
        { label: 'Business Intelligence', href: '/services#bi' },
      ],
    },
  ],
}

const technologiesMenu = {
  title: 'Technologies',
  columns: [
    {
      heading: 'Frontend',
      links: [
        { label: 'React & Next.js', href: '/technologies#react' },
        { label: 'Vue.js', href: '/technologies#vue' },
        { label: 'TypeScript', href: '/technologies#typescript' },
        { label: 'Tailwind CSS', href: '/technologies#tailwind' },
      ],
    },
    {
      heading: 'Backend',
      links: [
        { label: 'Node.js', href: '/technologies#node' },
        { label: 'Python & Django', href: '/technologies#python' },
        { label: 'Go', href: '/technologies#go' },
        { label: 'Java & Spring', href: '/technologies#java' },
      ],
    },
    {
      heading: 'Mobile',
      links: [
        { label: 'React Native', href: '/technologies#react-native' },
        { label: 'Flutter', href: '/technologies#flutter' },
        { label: 'Swift / iOS', href: '/technologies#ios' },
        { label: 'Kotlin / Android', href: '/technologies#android' },
      ],
    },
    {
      heading: 'Cloud & Data',
      links: [
        { label: 'AWS', href: '/technologies#aws' },
        { label: 'Google Cloud', href: '/technologies#gcp' },
        { label: 'PostgreSQL', href: '/technologies#postgres' },
        { label: 'Kubernetes', href: '/technologies#k8s' },
      ],
    },
  ],
}

const industriesMenu = {
  title: 'Industries',
  columns: [
    {
      heading: 'Finance & Health',
      links: [
        { label: 'FinTech', href: '/industries#fintech' },
        { label: 'HealthTech', href: '/industries#healthtech' },
        { label: 'InsurTech', href: '/industries#insurtech' },
        { label: 'LegalTech', href: '/industries#legaltech' },
      ],
    },
    {
      heading: 'Commerce & Media',
      links: [
        { label: 'E-Commerce & Retail', href: '/industries#ecommerce' },
        { label: 'Media & Entertainment', href: '/industries#media' },
        { label: 'Travel & Hospitality', href: '/industries#travel' },
        { label: 'Real Estate', href: '/industries#realestate' },
      ],
    },
    {
      heading: 'Enterprise & Education',
      links: [
        { label: 'SaaS Products', href: '/industries#saas' },
        { label: 'EdTech', href: '/industries#edtech' },
        { label: 'Logistics', href: '/industries#logistics' },
        { label: 'Manufacturing', href: '/industries#manufacturing' },
      ],
    },
  ],
}

type MegaMenu = typeof servicesMenu

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const megaMenus: Record<string, MegaMenu> = {
    Services: servicesMenu,
    Technologies: technologiesMenu,
    Industries: industriesMenu,
  }

  const navLinks = ['Services', 'Technologies', 'Industries']
  const simpleLinks = [
    { label: 'About', href: '/about' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm'
      }`}
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-gray-900 text-xl hidden sm:block">
              Syntax <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Software</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Mega menu items */}
            {navLinks.map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                    activeMenu === item
                      ? 'bg-teal-50 text-teal-700 border border-teal-200'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-teal-700'
                  }`}
                >
                  <span>{item}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeMenu === item ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            ))}

            {/* Simple links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-700 rounded-xl transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule a Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mega Dropdown */}
      {activeMenu && megaMenus[activeMenu] && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 z-50"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
              {megaMenus[activeMenu].columns.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {col.heading}
                  </h3>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-700 hover:text-teal-600 transition-colors duration-150 block"
                          onClick={() => setActiveMenu(null)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((item) => (
              <details key={item} className="group">
                <summary className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-800 cursor-pointer list-none rounded-md hover:bg-gray-50">
                  {item}
                  <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 py-2 space-y-4">
                  {megaMenus[item]?.columns.map((col) => (
                    <div key={col.heading}>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{col.heading}</p>
                      {col.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block py-1.5 text-sm text-gray-600 hover:text-teal-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            ))}
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
