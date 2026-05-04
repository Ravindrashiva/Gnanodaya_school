import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Trophy, Cpu, Palette } from 'lucide-react';

const features = [
  {
    title: "Global Curriculum",
    desc: "A world-class education framework tailored for the innovators of tomorrow.",
    icon: <Globe className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Expert Mentorship",
    desc: "Learn from industry leaders and PhD-level educators in a 1:10 ratio.",
    icon: <Users className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Modern Facilities",
    desc: "From AI labs to Olympic-sized pools, we provide the best for our students.",
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Creative Arts",
    desc: "Nurturing talent in music, drama, and fine arts with professional studios.",
    icon: <Palette className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Holistic Growth",
    desc: "Developing character, leadership, and emotional intelligence.",
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Athletic Excellence",
    desc: "State-of-the-art sports complexes and professional coaching staff.",
    icon: <Trophy className="w-8 h-8 text-orange-500" />,
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group"
        >
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:rotate-6 transition-all duration-300">
            {React.cloneElement(item.icon, { 
              className: "w-8 h-8 text-orange-500 group-hover:text-white transition-colors" 
            })}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;