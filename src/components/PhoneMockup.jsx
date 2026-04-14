import React from "react";

const floatingLeft = [
  { bg: "#0EA5E9", top: 60, symbol: "⊕" },
  { bg: "#10B981", top: 165, symbol: "✓" },
  { bg: "#6D28D9", top: 280, symbol: "⏻" },
];

const floatingRight = [
  { bg: "#EF4444", top: 40, symbol: "◉" },
  { bg: "#3B82F6", top: 160, symbol: "⊞" },
  { bg: "#14B8A6", top: 280, symbol: "✕" },
];

const PhoneMockup = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Left floating icons */}
      {floatingLeft.map((dot, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: dot.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 18,
            top: dot.top,
            left: -120,
            zIndex: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {dot.symbol}
        </div>
      ))}

      {/* Right floating icons */}
      {floatingRight.map((dot, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: dot.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 18,
            top: dot.top,
            right: -120,
            zIndex: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {dot.symbol}
        </div>
      ))}

      {/* Phone frame */}
      <div
        style={{
          width: 220,
          height: 440,
          background: "#1A1A2E",
          borderRadius: 36,
          border: "6px solid #2D2D4E",
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            padding: "16px 14px",
            height: "100%",
            background: "#1A1A2E",
          }}
        >
          <div
            style={{
              background: "#232347",
              borderRadius: 10,
              padding: "10px 12px",
            }}
          >
            {/* Top bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <span style={{ color: "#9CA3AF", fontSize: 11 }}>
                ← All Courses
              </span>
              <div style={{ display: "flex", gap: 4 }}>
                <span
                  style={{
                    background: "#6D28D9",
                    color: "#fff",
                    fontSize: 9,
                    padding: "2px 6px",
                    borderRadius: 4,
                    fontWeight: 700,
                  }}
                >
                  PRO
                </span>
                <span
                  style={{
                    background: "#EF4444",
                    color: "#fff",
                    fontSize: 9,
                    padding: "2px 6px",
                    borderRadius: 4,
                    fontWeight: 700,
                  }}
                >
                  345
                </span>
              </div>
            </div>

            {/* Tab bar */}
            <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
              <span
                style={{
                  background: "#6D28D9",
                  color: "#fff",
                  fontSize: 9,
                  padding: "4px 8px",
                  borderRadius: 6,
                  fontWeight: 600,
                }}
              >
                Regular Course
              </span>
              <span
                style={{
                  color: "#9CA3AF",
                  fontSize: 9,
                  padding: "4px 8px",
                  border: "1px solid #374151",
                  borderRadius: 6,
                }}
              >
                Video Course
              </span>
            </div>

            <p
              style={{
                color: "#fff",
                fontSize: 11,
                margin: "0 0 8px",
                fontWeight: 600,
              }}
            >
              Chose your Course
            </p>

            {/* Course card 1 */}
            <div
              style={{
                background: "#6D28D9",
                borderRadius: 8,
                padding: "10px",
                marginBottom: 6,
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  margin: "0 0 2px",
                }}
              >
                Complete Web development
              </p>
              <p
                style={{ color: "#C4B5FD", fontSize: 9, margin: "0 0 6px" }}
              >
                203 Lesson
              </p>
              <div
                style={{
                  height: 4,
                  background: "#4C1D95",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    width: "32%",
                    height: "100%",
                    background: "#F59E0B",
                    borderRadius: 2,
                  }}
                />
              </div>
              <p
                style={{
                  color: "#C4B5FD",
                  fontSize: 8,
                  margin: "4px 0 0",
                  textAlign: "right",
                }}
              >
                32%
              </p>
            </div>

            {/* Course card 2 */}
            <div
              style={{
                background: "#F59E0B",
                borderRadius: 8,
                padding: "8px 10px",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Python Programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
