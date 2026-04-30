import { motion } from 'framer-motion'

const stats = [
  { value: '20+', label: 'Years of Excellence' },
  { value: '1500+', label: 'Students Empowered' },
  { value: '120+', label: 'Skilled Teachers' },
  { value: '100%', label: 'Safe Campus' },
]

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-secondary/20 bg-white shadow-xl shadow-slate-900/5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 bg-primary px-6 py-8 text-white sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
        >
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <p className="text-3xl font-semibold tracking-tight text-secondary">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/80">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
