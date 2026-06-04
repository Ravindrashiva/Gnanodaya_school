"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Megaphone, ChevronDown } from "lucide-react";
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
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      submenu: [
        { name: "Curriculum", href: "/academics/curriculum" },
        { name: "Academic Calendar", href: "/academics/calendar" },
        { name: "Results & Achievements", href: "/academics/achievements" },
      ],
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
    /* Placeholder height: ticker(32px) + accent(2px) + nav(52px) = 86px desktop */
    <div className="relative w-full h-[86px] lg:h-[86px] z-[100]">
      <header className="fixed top-0 w-full z-[110] transition-all duration-300">

        {/* ── 1. TICKER ── */}
        <div className="bg-[#052c1e] flex items-center h-8 overflow-hidden">
          <div className="text-[#FFC107] px-3 lg:px-5 h-full flex items-center gap-1.5 shrink-0 border-r border-[#FFC107]/25">
            <Megaphone size={11} className="animate-pulse" />
            <span className="font-black text-[9px] lg:text-[10px] uppercase tracking-widest">Update:</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-12 text-[9px] lg:text-[10px] font-bold text-white py-2"
            >
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="flex items-center gap-3 uppercase tracking-wide">
                  {item} <span className="text-[#FFC107]">✦</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── 2. ACCENT LINE ── */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#052c1e] via-[#FFC107] to-[#052c1e]" />

        {/* ── 3. MAIN NAV — slimmed down ── */}
        <nav
          className={`bg-white/97 backdrop-blur-md transition-all duration-300 px-4 lg:px-10 ${
            isScrolled ? "py-1.5 shadow-xl" : "py-2 shadow-sm"
          }`}
        >
          <div className="max-w-[1600px] mx-auto flex justify-between items-center">

            {/* LOGO */}
            <a href="/" className="flex items-center gap-2 lg:gap-3 group">
              <div className="w-9 h-9 lg:w-11 lg:h-11 flex items-center justify-center bg-white rounded-full border border-slate-100 shadow-sm overflow-hidden shrink-0">
                <img
                  src={logo.src || logo}
                  alt="Gnanodaya Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <h1 className="text-[#052c1e] font-[900] text-[13px] lg:text-[18px] uppercase tracking-tighter">
                  Gnanodaya School
                </h1>
                <span className="text-slate-400 text-[7px] lg:text-[9px] font-bold uppercase tracking-[0.25em] mt-0.5">
                  Knowledge is power
                </span>
              </div>
            </a>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="relative px-2 py-3"
                    onMouseEnter={() => link.submenu && handleMouseEnter(link.name)}
                    onMouseLeave={() => link.submenu && handleMouseLeave()}
                  >
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-wide transition-colors ${
                        activeDropdown === link.name
                          ? "text-[#052c1e]"
                          : "text-slate-500 hover:text-[#052c1e]"
                      }`}
                    >
                      {link.name}
                      {link.submenu && (
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>

                    <AnimatePresence>
                      {link.submenu && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute top-[100%] left-0 w-60 bg-white shadow-2xl rounded-xl border-t-4 border-[#FFC107] overflow-hidden py-1.5 z-[150]"
                        >
                          {link.submenu.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              className="block px-5 py-2.5 text-[10px] font-bold text-slate-600 hover:bg-[#052c1e]/5 hover:text-[#052c1e] transition-all border-b border-slate-50 last:border-0 uppercase tracking-wide"
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

            {/* MOBILE: Apply + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="/admissions"
                className="bg-[#052c1e] text-[#FFC107] px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wide"
              >
                Apply
              </a>
              <button
                className="text-[#052c1e] p-1"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

        {/* ── MOBILE SIDEBAR ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-[210] flex flex-col shadow-2xl"
              >
                <div className="flex justify-between items-center px-5 py-4 border-b">
                  <span className="font-black text-[#052c1e] text-sm uppercase tracking-wider">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 bg-slate-100 rounded-full"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-3">
                  {navLinks.map((link) => (
                    <div key={link.name} className="mb-1.5">
                      <div
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
                          mobileSubmenuOpen === link.name
                            ? "bg-[#052c1e] text-white"
                            : "bg-slate-50 text-[#052c1e]"
                        }`}
                        onClick={() =>
                          link.submenu
                            ? setMobileSubmenuOpen(
                                mobileSubmenuOpen === link.name ? null : link.name
                              )
                            : setIsMobileMenuOpen(false)
                        }
                      >
                        <a href={link.href} className="text-[13px] font-black uppercase tracking-wide">
                          {link.name}
                        </a>
                        {link.submenu && (
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileSubmenuOpen === link.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>

                      <AnimatePresence>
                        {link.submenu && mobileSubmenuOpen === link.name && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="py-1 px-2">
                              {link.submenu.map((sub) => (
                                <a
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wide border-l-2 border-slate-200 ml-2 hover:text-[#052c1e]"
                                >
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

                <div className="p-4 border-t">
                  <a
                    href="/admissions"
                    className="block text-center bg-[#FFC107] text-[#052c1e] py-3.5 rounded-xl font-black uppercase text-sm tracking-widest shadow-lg shadow-[#FFC107]/20"
                  >
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