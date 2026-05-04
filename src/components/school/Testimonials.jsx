"use client";
import React from "react";

const StarRating = () => (
  <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  { name: "Priya Reddy", role: "Parent of Class 10 Student", text: "The SSC orientation programs are excellent. The teachers really go the extra mile for the students." },
  { name: "Ravi Kumar", role: "Parent of Class 8 Student", text: "The discipline and academic focus at Gnanodaya are unmatched. My child has grown tremendously." },
  { name: "Anjali Sharma", role: "Parent of LKG Student", text: "The personal care given to LKG students is wonderful. It feels like a second home for my daughter." },
  { name: "Suresh V.", role: "Alumni (Batch of 2018)", text: "Gnanodaya gave me the foundation I needed for my engineering career. Forever grateful." },
];

export default function EnhancedTestimonials() {
  return (
    <section style={{ padding: "80px 0", background: "#0A4D2E", overflow: "hidden" }}>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 4 - 2rem * 4)); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span style={{ color: "#FFC107", fontWeight: 800, letterSpacing: "0.2em", fontSize: "12px", textTransform: "uppercase" }}>
          Community Voices
        </span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: "#fff", marginTop: "10px" }}>
          What Our Parents Say
        </h2>
      </div>

      <div className="marquee-container" style={{ display: "flex", gap: "2rem", padding: "0 1rem" }}>
        {/* Render twice for seamless looping */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            style={{
              width: "350px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "30px",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div>
              <StarRating />
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", marginBottom: "20px" }}>
                "{t.text}"
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "15px" }}>
              <h4 style={{ color: "#FFC107", margin: 0, fontSize: "16px", fontWeight: 700 }}>{t.name}</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}