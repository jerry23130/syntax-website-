import PostEditor from '@/components/PostEditor'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'New Post — Admin' }

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white mb-6">Create New Post</h1>
      <PostEditor mode="create" />
    </div>
  )
}
