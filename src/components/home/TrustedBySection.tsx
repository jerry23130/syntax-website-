export default function TrustedBySection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-teal-700">Trusted by Leaders</span>
          </div>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Partnering with forward-thinking companies to drive digital transformation
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {['TechNova', 'PayFlow', 'MediConnect', 'ShopSphere', 'LearnPath', 'PropHub', 'LogiTrack', 'CloudBase'].map((brand, index) => (
            <div 
              key={brand} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl font-bold text-gray-400 group-hover:text-teal-600 transition-all duration-300 transform group-hover:scale-110 inline-block">
                {brand}
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
