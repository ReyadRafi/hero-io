import React, { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import Loader from "../components/Loader";
import PhoneMockup from "../components/PhoneMockup";
import APPS_DATA from "../data/apps";

const statItems = [
  { label: "Total Downloads", value: "29.6M", sub: "21% More Than Last Month" },
  { label: "Total Reviews",   value: "906K",  sub: "46% More Than Last Month" },
  { label: "Active Apps",     value: "132+",  sub: "31 More Will Launch"       },
];

const HomePage = ({ onNavigate }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  const topApps = APPS_DATA.slice(0, 8);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 40px 80px",
          background: "#F9FAFB",
        }}
      >
        <h1
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 8px",
            lineHeight: 1.15,
          }}
        >
          We Build{" "}
          <span style={{ color: "#6D28D9" }}>Productive</span> Apps
        </h1>

        <p
          style={{
            color: "#6B7280",
            fontSize: 16,
            maxWidth: 540,
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Store buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginBottom: 60,
          }}
        >
          {[
            {
              href: "https://play.google.com/store",
              icon: "▷",
              label: "Google Play",
            },
            {
              href: "https://apps.apple.com",
              icon: "⊕",
              label: "App Store",
            },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1.5px solid #D1D5DB",
                borderRadius: 8,
                padding: "10px 22px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "#111827",
                fontSize: 14,
                fontWeight: 600,
                background: "#fff",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#6D28D9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#D1D5DB")
              }
            >
              <span style={{ fontSize: 20 }}>{btn.icon}</span>
              {btn.label}
            </a>
          ))}
        </div>

        {/* Phone mockup */}
        <PhoneMockup />
      </section>

      {/* ── STATS BANNER ─────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #6D28D9, #4C1D95)",
          padding: "52px 60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 28,
            fontWeight: 800,
            margin: "0 0 36px",
          }}
        >
          Trusted By Millions, Built For You
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 80,
            flexWrap: "wrap",
          }}
        >
          {statItems.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 13,
                  margin: "0 0 6px",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: 42,
                  fontWeight: 800,
                  margin: "0 0 4px",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                  margin: 0,
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRENDING APPS ─────────────────────────────────────────── */}
      <section style={{ padding: "60px 60px 80px", background: "#F9FAFB" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 6px",
          }}
        >
          Trending Apps
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#6B7280",
            fontSize: 15,
            margin: "0 0 40px",
          }}
        >
          Explore All Trending Apps on the Market developed by us
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} onNavigate={onNavigate} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button
            onClick={() => onNavigate("apps")}
            style={{
              background: "#6D28D9",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 36px",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#5B21B6")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#6D28D9")
            }
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
