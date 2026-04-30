import { motion } from 'framer-motion'
import { school } from '../data/siteContent.js'

function Academics() {
  const curriculum = [
    {
      phase: 'Foundation Phase',
      classes: 'LKG - UKG',
      focus: 'Play-based learning, social skills, basic literacy and numeracy',
      activities: ['Storytelling', 'Rhymes & Songs', 'Art & Craft', 'Basic Games']
    },
    {
      phase: 'Primary Phase',
      classes: 'Grades 1 - 5',
      focus: 'Core subjects foundation, environmental awareness, creative expression',
      activities: ['Science Experiments', 'Group Projects', 'Cultural Activities', 'Sports']
    },
    {
      phase: 'Upper Primary Phase',
      classes: 'Grades 6 - 8',
      focus: 'Subject specialization, critical thinking, leadership skills',
      activities: ['Debates', 'Science Fairs', 'Leadership Programs', 'Advanced Sports']
    },
    {
      phase: 'Secondary Phase',
      classes: 'Grades 9 - 10',
      focus: 'Board exam preparation, career guidance, life skills',
      activities: ['Board Exam Prep', 'Career Counseling', 'Community Service', 'Competitions']
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Andhra Pradesh State Board Curriculum • Best school in Madanapalle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Academic Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive education from LKG to 10th class following Andhra Pradesh State Board curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {curriculum.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{phase.phase}</h3>
                    <p className="text-secondary font-medium">{phase.classes}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{phase.focus}</p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.activities.map((activity, actIndex) => (
                      <span
                        key={actIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-600"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Modern Teaching Methods
            </h2>
            <p className="text-lg text-gray-600">
              Innovative approaches for effective learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Smart Classrooms</h3>
              <p className="text-gray-600">
                Interactive digital learning with multimedia content and visual aids
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Hands-on Learning</h3>
              <p className="text-gray-600">
                Practical experiments and project-based learning for better understanding
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Collaborative Learning</h3>
              <p className="text-gray-600">
                Group activities and peer learning to develop social and communication skills
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Programs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {school.programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Best school in Madanapalle • State board school Madanapalle • LKG to 10th class education •
              Andhra Pradesh State Board curriculum • Quality academics • Modern teaching methods •
              Smart classrooms • Hands-on learning • Holistic education
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Academics