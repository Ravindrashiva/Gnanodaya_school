"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Download, 
  MapPin, 
  AlertCircle,
  Printer,
  BookOpen,
  Coffee,
  Clock,
  Flag
} from "lucide-react";

// --- EXPANDED DATA: ACADEMIC EVENTS 2026-27 ---
const academicEvents = [
  { date: "2026-06-12", title: "School Re-opens", type: "event", desc: "Orientation for all grades." },
  { date: "2026-07-15", title: "Investiture Ceremony", type: "event", desc: "Appointing the Student Council." },
  { date: "2026-08-15", title: "Independence Day", type: "holiday", desc: "National Holiday - Flag Hoisting." },
  { date: "2026-08-25", title: "Unit Test - I Begins", type: "exam", desc: "Syllabus from June & July." },
  { date: "2026-09-05", title: "Teachers Day", type: "event", desc: "Cultural celebrations." },
  { date: "2026-10-10", title: "Dasara Vacation Starts", type: "holiday", desc: "10-day festive break." },
  { date: "2026-11-14", title: "Children's Day", type: "event", desc: "Sports and fun activities." },
  { date: "2026-12-24", title: "Winter Break Starts", type: "holiday", desc: "Christmas & New Year break." },
  { date: "2027-01-14", title: "Pongal / Sankranti", type: "holiday", desc: "Traditional Harvest Festival." },
  { date: "2027-02-10", title: "Pre-Board Exams", type: "exam", desc: "For Grade X and XII." },
  { date: "2027-03-15", title: "Annual Examinations", type: "exam", desc: "Final assessment for 2026-27." },
];

const MONTHS = [
  "June", "July", "August", "September", "October", "November", 
  "December", "January", "February", "March", "April", "May"
];

export default function AcademicCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(0);
  const year = currentMonthIdx > 6 ? 2027 : 2026;

  const nextMonth = () => setCurrentMonthIdx((prev) => (prev + 1) % 12);
  const prevMonth = () => setCurrentMonthIdx((prev) => (prev === 0 ? 11 : prev - 1));

  const getDaysInMonth = (monthIdx) => {
    const monthDays = [30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30, 31];
    return monthDays[monthIdx];
  };

  const currentMonthName = MONTHS[currentMonthIdx];
  const days = Array.from({ length: getDaysInMonth(currentMonthIdx) }, (_, i) => i + 1);

  return (
    <main className="pt-32 pb-20 bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#FFC107] selection:text-[#0A4D2E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <div className="max-w-2xl">
              <span className="bg-[#0A4D2E] text-[#FFC107] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                Official 2026 - 2027 Schedule
              </span>
              <h1 className="text-7xl md:text-9xl font-black text-[#0A4D2E] tracking-tighter leading-[0.8] uppercase">
                Academic <br /> <span className="text-[#FFC107]">Planner</span>
              </h1>
              <p className="mt-8 text-gray-500 font-semibold text-lg leading-relaxed">
                A comprehensive guide to examinations, cultural milestones, and holidays for the upcoming academic session.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-white border-2 border-gray-100 text-[#0A4D2E] px-8 py-5 rounded-3xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-50 transition-all active:scale-95">
                <Printer size={18} /> Print 
              </button>
              <button className="flex items-center gap-3 bg-[#0A4D2E] text-white px-8 py-5 rounded-3xl font-black uppercase text-[10px] tracking-widest shadow-2xl shadow-[#0A4D2E]/20 hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all active:scale-95">
                <Download size={18} /> Export PDF
              </button>
            </div>
          </motion.div>
        </section>

        {/* --- DYNAMIC CALENDAR & SIDEBAR --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[4rem] border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="bg-[#0A4D2E] p-10 flex justify-between items-center text-white">
                <button onClick={prevMonth} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all"><ChevronLeft /></button>
                <div className="text-center">
                  <h2 className="text-4xl font-black uppercase tracking-tighter">{currentMonthName}</h2>
                  <p className="text-[#FFC107] text-[10px] font-black tracking-[0.5em] uppercase mt-1">{year}</p>
                </div>
                <button onClick={nextMonth} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFC107] hover:text-[#0A4D2E] transition-all"><ChevronRight /></button>
              </div>

              <div className="grid grid-cols-7 border-b border-gray-50 bg-gray-50/30">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="py-6 text-center text-[10px] font-black uppercase text-gray-400 tracking-widest">{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 p-6 gap-3">
                {days.map(day => {
                  const dateStr = `${year}-${String(currentMonthIdx + 6 > 12 ? currentMonthIdx - 6 : currentMonthIdx + 6).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const hasEvent = academicEvents.find(e => e.date.includes(dateStr));

                  return (
                    <motion.div 
                      key={day}
                      whileHover={{ y: -5 }}
                      className={`h-28 md:h-36 rounded-[2rem] border-2 p-4 transition-all flex flex-col justify-between group
                        ${hasEvent ? 'border-[#FFC107] bg-amber-50/20' : 'border-gray-50 bg-white hover:border-[#0A4D2E]/10'}
                      `}
                    >
                      <span className={`text-xl font-black ${hasEvent ? 'text-[#0A4D2E]' : 'text-gray-200 group-hover:text-[#0A4D2E]/20'}`}>
                        {day}
                      </span>
                      {hasEvent && (
                        <div className="bg-[#0A4D2E] p-3 rounded-2xl">
                          <p className="text-[9px] text-white font-black uppercase leading-none truncate mb-1">
                            {hasEvent.title}
                          </p>
                          <div className="w-4 h-[1px] bg-[#FFC107]" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#0A4D2E] p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <Clock className="absolute -right-10 -bottom-10 text-white/5" size={200} />
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-8">Up Next</h3>
              <div className="space-y-6 relative z-10">
                {academicEvents.slice(0, 4).map((e, i) => (
                  <div key={i} className="flex gap-5 items-center">
                    <div className="shrink-0 w-14 h-14 bg-[#FFC107] rounded-2xl flex items-center justify-center text-[#0A4D2E] font-black text-sm">
                      {e.date.split('-')[2]}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-white">{e.title}</p>
                      <p className="text-[10px] font-bold text-[#FFC107] uppercase tracking-widest">{MONTHS[parseInt(e.date.split('-')[1]) - 1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[4rem] border border-gray-100 shadow-xl">
              <h4 className="text-sm font-black text-[#0A4D2E] uppercase tracking-widest mb-8 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFC107]" /> Quick Legend
              </h4>
              <div className="space-y-6">
                {[
                  { icon: <BookOpen size={16}/>, label: 'Assessments', color: 'text-blue-500' },
                  { icon: <Coffee size={16}/>, label: 'Holidays', color: 'text-[#FFC107]' },
                  { icon: <Flag size={16}/>, label: 'Events', color: 'text-[#0A4D2E]' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`${item.color} bg-gray-50 p-3 rounded-xl`}>{item.icon}</div>
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* --- ACADEMIC ROADMAP / SYLLABUS SECTION --- */}
        <section className="bg-white rounded-[5rem] p-16 border border-gray-100 shadow-xl mb-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0A4D2E] uppercase tracking-tighter">Term Roadmap</h2>
            <div className="h-[2px] flex-grow mx-12 bg-gray-50 hidden md:block" />
            <span className="text-xs font-black text-gray-300 uppercase tracking-[0.3em]">Curriculum Flow</span>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { term: "Term I", focus: "Foundation", months: "June - September", details: "Emphasis on core concepts, bridge courses, and first periodic assessments." },
              { term: "Term II", focus: "Exploration", months: "October - December", details: "Integrated projects, field trips, and mid-term evaluations." },
              { term: "Term III", focus: "Excellence", months: "January - March", details: "Revision modules, pre-board mocks, and final academic results." }
            ].map((t, i) => (
              <div key={i} className="group cursor-default">
                <h4 className="text-xs font-black text-[#FFC107] uppercase tracking-widest mb-2">{t.months}</h4>
                <h3 className="text-3xl font-black text-[#0A4D2E] uppercase mb-4">{t.term}</h3>
                <div className="w-12 h-1 bg-[#0A4D2E] mb-6 group-hover:w-full transition-all duration-500" />
                <p className="text-gray-400 font-bold uppercase text-[10px] mb-4 tracking-widest">{t.focus}</p>
                <p className="text-gray-500 text-sm font-medium leading-relaxed italic">"{t.details}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FULL EVENTS TABLE (SEO OPTIMIZED) --- */}
        <section>
          <div className="mb-12">
            <h3 className="text-2xl font-black text-[#0A4D2E] uppercase tracking-tight">Full Event Directory</h3>
            <p className="text-gray-400 text-sm font-bold uppercase mt-2">Comprehensive list of all 2026-27 activities</p>
          </div>
          <div className="overflow-hidden border border-gray-100 rounded-[3rem] bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0A4D2E] text-white">
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest">Date</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest">Event Title</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest">Category</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-widest">Details</th>
                </tr>
              </thead>
              <tbody className="text-[#0A4D2E]">
                {academicEvents.map((e, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="p-8 font-black text-xs uppercase tracking-tighter">{e.date}</td>
                    <td className="p-8 font-black text-sm uppercase">{e.title}</td>
                    <td className="p-8">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest 
                        ${e.type === 'holiday' ? 'bg-amber-100 text-amber-700' : e.type === 'exam' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {e.type}
                      </span>
                    </td>
                    <td className="p-8 text-xs font-bold text-gray-400 uppercase italic leading-none">{e.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-32 p-16 bg-[#0A4D2E] rounded-[5rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">Ready for the New Year?</h2>
          <p className="text-[#FFC107] font-black text-sm uppercase tracking-widest mb-12 max-w-xl mx-auto">
            Ensure your child is prepared for the upcoming session by reviewing our curriculum standards.
          </p>
          <button className="bg-[#FFC107] text-[#0A4D2E] px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-black/20 hover:scale-105 transition-all">
            Download Prospectus
          </button>
        </div>

      </div>
    </main>
  );
}