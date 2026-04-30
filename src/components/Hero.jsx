import { motion } from 'framer-motion'
import { school } from '../data/siteContent'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] px-6 py-20 lg:px-8 lg:py-28" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(58,134,255,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(6,214,160,0.12),_transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-highlight)]/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-highlight)] shadow-[0_20px_80px_-50px_rgba(6,214,160,0.9)]"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-highlight)]" />
          LKG to Class 10 • AP State Board
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {school.hero.title}
          <span className="block text-[var(--color-secondary)]">{school.hero.subtitle}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80"
        >
          {school.hero.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-secondary)] px-8 py-4 text-lg font-semibold text-[var(--color-primary)] shadow-xl shadow-[rgba(0,0,0,0.18)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]"
            href="#admissions"
          >
            {school.hero.cta}
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/20"
            href="#contact"
          >
            Explore Campus
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28">
        <svg viewBox="0 0 1440 120" fill="none" className="h-full w-full">
          <path
            d="M0 80C240 120 480 40 720 56C960 72 1200 128 1440 88V120H0V80Z"
            fill="rgba(255,255,255,0.18)"
          />
          <path
            d="M0 96C240 148 480 20 720 42C960 64 1200 116 1440 76V120H0V96Z"
            fill="rgba(255,255,255,0.28)"
          />
        </svg>
      </div>
    </section>
  )
}
