import { school } from '../data/siteContent'

export default function Mentors() {
  return (
    <section className="py-16 bg-white" id="mentors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Guidance from our Mentors
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-4">
            Leadership and Vision
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {school.mentors.map((mentor) => (
            <div key={mentor.name} className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-[var(--color-secondary)] transition">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold text-xl">
                  {mentor.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)]">{mentor.name}</h3>
                  <p className="text-sm font-medium text-[var(--color-secondary)] uppercase tracking-wide">{mentor.role}</p>
                  <blockquote className="mt-4 text-gray-600 italic leading-7">
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