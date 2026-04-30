import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Holistic Growth',
    description: 'Balanced academic and personality development with creative clubs, sports, and leadership programs.',
  },
  {
    title: 'Modern Campus',
    description: 'Safe classrooms, smart boards, activity zones, and a well-equipped library for experiential learning.',
  },
  {
    title: 'Parent Partnership',
    description: 'Regular updates, parent-teacher meetings, and guidance that keeps every family connected to progress.',
  },
]

export default function AboutPreview() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              About the Hub
            </span>
            <h2 className="mt-6 text-4xl font-bold text-[var(--color-primary)] sm:text-5xl">
              A nurturing learning space for Gynodaya students.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              Gynodaya Learning Hub combines strong State Board academics with a warm, inspiring environment so every child can thrive, explore and feel confident.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-secondary"
            >
              Read Our Story
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">{feature.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
