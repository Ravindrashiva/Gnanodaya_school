import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Box, Sparkles } from "lucide-react";

const facilities = [
  { img: "https://media.base44.com/images/public/69f1fea6311993534279dd36/48df7655c_generated_4bd9099e.png", title: "Smart Classrooms", desc: "Interactive digital learning environments equipped with modern technology." },
  { img: "https://media.base44.com/images/public/69f1fea6311993534279dd36/3eb68c372_generated_4aef10d7.png", title: "Science Lab", desc: "Advanced facilities for chemistry, physics, and biological research." },
  { img: "https://media.base44.com/images/public/69f1fea6311993534279dd36/2b96f52cb_generated_6a057ab6.png", title: "Computer Lab", desc: "High-performance systems for coding, design, and digital literacy." },
  { img: "https://media.base44.com/images/public/69f1fea6311993534279dd36/fdc97bb38_generated_dededdf1.png", title: "Library", desc: "A quiet sanctuary housing thousands of physical and digital resources." },
  { img: "https://media.base44.com/images/public/69f1fea6311993534279dd36/ab122c249_generated_ee028439.png", title: "Sports Ground", desc: "Professional grade facilities for athletics, soccer, and team sports." },
  { img: "https://media.base44.com/images/public/69f1fea6311993534279dd36/b7e1c4718_generated_18e629ee.png", title: "Cultural Hall", desc: "A multi-purpose space for arts, performances, and student events." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function FacilitiesPreview() {
  return (
    <section className="py-24 bg-[#00172e] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-secondary/50"></span>
              <h3 className="text-secondary uppercase tracking-[0.4em] text-[11px] font-black flex items-center gap-2">
                <Box className="w-3.5 h-3.5" /> Premier Infrastructure
              </h3>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-[1.1]">
              World-Class <br />
              <span className="text-secondary italic font-light">Campus Experience</span>
            </h2>
          </div>
          
          <motion.div 
            whileHover={{ x: 10 }}
            className="hidden md:block"
          >
            <Link to="/facilities" className="group flex items-center gap-4 text-white font-bold text-sm tracking-widest">
              <span className="group-hover:text-secondary transition-colors">VIEW ALL FACILITIES</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary transition-all">
                <ArrowRight className="w-5 h-5 group-hover:text-primary" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              className="relative group"
            >
              {/* Animated Floating Border */}
              <div className="absolute -inset-4 border border-secondary/0 group-hover:border-secondary/20 rounded-[2rem] transition-all duration-700 -z-10 scale-95 group-hover:scale-100" />
              
              <div className="relative bg-[#002447] rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-secondary/10">
                
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={f.img} 
                    alt={f.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002447] via-[#002447]/20 to-transparent opacity-90" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-5 left-5 overflow-hidden rounded-full">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-bold w-10 h-10 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-colors duration-500">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </div>
                  </div>

                  {/* Icon on Hover */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light">
                    {f.desc}
                  </p>
                  
                  {/* Subtle Learn More Link */}
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-secondary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    EXPLORE <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Call to Action */}
        <div className="mt-20 md:hidden text-center">
          <Link to="/facilities" className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary font-black text-xs tracking-widest rounded-xl shadow-[0_10px_30px_rgba(var(--secondary-rgb),0.3)]">
            EXPLORE ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}