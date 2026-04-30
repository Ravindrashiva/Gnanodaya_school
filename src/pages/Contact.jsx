import { motion } from 'framer-motion'
import { school } from '../data/siteContent.js'

function Contact() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get in touch with the best school in Madanapalle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              We're here to answer your questions about admissions and school life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-gray-50 rounded-lg p-8"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Address</h3>
              <p className="text-gray-600 leading-relaxed">
                {school.contact.address}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-gray-50 rounded-lg p-8"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Phone</h3>
              <a
                href={`tel:${school.contact.phone}`}
                className="text-2xl font-bold text-secondary hover:text-primary transition-colors duration-300"
              >
                {school.contact.phone}
              </a>
              <p className="text-gray-600 mt-2">Mon - Sat: 9:00 AM - 5:00 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-gray-50 rounded-lg p-8"
            >
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Email</h3>
              <a
                href={`mailto:${school.contact.email}`}
                className="text-lg text-secondary hover:text-primary transition-colors duration-300"
              >
                {school.contact.email}
              </a>
              <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Find Us on Map
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Madanapalle for easy access
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5!2d78.5!3d13.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gynodaya School Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the next step towards your child's bright future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20know%20about%20admissions%20at%20Gynodaya%20School"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-300 shadow-lg"
              >
                <span className="mr-2">💬</span>
                WhatsApp Us
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
              >
                <span className="mr-2">📞</span>
                Call Now
              </a>
              <a
                href="#admissions"
                className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Apply Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Office Hours
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">School Office</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Monday - Saturday:</strong> 9:00 AM - 5:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                    <p><strong>Lunch Break:</strong> 1:00 PM - 2:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Academic Year</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>School Hours:</strong> 8:30 AM - 3:30 PM</p>
                    <p><strong>Admission Queries:</strong> All working days</p>
                    <p><strong>Emergency:</strong> 24/7 available</p>
                  </div>
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
              Best school in Madanapalle contact • State board school Madanapalle address •
              School phone number • School email • School location Madanapalle •
              Andhra Pradesh school contact • Gynodaya School contact details •
              School admission contact • School office hours • School map location
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact