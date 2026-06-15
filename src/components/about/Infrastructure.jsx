"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2, MonitorPlay, BookMarked, Bus, Dumbbell, Home,
  CheckCircle2, ArrowRight, Shield, Utensils, Users, Award,
  Target, GraduationCap, Microscope, Zap, MapPin,
} from "lucide-react";

/* ─── SEO Meta ──────────────────────────────────────────────────────────────
  title: "Infrastructure & Facilities | Gnanodaya School Madanapalle"
  description: "World-class infrastructure at Gnanodaya School Madanapalle —
    hostel, digital classrooms, science labs, library, transport, sports &
    more. Admissions open 2026-27."
  keywords: "Gnanodaya School facilities, Madanapalle school infrastructure,
    best school Andhra Pradesh, hostel school Madanapalle"
──────────────────────────────────────────────────────────────────────────── */

/* ─── DATA ──────────────────────────────────────────────────────────────── */
const FACILITIES = [
  {
    icon: Home,
    title: "Hostel Facility",
    badge: "Residential",
    desc: "A fully residential hostel with 24/7 supervision, dedicated wardens, and CCTV surveillance — a secure, disciplined home-away-from-home for outstation students.",
  },
  {
    icon: Utensils,
    title: "Organic Kitchen",
    badge: "Pure Veg",
    desc: "Nutritious, home-style organic meals crafted by diet experts — served in a clean hostel mess to fuel peak academic and physical performance every single day.",
  },
  {
    icon: MonitorPlay,
    title: "Digital Classrooms",
    badge: "Smart Tech",
    desc: "Smart classrooms powered by interactive boards, audio-visual tools, and e-learning modules that transform every concept into an immersive, memorable lesson.",
  },
  {
    icon: Microscope,
    title: "Science Labs",
    badge: "Hands-On",
    desc: "Fully equipped Physics, Chemistry, and Biology labs where students conduct real experiments, build scientific reasoning, and lay strong foundations for NEET & IIT-JEE.",
  },
  {
    icon: MonitorPlay,
    title: "Computer Lab",
    badge: "Technology",
    desc: "A state-of-the-art computing facility with high-speed internet, modern programming tools, and digital literacy courses — starting from the earliest classes.",
  },
  {
    icon: BookMarked,
    title: "Library",
    badge: "Knowledge Hub",
    desc: "Thousands of books, periodicals, and reference titles spanning every subject — a quiet sanctuary that cultivates lifelong curiosity, research skills, and deep reading.",
  },
  {
    icon: Bus,
    title: "Transportation",
    badge: "All Routes",
    desc: "GPS-tracked school buses covering all major routes across Madanapalle — ensuring a safe, punctual, and stress-free daily commute for every student.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Grounds",
    badge: "Fitness",
    desc: "Expansive playgrounds and dedicated facilities for cricket, volleyball, kabaddi, and athletics — building strength, discipline, and unbreakable team spirit.",
  },
];

const SPECIALISATIONS = [
  "Comprehensive education from Nursery to 10th Class",
  "Experienced, passionate, and dedicated teaching staff",
  "IIT & NEET Foundation coaching from early classes",
  "Special training for Olympiad and scholarship exams",
  "Value-based education rooted in strong discipline",
  "Scouts, Guides & N.C.C. character-building programs",
  "Equal importance given to sports and cultural activities",
  "Clean, green, and hygienic campus environment",
];

const HIGHLIGHTS = [
  { value: "8+",    label: "World-Class Facilities",  icon: Building2 },
  { value: "50+",   label: "Qualified Faculty",        icon: Award },
  { value: "10k+",  label: "Strong Alumni Network",    icon: Users },
  { value: "100%",  label: "Academic Success Rate",    icon: Target },
];

const SCHEDULE = [
  { time: "05:30 AM", task: "Yoga & Personality Development" },
  { time: "08:30 AM", task: "Academic Sessions Begin" },
  { time: "05:00 PM", task: "Sports & Outdoor Playtime" },
  { time: "06:30 PM", task: "Supervised Evening Study" },
  { time: "08:30 PM", task: "Healthy Organic Dinner" },
];

/* ─── ANIMATION HELPERS ──────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

/* ─── SUB-COMPONENTS ─────────────────────────────────────────────────────── */

/** Section label pill */
const Label = ({ children }) => (
  <p className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[10px] mb-3">
    {children}
  </p>
);

/** Divider with optional label */
const SectionDivider = () => (
  <div className="border-t border-gray-200 my-0" aria-hidden="true" />
);

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════════════ */
export default function Infrastructure() {
  return (
    <main
      id="infrastructure-page"
      className="bg-[#fafaf9] overflow-hidden"
      aria-label="Infrastructure and Facilities page"
    >
      {/* ══ HERO HEADER ═══════════════════════════════════════════════════ */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div {...fadeUp()} className="inline-flex p-3 bg-[#0A4D2E] rounded-2xl mb-5 shadow-lg">
            <Building2 className="text-[#FFC107] w-6 h-6" aria-hidden="true" />
          </motion.div>
          <motion.p {...fadeUp(0.05)}>
            <Label>World-Class Facilities</Label>
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black text-[#0A4D2E] uppercase tracking-tighter"
          >
            Our <span className="text-[#FFC107]">Infrastructure</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.15)}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm font-medium leading-relaxed"
          >
            Gnanodaya School, Madanapalle offers best-in-class facilities
            designed to support holistic development — academic, physical, and
            personal — for every student from Nursery to Class 10.
          </motion.p>
        </div>
      </header>

      {/* ══ STAT HIGHLIGHTS ═══════════════════════════════════════════════ */}
      <section aria-label="Infrastructure highlights" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="flex flex-col items-center justify-center py-10 px-6 text-center hover:bg-[#0A4D2E] group transition-colors duration-300"
              >
                <h.icon
                  className="w-5 h-5 text-[#FFC107] mb-3 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <div className="text-3xl font-black text-[#0A4D2E] group-hover:text-[#FFC107] transition-colors mb-1">
                  {h.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-emerald-200 transition-colors">
                  {h.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACILITIES GRID ═══════════════════════════════════════════════ */}
      <section aria-labelledby="facilities-heading" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <motion.div {...fadeUp()}>
              <Label>Everything Under One Roof</Label>
            </motion.div>
            <motion.h2
              {...fadeUp(0.05)}
              id="facilities-heading"
              className="text-3xl md:text-5xl font-black text-[#0A4D2E] uppercase tracking-tighter"
            >
              Built for <span className="text-[#FFC107]">Every Student</span>
            </motion.h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-3xl overflow-hidden"
            role="list"
            aria-label="School facilities"
          >
            {FACILITIES.map((item, i) => (
              <motion.article
                key={i}
                role="listitem"
                {...fadeUp(i * 0.06)}
                className={[
                  "flex flex-col p-8 border-gray-200 group hover:bg-[#0A4D2E] transition-colors duration-400",
                  // right borders between columns
                  i % 4 !== 3 ? "lg:border-r" : "",
                  // bottom borders between rows
                  i < 4 ? "border-b lg:border-b" : "",
                  // mobile & tablet dividers
                  "border-b last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:lg:border-r-0",
                ].join(" ")}
              >
                {/* Icon + Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="bg-[#0A4D2E] group-hover:bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-colors duration-300 shrink-0">
                    <item.icon
                      className="w-6 h-6 text-[#FFC107] group-hover:text-[#0A4D2E] transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0A4D2E] group-hover:text-[#FFC107] bg-[#FFC107]/15 group-hover:bg-white/10 px-3 py-1 rounded-full border border-[#FFC107]/30 group-hover:border-white/20 transition-colors duration-300">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#0A4D2E] group-hover:text-[#FFC107] font-black uppercase text-xs tracking-widest mb-2 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description — grows to fill card height */}
                <p className="text-slate-400 group-hover:text-emerald-100/80 text-[11px] font-semibold leading-relaxed flex-1 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SPECIALISATIONS BANNER ════════════════════════════════════════ */}
      <section aria-labelledby="spec-heading" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0A4D2E] to-[#052e1a] rounded-3xl overflow-hidden border border-[#0A4D2E]"
          >
            {/* Decorative header bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#FFC107] via-white/20 to-[#FFC107]" aria-hidden="true" />

            <div className="p-10 md:p-14 grid md:grid-cols-2 gap-12 items-start">
              {/* Left */}
              <div>
                <Label>What We Offer</Label>
                <h2
                  id="spec-heading"
                  className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-5"
                >
                  Our{" "}
                  <span className="text-[#FFC107] italic">Specialisations</span>
                </h2>
                <p className="text-emerald-100/70 text-sm font-medium leading-relaxed mb-8">
                  Gnanodaya School provides a comprehensive, future-ready
                  curriculum backed by experienced educators and modern pedagogy
                  — from foundational Nursery classes to competitive exam
                  preparation at Class 10.
                </p>
                <Link to="/admissions">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-3 bg-[#FFC107] text-[#0A4D2E] px-8 py-4 rounded-full font-black text-sm uppercase tracking-wide transition-colors hover:bg-white cursor-pointer"
                    aria-label="Apply for Gnanodaya School admissions 2026-27"
                  >
                    Apply for 2026–27 Admissions
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </motion.button>
                </Link>
              </div>

              {/* Right checklist */}
              <ul
                className="space-y-0 divide-y divide-white/10"
                aria-label="Specialisations at Gnanodaya School"
              >
                {SPECIALISATIONS.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 py-3 group"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <span className="text-emerald-100/75 text-sm font-semibold leading-snug group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ BOARDING LIFE ════════════════════════════════════════════════ */}
      <section aria-labelledby="boarding-heading" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Daily Schedule Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-[#002366] rounded-3xl p-10 text-white border border-[#002366] overflow-hidden relative"
            >
              <div
                className="absolute top-4 right-4 opacity-[0.07]"
                aria-hidden="true"
              >
                <GraduationCap size={120} />
              </div>
              <Label>Daily Schedule</Label>
              <h2
                id="boarding-heading"
                className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8 text-white"
              >
                A Structured{" "}
                <span className="text-[#FFC107]">Boarding Life</span>
              </h2>
              <ul
                className="divide-y divide-white/10"
                aria-label="Daily hostel schedule at Gnanodaya School"
              >
                {SCHEDULE.map((row, i) => (
                  <li key={i} className="group py-3.5 first:pt-0 last:pb-0">
                    <p className="text-[10px] font-black text-[#FFC107] tracking-[0.2em] uppercase mb-0.5">
                      {row.time}
                    </p>
                    <p className="text-sm font-bold text-white/75 group-hover:text-white transition-colors">
                      {row.task}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Admissions CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-[#FFC107] rounded-3xl p-10 border border-[#FFC107] overflow-hidden relative flex flex-col justify-between"
            >
              <div
                className="absolute bottom-0 right-0 opacity-[0.08]"
                aria-hidden="true"
              >
                <Shield size={180} />
              </div>
              <div className="relative z-10">
                <p className="text-[#0A4D2E] font-black uppercase tracking-[0.4em] text-[10px] mb-3">
                  Admissions Open
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-[#0A4D2E] uppercase tracking-tighter leading-tight mb-5">
                  Join Us for <span className="italic">2026–27</span>
                </h2>
                <p className="text-[#0A4D2E]/75 font-semibold text-sm leading-relaxed mb-6">
                  Admissions are now open for Nursery to 10th Class. Seats are
                  strictly limited — register today to secure your child's
                  place at Gnanodaya School, Madanapalle.
                </p>
                <div className="space-y-2 mb-8">
                  <address className="not-italic flex items-center gap-2 text-[#0A4D2E] font-black text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                    Prashanth Nagar, Madanapalle – 517325
                  </address>
                  <div className="flex items-center gap-2 text-[#0A4D2E] font-black text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <a href="tel:9440893699" className="hover:underline">
                      Mobile: 9440893699
                    </a>
                  </div>
                </div>
              </div>
              <Link to="/admissions" className="relative z-10">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 bg-[#0A4D2E] text-[#FFC107] px-8 py-4 rounded-full font-black uppercase tracking-wide text-sm transition-colors hover:bg-white hover:text-[#0A4D2E] cursor-pointer"
                  aria-label="Register now for Gnanodaya School admissions 2026-27"
                >
                  Register Now — Limited Seats
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════ */}
      <footer className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-5">
          Start your journey today
        </p>
        <Link
          to="/contact"
          className="text-2xl md:text-4xl font-black text-[#0A4D2E] hover:text-[#FFC107] transition-colors underline decoration-[#FFC107] decoration-4 underline-offset-8"
          aria-label="Contact Gnanodaya School Madanapalle about facilities and admissions"
        >
          Explore the School That Has It All
        </Link>
        <address className="not-italic mt-5 text-gray-400 text-xs font-bold tracking-wider">
          Prashanth Nagar, Madanapalle – 517325&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="tel:9440893699" className="hover:text-[#FFC107] transition-colors">
            9440893699
          </a>
        </address>
      </footer>
    </main>
  );
}