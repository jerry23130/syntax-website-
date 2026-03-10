import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function BlogPreviewSection() {
  const { data: posts } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, cover_image, tags, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(3)

  if (!posts || posts.length === 0) return null

  return (
    <section className="py-24 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-500 text-sm font-bold uppercase tracking-widest">Insights</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.cover_image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {(post.tags || []).slice(0, 2).map((tag: string) => (
                    <span key={tag} className="text-xs bg-teal-50 text-teal-600 font-medium px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-sm font-semibold text-teal-500 group-hover:text-teal-600 inline-flex items-center space-x-1">
                  <span>Read More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-teal-500 font-semibold hover:text-teal-600 transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
