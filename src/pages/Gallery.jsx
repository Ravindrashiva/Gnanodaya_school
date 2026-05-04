import { motion } from 'framer-motion';

function Gallery() {
  const galleryCategories = [
    {
      title: 'Campus',
      description: 'Beautiful campus facilities and infrastructure in Madanapalle',
      images: [
        'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      title: 'Activities',
      description: 'Students engaged in interactive learning and discovery',
      images: [
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      title: 'Annual Day',
      description: 'Celebrating cultural heritage and student achievements',
      images: [
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80'
      ]
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      
      {/* Hero Section - Forest Green & Gold */}
      <section className="bg-[#064E3B] text-white py-24 border-b-8 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37] text-[#064E3B] mb-6 text-xs font-black uppercase tracking-widest shadow-lg">
              Visual Journey
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
              School <span className="text-[#D4AF37]">Gallery</span>
            </h1>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto font-light">
              Explore the vibrant life and world-class facilities at Gyanodaya High School.
            </p>
          </motion.div>
        </div>
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full -mr-32 -mt-32" />
      </section>

      {/* Gallery Categories */}
      {galleryCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-[#f3f4f1]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 border-l-8 border-[#D4AF37] pl-6"
            >
              <h2 className="text-4xl font-black text-[#064E3B] uppercase tracking-tighter">
                {category.title}
              </h2>
              <p className="text-lg text-slate-500 italic mt-2">
                {category.description}
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {category.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl shadow-xl aspect-square border-2 border-transparent hover:border-[#D4AF37] transition-all duration-500"
                >
                  <img
                    src={image}
                    alt={`${category.title} ${imageIndex + 1}`}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">View Full Image</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Experience CTA */}
      <section className="py-20 bg-[#064E3B] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-4 border-[#D4AF37] p-12 rounded-[40px]"
          >
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Experience Our Campus</h2>
            <p className="text-emerald-100/70 text-xl mb-10 font-light">
              Pictures tell a story, but a visit creates a memory. 
              Schedule your personalized campus tour today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ y: -5 }}
                href="tel:+919876543210"
                className="bg-white text-[#064E3B] px-8 py-4 rounded-xl font-black shadow-lg uppercase tracking-widest"
              >
                📞 Schedule Visit
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="#admissions"
                className="bg-[#D4AF37] text-[#064E3B] px-8 py-4 rounded-xl font-black shadow-lg uppercase tracking-widest"
              >
                🎓 Apply Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '🏫', title: 'Smart Classrooms', desc: 'Tech-enabled learning environments' },
              { icon: '⚽', title: 'Sports Arenas', desc: 'Professional coaching and facilities' },
              { icon: '🎨', title: 'Creative Hubs', desc: 'Dedicated spaces for art & music' }
            ].map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-3xl bg-[#fafaf9] border-b-4 border-transparent hover:border-[#D4AF37] transition-all"
              >
                <div className="text-6xl mb-6">{facility.icon}</div>
                <h3 className="text-2xl font-black text-[#064E3B] mb-3 uppercase tracking-tighter">{facility.title}</h3>
                <p className="text-slate-500 font-medium">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <footer className="py-10 bg-[#064E3B]/5 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
          Best School in Madanapalle • Premier Education • State-of-the-Art Campus
        </div>
      </footer>
    </main>
  );
}

export default Gallery;