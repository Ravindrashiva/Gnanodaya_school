"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  User, Calendar, Phone, Home, BookOpen, Send,
  CheckCircle, ArrowLeft, Shield, Info, Zap, 
  MapPin, GraduationCap, Users, Mail, Briefcase, Droplets
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }),
};

const Field = ({ label, children, span = '' }) => (
  <div className={`space-y-2 ${span}`}>
    <label className="block text-[11px] font-black uppercase tracking-[0.25em] text-[#052c1e]/50 ml-1">
      {label}
    </label>
    {children}
  </div>
);

const inputCls = "w-full px-5 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] font-bold text-[#052c1e] placeholder-slate-300 transition-all";
const iconInputCls = "w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-[#FFC107]/20 focus:border-[#FFC107] font-bold text-[#052c1e] placeholder-slate-300 transition-all";

export default function Registration() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Student Details
    studentName: '',
    gender: '',
    dateOfBirth: '',
    aadhaarNumber: '',
    bloodGroup: '',
    // Academic Details
    previousSchool: '',
    previousClass: '',
    marksGrade: '',
    gradeApplyingFor: '',
    // Parent Details
    fatherName: '',
    motherName: '',
    occupation: '',
    mobileNumber: '',
    email: '',
    // Address Details
    fullAddress: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-lg w-full bg-white rounded-[3rem] shadow-2xl border-t-[12px] border-[#052c1e] p-12 text-center"
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12 }}
            className="w-24 h-24 bg-[#052c1e] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_15px_30px_rgba(5,44,30,0.2)]"
          >
            <CheckCircle size={48} className="text-[#FFC107]" />
          </motion.div>
          <h2 className="text-4xl font-black text-[#052c1e] uppercase tracking-tighter">Thank You</h2>
          <p className="mt-4 text-slate-500 font-bold">Application for <span className="text-[#052c1e]">{formData.studentName}</span> received.</p>
          <button onClick={() => navigate('/')} className="mt-10 w-full py-5 bg-[#052c1e] text-[#FFC107] rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all">
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] selection:bg-[#FFC107] selection:text-[#052c1e]">
      <div className="bg-[#052c1e] px-8 py-5 flex items-center justify-between border-b border-white/5">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-[#FFC107] transition-all text-xs font-black uppercase tracking-widest">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-3">
          <Zap size={14} className="text-[#FFC107] fill-[#FFC107]" />
          <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Academic Portal 2026</span>
        </div>
      </div>

      <div className="bg-[#052c1e] px-6 pt-12 pb-24 relative overflow-hidden text-center">
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1} className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
          Digital <span className="text-[#FFC107]">Admission</span>
        </motion.h1>
      </div>

      <div className="mx-auto max-w-4xl px-6 -mt-12 pb-32">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2} className="bg-white rounded-[3rem] shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-16">
            
            {/* 1. STUDENT DETAILS */}
            <div className="space-y-8">
              <div className="flex items-center gap-4"><User className="text-[#FFC107]" /><h3 className="font-black text-[#052c1e] uppercase text-xl">Student Details</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="Student Full Name *" span="md:col-span-2">
                  <input required name="studentName" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Gender *">
                  <select required name="gender" onChange={handleChange} className={inputCls}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Date of Birth *">
                  <input required name="dateOfBirth" onChange={handleChange} type="date" className={inputCls} />
                </Field>
                <Field label="Aadhaar Number (Optional)">
                  <input name="aadhaarNumber" onChange={handleChange} type="text" placeholder="XXXX XXXX XXXX" className={inputCls} />
                </Field>
                <Field label="Blood Group">
                  <select name="bloodGroup" onChange={handleChange} className={inputCls}>
                    <option value="">Select Group</option>
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                  </select>
                </Field>
              </div>
            </div>

            {/* 2. ACADEMIC DETAILS */}
            <div className="space-y-8">
              <div className="flex items-center gap-4"><GraduationCap className="text-[#FFC107]" /><h3 className="font-black text-[#052c1e] uppercase text-xl">Academic Details</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="Previous School Name" span="md:col-span-2">
                  <input name="previousSchool" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Previous Class">
                  <input name="previousClass" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Marks / Grade">
                  <input name="marksGrade" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Class Applying For *" span="md:col-span-2">
                  <select required name="gradeApplyingFor" onChange={handleChange} className={inputCls}>
                    <option value="">Select Target Class</option>
                    {['LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </Field>
              </div>
            </div>

            {/* 3. PARENT DETAILS */}
            <div className="space-y-8">
              <div className="flex items-center gap-4"><Users className="text-[#FFC107]" /><h3 className="font-black text-[#052c1e] uppercase text-xl">Parent Details</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="Father Name *">
                  <input required name="fatherName" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Mother Name *">
                  <input required name="motherName" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Occupation">
                  <input name="occupation" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Mobile Number *">
                  <input required name="mobileNumber" onChange={handleChange} type="tel" className={inputCls} />
                </Field>
                <Field label="Email Address" span="md:col-span-2">
                  <input name="email" onChange={handleChange} type="email" placeholder="email@example.com" className={inputCls} />
                </Field>
              </div>
            </div>

            {/* 4. ADDRESS DETAILS */}
            <div className="space-y-8">
              <div className="flex items-center gap-4"><MapPin className="text-[#FFC107]" /><h3 className="font-black text-[#052c1e] uppercase text-xl">Address Details</h3></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="Full Address *" span="md:col-span-2">
                  <textarea required name="fullAddress" onChange={handleChange} rows={3} className={`${inputCls} resize-none`} />
                </Field>
                <Field label="City *">
                  <input required name="city" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="State *">
                  <input required name="state" onChange={handleChange} type="text" className={inputCls} />
                </Field>
                <Field label="Pincode *">
                  <input required name="pincode" onChange={handleChange} type="text" className={inputCls} />
                </Field>
              </div>
            </div>

            <button disabled={loading} type="submit" className="w-full bg-[#052c1e] text-[#FFC107] py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-4 group disabled:opacity-70">
              {loading ? <div className="w-6 h-6 border-4 border-[#FFC107]/20 border-t-[#FFC107] rounded-full animate-spin" /> : <>Submit Registration <Send size={20} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}