import { motion } from 'framer-motion'
import { school } from '../data/siteContent.js'

function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Gynodaya School</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Building confident learners for tomorrow • Best school in Madanapalle
            </p>
          </motion.div>
        </div>
      </section>

      {/* About School */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {school.about.description}
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 italic">
                "State board school Madanapalle • Quality education for LKG to 10th class"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Vision & Mission</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading educational institution in Madanapalle, recognized for academic excellence,
                character development, and innovative teaching methodologies that prepare students for global challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                {school.about.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message from Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Message from Chairman
            </h2>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={school.mentors[0].image}
                    alt={school.mentors[0].name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {school.mentors[0].name}
                  </h3>
                  <p className="text-lg text-secondary font-medium mb-4">
                    {school.mentors[0].role}
                  </p>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "{school.mentors[0].quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Best school in Madanapalle • State board school Madanapalle • Quality education •
              LKG to 10th class • Andhra Pradesh State Board • Modern facilities •
              Experienced teachers • Safe campus • Holistic development
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage