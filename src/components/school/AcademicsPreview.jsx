import { Link } from 'react-router-dom'

const academics = [
  {
    title: 'State Board Curriculum',
    detail: 'Tailored lessons for LKG to Class 10 with strong fundamentals in maths, science, languages, and values.',
  },
  {
    title: 'Focused Learning',
    detail: 'Small groups, regular assessments, and personalised support help every child succeed.',
  },
  {
    title: 'Activity-Based Classes',
    detail: 'Experiments, projects, and creative workshops make learning fun and memorable.',
  },
]

export default function AcademicsPreview() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Academics</p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--color-primary)] sm:text-5xl">
            Learning that prepares students for life.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Our academic approach blends strong knowledge, digital literacy and confidence-building experiences aligned to State Board excellence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {academics.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/academics"
            className="inline-flex rounded-full border border-primary bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            Explore Academics
          </Link>
        </div>
      </div>
    </section>
  )
}
