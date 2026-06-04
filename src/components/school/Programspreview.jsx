import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FacilitiesPreview() {
  const [activeCard, setActiveCard] = useState(2);
  const [activeStat, setActiveStat] = useState(null);
  const [activeExtra, setActiveExtra] = useState(null);

  const stats = [
    { label: "Instant Results", sub: "Real-time updates", icon: "⚡", color: "#FF8C42", border: "#ffd4b3", iconBg: "#ffe8d6", bg: "#fff4ec" },
    { label: "Always Online", sub: "99.9% uptime", icon: "📶", color: "#00BFA5", border: "#99f6e4", iconBg: "#ccfbf1", bg: "#e8fffb" },
    { label: "Secure Campus", sub: "Bank-level security", icon: "🔒", color: "#7C3AED", border: "#d8c4ff", iconBg: "#ede9fe", bg: "#f3eeff" },
    { label: "Multi-channel", sub: "App · SMS · WhatsApp", icon: "📞", color: "#22C55E", border: "#bbf7d0", iconBg: "#dcfce7", bg: "#edfff4" },
  ];

  const cards = [
    {
      title: "SCERT Curriculum", icon: "📖", tag: "ESSENTIAL",
      color: "#22C55E", border: "#bbf7d0", iconBg: "#edfff4",
      tagColor: "#15803d", tagBg: "#dcfce7", bg: "#f6fff9",
      items: ["Telugu & English Medium", "SSC Board Aligned", "Competitive Exam Prep", "Regular Assessments"],
    },
    {
      title: "Safe Transport", icon: "🚌", tag: "LIVE",
      color: "#00BFA5", border: "#99f6e4", iconBg: "#e8fffb",
      tagColor: "#0f766e", tagBg: "#ccfbf1", bg: "#f0fffd",
      items: ["Live bus location", "Route history log", "Parent notifications", "Last seen timestamp"],
    },
    {
      title: "Alert System", icon: "🔔", tag: "INSTANT",
      color: "#FF8C42", border: "#ffd4b3", iconBg: "#fff4ec",
      tagColor: "#c2410c", tagBg: "#fff7ed", bg: "#fffaf6",
      items: ["Instant app notification", "WhatsApp for emergencies", "SMS fallback alert", "5 emergency contacts"],
    },
    {
      title: "Security", icon: "🛡️", tag: "PRO",
      color: "#7C3AED", border: "#d8c4ff", iconBg: "#f3eeff",
      tagColor: "#6d28d9", tagBg: "#ede9fe", bg: "#faf7ff",
      items: ["CCTV surveillance", "Biometric entry", "Anti-intrusion mode", "Visitor QR pass"],
    },
  ];

  const extras = [
    { icon: "🧪", title: "Science & IT Labs", desc: "Physics, Chemistry, Biology & IT from Class 6" },
    { icon: "📚", title: "Library & Reading", desc: "4000+ books in Telugu & English" },
    { icon: "🏆", title: "Sports & Athletics", desc: "Cricket, Kabaddi, Volleyball & Yoga" },
    { icon: "🎵", title: "Arts & Culture", desc: "Music, dance, drawing & festivals" },
  ];

  const SLATE = "#5a6472";

  return (
    <section style={{ background: "#f8fffe", padding: "40px 20px", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <span style={{
          background: "#e8f5ee", border: `1.5px solid #a7f3d0`,
          borderRadius: 50, padding: "7px 20px", fontSize: 11,
          fontWeight: 800, color: "#0A4D2E", letterSpacing: ".15em", textTransform: "uppercase",
        }}>🏫 Why Gnanodaya</span>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          style={{ fontSize: "clamp(22px,4.5vw,40px)", fontWeight: 900, color: "#0A4D2E", lineHeight: 1.15, letterSpacing: "-.02em", margin: 0 }}
        >
          An Ideal Home For Your Child's
          <span style={{ color: "#FFC107", display: "block" }}>Holistic Growth</span>
        </motion.h2>
        <p style={{ color: SLATE, fontSize: 14, maxWidth: 480, margin: "10px auto 0", lineHeight: 1.65 }}>
          We nurture academic excellence, creativity, discipline, and character through world-class facilities designed for future-ready learning.
        </p>
        <div style={{ width: 70, height: 3, background: "#FFC107", borderRadius: 4, margin: "14px auto 0" }} />
      </div>

      {/* Stat Pills */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
        {stats.map((s, i) => {
          const isActive = activeStat === i;
          return (
            <motion.div
              key={i}
              whileHover={{ translateY: -3 }}
              onClick={() => setActiveStat(isActive ? null : i)}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "15px 16px", borderRadius: 16, cursor: "pointer",
                background: s.bg,
                border: `2px solid ${isActive ? s.color : s.border}`,
                boxShadow: isActive ? `0 0 0 3px ${s.color}33` : "none",
                transition: "all .25s",
              }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 12, fontSize: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: s.iconBg, border: `2px solid ${s.border}`, flexShrink: 0,
              }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{s.label}</div>
                <div style={{ fontSize: 11, color: SLATE, marginTop: 2 }}>{s.sub}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Feature Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 16 }}>
        {cards.map((c, i) => {
          const isActive = activeCard === i;
          return (
            <motion.div
              key={i}
              whileHover={{ translateY: -4 }}
              onClick={() => setActiveCard(isActive ? null : i)}
              style={{
                background: isActive ? c.bg : "#fff",
                borderRadius: 20, padding: "24px 20px 20px",
                position: "relative", overflow: "hidden", cursor: "pointer",
                border: `${isActive ? "2.5px" : "2px"} solid ${isActive ? c.color : "#e8edf0"}`,
                boxShadow: isActive ? `0 8px 32px ${c.color}22` : "none",
                transition: "all .25s",
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: "absolute", top: 0, left: 20,
                height: 4, borderRadius: "0 0 4px 4px",
                background: c.color,
                width: isActive ? "calc(100% - 40px)" : 60,
                transition: "width .3s",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, fontSize: 26,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: c.iconBg, border: `2px solid ${c.border}`,
                }}>{c.icon}</div>
                <span style={{
                  padding: "5px 13px", borderRadius: 50, fontSize: 10,
                  fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase",
                  color: c.tagColor, background: c.tagBg, border: `2px solid ${c.color}`,
                }}>{c.tag}</span>
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a1a2e", marginBottom: 7 }}>{c.title}</h3>
              <div style={{
                height: 3, borderRadius: 3, background: c.color, marginBottom: 14,
                width: isActive ? 64 : 36, transition: "width .3s",
              }} />

              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {c.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: SLATE }}>
                    <span style={{
                      width: 9, height: 9, borderRadius: "50%", flexShrink: 0,
                      background: c.color, boxShadow: `0 0 0 2px ${c.border}`,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Blob */}
              <div style={{
                position: "absolute", bottom: -20, right: -20,
                width: isActive ? 110 : 90, height: isActive ? 110 : 90,
                borderRadius: "50%", background: c.color,
                opacity: isActive ? 0.12 : 0.07, transition: "all .3s",
              }} />
            </motion.div>
          );
        })}
      </div>

      {/* Extras */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 18 }}>
        {extras.map((e, i) => {
          const isActive = activeExtra === i;
          return (
            <motion.div
              key={i}
              whileHover={{ translateY: -2 }}
              onClick={() => setActiveExtra(isActive ? null : i)}
              style={{
                background: "#fff",
                border: `2px solid ${isActive ? "#0A4D2E" : "#e8edf0"}`,
                borderRadius: 14, padding: "14px 16px",
                display: "flex", alignItems: "center", gap: 12,
                cursor: "pointer", transition: "all .22s",
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: "#f0fdf4", border: "2px solid #bbf7d0",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0,
              }}>{e.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#0A4D2E" }}>{e.title}</div>
                <div style={{ fontSize: 11, color: SLATE, marginTop: 2, lineHeight: 1.4 }}>{e.desc}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        background: "#fff", border: "2px solid #d1fae5", borderRadius: 14, padding: "16px 24px",
      }}>
        <span style={{ fontSize: 14, color: SLATE }}>Interested in a campus visit?</span>
        <button style={{
          background: "#0A4D2E", color: "#fff", border: "none",
          borderRadius: 10, padding: "11px 22px", fontWeight: 800,
          fontSize: 13, cursor: "pointer",
        }}>Contact Admissions →</button>
      </div>

    </section>
  );
}