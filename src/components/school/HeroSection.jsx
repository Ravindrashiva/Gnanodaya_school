"use client";
import React, { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════
    ICONS (Refined)
══════════════════════════════════════════ */
const ChevronRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,18 15,12 9,6" /></svg>
);
const IconCap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3.33 2 8.67 2 12 0v-5" /></svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
);
const IconStar = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
);

function Counter({ target, suffix, run }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start = null;
    const dur = 2500;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const easeOutExpo = 1 - Math.pow(2, -10 * p);
      setN(Math.round(easeOutExpo * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [run, target]);
  return <>{n.toLocaleString()}{suffix}</>;
}

export default function GnanodayaHero() {
  const [loaded, setLoaded] = useState(false);
  const [statsRun, setStatsRun] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsRun(true); }, { threshold: 0.5 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const commonTransition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#fff", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .royal-mesh {
          background-color: #f0f7f3;
          background-image: 
            radial-gradient(at 0% 0%, rgba(255,193,7,0.05) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(10,77,46,0.05) 0px, transparent 50%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        .floating-bento { animation: float 6s ease-in-out infinite; }
        .glass-panel { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.4); }
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg); transition: 0.8s;
        }
        .btn-shine:hover::after { left: 100%; }
      `}</style>

      {/* Main Hero Section */}
      <section className="royal-mesh" style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "100px 0 120px"
      }}>
        
        {/* Background Decor */}
        <div style={{ position: "absolute", top: "15%", left: "5%", width: "300px", height: "300px", background: "rgba(10,77,46,0.03)", borderRadius: "50%", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "400px", height: "400px", background: "rgba(255,193,7,0.03)", borderRadius: "50%", filter: "blur(80px)" }} />

        <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: "80px", padding: "0 30px", position: "relative" }}>
          
          {/* Left Content */}
          <div style={{ 
            flex: "1.2", 
            opacity: loaded ? 1 : 0, 
            transform: loaded ? "translateY(0)" : "translateY(50px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)" 
          }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "#0A4D2E", padding: "10px 20px", borderRadius: 100, marginBottom: 32, boxShadow: "0 10px 20px rgba(10,77,46,0.15)" }}>
              <div style={{ width: 8, height: 8, background: "#FFC107", borderRadius: "50%" }} className="pulse-dot" />
              <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "0.2em", textTransform: "uppercase" }}>Limited Seats Available</span>
            </div>

            <h1 style={{ margin: "0 0 24px", lineHeight: 0.95 }}>
              <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontSize: "4.5rem", fontWeight: 900, color: "#0A4D2E", letterSpacing: "-0.04em" }}>Excellence.</span>
              <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontSize: "4.5rem", fontWeight: 900, fontStyle: "italic", color: "#E91E63", letterSpacing: "-0.04em" }}>Standardized.</span>
            </h1>

            <div style={{ borderLeft: "4px solid #FFC107", paddingLeft: 24, margin: "32px 0" }}>
              <p style={{ fontSize: 18, color: "#4a6356", lineHeight: 1.6, maxWidth: 500, fontWeight: 500 }}>
                Building a legacy of academic brilliance in <span style={{ color: "#0A4D2E", fontWeight: 700 }}>Madanapalle</span>. Where tradition meets modern technology.
              </p>
            </div>

            <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
              <button className="btn-shine" style={{ background: "#0A4D2E", color: "#fff", border: "none", padding: "18px 40px", borderRadius: 16, fontWeight: 800, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, transition: commonTransition }}>
                ENROLL NOW <ChevronRight size={18} />
              </button>
              <button style={{ background: "transparent", color: "#0A4D2E", border: "2px solid #0A4D2E", padding: "18px 40px", borderRadius: 16, fontWeight: 800, fontSize: 14, cursor: "pointer", transition: commonTransition }}>
                VIEW CURRICULUM
              </button>
            </div>
          </div>

          {/* Right Image: The "Royal Bento" Composition */}
          <div style={{ 
            flex: 1, 
            position: "relative",
            opacity: loaded ? 1 : 0, 
            transform: loaded ? "translateX(0)" : "translateX(60px)",
            transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }} className="floating-bento">
            
            {/* Geometric Accent */}
            <div style={{ position: "absolute", top: "-40px", left: "-40px", width: "120px", height: "120px", background: "#FFC107", borderRadius: "24px", zIndex: 1, opacity: 0.2 }} />

            {/* Main Image Container */}
            <div style={{ 
              position: "relative", 
              width: "100%", 
              height: "550px", 
              borderRadius: "40px 160px 40px 40px", 
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(10,77,46,0.15)",
              zIndex: 2,
              border: "8px solid #fff"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=85&w=800&auto=format&fit=crop" 
                alt="Students" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              {/* Image Overlay Gradient */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,77,46,0.4), transparent)" }} />
            </div>
            
            {/* Success Metric - Floating Glass */}
            <div className="glass-panel" style={{
              position: "absolute", top: "15%", right: "-40px", 
              padding: "24px", borderRadius: "24px", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)", 
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              zIndex: 3
            }}>
              <div style={{ background: "#0A4D2E", color: "#FFC107", padding: 12, borderRadius: 16 }}>
                <IconStar />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#0A4D2E" }}>4.9/5</div>
                <div style={{ fontSize: 9, color: "#4a6356", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.1em" }}>Community Rating</div>
              </div>
            </div>

            {/* Bottom Badge */}
            <div style={{
              position: "absolute", bottom: -20, left: 40, background: "#FFC107", padding: "16px 30px", borderRadius: "100px", boxShadow: "0 15px 30px rgba(255,193,7,0.3)", zIndex: 4, display: "flex", alignItems: "center", gap: 12
            }}>
              <div style={{ background: "#0A4D2E", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconCap size={16} />
              </div>
              <span style={{ color: "#0A4D2E", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em" }}>ISO 9001:2015 Certified</span>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section: High-End Horizontal Ribbon */}
      <div ref={statsRef} style={{ background: "#fff", paddingBottom: "100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 30px" }}>
          <div style={{ 
            background: "#0A4D2E", borderRadius: "32px", padding: "50px 20px", 
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", 
            boxShadow: "0 30px 60px rgba(10,77,46,0.25)",
            position: "relative", marginTop: "-60px", zIndex: 20
          }}>
            {[
              { icon: <IconCap />, val: 27, label: "Years of Legacy", sfx: "" },
              { icon: <IconUsers />, val: 2500, label: "Alumni Network", sfx: "+" },
              { icon: <IconCap />, val: 15, label: "Acre Campus", sfx: "" },
              { icon: <IconStar />, val: 100, label: "Qualitative Result", sfx: "%" }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none" }}>
                <div style={{ color: "#FFC107", marginBottom: 16, display: "flex", justifyContent: "center", opacity: 0.9 }}>{stat.icon}</div>
                <div style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>
                  <Counter target={stat.val} suffix={stat.sfx} run={statsRun} />
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.15em" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}