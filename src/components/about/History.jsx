"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, Star, Award, Users, Building2,
  GraduationCap, ArrowRight, Target, Flame,
  Trophy, Lightbulb, Globe, HeartHandshake,
  Rocket, ScrollText, CheckCircle2
} from 'lucide-react';

/* --- Timeline & Data remains the same --- */
const timeline = [
  {
    year: '1989',
    title: 'The Foundation Stone',
    description: 'Gnanodaya School was born from a simple yet powerful vision — to bring quality English-medium education to every child in Madanapalle. With a small campus and a big dream, the school opened its doors committed to discipline, character, and knowledge.',
    icon: Building2,
    tag: 'Est. 1989',
    accent: true,
  },
  {
    year: '1995',
    title: 'Growing Roots',
    description: "Within six years, enrolment surpassed 500 students as families across Madanapalle trusted Gnanodaya with their children's futures. New classrooms, expanded faculty, and a stronger sports programme took shape.",
    icon: HeartHandshake,
    tag: 'Community Growth',
    accent: false,
  },
  {
    year: '2001',
    title: 'Embracing Technology',
    description: 'Gnanodaya became one of the first schools in Chittoor district to establish a dedicated computer laboratory, weaving digital literacy into everyday learning and giving students a decisive edge for the 21st century.',
    icon: Lightbulb,
    tag: 'Digital Pioneer',
    accent: true,
  },
  {
    year: '2008',
    title: 'Academic Recognition',
    description: "Consistent board results and a culture of excellence earned Gnanodaya School district-level recognition. NCC, Scouts & Guides units were formally commissioned, reinforcing the school's commitment to whole-person development.",
    icon: Trophy,
    tag: 'Recognised Excellence',
    accent: false,
  },
  {
    year: '2015',
    title: 'IIT & NEET Launchpad',
    description: 'The launch of dedicated Science & Mathematics enrichment blocks transformed outcomes for aspiring engineers and doctors. Students from Gnanodaya began qualifying for prestigious national exams like IIT-JEE and NEET, putting Madanapalle on the academic map.',
    icon: Rocket,
    tag: 'National Stage',
    accent: true,
  },
  {
    year: '2020',
    title: 'Resilience & Innovation',
    description: 'Through unprecedented challenges, Gnanodaya adapted swiftly — launching blended learning programmes, maintaining academic continuity, and ensuring zero disruption to student progress. The school emerged stronger with modernised digital infrastructure.',
    icon: Globe,
    tag: 'Adaptability',
    accent: false,
  },
  {
    year: '2026',
    title: '36 Years — Still Growing',
    description: "Today, Gnanodaya School stands as Madanapalle's most trusted educational institution with over 10,000 alumni shaping careers across India and the world. Admissions for 2026–27 are open — the next chapter begins with you.",
    icon: Star,
    tag: '36 Years Strong',
    accent: true,
  },
];

const stats = [
  { label: 'Years of Excellence', value: '36+',  icon: ScrollText,   color: 'bg-emerald-50 border border-emerald-200',  textColor: 'text-emerald-700', iconColor: 'text-amber-500' },
  { label: 'Alumni Worldwide',     value: '10k+', icon: Globe,         color: 'bg-sky-50 border border-sky-200',          textColor: 'text-sky-700',     iconColor: 'text-sky-400'   },
  { label: 'Expert Faculty',       value: '50+',  icon: Award,         color: 'bg-rose-50 border border-rose-200',        textColor: 'text-rose-700',    iconColor: 'text-rose-400'  },
  { label: 'Success Rate',         value: '100%', icon: Target,        color: 'bg-amber-50 border border-amber-200',      textColor: 'text-amber-700',   iconColor: 'text-amber-500' },
];

const values = [
  { title: 'Discipline',         desc: 'A structured environment that builds focus, responsibility, and self-mastery from the very first day.' },
  { title: 'Academic Rigour',    desc: 'Curriculum designed to challenge, inspire, and prepare students for the most competitive exams in India.' },
  { title: 'Value Education',    desc: 'Ethics, empathy, and civic responsibility woven into daily school life through NCC, Scouts, and cultural programmes.' },
  { title: 'Holistic Growth',    desc: 'Sports, arts, and co-curricular activities ensuring every child discovers and nurtures their unique strengths.' },
  { title: 'Parental Trust',     desc: 'Three decades of families choosing Gnanodaya, generation after generation — the ultimate measure of our legacy.' },
  { title: 'Innovation',         desc: "From the district's first computer lab to smart classrooms, we have always led the way in modern pedagogy." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function History() {
  return (
    <main id="history-page" className="bg-[#f8f8f6] overflow-x-hidden">

      {/* ══ HERO BAND ══ */}
      <section
        className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fefce8 50%, #f0fdf4 100%)' }}
        aria-labelledby="history-hero-heading"
      >
        {/* Subtle decorative circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" aria-hidden="true" />

        {/* Number watermark */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-end pr-8 pointer-events-none select-none" aria-hidden="true">
          <span className="text-[12rem] lg:text-[22rem] font-black text-emerald-900/[0.04] leading-none tracking-tighter">1989</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.p {...fadeUp()} className="text-amber-500 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-4">
            Est. 1989 · Madanapalle
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            id="history-hero-heading"
            className="text-4xl sm:text-5xl md:text-8xl font-black text-emerald-900 uppercase tracking-tighter leading-[0.9] mb-6 max-w-4xl"
          >
            36 Years of <br /><span className="text-amber-500">Shaping</span> Futures.
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-emerald-800/60 text-sm md:text-lg font-medium max-w-2xl leading-relaxed mb-8 md:mb-10">
            From a single classroom to a landmark of excellence — Gnanodaya School's story is written by 10,000+ alumni.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2 md:gap-3">
            {['Discipline First', 'IIT & NEET Ready'].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 md:px-5 md:py-2 bg-white/70 border border-emerald-200 rounded-full text-emerald-800 text-[9px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ROW ══ */}
      <section aria-label="School milestone statistics" className="max-w-7xl mx-auto px-6 -mt-6 md:-mt-8 mb-16 md:mb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" role="list">
          {stats.map((s, i) => (
            <motion.div key={i} role="listitem" {...fadeUp(i * 0.1)}
              className={`${s.color} p-5 md:p-7 rounded-2xl md:rounded-3xl text-center group hover:scale-105 transition-transform shadow-sm bg-white`}>
              <s.icon className={`w-5 h-5 md:w-6 md:h-6 ${s.iconColor} mx-auto mb-2 md:mb-3`} aria-hidden="true" />
              <div className={`text-2xl md:text-4xl font-black mb-1 ${s.textColor}`}>{s.value}</div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section aria-labelledby="timeline-heading" className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
        <div className="text-center mb-12 md:mb-16">
          <motion.p {...fadeUp()} className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
            The Journey
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} id="timeline-heading" className="text-3xl md:text-6xl font-black text-emerald-900 uppercase tracking-tighter">
            Our <span className="text-amber-400">Milestones</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-emerald-200/40 to-transparent md:-translate-x-px" aria-hidden="true" />

          <div className="space-y-12 md:space-y-10">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              const isLeft = idx % 2 === 0;
              return (
                <article key={idx}
                  className={`relative flex flex-col md:flex-row md:items-start gap-8 md:gap-0 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 flex items-center justify-center -translate-x-1/2 z-20">
                    <motion.div whileHover={{ scale: 1.3 }}
                      className={`w-3 h-3 md:w-5 md:h-5 rounded-full border-2 md:border-4 shadow-md flex-shrink-0
                        ${item.accent ? 'bg-amber-400 border-amber-300' : 'bg-emerald-200 border-emerald-300'}`}
                      aria-hidden="true" />
                  </div>

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                    className={`pl-10 md:pl-0 md:w-[46%] ${isLeft ? 'md:pr-14' : 'md:pl-14'}`}
                  >
                    <div className={`relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border shadow-sm hover:shadow-md transition-all duration-500 bg-white group overflow-hidden
                      ${item.accent ? 'border-amber-200' : 'border-gray-100'}`}>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 md:mb-5">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center shadow-sm flex-shrink-0
                            ${item.accent ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}
                            aria-hidden="true">
                            <Icon className="w-4 h-4 md:w-5 md:h-5" />
                          </div>
                          <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 md:px-3 md:py-1 rounded-full
                            ${item.accent ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                            {item.tag}
                          </span>
                        </div>
                        <time dateTime={item.year}
                          className={`block text-3xl md:text-5xl font-black italic leading-none mb-3 ${item.accent ? 'text-amber-400' : 'text-emerald-200'}`}>
                          {item.year}
                        </time>
                        <h2 className="text-base md:text-lg font-black text-emerald-900 uppercase tracking-tight mb-2 md:mb-3">{item.title}</h2>
                        <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="hidden md:block md:w-[46%]" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES GRID ══ */}
      <section aria-labelledby="values-heading" className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #f0fdf4 0%, #fefce8 100%)' }}>
        <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d1fae5 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <motion.p {...fadeUp()} className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
              What We Stand For
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} id="values-heading" className="text-3xl md:text-6xl font-black text-emerald-900 uppercase tracking-tighter">
              Built on <span className="text-amber-500">Six Pillars</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" role="list">
            {values.map((v, i) => (
              <motion.article key={i} role="listitem" {...fadeUp(i * 0.08)}
                className="bg-white border border-emerald-100 rounded-2xl md:rounded-[2rem] p-6 md:p-8 hover:border-amber-200 hover:shadow-md transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4 md:mb-5">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" aria-hidden="true" />
                </div>
                <h3 className="text-emerald-900 font-black uppercase tracking-widest text-[11px] md:text-xs mb-2 md:mb-3">{v.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{v.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ADMISSION CTA BAND ══ */}
      <section aria-label="Admissions call to action" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-sm border border-emerald-100"
          style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fefce8 100%)' }}
        >
          {/* Soft decorative blob */}
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Admissions Now Open</p>
              <h2 className="text-3xl md:text-5xl font-black text-emerald-900 uppercase tracking-tighter leading-tight mb-6">
                Write the Next <br className="hidden md:block"/>Chapter of Our <span className="italic">Legacy.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0">
                <Link to="/admissions" className="w-full sm:w-auto">
                  <button className="w-full flex items-center justify-center gap-3 bg-emerald-700 text-white px-8 py-4 rounded-full font-black uppercase tracking-wide text-sm hover:bg-emerald-800 transition-colors shadow-sm">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full flex items-center justify-center gap-3 bg-transparent border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full font-black uppercase tracking-wide text-sm hover:bg-emerald-50 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Quick info */}
            <div className="bg-white/70 border border-emerald-100 p-6 rounded-2xl space-y-4 backdrop-blur-sm">
              {[
                { label: 'Classes',  value: 'Nursery to Class 10' },
                { label: 'Medium',   value: 'English Medium' },
                { label: 'Contact',  value: '9440893699' },
              ].map((row, i) => (
                <div key={i} className="flex flex-col border-b border-emerald-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{row.label}</span>
                  <span className="text-sm font-black text-emerald-900">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}