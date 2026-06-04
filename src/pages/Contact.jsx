"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowUpRight } from 'lucide-react';
import { school } from '../data/siteContent.js';

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Gnanodaya School",
  "url": "https://gnanodayaschool.in/contact",
  "description": "Contact Gnanodaya School in Madanapalle, Annamayya District for admissions enquiries, fee details, and campus visit.",
  "mainEntity": {
    "@type": "School",
    "name": "Gnanodaya School",
    "telephone": "+91-9440893699",
    "email": "gnanodayaschool@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D.NO: 3/145-8-B-7-2, Prasanth Nagar",
      "addressLocality": "Madanapalle",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "517325",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 08:00-17:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.5500",
      "longitude": "78.5000"
    }
  }
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gnanodayaschool.in/" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://gnanodayaschool.in/contact" }
  ]
};

function Contact() {
  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-[#0A4D2E] selection:text-white" id="main-content" role="main">

        {/* ── 1. HERO ── */}
        <section className="bg-[#0A4D2E] py-16 md:py-24 px-6 border-b-[8px] md:border-b-[12px] border-[#FFC107] relative overflow-hidden" aria-labelledby="contact-heading">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none hidden sm:block" aria-hidden="true">
            <span className="text-[10rem] md:text-[15rem] font-black text-white">CONNECT</span>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div initial="hidden" animate="visible" variants={revealVariants} className="space-y-4 text-center md:text-left">
              <h1 id="contact-heading" className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                Contact <span className="text-[#FFC107]">Us</span>
              </h1>
              <p className="text-green-100/60 text-base md:text-lg max-w-xl font-medium mx-auto md:ml-0">
                Reach Gnanodaya School's admissions office in Madanapalle, Annamayya District.
                We're here to answer all your questions Monday to Saturday.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 2. BREADCRUMB ── */}
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-slate-400">
            <li><a href="/" className="hover:text-[#0A4D2E] transition-colors">Home</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-[#0A4D2E] font-medium" aria-current="page">Contact</li>
          </ol>
        </nav>

        {/* ── 3. CONTACT CARDS ── */}
        <section className="py-12 md:py-20 px-6" aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading" className="sr-only">Contact details for Gnanodaya School, Madanapalle</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Phone */}
            <motion.div variants={revealVariants} className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] border-t-4 border-t-[#0A4D2E] hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 bg-[#0A4D2E]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0A4D2E]" aria-hidden="true">
                <Phone size={20} />
              </div>
              <span className="text-[10px] font-black text-[#FFC107] uppercase tracking-[0.3em]">Call Us</span>
              <h3 className="text-xl md:text-2xl font-black text-[#0A4D2E] mt-2 mb-4 tracking-tight">
                <a href={`tel:${school.contact.phone}`} className="hover:text-[#FFC107] transition-colors" aria-label={`Call Gnanodaya School at ${school.contact.phone}`}>
                  {school.contact.phone}
                </a>
              </h3>
              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <Clock size={12} aria-hidden="true" /> Mon — Sat: 9AM – 5PM
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={revealVariants} className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] border-t-4 border-t-[#0A4D2E] hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 bg-[#0A4D2E]/5 rounded-2xl flex items-center justify-center mb-6 text-[#0A4D2E]" aria-hidden="true">
                <Mail size={20} />
              </div>
              <span className="text-[10px] font-black text-[#FFC107] uppercase tracking-[0.3em]">Email Us</span>
              <h3 className="text-lg md:text-xl font-black text-[#0A4D2E] mt-2 mb-4 break-all tracking-tight">
                <a href={`mailto:${school.contact.email}`} className="hover:text-[#FFC107] transition-colors" aria-label={`Email Gnanodaya School at ${school.contact.email}`}>
                  {school.contact.email}
                </a>
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Response within 24 hours</p>
            </motion.div>

            {/* Address — UPDATED */}
            <motion.div variants={revealVariants} className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] border-t-4 border-t-[#FFC107] hover:shadow-2xl transition-all duration-500">
              <div className="w-12 h-12 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-6 text-[#FFC107]" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <span className="text-[10px] font-black text-[#FFC107] uppercase tracking-[0.3em]">Visit Us</span>
              <h3 className="text-base md:text-lg font-black text-[#0A4D2E] mt-2 mb-2 leading-tight tracking-tight">
                Gnanodaya School, Madanapalle,<br />Andhra Pradesh, India
              </h3>
              <address className="not-italic text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                D.NO: 3/145-8-B-7-2, Prasanth Nagar,<br />
                Madanapalle – 517325
              </address>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 4. ACTION SECTION ── */}
        <section className="py-12 md:py-16 px-6 bg-white border-y border-slate-100" aria-labelledby="cta-contact-heading">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
            <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center lg:text-left">
              <h2 id="cta-contact-heading" className="text-3xl md:text-5xl font-black text-[#0A4D2E] tracking-tighter uppercase leading-none">
                Start the <span className="text-[#FFC107]">Conversation</span>
              </h2>
              <p className="text-slate-400 mt-3 text-sm max-w-md">
                Enquire about admissions, fee structure, or schedule a campus visit at Gnanodaya School, Madanapalle.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="https://wa.me/919440893699"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-black uppercase tracking-widest text-[10px] md:text-xs rounded-2xl hover:shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all w-full sm:w-auto"
                aria-label="WhatsApp Gnanodaya School admissions team"
              >
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href={`tel:${school.contact.phone}`}
                className="group flex items-center justify-center gap-3 px-8 py-5 bg-[#0A4D2E] text-white font-black uppercase tracking-widest text-[10px] md:text-xs rounded-2xl hover:shadow-[0_20px_40px_rgba(10,77,46,0.3)] transition-all w-full sm:w-auto"
                aria-label="Call Gnanodaya School directly"
              >
                <Phone size={18} aria-hidden="true" /> Call Direct
              </a>
            </div>
          </div>
        </section>

        {/* ── 5. MAP ── */}
        <section className="relative h-[350px] md:h-[500px] w-full bg-slate-100 overflow-hidden" aria-label="Gnanodaya School location map, Madanapalle, Andhra Pradesh">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.580949419576!2d78.50317327795962!3d13.561278897232027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb26673e20d21f3%3A0xb73a50d964980b7!2sGnanodaya%20school!5e0!3m2!1sen!2sin!4v1778215701288!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            title="Gnanodaya School location on Google Maps – Madanapalle, Annamayya District, Andhra Pradesh"
          />
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-8 md:left-8 bg-[#0A4D2E] text-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl block max-w-sm border-b-4 md:border-b-8 border-[#FFC107]">
            <h4 className="font-black uppercase tracking-widest text-[10px] text-[#FFC107] mb-2">Campus Location</h4>
            <p className="text-xs md:text-sm font-medium leading-relaxed opacity-80">
              Gnanodaya School, Madanapalle<br />
              Annamayya District, Andhra Pradesh
            </p>
            <a
              href="https://maps.google.com/?q=Gnanodaya+School+Madanapalle"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 inline-flex items-center gap-1 text-[#FFC107] text-[10px] font-black uppercase tracking-widest hover:opacity-70 transition-opacity"
              aria-label="Open Gnanodaya School location in Google Maps"
            >
              Open in Maps <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ── 6. ADMISSION QUICK INFO ── */}
        <section className="py-16 px-6 max-w-7xl mx-auto" aria-labelledby="admission-info-heading">
          <h2 id="admission-info-heading" className="text-3xl font-black text-[#0A4D2E] tracking-tighter uppercase mb-8 text-center">
            Admission <span className="text-[#FFC107]">Information</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Academic Session", detail: "June 2026 – March 2027", icon: "📅" },
              { title: "Grades Offered",   detail: "KG to 10th Standard (CBSE)", icon: "🎓" },
              { title: "Admission Enquiry", detail: "Visit school Mon–Sat, 9AM to 5PM", icon: "🏫" },
            ].map(({ title, detail, icon }) => (
              <div key={title} className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="text-[#0A4D2E] font-black uppercase text-sm tracking-widest mt-4 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

export default Contact;