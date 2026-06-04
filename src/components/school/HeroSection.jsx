"use client";

import React from "react";
import { motion } from "framer-motion";
import GalleryHero from "../galleryhero";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      aria-label="Gnanodaya School"
    >
      {/* ── BACKGROUND — entry zoom + slow Ken Burns loop ── */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="h-full w-full"
        >
          <GalleryHero />
        </motion.div>
      </motion.div>

      {/* ── OVERLAYS — light & clean, let the gallery breathe ── */}
      {/* Soft vignette edges */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Slim bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Slim top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── BRAND PILL — top centre ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        className="absolute top-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/15"
        aria-label="Gnanodaya School, established 1989"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107]" aria-hidden="true" />
        <p className="text-[10px] font-black uppercase tracking-[0.45em] text-white/90">
          Gnanodaya School
        </p>
        <span className="w-px h-3 bg-white/20" aria-hidden="true" />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFC107]/90">
          Est. 1989
        </p>
      </motion.div>

      {/* ── SCROLL INDICATOR — bottom centre ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        {/* Animated line */}
        <div className="w-px h-10 bg-white/20 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-[#FFC107] to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;