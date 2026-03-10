import MainLayout from '@/components/MainLayout'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { format } from 'date-fns'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { data } = await supabase.from('blogs').select('title, excerpt').eq('slug', slug).single()
  if (!data) return { title: 'Post Not Found' }
  return {
    title: `${data.title} — Syntax Software Solutions`,
    description: data.excerpt || '',
  }
}

export async function generateStaticParams() {
  const { data } = await supabase.from('blogs').select('slug').eq('published', true)
  return (data || []).map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const { data: post } = await supabase.from('blogs').select('*').eq('slug', slug).eq('published', true).single()

  if (!post) notFound()

  const { data: related } = await supabase
    .from('blogs')
    .select('id, title, slug, cover_image, excerpt, created_at')
    .eq('published', true)
    .neq('slug', slug)
    .limit(3)

  return (
    <MainLayout>
      {/* Article Hero */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={post.cover_image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/50 to-gray-900/20" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {(post.tags || []).map((tag: string) => (
              <span key={tag} className="inline-flex items-center space-x-1 text-xs bg-teal-500/90 text-white font-semibold px-3 py-1 rounded-full">
                <Tag size={10} />
                <span>{tag}</span>
              </span>
            ))}
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">{post.title}</h1>
          <p className="mt-3 inline-flex items-center space-x-1.5 text-sm text-gray-300">
            <Calendar size={14} />
            <span>{format(new Date(post.created_at), 'MMMM d, yyyy')}</span>
          </p>
        </div>
      </section>

      {/* Article Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-teal-500 transition-colors mb-10">
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </Link>

          <div
            className="prose prose-lg max-w-none prose-headings:font-extrabold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-teal-500 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <span>Want to Work With Us?</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related && related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={p.cover_image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=60'}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-sm group-hover:text-teal-500 transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-xs text-gray-400 mt-2">{format(new Date(p.created_at), 'MMM d, yyyy')}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  )
}
