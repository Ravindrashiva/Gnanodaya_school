import React from 'react';
import { motion } from 'framer-motion';

/**
 * Admissions Component for Gyanodaya High School
 * Theme: Forest Green & Polished Gold
 * Animation: Sequential "One-by-One" scroll reveals
 */
function Admissions() {
  const eligibility = [
    { class: 'LKG', age: '3.5 - 4.5 Years', focus: 'Social Integration & Play' },
    { class: 'UKG', age: '4.5 - 5.5 Years', focus: 'Literacy & Numeracy Foundations' },
    { class: 'Grade 1', age: '5.5 - 6.5 Years', focus: 'Cognitive & Creative Development' },
    { class: 'Grades 2-5', age: 'Age Appropriate', focus: 'Academic Discipline' },
    { class: 'Grades 6-10', age: 'Age Appropriate', focus: 'Leadership & Specialization' }
  ];

  const documents = [
    'Original Birth Certificate',
    'Transfer Certificate (TC)',
    'Aadhaar Card (Student & Parents)',
    'Last Progress Report',
    'Passport Size Photos (4)',
    'Medical Fitness Certificate'
  ];

  const steps = [
    { step: 1, title: 'Inquiry', desc: 'Submit an online form or visit our Madanapalle campus.' },
    { step: 2, title: 'Interaction', desc: 'A friendly session to understand the child’s potential.' },
    { step: 3, title: 'Verification', desc: 'Submission of all necessary academic and identity documents.' },
    { step: 4, title: 'Confirmation', desc: 'Receive the admission offer letter and orientation details.' }
  ];

  // Primary animation for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // Container to trigger children one by one
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, // Delay between each item
        delayChildren: 0.1 
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] overflow-hidden text-lg md:text-xl leading-relaxed pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#064E3B] text-white py-32 border-b-8 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#D4AF37] text-[#064E3B] mb-8 text-sm font-black uppercase tracking-[0.25em] shadow-xl">
              Admissions 2026-2027
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
              A Legacy of <span className="text-[#D4AF37]">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/70 max-w-3xl mx-auto mb-12 font-light">
              Nurturing minds in Madanapalle with a world-class curriculum.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#apply" className="bg-[#D4AF37] text-[#064E3B] px-12 py-5 rounded-lg font-black text-xl shadow-2xl transition-all uppercase tracking-widest hover:bg-white">
                Apply Online
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ELIGIBILITY TABLE (Displays rows one by one) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#064E3B] mb-6 uppercase tracking-tighter">Entry Requirements</h2>
            <div className="h-2 w-32 bg-[#D4AF37] mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            className="overflow-hidden rounded-2xl shadow-2xl border border-emerald-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <table className="w-full text-left">
              <thead className="bg-[#064E3B] text-[#D4AF37]">
                <tr>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Level</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Age Range</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Focus Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {eligibility.map((row, i) => (
                  <motion.tr key={i} variants={itemVariants} className="hover:bg-amber-50/50 transition-colors">
                    <td className="px-8 py-6 font-black text-[#064E3B] text-xl">{row.class}</td>
                    <td className="px-8 py-6 text-slate-700 font-bold">{row.age}</td>
                    <td className="px-8 py-6 text-slate-400 italic text-base">{row.focus}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 3. DOCUMENTS & PATH (Displays cards and steps one by one) */}
      <section className="py-24 bg-[#f3f4f1]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          
          {/* Documents Column */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants}
          >
            <h3 className="text-3xl font-bold text-[#064E3B] mb-10 flex items-center">
              <span className="w-3 h-10 bg-[#D4AF37] mr-4 inline-block rounded-sm" />
              Required Documents
            </h3>
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-center p-6 bg-white rounded-xl shadow-md border-l-8 border-[#D4AF37] hover:translate-x-2 transition-transform"
                >
                  <span className="text-[#064E3B] font-black mr-4 text-xl">✓</span>
                  <span className="text-slate-800 font-bold uppercase tracking-tight text-base">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Path Column */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={containerVariants}
          >
            <h3 className="text-3xl font-bold text-[#064E3B] mb-10">The Enrollment Path</h3>
            <div className="space-y-12 border-l-4 border-[#D4AF37]/30 ml-8 pl-12 relative">
              {steps.map((s, i) => (
                <motion.div key={i} variants={itemVariants} className="relative group">
                  <div className="absolute -left-[68px] top-0 w-10 h-10 rounded-full bg-[#064E3B] border-4 border-[#D4AF37] shadow-lg flex items-center justify-center text-sm font-black text-[#D4AF37] group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <h4 className="text-2xl font-black text-[#064E3B] mb-3 uppercase tracking-tighter">{s.title}</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section id="apply" className="px-6 py-20 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="max-w-6xl mx-auto bg-[#064E3B] rounded-[50px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-[0_30px_60px_rgba(6,78,59,0.3)] border-b-8 border-[#D4AF37]"
        >
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">Begin Their Journey</h2>
            <p className="text-emerald-100/60 text-lg md:text-xl font-light italic">Admissions now open for all grades.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#D4AF37] text-[#064E3B] px-10 py-4 rounded-xl font-black text-lg shadow-xl uppercase tracking-widest hover:bg-white transition-colors">
              Registration Form
            </motion.button>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

export default Admissions;