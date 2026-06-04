import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FacilitiesPreview() {
  const [activeCard, setActiveCard] = useState(2);
  const [activeStat, setActiveStat] = useState(null);
  const [activeExtra, setActiveExtra] = useState(null);

  const SLATE = "#5a6472";

  const stats = [
    {
      label: "Instant Results",
      sub: "Real-time updates",
      icon: "⚡",
      color: "#FF8C42",
      border: "#ffd4b3",
      iconBg: "#ffe8d6",
      bg: "#fff4ec",
    },
    {
      label: "Always Online",
      sub: "99.9% uptime",
      icon: "📶",
      color: "#00BFA5",
      border: "#99f6e4",
      iconBg: "#ccfbf1",
      bg: "#e8fffb",
    },
    {
      label: "Secure Campus",
      sub: "Bank-level security",
      icon: "🔒",
      color: "#7C3AED",
      border: "#d8c4ff",
      iconBg: "#ede9fe",
      bg: "#f3eeff",
    },
    {
      label: "Multi-channel",
      sub: "App · SMS · WhatsApp",
      icon: "📞",
      color: "#22C55E",
      border: "#bbf7d0",
      iconBg: "#dcfce7",
      bg: "#edfff4",
    },
  ];

  const cards = [
    {
      title: "SCERT Curriculum",
      icon: "📖",
      tag: "ESSENTIAL",
      color: "#22C55E",
      border: "#bbf7d0",
      iconBg: "#edfff4",
      tagColor: "#15803d",
      tagBg: "#dcfce7",
      bg: "#f6fff9",
      items: [
        "Telugu & English Medium",
        "SSC Board Aligned",
        "Competitive Exam Prep",
        "Regular Assessments",
      ],
    },
    {
      title: "Safe Transport",
      icon: "🚌",
      tag: "LIVE",
      color: "#00BFA5",
      border: "#99f6e4",
      iconBg: "#e8fffb",
      tagColor: "#0f766e",
      tagBg: "#ccfbf1",
      bg: "#f0fffd",
      items: [
        "Live bus location",
        "Route history log",
        "Parent notifications",
        "Last seen timestamp",
      ],
    },
    {
      title: "Alert System",
      icon: "🔔",
      tag: "INSTANT",
      color: "#FF8C42",
      border: "#ffd4b3",
      iconBg: "#fff4ec",
      tagColor: "#c2410c",
      tagBg: "#fff7ed",
      bg: "#fffaf6",
      items: [
        "Instant app notification",
        "WhatsApp for emergencies",
        "SMS fallback alert",
        "5 emergency contacts",
      ],
    },
    {
      title: "Security",
      icon: "🛡️",
      tag: "PRO",
      color: "#7C3AED",
      border: "#d8c4ff",
      iconBg: "#f3eeff",
      tagColor: "#6d28d9",
      tagBg: "#ede9fe",
      bg: "#faf7ff",
      items: [
        "CCTV surveillance",
        "Biometric entry",
        "Anti-intrusion mode",
        "Visitor QR pass",
      ],
    },
  ];

  const extras = [
    {
      icon: "🧪",
      title: "Science & IT Labs",
      desc: "Physics, Chemistry, Biology & IT from Class 6",
    },
    {
      icon: "📚",
      title: "Library & Reading",
      desc: "4000+ books in Telugu & English",
    },
    {
      icon: "🏆",
      title: "Sports & Athletics",
      desc: "Cricket, Kabaddi, Volleyball & Yoga",
    },
    {
      icon: "🎵",
      title: "Arts & Culture",
      desc: "Music, dance, drawing & festivals",
    },
  ];

  return (
    <section
      style={{
        background: "#f8fffe",
        padding: "28px 18px",
        fontFamily: "'Segoe UI', sans-serif",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              background: "#e8f5ee",
              border: "1.5px solid #a7f3d0",
              borderRadius: 999,
              padding: "6px 16px",
              fontSize: 11,
              fontWeight: 800,
              color: "#0A4D2E",
              letterSpacing: ".12em",
              textTransform: "uppercase",
            }}
          >
            🏫 Why Gnanodaya
          </span>
        </div>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontSize: "clamp(28px,4vw,46px)",
              fontWeight: 900,
              color: "#0A4D2E",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            An Ideal Home For Your Child's
            <span style={{ color: "#FFC107", display: "block" }}>
              Holistic Growth
            </span>
          </motion.h2>

          <p
            style={{
              color: SLATE,
              fontSize: 15,
              maxWidth: 700,
              margin: "10px auto 0",
              lineHeight: 1.7,
            }}
          >
            We nurture academic excellence, creativity, discipline, and
            character through world-class facilities designed for future-ready
            learning.
          </p>

          <div
            style={{
              width: 70,
              height: 4,
              background: "#FFC107",
              borderRadius: 4,
              margin: "14px auto 0",
            }}
          />
        </div>

        {/* Stat Pills */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            marginBottom: 18,
          }}
        >
          {stats.map((s, i) => {
            const isActive = activeStat === i;

            return (
              <motion.div
                key={i}
                whileHover={{ translateY: -3 }}
                onClick={() => setActiveStat(isActive ? null : i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 18,
                  cursor: "pointer",
                  background: s.bg,
                  border: `2px solid ${isActive ? s.color : s.border}`,
                  boxShadow: isActive
                    ? `0 0 0 3px ${s.color}20`
                    : "0 2px 10px rgba(0,0,0,0.03)",
                  transition: "all .25s ease",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    fontSize: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: s.iconBg,
                    border: `2px solid ${s.border}`,
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>

                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#1a1a2e",
                    }}
                  >
                    {s.label}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: SLATE,
                      marginTop: 2,
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginBottom: 18,
          }}
        >
          {cards.map((c, i) => {
            const isActive = activeCard === i;

            return (
              <motion.div
                key={i}
                whileHover={{ translateY: -5 }}
                onClick={() => setActiveCard(isActive ? null : i)}
                style={{
                  background: isActive ? c.bg : "#fff",
                  borderRadius: 18,
                  padding: "18px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: `${isActive ? "2.5px" : "1.5px"} solid ${
                    isActive ? c.color : "#e8edf0"
                  }`,
                  boxShadow: isActive
                    ? `0 10px 28px ${c.color}18`
                    : "0 4px 16px rgba(0,0,0,0.04)",
                  transition: "all .25s ease",
                }}
              >
                {/* Accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 18,
                    height: 4,
                    borderRadius: "0 0 6px 6px",
                    background: c.color,
                    width: isActive ? "calc(100% - 36px)" : 60,
                    transition: "width .3s",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      fontSize: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: c.iconBg,
                      border: `2px solid ${c.border}`,
                    }}
                  >
                    {c.icon}
                  </div>

                  <span
                    style={{
                      padding: "5px 10px",
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: c.tagColor,
                      background: c.tagBg,
                      border: `1.5px solid ${c.color}`,
                    }}
                  >
                    {c.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#1a1a2e",
                    marginBottom: 8,
                  }}
                >
                  {c.title}
                </h3>

                <div
                  style={{
                    height: 4,
                    borderRadius: 4,
                    background: c.color,
                    marginBottom: 14,
                    width: isActive ? 60 : 34,
                    transition: "width .3s",
                  }}
                />

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {c.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: SLATE,
                        lineHeight: 1.45,
                      }}
                    >
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          flexShrink: 0,
                          background: c.color,
                          boxShadow: `0 0 0 2px ${c.border}`,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    position: "absolute",
                    bottom: -30,
                    right: -30,
                    width: isActive ? 110 : 90,
                    height: isActive ? 110 : 90,
                    borderRadius: "50%",
                    background: c.color,
                    opacity: isActive ? 0.1 : 0.05,
                    transition: "all .3s",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Extras */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 14,
            marginBottom: 20,
          }}
        >
          {extras.map((e, i) => {
            const isActive = activeExtra === i;

            return (
              <motion.div
                key={i}
                whileHover={{ translateY: -2 }}
                onClick={() => setActiveExtra(isActive ? null : i)}
                style={{
                  background: "#fff",
                  border: `1.5px solid ${
                    isActive ? "#0A4D2E" : "#e8edf0"
                  }`,
                  borderRadius: 14,
                  padding: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  transition: "all .22s ease",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "#f0fdf4",
                    border: "2px solid #bbf7d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {e.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: "#0A4D2E",
                    }}
                  >
                    {e.title}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      color: SLATE,
                      marginTop: 3,
                      lineHeight: 1.45,
                    }}
                  >
                    {e.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            background: "#fff",
            border: "1.5px solid #d1fae5",
            borderRadius: 16,
            padding: "16px 20px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.03)",
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: SLATE,
              fontWeight: 500,
            }}
          >
            Interested in a campus visit?
          </span>

          <button
            style={{
              background: "#0A4D2E",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "11px 20px",
              fontWeight: 800,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Contact Admissions →
          </button>
        </div>
      </div>
    </section>
  );
}