'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { PlusCircle, Edit2, Trash2, Eye, EyeOff, Search, FileText } from 'lucide-react'
import { format } from 'date-fns'
import { Blog } from '@/lib/types'

export default function AdminDashboardPage() {
  const [posts, setPosts] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [deleting, setDeleting] = useState<string | null>(null)

  const fetchPosts = async () => {
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  useEffect(() => { fetchPosts() }, [])

  const togglePublish = async (id: string, current: boolean) => {
    await supabase.from('blogs').update({ published: !current, updated_at: new Date().toISOString() }).eq('id', id)
    fetchPosts()
  }

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post? This cannot be undone.')) return
    setDeleting(id)
    await supabase.from('blogs').delete().eq('id', id)
    fetchPosts()
    setDeleting(null)
  }

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.excerpt || '').toLowerCase().includes(search.toLowerCase())
  )

  const published = posts.filter((p) => p.published).length

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Posts', value: posts.length, icon: <FileText size={20} />, color: 'bg-blue-500/10 text-blue-400' },
          { label: 'Published', value: published, icon: <Eye size={20} />, color: 'bg-green-500/10 text-green-400' },
          { label: 'Drafts', value: posts.length - published, icon: <EyeOff size={20} />, color: 'bg-yellow-500/10 text-yellow-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-600 pl-9 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-teal-500 transition"
          />
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors flex-shrink-0"
        >
          <PlusCircle size={16} />
          <span>New Post</span>
        </Link>
      </div>

      {/* Posts Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <FileText size={40} className="text-gray-700 mx-auto mb-3" />
            <p className="text-gray-500">No posts found.</p>
            <Link href="/admin/posts/new" className="text-teal-500 text-sm hover:text-teal-400 mt-2 inline-block">
              Create your first post →
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-800">
            {filtered.map((post) => (
              <div key={post.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${post.published ? 'bg-green-400' : 'bg-yellow-400'}`}
                    />
                    <h3 className="text-sm font-semibold text-gray-200 truncate">{post.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{post.excerpt}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    {format(new Date(post.updated_at), 'MMM d, yyyy')} ·{' '}
                    <span className={post.published ? 'text-green-500' : 'text-yellow-500'}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {post.published ? (
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="p-2 text-gray-500 hover:text-green-400 transition-colors"
                      title="View Post"
                    >
                      <Eye size={16} />
                    </Link>
                  ) : null}
                  <button
                    onClick={() => togglePublish(post.id, post.published)}
                    className={`p-2 transition-colors ${
                      post.published ? 'text-gray-500 hover:text-yellow-400' : 'text-gray-500 hover:text-green-400'
                    }`}
                    title={post.published ? 'Unpublish' : 'Publish'}
                  >
                    {post.published ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="p-2 text-gray-500 hover:text-teal-400 transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={16} />
                  </Link>
                  <button
                    onClick={() => deletePost(post.id)}
                    disabled={deleting === post.id}
                    className="p-2 text-gray-500 hover:text-red-400 transition-colors disabled:opacity-50"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
