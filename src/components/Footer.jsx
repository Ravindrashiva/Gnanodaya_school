import React from 'react';
import * as Icons from "lucide-react";
// Asset path for your school logo
import logo from "../assets/logo.png"; 

const Footer = () => {
  // Destructuring with fallbacks to prevent "export not found" crashes
  const { 
    Facebook, Instagram, Youtube, Linkedin, 
    MapPin, Phone, Mail, Globe, 
    ChevronRight, BookOpen, Users, Trophy, Heart 
  } = Icons;

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions 2026-27", href: "/admissions" }, //
    { name: "Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  const programs = [
    { name: "Academic Excellence", icon: BookOpen ? <BookOpen size={18} /> : null, color: "bg-green-600" },
    { name: "Holistic Development", icon: Users ? <Users size={18} /> : null, color: "bg-orange-500" },
    { name: "Sports & Activities", icon: Trophy ? <Trophy size={18} /> : null, color: "bg-pink-500" },
    { name: "Values & Ethics", icon: Heart ? <Heart size={18} /> : null, color: "bg-blue-500" },
  ];

  return (
    <footer className="relative bg-[#0A4D2E] text-white mt-20 border-t-4 border-[#FFC107]">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform -translate-y-[98%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]" fill="#0A4D2E">
          <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          
          {/* Column 1: Branding & Socials - Savannah Gold accents */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full p-1 shadow-2xl flex items-center justify-center overflow-hidden border-2 border-[#FFC107]">
                <img src={logo} alt="Gnanodhaya Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-black uppercase tracking-tighter leading-tight">Gnanodhaya</h2>
                <span className="text-[#FFC107] text-[10px] font-black tracking-[0.2em] uppercase">Public School</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering young minds with quality education and a vision for a better tomorrow in Madanapalle.
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FFC107]">Follow Us</span>
              <div className="flex gap-3">
                {Facebook && <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all"><Facebook size={16} /></a>}
                {Instagram && <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all"><Instagram size={16} /></a>}
                {Youtube && <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all"><Youtube size={16} /></a>}
                {Linkedin && <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all"><Linkedin size={16} /></a>}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-6 border-l border-white/10 hidden md:block">
            <h4 className="text-[#FFC107] font-black mb-7 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group">
                    {ChevronRight && <ChevronRight size={14} className="text-[#FFC107] group-hover:translate-x-1 transition-transform" />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Focus */}
          <div className="lg:pl-6 border-l border-white/10">
            <h4 className="text-[#FFC107] font-black mb-7 text-sm uppercase tracking-widest">Our Programs</h4>
            <div className="space-y-4">
              {programs.map((item) => (
                <div key={item.name} className="flex items-center gap-3 group cursor-default">
                  <div className={`${item.color} w-8 h-8 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-200">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact - Madanapalle Location */}
          <div className="lg:pl-6 border-l border-white/10">
            <h4 className="text-[#FFC107] font-black mb-7 text-sm uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                {MapPin && <MapPin className="text-[#FFC107] shrink-0" size={18} />}
                <p className="text-xs text-gray-300 leading-snug">
                  Bypass Road, Madanapalle,<br />Annamayya Dist - 517325
                </p>
              </div>
              <div className="flex items-center gap-3">
                {Phone && <Phone className="text-[#FFC107] shrink-0" size={18} />}
                <a href="tel:+919876543210" className="text-xs text-gray-300 hover:text-white">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                {Mail && <Mail className="text-[#FFC107] shrink-0" size={18} />}
                <a href="mailto:info@gnanodhaya.in" className="text-xs text-gray-300 hover:text-white">info@gnanodhaya.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
            © 2026 Gnanodhaya Public School. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 opacity-50">
             <div className="w-8 h-[1px] bg-[#FFC107]"></div>
             <span className="text-[9px] text-[#FFC107] font-black uppercase tracking-[0.2em]">Shaping Minds • Building Futures</span>
             <div className="w-8 h-[1px] bg-[#FFC107]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;