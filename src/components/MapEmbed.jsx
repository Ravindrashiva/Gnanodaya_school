export default function MapEmbed() {
  return (
    <section className="py-16 bg-[var(--color-surface)]" id="location">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Location
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
            Find us in Madanapalle
          </h2>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">
          <iframe
            title="Gynodaya School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.4713609602827!2d78.49761911509698!3d13.517355290746253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbab3b34f24a591%3A0xdc923dc302adc6bb!2sMadanapalle%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="h-96 w-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
