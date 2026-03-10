import PostEditor from '@/components/PostEditor'
import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export const metadata: Metadata = { title: 'Edit Post — Admin' }

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const { data: post } = await supabase.from('blogs').select('*').eq('id', id).single()

  if (!post) notFound()

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white mb-6">Edit Post</h1>
      <PostEditor mode="edit" initialData={post} />
    </div>
  )
}
