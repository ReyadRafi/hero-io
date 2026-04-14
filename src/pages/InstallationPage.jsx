import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import SortDropdown from "../components/SortDropdown";
import { fmtDownloads } from "../utils/helpers";
import APPS_DATA from "../data/apps";

const InstallationPage = ({ onNavigate, installedIds, onUninstall }) => {
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  let installedApps = APPS_DATA.filter((a) => installedIds.includes(a.id));

  if (sort === "high-low") {
    installedApps = [...installedApps].sort(
      (a, b) => b.downloads - a.downloads
    );
  } else if (sort === "low-high") {
    installedApps = [...installedApps].sort(
      (a, b) => a.downloads - b.downloads
    );
  }

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
          My Installation
        </h1>
        <p style={{ color: "#6B7280", fontSize: 15, margin: 0 }}>
          All your installed apps in one place
        </p>
      </div>

      {installedApps.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{ fontSize: 17, fontWeight: 700, color: "#111827" }}
          >
            ({installedApps.length}) Apps Installed
          </span>
          <SortDropdown value={sort} onChange={setSort} />
        </div>
      )}

      {/* ── EMPTY STATE ───────────────────────────────────────────── */}
      {installedApps.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <p style={{ fontSize: 56, margin: "0 0 16px" }}>📭</p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111827",
              margin: "0 0 8px",
            }}
          >
            No Apps Installed
          </p>
          <p style={{ color: "#6B7280", marginBottom: 28 }}>
            You haven't installed any apps yet. Browse our collection!
          </p>
          <button
            onClick={() => onNavigate("apps")}
            style={{
              background: "#6D28D9",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Browse Apps
          </button>
        </div>
      ) : (
        /* ── APP GRID ─────────────────────────────────────────────── */
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {installedApps.map((app) => (
            <div
              key={app.id}
              style={{
                background: "#fff",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #F0F0F0",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(109,40,217,0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "")
              }
            >
              {/* Thumbnail */}
              <div
                style={{
                  background: "#E5E7EB",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => onNavigate("app-details", app.id)}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: "10px 12px 12px" }}>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: 1.3,
                    cursor: "pointer",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                  onClick={() => onNavigate("app-details", app.id)}
                >
                  {app.title}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      background: "#DCFCE7",
                      color: "#15803D",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: 20,
                    }}
                  >
                    ↓ {fmtDownloads(app.downloads)}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#F59E0B",
                      fontWeight: 700,
                    }}
                  >
                    ★ {app.ratingAvg.toFixed(1)}
                  </span>
                </div>

                {/* Uninstall */}
                <button
                  onClick={() => onUninstall(app)}
                  style={{
                    width: "100%",
                    background: "#FEF2F2",
                    color: "#DC2626",
                    border: "1px solid #FCA5A5",
                    borderRadius: 7,
                    padding: "7px",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#FEE2E2")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#FEF2F2")
                  }
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstallationPage;
