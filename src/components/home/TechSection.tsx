import { techCategories } from '@/lib/mock-data'
import { Code2, Database, Cloud, Smartphone, Palette, Cpu, Globe, Shield, GitBranch, Package, Layers, Terminal } from 'lucide-react'

const techIcons: Record<string, React.ReactNode> = {
  'React': <Code2 size={20} />,
  'Next.js': <Terminal size={20} />,
  'TypeScript': <Terminal size={20} />,
  'Node.js': <Terminal size={20} />,
  'Python': <Terminal size={20} />,
  'Django': <Terminal size={20} />,
  'FastAPI': <Terminal size={20} />,
  'PostgreSQL': <Database size={20} />,
  'MongoDB': <Database size={20} />,
  'Redis': <Database size={20} />,
  'AWS': <Cloud size={20} />,
  'Docker': <Layers size={20} />,
  'Kubernetes': <Globe size={20} />,
  'React Native': <Smartphone size={20} />,
  'Flutter': <Smartphone size={20} />,
  'Swift': <Smartphone size={20} />,
  'Kotlin': <Terminal size={20} />,
  'Figma': <Palette size={20} />,
  'Sketch': <Palette size={20} />,
  'Adobe XD': <Palette size={20} />,
  'TensorFlow': <Cpu size={20} />,
  'PyTorch': <Cpu size={20} />,
  'Scikit-learn': <Cpu size={20} />,
  'Git': <GitBranch size={20} />,
  'GitHub': <GitBranch size={20} />,
  'GitLab': <GitBranch size={20} />,
  'Jenkins': <Package size={20} />,
  'CircleCI': <Package size={20} />,
  'Nginx': <Shield size={20} />,
  'AWS': <Cloud size={20} />,
  'Google Cloud': <Cloud size={20} />,
  'Azure': <Cloud size={20} />,
  'Heroku': <Cloud size={20} />,
  'Vercel': <Globe size={20} />,
  'Netlify': <Globe size={20} />,
  'Tailwind CSS': <Palette size={20} />,
  'Bootstrap': <Palette size={20} />,
  'Material-UI': <Palette size={20} />,
  'Chakra UI': <Palette size={20} />,
  'Ant Design': <Palette size={20} />,
  'Styled Components': <Palette size={20} />,
  'CSS-in-JS': <Palette size={20} />,
  'Sass': <Palette size={20} />,
  'Less': <Palette size={20} />,
  'Storybook': <Palette size={20} />,
  'Jest': <Terminal size={20} />,
  'Cypress': <Terminal size={20} />,
  'Playwright': <Terminal size={20} />,
  'Testing Library': <Terminal size={20} />,
  'ESLint': <Terminal size={20} />,
  'Prettier': <Terminal size={20} />,
  'Webpack': <Package size={20} />,
  'Vite': <Package size={20} />,
  'Rollup': <Package size={20} />,
  'Babel': <Terminal size={20} />,
  'ESBuild': <Terminal size={20} />,
  'GraphQL': <Terminal size={20} />,
  'REST API': <Terminal size={20} />,
  'gRPC': <Terminal size={20} />,
  'WebSocket': <Terminal size={20} />,
  'Apache Kafka': <Terminal size={20} />,
  'RabbitMQ': <Terminal size={20} />,
  'Elasticsearch': <Database size={20} />,
  'MongoDB Atlas': <Database size={20} />,
  'Firebase': <Cloud size={20} />,
  'Supabase': <Cloud size={20} />,
  'Auth0': <Shield size={20} />,
  'OAuth 2.0': <Shield size={20} />,
  'JWT': <Shield size={20} />,
  'Passport.js': <Shield size={20} />,
  'Stripe': <Terminal size={20} />,
  'PayPal': <Terminal size={20} />
}

export default function TechSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156 163 175 / 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-teal-700">Tech Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Technologies We</span><br />
            Master
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            We stay current with the best tools in the industry to deliver cutting-edge solutions that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, index) => (
            <div 
              key={cat.category} 
              className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-teal-50/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100 group-hover:border-teal-200 transition-colors">
                  <h3 className="text-lg font-bold text-gray-900">{cat.category}</h3>
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg flex items-center justify-center">
                    <span className="text-teal-600 text-sm font-bold">{cat.items.length}</span>
                  </div>
                </div>
                
                {/* Tech Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {cat.items.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-teal-50 rounded-xl group-hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow">
                        <div className="text-teal-600">
                          {techIcons[tech] || <Terminal size={16} />}
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-teal-700 transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
