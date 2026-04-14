import React from "react";

const socialLinks = [
  { label: "𝕏", href: "https://twitter.com" },
  { label: "in", href: "https://linkedin.com" },
  { label: "f", href: "https://facebook.com" },
];

const Footer = ({ onNavigate }) => {
  return (
    <footer
      style={{
        background: "#0D1B2A",
        color: "#fff",
        padding: "40px 60px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 32,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: 0,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <polygon points="4,3 28,16 4,29" fill="#6D28D9" />
            <polygon points="13,10 28,16 13,22" fill="#3B82F6" />
          </svg>
          <span
            style={{
              fontWeight: 800,
              fontSize: 17,
              color: "#fff",
              letterSpacing: -0.5,
            }}
          >
            HERO.IO
          </span>
        </button>

        {/* Social links */}
        <div>
          <p
            style={{
              margin: "0 0 12px",
              fontWeight: 600,
              fontSize: 15,
              color: "#fff",
              textAlign: "right",
            }}
          >
            Social Links
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "flex-end",
            }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#1E2D3D",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#6D28D9")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#1E2D3D")
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: "1px solid #1E2D3D",
          paddingTop: 20,
          textAlign: "center",
          color: "#6B7280",
          fontSize: 13,
        }}
      >
        Copyright © 2026 – All right reserved
      </div>
    </footer>
  );
};

export default Footer;
