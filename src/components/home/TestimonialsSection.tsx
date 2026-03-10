'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/mock-data'

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-teal-700">Client Success</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">What Our Clients</span><br />
            Say About Us
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center shadow-xl">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[idx].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-teal-400" style={{ fill: 'currentColor' }} />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium italic mb-10">
              &ldquo;{testimonials[idx].content}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center space-x-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-teal-200 shadow-lg">
                <Image
                  src={testimonials[idx].avatar}
                  alt={testimonials[idx].name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">{testimonials[idx].name}</p>
                <p className="text-sm text-gray-600">
                  {testimonials[idx].role}, {testimonials[idx].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-teal-300 bg-white hover:bg-teal-50 flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === idx ? 'bg-gradient-to-r from-teal-500 to-cyan-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-teal-300 bg-white hover:bg-teal-50 flex items-center justify-center text-gray-600 hover:text-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
