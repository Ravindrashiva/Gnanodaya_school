"use client";
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from "../components/school/HeroSection";
import ProgramsPreview from "../components/school/Programspreview";

// --- CINEMATIC PHYSICS CONFIG ---
const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20
};

const fIn = {
  initial: { opacity: 0, y: 50, scale: 0.98 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { ...springTransition, duration: 0.8 } 
  },
  viewport: { once: true, margin: "-100px" }
};

const hoverScale = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const testimonials = [
  {
    author: "Arjun Reddy",
    role: "Parent of Grade 10 Student",
    content: "The IIT-JEE integrated program is unmatched in the region. My son's confidence in science has skyrocketed."
  },
  {
    author: "Sravani K.",
    role: "Parent of Grade 4 Student",
    content: "We moved from Bangalore, and the infrastructure here at Gnanodhaya is surprisingly superior. Highly recommended."
  },
  {
    author: "Dr. Mahesh Babu",
    role: "Alumni Parent",
    content: "A perfect blend of traditional values and modern technology. The faculty is genuinely invested in student growth."
  },
  {
    author: "Priya Sharma",
    role: "Parent of Grade 2 Student",
    content: "The attention to individual child development and the safe, green campus makes it the best choice in Madanapalle."
  }
];

export default function Home() {
  // --- SCROLL PROGRESS LOGIC ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="w-full bg-[#F8FAFC] overflow-x-hidden antialiased">
      
      {/* 0. SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFC107] origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OVERLAPPING WELCOME BENTO */}
      <section className="relative z-30 -mt-20 px-4 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <motion.div 
            {...fIn} 
            whileHover={hoverScale}
            className="lg:col-span-8 bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-white flex flex-col justify-center cursor-default"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[3px] bg-[#FFC107]"
              ></motion.span>
              <span className="text-[#0A4D2E] font-black tracking-[0.5em] text-[12px] uppercase">Gnanodhaya Excellence</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-[#0A4D2E] leading-[0.85] tracking-tighter mb-8">
              Shaping <span className="text-[#FFC107]">Minds.</span> <br/>Building Futures.
            </h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-10 max-w-2xl">
              We blend academic rigor with elite infrastructure to build a future-ready educational ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-12 py-5 bg-[#0A4D2E] text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all shadow-xl">Explore Our Legacy</button>
              <button className="px-12 py-5 border-2 border-[#0A4D2E] text-[#0A4D2E] rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-[#0A4D2E] hover:text-white transition-all">Contact Admissions</button>
            </div>
          </motion.div>

          <div className="lg:col-span-4 grid grid-rows-2 gap-4">
            <motion.div 
              {...fIn} 
              whileHover={{ ...hoverScale, backgroundColor: "#0c5a36" }}
              className="bg-[#0A4D2E] p-10 rounded-[3.5rem] text-white flex flex-col justify-between group cursor-pointer shadow-lg"
            >
              <h4 className="text-[12px] font-black uppercase tracking-widest text-[#FFC107]">Session 2026-27</h4>
              <p className="text-4xl font-black leading-none">Admissions <br/> Now Open</p>
              <p className="text-[11px] font-bold uppercase text-white/50 group-hover:text-white transition-all">Secure Your Seat ➔</p>
            </motion.div>
            <motion.div 
              {...fIn} 
              whileHover={hoverScale}
              className="bg-[#FFC107] p-10 rounded-[3.5rem] text-[#0A4D2E] flex flex-col justify-center shadow-lg"
            >
              <span className="text-4xl mb-4">🏆</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Elite Academy</h4>
              <p className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-60">IIT-JEE & NEET Integrated</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PRINCIPAL'S MESSAGE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          {...fIn}
          className="bg-white rounded-[5rem] overflow-hidden shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="relative h-[500px] lg:h-auto overflow-hidden">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full bg-slate-200 bg-[url('/principal-placeholder.jpg')] bg-cover bg-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D2E]/80 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <h3 className="text-white text-4xl font-black uppercase tracking-tighter">Dr. S.R.M. Yadav</h3>
              <p className="text-[#FFC107] font-bold uppercase tracking-widest text-xs">Chairman & Principal</p>
            </div>
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <span className="text-[#FFC107] text-6xl font-serif mb-6">“</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A4D2E] tracking-tighter uppercase mb-8 leading-none">
              A Message <br/> From the Desk
            </h2>
            <div className="space-y-6 text-slate-500 text-lg italic leading-relaxed">
              <p>"At Gnanodhaya Public School, we believe knowledge is power."</p>
            </div>
            <button className="mt-10 self-start text-[#0A4D2E] font-black uppercase tracking-[0.3em] text-[10px] border-b-2 border-[#FFC107] pb-1 hover:text-[#FFC107] transition-all">Read Full Vision</button>
          </div>
        </motion.div>
      </section>

      {/* 4. WORLD-CLASS INFRASTRUCTURE */}
      <section className="py-20 bg-[#0A4D2E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">World-Class <span className="text-[#FFC107]">Facilities</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div {...fIn} whileHover={hoverScale} className="md:col-span-2 bg-white/5 p-12 rounded-[3.5rem] border border-white/10 group hover:bg-white/10 transition-all cursor-default">
              <span className="text-5xl">🔬</span>
              <h4 className="text-2xl font-black uppercase mt-8">Advanced STEM Labs</h4>
            </motion.div>
            <motion.div {...fIn} whileHover={hoverScale} className="bg-[#FFC107] p-12 rounded-[3.5rem] text-[#0A4D2E] cursor-default">
              <span className="text-5xl">⚽</span>
              <h4 className="text-2xl font-black uppercase mt-8">Sports Arena</h4>
            </motion.div>
            <motion.div {...fIn} whileHover={hoverScale} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 cursor-default">
              <span className="text-5xl">📚</span>
              <h4 className="text-2xl font-black uppercase mt-8">Digital Library</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ACADEMIC PREVIEW */}
      <section className="py-24">
        <ProgramsPreview />
      </section>

      {/* 5.5 TESTIMONIALS - CINEMATIC MARQUEE */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div {...fIn} className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-[#FFC107] font-black tracking-[0.5em] text-[10px] uppercase">Voices of Excellence</span>
              <h2 className="text-5xl md:text-6xl font-black text-[#0A4D2E] tracking-tighter uppercase leading-none mt-4">
                Parent <br/> <span className="text-[#FFC107]">Perspectives</span>
              </h2>
            </div>
          </motion.div>
        </div>
        <div className="flex gap-6 overflow-hidden relative">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div 
                key={i} 
                className="w-[350px] md:w-[450px] bg-[#F8FAFC] p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-between shrink-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-6 text-[#FFC107]">
                  {[...Array(5)].map((_, i) => <span key={i} className="whitespace-normal">★</span>)}
                </div>
                <p className="text-slate-600 text-lg font-medium italic whitespace-normal mb-8">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A4D2E] flex items-center justify-center text-white font-black text-xs">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="text-[#0A4D2E] font-black uppercase text-xs tracking-widest">{t.author}</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. ROYAL CTA SECTION */}
      <section className="pb-32 px-6">
        <motion.div 
          {...fIn}
          whileHover={{ scale: 1.01 }}
          className="max-w-6xl mx-auto bg-white rounded-[5rem] p-16 md:p-24 text-center shadow-2xl border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0A4D2E] via-[#FFC107] to-[#0A4D2E]" />
          <h2 className="text-6xl md:text-9xl font-black text-[#0A4D2E] tracking-tighter uppercase leading-none mb-10">
            Join the <br/> <span className="text-[#FFC107]">Elite.</span>
          </h2>
          <button className="px-16 py-6 bg-[#0A4D2E] text-white rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all shadow-2xl">
            Inquire Now
          </button>
        </motion.div>
      </section>
    </main>
  );
}