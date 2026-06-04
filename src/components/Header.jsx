"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Megaphone, ChevronDown, ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tickerItems = [
    "ADMISSION 2026-27 — LKG TO CLASS 10 NOW OPEN",
    "SSC BOARD EXAM ORIENTATION",
    "NEW STEM LAB FACILITIES NOW OPEN",
    "IIT-JEE FOUNDATION BATCHES STARTING SOON",
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "About Us", 
      href: "/about",
      submenu: [
        { name: "Our History", href: "/about/history" },
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Principal's Message", href: "/about/principal" },
        { name: "Infrastructure", href: "/about/infrastructure" },
      ]
    },
    { 
      name: "Academics", 
      href: "/academics",
      submenu: [
        { name: "Curriculum", href: "/academics/curriculum" },
        { name: "Academic Calendar", href: "/academics/calendar" },
        { name: "Results & Achievements", href: "/academics/achievements" },
      ]
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "ERP Login", href: "https://educampus360.com/login", isExternal: true },
  ];

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <div className="relative w-full h-[95px] lg:h-[140px] z-[100]">
      <header className="fixed top-0 w-full z-[110] transition-all duration-300">
        
        {/* 1. MAIN NAVIGATION */}
        <nav className={`bg-white/95 backdrop-blur-md transition-all duration-300 px-4 lg:px-12 ${isScrolled ? 'py-2 shadow-xl' : 'py-3 lg:py-4 shadow-sm'}`}>
          <div className="max-w-[1600px] mx-auto flex justify-between items-center">
            
            {/* LOGO */}
            <a href="/" className="flex items-center gap-2 lg:gap-4 group">
              <div className="relative w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center bg-white rounded-full p-0.5 shadow-sm border border-slate-100 overflow-hidden">
                <img src={logo.src || logo} alt="Gnanodaya Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#052c1e] font-[900] text-base lg:text-[24px] leading-tight uppercase tracking-tighter">
                  Gnanodaya <span className="hidden xs:inline">School</span>
                </h1>
                <span className="text-slate-500 text-[8px] lg:text-[12px] font-bold leading-tight uppercase tracking-widest">
                  Knowledge is power
                </span>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li 
                    key={link.name} 
                    className="relative group px-2 py-4" /* Vertical padding creates a mouse "bridge" */
                    onMouseEnter={() => link.submenu && handleMouseEnter(link.name)}
                    onMouseLeave={() => link.submenu && handleMouseLeave()}
                  >
                    <a 
                      href={link.href} 
                      className={`flex items-center gap-1 text-[12px] font-black uppercase tracking-wide transition-colors ${
                        activeDropdown === link.name ? 'text-[#052c1e]' : 'text-slate-600 hover:text-[#052c1e]'
                      }`}
                    >
                      {link.name}
                      {link.submenu && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                    </a>

                    <AnimatePresence>
                      {link.submenu && activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-[100%] left-0 w-64 bg-white shadow-2xl rounded-xl border-t-4 border-[#FFC107] overflow-hidden py-2 z-[150]"
                        >
                          {link.submenu.map((sub) => (
                            <a 
                              key={sub.name}
                              href={sub.href}
                              className="block px-6 py-3 text-[11px] font-bold text-slate-600 hover:bg-[#052c1e]/5 hover:text-[#052c1e] transition-all border-b border-slate-50 last:border-0 uppercase"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            {/* MOBILE TOGGLE & QUICK ACTION */}
            <div className="flex items-center gap-3 lg:hidden">
                <a href="/admissions" className="bg-[#052c1e] text-[#FFC107] px-4 py-2 rounded-lg text-[10px] font-black uppercase">Apply</a>
                <button className="text-[#052c1e]" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu size={28} />
                </button>
            </div>
          </div>
        </nav>

        {/* 2. ACCENT LINE */}
        <div className="h-[2px] lg:h-[3px] w-full bg-gradient-to-r from-[#052c1e] via-[#FFC107] to-[#052c1e]"></div>

        {/* 3. TICKER */}
        <div className="bg-white flex items-center h-8 lg:h-10 border-b border-slate-200 overflow-hidden">
          <div className="bg-[#052c1e] text-[#FFC107] px-4 lg:px-6 h-full flex items-center gap-2 z-20">
              <Megaphone size={12} className="animate-pulse" />
              <span className="font-black text-[9px] lg:text-[10px] uppercase">Update:</span>
          </div>
          <div className="flex-1 overflow-hidden relative bg-slate-50/50">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-12 text-[9px] lg:text-[10px] font-bold text-[#052c1e] py-2"
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="flex items-center gap-3 uppercase">
                   {item} <span className="text-[#FFC107]">✦</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
              />
              <motion.div 
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-[210] flex flex-col shadow-2xl"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <span className="font-black text-[#052c1e] uppercase">Navigation</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                    <X size={20}/>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="mb-2">
                      <div 
                        className={`flex items-center justify-between p-4 rounded-xl transition-all ${mobileSubmenuOpen === link.name ? 'bg-[#052c1e] text-white' : 'bg-slate-50 text-[#052c1e]'}`}
                        onClick={() => link.submenu ? setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name) : setIsMobileMenuOpen(false)}
                      >
                        <a href={link.href} className="text-sm font-black uppercase">{link.name}</a>
                        {link.submenu && <ChevronDown size={18} className={mobileSubmenuOpen === link.name ? "rotate-180" : ""} />}
                      </div>
                      
                      <AnimatePresence>
                        {link.submenu && mobileSubmenuOpen === link.name && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="grid grid-cols-1 gap-1 p-2">
                              {link.submenu.map(sub => (
                                <a key={sub.name} href={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="p-3 text-[11px] font-bold text-slate-500 uppercase pl-6 border-l-2 border-slate-200">
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t">
                    <a href="/admissions" className="block text-center bg-[#FFC107] text-[#052c1e] py-4 rounded-xl font-black uppercase text-sm shadow-lg shadow-[#FFC107]/20">
                      Enroll Now
                    </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  ); 
}