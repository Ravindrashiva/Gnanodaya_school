"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  Cpu, 
  ChevronRight, 
  Atom,
  GraduationCap,
  BookOpen,
  Rocket,
  Sprout,
  Zap,
  CheckCircle2,
  Monitor,
  Flame,
  Baby // Added for Foundation levels
} from 'lucide-react';

const AcademicsPage = () => {
  const gradeLevels = [
    {
      title: "Foundation",
      grades: "LKG - UKG",
      focus: "Early Years Growth",
      description: "Nurturing curiosity through play-based learning, sensory activities, and social-emotional development.",
      icon: <Baby className="w-8 h-8 text-[#0A4D2E]" />,
    },
    {
      title: "Primary School",
      grades: "GRADES I - V",
      focus: "Foundational Literacy",
      description: "Activity-based learning designed to spark curiosity and build a strong foundation in core concepts.",
      icon: <Sprout className="w-8 h-8 text-[#0A4D2E]" />,
    },
    {
      title: "Middle School",
      grades: "GRADES VI - VIII",
      focus: "Exploration & Skills",
      description: "Integrated IIT/NEET foundation courses begin here, fostering critical thinking and analytical research.",
      icon: <BookOpen className="w-8 h-8 text-[#0A4D2E]" />,
    },
    {
      title: "High School",
      grades: "GRADES IX - X",
      focus: "Excellence & Boards",
      description: "Rigorous academic preparation combined with advanced competitive exam coaching and board readiness.",
      icon: <GraduationCap className="w-8 h-8 text-[#0A4D2E]" />,
    }
  ];

  return (
    <div className="bg-[#fcfcfc] text-[#0A4D2E] selection:bg-[#FFC107] selection:text-[#0A4D2E] font-sans">
      
      {/* --- ROYAL HERO SECTION --- */}
      <section className="bg-[#0A4D2E] pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#FFC107]/20 text-[#FFC107] px-4 py-1.5 rounded-full font-black tracking-[0.3em] text-[10px] uppercase mb-8 border border-[#FFC107]/30">
              Academic Excellence 2026-27
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              ELITE <span className="text-[#FFC107]">CURRICULUM</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto italic">
              "A comprehensive educational journey from foundational play to high-performance academic excellence."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRADE LEVELS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gradeLevels.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border border-gray-100 rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(10,77,46,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-[#0A4D2E]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFC107] group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>
              
              <p className="text-[#FFC107] font-black text-[10px] tracking-[0.25em] mb-2 uppercase">{item.grades}</p>
              <h3 className="text-2xl font-black mb-4 text-[#0A4D2E] tracking-tight">{item.title}</h3>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-4 bg-[#FFC107]"></div>
                <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider">{item.focus}</span>
              </div>
              
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ACADEMIC HIGHLIGHTS (DARK BENTO GLASS) --- */}
      <section className="bg-[#0A4D2E] py-32 px-6 rounded-t-[5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC107]/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">Focus Areas</h2>
              <p className="text-[#FFC107] font-black text-xs tracking-[0.4em] uppercase">Built for the 21st-Century Learner</p>
            </div>
            <div className="h-[2px] flex-grow mx-10 bg-white/10 hidden md:block mb-4"></div>
            <Flame className="text-[#FFC107] w-12 h-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            
            {/* IIT-JEE FOUNDATION (RE-LABELED FROM MAINS) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 p-12 rounded-[4rem] backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl group-hover:bg-[#FFC107]/20 transition-all" />
              
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="shrink-0 w-24 h-24 bg-[#FFC107] rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(255,193,7,0.3)]">
                  <Zap className="w-12 h-12 text-[#0A4D2E] fill-[#0A4D2E]" />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#FFC107] text-[#0A4D2E] text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">Elite Level</span>
                    <h4 className="text-4xl font-black text-white uppercase tracking-tighter">Foundation Excellence</h4>
                  </div>
                  <p className="text-white/70 text-lg font-medium leading-relaxed mb-8 max-w-2xl">
                    Our flagship program integrates rigorous mathematical logic with advanced competitive problem-solving. We don't just teach subjects; we build analytical mindsets.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Critical Thinking Units', 'Competitive Mock Series', 'Doubt Clearing Units', 'Personal Mentorship'].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-[#FFC107]" /> {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NEET ORIENTATION */}
            <div className="md:col-span-3 lg:col-span-4 bg-white/5 border border-white/10 p-10 rounded-[4rem] group hover:bg-white/10 transition-all">
              <Atom className="w-12 h-12 text-emerald-400 mb-8 group-hover:rotate-180 transition-transform duration-1000" />
              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">NEET Prep</h4>
              <p className="text-white/50 text-sm font-medium leading-relaxed">
                Dedicated orientation for medical aspirants with a focus on deep biological conceptualization and precision science.
              </p>
            </div>

            {/* DIGITAL LABS */}
            <div className="md:col-span-3 lg:col-span-4 bg-white/5 border border-white/10 p-10 rounded-[4rem] group hover:bg-white/10 transition-all">
              <Monitor className="w-12 h-12 text-blue-400 mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Digital Labs</h4>
              <p className="text-white/50 text-sm font-medium leading-relaxed">
                Advanced visual simulations making complex theories tangible through interactive VR and smart-board modules.
              </p>
            </div>

            {/* FUTURE SKILLS */}
            <div className="md:col-span-6 lg:col-span-8 bg-white p-12 rounded-[4rem] flex flex-col md:flex-row items-center gap-10 shadow-2xl">
              <div className="w-24 h-24 bg-[#0A4D2E]/5 rounded-[2.5rem] flex items-center justify-center shrink-0">
                <Cpu className="w-12 h-12 text-[#FFC107]" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#0A4D2E] mb-3 uppercase tracking-tight">Future-Ready Skills</h4>
                <p className="text-gray-500 text-base font-semibold leading-relaxed">
                  Integration of computational thinking and digital literacy into the core syllabus to ensure every student is ready for the 21st-century tech workforce.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ROYAL CTA SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-[5rem] p-16 text-center shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-[#0A4D2E] tracking-tighter uppercase leading-none">Secure the <br/>Future</h2>
          <p className="text-gray-500 text-lg font-semibold mb-12 max-w-2xl mx-auto leading-relaxed italic">
            "Enrollment is now active for the 2026-27 session. Give your child the advantage of a standardized, high-performance education."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="bg-[#0A4D2E] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all shadow-2xl shadow-[#0A4D2E]/20 active:scale-95">
              Begin Registration
            </button>
            <button className="bg-gray-100 text-[#0A4D2E] px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all active:scale-95">
              Contact Office
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AcademicsPage;