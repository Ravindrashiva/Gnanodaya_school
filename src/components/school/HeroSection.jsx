"use client";

import React from "react";
import GalleryHero from "../galleryhero";

const Hero = () => {
  return (
    <section
      className="
        relative 
        w-full 
        overflow-hidden 
        bg-black
      "
      style={{
        height: "100dvh",
        minHeight: "500px",
      }}
      aria-label="Gnanodaya School Hero"
    >
      {/* ── FULL-SCREEN SLIDESHOW ── */}
      <div className="absolute inset-0 z-0">
        <GalleryHero />
      </div>

      {/* ── BOTTOM OVERLAY ── */}
      <div
        className="
          absolute 
          bottom-0 
          inset-x-0 
          z-10 
          pointer-events-none
          h-20 
          sm:h-24
        "
        style={{
          background:
            "linear-gradient(to top, rgba(3,24,15,0.40) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── TOP OVERLAY ── */}
      <div
        className="
          absolute 
          top-0 
          inset-x-0 
          z-10 
          pointer-events-none
          h-14 
          sm:h-20
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── MOBILE SIDE SOFTNESS ── */}
      <div
        className="
          absolute 
          inset-y-0 
          left-0 
          w-5 
          sm:hidden 
          z-10 
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <div
        className="
          absolute 
          inset-y-0 
          right-0 
          w-5 
          sm:hidden 
          z-10 
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
          gap-1

          bottom-4
          sm:bottom-8
        "
        aria-hidden="true"
      >
        <span
          className="
            text-white/60
            font-bold
            uppercase
            drop-shadow

            text-[7px]
            sm:text-[8px]

            tracking-[0.28em]
            sm:tracking-[0.4em]
          "
        >
          Scroll
        </span>

        <div
          className="
            relative
            overflow-hidden
            rounded-full
            bg-white/30

            w-px
            h-8
            sm:h-10
          "
        >
          <div
            className="
              absolute
              inset-x-0
              h-1/2
              animate-bounce
              bg-gradient-to-b
              from-transparent
              via-[#FFC107]
              to-transparent
            "
            style={{
              animationDuration: "1.6s",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;