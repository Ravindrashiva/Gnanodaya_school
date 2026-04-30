import { motion } from 'framer-motion'

function QuickInfo() {
  const stats = [
    {
      number: '25+',
      label: 'Years of Excellence',
      icon: '🏆'
    },
    {
      number: '1000+',
      label: 'Happy Students',
      icon: '👨‍🎓'
    },
    {
      number: '50+',
      label: 'Expert Teachers',
      icon: '👨‍🏫'
    },
    {
      number: '10',
      label: 'Classes (LKG-10th)',
      icon: '📚'
    }
  ]

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gynodaya School at a Glance
          </h2>
          <p className="text-xl text-white/90">
            Excellence in education since establishment
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">🏫 Best School in Madanapalle</h3>
            <p className="text-white/90">
              Andhra Pradesh State Board curriculum • Modern facilities • Holistic development •
              Safe and nurturing environment for every child
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuickInfo