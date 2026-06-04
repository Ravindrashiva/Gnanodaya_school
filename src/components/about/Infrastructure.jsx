"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, MonitorPlay, FlaskConical, BookMarked,
  Bus, TreePine, Dumbbell, Home,
  CheckCircle2, ArrowRight, Shield, Utensils,
  Users, Award, Target, GraduationCap, Microscope,
  Wifi, Zap, MapPin
} from 'lucide-react';

/* ─── SEO Meta (use with react-helmet or Next.js <Head>) ─────────────────────
  title: "Infrastructure & Facilities | Gnanodaya School Madanapalle"
  description: "Explore world-class infrastructure at Gnanodaya School Madanapalle —
    hostel, digital classrooms, science & computer labs, library, transport, sports
    grounds and more. Admissions open for 2026-27."
  keywords: "Gnanodaya School facilities, Madanapalle school infrastructure, best school
    facilities Andhra Pradesh, hostel school Madanapalle, digital classroom Madanapalle"
────────────────────────────────────────────────────────────────────────────── */

const facilities = [
  {
    icon: Home,
    title: 'Hostel Facility',
    badge: 'Residential',
    desc: 'Fully residential hostel with 24/7 supervision, dedicated wardens, and CCTV surveillance — a safe, disciplined home-away-from-home for outstation students.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
  {
    icon: Utensils,
    title: 'Healthy & Organic Food',
    badge: 'Pure Veg Kitchen',
    desc: 'Nutritious, home-style organic meals planned by diet experts served in the hostel mess — fuelling students for peak academic and physical performance.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
  {
    icon: MonitorPlay,
    title: 'Digital Classrooms',
    badge: 'Smart Tech',
    desc: 'Modern smart classrooms equipped with interactive boards, audio-visual tools, and e-learning modules to bring every concept to life.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
  {
    icon: Microscope,
    title: 'Science Laboratory',
    badge: 'Hands-On Learning',
    desc: 'Well-stocked Physics, Chemistry, and Biology labs enabling students to conduct experiments, develop scientific reasoning, and excel in NEET & IIT-JEE.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
  {
    icon: MonitorPlay,
    title: 'Computer Laboratory',
    badge: 'Technology',
    desc: 'State-of-the-art computer lab with high-speed internet access, programming tools, and digital literacy programs from early classes onwards.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
  {
    icon: BookMarked,
    title: 'Library',
    badge: 'Knowledge Hub',
    desc: 'A rich library stocked with thousands of books, periodicals, and reference materials across all subjects, fostering a life-long habit of reading and research.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
  {
    icon: Bus,
    title: 'Transportation',
    badge: 'All Routes',
    desc: 'Safe and reliable GPS-tracked school bus service covering all major routes across Madanapalle — ensuring timely, secure daily commute for every student.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
  {
    icon: Dumbbell,
    title: 'Playground & Sports',
    badge: 'Sports & Fitness',
    desc: 'Expansive playgrounds and facilities for cricket, volleyball, kabaddi, and athletics     — building physical fitness, discipline, and team spirit.',
    color: 'from-[#0A4D2E] to-[#063d22]',
  },
];

const specializations = [
  'Comprehensive education from Nursery to 10th Class',
  'Experienced and dedicated teaching staff',
  'IIT & NEET Foundation coaching from early classes',
  'Special training for Olympiad and scholarship exams',
  'Value-based education and strong discipline',
  'Scouts, Guides & N.C.C. programs',
  'Importance given to sports and cultural activities',
  'Clean, green, and hygienic campus environment',
];

const highlights = [
  { value: '8+',    label: 'World-Class Facilities', icon: Building2 },
  { value: '50+',   label: 'Qualified Faculty',       icon: Award },
  { value: '10k+',  label: 'Alumni Network',           icon: Users },
  { value: '100%',  label: 'Academic Success Rate',    icon: Target },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Infrastructure() {
  return (
    <main id="infrastructure-page" className="py-24 bg-[#fafaf9] overflow-hidden relative">

      {/* Watermark */}
      <div className="absolute top-20 -right-20 pointer-events-none select-none opacity-[0.03] -rotate-90 origin-right" aria-hidden="true">
        <span className="text-[15rem] font-black text-[#0A4D2E] whitespace-nowrap uppercase">Facilities</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ══ PAGE HEADER ══ */}
        <header className="text-center mb-20">
          <motion.div {...fadeUp()} className="inline-flex p-3 bg-[#0A4D2E] rounded-2xl mb-6 shadow-xl">
            <Building2 className="text-[#FFC107] w-6 h-6" aria-hidden="true" />
          </motion.div>
          <motion.p {...fadeUp(0.05)} className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            World-Class Facilities
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-black text-[#0A4D2E] uppercase tracking-tighter">
            Our <span className="text-[#FFC107]">Infrastructure</span>
          </motion.h1>
          <motion.p {...fadeUp(0.15)} className="mt-5 text-gray-500 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
            Gnanodaya School, Madanapalle offers best-in-class facilities designed to support
            holistic development — academic, physical, and personal — for every student from
            Nursery to Class 10.
          </motion.p>
        </header>

        {/* ══ STAT HIGHLIGHTS ══ */}
        <section aria-label="Infrastructure highlights" className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
            {highlights.map((h, i) => (
              <motion.div key={i} role="listitem" {...fadeUp(i * 0.08)}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center hover:border-[#FFC107] transition-colors group">
                <h.icon className="w-5 h-5 text-[#FFC107] mx-auto mb-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <div className="text-3xl font-black text-[#0A4D2E] mb-1">{h.value}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ FACILITIES BENTO GRID ══ */}
        <section aria-labelledby="facilities-heading" className="mb-24">
          <div className="text-center mb-12">
            <motion.p {...fadeUp()} className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[10px] mb-3">
              Everything Under One Roof
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} id="facilities-heading" className="text-3xl md:text-5xl font-black text-[#0A4D2E] uppercase tracking-tighter">
              Built for <span className="text-[#FFC107]">Every Student</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="School facilities">
            {facilities.map((item, i) => (
              <motion.article key={i} role="listitem"
                {...fadeUp(i * 0.07)}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#FFC107] transition-all duration-500 group overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-[#0A4D2E] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                      <item.icon className="w-7 h-7 text-[#FFC107]" aria-hidden="true" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#0A4D2E] bg-[#FFC107]/15 px-3 py-1 rounded-full border border-[#FFC107]/30">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-[#0A4D2E] font-black uppercase text-xs tracking-widest mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[11px] font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {/* Hover accent bar */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#FFC107] to-[#0A4D2E] transition-all duration-500" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </section>

        {/* ══ SPECIALISATIONS BANNER ══ */}
        <section aria-labelledby="spec-heading" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0A4D2E] to-[#063d22] rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">

            {/* Decorative bg word */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04]" aria-hidden="true">
              <span className="text-[12rem] font-black text-white uppercase tracking-tighter whitespace-nowrap">EXCELLENCE</span>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <p className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[10px] mb-4">
                  What We Offer
                </p>
                <h2 id="spec-heading" className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
                  Our <span className="text-[#FFC107] italic">Specialisations</span>
                </h2>
                <p className="text-emerald-100/70 text-sm font-medium leading-relaxed mb-8">
                  Gnanodaya School Madanapalle provides a comprehensive, future-ready curriculum
                  backed by experienced educators and modern pedagogy — from foundational Nursery
                  classes to competitive exam preparation at Class 10.
                </p>
                <Link to="/admissions">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 bg-[#FFC107] text-[#0A4D2E] px-8 py-4 rounded-full font-bold transition-all hover:bg-white cursor-pointer"
                    aria-label="Apply for Gnanodaya School admissions 2026-27 academic year">
                    Apply for 2026–27 Admissions
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </motion.button>
                </Link>
              </div>

              {/* Right checklist */}
              <ul className="space-y-3" aria-label="List of specializations at Gnanodaya School Madanapalle">
                {specializations.map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC107] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span className="text-emerald-100/80 text-sm font-semibold leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* ══ BOARDING LIFE STRIP ══ */}
        <section aria-labelledby="boarding-heading" className="mb-24">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Daily Routine Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#002366] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 opacity-10" aria-hidden="true">
                <GraduationCap size={100} />
              </div>
              <p className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[10px] mb-3">Daily Schedule</p>
              <h2 id="boarding-heading" className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 text-white">
                A Structured <span className="text-[#FFC107]">Boarding Life</span>
              </h2>
              <ul className="space-y-4" aria-label="Daily hostel schedule at Gnanodaya School">
                {[
                  { time: '05:30 AM', task: 'Yoga & Personality Development' },
                  { time: '08:30 AM', task: 'Academic Sessions Begin' },
                  { time: '05:00 PM', task: 'Sports & Outdoor Playtime' },
                  { time: '06:30 PM', task: 'Supervised Evening Study' },
                  { time: '08:30 PM', task: 'Healthy Organic Dinner' },
                ].map((row, i) => (
                  <li key={i} className="group border-b border-white/10 pb-3">
                    <p className="text-[10px] font-black text-[#FFC107] tracking-[0.2em] uppercase mb-1">{row.time}</p>
                    <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{row.task}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Admissions CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFC107] rounded-[3rem] p-10 relative overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="absolute bottom-0 right-0 opacity-10" aria-hidden="true">
                <Shield size={200} />
              </div>
              <div className="relative z-10">
                <p className="text-[#0A4D2E] font-black uppercase tracking-[0.4em] text-[10px] mb-3">
                  Admissions Open
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-[#0A4D2E] uppercase tracking-tighter leading-tight mb-6">
                  Join Us for <span className="italic">2026–27</span>
                </h2>
                <p className="text-[#0A4D2E]/70 font-bold text-sm leading-relaxed mb-8">
                  Admissions have started for Nursery to 10th Class. Limited seats available —
                  register immediately to secure your child's future at Gnanodaya School, Madanapalle.
                </p>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-[#0A4D2E] font-black text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    Prashanth Nagar, Madanapalle – 517325
                  </div>
                  <div className="flex items-center gap-2 text-[#0A4D2E] font-black text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <a href="tel:9440893699" className="hover:underline">Mobile: 9440893699</a>
                  </div>
                </div>
              </div>
              <Link to="/admissions" className="relative z-10">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 bg-[#0A4D2E] text-[#FFC107] px-8 py-4 rounded-full font-black uppercase tracking-wide transition-all hover:bg-white hover:text-[#0A4D2E] cursor-pointer"
                  aria-label="Register now for Gnanodaya School admissions 2026-27">
                  Register Now — Limited Seats
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══ BOTTOM CTA ══ */}
        <footer className="text-center">
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
            Start your journey today
          </p>
          <Link to="/contact"
            className="text-2xl md:text-4xl font-black text-[#0A4D2E] hover:text-[#FFC107] transition-colors underline decoration-[#FFC107] decoration-4 underline-offset-8"
            aria-label="Contact Gnanodaya School Madanapalle about facilities and admissions">
            Explore the School That Has It All
          </Link>
          <address className="not-italic mt-6 text-gray-400 text-xs font-bold tracking-wider">
            Prashanth Nagar, Madanapalle – 517325 &nbsp;|&nbsp;
            <a href="tel:9440893699" className="hover:text-[#FFC107] transition-colors">9440893699</a>
          </address>
        </footer>

      </div>
    </main>
  );
}