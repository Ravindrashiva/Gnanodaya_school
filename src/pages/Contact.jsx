import { motion } from 'framer-motion';
import { school } from '../data/siteContent.js';

function Contact() {
  // Container logic for staggered "one-by-one" reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      {/* 1. HERO SECTION */}
      <section className="bg-[#064E3B] text-white py-24 border-b-8 border-[#D4AF37] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#D4AF37] text-[#064E3B] mb-6 text-xs font-black uppercase tracking-widest">
              Connect With Us
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter uppercase">
              Contact <span className="text-[#D4AF37]">Us</span>
            </h1>
            <p className="text-xl text-emerald-100/70 max-w-2xl mx-auto font-light leading-relaxed">
              Have questions about admissions or campus life? Our administration is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Address */}
            <motion.div variants={itemVariants} className="group p-10 bg-[#fafaf9] rounded-3xl border-b-4 border-transparent hover:border-[#D4AF37] transition-all duration-300 shadow-sm">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">📍</div>
              <h3 className="text-2xl font-black text-[#064E3B] mb-4 uppercase tracking-tighter">Campus Address</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{school.contact.address}</p>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="group p-10 bg-[#fafaf9] rounded-3xl border-b-4 border-transparent hover:border-[#D4AF37] transition-all duration-300 shadow-sm text-center md:text-left">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">📞</div>
              <h3 className="text-2xl font-black text-[#064E3B] mb-4 uppercase tracking-tighter">Phone</h3>
              <a href={`tel:${school.contact.phone}`} className="text-xl font-bold text-[#D4AF37] hover:text-[#064E3B] block mb-2 transition-colors">
                {school.contact.phone}
              </a>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Office: 9 AM - 5 PM</p>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="group p-10 bg-[#fafaf9] rounded-3xl border-b-4 border-transparent hover:border-[#D4AF37] transition-all duration-300 shadow-sm">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">✉️</div>
              <h3 className="text-2xl font-black text-[#064E3B] mb-4 uppercase tracking-tighter">Email</h3>
              <a href={`mailto:${school.contact.email}`} className="text-lg font-bold text-[#D4AF37] hover:text-[#064E3B] break-all transition-colors">
                {school.contact.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. MAP SECTION */}
      <section className="py-20 bg-[#f3f4f1]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5!2d78.5!3d13.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMwJzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Campus Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 4. QUICK ACTIONS */}
      <section className="py-20 bg-[#064E3B]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-10 uppercase tracking-tight">Direct Support</motion.h2>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919876543210"
                className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black shadow-xl flex items-center justify-center uppercase tracking-widest"
              >
                <span className="mr-3">💬</span> WhatsApp Support
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${school.contact.phone}`}
                className="bg-[#D4AF37] text-[#064E3B] px-10 py-5 rounded-2xl font-black shadow-xl flex items-center justify-center uppercase tracking-widest"
              >
                <span className="mr-3">📞</span> Direct Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. SEO FOOTER */}
      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] leading-loose">
            Best school in Madanapalle • Gyanodaya High School Admissions • State Board School AP • Quality Education Madanapalle • Campus Visit • Contact School Administration
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Contact;