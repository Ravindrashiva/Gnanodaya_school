import { school } from '../data/siteContent'

export default function Mentors() {
  return (
    <section className="py-16 bg-slate-900" id="mentors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">
            Guidance from our Mentors
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mt-4">
            Leadership and Vision
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {school.mentors.map((mentor) => (
            <div key={mentor.name} className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-sm hover:shadow-lg hover:border-amber-500 transition">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-slate-900 font-semibold text-xl">
                  {mentor.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                  <p className="text-sm font-medium text-amber-500 uppercase tracking-wide">{mentor.role}</p>
                  <blockquote className="mt-4 text-slate-300 italic leading-7">
                    "{mentor.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}