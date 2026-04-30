import { motion } from 'framer-motion'
import { school } from '../data/siteContent'

const slideVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function Slider() {
  return (
    <section className="py-20 bg-slate-50" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
            Campus Gallery
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--color-primary)] sm:text-5xl">
            Campus life at Gynodaya
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Explore the classrooms, labs, sports areas and student celebrations that create a joyful learning environment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {school.slider.map((slide) => (
            <motion.article
              key={slide.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideVariant}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="relative h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 to-transparent p-5">
                  <span className="inline-flex rounded-full bg-[var(--color-highlight)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-highlight)]">
                    {slide.category || 'Campus'}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{slide.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{slide.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
