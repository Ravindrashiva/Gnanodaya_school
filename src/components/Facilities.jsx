"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const facilities = [
  {
    id: "01",
    title: "The Science Atrium",
    category: "RESEARCH",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086",
  },
  {
    id: "02",
    title: "Digital Tech Suites",
    category: "INNOVATION",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
  },
  {
    id: "03",
    title: "Grand Library",
    category: "KNOWLEDGE",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070",
  },
  {
    id: "04",
    title: "Olympic Arena",
    category: "ATHLETICS",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090",
  }
];

const FacilitiesPreview = () => {
  return (
    <div className="w-full bg-[#051124] py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {facilities.map((f, idx) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative h-[450px] overflow-hidden bg-black"
          >
            {/* Background Image - High Contrast */}
            <img
              src={f.image}
              alt={f.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-40"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="text-[#d4af37] font-mono text-xl tracking-tighter">
                  {f.id}
                </span>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-[#d4af37] w-5 h-5" />
                </div>
              </div>

              <div>
                <p className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-2">
                  {f.category}
                </p>
                <h3 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                  {f.title}
                </h3>
              </div>
            </div>

            {/* Hover Gold Overlay Border */}
            <div className="absolute inset-0 border-0 group-hover:border-[12px] border-[#d4af37]/20 transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <div className="mt-1 flex justify-center w-full">
        <button className="w-full py-10 bg-[#051124] border-t border-white/5 text-white/40 hover:text-[#d4af37] uppercase tracking-[1em] text-[10px] font-black transition-colors">
          Explore All Facilities
        </button>
      </div>
    </div>
  );
};

export default FacilitiesPreview;