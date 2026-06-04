"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── IMPORT ALL YOUR IMAGES (add/remove as needed, up to 44) ───────────────
import homehero    from "../assets/homehero.png";
import homehero1   from "../assets/homehero1.png";
import homehero2   from "../assets/homehero2.png";
import homehero3   from "../assets/homehero3.png";
import homehero4   from "../assets/homehero4.png";
import homehero5   from "../assets/homehero5.png";
import homehero6   from "../assets/homehero6.png";
import homehero7   from "../assets/homehero7.png";
import homehero8   from "../assets/homehero8.png";
import homehero9   from "../assets/homehero9.png";
import homehero10  from "../assets/homehero10.png";

// ─── SLIDES ARRAY — all 44 images ─────────────────────────────────────────
const slides = [
  homehero,   homehero1,  homehero2,  homehero3,
  homehero4,  homehero5,  homehero6,  homehero7,
  homehero8,  homehero9,  homehero10,
];

const GalleryHero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div style={styles.wrapper}>

      {/* ── SLIDESHOW — NO overlay, full brightness ── */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].src || slides[current]}
          alt={`School photo ${current + 1}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={styles.image}
        />
      </AnimatePresence>

      {/* ── DOTS — bottom right, scrollable row ── */}
      <div style={styles.dotsWrapper}>
        <div style={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                ...styles.dot,
                width: current === index ? "28px" : "7px",
                background:
                  current === index
                    ? "#FFC107"
                    : "rgba(255,255,255,0.55)",
                transform: current === index ? "scaleY(1.2)" : "scaleY(1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── SLIDE COUNTER — bottom left ── */}
      <div style={styles.counter}>
        <span style={styles.counterCurrent}>{String(current + 1).padStart(2, "0")}</span>
        <span style={styles.counterSep}>/</span>
        <span style={styles.counterTotal}>{String(slides.length).padStart(2, "0")}</span>
      </div>

    </div>
  );
};

const styles = {
  wrapper: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: "#000",
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "fit",
    objectPosition: "center",
    // NO filter, NO opacity reduction — full brightness
  },
  dotsWrapper: {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 20,
    maxWidth: "calc(100vw - 160px)",
    overflowX: "auto",
    // hide scrollbar
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  dots: {
    display: "flex",
    gap: "7px",
    alignItems: "center",
    padding: "4px 2px",
  },
  dot: {
    height: "7px",
    borderRadius: "100px",
    cursor: "pointer",
    transition: "width 0.35s ease, background 0.35s ease, transform 0.2s ease",
    border: "none",
    outline: "none",
    padding: 0,
    flexShrink: 0,
  },
  counter: {
    position: "absolute",
    bottom: "34px",
    right: "24px",
    zIndex: 20,
    display: "flex",
    alignItems: "baseline",
    gap: "3px",
    background: "rgba(0,0,0,0.35)",
    backdropFilter: "blur(6px)",
    padding: "3px 8px",
    borderRadius: "20px",
  },
  counterCurrent: {
    color: "#FFC107",
    fontSize: "13px",
    fontWeight: 900,
    lineHeight: 1,
  },
  counterSep: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "10px",
  },
  counterTotal: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "11px",
    fontWeight: 700,
  },
};

export default GalleryHero;