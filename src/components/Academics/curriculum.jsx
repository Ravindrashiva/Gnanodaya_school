"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ChevronRight, BookOpen, Beaker, Trophy, Code, Palette, Star, ArrowRight } from "lucide-react";

// ─── DOT GRID ──────────────────────────────────────────────────────────────────
function DotGrid({ className = "", color = "#0A4D2E", opacity = 0.06, size = 22 }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1.2px, transparent 1.2px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

// ─── ANIMATED COUNTER ──────────────────────────────────────────────────────────
import { useRef, useEffect } from "react";
function AnimatedCounter({ end, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const programs = [
  {
    id: 1,
    title: "Foundational Wing",
    subtitle: "Building Tomorrow's Roots",
    grades: "Grades KG – V",
    gradeShort: "KG–V",
    description:
      "A nurturing start where curiosity, creativity, and character take shape. Activity-based learning lays the strongest academic and values foundation.",
    features: [
      { icon: "📖", label: "Phonics Program",   desc: "Structured reading & comprehension from day one." },
      { icon: "🔢", label: "Mental Math",         desc: "Vedic & abacus-based speed arithmetic." },
      { icon: "🎨", label: "Art Integration",     desc: "STEAM-linked creative expression every week." },
      { icon: "🌱", label: "Value Education",     desc: "Character-first ethos woven into every subject." },
    ],
    accent: "#FFC107",
    accentDark: "#e5ac00",
    bg: "from-[#fffbeb] to-[#fff8d6]",
    statLabel: "Years of Foundational Excellence",
    stat: 35,
    statSuffix: "+",
    icon: "🌟",
    index: "01",
  },
  {
    id: 2,
    title: "Middle School",
    subtitle: "Sharpening the Competitive Edge",
    grades: "Grades VI – VIII",
    gradeShort: "VI–VIII",
    description:
      "Where curiosity meets rigor. Students explore specialized sciences, advance in mathematics, and begin their journey toward competitive excellence.",
    features: [
      { icon: "🔬", label: "STEM Labs",           desc: "Hands-on Physics, Chemistry & Biology practicals." },
      { icon: "💻", label: "Coding & AI",          desc: "Python, Scratch, and computational thinking." },
      { icon: "🗣️", label: "Language Lab",         desc: "Digital-enhanced English fluency training." },
      { icon: "🏅", label: "Leadership Training", desc: "Student council, debates, and MUN programs." },
    ],
    accent: "#0A4D2E",
    accentDark: "#083d24",
    bg: "from-[#f0faf5] to-[#e6f5ee]",
    statLabel: "Students Currently Enrolled",
    stat: 1500,
    statSuffix: "+",
    icon: "🚀",
    index: "02",
  },
  {
    id: 3,
    title: "Elite High School",
    subtitle: "Forged for the Top 1%",
    grades: "Grades IX – X",
    gradeShort: "IX–X",
    description:
      "Integrated board mastery and competitive exam readiness. Our students don't just pass — they lead. 100% board results, year after year.",
    features: [
      { icon: "⚛️", label: "IIT-JEE Foundation", desc: "Early Physics & Maths deep-dive for IIT aspirants." },
      { icon: "🧬", label: "NEET Coaching",         desc: "Biology & Chemistry intensive from Class 9." },
      { icon: "🏆", label: "Olympiad Training",     desc: "International Maths, Science & Cyber Olympiads." },
      { icon: "🎯", label: "Career Counseling",     desc: "Personalised roadmap for every student's future." },
    ],
    accent: "#FFC107",
    accentDark: "#e5ac00",
    bg: "from-[#0A4D2E] to-[#083d24]",
    dark: true,
    statLabel: "Board Pass Rate",
    stat: 100,
    statSuffix: "%",
    icon: "🎓",
    index: "03",
  },
];

const overviewStats = [
  { value: 35, suffix: "+", label: "Years Legacy" },
  { value: 1500, suffix: "+", label: "Students" },
  { value: 60, suffix: "+", label: "Educators" },
  { value: 100, suffix: "%", label: "Pass Rate" },
];

const spring = { type: "spring", stiffness: 260, damping: 22 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0, transition: { ...spring, delay } },
  viewport: { once: true, margin: "-80px" },
});

// ─── FEATURE CARD ──────────────────────────────────────────────────────────────
function FeatureCard({ icon, label, desc, dark = false }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={spring}
      className={`rounded-2xl p-4 sm:p-5 flex items-start gap-3 cursor-default transition-all duration-300 group
        ${dark
          ? "bg-white/10 border border-white/15 hover:bg-white/18 hover:border-[#FFC107]/30"
          : "bg-white shadow-sm border border-slate-100 hover:shadow-md hover:border-[#0A4D2E]/15"
        }`}
    >
      <span className="text-xl sm:text-2xl shrink-0 mt-0.5" aria-hidden>{icon}</span>
      <div>
        <p className={`font-black text-[11px] sm:text-xs uppercase tracking-widest mb-1 ${dark ? "text-[#FFC107]" : "text-[#0A4D2E]"}`}>{label}</p>
        <p className={`text-[11px] sm:text-xs leading-relaxed ${dark ? "text-white/50" : "text-slate-400"}`}>{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── PROGRAM CARD ──────────────────────────────────────────────────────────────
function ProgramCard({ prog, i }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      {...fadeUp(i * 0.1)}
      className={`relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border-4 ${prog.dark ? "border-[#0A4D2E]" : "border-white"} shadow-xl`}
    >
      {/* Card body */}
      <div className={`bg-gradient-to-br ${prog.bg} p-8 sm:p-12 md:p-14 lg:p-16 relative overflow-hidden`}>
        <DotGrid
          className="inset-0"
          color={prog.dark ? "#ffffff" : prog.accent}
          opacity={prog.dark ? 0.06 : 0.08}
          size={20}
        />

        {/* Ambient circle */}
        <div
          aria-hidden
          className="absolute -right-20 -top-20 w-72 h-72 rounded-full blur-[80px] pointer-events-none"
          style={{ background: prog.dark ? "rgba(255,193,7,0.12)" : `${prog.accent}18` }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-start">
          {/* ── LEFT ─────────────────────────────────── */}
          <div>
            {/* Index + grades pill */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: `${prog.accent}22`,
                  color: prog.dark ? "#FFC107" : prog.accent,
                  border: `1px solid ${prog.accent}33`,
                }}
              >
                {prog.grades}
              </span>
              <span
                className="text-[10px] font-black uppercase tracking-widest opacity-30"
                style={{ color: prog.dark ? "#fff" : "#0A4D2E" }}
              >
                {prog.index}
              </span>
            </div>

            {/* Icon + title */}
            <div className="flex items-start gap-4 mb-3">
              <span
                className="text-3xl sm:text-4xl w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                style={{ background: `${prog.accent}25`, border: `2px solid ${prog.accent}30` }}
              >
                {prog.icon}
              </span>
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.3em] mb-1"
                  style={{ color: prog.dark ? "#FFC107" : prog.accent }}
                >
                  {prog.subtitle}
                </p>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]"
                  style={{ color: prog.dark ? "#ffffff" : "#0A4D2E" }}
                >
                  {prog.title}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-sm sm:text-base leading-relaxed mt-5 mb-8 max-w-md"
              style={{ color: prog.dark ? "rgba(255,255,255,0.55)" : "#64748b" }}
            >
              {prog.description}
            </p>

            {/* Stat badge */}
            <div
              className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 mb-6"
              style={{
                background: prog.dark ? "rgba(255,255,255,0.1)" : `${prog.accent}15`,
                border: `1px solid ${prog.accent}30`,
              }}
            >
              <p
                className="text-3xl sm:text-4xl font-black leading-none"
                style={{ color: prog.dark ? "#FFC107" : prog.accent }}
              >
                <AnimatedCounter end={prog.stat} suffix={prog.statSuffix} />
              </p>
              <p
                className="text-[9px] font-black uppercase tracking-widest max-w-[100px] leading-snug"
                style={{ color: prog.dark ? "rgba(255,255,255,0.4)" : "#94a3b8" }}
              >
                {prog.statLabel}
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/registration"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-black uppercase text-[10px] tracking-[0.25em] overflow-hidden shadow-xl transition-shadow hover:shadow-2xl"
                style={{ background: prog.dark ? "#FFC107" : "#0A4D2E", color: prog.dark ? "#0A4D2E" : "#fff" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Enroll Now <ArrowRight size={14} />
                </span>
              </a>
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-7 py-3.5 rounded-2xl font-black uppercase text-[10px] tracking-[0.25em] transition-all"
                style={{
                  border: `2px solid ${prog.accent}40`,
                  color: prog.dark ? "rgba(255,255,255,0.6)" : "#94a3b8",
                }}
              >
                {expanded ? "Hide Details" : "Learn More"}
              </button>
            </div>
          </div>

          {/* ── RIGHT: feature cards ─────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prog.features.map((f) => (
              <FeatureCard key={f.label} {...f} dark={prog.dark} />
            ))}
          </div>
        </div>

        {/* Expandable extra info */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div
                className="mt-10 pt-8 border-t relative z-10"
                style={{ borderColor: prog.dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { icon: "📅", label: "Weekly Hours",   value: prog.id === 1 ? "30 hrs" : prog.id === 2 ? "36 hrs" : "40 hrs" },
                    { icon: "👩‍🏫", label: "Avg Class Size", value: prog.id === 1 ? "28 students" : "32 students" },
                    { icon: "📊", label: "Assessments",    value: prog.id === 3 ? "Weekly tests" : "Fortnightly tests" },
                  ].map(({ icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-2xl p-5"
                      style={{ background: prog.dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.8)" }}
                    >
                      <p className="text-xl mb-2" aria-hidden>{icon}</p>
                      <p
                        className="text-[10px] font-black uppercase tracking-widest mb-1"
                        style={{ color: prog.dark ? "rgba(255,255,255,0.35)" : "#94a3b8" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-base font-black"
                        style={{ color: prog.dark ? "#fff" : "#0A4D2E" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function Curriculum() {
  return (
    <main className="pt-28 pb-24 bg-[#F8FAFC] overflow-x-hidden" aria-label="Academic Curriculum">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24 overflow-hidden">
        <DotGrid className="inset-0" opacity={0.04} size={28} />
        {/* Blobs */}
        <div aria-hidden className="absolute -right-40 top-0 w-[500px] h-[500px] bg-[#FFC107]/8 rounded-full blur-[140px] pointer-events-none" />
        <div aria-hidden className="absolute -left-32 bottom-0 w-[400px] h-[400px] bg-[#0A4D2E]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.div initial={{ width: 0 }} animate={{ width: 44 }} transition={{ duration: 0.9, delay: 0.2 }} className="h-[3px] bg-[#FFC107] rounded-full" />
              <span className="text-[#0A4D2E] font-black tracking-[0.4em] text-[10px] sm:text-[11px] uppercase">Gnanodaya School · Madanapalle</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] font-black text-[#0A4D2E] leading-[0.85] tracking-tighter uppercase mb-6"
            >
              Academic{" "}
              <br />
              <span className="relative inline-block">
                <span className="text-[#FFC107]">Curriculum</span>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#FFC107] rounded-full origin-left"
                />
              </span>
            </motion.h1>

            <motion.blockquote
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="border-l-4 border-[#FFC107] pl-6 mb-8"
            >
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed italic max-w-lg">
                "We don't just teach subjects — we mentor lives. Our curriculum is built on the twin pillars of
                <strong className="text-[#0A4D2E] not-italic"> Discipline</strong> and
                <strong className="text-[#0A4D2E] not-italic"> Character</strong>."
              </p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2"
            >
              {["State Board", "KG to Grade X", "100% Board Results", "IIT Foundation"].map(tag => (
                <span
                  key={tag}
                  className="text-[9px] font-black uppercase tracking-widest bg-[#0A4D2E]/6 text-[#0A4D2E] px-3.5 py-1.5 rounded-full border border-[#0A4D2E]/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative bg-[#0A4D2E] rounded-[3rem] p-8 sm:p-12 overflow-hidden shadow-2xl"
          >
            <DotGrid className="inset-0" color="#ffffff" opacity={0.06} size={18} />
            <div aria-hidden className="absolute -right-10 -bottom-10 w-52 h-52 bg-[#FFC107]/12 rounded-full blur-[60px]" />

            <p className="relative z-10 text-[#FFC107] font-black text-[10px] uppercase tracking-[0.4em] mb-6">By the Numbers</p>
            <div className="relative z-10 grid grid-cols-2 gap-5 sm:gap-8">
              {overviewStats.map(({ value, suffix, label }) => (
                <div key={label} className="text-center">
                  <p className="text-4xl sm:text-5xl font-black text-white leading-none">
                    <AnimatedCounter end={value} suffix={suffix} />
                  </p>
                  <p className="text-white/35 text-[9px] font-black uppercase tracking-widest mt-2">{label}</p>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-8 pt-7 border-t border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#FFC107] flex items-center justify-center">
                <Star size={14} className="text-[#0A4D2E]" fill="#0A4D2E" />
              </div>
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">Madanapalle's Premier State Board School</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION LABEL ─────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-slate-300 font-black text-[10px] uppercase tracking-[0.5em]">Three Wings · One Vision</span>
          <div className="h-px flex-1 bg-slate-200" />
        </motion.div>
      </div>

      {/* ── PROGRAM CARDS ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 mb-20" aria-label="Academic Programs">
        {programs.map((prog, i) => (
          <ProgramCard key={prog.id} prog={prog} i={i} />
        ))}
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          {...fadeUp(0)}
          whileHover={{ scale: 1.008, transition: spring }}
          className="relative bg-[#0A4D2E] rounded-[3rem] sm:rounded-[5rem] p-10 sm:p-16 md:p-20 text-center overflow-hidden"
        >
          <DotGrid className="inset-0" color="#ffffff" opacity={0.055} size={22} />
          <div aria-hidden className="absolute -left-24 -bottom-24 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-[100px]" />
          <div aria-hidden className="absolute -right-16 -top-16 w-72 h-72 bg-white/5 rounded-full blur-[60px]" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2.5 bg-[#FFC107] text-[#0A4D2E] rounded-full px-5 py-2.5 mb-8 shadow-2xl relative z-10"
          >
            <span className="w-2 h-2 rounded-full bg-[#0A4D2E] animate-ping" aria-hidden />
            <span className="text-[10px] font-black uppercase tracking-widest">2025–26 Admissions Now Open</span>
          </motion.div>

          <h2 className="relative z-10 text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.88] mb-6">
            Shape Your <span className="text-[#FFC107]">Future</span>
          </h2>
          <p className="relative z-10 text-white/45 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Give your child the State Board advantage at Gnanodaya School, Madanapalle. Limited seats — enquire today.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="/registration"
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-[#FFC107] text-[#0A4D2E] rounded-full font-black uppercase tracking-[0.25em] text-xs shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Apply Now</span>
              <span aria-hidden className="absolute inset-0 bg-white/25 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a
              href="/contact"
              className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-white/25 text-white rounded-full font-black uppercase tracking-[0.25em] text-xs hover:border-[#FFC107] hover:text-[#FFC107] transition-all"
            >
              Contact Admissions
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}