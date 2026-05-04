"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Megaphone } from "lucide-react";

// Importing your logo asset
import logo from "../assets/logo.png"; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tickerItems = [
    "ADMISSION 2026-27 — LKG TO CLASS 10 NOW OPEN",
    "SSC BOARD EXAM ORIENTATION FOR CLASS 10 PARENTS",
    "NEW STEM LAB FACILITIES NOW OPEN",
  ];

  // "Facilities" has been removed from this array
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "ERP Login", href: "/login" },
  ];

  return (
    <div className="relative w-full h-[115px] lg:h-[130px]"> 
      <header className="fixed top-0 w-full z-[100] transition-all duration-300">
        
        {/* 1. MAIN NAVIGATION */}
        <nav className={`bg-white transition-all duration-300 px-6 lg:px-12 ${isScrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'}`}>
          <div className="max-w-[1600px] mx-auto flex justify-between items-center">
            
            {/* LOGO & BRANDING AREA */}
            <a href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-white rounded-full p-0.5 shadow-sm border border-slate-200 overflow-hidden">
                 <img 
                   src={logo.src || logo} 
                   alt="Gnanodhaya Logo" 
                   className="w-full h-full object-contain p-1" 
                 />
              </div>

              <div className="flex flex-col">
                <h1 className="text-[#0A4D2E] font-[900] text-xl lg:text-[22px] leading-tight uppercase tracking-tight">
                  Gnanodaya
                </h1>
                <span className="text-slate-500 text-[11px] lg:text-[12px] font-bold leading-tight uppercase tracking-[0.1em]">
                English Medium High School
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8 text-[13px] font-bold text-[#334155]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-[#0A4D2E] transition-colors whitespace-nowrap">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-[#0A4D2E]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* 2. ACCENT BAR */}
        <div className="h-1 w-full bg-[#FFC107]"></div>

        {/* 3. NEWS TICKER */}
        <div className="bg-slate-50 flex items-center h-10 border-b border-slate-200">
          <div className="bg-[#0A4D2E] text-[#FFC107] px-6 h-full flex items-center gap-2">
             <Megaphone size={14} />
             <span className="font-black text-[10px] uppercase whitespace-nowrap tracking-wider">
               Latest News:
             </span>
          </div>

          <div className="flex-1 overflow-hidden relative bg-white h-full flex items-center">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-24 text-[12px] font-semibold text-[#0A4D2E]"
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="flex items-center gap-4 uppercase tracking-tight">
                   {item} <span className="text-[#FFC107] font-black">|</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-0 bg-[#0A4D2E] z-[110] flex flex-col p-10 lg:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-white font-black text-2xl uppercase italic">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white"><X size={32}/></button>
              </div>
              <div className="flex flex-col gap-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-white/80 text-3xl font-black uppercase hover:text-[#FFC107] transition-colors" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  ); 
}