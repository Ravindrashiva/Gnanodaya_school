import { motion } from 'framer-motion'

function Gallery() {
  const galleryCategories = [
    {
      title: 'Campus',
      description: 'Beautiful campus facilities and infrastructure',
      images: [
        'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      title: 'Activities',
      description: 'Students engaged in various learning activities',
      images: [
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80'
      ]
    },
    {
      title: 'Annual Day',
      description: 'Celebrating achievements and talents',
      images: [
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore life at Gynodaya School - Best school in Madanapalle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Categories */}
      {galleryCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: imageIndex * 0.1 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image}
                    alt={`${category.title} ${imageIndex + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Virtual Tour CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Our Campus
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a campus visit to see our facilities in person
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                📞 Schedule Visit
              </a>
              <a
                href="#admissions"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
              >
                🎓 Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600">
              Modern infrastructure for comprehensive learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🏫</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Smart Classrooms</h3>
              <p className="text-gray-600">Interactive learning with modern technology</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">⚽</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Sports Facilities</h3>
              <p className="text-gray-600">Comprehensive playground and sports equipment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Arts & Culture</h3>
              <p className="text-gray-600">Creative spaces for artistic expression</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Best school in Madanapalle gallery • State board school Madanapalle photos •
              School campus images • Student activities • Annual day celebrations •
              School facilities • Classroom photos • Sports activities •
              School events Madanapalle • Quality education infrastructure
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Gallery