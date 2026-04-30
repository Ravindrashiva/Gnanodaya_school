import { school } from '../data/siteContent'

export default function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl mt-4">
            Get in touch with our school office
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-[var(--color-secondary)] transition">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">Address</h3>
            <p className="mt-3 text-gray-600">{school.contact.address}</p>
          </div>
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-[var(--color-secondary)] transition">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">Phone</h3>
            <p className="mt-3 text-gray-600">{school.contact.phone}</p>
          </div>
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-[var(--color-secondary)] transition">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">Email</h3>
            <p className="mt-3 text-gray-600">{school.contact.email}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
