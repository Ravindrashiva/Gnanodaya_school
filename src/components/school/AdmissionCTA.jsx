import { Link } from 'react-router-dom'

export default function AdmissionCTA() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-900/10 sm:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-secondary">Admissions Open</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl text-white">
              Join Gynodaya Learning Hub for a brighter academic journey.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
              Limited seats available for the new academic year. Give your child a supportive, inspiring school foundation with the best of academics and values.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Link
              to="/admissions"
              className="inline-flex w-full items-center justify-center rounded-full bg-secondary px-8 py-4 text-center text-base font-semibold text-primary shadow-lg shadow-secondary/20 transition hover:opacity-95"
            >
              Start Admission
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
