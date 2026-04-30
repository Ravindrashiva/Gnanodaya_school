const facilities = [
  {
    title: 'Smart Classrooms',
    detail: 'Interactive learning spaces with modern teaching aids and safe seating for every student.',
  },
  {
    title: 'Science & Computer Labs',
    detail: 'Hands-on practical learning with dedicated science and computer labs for curious minds.',
  },
  {
    title: 'Sports & Activity Zones',
    detail: 'Playfields, indoor sports, and activity areas that support fitness, fun, and teamwork.',
  },
]

export default function FacilitiesPreview() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Facilities</p>
          <h2 className="mt-4 text-4xl font-bold text-[var(--color-primary)] sm:text-5xl">
            Campus spaces designed for learning and joy.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Experience a safe, inspiring environment with nurturing staff, well-planned classrooms, and diverse student activities.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {facilities.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{item.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
