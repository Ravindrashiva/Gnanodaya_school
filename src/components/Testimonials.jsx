import { motion } from 'framer-motion'
import { school } from '../data/siteContent'

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-[var(--color-primary)] text-white" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Hear from parents, students and alumni
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {school.testimonials.map((item) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-lg leading-8">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-[var(--color-secondary)]">{item.name}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-white/70">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
