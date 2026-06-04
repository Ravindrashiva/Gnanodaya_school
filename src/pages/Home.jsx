"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from "../components/school/HeroSection";
import ProgramsPreview from "../components/school/Programspreview";
import homeprincipal from '../assets/homeprincipal.png';

// ─── ANIMATION PRESETS ───────────────────────────────────────────────────────
const spring = { type: "spring", stiffness: 260, damping: 22 };
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0, transition: { ...spring, duration: 0.75, delay } },
  viewport: { once: true, margin: "-80px" },
});
const hoverLift = {
  whileHover: { y: -6, scale: 1.02, transition: { type: "spring", stiffness: 360, damping: 14 } },
};

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const schoolJsonLd = {
  "@context": "https://schema.org", "@type": "School",
  "name": "Gnanodaya School", "alternateName": "Gnanodaya High School Madanapalle",
  "description": "Premier State Board school in Madanapalle, Chittoor District, Andhra Pradesh – KG to 10th.",
  "url": "https://gnanodayaschool.in",
  "foundingDate": "1989",
  "telephone": "+91-XXXXXXXXXX", "email": "info@gnanodayaschool.in",
  "address": { "@type": "PostalAddress", "addressLocality": "Madanapalle", "addressRegion": "Andhra Pradesh", "postalCode": "517325", "addressCountry": "IN" },
  "geo": { "@type": "GeoCoordinates", "latitude": "13.5500", "longitude": "78.5000" },
  "openingHours": "Mo-Sa 08:00-17:00",
  "sameAs": [
    "https://www.facebook.com/p/Gnanodaya-high-school-madanapalli-100068130069750/",
    "https://www.instagram.com/gnanodaya_school",
    "https://www.youtube.com/@gnanodayaschool"
  ],
};

const faqData = [
  { q: "Where is Gnanodaya School located?", a: "Gnanodaya School is in Madanapalle, Chittoor District, Andhra Pradesh — one of the best State Board schools in the region." },
  { q: "What board does Gnanodaya School Madanapalle follow?", a: "We follow the Andhra Pradesh State Board curriculum for all grades from KG through 10th standard." },
  { q: "When do admissions open at Gnanodaya School Madanapalle?", a: "Admissions for 2025–26 are now open. Contact our admissions office or visit gnanodayaschool.in." },
  { q: "What facilities does Gnanodaya School Madanapalle offer?", a: "Modern classrooms, science labs, a well-stocked library, sports grounds, and a safe campus in Chittoor District." },
  { q: "Is Gnanodaya School the best school in Madanapalle?", a: "Widely regarded as one of Madanapalle's top State Board schools — known for experienced faculty, strong board results, and a nurturing environment." },
];

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gnanodayaschool.in/" }],
};

// ─── GOOGLE REVIEWS DATA ──────────────────────────────────────────────────────
const googleReviews = [
  { author: "Arjun Reddy",     role: "Parent · Grade 10", content: "The teaching quality at Gnanodaya is unmatched in this region. My son's confidence in science has grown tremendously.", rating: 5, timeAgo: "2 weeks ago",  avatar: "AR", color: "#4285F4" },
  { author: "Sravani K.",      role: "Parent · Grade 4",  content: "We looked at many schools before choosing Gnanodaya. The infrastructure and teacher care is simply superior.", rating: 5, timeAgo: "1 month ago",  avatar: "SK", color: "#34A853" },
  { author: "Mahesh Babu",    role: "Alumni Parent",      content: "A perfect blend of traditional values and modern education. Faculty genuinely invested in each student's growth.", rating: 5, timeAgo: "3 weeks ago",  avatar: "MB", color: "#EA4335" },
  { author: "Priya Sharma",   role: "Parent · Grade 2",  content: "The safe, green campus and individual attention makes Gnanodaya the best choice in Madanapalle.", rating: 5, timeAgo: "5 days ago",    avatar: "PS", color: "#FBBC05" },
  { author: "Ramesh T.",      role: "Parent · Grade 8",  content: "My daughter scored top marks in State Board exams — the coaching here is absolutely phenomenal.", rating: 5, timeAgo: "2 months ago", avatar: "RT", color: "#4285F4" },
  { author: "Kavitha Nair",   role: "Parent · KG",       content: "From day one, teachers treated my child like family. Truly nurtures confidence and creativity.", rating: 5, timeAgo: "1 week ago",   avatar: "KN", color: "#34A853" },
  { author: "Suresh Varma",   role: "Parent · Grade 6",  content: "The balance of academics and co-curricular activities at Gnanodaya is exceptional. My child thrives here.", rating: 5, timeAgo: "3 months ago", avatar: "SV", color: "#EA4335" },
  { author: "Anitha Rao",     role: "Parent · Grade 9",  content: "Board results speak for themselves. 100% pass rate every year — and my son is proof of their dedicated teaching.", rating: 5, timeAgo: "6 days ago",   avatar: "AN", color: "#FBBC05" },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
const statItems = [
  { end: 1989, suffix: "",   label: "Founded",            icon: "🏫" },
  { end: 1500, suffix: "+",  label: "Students Enrolled",   icon: "🎓" },
  { end: 60,   suffix: "+",  label: "Qualified Teachers", icon: "👩‍🏫" },
  { end: 100,  suffix: "%",  label: "Board Pass Rate",     icon: "📊" },
];

const whyUs = [
  { icon: "🏆", title: "35+ Years Legacy",  desc: "Founded in 1989, decades of academic excellence trusted by Madanapalle families generation after generation." },
  { icon: "🔬", title: "STEM Focus",          desc: "Hands-on Physics, Chemistry, Biology & CS labs for deeper real-world understanding." },
  { icon: "🏃", title: "Sports & Fitness",   desc: "Cricket, football, volleyball, athletics — whole-child physical development year-round." },
  { icon: "📖", title: "AP State Board",      desc: "Expertly aligned AP State Board curriculum from KG to 10th with consistent top results." },
  { icon: "🌿", title: "Safe Green Campus",  desc: "Eco-friendly, zero-tolerance safety environment so every student can thrive without worry." },
  { icon: "🤝", title: "Parent Partnership", desc: "24/7 digital progress tracking and monthly parent-teacher engagement meetings." },
];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/p/Gnanodaya-high-school-madanapalli-100068130069750/", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "Instagram", href: "https://www.instagram.com/gnanodaya_school", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: "YouTube", href: "https://www.youtube.com/@gnanodayaschool", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
];

// ─── DOT GRID ─────────────────────────────────────────────────────────────────
function DotGrid({ className = "", color = "#0A4D2E", opacity = 0.06, size = 22 }) {
  return (
    <div aria-hidden="true" className={`absolute pointer-events-none ${className}`}
      style={{ backgroundImage: `radial-gradient(circle, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1.2px, transparent 1.2px)`, backgroundSize: `${size}px ${size}px` }}
    />
  );
}

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function AnimatedCounter({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting && !started) setStarted(true); }, { threshold: 0.5 });
    observer.observe(el); return () => observer.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => { if (!startTime) startTime = ts; const p = Math.min((ts - startTime) / duration, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [started, end, duration]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

// ─── RIGHT SOCIAL SIDEBAR ─────────────────────────────────────────────────────
function RightSocialSidebar() {
  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/p/Gnanodaya-high-school-madanapalli-100068130069750/", hoverColor: "#1877F2", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { label: "Instagram", href: "https://www.instagram.com/gnanodaya_school", hoverColor: "#E1306C", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
    { label: "YouTube", href: "https://www.youtube.com/@gnanodayaschool", hoverColor: "#FF0000", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  ];
  return (
    <aside aria-label="Social media links" className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-[200] flex-col items-center pr-2">
      <div aria-hidden="true" className="w-px h-12 bg-gradient-to-b from-transparent to-[#0A4D2E]/25 mb-2" />
      <div className="flex flex-col bg-white/90 backdrop-blur-xl border border-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-2xl p-1.5 gap-0.5">
        {socials.map(({ label, href, icon, hoverColor }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} – Gnanodaya School`} title={label}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-[#0A4D2E] transition-all duration-200 hover:scale-110"
            onMouseEnter={e => { e.currentTarget.style.background = hoverColor; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A4D2E"; }}>
            {icon}
          </a>
        ))}
      </div>
      <div aria-hidden="true" className="w-px h-12 bg-gradient-to-b from-[#0A4D2E]/25 to-transparent mt-2" />
    </aside>
  );
}

// ─── MOBILE BOTTOM BAR ────────────────────────────────────────────────────────
function MobileBottomBar() {
  return (
    <div className="flex lg:hidden fixed bottom-0 left-0 right-0 z-[200] justify-center pb-3 px-4">
      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl px-2.5 py-2">
        {socialLinks.map(({ label, href, icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-[#0A4D2E] hover:bg-[#0A4D2E] hover:text-white active:scale-90 transition-all">{icon}</a>
        ))}
        <div aria-hidden="true" className="w-px h-6 bg-slate-200 mx-1" />
        <a href="/admissions" aria-label="Admissions" className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#FFC107] active:scale-90 transition-all text-base">📋</a>
        <a href="/contact" aria-label="Contact" className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#FFC107] active:scale-90 transition-all text-base">📞</a>
      </div>
    </div>
  );
}

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────
function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <dl className="space-y-3">
      {faqData.map((faq, i) => (
        <div key={i} className={`rounded-2xl border overflow-hidden transition-all duration-300 bg-white ${open === i ? "border-[#0A4D2E] shadow-md shadow-[#0A4D2E]/8" : "border-slate-100 shadow-sm"}`}>
          <dt>
            <button className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 group"
              onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span className={`font-black text-sm sm:text-base leading-snug transition-colors duration-200 ${open === i ? "text-[#0A4D2E]" : "text-slate-700 group-hover:text-[#0A4D2E]"}`}>{faq.q}</span>
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.22 }}
                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base font-black leading-none transition-colors duration-200 ${open === i ? "bg-[#0A4D2E] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-[#0A4D2E]/10"}`}>+</motion.span>
            </button>
          </dt>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.dd key="dd" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 text-slate-500 text-sm sm:text-base leading-relaxed border-t border-slate-50 pt-3">{faq.a}</p>
              </motion.dd>
            )}
          </AnimatePresence>
        </div>
      ))}
    </dl>
  );
}

// ─── GOOGLE STARS ─────────────────────────────────────────────────────────────
function GoogleStars({ rating = 5, size = "sm" }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size === "sm" ? 14 : 18} height={size === "sm" ? 14 : 18} viewBox="0 0 24 24" fill={i < rating ? "#FBBC05" : "#e2e8f0"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

// ─── GOOGLE REVIEW CARD ───────────────────────────────────────────────────────
function GoogleReviewCard({ review }) {
  return (
    <figure className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-[1.6rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 mx-3 overflow-hidden group">
      {/* Card header */}
      <div className="p-5 pb-4 border-b border-slate-50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Avatar circle */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[11px] font-black shrink-0 shadow-sm"
              style={{ background: review.color }}
            >
              {review.avatar}
            </div>
            <div>
              <p className="text-[#0A4D2E] font-black text-[13px] leading-none">{review.author}</p>
              <p className="text-slate-400 text-[10px] font-semibold mt-0.5">{review.role}</p>
            </div>
          </div>
          {/* Google G logo */}
          <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0 opacity-80">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <GoogleStars rating={review.rating} size="sm" />
          <span className="text-slate-400 text-[10px] font-semibold">{review.timeAgo}</span>
        </div>
      </div>
      {/* Review text */}
      <blockquote className="px-5 py-4">
        <p className="text-slate-600 text-sm leading-relaxed italic">"{review.content}"</p>
      </blockquote>
    </figure>
  );
}

// ─── MARQUEE ROW ─────────────────────────────────────────────────────────────
function MarqueeRow({ items, reverse = false, speed = 40 }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative w-full">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#f8fafb] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#f8fafb] to-transparent" />
      <div className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`} style={{ "--speed": `${speed}s` }}>
        {doubled.map((r, i) => <GoogleReviewCard key={i} review={r} />)}
      </div>
    </div>
  );
}

// ─── GOOGLE REVIEWS SECTION ───────────────────────────────────────────────────
function GoogleReviewsSection() {
  const row1 = googleReviews.slice(0, 4);
  const row2 = [...googleReviews].reverse().slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#f8fafb] overflow-hidden" aria-labelledby="reviews-heading">
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee { animation: marquee var(--speed, 40s) linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse var(--speed, 40s) linear infinite; }
        .animate-marquee:hover, .animate-marquee-reverse:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14">
        <motion.div {...fadeUp(0)} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          {/* Left: heading */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* Google G */}
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-slate-400 font-black tracking-[0.4em] text-[10px] uppercase">Google Reviews</span>
            </div>
            <h2 id="reviews-heading" className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0A4D2E] tracking-tighter uppercase leading-none">
              What Parents <span className="text-[#FFC107]">Say</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-md">Real reviews from families across Madanapalle and Chittoor District.</p>
          </div>

          {/* Right: Google rating badge */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-[1.8rem] border border-slate-100 shadow-sm px-6 py-5 flex items-center gap-5">
              {/* Big score */}
              <div className="text-center">
                <p className="text-5xl font-black text-[#0A4D2E] leading-none">4.9</p>
                <GoogleStars rating={5} size="md" />
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1.5">200+ Reviews</p>
              </div>
              <div className="w-px h-14 bg-slate-100" />
              {/* Bar chart */}
              <div className="flex flex-col gap-1.5">
                {[
                  { stars: 5, pct: 92 },
                  { stars: 4, pct: 6 },
                  { stars: 3, pct: 2 },
                  { stars: 2, pct: 0 },
                  { stars: 1, pct: 0 },
                ].map(({ stars, pct }) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 w-3">{stars}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ background: pct > 50 ? "#FBBC05" : "#e2e8f0" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="mb-4"><MarqueeRow items={row1} reverse={false} speed={38} /></div>
      <MarqueeRow items={row2} reverse={true} speed={45} />

      {/* CTA */}
      <motion.div {...fadeUp(0.1)} className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white border border-slate-200 text-[#0A4D2E] px-6 py-3.5 rounded-2xl font-black uppercase text-[10px] tracking-[0.25em] shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
          <svg viewBox="0 0 24 24" width="14" height="14"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          View on Google Maps
        </a>
        <a href="/registration"
          className="group relative inline-flex items-center gap-2 bg-[#0A4D2E] text-white px-8 py-3.5 rounded-2xl font-black uppercase text-[10px] tracking-[0.25em] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
          <span className="relative z-10 group-hover:text-[#0A4D2E] transition-colors duration-300">Apply Online Now</span>
          <span aria-hidden="true" className="absolute inset-0 bg-[#FFC107] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        </a>
      </motion.div>
    </section>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <RightSocialSidebar />
      <MobileBottomBar />

      <main className="w-full bg-[#F8FAFC] overflow-x-hidden antialiased" id="main-content" role="main">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#0A4D2E] focus:text-white focus:rounded-lg">Skip to main content</a>

        {/* Scroll progress bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A4D2E] via-[#FFC107] to-[#0A4D2E] origin-left z-[9999]" style={{ scaleX }} aria-hidden="true" />

        {/* ══ 1. HERO ════════════════════════════════════════ */}
        <HeroSection />

        {/* ══ 2. WELCOME BENTO ══════════════════════════════ */}
        <section className="relative z-30 -mt-10 sm:-mt-16 md:-mt-20 px-3 sm:px-5 max-w-[1440px] mx-auto" aria-labelledby="welcome-heading">
          <div aria-hidden="true" className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-[#FFC107]/6 rounded-full blur-[140px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 relative">

            {/* Main card */}
            <motion.div {...fadeUp(0)} {...hoverLift}
              className="lg:col-span-8 relative bg-white/80 backdrop-blur-xl p-7 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl border border-white/80 flex flex-col justify-center cursor-default overflow-hidden">
              <svg aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 opacity-[0.035]" viewBox="0 0 240 240" fill="none">
                <circle cx="200" cy="40" r="140" stroke="#0A4D2E" strokeWidth="0.8"/><circle cx="200" cy="40" r="100" stroke="#0A4D2E" strokeWidth="0.6"/>
                <circle cx="200" cy="40" r="60" stroke="#0A4D2E" strokeWidth="0.5"/><circle cx="200" cy="40" r="20" stroke="#FFC107" strokeWidth="1"/>
              </svg>
              <DotGrid className="inset-0" opacity={0.045} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5 sm:mb-7">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: 44 }} transition={{ duration: 0.9, delay: 0.2 }} className="h-[3px] bg-[#FFC107] rounded-full" />
                  <span className="text-[#0A4D2E] font-black tracking-[0.35em] text-[10px] sm:text-[11px] uppercase">Gnanodaya Excellence</span>
                </div>
                <h1 id="welcome-heading" className="text-[2.5rem] sm:text-[3.8rem] md:text-[5.2rem] font-black text-[#0A4D2E] leading-[0.88] tracking-tighter mb-5 sm:mb-8">
                  Shaping{" "}
                  <span className="relative inline-block">
                    <span className="text-[#FFC107]">Minds.</span>
                    <motion.span aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.5 }} className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#FFC107] rounded-full origin-left" />
                  </span>
                  <br />Building Futures.
                </h1>
                <p className="text-slate-500 text-base sm:text-[17px] leading-relaxed mb-7 sm:mb-10 max-w-2xl">
                  Gnanodaya School, Madanapalle — Chittoor District's trusted AP State Board institution offering
                  quality education from KG to 10th. Experienced teachers, modern facilities, holistic development.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a href="/about" aria-label="Explore our legacy – Gnanodaya School Madanapalle"
                    className="group relative px-7 sm:px-10 py-3.5 sm:py-4 bg-[#0A4D2E] text-white rounded-xl sm:rounded-2xl font-black uppercase text-[10px] tracking-[0.22em] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                    <span className="relative z-10 group-hover:text-[#0A4D2E] transition-colors duration-300">Explore Our Legacy</span>
                    <span aria-hidden="true" className="absolute inset-0 bg-[#FFC107] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </a>
                  <a href="/contact" aria-label="Contact admissions – Gnanodaya School Madanapalle"
                    className="px-7 sm:px-10 py-3.5 sm:py-4 border-2 border-[#0A4D2E] text-[#0A4D2E] rounded-xl sm:rounded-2xl font-black uppercase text-[10px] tracking-[0.22em] hover:bg-[#0A4D2E] hover:text-white transition-all">
                    Contact Admissions
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right column */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 gap-3 sm:gap-4">
              <motion.div {...fadeUp(0.1)} {...hoverLift}
                className="relative bg-[#0A4D2E] p-6 sm:p-10 rounded-[2rem] sm:rounded-[3.5rem] text-white flex flex-col justify-between cursor-pointer shadow-lg overflow-hidden group">
                <div aria-hidden="true" className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#FFC107]/15 rounded-full blur-2xl group-hover:bg-[#FFC107]/25 transition-colors" />
                <DotGrid className="inset-0" color="#ffffff" opacity={0.06} size={18} />
                <div className="relative z-10">
                  <h2 className="text-[11px] font-black uppercase tracking-widest text-[#FFC107] mb-3">Session 2025–26</h2>
                  <p className="text-2xl sm:text-3xl font-black leading-tight">Admissions<br />Now Open</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                    <a href="/registration" aria-label="Secure your seat – Gnanodaya School 2025-26"
                      className="text-[10px] font-bold uppercase text-white/55 group-hover:text-[#FFC107] transition-all">Secure Your Seat ➔</a>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp(0.18)} {...hoverLift}
                className="relative bg-[#FFC107] p-6 sm:p-10 rounded-[2rem] sm:rounded-[3.5rem] text-[#0A4D2E] flex flex-col justify-center shadow-lg overflow-hidden">
                <div aria-hidden="true" className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#0A4D2E]/8 rounded-full" />
                <span aria-hidden="true" className="text-3xl sm:text-4xl mb-3 sm:mb-4 relative z-10">🏆</span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter leading-none relative z-10">AP State Board</h3>
                <p className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-60 relative z-10">KG to 10th Standard</p>
                <div className="flex gap-1 mt-3 flex-wrap relative z-10">
                  {["KG","1–5","6–8","9–10"].map(g => (
                    <span key={g} className="text-[8px] font-black bg-[#0A4D2E]/10 px-2 py-0.5 rounded-full">{g}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ 3. ANIMATED STATS ══════════════════════════════ */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto" aria-label="School statistics">
          <motion.div {...fadeUp(0)} className="relative bg-[#0A4D2E] rounded-[2.5rem] sm:rounded-[3rem] px-6 sm:px-14 py-10 sm:py-12 overflow-hidden">
            <DotGrid className="inset-0" color="#ffffff" opacity={0.07} size={20} />
            <div aria-hidden="true" className="absolute right-0 top-0 w-72 h-72 bg-[#FFC107]/10 rounded-full blur-[80px]" />
            <div aria-hidden="true" className="absolute -left-20 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-[60px]" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
              {statItems.map(({ end, suffix, label, icon }, i) => (
                <motion.div key={label} {...fadeUp(i * 0.09)} className="text-center group">
                  <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{icon}</div>
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none"><AnimatedCounter end={end} suffix={suffix} /></p>
                  <p className="text-white/45 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-2">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══ 4. WHY CHOOSE US ═══════════════════════════════ */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="why-heading">
          <motion.div {...fadeUp(0)} className="text-center mb-10 sm:mb-14">
            <span className="text-[#FFC107] font-black tracking-[0.5em] text-[10px] uppercase">Why Parents Choose Us</span>
            <h2 id="why-heading" className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0A4D2E] tracking-tighter uppercase leading-none mt-3">
              The Gnanodaya <span className="text-[#FFC107]">Difference</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {whyUs.map(({ icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.07)} {...hoverLift}
                className="group relative bg-white border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-[#0A4D2E]/15 transition-all cursor-default overflow-hidden">
                <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0A4D2E] to-[#FFC107] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-full" />
                <DotGrid className="right-0 bottom-0 w-24 h-24" opacity={0.07} />
                <div className="w-14 h-14 rounded-[1.2rem] bg-[#0A4D2E]/5 group-hover:bg-[#0A4D2E] flex items-center justify-center text-2xl mb-5 sm:mb-6 transition-all duration-300 shadow-inner">{icon}</div>
                <h3 className="text-base sm:text-lg font-black text-[#0A4D2E] uppercase tracking-tight mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══ 5. PRINCIPAL'S MESSAGE ══════════════════════════ */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="principal-heading">
          <motion.div {...fadeUp(0)} className="bg-white rounded-[2.5rem] sm:rounded-[5rem] overflow-hidden shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[280px] sm:h-[380px] lg:h-auto overflow-hidden">
              <motion.img src={homeprincipal.src || homeprincipal} alt="School Principal – Gnanodaya School, Madanapalle, Andhra Pradesh"
                width={720} height={900} whileHover={{ scale: 1.04 }} transition={{ duration: 1.2 }}
                className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0A4D2E]/80 via-[#0A4D2E]/10 to-transparent" />
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-5 left-5 sm:top-8 sm:left-8 bg-[#FFC107] text-[#0A4D2E] rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl">
                <span className="text-lg" aria-hidden="true">🏫</span>
                <div><p className="text-[9px] font-black uppercase tracking-widest leading-none">Est. 1989</p><p className="text-[9px] font-bold uppercase opacity-60">Madanapalle</p></div>
              </motion.div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
                <p className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tighter">Our Principal</p>
                <p className="text-[#FFC107] font-bold uppercase tracking-widest text-[10px] mt-1">Gnanodaya School, Madanapalle</p>
              </div>
            </div>
            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center overflow-hidden">
              <DotGrid className="inset-0" opacity={0.04} />
              <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-[#FFC107]/5 rounded-bl-[4rem]" />
              <div className="relative z-10">
                <span aria-hidden="true" className="text-[#FFC107] text-5xl sm:text-7xl font-serif block leading-none mb-3 sm:mb-4 opacity-70">"</span>
                <h2 id="principal-heading" className="text-3xl sm:text-4xl font-black text-[#0A4D2E] tracking-tighter uppercase mb-5 leading-none">A Message<br />From the Desk</h2>
                <blockquote className="text-slate-500 text-base sm:text-lg italic leading-relaxed mb-6">
                  <p>"At Gnanodaya School, we believe every child deserves the best start in life. Our mission is to provide an environment where curiosity thrives, character is built, and futures are shaped with care and commitment."</p>
                </blockquote>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {["AP State Board","Holistic Education","Character Building"].map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-[#0A4D2E]/5 text-[#0A4D2E] px-3 py-1.5 rounded-full border border-[#0A4D2E]/8">{tag}</span>
                  ))}
                </div>
                <Link to="/about/principal-message" aria-label="Read full principal message"
                  className="inline-flex items-center gap-2 text-[#0A4D2E] font-black uppercase tracking-[0.3em] text-[10px] border-b-2 border-[#FFC107] pb-1 hover:text-[#FFC107] transition-colors">
                  Read Full Vision <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══ 6. INFRASTRUCTURE ══════════════════════════════ */}
        <section aria-labelledby="facilities-heading"
          className="relative py-20 sm:py-28 text-white overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] mx-3 sm:mx-5 my-6 sm:my-10"
          style={{ background: "linear-gradient(150deg, #083d24 0%, #0A4D2E 55%, #0d6040 100%)" }}>
          <div aria-hidden="true" className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-[100px] pointer-events-none" />
          <div aria-hidden="true" className="absolute right-0 top-0 w-80 h-80 bg-white/4 rounded-full blur-[80px] pointer-events-none" />
          <DotGrid className="inset-0" color="#ffffff" opacity={0.05} size={26} />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-14 sm:mb-18">
              <motion.span {...fadeUp(0)} className="text-[#FFC107] font-black tracking-[0.5em] text-[10px] uppercase block mb-3">Our Campus, Madanapalle</motion.span>
              <motion.h2 {...fadeUp(0.05)} id="facilities-heading" className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter">World-Class <span className="text-[#FFC107]">Facilities</span></motion.h2>
              <motion.p {...fadeUp(0.1)} className="mt-4 text-white/50 text-sm sm:text-base max-w-xl mx-auto">Modern infrastructure designed to inspire curiosity and support all-round development.</motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
              {[
                { icon: "🔬", title: "Science Labs",      desc: "Fully equipped Physics, Chemistry & Biology labs — deep, hands-on learning every day." },
                { icon: "⚽", title: "Sports Grounds",    desc: "Cricket, football, volleyball & athletics for complete physical development." },
                { icon: "📚", title: "Library & Digital", desc: "Thousands of curated books plus digital resources for every grade and interest." },
              ].map(({ icon, title, desc }, i) => (
                <motion.article key={title} {...fadeUp(i * 0.07)} {...hoverLift}
                  className="relative bg-white/10 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-white/15 hover:bg-white/15 hover:border-[#FFC107]/30 transition-all duration-300 cursor-default flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl shrink-0">{icon}</div>
                  <div><h3 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#FFC107] mb-2">{title}</h3><p className="text-white/60 text-sm leading-relaxed">{desc}</p></div>
                </motion.article>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 sm:max-w-[66%] sm:mx-auto">
              {[
                { icon: "🖥️", title: "Computer Lab",  desc: "High-speed internet, modern PCs, and structured coding from Class 4 onwards." },
                { icon: "🎨", title: "Art & Culture", desc: "Dedicated music, dance, and craft spaces that nurture creative self-expression." },
              ].map(({ icon, title, desc }, i) => (
                <motion.article key={title} {...fadeUp((i + 3) * 0.07)} {...hoverLift}
                  className="relative bg-white/10 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-white/15 hover:bg-white/15 hover:border-[#FFC107]/30 transition-all duration-300 cursor-default flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl shrink-0">{icon}</div>
                  <div><h3 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#FFC107] mb-2">{title}</h3><p className="text-white/60 text-sm leading-relaxed">{desc}</p></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. PROGRAMS ════════════════════════════════════ */}
        <section className="py-14 sm:py-20" aria-labelledby="programs-heading">
          <h2 id="programs-heading" className="sr-only">Academic Programs at Gnanodaya School Madanapalle</h2>
          <ProgramsPreview />
        </section>

        {/* ══ 8. GOOGLE REVIEWS ══════════════════════════════ */}
        <GoogleReviewsSection />

        {/* ══ 9. RICH CTA ════════════════════════════════════ */}
        <section className="pb-20 sm:pb-28 px-4 sm:px-6" aria-labelledby="cta-heading">
          <motion.div {...fadeUp(0)} whileHover={{ scale: 1.008, transition: { type: "spring", stiffness: 200, damping: 22 } }}
            className="max-w-6xl mx-auto relative bg-[#0A4D2E] rounded-[3rem] sm:rounded-[5rem] p-10 sm:p-16 md:p-24 text-center overflow-hidden">
            <DotGrid className="inset-0" color="#ffffff" opacity={0.055} size={24} />
            <div aria-hidden="true" className="absolute -left-24 -bottom-24 w-96 h-96 bg-[#FFC107]/12 rounded-full blur-[100px]" />
            <div aria-hidden="true" className="absolute -right-16 -top-16 w-72 h-72 bg-white/5 rounded-full blur-[60px]" />
            <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2.5 bg-[#FFC107] text-[#0A4D2E] rounded-full px-5 py-2.5 mb-8 sm:mb-10 shadow-2xl relative z-10">
              <span className="w-2 h-2 rounded-full bg-[#0A4D2E] animate-ping" aria-hidden="true" />
              <span className="text-[11px] font-black uppercase tracking-widest">2025–26 Admissions Open Now</span>
            </motion.div>
            <h2 id="cta-heading" className="relative z-10 text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black text-white tracking-tighter uppercase leading-[0.88] mb-5 sm:mb-8">
              Begin Your<br /><span className="text-[#FFC107]">Journey.</span>
            </h2>
            <p className="relative z-10 text-white/45 text-base sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto leading-relaxed">
              Give your child the best AP State Board education in Madanapalle, Chittoor District. Limited seats — enquire today.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Link to="/contact" aria-label="Enquire about admissions – Gnanodaya School Madanapalle"
                className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-[#FFC107] text-[#0A4D2E] rounded-full font-black uppercase tracking-[0.25em] text-xs overflow-hidden shadow-2xl">
                <span className="relative z-10">Enquire Now</span>
                <span aria-hidden="true" className="absolute inset-0 bg-white/25 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
              <a href="/registration" className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-white/25 text-white rounded-full font-black uppercase tracking-[0.25em] text-xs hover:border-[#FFC107] hover:text-[#FFC107] transition-all">Apply Online</a>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {["✓ AP State Board", "✓ Est. 1989", "✓ 100% Results", "✓ Safe Campus", "✓ Madanapalle"].map(t => (
                <span key={t} className="text-white/30 text-[10px] font-black uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══ 10. FAQ ═════════════════════════════════════════ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-28 sm:pb-24" aria-labelledby="faq-heading">
          <motion.div {...fadeUp(0)} className="text-center mb-8 sm:mb-10">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-black text-[#0A4D2E] tracking-tighter uppercase">
              Frequently Asked <span className="text-[#FFC107]">Questions</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">Everything you need to know about Gnanodaya School, Madanapalle.</p>
          </motion.div>
          <motion.div {...fadeUp(0.05)}><FAQAccordion /></motion.div>
        </section>

      </main>
    </>
  );
}