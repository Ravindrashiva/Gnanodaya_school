import React from 'react';

const Statsbar = () => {
  const stats = [
    { label: "Years of Excellence", value: "25+" },
    { label: "Successful Alumni", value: "5000+" },
    { label: "Expert Faculty", value: "50+" },
    { label: "SSC Pass Rate", value: "100%" },
  ];

  return (
    <div className="relative w-full z-30 -mt-10 md:-mt-14 px-6">
      <div className="max-w-6xl mx-auto glass-card py-12 px-8 flex flex-wrap justify-around items-center gap-y-12 gap-x-6 border-t-2 border-t-[#d4af37]">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center group relative min-w-[150px]">
            {/* Stat Value */}
            <span className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-3 transition-all duration-500 group-hover:-translate-y-1">
              {stat.value}
            </span>
            
            {/* Stat Label */}
            <span className="text-[#001f3f] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-80 mb-4">
              {stat.label}
            </span>
            
            {/* THE UNDERLINES */}
            <div className="relative w-full h-[2px]">
              {/* 1. Permanent Light Base Line */}
              <div className="absolute inset-0 bg-[#001f3f]/10 w-full h-full" />
              
              {/* 2. Active Accent Line (Savannah Gold) */}
              <div className="absolute inset-0 bg-[#d4af37] w-1/3 h-full transition-all duration-700 group-hover:w-full" />
              
              {/* 3. Secondary Animated Line (Crimson Red) */}
              <div className="absolute inset-0 bg-[#dc143c] w-0 h-full transition-all duration-1000 delay-100 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statsbar;