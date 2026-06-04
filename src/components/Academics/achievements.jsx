"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Local Asset Imports - Ensure these paths match your project structure
import highlight2 from "../../assets/highlight2.png";
import highlight3 from "../../assets/highlight3.png";
import highlight4 from "../../assets/highlight4.png";

// Icon Imports
import {
  Trophy, Award, Star, Target, Medal, BookOpen, 
  ChevronRight, Microscope, Zap, GraduationCap
} from "lucide-react";

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Verified Topper data from SSC 2026 Results
  const toppers2026 = [
    { name: "C. Sneha", marks: "584", rank: "1st" },
    { name: "S. Arfa Anjum", marks: "581", rank: "2nd" },
    { name: "B. Praneetha", marks: "578", rank: "3rd" },
    { name: "S. Mateeha", marks: "574", rank: "4th" },
    { name: "K. Dharmajnya", marks: "574", rank: "4th" },
    { name: "B. Hemanth", marks: "571", rank: "5th" },
    { name: "P. Reddi Prasad Reddy", marks: "570", rank: "6th" },
  ];

  return (
    <main ref={containerRef} className="pt-24 pb-20 bg-[#f8f9f4] min-h-screen overflow-hidden">
      
      {/* ── SECTION 1: HERO & IMPACT STATS ── */}
      <section className="relative px-6 py-20 mb-12">
        {/* Large background typography */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-0 right-0 text-[25vw] font-black text-[#0A4D2E]/5 leading-none select-none pointer-events-none"
        >
          LEGACY
        </motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#FFC107]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A4D2E]">
              37 Years of Excellence
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-[9rem] font-black text-[#0A4D2E] leading-[0.85] tracking-tighter mb-12">
            LIMITLESS <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #0A4D2E' }}>RESULTS.</span> <br />
            <span className="text-[#FFC107]">PROVEN.</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "SSC PASS RATE", val: "100%", icon: Award },
              { label: "TOP SCORE 2026", val: "584", icon: Target },
              { label: "LEGACY YEARS", val: "37+", icon: Star },
              { label: "DISTRICT RANKS", val: "15+", icon: Medal },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100"
              >
                <stat.icon className="text-[#FFC107] mb-3" size={20} />
                <div className="text-4xl font-black text-[#0A4D2E]">{stat.val}</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        {/* ── SECTION 2: THE PERFORMANCE GRID ── */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feature Card */}
          <div className="lg:col-span-2 bg-[#0A4D2E] rounded-[3.5rem] p-12 md:p-16 text-white relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-150" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Zap className="text-[#FFC107]" size={20} />
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-emerald-400">SSC 2026 Batch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase">Excellence is <br/>a Habit.</h2>
              <p className="text-emerald-100/70 max-w-md font-medium mb-10 text-lg">
                Our commitment to quality education is reflected in our consistent 100% pass results and high-tier district rankings year after year.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-black text-[#FFC107]">580+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-500">Elite Scores</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#FFC107]">100%</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Philosophy Card */}
          <div className="bg-[#FFC107] rounded-[3.5rem] p-12 flex flex-col justify-between group">
            <BookOpen size={48} className="text-[#0A4D2E] opacity-20 group-hover:opacity-100 transition-opacity" />
            <div>
              <h3 className="text-3xl font-black text-[#0A4D2E] uppercase mb-4 tracking-tighter">Academic <br/>Mastery</h3>
              <p className="text-[#0A4D2E]/80 font-bold text-sm leading-relaxed">
                Empowering students with structured learning that turns potential into peak performance.
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: TOPPERS & HOLISTIC DEVELOPMENT ── */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Detailed Toppers List */}
          <div className="bg-white rounded-[3.5rem] p-10 md:p-12 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-black text-[#0A4D2E] uppercase flex items-center gap-3 mb-10">
              <Medal className="text-[#FFC107]" /> SSC 2026 Hall of Fame
            </h3>
            <div className="space-y-3">
              {toppers2026.map((student, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 rounded-3xl bg-slate-50 hover:bg-[#0A4D2E] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A4D2E] text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-[#0A4D2E] flex items-center justify-center font-black transition-colors">
                      {student.rank}
                    </div>
                    <div>
                      <div className="font-black uppercase text-sm mb-1">{student.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-300 uppercase tracking-widest">{student.marks} / 600 Marks</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Holistic Icons / Extra-Curriculars */}
          <div className="bg-slate-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden">
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Beyond the Classroom</h3>
            <p className="text-slate-500 font-medium mb-12 italic">"Cultivating well-rounded leaders for a global future."</p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "National Sports", icon: Trophy, color: "text-orange-400" },
                { label: "Science Expo", icon: Microscope, color: "text-blue-400" },
                { label: "Lead Program", icon: GraduationCap, color: "text-purple-400" },
                { label: "Skill Medals", icon: Award, color: "text-emerald-400" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-7 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                  <item.icon className={`${item.color} mb-3 group-hover:scale-110 transition-transform`} size={28} />
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 4: VISUAL HIGHLIGHTS ── */}
        <section className="pt-16">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-5xl font-black text-[#0A4D2E] uppercase tracking-tighter">Moments of Pride</h2>
              <p className="text-slate-400 font-bold mt-2 uppercase text-xs tracking-widest">A glimpse into our journey</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Academic Excellence", cat: "Scholastic", img: highlight2 },
              { title: "Athletic Dominance", cat: "Physical", img: highlight3 },
              { title: "Creative Arts", cat: "Cultural", img: highlight4 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D2E] via-[#0A4D2E]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-12 left-10 text-white">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFC107] mb-3 block">{item.cat}</span>
                  <h4 className="text-2xl font-black uppercase tracking-tight leading-none">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: FINAL CTA ── */}
        <div className="pt-16">
          <div className="bg-[#FFC107] rounded-[4rem] p-14 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-[#0A4D2E] uppercase mb-10 tracking-tighter">Your Future <br/>Starts Here.</h2>
              <button className="bg-[#0A4D2E] text-white px-12 py-6 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl">
                Secure Your Admission 2026
              </button>
            </div>
            {/* Background decorative circle */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0A4D2E]/5 rounded-full" />
          </div>
        </div>

      </div>
    </main>
  );
}