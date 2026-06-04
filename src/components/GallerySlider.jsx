import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- ASSET IMPORTS ---
import highlight from "../assets/highlight.png";
import highlight1 from "../assets/highlight1.png";
import highlight2 from "../assets/highlight2.png";
import highlight3 from "../assets/highlight3.png";
import highlight4 from "../assets/highlight4.png";
import highlight5 from "../assets/highlight5.png";

// Creating a local array of imported images
const HIGHLIGHT_IMAGES = [
  highlight,
  highlight1,
  highlight2,
  highlight3,
  highlight4,
  highlight5
];

const GallerySlider = ({ images = HIGHLIGHT_IMAGES }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] flex items-center justify-center overflow-hidden">
      {/* Navigation - Left */}
      <button 
        onClick={prev} 
        className="absolute left-4 z-30 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-[#D4AF37] transition-all group"
      >
        <ChevronLeft className="text-white group-hover:scale-110" />
      </button>

      <div className="relative flex items-center justify-center w-full h-full">
        <AnimatePresence mode="popLayout">
          {images.map((img, i) => {
            // HIGHLIGHT LOGIC:
            const isActive = i === index;
            const isPrev = i === (index - 1 + images.length) % images.length;
            const isNext = i === (index + 1) % images.length;

            // Only render the 3 focused images for smooth performance
            if (!isActive && !isPrev && !isNext) return null;

            return (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.75,
                  x: isActive ? 0 : isPrev ? -280 : 280,
                  zIndex: isActive ? 20 : 10,
                  filter: isActive ? "grayscale(0%)" : "grayscale(80%)",
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute w-[300px] md:w-[450px] h-[350px] md:h-[400px] cursor-pointer"
                onClick={() => setIndex(i)} // Click side images to bring them to focus
              >
                <img 
                  src={img} 
                  alt={`Highlight ${i}`}
                  className={`w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 transition-all duration-500 ${
                    isActive ? "border-[#D4AF37] shadow-[#D4AF37]/20" : "border-white/20"
                  }`}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation - Right */}
      <button 
        onClick={next} 
        className="absolute right-4 z-30 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-[#D4AF37] transition-all group"
      >
        <ChevronRight className="text-white group-hover:scale-110" />
      </button>
    </div>
  );
};

export default GallerySlider;