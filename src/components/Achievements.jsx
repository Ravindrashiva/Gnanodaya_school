import { school } from '../data/siteContent'

export default function Achievements() {
  return (
    <section className="py-16 bg-slate-900" id="achievements">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">
            Achievements
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mt-4">Achievements</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {school.achievements.map((achievement, index) => (
            <div key={index} className="rounded-[2rem] border border-slate-700 bg-slate-800 shadow-sm overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-500">
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <span className="text-slate-400">Achievement Image</span>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-500">★</span>
                  <span className="inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{achievement.title}</h3>
                <p className="text-slate-300 leading-8">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}