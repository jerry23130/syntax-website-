import Link from 'next/link'
import Image from 'next/image'
import { industries } from '@/lib/mock-data'

const industryLogos: Record<string, string> = {
  'FinTech': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwN0JGNiIvPgo8cGF0aCBkPSJNMTAgMTBIMzBWMzBIMTBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTUgMTVIMjVWMjVIMTVWMTVaIiBmaWxsPSIjMDBCRkY2Ii8+Cjwvc3ZnPgo=',
  'HealthTech': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Y1NkM2QyIvPgo8cGF0aCBkPSJNMTggMTBIMjJWMThIMzBWMjJIMjJWMzBIMThWMjJIMTBWMThIMThWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSIjRjU2MzZDIi8+Cjwvc3ZnPg==',
  'E-Commerce': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Y2ODUwMCIvPgo8cGF0aCBkPSJNMTAgMTBIMzBWMjBIMjBWMzBIMTBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI1IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
  'EdTech': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwN0JGNiIvPgo8cGF0aCBkPSJNMTAgMTBIMzBWMzBIMTBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTUgMTVIMjVWMjBIMTVWMTVaIiBmaWxsPSIjMDBCRkY2Ii8+CjxwYXRoIGQ9Ik0xNSAyNUgyNVYzMEgxNVYyNVoiIGZpbGw9IiMwMEJGRjYiLz4KPC9zdmc+',
  'Logistics': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0Y1OEEyNCIvPgo8cmVjdCB4PSI4IiB5PSIxOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjM2IiByPSIzIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjM2IiByPSIzIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
  'Real Estate': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzI3QzY0QSIvPgo8cGF0aCBkPSJNMTIgMjBMMjAgMTJMMjggMjBWMzBIMTJWMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTggMjRIMjJWMjBIMjZWMjRIMThWMjRaIiBmaWxsPSIjMjdDNjRBQSIvPgo8L3N2Zz4=',
  'SaaS': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwQkZGNiIvPgo8cGF0aCBkPSJNMTAgMjBMMjAgMTBMMzAgMjBWMzBIMTBWMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjE1IiByPSIzIiBmaWxsPSIjMDBCRkY2Ii8+CjxwYXRoIGQ9Ik0xNSAyNUgyNVYzMEgxNVYyNVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==',
  'Media & Entertainment': 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iI0ZGNDAwMCIvPgo8cGF0aCBkPSJNMTAgMTBMMzAgMjBWMjBMMTAgMzBWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjIwIiByPSI0IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=',
}

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-teal-700">Industry Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Industries We</span><br />
            Transform
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Deep domain expertise across key verticals allows us to build solutions that truly fit your business needs and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href="/industries"
              className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-50/50 transition-all duration-300 text-center hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-cyan-50 group-hover:from-teal-100 group-hover:to-cyan-100 rounded-2xl flex items-center justify-center transition-all duration-300 mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-xl">
                <Image
                  src={industryLogos[ind.name] || '/placeholder-logo.svg'}
                  alt={`${ind.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-teal-700 transition-colors">{ind.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{ind.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
