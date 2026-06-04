"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ArrowUpRight, Sparkles, Images, LayoutGrid, Maximize2, Star, Eye } from "lucide-react";
import GallerySlider from "../components/GallerySlider";

// --- ASSET IMPORTS (Maintained) ---
import annualImg0 from "../assets/annual.png";
import annualImg1 from "../assets/annual1.png";
import annualImg2 from "../assets/annual2.png";
import annualImg3 from "../assets/annual3.png";
import annualImg4 from "../assets/annual4.png";
import annualImg5 from "../assets/annual5.png";
import NCCImg0 from "../assets/NCC.png";
import NCCImg1 from "../assets/NCC1.png";
import NCCImg2 from "../assets/NCC2.png";
import NCCImg3 from "../assets/NCC3.png";
import NCCImg4 from "../assets/NCC4.png";
import NCCImg5 from "../assets/NCC5.png";
import NCCImg6 from "../assets/NCC6.png";
import sportsImg0 from "../assets/Sports.png";
import sportsImg1 from "../assets/Sports1.png";
import sportsImg2 from "../assets/Sports2.png";
import sportsImg3 from "../assets/Sports3.png";
import sportsImg4 from "../assets/Sports4.png";
import sportsImg5 from "../assets/Sports5.png";
import campusImg0 from "../assets/Campus.png";
import campusImg1 from "../assets/Campus1.png";
import campusImg2 from "../assets/campus2.png";
import campusImg3 from "../assets/campus3.png";
import campusImg4 from "../assets/campus4.png";
import campusImg5 from "../assets/campus5.png";
import eventImg0 from "../assets/Event.png";
import eventImg1 from "../assets/Event1.png";
import eventImg2 from "../assets/Event2.png";
import eventImg3 from "../assets/Event3.png";
import eventImg4 from "../assets/Event4.png";
import tripImg0 from "../assets/Trip.png";
import tripImg1 from "../assets/Trip1.png";
import tripImg2 from "../assets/Trip2.png";
import highlight from "../assets/highlight.png";
import highlight1 from "../assets/highlight1.png";
import highlight2 from "../assets/highlight2.png";
import highlight3 from "../assets/highlight3.png";
import highlight4 from "../assets/highlight4.png";
import highlight5 from "../assets/highlight5.png";

// ─── DOT GRID DECORATION ──────────────────────────────────────────────────────
function DotGrid({ className = "", color = "#0A4D2E", opacity = 0.06, size = 22 }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 1.2px, transparent 1.2px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [activeFolder, setActiveFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const highlightImages = [highlight, highlight1, highlight2, highlight3, highlight4, highlight5];
  const categories = ["All", "Events", "Sports", "Infrastructure", "Trips"];

  const images = [
    { id: 1, title: "Annual Day 2025", category: "Events",         thumbnail: annualImg0,  album: [annualImg0,  annualImg1,  annualImg2,  annualImg3,  annualImg4,  annualImg5],                    span: "md:col-span-4 md:row-span-2", count: 12, year: "2025", tag: "Featured" },
    { id: 2, title: "NCC Excellence",  category: "Events",         thumbnail: NCCImg0,     album: [NCCImg0, NCCImg1, NCCImg2, NCCImg3, NCCImg4, NCCImg5, NCCImg6],                                  span: "md:col-span-2 md:row-span-1", count: 7,  year: "2024", tag: "Award" },
    { id: 3, title: "Sports Meet",     category: "Sports",         thumbnail: sportsImg0,  album: [sportsImg0, sportsImg1, sportsImg2, sportsImg3, sportsImg4, sportsImg5],                        span: "md:col-span-2 md:row-span-2", count: 6,  year: "2025", tag: "Champions" },
    { id: 4, title: "Modern Campus",   category: "Infrastructure", thumbnail: campusImg0,  album: [campusImg0, campusImg1, campusImg2, campusImg3, campusImg4, campusImg5],                        span: "md:col-span-4 md:row-span-1", count: 15, year: "2024", tag: "Campus" },
    { id: 5, title: "School Fest",     category: "Events",         thumbnail: eventImg0,   album: [eventImg0,  eventImg1,  eventImg2,  eventImg3,  eventImg4],                                    span: "md:col-span-2 md:row-span-1", count: 5,  year: "2025", tag: "Culture" },
    { id: 6, title: "Study Trips",     category: "Trips",          thumbnail: tripImg0,    album: [tripImg0,   tripImg1,   tripImg2],                                                              span: "md:col-span-2 md:row-span-1", count: 3,  year: "2024", tag: "Explore" },
  ];

  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.97 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 22 } }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A4D2E] font-sans antialiased overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {!activeFolder && (
        <section className="relative pt-28 pb-10 px-4 sm:px-6 overflow-hidden">
          {/* Ambient blobs */}
          <div aria-hidden className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC107]/8 rounded-full blur-[140px] -mr-72 -mt-72 pointer-events-none" />
          <div aria-hidden className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A4D2E]/5 rounded-full blur-[100px] pointer-events-none" />
          <DotGrid className="inset-0" opacity={0.04} size={28} />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.div initial={{ width: 0 }} animate={{ width: 44 }} transition={{ duration: 0.9, delay: 0.2 }} className="h-[3px] bg-[#FFC107] rounded-full" />
              <span className="text-[#0A4D2E] font-black tracking-[0.4em] text-[10px] sm:text-[11px] uppercase">The Gnanodaya Legacy</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[3.8rem] sm:text-[5rem] md:text-[7rem] font-black text-[#0A4D2E] leading-[0.85] tracking-tighter uppercase mb-6"
            >
              Visual{" "}
              <span className="relative inline-block">
                <span className="text-[#FFC107]">Archives</span>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#FFC107] rounded-full origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-slate-400 text-sm sm:text-base max-w-md mb-10 leading-relaxed"
            >
              Moments, milestones, and memories from Gnanodaya School — Madanapalle's finest CBSE institution.
            </motion.p>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {[
                { icon: "🖼️", value: "6", label: "Collections" },
                { icon: "📸", value: "48+", label: "Photographs" },
                { icon: "🏆", value: "35+", label: "Years of Memories" },
              ].map(({ icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-white border border-slate-100 shadow-sm rounded-2xl px-4 py-2.5">
                  <span className="text-base" aria-hidden>{icon}</span>
                  <div>
                    <p className="text-[#0A4D2E] font-black text-sm leading-none">{value}</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Featured Highlights slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#FFC107] flex items-center justify-center">
                  <Star size={14} className="text-[#0A4D2E]" fill="#0A4D2E" />
                </div>
                <h2 className="text-base font-black uppercase tracking-widest text-[#0A4D2E]">Featured Highlights</h2>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-10px_rgba(10,77,46,0.18)] border-4 border-white ring-1 ring-slate-100 transition-all duration-500 hover:shadow-[0_40px_100px_-10px_rgba(255,193,7,0.18)]">
                <GallerySlider images={highlightImages} />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FOLDER BREADCRUMB ────────────────────────────────────────────────── */}
      {activeFolder && (
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-28 pb-4 px-4 sm:px-6 max-w-7xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => setActiveFolder(null)}
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-[#0A4D2E] transition-colors"
            >
              <ChevronLeft size={14} strokeWidth={3} /> All Collections
            </button>
            <span className="text-slate-200">/</span>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#0A4D2E]">{activeFolder.title}</span>
          </div>
          <div className="flex items-end gap-4">
            <h2 className="text-4xl sm:text-6xl font-black text-[#0A4D2E] uppercase tracking-tighter leading-none">{activeFolder.title}</h2>
            <span className="mb-1 text-[#FFC107] font-black text-sm uppercase tracking-widest">{activeFolder.count} Photos · {activeFolder.year}</span>
          </div>
        </motion.section>
      )}

      {/* ── FILTER NAV ───────────────────────────────────────────────────────── */}
      <nav className="sticky top-4 z-50 px-4 sm:px-6 mt-8 mb-10">
        <motion.div
          layout
          className="max-w-fit mx-auto bg-white/85 backdrop-blur-xl border border-slate-200/60 p-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.07)] flex items-center gap-1"
        >
          {!activeFolder ? (
            categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-full
                  ${filter === cat
                    ? "bg-[#0A4D2E] text-[#FFC107] shadow-lg shadow-[#0A4D2E]/20"
                    : "text-slate-400 hover:text-[#0A4D2E] hover:bg-slate-50"
                  }`}
              >
                {cat}
              </button>
            ))
          ) : (
            <button
              onClick={() => setActiveFolder(null)}
              className="flex items-center gap-2.5 text-[#0A4D2E] px-6 py-2.5 text-[10px] font-black uppercase tracking-widest bg-slate-50 rounded-full hover:bg-[#0A4D2E] hover:text-[#FFC107] transition-all"
            >
              <ChevronLeft size={14} strokeWidth={3} /> Return to Collections
            </button>
          )}
        </motion.div>
      </nav>

      {/* ── BENTO GRID ───────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[280px] sm:auto-rows-[320px]"
        >
          <AnimatePresence mode="popLayout">
            {activeFolder ? (
              // ── ALBUM VIEW ──
              activeFolder.album.map((url, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="md:col-span-2 rounded-[2rem] overflow-hidden cursor-zoom-in border-4 border-white shadow-xl relative group"
                  onClick={() => setSelectedImage(url)}
                >
                  <img
                    src={typeof url === "object" ? url.src || url : url}
                    alt={`${activeFolder.title} photo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D2E]/80 via-[#0A4D2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest opacity-70">Photo {i + 1}</span>
                      <div className="w-10 h-10 rounded-full bg-[#FFC107] flex items-center justify-center text-[#0A4D2E] shadow-lg">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              // ── COLLECTION GRID ──
              filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  variants={itemVariants}
                  layout
                  onClick={() => setActiveFolder(img)}
                  onMouseEnter={() => setHoveredId(img.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ y: -8 }}
                  className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer border-4 border-white bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(10,77,46,0.22)] ${img.span}`}
                >
                  {/* Image */}
                  <img
                    src={typeof img.thumbnail === "object" ? img.thumbnail.src || img.thumbnail : img.thumbnail}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D2E]/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Top badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    {/* Tag pill */}
                    <span className="px-3 py-1.5 bg-[#FFC107] text-[#0A4D2E] text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {img.tag}
                    </span>
                    {/* Photo count */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[9px] font-black">
                      <Images size={11} />
                      {img.count} Photos
                    </div>
                  </div>

                  {/* Bottom label — slides up on hover */}
                  <div className="absolute inset-x-5 bottom-5 p-5 bg-white/95 backdrop-blur-xl rounded-[1.8rem] border border-slate-100 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex justify-between items-center shadow-2xl">
                    <div>
                      <p className="text-[#FFC107] text-[9px] font-black uppercase tracking-[0.2em] mb-0.5">{img.category} · {img.year}</p>
                      <h3 className="text-lg sm:text-xl font-black text-[#0A4D2E] tracking-tighter leading-tight">{img.title}</h3>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[#0A4D2E] flex items-center justify-center text-[#FFC107] shadow-lg shadow-[#0A4D2E]/20 shrink-0">
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Always-visible title strip (no hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">{img.category}</p>
                    <h3 className="text-white text-lg font-black uppercase tracking-tight leading-none">{img.title}</h3>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {!activeFolder && filteredImages.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <span className="text-5xl mb-4 block">📂</span>
            <p className="text-slate-400 font-black uppercase tracking-widest text-sm">No collections in this category yet</p>
          </motion.div>
        )}
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A4D2E]/96 backdrop-blur-2xl p-6"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} strokeWidth={2} />
            </motion.button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              src={typeof selectedImage === "object" ? selectedImage.src || selectedImage : selectedImage}
              className="max-h-[88vh] max-w-[90vw] rounded-3xl shadow-[0_60px_120px_rgba(0,0,0,0.6)] object-contain border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Hint */}
            <p className="absolute bottom-8 text-white/30 text-[10px] font-black uppercase tracking-widest">Click anywhere to close</p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;