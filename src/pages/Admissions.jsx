import { motion } from 'framer-motion'

function Admissions() {
  const eligibility = [
    {
      class: 'LKG',
      age: '3.5 - 4.5 years',
      requirements: 'Basic communication skills, toilet trained'
    },
    {
      class: 'UKG',
      age: '4.5 - 5.5 years',
      requirements: 'Basic literacy and numeracy skills'
    },
    {
      class: 'Grade 1',
      age: '5.5 - 6.5 years',
      requirements: 'Basic reading and writing skills'
    },
    {
      class: 'Grades 2-5',
      age: 'Age appropriate for grade',
      requirements: 'Previous grade completion certificate'
    },
    {
      class: 'Grades 6-10',
      age: 'Age appropriate for grade',
      requirements: 'Transfer certificate from previous school'
    }
  ]

  const documents = [
    'Birth Certificate',
    'Previous School Transfer Certificate',
    'Report Card/Progress Report',
    'Medical Certificate',
    'Address Proof',
    'Parent ID Proof',
    'Passport Size Photos (4 copies)',
    'Aadhaar Card (Student & Parents)'
  ]

  const steps = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill out the admission form online or visit our school office'
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit required documents for verification'
    },
    {
      step: 3,
      title: 'Entrance Assessment',
      description: 'Simple assessment to understand your child\'s readiness'
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Meet with parents and child for better understanding'
    },
    {
      step: 5,
      title: 'Admission Confirmation',
      description: 'Receive admission letter and fee payment details'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions Open 2026-2027</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join the best school in Madanapalle • Limited seats available
            </p>
            <motion.a
              href="#apply"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600">
              Age requirements for admission to different classes
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Age Range</th>
                  <th className="px-6 py-4 text-left">Requirements</th>
                </tr>
              </thead>
              <tbody>
                {eligibility.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary">{item.class}</td>
                    <td className="px-6 py-4">{item.age}</td>
                    <td className="px-6 py-4">{item.requirements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600">
              Please prepare these documents before applying
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 shadow-md flex items-center"
              >
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  ✓
                </div>
                <span className="text-gray-700">{document}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple 5-step process to join our school family
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start mb-8"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section id="apply" className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards your child's bright future at the best school in Madanapalle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/your-admission-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Apply Online Now
              </a>
              <a
                href="tel:+919876543210"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
              >
                Call for Admission
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Text */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Best school in Madanapalle admissions • State board school Madanapalle admission •
              LKG to 10th class admission • Andhra Pradesh State Board school admission •
              School admission Madanapalle • Online admission form • School fees •
              Admission process • Documents required for school admission
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Admissions