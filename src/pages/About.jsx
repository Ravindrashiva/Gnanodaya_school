"use client";

import { motion } from "framer-motion";
import { school } from "../data/siteContent.js";
import principalImg from "../assets/homeprincipal.png";

import {
  Target,
  Rocket,
  Award,
  Users,
  BookOpen,
  ShieldCheck,
  Lightbulb,
  Microscope,
  Music,
  CheckCircle2,
} from "lucide-react";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Gnanodaya School",
  alternateName: "Gnanodaya High School Madanapalle",
  description:
    "Leading CBSE school in Madanapalle, Chittoor District, AP.",
  url: "https://gnanodayaschool.in",
  foundingDate: "2001",
};

function AboutPage() {
  const stats = [
    {
      label: "Years of Excellence",
      value: "25+",
      icon: (
        <Award className="w-6 h-6 text-white" />
      ),
    },
    {
      label: "Qualified Teachers",
      value: "40+",
      icon: (
        <Users className="w-6 h-6 text-white" />
      ),
    },
    {
      label: "Students Enrolled",
      value: "800+",
      icon: (
        <BookOpen className="w-6 h-6 text-white" />
      ),
    },
    {
      label: "Safety Rating",
      value: "100%",
      icon: (
        <ShieldCheck className="w-6 h-6 text-white" />
      ),
    },
  ];

  const pillars = [
    {
      title: "IIT-Foundation",
      desc:
        "Rigorous analytical training starting from Class 6.",
      icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10" />,
    },
    {
      title: "STEM Excellence",
      icon: <Microscope className="w-8 h-8 sm:w-10 sm:h-10" />,
      desc:
        "Hands-on laboratory sessions in Physics, Chemistry, and Biology.",
    },
    {
      title: "Cultural Heritage",
      icon: <Music className="w-8 h-8 sm:w-10 sm:h-10" />,
      desc:
        "Rooted in Indian traditions through music, dance, and arts.",
    },
  ];

  return (
    <>
      {/* JSON LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd),
        }}
      />

      {/* MAIN */}
      <main className="min-h-screen pt-0 bg-[#fcfcfc] font-sans overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative bg-[#0A4D2E] py-12 sm:py-20 overflow-hidden">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FFC107] opacity-10 blur-[100px] rounded-full" />

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center pt-2">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >

              {/* Badge */}
              <span className="inline-block bg-[#FFC107]/20 text-[#FFC107] px-4 py-1.5 rounded-full font-black tracking-[0.15em] sm:tracking-[0.2em] text-[10px] uppercase mb-5 sm:mb-6 border border-[#FFC107]/30">
                Established 2001 • Madanapalle, Chittoor District, AP
              </span>

              {/* Heading */}
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter leading-none">
                OUR <span className="text-[#FFC107]">LEGACY</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                Crafting a future-ready generation in Madanapalle through
                heritage, discipline, and technological excellence.
              </p>

            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="relative -mt-8 sm:-mt-12 z-20 px-4 sm:px-6">

          <div className="max-w-7xl mx-auto">

            {/* SINGLE BLOCK */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#dfe7df] bg-[#f8fbf8] shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

              {/* DOT PATTERN */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, #16a34a 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />
              </div>

              {/* GRID */}
              <div className="relative grid grid-cols-2 lg:grid-cols-4">

                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`group relative px-6 sm:px-10 py-10 sm:py-12 text-center transition-all duration-500 hover:bg-[#edf6ee]
                      
                      ${
                        index !== stats.length - 1
                          ? "border-b lg:border-b-0 lg:border-r border-[#dfe7df]"
                          : ""
                      }
                    `}
                  >

                    {/* ICON */}
                    <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-[#16a34a] flex items-center justify-center shadow-[0_10px_25px_rgba(22,163,74,0.25)] group-hover:scale-105 transition-transform duration-300">

                      {stat.icon}

                    </div>

                    {/* VALUE */}
                    <div className="text-4xl sm:text-5xl font-black text-[#0A2A5E] tracking-tight leading-none">
                      {stat.value}
                    </div>

                    {/* LABEL */}
                    <div className="mt-3 text-[#5a6472] text-sm sm:text-base font-medium">
                      {stat.label}
                    </div>

                    {/* BOTTOM LINE */}
                    <div className="w-10 h-[3px] rounded-full bg-[#22c55e] mx-auto mt-5 opacity-80" />

                  </motion.div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* OUR HISTORY */}
        <section
          id="history"
          className="py-20 sm:py-28 bg-[#fcfcfc] scroll-mt-24"
        >

          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">

              {/* LEFT */}
              <motion.div
                className="lg:col-span-7 bg-white p-8 sm:p-10 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >

                <h2 className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[11px] mb-5 sm:mb-6">
                  Our Journey — Madanapalle
                </h2>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A4D2E] mb-6 sm:mb-8 leading-[1.1] uppercase tracking-tighter">
                  Nurturing Excellence
                  <br />
                  Since Day One
                </h3>

                <div className="space-y-4 sm:space-y-6 text-[#5a6472] text-base sm:text-lg font-medium leading-relaxed">

                  <p className="italic border-l-4 border-[#FFC107] pl-5 sm:pl-6 text-[#0A4D2E]">
                    "Founded with a vision to provide quality education
                    in Madanapalle."
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

              {/* RIGHT */}
              <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-6">

                {/* Vision */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#0A4D2E] p-8 sm:p-10 rounded-[2.5rem] text-white relative overflow-hidden flex-1 flex flex-col justify-center"
                >

                  <Target className="absolute right-[-10px] bottom-[-10px] w-28 h-28 opacity-10 text-[#FFC107]" />

                  <div className="bg-[#FFC107] w-10 h-10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                    <Target className="text-[#0A4D2E] w-5 h-5" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 uppercase tracking-tight">
                    Our Vision
                  </h4>

                  <p className="text-white/70 font-medium leading-relaxed text-sm sm:text-base">
                    To become the leading educational institution in
                    Madanapalle.
                  </p>

                </motion.div>

                {/* Mission */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#FFC107] p-8 sm:p-10 rounded-[2.5rem] text-[#0A4D2E] relative overflow-hidden flex-1 flex flex-col justify-center"
                >

                  <Rocket className="absolute right-[-10px] bottom-[-10px] w-28 h-28 opacity-10" />

                  <div className="bg-[#0A4D2E] w-10 h-10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
                    <Rocket className="text-[#FFC107] w-5 h-5" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 uppercase tracking-tight">
                    Our Mission
                  </h4>

                  <p className="text-[#0A4D2E]/80 font-medium leading-relaxed text-sm sm:text-base">
                    {school.about.mission}
                  </p>

                </motion.div>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default AboutPage;