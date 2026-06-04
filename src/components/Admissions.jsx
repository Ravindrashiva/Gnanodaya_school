import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ExternalLink, MessageCircle, CheckCircle, Calendar,
  BookOpen, Users, Award, Clock, MapPin, Phone, Mail,
  Star, ArrowRight, GraduationCap, Heart, Shield
} from 'lucide-react';
import { school } from '../data/siteContent';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }),
};

const steps = [
  { num: '01', title: 'Apply Online',          desc: 'Fill our quick digital form — takes under 5 minutes.',           icon: ExternalLink },
  { num: '02', title: 'Document Verification', desc: 'Submit birth certificate, transfer certificate & photos.',        icon: Shield },
  { num: '03', title: 'Campus Interaction',    desc: 'Meet our coordinators for a short orientation session.',          icon: Users },
  { num: '04', title: 'Confirm Seat',          desc: "Pay the admission fee and secure your child's seat.",             icon: CheckCircle },
];

const criteria = [
  { grade: 'LKG',        age: '3 – 4 years' },
  { grade: 'UKG',        age: '4 – 5 years' },
  { grade: 'Class 1',    age: '5 – 6 years' },
  { grade: 'Class 2–5',  age: 'Previous class TC required' },
  { grade: 'Class 6–10', age: 'Entrance test + TC required' },
];

const documents = [
  'Birth Certificate (original + photocopy)',
  'Transfer Certificate from previous school',
  'Aadhar Card (student + parent)',
  '4 recent passport-size photographs',
  'Previous year report card',
  'Residential proof (electricity bill / ration card)',
];

const features = [
  { icon: GraduationCap, title: 'Expert Faculty',   desc: 'Qualified teachers with 10+ years of experience' },
  { icon: Award,         title: 'CBSE Curriculum',  desc: 'Nationally recognized board with holistic education' },
  { icon: Heart,         title: 'Child-Centered',   desc: 'Every program designed around student wellbeing' },
  { icon: Star,          title: 'Proven Results',   desc: '98% board exam pass rate for 5 consecutive years' },
  { icon: Shield,        title: 'Safe Campus',      desc: 'CCTV, trained staff, and secure environment 24/7' },
  { icon: Clock,         title: 'Flexible Timings', desc: 'Morning & afternoon batches to suit your schedule' },
];

/* ─── Brand Colour Tokens (sampled from Gnanodaya website) ───────────────────
   GREEN_DARK  — very dark bg: hero, final-CTA sections      #0d2b1e
   GREEN       — mid forest green: footer, cards, icon boxes  #1a5c38
   GOLD        — amber-gold: buttons, accents, labels         #f5a623
   CREAM       — off-white page background                    #f7f5f0
──────────────────────────────────────────────────────────────────────────── */
const GREEN_DARK = '#0d2b1e';
const GREEN      = '#1a5c38';
const GOLD       = '#f5a623';
const CREAM      = '#f7f5f0';

export default function Admissions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: CREAM }}>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-24" style={{ backgroundColor: GREEN_DARK }}>
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
             style={{ border: `1px solid ${GOLD}1A` }} />
        <div className="pointer-events-none absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full"
             style={{ border: `1px solid ${GOLD}1A` }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full"
             style={{ backgroundColor: `${GREEN}33` }} />

        <div className="mx-auto max-w-6xl px-6 relative z-10">

          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-[0.25em] mb-6"
            style={{ backgroundColor: `${GOLD}1A`, border: `1px solid ${GOLD}4D`, color: GOLD }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: GOLD }} />
            Admissions Open · 2026–27
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black text-white uppercase leading-[0.92] tracking-tighter"
          >
            Begin Your<br />
            <span style={{ color: GOLD }}>Child's Journey</span><br />
            With Us.
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-8 max-w-xl text-slate-300 text-lg leading-relaxed"
          >
            {school?.name || 'Gnanodaya School'} has been shaping confident, curious, and compassionate
            learners for over two decades. Admissions for academic year 2026–27 are now open.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* ── Primary CTA: Semi-Curved Box ── */}
            <button
              onClick={() => navigate('/registration')}
              className="group inline-flex items-center justify-between gap-6 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: GOLD,
                color: GREEN_DARK,
                padding: '18px 20px 18px 32px',
                borderRadius: '100px 24px 24px 100px',
                minWidth: '300px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: `0 8px 40px ${GOLD}44, 0 2px 8px rgba(0,0,0,0.25)`,
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f7ba4a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = GOLD}
            >
              <div className="flex flex-col items-start gap-0.5">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.25em] leading-none"
                  style={{ color: 'rgba(13,43,30,0.55)' }}
                >
                  2026–27 Admissions
                </span>
                <span className="text-xl font-black uppercase tracking-wide leading-none" style={{ color: GREEN_DARK }}>
                  Apply Online Now
                </span>
              </div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform"
                style={{ backgroundColor: GREEN_DARK }}
              >
                <ArrowRight size={20} style={{ color: GOLD }} />
              </div>
            </button>

            {/* Secondary — WhatsApp ghost */}
            <a
              href={`https://wa.me/${school?.contact?.phone || '919440893699'}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full px-10 py-5 text-base font-black uppercase tracking-widest text-white transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
            >
              <MessageCircle size={18} style={{ color: '#4ade80' }} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { value: '25+',   label: 'Years of Excellence' },
              { value: '1200+', label: 'Students Enrolled' },
              { value: '98%',   label: 'Board Pass Rate' },
              { value: '40+',   label: 'Expert Educators' },
            ].map((s, i) => (
              <div key={i} className="pl-5" style={{ borderLeft: `2px solid ${GOLD}66` }}>
                <div className="text-3xl font-black" style={{ color: GOLD }}>{s.value}</div>
                <div className="text-slate-400 text-sm font-semibold mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          WHY GNANODAYA
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>
              Why Choose Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter" style={{ color: GREEN }}>
              Education That<br />Goes Beyond Books
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.08}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl border transition-all duration-300"
                style={{ backgroundColor: CREAM, borderColor: 'rgba(203,213,225,1)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${GOLD}66`;
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(203,213,225,1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                     style={{ backgroundColor: GREEN }}>
                  <f.icon size={22} style={{ color: GOLD }} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: GREEN }}>{f.title}</h3>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          ADMISSION PROCESS
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: GREEN }}>
        <div className="mx-auto max-w-6xl px-6">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>
              Simple & Transparent
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
              Admission Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.1}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl transition-all"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.13)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'}
              >
                <div className="text-6xl font-black absolute top-4 right-6 leading-none"
                     style={{ color: `${GOLD}33` }}>{s.num}</div>

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                     style={{ backgroundColor: `${GOLD}1A`, border: `1px solid ${GOLD}4D` }}>
                  <s.icon size={20} style={{ color: GOLD }} />
                </div>

                <h3 className="font-black uppercase tracking-tight mb-2 text-white">{s.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <ArrowRight size={20} style={{ color: `${GOLD}66` }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          AGE CRITERIA & DOCUMENTS
      ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Age Eligibility */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>
                Age Eligibility
              </p>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8" style={{ color: GREEN }}>
                Grade-wise Criteria
              </h3>
              <div className="space-y-3">
                {criteria.map((c, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                           style={{ backgroundColor: GREEN }}>
                        <BookOpen size={14} style={{ color: GOLD }} />
                      </div>
                      <span className="font-black uppercase text-sm" style={{ color: GREEN }}>{c.grade}</span>
                    </div>
                    <span className="text-slate-500 text-sm font-semibold">{c.age}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Documents Required */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0.1} viewport={{ once: true }}>
              <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>
                Be Prepared
              </p>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8" style={{ color: GREEN }}>
                Documents Required
              </h3>
              <div className="space-y-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-2xl px-6 py-4 border border-slate-100 shadow-sm">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                    <span className="text-slate-700 font-semibold text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          IMPORTANT DATES
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>
              Mark Your Calendar
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter" style={{ color: GREEN }}>
              Important Dates
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { date: 'Apr 1, 2026',  event: 'Admissions Open',      status: 'done' },
              { date: 'May 31, 2026', event: 'Early Bird Deadline',   status: 'active' },
              { date: 'Jun 15, 2026', event: 'Last Date to Apply',    status: 'upcoming' },
              { date: 'Jun 20, 2026', event: 'Document Verification', status: 'upcoming' },
              { date: 'Jul 1, 2026',  event: 'Orientation Day',       status: 'upcoming' },
              { date: 'Jul 7, 2026',  event: 'Classes Commence',      status: 'upcoming' },
            ].map((item, i) => {
              const isDone     = item.status === 'done';
              const isActive   = item.status === 'active';
              const isUpcoming = item.status === 'upcoming';

              return (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.07}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 rounded-2xl border-2"
                  style={{
                    borderColor:     isDone ? '#bbf7d0' : isActive ? GOLD : '#f1f5f9',
                    backgroundColor: isDone ? '#f0fdf4' : isActive ? `${GOLD}0D` : '#f8fafc',
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: isDone ? GREEN : isActive ? GREEN_DARK : '#e2e8f0' }}>
                    <Calendar size={20} style={{ color: isDone || isActive ? GOLD : '#94a3b8' }} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest"
                         style={{ color: isDone ? GREEN : isActive ? GOLD : '#94a3b8' }}>
                      {item.date}
                    </div>
                    <div className="font-black text-sm mt-0.5" style={{ color: GREEN }}>
                      {item.event}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          CONTACT STRIP
      ══════════════════════════════════════════════ */}
      <section className="py-16 border-t border-slate-200" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Phone, label: 'Call Us',  value: school?.contact?.phone   || '+91 94408 93699' },
              { icon: Mail,  label: 'Email Us', value: school?.contact?.email   || 'gnanodayaschool@gmail.com' },
              { icon: MapPin,label: 'Visit Us', value: school?.contact?.address || 'D.NO: 3/145-8-B-7-2, Prasanth Nagar, Madanapalle – 517325' },
            ].map((c, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.1}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ backgroundColor: GREEN }}>
                  <c.icon size={20} style={{ color: GOLD }} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400">{c.label}</div>
                  <div className="font-bold text-sm mt-0.5" style={{ color: GREEN }}>{c.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: GREEN_DARK }}>
        {/* Decorative rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full" style={{ border: `1px solid ${GREEN}44` }} />
          <div className="absolute w-[400px] h-[400px] rounded-full" style={{ border: `1px solid ${GREEN}66` }} />
        </div>
        {/* Glow blob */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
             style={{ background: `radial-gradient(circle, ${GREEN}55 0%, transparent 70%)` }} />

        <div className="mx-auto max-w-2xl px-6 text-center relative z-10">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95]"
          >
            Seats Are<br />
            <span style={{ color: GOLD }}>Filling Fast.</span>
          </motion.h2>

          <motion.p variants={fadeUp} initial="hidden" whileInView="show" custom={0.1} viewport={{ once: true }}
            className="mt-6 text-slate-400 text-lg"
          >
            Don't miss the opportunity to give your child the education they deserve. Apply today.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0.2} viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            {/* ── Final CTA: Semi-Curved Box ── */}
            <button
              onClick={() => navigate('/registration')}
              className="group inline-flex items-center justify-between gap-6 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: GOLD,
                color: GREEN_DARK,
                padding: '18px 20px 18px 32px',
                borderRadius: '100px 24px 24px 100px',
                minWidth: '300px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: `0 8px 40px ${GOLD}55, 0 2px 8px rgba(0,0,0,0.3)`,
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f7ba4a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = GOLD}
            >
              <div className="flex flex-col items-start gap-0.5">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.25em] leading-none"
                  style={{ color: 'rgba(13,43,30,0.55)' }}
                >
                  Limited Seats
                </span>
                <span className="text-xl font-black uppercase tracking-wide leading-none" style={{ color: GREEN_DARK }}>
                  Register Now
                </span>
              </div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform"
                style={{ backgroundColor: GREEN_DARK }}
              >
                <ArrowRight size={20} style={{ color: GOLD }} />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}