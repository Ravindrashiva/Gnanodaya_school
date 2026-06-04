import React from 'react';
import { motion } from 'framer-motion';

export default function FacilitiesPreview() {
  const facilities = [
    {
      title: "SCERT Curriculum",
      desc: "Comprehensive academic programs aligned with Andhra Pradesh SCERT and SSC syllabus.",
      icon: "📖",
      active: true
    },
    {
      title: "Science & IT Labs",
      desc: "Modern Physics, Chemistry, Biology and IT labs equipped for hands-on learning from Class 6.",
      icon: "🧪",
    },
    {
      title: "Library & Reading",
      desc: "A vast collection of over 4000 books in Telugu and English to nurture young readers.",
      icon: "📚",
    },
    {
      title: "Sports & Athletics",
      desc: "Holistic physical development through Cricket, Kabaddi, Volleyball, and Yoga.",
      icon: "🏆",
    },
    {
      title: "Arts & Culture",
      desc: "Creative expression through music, dance, drawing, and vibrant annual festivals.",
      icon: "🎵",
    },
    {
      title: "Safe Transport",
      desc: "GPS-tracked school buses with trained attendants ensuring safe travel.",
      icon: "🚌",
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            className="text-(--color-secondary) text-xs font-black uppercase mb-4"
          >
            Why Gnanodaya
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-(--color-primary) leading-tight max-w-3xl"
          >
            An ideal home for your child’s <span className="italic text-(--color-secondary)">holistic growth</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-(--color-secondary) mt-8 rounded-full"
          />
        </div>

        {/* Facilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-white border border-gray-100 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Decorative Background Number */}
              <span className="absolute top-6 right-8 text-6xl font-serif text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                0{i + 1}
              </span>

              {/* Icon Box */}
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                f.active ? 'bg-(--color-secondary)' : 'bg-(--color-primary)'
              }`}>
                <span className="text-2xl">{f.icon}</span>
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-serif text-(--color-primary) mb-4 group-hover:text-(--color-secondary) transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {f.desc}
              </p>

              {/* Hover Line Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-(--color-secondary) transition-all duration-500 group-hover:w-full rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm">
            Interested in a campus tour? <button className="text-(--color-primary) font-bold underline underline-offset-4 ml-1">Contact Admissions</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}