"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Eye,
  Compass,
  ShieldCheck,
  Heart,
 Lightbulb,
  Globe,
  Award,
  Sparkles,
  BookCheck,
  Users2,
} from "lucide-react";

const Vision = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Integrity",
      desc: "Honesty and strong moral principles in every action.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Empathy",
      desc: "Understanding and sharing the feelings of others.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Excellence",
      desc: "Setting high standards and striving for the best results.",
    },
  ];

  const pillars = [
    {
      title: "Intellectual Rigor",
      desc:
        "Challenging the mind through a curriculum that encourages critical thinking over rote memorization.",
      icon: <Lightbulb className="w-6 h-6" />,
      border: "border-[#C4B5FD]",
      hoverBorder: "hover:border-[#7C3AED]",
      bg: "bg-[#faf5ff]",
      hoverBg: "hover:bg-[#f4ebff]",
      iconBg: "bg-[#f3e8ff]",
      iconColor: "text-[#7C3AED]",
      curve: "border-[#C4B5FD]",
    },
    {
      title: "Global Citizenship",
      desc:
        "Cultivating awareness of world cultures and a sense of responsibility toward the global community.",
      icon: <Globe className="w-6 h-6" />,
      border: "border-[#FCD34D]",
      hoverBorder: "hover:border-[#F59E0B]",
      bg: "bg-[#fffaf0]",
      hoverBg: "hover:bg-[#fff4db]",
      iconBg: "bg-[#fef3c7]",
      iconColor: "text-[#F59E0B]",
      curve: "border-[#FCD34D]",
    },
    {
      title: "Holistic Growth",
      desc:
        "Balancing competitive academics with sports, arts, and emotional intelligence training.",
      icon: <Sparkles className="w-6 h-6" />,
      border: "border-[#7DD3FC]",
      hoverBorder: "hover:border-[#38BDF8]",
      bg: "bg-[#f0f9ff]",
      hoverBg: "hover:bg-[#e0f2fe]",
      iconBg: "bg-[#dbeafe]",
      iconColor: "text-[#38BDF8]",
      curve: "border-[#7DD3FC]",
    },
    {
      title: "Collaborative Spirit",
      desc:
        "Teaching the value of teamwork and the ability to lead while listening to others.",
      icon: <Users2 className="w-6 h-6" />,
      border: "border-[#86EFAC]",
      hoverBorder: "hover:border-[#22C55E]",
      bg: "bg-[#f0fdf4]",
      hoverBg: "hover:bg-[#dcfce7]",
      iconBg: "bg-[#dcfce7]",
      iconColor: "text-[#22C55E]",
      curve: "border-[#86EFAC]",
    },
  ];

  return (
    <section
      id="vision"
      className="py-24 bg-[#fcfcfc] overflow-hidden relative"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <h2 className="text-[20rem] font-black text-[#0A4D2E] leading-none select-none">
          LEAD
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#FFC107] font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            Core Purpose
          </h2>

          <h3 className="text-4xl md:text-6xl font-black text-[#0A4D2E] uppercase tracking-tighter">
            Our <span className="text-[#FFC107]">Compass</span> for the Future
          </h3>
        </div>

        {/* Vision + Mission */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-12">

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#0A4D2E] rounded-[50px] p-12 text-white overflow-hidden flex flex-col justify-between shadow-2xl border border-white/10"
          >
            <div className="relative z-10">

              <div className="bg-[#FFC107] w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <Eye className="text-[#0A4D2E] w-8 h-8" />
              </div>

              <h4 className="text-4xl font-black uppercase tracking-tight mb-6">
                Our Vision
              </h4>

              <p className="text-white/80 text-xl font-medium leading-relaxed">
                To be a premier global center of learning, fostering
                intellectual curiosity and character development,
                while preparing students to lead with integrity in
                an ever-evolving world.
              </p>
            </div>

            <Compass className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-5 pointer-events-none" />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#FFC107] rounded-[50px] p-12 text-[#0A4D2E] overflow-hidden flex flex-col justify-between shadow-2xl border border-[#0A4D2E]/10"
          >
            <div className="relative z-10">

              <div className="bg-[#0A4D2E] w-16 h-16 rounded-3xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                <Rocket className="text-[#FFC107] w-8 h-8" />
              </div>

              <h4 className="text-4xl font-black uppercase tracking-tight mb-6">
                Our Mission
              </h4>

              <p className="text-[#0A4D2E] text-xl font-bold leading-relaxed">
                We empower students by providing a rigorous academic
                foundation integrated with modern technology and
                traditional values, ensuring every learner achieves
                their fullest potential.
              </p>
            </div>

            <Target className="absolute -bottom-10 -right-10 w-64 h-64 text-[#0A4D2E] opacity-5 pointer-events-none" />
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">

          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="bg-[#0A4D2E]/5 p-3 rounded-2xl text-[#0A4D2E]">
                {val.icon}
              </div>

              <div>
                <h5 className="font-black text-[#0A4D2E] uppercase text-xs tracking-widest">
                  {val.title}
                </h5>

                <p className="text-gray-400 text-[11px] font-medium leading-none mt-1">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Educational Philosophy */}
        <div className="mb-24">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

            <div className="max-w-xl">

              <h4 className="text-xs font-black text-[#FFC107] uppercase tracking-[0.3em] mb-4">
                How we teach
              </h4>

              <h3 className="text-3xl md:text-5xl font-black text-[#0A4D2E] leading-tight uppercase">
                The Four Pillars of{" "}
                <span className="text-[#FFC107]">Excellence</span>
              </h3>
            </div>

            <div className="h-px flex-grow bg-gray-100 hidden md:block mb-4 mx-8" />

            <BookCheck className="w-12 h-12 text-[#0A4D2E] opacity-20" />
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-[40px] border shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden ${pillar.border} ${pillar.hoverBorder} ${pillar.bg} ${pillar.hoverBg}`}
              >

                {/* Curved Corner */}
                <div
                  className={`absolute top-0 right-0 w-28 h-28 rounded-bl-[80px] border-t border-r opacity-70 transition-all duration-500 ${pillar.curve}`}
                />

                {/* Reflection Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />

                {/* Icon */}
                <div
                  className={`relative mb-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${pillar.iconBg} ${pillar.iconColor}`}
                >
                  {pillar.icon}
                </div>

                {/* Title */}
                <h5
                  className={`relative text-[1.35rem] font-black mb-4 uppercase tracking-tight transition-colors duration-500 ${pillar.iconColor}`}
                >
                  {pillar.title}
                </h5>

                {/* Description */}
                <p className="relative text-[#5a6472] text-[15px] leading-[1.9] font-medium">
                  {pillar.desc}
                </p>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Pledge Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white border-2 border-dashed border-gray-200 rounded-[50px] p-8 md:p-16 text-center"
        >

          <Award className="w-12 h-12 text-[#FFC107] mx-auto mb-6" />

          <h4 className="text-2xl md:text-3xl font-black text-[#0A4D2E] mb-6 uppercase tracking-tight">
            Our Commitment to Every Learner
          </h4>

          <p className="max-w-3xl mx-auto text-gray-500 font-medium text-lg italic">
            "We do not just prepare students for exams; we prepare
            them for life. Our history is built on the success of
            our alumni, and our future is defined by the dreams
            of the children who walk through our gates today."
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <span className="px-4 py-2 bg-[#0A4D2E]/5 rounded-full text-[#0A4D2E] text-xs font-bold uppercase tracking-widest">
              Discipline First
            </span>

            <span className="px-4 py-2 bg-[#0A4D2E]/5 rounded-full text-[#0A4D2E] text-xs font-bold uppercase tracking-widest">
              Modern Pedagogy
            </span>

            <span className="px-4 py-2 bg-[#0A4D2E]/5 rounded-full text-[#0A4D2E] text-xs font-bold uppercase tracking-widest">
              Character Focus
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Vision;