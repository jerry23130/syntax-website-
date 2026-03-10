'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Eye, EyeOff, Save, Image as ImageIcon, X } from 'lucide-react'
import Link from 'next/link'
import { Blog } from '@/lib/types'

interface PostEditorProps {
  initialData?: Partial<Blog>
  mode: 'create' | 'edit'
}

export default function PostEditor({ initialData, mode }: PostEditorProps) {
  const router = useRouter()
  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [coverImage, setCoverImage] = useState(initialData?.cover_image || '')
  const [tags, setTags] = useState<string[]>(initialData?.tags || [])
  const [tagInput, setTagInput] = useState('')
  const [published, setPublished] = useState(initialData?.published || false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const generateSlug = (t: string) =>
    t
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

  const handleTitleChange = (v: string) => {
    setTitle(v)
    if (mode === 'create') setSlug(generateSlug(v))
  }

  const addTag = () => {
    const t = tagInput.trim()
    if (t && !tags.includes(t)) setTags([...tags, t])
    setTagInput('')
  }

  const removeTag = (t: string) => setTags(tags.filter((x) => x !== t))

  const handleSave = async (publishState?: boolean) => {
    if (!title.trim() || !slug.trim() || !content.trim()) {
      setError('Title, slug, and content are required.')
      return
    }
    setSaving(true)
    setError('')

    const finalPublished = publishState !== undefined ? publishState : published
    const payload = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage || null,
      tags,
      published: finalPublished,
      updated_at: new Date().toISOString(),
    }

    let err
    if (mode === 'create') {
      const { error: e } = await supabase.from('blogs').insert(payload)
      err = e
    } else {
      const { error: e } = await supabase
        .from('blogs')
        .update(payload)
        .eq('id', initialData!.id)
      err = e
    }

    setSaving(false)
    if (err) {
      setError(err.message)
    } else {
      router.push('/admin/dashboard')
    }
  }

  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-200 text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
          >
            <Save size={15} />
            <span>Save Draft</span>
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50"
          >
            {published ? <Eye size={15} /> : <Eye size={15} />}
            <span>{saving ? 'Saving...' : 'Publish'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-700 text-red-300 text-sm px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main editor */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition placeholder-gray-600"
                placeholder="Post title..."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Slug *</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-teal-500 transition"
                placeholder="post-slug"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Excerpt</label>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition resize-none placeholder-gray-600"
                placeholder="Short description for blog listing..."
              />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Content * <span className="font-normal text-gray-600">(HTML supported)</span>
            </label>
            <textarea
              rows={20}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-teal-500 transition resize-y placeholder-gray-600"
              placeholder="<p>Your blog content here...</p>"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Status */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Status</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">{published ? 'Published' : 'Draft'}</span>
              <button
                onClick={() => setPublished(!published)}
                className={`relative w-12 h-6 rounded-full transition-colors ${published ? 'bg-teal-500' : 'bg-gray-700'}`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                    published ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Cover Image */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Cover Image</h3>
            <div className="relative">
              <ImageIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 transition placeholder-gray-600"
                placeholder="https://..."
              />
            </div>
            {coverImage && (
              <div className="mt-3 relative rounded-xl overflow-hidden h-32">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coverImage} alt="Cover preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Tags</h3>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-teal-500 transition placeholder-gray-600"
                placeholder="Add tag..."
              />
              <button
                type="button"
                onClick={addTag}
                className="bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center space-x-1.5 bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-full"
                >
                  <span>{tag}</span>
                  <button onClick={() => removeTag(tag)} className="hover:text-red-400 transition-colors">
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
