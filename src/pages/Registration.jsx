import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, User, GraduationCap, Users, MapPin, Send, ChevronDown } from 'lucide-react';

const G  = '#1a5c38';
const GD = '#06371c';
const AU = '#f5a623';
const CR = '#f5f4f0';

const RESET = {
  margin: 0, padding: 0, border: 0, boxSizing: 'border-box',
  fontFamily: 'inherit', lineHeight: 'normal',
};

function useFocus() {
  const [f, setF] = useState(false);
  return [f, () => setF(true), () => setF(false)];
}

function Label({ children, req }) {
  return (
    <div style={{ ...RESET, display: 'block', fontSize: '10px', fontWeight: 900,
      textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '5px', color: '#64748b' }}>
      {children}{req && <span style={{ color: AU }}> *</span>}
    </div>
  );
}

function FInput({ placeholder, value, onChange, type = 'text' }) {
  const [foc, onFoc, onBlur] = useFocus();
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder}
      style={{ ...RESET, display: 'block', width: '100%', padding: '10px 14px',
        borderRadius: '10px', border: `1.5px solid ${foc ? G : '#e2e8f0'}`,
        backgroundColor: '#fff', color: '#1e293b', fontSize: '13.5px', fontWeight: 500,
        outline: 'none', boxShadow: foc ? `0 0 0 3px ${G}18` : 'none',
        transition: 'border-color .15s, box-shadow .15s',
      }}
      onFocus={onFoc} onBlur={onBlur}
    />
  );
}

function FSelect({ value, onChange, children }) {
  const [foc, onFoc, onBlur] = useFocus();
  return (
    <div style={{ ...RESET, position: 'relative' }}>
      <select value={value} onChange={onChange}
        style={{ ...RESET, display: 'block', width: '100%', padding: '10px 36px 10px 14px',
          borderRadius: '10px', border: `1.5px solid ${foc ? G : '#e2e8f0'}`,
          backgroundColor: '#fff', color: value ? '#1e293b' : '#94a3b8',
          fontSize: '13.5px', fontWeight: 500, outline: 'none', cursor: 'pointer',
          appearance: 'none', boxShadow: foc ? `0 0 0 3px ${G}18` : 'none',
          transition: 'border-color .15s, box-shadow .15s',
        }}
        onFocus={onFoc} onBlur={onBlur}
      >{children}</select>
      <ChevronDown size={13} style={{ position: 'absolute', right: '12px', top: '50%',
        transform: 'translateY(-50%)', pointerEvents: 'none', color: '#94a3b8' }} />
    </div>
  );
}

function FTextarea({ placeholder, value, onChange }) {
  const [foc, onFoc, onBlur] = useFocus();
  return (
    <textarea rows={3} value={value} onChange={onChange} placeholder={placeholder}
      style={{ ...RESET, display: 'block', width: '100%', padding: '10px 14px',
        borderRadius: '10px', border: `1.5px solid ${foc ? G : '#e2e8f0'}`,
        backgroundColor: '#fff', color: '#1e293b', fontSize: '13.5px', fontWeight: 500,
        outline: 'none', resize: 'none', boxShadow: foc ? `0 0 0 3px ${G}18` : 'none',
        transition: 'border-color .15s, box-shadow .15s',
      }}
      onFocus={onFoc} onBlur={onBlur}
    />
  );
}

function SecHead({ icon: Icon, title }) {
  return (
    <div style={{ ...RESET, display: 'flex', alignItems: 'center', gap: '10px',
      paddingBottom: '10px', marginBottom: '14px',
      borderBottom: '1.5px solid #f1f5f9' }}>
      <div style={{ ...RESET, width: '28px', height: '28px', borderRadius: '8px',
        backgroundColor: `${AU}22`, display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={13} style={{ color: AU }} />
      </div>
      <span style={{ ...RESET, fontSize: '12px', fontWeight: 900, textTransform: 'uppercase',
        letterSpacing: '0.15em', color: GD }}>{title}</span>
    </div>
  );
}

/* 2-col grid */
function G2({ children }) {
  return (
    <div style={{ ...RESET, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      {children}
    </div>
  );
}

/* 3-col grid */
function G3({ children }) {
  return (
    <div style={{ ...RESET, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
      {children}
    </div>
  );
}

/* field wrapper — ZERO extra margin */
function F({ label, req, children }) {
  return (
    <div style={{ ...RESET }}>
      <Label req={req}>{label}</Label>
      {children}
    </div>
  );
}

/* horizontal divider */
function HR() {
  return <div style={{ ...RESET, height: '1px', backgroundColor: '#f1f5f9', margin: '4px 0' }} />;
}

export default function Registration() {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    sName:'', gender:'', dob:'', aadhar:'', blood:'',
    pSchool:'', pClass:'', grade:'', applyClass:'',
    dad:'', mum:'', occ:'', mobile:'', email:'',
    addr:'', city:'', state:'', pin:'',
  });
  const s = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.sName || !form.gender || !form.dob || !form.mobile || !form.applyClass) {
      alert('Please fill all required fields.'); return;
    }
    setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── full-width breakout wrapper ── */
  const wrap = {
    ...RESET,
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
    width: '100vw',
    backgroundColor: CR,
    overflowX: 'hidden',
  };

  /* ── SUCCESS ── */
  if (done) {
    return (
      <div style={{ ...wrap, minHeight: '80vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
        <motion.div initial={{ scale: .85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          style={{ ...RESET, backgroundColor: GD, borderRadius: '24px', padding: '44px 36px',
            maxWidth: '380px', width: '100%', textAlign: 'center',
            boxShadow: `0 20px 60px ${GD}50` }}>
          <div style={{ ...RESET, width: '52px', height: '52px', borderRadius: '50%',
            backgroundColor: AU, display: 'flex', alignItems: 'center',
            justifyContent: 'center', margin: '0 auto 18px' }}>
            <Send size={20} style={{ color: GD }} />
          </div>
          <div style={{ ...RESET, color: '#fff', fontSize: '22px', fontWeight: 900,
            textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '10px' }}>
            Application Submitted!
          </div>
          <div style={{ ...RESET, color: '#cbd5e1', fontSize: '13px', lineHeight: 1.6, marginBottom: '26px' }}>
            Thank you, <strong style={{ color: AU }}>{form.sName}</strong>!<br />
            Our team will contact you within 2 working days.
          </div>
          <button onClick={() => navigate('/')}
            style={{ ...RESET, display: 'block', width: '100%', padding: '13px',
              borderRadius: '12px', backgroundColor: AU, color: GD, cursor: 'pointer',
              fontWeight: 900, fontSize: '11px', textTransform: 'uppercase',
              letterSpacing: '0.2em' }}>
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  /* ── MAIN ── */
  return (
    <div style={wrap}>

      {/* BANNER */}
      <div style={{ ...RESET,
        background: `linear-gradient(135deg, ${GD} 0%, #0f4228 55%, ${G} 100%)`,
        padding: '24px 24px 44px', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position:'absolute', right:0, bottom:0, opacity:.12, pointerEvents:'none' }}
          width="360" height="140" viewBox="0 0 360 140" fill="none">
          <path d="M340 0 Q260 65 170 46 Q80 28 0 90" stroke={AU} strokeWidth="1.5" fill="none"/>
          <path d="M360 32 Q280 92 190 72 Q100 52 10 112" stroke={AU} strokeWidth="1" fill="none"/>
          <path d="M360 64 Q290 110 200 92 Q110 74 20 132" stroke={AU} strokeWidth=".5" fill="none"/>
        </svg>
        {/* top bar */}
        <div style={{ ...RESET, maxWidth:'880px', margin:'0 auto 18px',
          display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <button onClick={() => navigate(-1)}
            style={{ ...RESET, display:'flex', alignItems:'center', gap:'5px',
              background:'none', cursor:'pointer', color:'rgba(255,255,255,.8)',
              fontSize:'10px', fontWeight:900, textTransform:'uppercase', letterSpacing:'0.2em' }}>
            <ArrowLeft size={12} /> Back
          </button>
          <div style={{ ...RESET, display:'flex', alignItems:'center', gap:'5px' }}>
            <Zap size={11} style={{ color: AU }} fill={AU} />
            <span style={{ ...RESET, fontSize:'9px', fontWeight:900, textTransform:'uppercase',
              letterSpacing:'0.22em', color: AU }}>Academic Portal 2026</span>
          </div>
        </div>
        {/* title */}
        <div style={{ ...RESET, textAlign:'center', position:'relative', zIndex:1 }}>
          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:.4 }}
            style={{ ...RESET, fontSize:'clamp(36px,8vw,78px)', fontWeight:900,
              textTransform:'uppercase', letterSpacing:'-0.02em', lineHeight:1 }}>
            <span style={{ color:'#fff' }}>Digital </span>
            <span style={{ color: AU }}>Admission</span>
          </motion.div>
          <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:.1, duration:.35 }}
            style={{ ...RESET, color:'#cbd5e1', fontSize:'13px', fontWeight:500, marginTop:'8px' }}>
            Fill in the details below to complete your admission application
          </motion.div>
        </div>
      </div>

      {/* FORM AREA */}
      <div style={{ ...RESET, backgroundColor: CR, padding:'0 16px 40px' }}>
        <div style={{ ...RESET, maxWidth:'880px', margin:'0 auto' }}>

          {/* white card */}
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:.18, duration:.4 }}
            style={{ ...RESET, backgroundColor:'#fff', borderRadius:'20px',
              boxShadow:'0 6px 40px rgba(0,0,0,.09)', border:'1px solid #e4ebe4',
              marginTop:'-22px', padding:'28px 32px' }}>

            {/* ── STUDENT ── */}
            <SecHead icon={User} title="Student Details" />
            <div style={{ ...RESET, display:'flex', flexDirection:'column', gap:'10px', marginBottom:'20px' }}>
              <F label="Student Full Name" req><FInput placeholder="Enter student's full name" value={form.sName} onChange={s('sName')} /></F>
              <G2>
                <F label="Gender" req>
                  <FSelect value={form.gender} onChange={s('gender')}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </FSelect>
                </F>
                <F label="Date of Birth" req><FInput type="date" value={form.dob} onChange={s('dob')} /></F>
              </G2>
              <G2>
                <F label="Aadhaar Number (Optional)"><FInput placeholder="XXXX XXXX XXXX" value={form.aadhar} onChange={s('aadhar')} /></F>
                <F label="Blood Group">
                  <FSelect value={form.blood} onChange={s('blood')}>
                    <option value="">Select Group</option>
                    {['A+','A−','B+','B−','O+','O−','AB+','AB−'].map(g=><option key={g} value={g}>{g}</option>)}
                  </FSelect>
                </F>
              </G2>
            </div>

            <HR />

            {/* ── ACADEMIC ── */}
            <div style={{ ...RESET, marginTop:'18px' }}>
              <SecHead icon={GraduationCap} title="Academic Details" />
              <div style={{ ...RESET, display:'flex', flexDirection:'column', gap:'10px', marginBottom:'20px' }}>
                <G2>
                  <F label="Previous School Name"><FInput placeholder="Enter school name" value={form.pSchool} onChange={s('pSchool')} /></F>
                  <F label="Previous Class">
                    <FSelect value={form.pClass} onChange={s('pClass')}>
                      <option value="">Select Class</option>
                      {['LKG','UKG','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'].map(c=><option key={c} value={c}>{c}</option>)}
                    </FSelect>
                  </F>
                </G2>
                <G2>
                  <F label="Marks / Grade Obtained">
                    <FSelect value={form.grade} onChange={s('grade')}>
                      <option value="">Select Grade</option>
                      <option value="o">O Grade (Outstanding)</option>
                      <option value="a+">A+ Grade</option>
                      <option value="a">A Grade</option>
                      <option value="b+">B+ Grade</option>
                      <option value="b">B Grade</option>
                      <option value="c">C Grade</option>
                    </FSelect>
                  </F>
                  <F label="Class Applying For" req>
                    <FSelect value={form.applyClass} onChange={s('applyClass')}>
                      <option value="">Select Class</option>
                      {['LKG','UKG','1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'].map(c=><option key={c} value={c}>{c}</option>)}
                    </FSelect>
                  </F>
                </G2>
              </div>
            </div>

            <HR />

            {/* ── PARENT ── */}
            <div style={{ ...RESET, marginTop:'18px' }}>
              <SecHead icon={Users} title="Parent Details" />
              <div style={{ ...RESET, display:'flex', flexDirection:'column', gap:'10px', marginBottom:'20px' }}>
                <G2>
                  <F label="Father's Name"><FInput placeholder="Enter father's name" value={form.dad} onChange={s('dad')} /></F>
                  <F label="Mother's Name"><FInput placeholder="Enter mother's name" value={form.mum} onChange={s('mum')} /></F>
                </G2>
                <G2>
                  <F label="Occupation"><FInput placeholder="Parent's occupation" value={form.occ} onChange={s('occ')} /></F>
                  <F label="Mobile Number" req><FInput type="tel" placeholder="10-digit mobile number" value={form.mobile} onChange={s('mobile')} /></F>
                </G2>
                <F label="Email Address"><FInput type="email" placeholder="email@example.com" value={form.email} onChange={s('email')} /></F>
              </div>
            </div>

            <HR />

            {/* ── ADDRESS ── */}
            <div style={{ ...RESET, marginTop:'18px' }}>
              <SecHead icon={MapPin} title="Address Details" />
              <div style={{ ...RESET, display:'flex', flexDirection:'column', gap:'10px', marginBottom:'24px' }}>
                <F label="Full Address"><FTextarea placeholder="House no., street name, area..." value={form.addr} onChange={s('addr')} /></F>
                <G3>
                  <F label="City"><FInput placeholder="City" value={form.city} onChange={s('city')} /></F>
                  <F label="State">
                    <FSelect value={form.state} onChange={s('state')}>
                      <option value="">Select State</option>
                      {['Andhra Pradesh','Telangana','Karnataka','Tamil Nadu','Kerala','Maharashtra',
                        'Delhi','Uttar Pradesh','West Bengal','Rajasthan','Gujarat','Punjab',
                        'Madhya Pradesh','Odisha','Bihar','Haryana'].map(st=><option key={st} value={st}>{st}</option>)}
                    </FSelect>
                  </F>
                  <F label="Pincode"><FInput placeholder="500001" value={form.pin} onChange={s('pin')} /></F>
                </G3>
              </div>
            </div>

            {/* SUBMIT */}
            <motion.button whileHover={{ scale:1.012 }} whileTap={{ scale:.98 }}
              onClick={submit}
              style={{ ...RESET, display:'flex', alignItems:'center', justifyContent:'center',
                gap:'9px', width:'100%', padding:'16px', borderRadius:'14px',
                backgroundColor: GD, color:'#fff', cursor:'pointer',
                fontWeight:900, fontSize:'12px', textTransform:'uppercase',
                letterSpacing:'0.2em', boxShadow:`0 6px 28px ${GD}40` }}>
              <Send size={14} style={{ color: AU }} />
              Submit Application
            </motion.button>

          </motion.div>

          {/* footer */}
          <div style={{ ...RESET, textAlign:'center', fontSize:'11px', color:'#94a3b8',
            marginTop:'16px', fontWeight:500, paddingBottom:'8px' }}>
            By submitting, you agree to our admissions terms and privacy policy.<br />
            Gnanodaya English Medium High School · Madanapalle
          </div>

        </div>
      </div>

    </div>
  );
}