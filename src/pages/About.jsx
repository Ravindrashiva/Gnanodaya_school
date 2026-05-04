"use client";
import { motion } from 'framer-motion';
import { school } from '../data/siteContent.js';
import { 
  Target, Rocket, Award, Users, BookOpen, ShieldCheck, 
  Lightbulb, Microscope, Music, Heart, Globe, CheckCircle2,
  ChevronRight
} from 'lucide-react';

function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "25+", icon: <Award className="w-8 h-8 text-[#FFC107]" /> },
    { label: "Qualified Teachers", value: "40+", icon: <Users className="w-8 h-8 text-[#FFC107]" /> },
    { label: "Students Enrolled", value: "800+", icon: <BookOpen className="w-8 h-8 text-[#FFC107]" /> },
    { label: "Safety Rating", value: "100%", icon: <ShieldCheck className="w-8 h-8 text-[#FFC107]" /> },
  ];

  const pillars = [
    { title: "IIT-Foundation", desc: "Rigorous analytical training starting from Class 6 to ensure competitive edge.", icon: <Lightbulb className="w-10 h-10" /> },
    { title: "STEM Excellence", icon: <Microscope className="w-10 h-10" />, desc: "Hands-on laboratory sessions in Physics, Chemistry, and Biology." },
    { title: "Cultural Heritage", icon: <Music className="w-10 h-10" />, desc: "Deeply rooted in Indian traditions through music, dance, and arts." },
  ];

  return (
    <main className="min-h-screen pt-20 bg-[#fcfcfc] font-sans">
      
      {/* 1. ROYAL HERO SECTION */}
      <section className="relative bg-[#0A4D2E] py-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FFC107] opacity-10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-[#FFC107]/20 text-[#FFC107] px-4 py-1.5 rounded-full font-black tracking-[0.2em] text-[10px] uppercase mb-6 border border-[#FFC107]/30">
              Established 2001 • Madanapalle
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              OUR <span className="text-[#FFC107]">LEGACY</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
              Crafting a future-ready generation through a unique blend of heritage, discipline, and modern technological excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BENTO STATS SECTION */}
      <section className="relative -mt-12 z-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center group hover:bg-[#0A4D2E] transition-all duration-500"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-[#0A4D2E] group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-hover:text-[#FFC107] mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE STORY (Bento Layout) */}
      <section className="py-32 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Main Text Area */}
            <motion.div 
              className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            >
              <h2 className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[11px] mb-6">Our Journey</h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#0A4D2E] mb-8 leading-[1.1] uppercase tracking-tighter">
                Nurturing Excellence <br/>Since Day One
              </h3>
              <div className="space-y-6 text-gray-600 text-lg font-medium leading-relaxed">
                <p className="italic border-l-4 border-[#FFC107] pl-6 text-[#0A4D2E]">
                  "Founded with a vision to provide quality education in Madanapalle, we have evolved into a cornerstone of academic excellence."
                </p>
                <p>{school.about.description}</p>
              </div>
              <div className="mt-10 flex items-center gap-4 p-5 bg-[#0A4D2E]/5 rounded-2xl border border-[#0A4D2E]/10">
                <CheckCircle2 className="text-[#0A4D2E]" />
                <p className="text-[13px] font-black text-[#0A4D2E] uppercase tracking-wide">Government Recognized Educational Institution</p>
              </div>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <motion.div whileHover={{ y: -5 }} className="bg-[#0A4D2E] p-10 rounded-[40px] text-white relative overflow-hidden h-full flex flex-col justify-center">
                <Target className="absolute right-[-10px] bottom-[-10px] w-32 h-32 opacity-10 text-[#FFC107]" />
                <div className="bg-[#FFC107] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-[#0A4D2E] w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Vision</h4>
                <p className="text-white/70 font-medium leading-relaxed">To be the leading educational institution in Madanapalle, recognized for academic excellence and character development.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="bg-[#FFC107] p-10 rounded-[40px] text-[#0A4D2E] relative overflow-hidden h-full flex flex-col justify-center">
                <Rocket className="absolute right-[-10px] bottom-[-10px] w-32 h-32 opacity-10" />
                <div className="bg-[#0A4D2E] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="text-[#FFC107] w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Mission</h4>
                <p className="text-[#0A4D2E]/80 font-medium leading-relaxed">{school.about.mission}</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ACADEMIC PILLARS (SAVANNAH GOLD STRIP) */}
      <section className="py-24 bg-[#0A4D2E] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[#FFC107] font-black uppercase tracking-widest text-[11px] mb-4">Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">The Academic <span className="text-[#FFC107]">Pillars</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div key={i} className="group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white hover:text-[#0A4D2E] transition-all duration-500">
                <div className="text-[#FFC107] mb-8 group-hover:text-[#0A4D2E] transition-colors">{p.icon}</div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{p.title}</h4>
                <p className="text-white/60 group-hover:text-[#0A4D2E]/70 font-medium leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHAIRMAN'S SIGNATURE MESSAGE */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 relative">
              <div className="absolute inset-0 bg-[#FFC107] rounded-[40px] rotate-6"></div>
              <img 
                src={school.mentors[0].image} 
                alt={school.mentors[0].name} 
                className="relative z-10 w-full rounded-[40px] shadow-2xl border-4 border-white object-cover aspect-[4/5]" 
              />
            </div>
            <div className="md:col-span-8">
              <span className="text-7xl text-[#FFC107] font-serif leading-none opacity-40">“</span>
              <h2 className="text-4xl font-black text-[#0A4D2E] mb-2 uppercase tracking-tighter">{school.mentors[0].name}</h2>
              <p className="text-[#FFC107] font-black tracking-widest text-[11px] mb-8 uppercase px-3 py-1 bg-[#0A4D2E] inline-block rounded-md">{school.mentors[0].role}</p>
              <blockquote className="text-2xl md:text-3xl text-[#0A4D2E]/80 font-bold italic leading-tight mb-10">
                "{school.mentors[0].quote}"
              </blockquote>
              <div className="h-1.5 w-24 bg-[#FFC107] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY STRIP (Bento Style) */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#FFC107] p-12 rounded-[50px] text-[#0A4D2E] flex flex-col justify-between">
            <div>
              <Globe className="w-12 h-12 mb-8 opacity-40" />
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">Beyond the Classroom</h3>
              <p className="text-xl font-bold leading-relaxed max-w-2xl">
                Education is a journey of self-discovery. From district sports championships to eco-awareness drives, our students lead with empathy and action.
              </p>
            </div>
            <button className="mt-12 flex items-center gap-3 font-black uppercase text-[12px] tracking-widest group">
              View School Activities <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="bg-[#0A4D2E] p-12 rounded-[50px] text-white flex flex-col items-center justify-center text-center">
            <Heart className="text-[#FFC107] w-12 h-12 mb-8 animate-pulse" />
            <h4 className="text-2xl font-black uppercase mb-4 tracking-tight">Parent Portal</h4>
            <p className="text-white/60 text-sm font-medium leading-relaxed">Active communication through monthly meetings and 24/7 digital progress tracking.</p>
          </div>
        </div>
      </section>

      {/* 7. SEO FOOTER TAGS */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {["State Board", "IIT-Foundation", "LKG to 10th", "Best School Madanapalle", "STEM Education", "Experienced Faculty", "Safe Campus"].map((tag) => (
              <span key={tag} className="px-5 py-2 bg-gray-50 text-[#0A4D2E] rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100 hover:border-[#FFC107] transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;