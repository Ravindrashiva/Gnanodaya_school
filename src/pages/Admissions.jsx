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
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }),
};

const steps = [
  { num: '01', title: 'Apply Online',         desc: 'Fill our quick digital form — takes under 5 minutes.',   icon: ExternalLink },
  { num: '02', title: 'Document Verification', desc: 'Submit birth certificate, transfer certificate & photos.',  icon: Shield },
  { num: '03', title: 'Campus Interaction',    desc: 'Meet our coordinators for a short orientation session.',     icon: Users },
  { num: '04', title: 'Confirm Seat',          desc: "Pay the admission fee and secure your child's seat.",        icon: CheckCircle },
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
  { icon: Award,          title: 'CBSE Curriculum',  desc: 'Nationally recognized board with holistic education' },
  { icon: Heart,          title: 'Child-Centered',   desc: 'Every program designed around student wellbeing' },
  { icon: Star,           title: 'Proven Results',   desc: '98% board exam pass rate for 5 consecutive years' },
  { icon: Shield,         title: 'Safe Campus',       desc: 'CCTV, trained staff, and secure environment 24/7' },
  { icon: Clock,          title: 'Flexible Timings', desc: 'Morning & afternoon batches to suit your schedule' },
];

/* ─── Brand Tokens ──────────────────────────────────────────────────────── */
const GREEN      = '#1a5c38'; 
const GREEN_DARK = '#06371c'; // Updated to match image_2bb2f9.png
const GOLD       = '#f5a623'; 
const CREAM      = '#f7f5f0'; 
/* ─────────────────────────────────────────────────────────────────────────── */

export default function Admissions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: CREAM }}>

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden pt-16 pb-16"
        style={{
          background: `linear-gradient(135deg, ${GREEN} 60%, #236b42 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-[0.2em] mb-6"
            style={{
              border: `1px solid ${GOLD}99`,
              color: GOLD,
              backgroundColor: 'transparent',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
            Admissions Open · 2026–27 · Madanapalle
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
          >
            <span className="text-white">Admissions </span>
            <span style={{ color: GOLD }}>Open.</span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-5 max-w-2xl mx-auto text-slate-200 text-base sm:text-lg leading-relaxed font-medium"
          >
            Crafting a future-ready generation in Madanapalle through a unique blend of
            heritage, discipline, and modern technological excellence.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/registration')}
              className="group inline-flex items-center justify-between gap-6 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: GOLD,
                padding: '16px 18px 16px 28px',
                borderRadius: '100px 24px 24px 100px',
                minWidth: '280px',
                border: 'none',
                boxShadow: `0 6px 32px ${GOLD}44`,
              }}
            >
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] leading-none text-green-900/50">
                  2026–27 Admissions
                </span>
                <span className="text-lg font-black uppercase tracking-wide leading-none" style={{ color: '#0d2b1e' }}>
                  Apply Online Now
                </span>
              </div>
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform"
                   style={{ backgroundColor: '#0d2b1e' }}>
                <ArrowRight size={18} style={{ color: GOLD }} />
              </div>
            </button>

            <a
              href={`https://wa.me/${school?.contact?.phone || '919440893699'}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all bg-white/10 border border-white/20 hover:bg-white/20"
            >
              <MessageCircle size={16} style={{ color: '#4ade80' }} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHY GNANODAYA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
            <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter" style={{ color: GREEN }}>Education That Goes Beyond Books</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.08} viewport={{ once: true }}
                className="p-8 rounded-3xl border bg-cream-50 hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-gold-400"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: GREEN }}>
                  <f.icon size={22} style={{ color: GOLD }} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: GREEN }}>{f.title}</h3>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-24" style={{ backgroundColor: GREEN }}>
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
            <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>Simple & Transparent</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">Admission Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.1} viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-6xl font-black absolute top-4 right-6 leading-none opacity-20" style={{ color: GOLD }}>{s.num}</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gold-500/10 border border-gold-500/30">
                  <s.icon size={20} style={{ color: GOLD }} />
                </div>
                <h3 className="font-black uppercase tracking-tight mb-2">{s.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGE CRITERIA & DOCUMENTS */}
      <section className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>Age Eligibility</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8" style={{ color: GREEN }}>Grade-wise Criteria</h3>
              <div className="space-y-3">
                {criteria.map((c, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: GREEN }}>
                        <BookOpen size={14} style={{ color: GOLD }} />
                      </div>
                      <span className="font-black uppercase text-sm" style={{ color: GREEN }}>{c.grade}</span>
                    </div>
                    <span className="text-slate-500 text-sm font-semibold">{c.age}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0.1} viewport={{ once: true }}>
              <p className="font-black uppercase tracking-[0.25em] text-xs mb-3" style={{ color: GOLD }}>Be Prepared</p>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8" style={{ color: GREEN }}>Documents Required</h3>
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
          FINAL CTA - MATCHING image_2bb2f9.png 
          ══════════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto max-w-6xl px-6">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="relative overflow-hidden text-center py-20 px-8 flex flex-col items-center justify-center"
            style={{ 
              backgroundColor: GREEN_DARK, 
              borderRadius: '80px', // High rounded corners from reference
            }}
          >
            {/* Subtle Dot Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
                Ready for the New Year?
              </h2>

              <p 
                className="max-w-2xl mx-auto font-black uppercase tracking-[0.15em] text-[10px] sm:text-xs mb-10"
                style={{ color: GOLD }}
              >
                Ensure your child is prepared for the upcoming session by<br className="hidden sm:block" /> 
                reviewing our curriculum standards.
              </p>

              <button
                onClick={() => navigate('/registration')}
                className="transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  backgroundColor: GOLD,
                  color: '#0d2b1e',
                  padding: '18px 48px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em'
                }}
              >
                Register Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}