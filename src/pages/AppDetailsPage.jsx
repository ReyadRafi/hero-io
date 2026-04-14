import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Stars from "../components/Stars";
import ReviewChart from "../components/ReviewChart";
import APPS_DATA from "../data/apps";
import { fmtDownloads, fmtReviews } from "../utils/helpers";

const StatBox = ({ label, value }) => (
  <div style={{ textAlign: "center" }}>
    <p style={{ color: "#6B7280", fontSize: 12, margin: "0 0 4px" }}>
      {label}
    </p>
    <p
      style={{ fontSize: 22, fontWeight: 800, color: "#111827", margin: 0 }}
    >
      {value}
    </p>
  </div>
);

const Divider = () => (
  <div style={{ width: 1, background: "#F0F0F0", alignSelf: "stretch" }} />
);

const AppDetailsPage = ({ appId, onNavigate, isInstalled, onInstall }) => {
  const [loading, setLoading] = useState(true);
  const app = APPS_DATA.find((a) => a.id === appId);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [appId]);

  if (loading) return <Loader />;

  // App not found in data
  if (!app) {
    return (
      <div style={{ textAlign: "center", padding: "100px 40px" }}>
        <p style={{ fontSize: 56, margin: "0 0 16px" }}>📱</p>
        <h2
          style={{
            fontSize: 24,
            color: "#111827",
            margin: "0 0 8px",
          }}
        >
          App Not Found
        </h2>
        <p style={{ color: "#6B7280", marginBottom: 24 }}>
          The app you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => onNavigate("apps")}
          style={{
            background: "#6D28D9",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          ← Back to Apps
        </button>
      </div>
    );
  }

  const installed = isInstalled(app.id);

  return (
    <div style={{ padding: "48px 60px 80px", background: "#F9FAFB" }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate("apps")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#6D28D9",
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: 0,
        }}
      >
        ← Back to Apps
      </button>

      {/* ── APP INFO ──────────────────────────────────────────────── */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px",
          border: "1px solid #F0F0F0",
          marginBottom: 24,
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <img
          src={app.image}
          alt={app.title}
          style={{
            width: 160,
            height: 160,
            borderRadius: 20,
            objectFit: "cover",
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1, minWidth: 240 }}>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#111827",
              margin: "0 0 4px",
            }}
          >
            {app.title}
          </h1>
          <p
            style={{
              color: "#6D28D9",
              fontSize: 14,
              fontWeight: 600,
              margin: "0 0 20px",
            }}
          >
            {app.companyName}
          </p>

          {/* Stat row */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginBottom: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#6B7280",
                  fontSize: 12,
                  margin: "0 0 4px",
                }}
              >
                Rating
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#111827",
                  }}
                >
                  {app.ratingAvg.toFixed(1)}
                </span>
                <Stars rating={app.ratingAvg} size={16} />
              </div>
            </div>
            <Divider />
            <StatBox
              label="Downloads"
              value={fmtDownloads(app.downloads)}
            />
            <Divider />
            <StatBox label="Reviews" value={fmtReviews(app.reviews)} />
            <Divider />
            <StatBox label="Size" value={`${app.size} MB`} />
          </div>

          {/* Install button */}
          <button
            onClick={() => !installed && onInstall(app)}
            disabled={installed}
            style={{
              background: installed ? "#E5E7EB" : "#6D28D9",
              color: installed ? "#6B7280" : "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontSize: 15,
              fontWeight: 700,
              cursor: installed ? "not-allowed" : "pointer",
              transition: "background 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              if (!installed)
                e.currentTarget.style.background = "#5B21B6";
            }}
            onMouseLeave={(e) => {
              if (!installed)
                e.currentTarget.style.background = "#6D28D9";
            }}
          >
            {installed ? "✓  Installed" : "⬇  Install"}
          </button>
        </div>
      </div>

      {/* ── REVIEW CHART ──────────────────────────────────────────── */}
      <ReviewChart app={app} />

      {/* ── DESCRIPTION ───────────────────────────────────────────── */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px",
          border: "1px solid #F0F0F0",
        }}
      >
        <h2
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 16px",
          }}
        >
          About this App
        </h2>
        <p
          style={{
            color: "#374151",
            fontSize: 15,
            lineHeight: 1.8,
            margin: "0 0 20px",
          }}
        >
          {app.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Productivity", "Tools", "Education", "Lifestyle"].map((tag) => (
            <span
              key={tag}
              style={{
                background: "#F3F0FF",
                color: "#6D28D9",
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 14px",
                borderRadius: 20,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
