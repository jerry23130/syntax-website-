import MainLayout from '@/components/MainLayout'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import type { Metadata } from 'next'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Blog — Syntax Software Solutions',
  description: 'Insights, tutorials, and engineering articles from the Syntax Software Solutions team.',
}

export const revalidate = 60

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-teal-400 text-sm font-bold uppercase tracking-widest">Insights</span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-6 leading-tight">
              Engineering<br />
              <span className="text-teal-400">Insights & Ideas</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Thoughts, tutorials, and deep dives from our engineering team on building great software.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {(!posts || posts.length === 0) ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                    i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.cover_image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {(post.tags || []).slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="inline-flex items-center space-x-1 text-xs bg-teal-50 text-teal-600 font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          <Tag size={10} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-teal-500 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center space-x-1.5 text-xs text-gray-400">
                        <Calendar size={12} />
                        <span>{format(new Date(post.created_at), 'MMM d, yyyy')}</span>
                      </span>
                      <span className="inline-flex items-center space-x-1 text-sm font-semibold text-teal-500 group-hover:text-teal-600">
                        <span>Read More</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}
