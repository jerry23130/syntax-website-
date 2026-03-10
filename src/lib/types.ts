export interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  cover_image: string | null
  tags: string[] | null
  published: boolean
  created_at: string
  updated_at: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
  twitter?: string
}

export interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Technology {
  name: string
  logo: string
  category: string
}

export interface Industry {
  name: string
  description: string
  icon: string
}

export interface Project {
  title: string
  client: string
  description: string
  image: string
  tags: string[]
  result: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}
