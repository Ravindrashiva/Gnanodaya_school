"use client";
import { motion } from 'framer-motion';
import { school } from '../data/siteContent.js';
// Corrected the import syntax and variable name
import principalImg from '../assets/homeprincipal.png';
import { 
  Target, Rocket, Award, Users, BookOpen, ShieldCheck, 
  Lightbulb, Microscope, Music, Heart, Globe, CheckCircle2,
  ChevronRight
} from 'lucide-react';

// ─── NEXT.JS METADATA ────────────────────────────────────────────────────────
// export const metadata = {
//   title: "About Gnanodaya School Madanapalle | Best CBSE School in Chittoor District, AP",
//   description: "Learn about Gnanodaya School's legacy in Madanapalle, Chittoor District, AP. Our vision, mission, principal's message, and 25+ years of academic excellence.",
//   keywords: [
//     "Gnanodaya School Madanapalle",
//     "best school Madanapalle",
//     "CBSE school Chittoor district",
//     "top school Madanapalle AP",
//     "school about us Madanapalle",
//     "IIT foundation school Madanapalle",
//     "KG to 10th school Madanapalle"
//   ],
//   alternates: { canonical: "https://gnanodayaschool.in/about" },
//   openGraph: {
//     title: "About Gnanodaya School Madanapalle – 25+ Years of Excellence",
//     description: "Discover the story, vision, and academic pillars of Gnanodaya School, the leading CBSE institution in Madanapalle, Andhra Pradesh.",
//     url: "https://gnanodayaschool.in/about",
//     siteName: "Gnanodaya School",
//     images: [{ url: "/og-about.jpg", width: 1200, height: 630, alt: "Gnanodaya School About – Madanapalle Campus" }],
//     locale: "en_IN",
//     type: "website",
//   },
//   robots: { index: true, follow: true },
// };

// ─── ABOUT PAGE JSON-LD ───────────────────────────────────────────────────────
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Gnanodaya School",
  "alternateName": "Gnanodaya High School Madanapalle",
  "description": "Leading CBSE school in Madanapalle, Chittoor District, AP. Established 2001, offering IIT-Foundation, STEM, and holistic education from KG to 10th standard.",
  "url": "https://gnanodayaschool.in",
  "foundingDate": "2001",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madanapalle",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "517325",
    "addressCountry": "IN"
  },
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 40 },
  "sameAs": [
    "https://www.facebook.com/gnanodayaschoolomadanapalle",
    "https://www.youtube.com/@gnanodayaschool"
  ]
};

function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "25+", icon: <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFC107]" /> },
    { label: "Qualified Teachers", value: "40+", icon: <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFC107]" /> },
    { label: "Students Enrolled", value: "800+", icon: <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFC107]" /> },
    { label: "Safety Rating", value: "100%", icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFC107]" /> },
  ];

  const pillars = [
    { title: "IIT-Foundation", desc: "Rigorous analytical training starting from Class 6 to ensure competitive edge.", icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10" /> },
    { title: "STEM Excellence", icon: <Microscope className="w-8 h-8 sm:w-10 sm:h-10" />, desc: "Hands-on laboratory sessions in Physics, Chemistry, and Biology." },
    { title: "Cultural Heritage", icon: <Music className="w-8 h-8 sm:w-10 sm:h-10" />, desc: "Deeply rooted in Indian traditions through music, dance, and arts." },
  ];

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <main className="min-h-screen pt-16 sm:pt-20 bg-[#fcfcfc] font-sans">

        {/* 1. HERO SECTION */}
        <section className="relative bg-[#0A4D2E] py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          </div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FFC107] opacity-10 blur-[100px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-[#FFC107]/20 text-[#FFC107] px-4 py-1.5 rounded-full font-black tracking-[0.15em] sm:tracking-[0.2em] text-[10px] uppercase mb-5 sm:mb-6 border border-[#FFC107]/30">
                Established 2001 • Madanapalle, Chittoor District, AP
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter leading-none">
                OUR <span className="text-[#FFC107]">LEGACY</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                Crafting a future-ready generation in Madanapalle through a unique blend of heritage,
                discipline, and modern technological excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. STATS BENTO */}
        <section className="relative -mt-8 sm:-mt-12 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center group hover:bg-[#0A4D2E] transition-all duration-500"
              >
                <div className="flex justify-center mb-3 sm:mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#0A4D2E] group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-gray-400 group-hover:text-[#FFC107] mt-1 sm:mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. OUR HISTORY */}
        <section id="history" className="py-20 sm:py-32 bg-[#fcfcfc] scroll-mt-24 sm:scroll-mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
              <motion.div
                className="lg:col-span-7 bg-white p-8 sm:p-10 md:p-16 rounded-[2.5rem] sm:rounded-[40px] border border-gray-100 shadow-sm"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              >
                <h2 className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[11px] mb-5 sm:mb-6">Our Journey — Madanapalle</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A4D2E] mb-6 sm:mb-8 leading-[1.1] uppercase tracking-tighter">
                  Nurturing Excellence <br />Since Day One
                </h3>
                <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
                  <p className="italic border-l-4 border-[#FFC107] pl-5 sm:pl-6 text-[#0A4D2E]">
                    "Founded with a vision to provide quality education in Madanapalle, we have evolved
                    into a cornerstone of academic excellence in Chittoor District."
                  </p>
                  <p>{school.about.description}</p>
                </div>
                <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-[#0A4D2E]/5 rounded-2xl border border-[#0A4D2E]/10">
                  <CheckCircle2 className="text-[#0A4D2E] shrink-0" />
                  <p className="text-[12px] sm:text-[13px] font-black text-[#0A4D2E] uppercase tracking-wide">
                    Government Recognized Educational Institution
                  </p>
                </div>
              </motion.div>

              {/* Vision & Mission */}
              <div id="vision" className="lg:col-span-5 flex flex-col gap-3 sm:gap-6 scroll-mt-24 sm:scroll-mt-32">
                <motion.div whileHover={{ y: -5 }} className="bg-[#0A4D2E] p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[40px] text-white relative overflow-hidden flex-1 flex flex-col justify-center">
                  <Target className="absolute right-[-10px] bottom-[-10px] w-28 sm:w-32 h-28 sm:h-32 opacity-10 text-[#FFC107]" />
                  <div className="bg-[#FFC107] w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                    <Target className="text-[#0A4D2E] w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 uppercase tracking-tight">Our Vision</h4>
                  <p className="text-white/70 font-medium leading-relaxed text-sm sm:text-base">
                    To be the leading educational institution in Madanapalle and Chittoor District,
                    recognized for academic excellence and character development.
                  </p>
                </motion.div>

                <motion.div whileHover={{ y: -5 }} className="bg-[#FFC107] p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[40px] text-[#0A4D2E] relative overflow-hidden flex-1 flex flex-col justify-center">
                  <Rocket className="absolute right-[-10px] bottom-[-10px] w-28 sm:w-32 h-28 sm:h-32 opacity-10" />
                  <div className="bg-[#0A4D2E] w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                    <Rocket className="text-[#FFC107] w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 uppercase tracking-tight">Our Mission</h4>
                  <p className="text-[#0A4D2E]/80 font-medium leading-relaxed text-sm sm:text-base">{school.about.mission}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ACADEMIC PILLARS */}
        <section className="py-16 sm:py-24 bg-[#0A4D2E] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-[#FFC107] font-black uppercase tracking-widest text-[11px] mb-3 sm:mb-4">Methodology</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                The Academic <span className="text-[#FFC107]">Pillars</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  className="group p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[40px] bg-white/5 border border-white/10 hover:bg-white hover:text-[#0A4D2E] transition-all duration-500"
                >
                  <div className="text-[#FFC107] mb-6 sm:mb-8 group-hover:text-[#0A4D2E] transition-colors">{p.icon}</div>
                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 uppercase tracking-tight">{p.title}</h4>
                  <p className="text-white/60 group-hover:text-[#0A4D2E]/70 font-medium leading-relaxed text-sm sm:text-base">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CHAIRMAN'S MESSAGE */}
        <section id="principal" className="py-20 sm:py-32 bg-white scroll-mt-24 sm:scroll-mt-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="md:col-span-4 relative">
                <div className="absolute inset-0 bg-[#FFC107] rounded-[2.5rem] sm:rounded-[40px] rotate-6"></div>
                {/* Updated Image Source */}
                <img
                  src={principalImg}
                  alt="SRI KAMAKOTI PRASADARAO – Chairman, Gnanodaya School Madanapalle"
                  className="relative z-10 w-full rounded-[2.5rem] sm:rounded-[40px] shadow-2xl border-4 border-white object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-8">
                <span className="text-6xl sm:text-7xl text-[#FFC107] font-serif leading-none opacity-40">"</span>
                {/* Updated Name */}
                <h2 className="text-3xl sm:text-4xl font-black text-[#0A4D2E] mb-2 uppercase tracking-tighter">
                  SRI KAMAKOTI PRASADARAO
                </h2>
                {/* Updated Role */}
                <p className="text-[#FFC107] font-black tracking-widest text-[11px] mb-6 sm:mb-8 uppercase px-3 py-1 bg-[#0A4D2E] inline-block rounded-md">
                  Chairman — Gnanodaya School, Madanapalle
                </p>
                <blockquote className="text-xl sm:text-2xl md:text-3xl text-[#0A4D2E]/80 font-bold italic leading-tight mb-8 sm:mb-10">
                  "{school.mentors[0].quote}"
                </blockquote>
                <div className="h-1.5 w-24 bg-[#FFC107] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. INFRASTRUCTURE / COMMUNITY */}
        <section id="infrastructure" className="pb-20 sm:pb-32 px-4 sm:px-6 scroll-mt-24 sm:scroll-mt-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 bg-[#FFC107] p-10 sm:p-12 rounded-[3rem] sm:rounded-[50px] text-[#0A4D2E] flex flex-col justify-between">
              <div>
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 mb-6 sm:mb-8 opacity-40" />
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-4 sm:mb-6">
                  Beyond the Classroom
                </h3>
                <p className="text-lg sm:text-xl font-bold leading-relaxed max-w-2xl">
                  Education is a journey of self-discovery. From modern labs to eco-awareness drives,
                  our students in Madanapalle lead with empathy and action.
                </p>
              </div>
              <button className="mt-10 sm:mt-12 flex items-center gap-3 font-black uppercase text-[12px] tracking-widest group">
                View School Activities <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="bg-[#0A4D2E] p-10 sm:p-12 rounded-[3rem] sm:rounded-[50px] text-white flex flex-col items-center justify-center text-center">
              <Heart className="text-[#FFC107] w-10 h-10 sm:w-12 sm:h-12 mb-6 sm:mb-8 animate-pulse" />
              <h4 className="text-xl sm:text-2xl font-black uppercase mb-3 sm:mb-4 tracking-tight">Parent Portal</h4>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                Active communication through monthly meetings and 24/7 digital progress tracking.
              </p>
            </div>
          </div>
        </section>

        {/* 7. SEO TAG CLOUD */}
        <section className="py-10 sm:py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "State Board",
                "IIT-Foundation",
                "LKG to 10th",
                "Best School Madanapalle",
                "CBSE School Chittoor District",
                "STEM Education",
                "Experienced Faculty",
                "Safe Campus",
                "Top School AP",
                "School Admissions Madanapalle 2025",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 sm:px-5 py-1.5 sm:py-2 bg-gray-50 text-[#0A4D2E] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border border-gray-100 hover:border-[#FFC107] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default AboutPage;