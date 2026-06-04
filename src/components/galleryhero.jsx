"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// IMPORT YOUR IMAGES
import homehero from "../assets/homehero.png";
import homehero1 from "../assets/homehero1.png";
import homehero2 from "../assets/homehero2.png";
import homehero3 from "../assets/homehero3.png";
import homehero4 from "../assets/homehero4.png";
import homehero5 from "../assets/homehero5.png";
import homehero6 from "../assets/homehero6.png";
import homehero7 from "../assets/homehero7.png";
import homehero8 from "../assets/homehero8.png";
import homehero9 from "../assets/homehero9.png";
import homehero10 from "../assets/homehero10.png";

const slides = [
  homehero,
  homehero1,
  homehero2,
  homehero3,
  homehero4,
  homehero5,
  homehero6,
  homehero7,
  homehero8,
  homehero9,
  homehero10,
];

const GalleryHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      {/* SLIDESHOW */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current]}
          alt="School Banner"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={styles.image}
        />
      </AnimatePresence>

      {/* NO OVERLAY HERE — overlay is handled by Hero.jsx */}

      {/* DOTS */}
      <div style={styles.dots}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              ...styles.dot,
              width: current === index ? "30px" : "8px",
              background:
                current === index ? "#C5A059" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
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
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  dots: {
    position: "absolute",
    bottom: "35px",
    right: "40px",
    display: "flex",
    gap: "10px",
    zIndex: 20,
  },
  dot: {
    height: "8px",
    borderRadius: "100px",
    cursor: "pointer",
    transition: "0.4s ease",
  },
};

export default GalleryHero;