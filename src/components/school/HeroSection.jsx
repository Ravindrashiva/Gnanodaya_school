import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-5 inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Gynodaya Learning Hub
          </span>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            A premium learning experience for every Gynodaya student
          </h1>
          <p className="mt-8 max-w-xl text-base text-white/80 sm:text-lg lg:text-xl">
            Inspire curiosity, build confidence, and unlock potential with modern classes, state-board curriculum, and a nurturing school ecosystem designed for LKG to 10th grade.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/admissions" className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-primary shadow-lg shadow-secondary/20 transition hover:opacity-90">
              Apply Now
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              Discover Gynodaya
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
