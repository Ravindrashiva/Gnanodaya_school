import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WelcomeMessage() {
  const highlights = [
    "Holistic Development Approach",
    "State-of-the-Art Digital Classrooms",
    "Focus on Ethical & Moral Values",
    "Qualified & Compassionate Faculty"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-b-8 border-yellow-400">
              <img 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000" 
                alt="Gynodaya School Campus" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Background Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-50 rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-blue-600 rounded-tl-2xl" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider">
              Established Excellence
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Welcome to <span className="text-blue-600">Gynodaya School</span> Madanapalle
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 italic">
              "Providing a nurturing environment where every child is empowered to achieve their full potential through quality education and character building."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold shadow-lg hover:bg-blue-800 transition-all active:scale-95">
                Learn More About Us
              </button>
              <div className="flex items-center gap-3 px-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-900 shadow-inner">
                  AP
                </div>
                <div className="text-xs font-bold text-slate-500 leading-none">
                  STATE BOARD<br/>AFFILIATED
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}