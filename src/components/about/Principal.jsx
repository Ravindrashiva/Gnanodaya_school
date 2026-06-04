"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, GraduationCap, Award, BookOpen, Star, CheckCircle } from 'lucide-react';
// This refers to the uploaded image located in your assets folder
import principal from '../../assets/principal.png'; 

const achievements = [
  { icon: GraduationCap, label: 'M.Ed. in Educational Leadership', sub: 'University of Pune' },
  { icon: Award, label: 'Best Principal Award', sub: 'State Education Board' },
  { icon: BookOpen, label: '28+ Years in Education', sub: 'Legacy of Excellence' },
];

export default function PrincipalMessage() {
  return (
    <section id="principal" className="py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Branding */}
        <div className="mb-16">
          <h2 className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Leadership</h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#052c1e] uppercase tracking-tighter">
            The Voice of <span className="text-[#FFC107]">Wisdom</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar: Photo & Credentials */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Savannah Gold Frame */}
              <div className="absolute inset-0 bg-[#FFC107] rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              
              {/* Deep Forest Image Border */}
              <div className="relative z-10 bg-[#052c1e] p-1 rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src={principal.src || principal} // Updated to use your local import
                  alt="Principal Sri Kamakoti Prasadarao" 
                  className="w-full aspect-[4/5] object-cover rounded-[38px] transition-all duration-700"
                />
              </div>

              {/* Savannah Gold Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#FFC107] text-[#052c1e] p-4 rounded-2xl shadow-xl z-20">
                <Star className="w-6 h-6 fill-current animate-pulse" />
              </div>
            </div>

            {/* Credential Card */}
            <div className="bg-[#052c1e]/5 p-8 rounded-[40px] border border-[#052c1e]/10 space-y-4 backdrop-blur-sm">
              <h4 className="text-[#052c1e] font-black uppercase text-lg tracking-tight">SRI KAMAKOTI PRASADARAO</h4>
              <div className="h-1 w-12 bg-[#FFC107] rounded-full"></div>
              
              <div className="space-y-4 pt-2">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-[#052c1e] p-1.5 rounded-lg shadow-lg">
                       <a.icon className="w-3.5 h-3.5 text-[#FFC107]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase text-[#052c1e] leading-none">{a.label}</p>
                      <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Message Block */}
          <motion.div 
            className="lg:col-span-8 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="absolute -top-12 -left-8 w-32 h-32 text-[#FFC107] opacity-10" />
            
            <div className="bg-[#052c1e] p-10 md:p-16 rounded-[50px] shadow-[0_35px_60px_-15px_rgba(5,44,30,0.3)] relative z-10 border border-white/5">
              <h4 className="text-[#FFC107] text-2xl font-black uppercase tracking-tight mb-8 border-b border-white/10 pb-4">
                Dear Students, Parents, and Well-wishers,
              </h4>
              
              <div className="space-y-6 text-white/80 font-medium leading-relaxed md:text-lg">
                <p>
                  It is with great pride and immense joy that I welcome you to our school — an institution that has been 
                  a cornerstone of quality education in <span className="text-[#FFC107] font-bold">Madanapalle</span> for over 35 years.
                </p>
                
                <p className="italic border-l-4 border-[#FFC107] bg-white/5 p-6 rounded-r-2xl text-white font-semibold">
                  "Education is not merely the transfer of knowledge; it is the transformation of character."
                </p>

                <p>
                  Since 1989, we have remained steadfast in our commitment to nurturing not just academic excellence, 
                  but the complete development of every child who walks through our doors.
                </p>

                <p>
                  Together, let us build a future that our children — and we — can be truly proud of.
                </p>
              </div>

              {/* Signature Section */}
              <div className="mt-12 flex items-center gap-6">
                <div className="h-px flex-grow bg-white/10"></div>
                <div className="text-right">
                  <p className="text-[#FFC107] font-black uppercase tracking-widest text-lg">SRI KAMAKOTI PRASADARAO</p>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Principal & Director</p>
                </div>
              </div>
            </div>

            {/* Floating Info Badge */}
            <div className="absolute -bottom-8 right-12 hidden md:flex items-center gap-3 bg-white border border-gray-100 p-5 rounded-3xl shadow-2xl">
              <div className="bg-[#052c1e] p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-[#FFC107]" />
              </div>
              <p className="text-[11px] font-black text-[#052c1e] uppercase tracking-wider">Admissions Open 2026-27</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}