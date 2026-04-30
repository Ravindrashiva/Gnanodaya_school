import { school } from '../data/siteContent'

export default function News() {
  return (
    <section className="py-16 bg-white" id="news">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            News & Announcements
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-4">News & Announcements</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {school.news.map((item, index) => (
            <div key={index} className="rounded-[2rem] border border-transparent bg-white shadow-sm p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--color-accent)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[var(--color-primary)]">{item.date}</span>
                <span className="inline-flex rounded-full bg-[var(--color-highlight)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-highlight)]">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">{item.title}</h3>
              <a href={item.link} className="text-[var(--color-accent)] hover:text-[var(--color-secondary)] font-semibold">
                Read More →
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]">
            View All
          </a>
        </div>
      </div>
    </section>
  )
}