import { school } from '../data/siteContent'

export default function Achievements() {
  return (
    <section className="py-16 bg-[var(--color-surface)]" id="achievements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Achievements
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-4">Achievements</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {school.achievements.map((achievement, index) => (
            <div key={index} className="rounded-[2rem] border border-transparent bg-white shadow-sm overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--color-accent)]">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Achievement Image</span>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-highlight)]/15 text-[var(--color-highlight)]">★</span>
                  <span className="inline-flex rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">{achievement.title}</h3>
                <p className="text-gray-700 leading-8">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}