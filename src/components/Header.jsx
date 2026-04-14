import React from "react";

const Logo = ({ onNavigate }) => (
  <button
    onClick={() => onNavigate("home")}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 8,
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
        color: "#111827",
        letterSpacing: -0.5,
      }}
    >
      HERO.IO
    </span>
  </button>
);

const NavLink = ({ label, target, active, onNavigate }) => (
  <button
    onClick={() => onNavigate(target)}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 15,
      fontWeight: 500,
      padding: "4px 0",
      color: active ? "#6D28D9" : "#374151",
      borderBottom: active ? "2px solid #6D28D9" : "2px solid transparent",
      transition: "color 0.2s, border-color 0.2s",
    }}
  >
    {label}
  </button>
);

const Header = ({ page, onNavigate }) => {
  const links = [
    { label: "Home", target: "home" },
    { label: "Apps", target: "apps" },
    { label: "Installation", target: "installation" },
  ];

  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #F0F0F0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "0 40px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo onNavigate={onNavigate} />

      <nav style={{ display: "flex", gap: 32 }}>
        {links.map((link) => (
          <NavLink
            key={link.target}
            label={link.label}
            target={link.target}
            active={page === link.target}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#6D28D9",
          color: "#fff",
          padding: "8px 18px",
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#5B21B6")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#6D28D9")}
      >
        {/* GitHub icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57 0-.28-.01-1.03-.01-2.02-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.69.82.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
        Contribute
      </a>
    </header>
  );
};

export default Header;
