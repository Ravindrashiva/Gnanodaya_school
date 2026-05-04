import { school } from '../data/siteContent'

export default function About() {
  return (
    <section className="py-24 bg-light" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-secondary" />
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Legacy</span>
            <span className="h-[1px] w-12 bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">
            {school.about.headline}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          
          {/* History Card */}
          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-gray-200/50 border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
               <span className="text-primary font-bold">01</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-dark mb-4">History</h3>
            <p className="text-gray-600 leading-relaxed italic border-l-2 border-secondary pl-4">
              {school.about.description}
            </p>
          </div>

          {/* Mission Card - Featured with Gold Border */}
          <div className="bg-primary p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Mission</h3>
            <p className="text-white/90 leading-relaxed relative z-10">
              {school.about.mission}
            </p>
          </div>

          {/* Management Card */}
          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-gray-200/50 border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
               <span className="text-primary font-bold">03</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-dark mb-4">Management</h3>
            <p className="text-gray-600 leading-relaxed pl-4">
              {school.about.management}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}