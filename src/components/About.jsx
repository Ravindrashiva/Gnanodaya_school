import { school } from '../data/siteContent'

export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{school.about.headline}</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">History</h3>
            <p className="text-gray-600 leading-7">{school.about.description}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Mission</h3>
            <p className="text-gray-600 leading-7">{school.about.mission}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Management</h3>
            <p className="text-gray-600 leading-7">{school.about.management}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
