import React from "react";
import { fmtDownloads } from "../utils/helpers";

const AppCard = ({ app, onNavigate }) => {
  return (
    <div
      onClick={() => onNavigate("app-details", app.id)}
      style={{
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid #F0F0F0",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(109,40,217,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* App thumbnail */}
      <div
        style={{
          background: "#E5E7EB",
          aspectRatio: "1 / 1",
          overflow: "hidden",
        }}
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
            margin: "0 0 8px",
            fontSize: 13,
            fontWeight: 600,
            color: "#111827",
            lineHeight: 1.3,
            minHeight: 34,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {app.title}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Download badge */}
          <span
            style={{
              background: "#DCFCE7",
              color: "#15803D",
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            ↓ {fmtDownloads(app.downloads)}
          </span>

          {/* Rating */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              fontSize: 12,
              color: "#F59E0B",
              fontWeight: 700,
            }}
          >
            ★ {app.ratingAvg.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
