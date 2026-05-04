import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  FileText, 
  HeadphonesIcon, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section className="relative py-24 bg-[#001f3f] overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative bg-[#002b55] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left: The Narrative */}
            <div className="flex-[1.2] p-10 md:p-16 lg:p-24 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-secondary font-black text-[10px] tracking-[0.3em] uppercase">
                  Phase 01 Enrollment Active
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.05] mb-8"
              >
                Your Future, <br />
                <span className="text-secondary italic underline decoration-white/10 underline-offset-[12px]">Redefined.</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12"
              >
                We don't just teach—we ignite. Join an ecosystem designed to turn curiosity into world-changing capability. 
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link 
                  to="/apply" 
                  className="group relative px-10 py-5 bg-secondary text-primary font-black text-xs tracking-widest rounded-2xl overflow-hidden transition-all"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    START APPLICATION <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link 
                  to="/visit" 
                  className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black text-xs tracking-widest rounded-2xl transition-all flex items-center gap-3"
                >
                  BOOK A CAMPUS TOUR <Zap className="w-4 h-4 text-secondary" />
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <div className="mt-16 flex flex-wrap gap-8 border-t border-white/5 pt-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-secondary/60" />
                  <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Global Accreditation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary/60" />
                  <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Merit Scholarships</span>
                </div>
              </div>
            </div>

            {/* Right: The Dynamic Card Stack */}
            <div className="lg:w-[400px] bg-secondary relative flex flex-col">
              {/* Geometry Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" 
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
              />
              
              <div className="relative z-10 p-10 lg:p-12 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-primary font-black text-xs tracking-[0.2em] uppercase mb-8 pb-4 border-b border-primary/10">
                    Quick Access
                  </h4>
                  
                  <div className="space-y-6">
                    <button className="w-full flex items-center justify-between p-4 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors text-primary group">
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5" />
                        <span className="font-bold text-sm">Prospectus 2026</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                    </button>
                    
                    <button className="w-full flex items-center justify-between p-4 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors text-primary group">
                      <div className="flex items-center gap-4">
                        <HeadphonesIcon className="w-5 h-5" />
                        <span className="font-bold text-sm">Admission Help</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                    </button>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="bg-primary p-6 rounded-[2rem] text-secondary">
                    <p className="text-[10px] font-black tracking-widest uppercase mb-2 opacity-60">Upcoming Deadline</p>
                    <p className="text-3xl font-serif font-bold italic">Aug 15th</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-1 flex-1 bg-secondary/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          transition={{ duration: 1.5, ease: "anticipate" }}
                          className="h-full bg-secondary" 
                        />
                      </div>
                      <span className="text-[10px] font-bold">75% FULL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}