import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Success Rate', value: '98%' },
  { label: 'Expert Faculty', value: '150+' },
  { label: 'Global Awards', value: '25' },
  { label: 'Active Students', value: '2.5k' },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center group"
        >
          <div className="text-3xl md:text-5xl font-black text-slate-900 group-hover:text-orange-500 transition-colors duration-300">
            {stat.value}
          </div>
          <div className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-widest mt-2">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;