import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  BookOpen, 
  Users, 
  Trophy, 
  Heart,
  Plus,
  Minus
} from "lucide-react"; 
import logo from "../assets/logo.png"; 

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions 2026-27", href: "/admissions" },
    { name: "Contact", href: "/contact" },
    { name: "ERP Login", href: "https://educampus360.com/login" },
  ];

  const programs = [
    { name: "Academic Excellence", icon: <BookOpen size={16} />, color: "bg-green-600" },
    { name: "Holistic Development", icon: <Users size={16} />, color: "bg-orange-500" },
    { name: "Sports & Activities", icon: <Trophy size={16} />, color: "bg-pink-500" },
    { name: "Values & Ethics", icon: <Heart size={16} />, color: "bg-blue-500" },
  ];

  const socialLinks = [
    { 
      href: "https://www.facebook.com/p/Gnanodaya-high-school-madanapalli-100068130069750/", 
      icon: <FaFacebook size={20} />, 
      label: "Facebook" 
    },
    { 
      href: "https://www.instagram.com/gnanodaya_school?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
      icon: <FaInstagram size={20} />, 
      label: "Instagram" 
    },
    { 
      href: "https://youtube.com/@gnanodayaschoolmpl?si=ht9JfZ577UqiVQx6", 
      icon: <FaYoutube size={20} />, 
      label: "YouTube" 
    },
  ];

  return (
    <footer className="relative bg-[#0A4D2E] text-white mt-12 border-t-4 border-[#FFC107]">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform -translate-y-[98%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px]" fill="#0A4D2E">
          <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="w-20 h-20 bg-white rounded-2xl p-2 shadow-xl flex items-center justify-center border-2 border-[#FFC107]">
                <img src={logo} alt="Gnanodaya Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter text-[#FFC107]">Gnanodaya</h2>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80">Knowledge is power</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Empowering young minds with quality education and a vision for a better tomorrow in Madanapalle.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/5 hover:bg-[#FFC107] hover:text-[#0A4D2E] active:scale-95 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="border-b border-white/10 lg:border-0 pb-4 lg:pb-0">
            <button 
              onClick={() => toggleSection('links')}
              className="w-full flex items-center justify-between lg:hidden py-2"
            >
              <span className="text-[#FFC107] font-black uppercase tracking-widest text-sm">Quick Links</span>
              {openSection === 'links' ? <Minus size={18}/> : <Plus size={18}/>}
            </button>
            <h4 className="hidden lg:block text-[#FFC107] font-black mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            
            <ul className={`lg:block space-y-4 mt-4 lg:mt-0 ${openSection === 'links' ? 'block' : 'hidden'}`}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center gap-3 text-gray-300 hover:text-[#FFC107] transition-colors py-1">
                    <ChevronRight size={14} className="text-[#FFC107]" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Section */}
          <div className="border-b border-white/10 lg:border-0 pb-4 lg:pb-0">
            <button 
              onClick={() => toggleSection('focus')}
              className="w-full flex items-center justify-between lg:hidden py-2"
            >
              <span className="text-[#FFC107] font-black uppercase tracking-widest text-sm">Our Focus</span>
              {openSection === 'focus' ? <Minus size={18}/> : <Plus size={18}/>}
            </button>
            <h4 className="hidden lg:block text-[#FFC107] font-black mb-6 text-sm uppercase tracking-widest">Our Focus</h4>
            
            <div className={`lg:grid lg:grid-cols-1 gap-4 mt-4 lg:mt-0 ${openSection === 'focus' ? 'grid grid-cols-1' : 'hidden'}`}>
              {programs.map((item) => (
                <div key={item.name} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl lg:bg-transparent lg:p-0">
                  <div className={`${item.color} w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg text-white`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-200">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="pb-4 lg:pb-0">
            <button 
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between lg:hidden py-2"
            >
              <span className="text-[#FFC107] font-black uppercase tracking-widest text-sm">Contact Us</span>
              {openSection === 'contact' ? <Minus size={18}/> : <Plus size={18}/>}
            </button>
            <h4 className="hidden lg:block text-[#FFC107] font-black mb-6 text-sm uppercase tracking-widest">Contact Us</h4>
            
            <div className={`lg:block space-y-6 mt-6 lg:mt-0 ${openSection === 'contact' ? 'block' : 'hidden'}`}>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FFC107]" size={18} />
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  D.NO: 3/145-8-B-7-2, Prasanth Nagar,<br />Madanapalle – 517325
                </p>
              </div>
              <a href="tel:+919440893699" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FFC107]/20 transition-colors">
                  <Phone className="text-[#FFC107]" size={18} />
                </div>
                <span className="text-sm font-bold">+91 9440893699</span>
              </a>
              <a href="mailto:gnanodayaschool@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FFC107]/20 transition-colors">
                  <Mail className="text-[#FFC107]" size={18} />
                </div>
                <span className="text-sm font-bold break-all">gnanodayaschool@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em] leading-loose">
            © 2026 Gnanodaya English Medium High School.<br className="md:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;