import { school } from '../data/siteContent'

export default function Facilities() {
  return (
    <section className="py-16 bg-white" id="facilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Facilities
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl mt-4">
            Everything a modern school should offer
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {school.facilities.map((facility) => (
            <article key={facility.title} className="rounded-[2rem] border border-transparent bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--color-accent)]">
              <div className="mb-5 inline-flex items-center rounded-full bg-[var(--color-highlight)]/15 px-4 py-2 text-sm font-semibold text-[var(--color-highlight)]">
                <span className="mr-2">✔</span>
                Essential Facility
              </div>
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{facility.title}</h3>
              <p className="mt-4 text-gray-700 leading-8">{facility.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
