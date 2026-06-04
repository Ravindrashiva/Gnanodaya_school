"use client";

import React from "react";
import GalleryHero from "../galleryhero";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "500px" }}
      aria-label="Gnanodaya School Hero"
    >
      {/* ── FULL-SCREEN SLIDESHOW ── */}
      <div className="absolute inset-0 z-0">
        <GalleryHero />
      </div>

      {/* ── VERY LIGHT OVERLAYS — just enough for edge softness, no darkening ── */}

      {/* Slim bottom fade only — keeps page transition smooth */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(3,24,15,0.40) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Slim top fade — softens header edge only */}
      <div
        className="absolute top-0 inset-x-0 h-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-white/60 text-[8px] font-bold uppercase tracking-[0.4em] drop-shadow">Scroll</span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden rounded-full mt-1">
          <div
            className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-[#FFC107] to-transparent animate-bounce"
            style={{ animationDuration: "1.6s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;