"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from "../components/school/HeroSection";
import ProgramsPreview from "../components/school/Programspreview";
import homeprincipal from '../assets/homeprincipal.png';

const springAnim = { type: "spring", stiffness: 260, damping: 22 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0, transition: { ...springAnim, duration: 0.65, delay } },
  viewport: { once: true, margin: "-60px" },
});

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const schoolJsonLd = {
  "@context": "https://schema.org", "@type": "School", "name": "Gnanodaya School",
  "alternateName": "Gnanodaya High School Madanapalle",
  "description": "Premier State Board school in Madanapalle, Chittoor District, AP – KG to 10th.",
  "url": "https://gnanodayaschool.in", "foundingDate": "1989",
  "address": { "@type": "PostalAddress", "addressLocality": "Madanapalle", "addressRegion": "Andhra Pradesh", "postalCode": "517325", "addressCountry": "IN" },
};
const faqData = [
  { q: "Where is Gnanodaya School located?", a: "Madanapalle, Chittoor District, Andhra Pradesh — one of the best State Board schools in the region." },
  { q: "What board does Gnanodaya School follow?", a: "AP State Board curriculum for all grades from KG through 10th standard." },
  { q: "When do admissions open?", a: "Admissions for 2025–26 are now open. Contact our admissions office or visit gnanodayaschool.in." },
  { q: "What facilities are available?", a: "Modern classrooms, science labs, library, sports grounds, and a safe campus in Chittoor District." },
  { q: "Is Gnanodaya the best school in Madanapalle?", a: "Widely regarded as one of Madanapalle's top State Board schools with experienced faculty and strong results." },
];
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

const statItems = [
  { end: 1989, suffix: "", label: "Founded", icon: "🏫" },
  { end: 1500, suffix: "+", label: "Students Enrolled", icon: "🎓" },
  { end: 60, suffix: "+", label: "Qualified Teachers", icon: "👩‍🏫" },
  { end: 100, suffix: "%", label: "Board Pass Rate", icon: "📊" },
];

// ─── WHY CHOOSE US — Row 1: 3 mini horizontal, Row 2: 3 tall ─────────────────
const whyMini = [
  { icon: "🏆", title: "35+ Years Legacy", sub: "Est. 1989 · Madanapalle", color: "#F59E0B", iconBg: "#FFFBEB" },
  { icon: "📖", title: "AP State Board", sub: "KG to 10th · SCERT aligned", color: "#10B981", iconBg: "#ECFDF5" },
  { icon: "🌿", title: "Safe Green Campus", sub: "Zero-tolerance · CCTV secured", color: "#8B5CF6", iconBg: "#F5F3FF" },
];
const whyTall = [
  {
    icon: "🔬", title: "STEM Focus", badge: "HANDS-ON",
    bullets: ["Physics & Chemistry labs", "Biology practicals", "CS from Class 4", "Project-based learning"],
    color: "#0A4D2E", iconBg: "#ECFDF5", badgeText: "#065F46", badgeBg: "#ECFDF5",
  },
  {
    icon: "🏃", title: "Sports & Fitness", badge: "YEAR-ROUND",
    bullets: ["Cricket & football", "Volleyball & athletics", "Qualified PE coaches", "Annual sports meet"],
    color: "#3B82F6", iconBg: "#EFF6FF", badgeText: "#1D4ED8", badgeBg: "#EFF6FF",
  },
  {
    icon: "🤝", title: "Parent Partnership", badge: "24/7",
    bullets: ["Digital progress reports", "Monthly PTM sessions", "ERP parent portal", "Open door policy"],
    color: "#F59E0B", iconBg: "#FFFBEB", badgeText: "#B45309", badgeBg: "#FFFBEB",
  },
];

// ─── FACILITIES — Row 1: 3 mini horizontal, Row 2: 3 tall ────────────────────
const facMini = [
  { icon: "🔬", title: "Science Labs", sub: "Physics · Chemistry · Biology", color: "#F59E0B", iconBg: "#FFFBEB" },
  { icon: "⚽", title: "Sports Grounds", sub: "Cricket · Football · Athletics", color: "#10B981", iconBg: "#ECFDF5" },
  { icon: "📚", title: "Library", sub: "4000+ books · Digital resources", color: "#3B82F6", iconBg: "#EFF6FF" },
];
const facTall = [
  {
    icon: "🖥️", title: "Computer Lab", badge: "HIGH-SPEED",
    bullets: ["Modern PC lab", "High-speed internet", "Coding from Class 4", "IT curriculum"],
    color: "#F472B6", iconBg: "#FDF2F8", badgeText: "#BE185D", badgeBg: "#FDF2F8",
  },
  {
    icon: "🎨", title: "Art & Culture", badge: "CREATIVE",
    bullets: ["Music & dance", "Drawing & crafts", "Annual cultural fest", "Inter-school events"],
    color: "#8B5CF6", iconBg: "#F5F3FF", badgeText: "#6D28D9", badgeBg: "#F5F3FF",
  },
  {
    icon: "🚌", title: "Transport", badge: "SAFE TRANSIT",
    bullets: ["GPS-tracked bus fleet", "Major Madanapalle routes", "Trained drivers", "Student attendants"],
    color: "#0A4D2E", iconBg: "#ECFDF5", badgeText: "#065F46", badgeBg: "#ECFDF5",
  },
];

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);
const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>);
const YoutubeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>);

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/p/Gnanodaya-high-school-madanapalli-100068130069750/", hoverColor: "#1877F2", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/gnanodaya_school", hoverColor: "#E1306C", icon: <InstagramIcon /> },
  { label: "YouTube", href: "https://youtube.com/@gnanodayaschoolmpl?si=ht9JfZ577UqiVQx6", hoverColor: "#FF0000", icon: <YoutubeIcon /> },
];

function DotGrid({ className = "", color = "#0A4D2E", opacity = 0.05, size = 22 }) {
  return <div aria-hidden="true" className={`absolute pointer-events-none ${className}`} style={{ backgroundImage: `radial-gradient(circle,${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1px,transparent 1px)`, backgroundSize: `${size}px ${size}px` }} />;
}

function AnimatedCounter({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let t0 = null;
    const step = ts => { if (!t0) t0 = ts; const p = Math.min((ts - t0) / duration, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [started, end, duration]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

function RightSocialSidebar() {
  return (
    <aside aria-label="Social media links" className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-[200] flex-col items-center pr-2">
      <div aria-hidden="true" className="w-px h-10 bg-gradient-to-b from-transparent to-[#0A4D2E]/20 mb-2" />
      <div className="flex flex-col bg-white/95 backdrop-blur-xl border border-slate-100 shadow-md rounded-2xl p-1.5 gap-0.5">
        {socialLinks.map(({ label, href, icon, hoverColor }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} – Gnanodaya School`}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-[#0A4D2E] transition-all duration-200 hover:scale-110"
            onMouseEnter={e => { e.currentTarget.style.background = hoverColor; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A4D2E"; }}>
            {icon}
          </a>
        ))}
      </div>
      <div aria-hidden="true" className="w-px h-10 bg-gradient-to-b from-[#0A4D2E]/20 to-transparent mt-2" />
    </aside>
  );
}

function MobileBottomBar() {
  return (
    <div className="flex lg:hidden fixed bottom-0 left-0 right-0 z-[200] justify-center pb-3 px-4">
      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl rounded-2xl px-2.5 py-2">
        {socialLinks.map(({ label, href, icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-[#0A4D2E] hover:bg-[#0A4D2E] hover:text-white active:scale-90 transition-all">{icon}</a>
        ))}
        <div aria-hidden="true" className="w-px h-6 bg-slate-200 mx-1" />
        <a href="/admissions" className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#FFC107] active:scale-90 transition-all text-base">📋</a>
        <a href="/contact" className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#FFC107] active:scale-90 transition-all text-base">📞</a>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <dl className="space-y-2">
      {faqData.map((faq, i) => (
        <div key={i} className={`rounded-xl border overflow-hidden transition-all duration-300 ${open === i ? 'border-[#0A4D2E] shadow-md' : 'border-slate-100 hover:border-[#0A4D2E]/25'} bg-white`}>
          <dt>
            <button className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 group" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span className={`font-bold text-sm leading-snug transition-colors ${open === i ? 'text-[#0A4D2E]' : 'text-[#1a2332] group-hover:text-[#0A4D2E]'}`}>{faq.q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }} className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-black text-sm transition-colors ${open === i ? 'bg-[#0A4D2E] text-white' : 'bg-slate-100 text-slate-400'}`}>+</motion.span>
            </button>
          </dt>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.dd key="dd" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "#5a6472" }}>{faq.a}</p>
              </motion.dd>
            )}
          </AnimatePresence>
        </div>
      ))}
    </dl>
  );
}

// ─── MINI CARD — horizontal, left accent border, icon + title + sub ───────────
function MiniCard({ icon, title, sub, color, iconBg, linkTo }) {
  const inner = (
    <div
      className="group flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:shadow-md transition-all duration-200 h-full"
      style={{ borderLeft: `4px solid ${color}`, boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
    >
      <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200" style={{ background: iconBg }}>{icon}</div>
      <div className="min-w-0">
        <p className="font-black text-[13px] text-[#1a2332] leading-tight truncate">{title}</p>
        <p className="text-[11px] leading-tight mt-0.5 truncate" style={{ color: "#5a6472" }}>{sub}</p>
      </div>
    </div>
  );
  return linkTo
    ? <Link to={linkTo} className="block h-full">{inner}</Link>
    : <div className="h-full">{inner}</div>;
}

// ─── TALL CARD — top accent bar, icon+badge row, title, bullet dots ───────────
function TallCard({ icon, title, badge, bullets, color, iconBg, badgeText, badgeBg, linkTo }) {
  const inner = (
    <div
      className="group relative h-full bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full shrink-0" style={{ background: color }} />
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Icon + badge row */}
        <div className="flex items-start justify-between gap-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ background: iconBg }}>{icon}</div>
          <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border mt-0.5 shrink-0"
            style={{ background: badgeBg, color: badgeText, borderColor: color + "44" }}>{badge}</span>
        </div>
        {/* Title + animated underline */}
        <div>
          <h3 className="text-[15px] font-black text-[#1a2332] leading-tight mb-1.5">{title}</h3>
          <div className="h-[3px] w-8 rounded-full group-hover:w-14 transition-all duration-300" style={{ background: color }} />
        </div>
        {/* Bullet list */}
        <ul className="space-y-2 flex-1">
          {bullets.map((b, j) => (
            <li key={j} className="flex items-center gap-2.5 text-[13px]" style={{ color: "#5a6472" }}>
              <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: color }} />{b}
            </li>
          ))}
        </ul>
        {/* Decorative circle — bottom right */}
        <div aria-hidden="true" className="absolute bottom-3 right-3 w-14 h-14 rounded-full opacity-[0.12] pointer-events-none" style={{ background: color }} />
      </div>
    </div>
  );
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 340, damping: 18 } }}
      className="h-full"
    >
      {linkTo ? <Link to={linkTo} className="block h-full">{inner}</Link> : <div className="h-full">{inner}</div>}
    </motion.div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, highlight, desc, center = false }) {
  return (
    <div className={`mb-5 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-2.5 px-3.5 py-1.5 rounded-full border border-[#0A4D2E]/12 bg-[#0A4D2E]/5 ${center ? "" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] animate-pulse" />
          <span className="text-[#0A4D2E] font-black tracking-[0.38em] text-[9.5px] uppercase">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl font-black text-[#0A4D2E] tracking-tighter uppercase leading-none">
        {title} {highlight && <span className="text-[#FFC107]">{highlight}</span>}
      </h2>
      {desc && <p className="text-[13px] mt-1.5 max-w-xl" style={{ color: "#5a6472" }}>{desc}</p>}
    </div>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <RightSocialSidebar />
      <MobileBottomBar />

      <main className="w-full bg-[#F8FAFC] overflow-x-hidden antialiased" id="main-content" role="main">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#0A4D2E] focus:text-white focus:rounded-lg">Skip to main content</a>
        <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A4D2E] via-[#FFC107] to-[#0A4D2E] origin-left z-[9999]" style={{ scaleX }} aria-hidden="true" />

        {/* ═══ 1. HERO ════════════════════════════════════════ */}
        <HeroSection />

        {/* ═══ 2. WELCOME BENTO ═══════════════════════════════ */}
        <section className="relative z-30 -mt-10 sm:-mt-16 md:-mt-20 px-3 sm:px-5 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 relative">
            <motion.div {...fadeUp(0)}
              className="lg:col-span-8 relative bg-white/85 backdrop-blur-xl p-7 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-white/80 flex flex-col justify-center overflow-hidden"
              style={{ boxShadow: '0 8px 40px rgba(10,77,46,0.08)' }}>
              <DotGrid className="inset-0" opacity={0.04} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: 36 }} transition={{ duration: 0.8, delay: 0.2 }} className="h-[3px] bg-[#FFC107] rounded-full" />
                  <span className="text-[#0A4D2E] font-black tracking-[0.35em] text-[9px] sm:text-[10px] uppercase">Gnanodaya Excellence</span>
                </div>
                <h1 className="text-[2.2rem] sm:text-[3.6rem] md:text-[5rem] font-black text-[#0A4D2E] leading-[0.9] tracking-tighter mb-4 sm:mb-6">
                  Shaping <span className="text-[#FFC107]">Minds.</span><br />Building Futures.
                </h1>
                <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-xl" style={{ color: "#5a6472" }}>
                  Gnanodaya School, Madanapalle — Chittoor District's trusted AP State Board institution offering quality education from KG to 10th. Experienced teachers, modern facilities, holistic development.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/about" className="group relative px-6 sm:px-8 py-3 bg-[#0A4D2E] text-white rounded-xl font-black uppercase text-[9px] tracking-[0.2em] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <span className="relative z-10 group-hover:text-[#0A4D2E] transition-colors duration-300">Explore Our Legacy</span>
                    <span aria-hidden="true" className="absolute inset-0 bg-[#FFC107] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </a>
                  <a href="/contact" className="px-6 sm:px-8 py-3 border-2 border-[#0A4D2E] text-[#0A4D2E] rounded-xl font-black uppercase text-[9px] tracking-[0.2em] hover:bg-[#0A4D2E] hover:text-white transition-all">
                    Contact Admissions
                  </a>
                </div>
              </div>
            </motion.div>
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 gap-3">
              <motion.div {...fadeUp(0.1)}
                className="relative bg-[#0A4D2E] p-6 sm:p-8 rounded-[2rem] text-white flex flex-col justify-between shadow-lg overflow-hidden group"
                style={{ boxShadow: '0 8px 32px rgba(10,77,46,0.28)' }}>
                <DotGrid className="inset-0" color="#ffffff" opacity={0.06} size={18} />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#FFC107] mb-2">Session 2025–26</p>
                  <p className="text-xl sm:text-2xl font-black leading-tight">Admissions<br />Now Open</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                    <a href="/registration" className="text-[9px] font-bold uppercase text-white/50 group-hover:text-[#FFC107] transition-all">Secure Your Seat →</a>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.15)}
                className="relative bg-[#FFC107] p-6 sm:p-8 rounded-[2rem] text-[#0A4D2E] flex flex-col justify-center shadow-lg overflow-hidden">
                <span className="text-3xl mb-2 relative z-10">🏆</span>
                <p className="text-lg sm:text-xl font-black uppercase tracking-tighter leading-none">AP State Board</p>
                <p className="text-[9px] font-black uppercase tracking-widest mt-1.5 opacity-60">KG to 10th Standard</p>
                <div className="flex gap-1 mt-2.5 flex-wrap">
                  {["KG", "1–5", "6–8", "9–10"].map(g => <span key={g} className="text-[8px] font-black bg-[#0A4D2E]/10 px-2 py-0.5 rounded-full">{g}</span>)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ 3. STATS ════════════════════════════════════════ */}
        <section className="py-6 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="relative bg-[#0A4D2E] rounded-[1.5rem] sm:rounded-[2rem] px-6 sm:px-12 py-8 sm:py-10 overflow-hidden" style={{ boxShadow: '0 12px 48px rgba(10,77,46,0.22)' }}>
            <DotGrid className="inset-0" color="#ffffff" opacity={0.06} size={20} />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-0">
              {statItems.map(({ end, suffix, label, icon }, i) => (
                <motion.div key={label} {...fadeUp(i * 0.08)}
                  className={`text-center py-3 ${i < statItems.length - 1 ? 'md:border-r border-white/10' : ''} ${i === 0 || i === 2 ? 'border-b md:border-b-0 border-white/10' : ''}`}>
                  <div className="text-xl sm:text-2xl mb-2" aria-hidden="true">{icon}</div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none"><AnimatedCounter end={end} suffix={suffix} /></p>
                  <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mt-1.5">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══ 4. WHY CHOOSE US ════════════════════════════════
             Row 1: 3 mini horizontal cards
             Row 2: 3 tall detail cards with bullets           */}
        <section className="py-6 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <SectionHeader eyebrow="Why Parents Choose Us" title="The Gnanodaya" highlight="Difference" desc="Six compelling reasons why Madanapalle families have trusted us for over 35 years." />
          </motion.div>

          {/* Row 1 — mini horizontal cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3"
          >
            {whyMini.map((item) => (
              <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                <MiniCard {...item} linkTo="/about/principal-message" />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 — tall detail cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {whyTall.map((item) => (
              <TallCard key={item.title} {...item} linkTo="/about/principal-message" />
            ))}
          </motion.div>
        </section>

        {/* ═══ 5. PRINCIPAL MESSAGE ════════════════════════════ */}
        <section className="py-6 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)}
            className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-2"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}>
            <div className="relative h-[240px] sm:h-[320px] lg:h-auto overflow-hidden">
              <motion.img src={homeprincipal.src || homeprincipal} alt="School Principal – Gnanodaya School"
                width={720} height={900} whileHover={{ scale: 1.04 }} transition={{ duration: 1.2 }}
                className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D2E]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
                <p className="text-white text-xl sm:text-2xl font-black uppercase tracking-tight">Our Principal</p>
                <p className="text-[#FFC107] font-bold uppercase tracking-widest text-[9px] mt-0.5">Gnanodaya School, Madanapalle</p>
              </div>
            </div>
            <div className="relative p-7 sm:p-10 md:p-14 flex flex-col justify-center overflow-hidden">
              <DotGrid className="inset-0" opacity={0.035} />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0A4D2E] tracking-tight uppercase mb-4 leading-tight">
                  A Message From<br />the Principal's Desk
                </h2>
                <blockquote className="text-sm sm:text-base italic leading-relaxed mb-5 border-l-4 border-[#FFC107]/60 pl-4" style={{ color: "#5a6472" }}>
                  "At Gnanodaya School, we believe every child deserves the best start in life. Our mission is to provide an environment where curiosity thrives, character is built, and futures are shaped with care and commitment."
                </blockquote>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["AP State Board", "Holistic Education", "Character Building"].map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-[#0A4D2E]/5 text-[#0A4D2E] px-2.5 py-1.5 rounded-full border border-[#0A4D2E]/10">{tag}</span>
                  ))}
                </div>
                <Link to="/about/principal-message" className="inline-flex items-center gap-2 text-[#0A4D2E] font-black uppercase tracking-[0.25em] text-[9px] border-b-2 border-[#FFC107] pb-0.5 hover:text-[#B8860B] transition-colors">
                  Read Full Vision →
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══ 6. FACILITIES — LIGHT BG, same layout as Why Choose Us ══════════
             Row 1: 3 mini horizontal light cards
             Row 2: 3 tall light cards with bullets                              */}
        <section className="py-6 sm:py-10 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <SectionHeader eyebrow="Our Campus, Madanapalle" title="World-Class" highlight="Facilities" desc="Modern infrastructure designed to inspire curiosity and support all-round student development." />
          </motion.div>

          {/* Row 1 — mini horizontal cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3"
          >
            {facMini.map((item) => (
              <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                <MiniCard {...item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 — tall detail cards */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {facTall.map((item) => (
              <TallCard key={item.title} {...item} />
            ))}
          </motion.div>
        </section>

        {/* ═══ 7. PROGRAMS ════════════════════════════════════ */}
        <section className="py-6 sm:py-8">
          <ProgramsPreview />
        </section>

        {/* ═══ 8. CTA ══════════════════════════════════════════ */}
        <section className="pb-10 sm:pb-16 px-4 sm:px-6">
          <motion.div {...fadeUp(0)}
            className="max-w-5xl mx-auto relative bg-[#0A4D2E] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(10,77,46,0.28)' }}>
            <DotGrid className="inset-0" color="#ffffff" opacity={0.05} size={22} />
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0A4D2E] rounded-full px-4 py-2 mb-5 shadow-xl relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A4D2E] animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-widest">2025–26 Admissions Open Now</span>
            </motion.div>
            <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4">
              Begin Your<br /><span className="text-[#FFC107]">Journey.</span>
            </h2>
            <p className="relative z-10 text-sm sm:text-base mb-6 max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Give your child the best AP State Board education in Madanapalle. Limited seats — enquire today.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="group relative px-7 sm:px-10 py-3.5 bg-[#FFC107] text-[#0A4D2E] rounded-full font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden shadow-xl">
                <span className="relative z-10">Enquire Now</span>
                <span className="absolute inset-0 bg-white/25 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
              <a href="/registration" className="px-7 sm:px-10 py-3.5 border-2 border-white/25 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:border-[#FFC107] hover:text-[#FFC107] transition-all">
                Apply Online
              </a>
            </div>
          </motion.div>
        </section>

        {/* ═══ 9. FAQ ══════════════════════════════════════════ */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-20">
          <motion.div {...fadeUp(0)} className="text-center mb-5">
            <h2 className="text-xl sm:text-2xl font-black text-[#0A4D2E] tracking-tight">
              Frequently Asked <span className="text-[#FFC107]">Questions</span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.04)}><FAQAccordion /></motion.div>
        </section>

      </main>
    </>
  );
}