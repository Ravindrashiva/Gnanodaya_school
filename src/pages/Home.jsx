import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import Slider from '../components/Slider.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import QuickInfo from '../components/QuickInfo.jsx'
import Stats from '../components/Stats.jsx'
import WelcomeMessage from '../components/WelcomeMessage.jsx' // NEW: Essential for school sites
import QuickLinksGrid from '../components/QuickLinksGrid.jsx' // NEW: Floating action grid
import { ArrowRight, GraduationCap, Calendar, PhoneCall } from 'lucide-react'

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative bg-gray-50">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-yellow-400 origin-left z-[60]" style={{ scaleX }} />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Floating Quick Action Cards (Similar to RKS "Admission/Curriculum" boxes) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-16 lg:-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-blue-700 p-8 text-white flex flex-col items-center text-center group cursor-pointer border-r border-blue-600/50">
               <GraduationCap size={40} className="mb-4 text-yellow-400" />
               <h3 className="text-xl font-bold mb-2">Academics</h3>
               <p className="text-sm opacity-80 mb-4">State Board curriculum from LKG to 10th Class</p>
               <button className="text-xs font-bold uppercase tracking-widest flex items-center group-hover:gap-3 transition-all">Explore <ArrowRight size={16} className="ml-2"/></button>
            </div>
            <div className="bg-yellow-400 p-8 text-blue-900 flex flex-col items-center text-center group cursor-pointer border-r border-yellow-500/50">
               <Calendar size={40} className="mb-4" />
               <h3 className="text-xl font-bold mb-2">Admissions</h3>
               <p className="text-sm opacity-90 mb-4">Enroll your child for the 2026-27 academic year</p>
               <button className="text-xs font-bold uppercase tracking-widest flex items-center group-hover:gap-3 transition-all">Apply Now <ArrowRight size={16} className="ml-2"/></button>
            </div>
            <div className="bg-blue-800 p-8 text-white flex flex-col items-center text-center group cursor-pointer">
               <PhoneCall size={40} className="mb-4 text-yellow-400" />
               <h3 className="text-xl font-bold mb-2">Contact Us</h3>
               <p className="text-sm opacity-80 mb-4">Have questions? Reach out to our campus office</p>
               <button className="text-xs font-bold uppercase tracking-widest flex items-center group-hover:gap-3 transition-all">Get in Touch <ArrowRight size={16} className="ml-2"/></button>
            </div>
          </div>
        </div>

        {/* 3. Official Welcome (Critical for school trust) */}
        <WelcomeMessage />

        {/* 4. Statistics (The "Proof" Section) */}
        <Stats />

        {/* 5. Features / Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Gallery / Life at School */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Visual Journey</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2">Campus Highlights</h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto mt-4" />
          </div>
          <Slider />
        </section>

        {/* 7. Bottom Contact Info (QuickInfo) */}
        <div className="bg-slate-100 py-10">
            <QuickInfo />
        </div>

        {/* 8. RKS Style "Ready to Join" Banner */}
        <section className="relative py-20 bg-blue-700 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Shape Your Child's Future With Gynodaya</h2>
            <p className="text-lg opacity-90 mb-10">Join the best state board school in Madanapalle for a holistic learning experience.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-white transition-colors">
                Online Admission
              </button>
              <button className="border-2 border-white px-10 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-white hover:text-blue-700 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

export default Home;