import React from "react";

const NotFoundPage = ({ onNavigate }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 40px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#F9FAFB",
      }}
    >
      {/* SVG illustration */}
      <div style={{ marginBottom: 36 }}>
        <svg
          width="340"
          height="280"
          viewBox="0 0 340 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground shadow */}
          <ellipse cx="170" cy="260" rx="130" ry="14" fill="#E5E7EB" />

          {/* Left leaves */}
          <ellipse
            cx="72"
            cy="88"
            rx="16"
            ry="30"
            fill="#1E3A5F"
            transform="rotate(-25 72 88)"
          />
          <ellipse
            cx="50"
            cy="120"
            rx="13"
            ry="22"
            fill="#264D73"
            transform="rotate(-45 50 120)"
          />
          <ellipse
            cx="88"
            cy="58"
            rx="10"
            ry="18"
            fill="#1A3354"
            transform="rotate(-10 88 58)"
          />

          {/* Right leaves */}
          <ellipse
            cx="268"
            cy="88"
            rx="16"
            ry="30"
            fill="#1E3A5F"
            transform="rotate(25 268 88)"
          />
          <ellipse
            cx="290"
            cy="120"
            rx="13"
            ry="22"
            fill="#264D73"
            transform="rotate(45 290 120)"
          />
          <ellipse
            cx="252"
            cy="58"
            rx="10"
            ry="18"
            fill="#1A3354"
            transform="rotate(10 252 58)"
          />

          {/* Laptop base */}
          <rect
            x="55"
            y="48"
            width="230"
            height="175"
            rx="12"
            fill="#1A1A2E"
          />
          {/* Screen */}
          <rect
            x="65"
            y="58"
            width="210"
            height="155"
            rx="6"
            fill="#F9FAFB"
          />
          {/* Browser bar */}
          <rect
            x="65"
            y="58"
            width="210"
            height="22"
            rx="6"
            fill="#E5E7EB"
          />
          <circle cx="82" cy="69" r="5" fill="#EF4444" />
          <circle cx="97" cy="69" r="5" fill="#F59E0B" />
          <circle cx="112" cy="69" r="5" fill="#10B981" />
          {/* Code tag icon */}
          <text
            x="149"
            y="73"
            fontSize="10"
            fill="#9CA3AF"
            fontFamily="monospace"
          >
            &lt;/&gt;
          </text>

          {/* 404 text */}
          <text
            x="170"
            y="160"
            textAnchor="middle"
            fontSize="76"
            fontWeight="900"
            fill="#6D28D9"
            fontFamily="Arial, sans-serif"
          >
            404
          </text>

          {/* Bottom bar of screen */}
          <rect
            x="110"
            y="200"
            width="120"
            height="8"
            rx="4"
            fill="#E5E7EB"
          />

          {/* Laptop hinge */}
          <rect
            x="55"
            y="220"
            width="230"
            height="12"
            rx="4"
            fill="#2D2D4E"
          />

          {/* Left stand arm */}
          <rect
            x="28"
            y="228"
            width="36"
            height="6"
            rx="3"
            fill="#D1D5DB"
          />
          {/* Right stand arm */}
          <rect
            x="276"
            y="228"
            width="36"
            height="6"
            rx="3"
            fill="#D1D5DB"
          />

          {/* Mouse cable */}
          <path
            d="M155 220 Q140 238 128 258"
            stroke="#6D28D9"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Mouse body */}
          <ellipse cx="126" cy="262" rx="20" ry="12" fill="#6D28D9" />
          <line
            x1="126"
            y1="256"
            x2="126"
            y2="268"
            stroke="#C4B5FD"
            strokeWidth="1.5"
          />

          {/* Plug cable */}
          <rect
            x="164"
            y="220"
            width="10"
            height="52"
            rx="5"
            fill="#C4B5FD"
          />
          {/* Plug head */}
          <rect
            x="155"
            y="268"
            width="28"
            height="14"
            rx="7"
            fill="#6D28D9"
          />
          <rect
            x="161"
            y="274"
            width="4"
            height="10"
            rx="2"
            fill="#A78BFA"
          />
          <rect
            x="173"
            y="274"
            width="4"
            height="10"
            rx="2"
            fill="#A78BFA"
          />

          {/* Decorative sparkles */}
          <circle cx="102" cy="52" r="5" fill="#DDD6FE" />
          <text x="108" y="44" fontSize="13" fill="#6D28D9">
            +
          </text>
          <text x="210" y="50" fontSize="15" fill="#6D28D9">
            ⚙
          </text>
          <text x="228" y="66" fontSize="10" fill="#C4B5FD">
            +
          </text>
          <text x="188" y="38" fontSize="11" fill="#A78BFA">
            ○
          </text>
          <text x="240" y="42" fontSize="11" fill="#C4B5FD">
            ○
          </text>
        </svg>
      </div>

      <h1
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: "#111827",
          margin: "0 0 10px",
        }}
      >
        Oops, page not found!
      </h1>
      <p
        style={{
          color: "#6B7280",
          fontSize: 16,
          margin: "0 0 28px",
        }}
      >
        The page you are looking for is not available.
      </p>

      <button
        onClick={() => onNavigate("home")}
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
        onMouseEnter={(e) => (e.currentTarget.style.background = "#5B21B6")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#6D28D9")}
      >
        Go Back!
      </button>
    </div>
  );
};

export default NotFoundPage;
