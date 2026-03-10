import { TeamMember, Service, Industry, Project, Testimonial } from './types'

export const teamMembers: TeamMember[] = [
  {
    name: 'Alex Rivera',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Alex brings 15+ years of experience in software engineering and business leadership, having previously led engineering teams at Fortune 500 companies.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&q=80',
    bio: 'Sarah is a full-stack engineer and architect with deep expertise in cloud-native development and distributed systems.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Marcus leads our engineering teams with a passion for clean code, scalable architectures, and developer experience.',
    linkedin: '#',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Priya bridges the gap between business goals and technical execution, ensuring we deliver maximum value to our clients.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'David Kim',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'David creates beautiful, functional interfaces that delight users and drive business results.',
    linkedin: '#',
  },
  {
    name: 'Emma Thompson',
    role: 'DevOps Lead',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    bio: 'Emma ensures our clients\' infrastructure is rock-solid, scalable, and secure with modern DevOps practices.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Carlos Mendez',
    role: 'Senior Backend Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Carlos specializes in high-performance APIs and microservices architectures that scale to millions of users.',
    linkedin: '#',
  },
  {
    name: 'Aisha Williams',
    role: 'Mobile Development Lead',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    bio: 'Aisha leads our mobile team, building native and cross-platform apps that users love.',
    linkedin: '#',
    twitter: '#',
  },
]

export const services: Service[] = [
  {
    title: 'Custom Software Development',
    description: 'End-to-end software development tailored to your business needs, from concept to deployment.',
    icon: 'Code2',
    features: ['Web Applications', 'API Development', 'System Integration', 'Legacy Modernization'],
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    icon: 'Smartphone',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud architecture, migration, and DevOps practices that help you move faster and stay reliable.',
    icon: 'Cloud',
    features: ['AWS / GCP / Azure', 'CI/CD Pipelines', 'Kubernetes', 'Infrastructure as Code'],
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that turns complex workflows into intuitive, beautiful digital experiences.',
    icon: 'Palette',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Data Engineering & AI',
    description: 'Data pipelines, analytics platforms, and AI/ML solutions that turn your data into competitive advantage.',
    icon: 'Brain',
    features: ['Data Pipelines', 'ML Models', 'Business Intelligence', 'Real-time Analytics'],
  },
  {
    title: 'QA & Testing',
    description: 'Comprehensive quality assurance that ensures your software works flawlessly across all scenarios.',
    icon: 'ShieldCheck',
    features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'Manual QA'],
  },
]

export const industries: Industry[] = [
  { name: 'FinTech', description: 'Secure, compliant financial software and payment systems.', icon: 'Banknote' },
  { name: 'HealthTech', description: 'HIPAA-compliant healthcare platforms and medical devices software.', icon: 'HeartPulse' },
  { name: 'E-Commerce', description: 'High-performance online shopping experiences and commerce platforms.', icon: 'ShoppingCart' },
  { name: 'EdTech', description: 'Engaging learning management systems and educational platforms.', icon: 'GraduationCap' },
  { name: 'Logistics', description: 'Supply chain management, fleet tracking, and logistics optimization.', icon: 'Truck' },
  { name: 'Real Estate', description: 'Property management platforms, listing portals, and PropTech solutions.', icon: 'Building2' },
  { name: 'SaaS', description: 'Scalable software-as-a-service products built for rapid growth.', icon: 'Layers' },
  { name: 'Media & Entertainment', description: 'Streaming platforms, content management, and audience engagement tools.', icon: 'Play' },
]

export const projects: Project[] = [
  {
    title: 'PayFlow — Payment Platform',
    client: 'FinTech Startup',
    description: 'Built a real-time payment processing platform handling $50M+ in monthly transactions with 99.99% uptime.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    tags: ['Node.js', 'React', 'PostgreSQL', 'AWS'],
    result: '300% faster transaction processing',
  },
  {
    title: 'MediConnect — Healthcare Portal',
    client: 'Regional Hospital Network',
    description: 'Developed a HIPAA-compliant patient portal connecting 200+ physicians with 50,000+ patients.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    tags: ['React', 'Python', 'AWS', 'HIPAA'],
    result: '40% reduction in admin workload',
  },
  {
    title: 'ShopSphere — E-Commerce Platform',
    client: 'Retail Brand',
    description: 'Re-platformed a legacy e-commerce site to a headless commerce solution supporting Black Friday scale.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['Next.js', 'Shopify', 'TypeScript', 'Vercel'],
    result: '5x performance improvement',
  },
  {
    title: 'LogiTrack — Fleet Management',
    client: 'Logistics Company',
    description: 'Real-time fleet tracking and route optimization system for 500+ vehicles across North America.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    tags: ['React Native', 'Go', 'Google Maps', 'GCP'],
    result: '25% reduction in fuel costs',
  },
  {
    title: 'LearnPath — EdTech Platform',
    client: 'Online Learning Startup',
    description: 'Adaptive learning platform with AI-driven course recommendations serving 100,000+ learners.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    tags: ['Next.js', 'Python', 'ML', 'PostgreSQL'],
    result: '60% higher course completion rate',
  },
  {
    title: 'PropHub — Real Estate SaaS',
    client: 'PropTech Company',
    description: 'End-to-end property management platform with virtual tours, lease management, and tenant portal.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Azure'],
    result: '10,000+ properties managed',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'James Mitchell',
    role: 'CTO',
    company: 'PayFlow Inc.',
    content: 'Syntax Software Solutions transformed our payment infrastructure. Their team delivered a scalable, secure platform that handles millions in transactions daily. Exceptional technical expertise.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
  },
  {
    name: 'Dr. Rachel Nguyen',
    role: 'VP Technology',
    company: 'MediConnect Health',
    content: 'Building a HIPAA-compliant platform is complex. Syntax not only understood the technical requirements but also the regulatory landscape. They delivered on time and exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
  },
  {
    name: 'Tom Bradley',
    role: 'CEO',
    company: 'ShopSphere',
    content: 'Our old platform couldn\'t handle peak traffic. Syntax rebuilt our e-commerce engine and we sailed through Black Friday with zero downtime. Best technology investment we\'ve made.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
  },
  {
    name: 'Lisa Park',
    role: 'Head of Product',
    company: 'LearnPath',
    content: 'The team\'s attention to UX and technical performance made our learning platform stand out. User retention improved dramatically after launch. Highly recommend working with them.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    rating: 5,
  },
]

export const techCategories = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Angular'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'Java', 'Ruby on Rails', '.NET'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'AI & Data',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Apache Spark'],
  },
]
