import { school } from '../data/siteContent'

export default function Admissions() {
  return (
    <section className="py-16 bg-[var(--color-surface)]" id="admissions">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-5xl">
          Admissions Open 2026-27
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Secure your child's seat in the legacy of excellence.
        </p>
        <div className="mt-10">
          <a className="inline-flex items-center justify-center rounded-full bg-[var(--color-secondary)] px-8 py-4 text-lg font-semibold text-[var(--color-primary)] shadow-lg shadow-[rgba(0,0,0,0.18)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]" href="#contact">
            Apply Online Now
          </a>
        </div>
      </div>
    </section>
  )
}
