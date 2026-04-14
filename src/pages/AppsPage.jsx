import React, { useState, useEffect, useRef } from "react";
import AppCard from "../components/AppCard";
import Loader from "../components/Loader";
import SortDropdown from "../components/SortDropdown";
import APPS_DATA from "../data/apps";

const AppsPage = ({ onNavigate }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [displayed, setDisplayed] = useState(APPS_DATA);
  const [searchLoading, setSearchLoading] = useState(false);
  const timerRef = useRef(null);

  // Initial page load delay
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  // Live search + sort with debounce
  useEffect(() => {
    setSearchLoading(true);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      let result = APPS_DATA.filter((a) =>
        a.title.toLowerCase().includes(query.toLowerCase())
      );

      if (sort === "high-low") {
        result = [...result].sort((a, b) => b.downloads - a.downloads);
      } else if (sort === "low-high") {
        result = [...result].sort((a, b) => a.downloads - b.downloads);
      }

      setDisplayed(result);
      setSearchLoading(false);
    }, 350);

    return () => clearTimeout(timerRef.current);
  }, [query, sort]);

  if (loading) return <Loader />;

  return (
    <div
      style={{
        padding: "60px 60px 80px",
        background: "#F9FAFB",
        minHeight: "60vh",
      }}
    >
      {/* ── TITLE ─────────────────────────────────────────────────── */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 8px",
          }}
        >
          Our All Applications
        </h1>
        <p style={{ color: "#6B7280", fontSize: 15, margin: 0 }}>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* ── CONTROLS ──────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* Left: count + sort */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{ fontSize: 17, fontWeight: 700, color: "#111827" }}
          >
            ({displayed.length}) Apps Found
          </span>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {/* Right: search */}
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9CA3AF",
              fontSize: 16,
              pointerEvents: "none",
            }}
          >
            ⌕
          </span>
          <input
            type="text"
            placeholder="search Apps"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              border: "1.5px solid #D1D5DB",
              borderRadius: 8,
              padding: "8px 14px 8px 32px",
              fontSize: 14,
              width: 220,
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "#6D28D9")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "#D1D5DB")
            }
          />
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────────────────────── */}
      {searchLoading ? (
        <Loader />
      ) : displayed.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <p style={{ fontSize: 52, margin: "0 0 16px" }}>🔍</p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111827",
              margin: "0 0 8px",
            }}
          >
            No App Found
          </p>
          <p style={{ color: "#6B7280" }}>
            No apps match "{query}". Try a different search term.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {displayed.map((app) => (
            <AppCard key={app.id} app={app} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppsPage;
