import React, { useEffect } from "react";

const Toast = ({ msg, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success" ? "#10B981" : type === "error" ? "#EF4444" : "#6D28D9";

  return (
    <>
      <style>{`
        @keyframes toastSlideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 9999,
          background: bgColor,
          color: "#fff",
          padding: "12px 20px",
          borderRadius: 10,
          fontSize: 14,
          fontWeight: 600,
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          animation: "toastSlideUp 0.3s ease",
          maxWidth: 320,
        }}
      >
        <span style={{ fontSize: 16 }}>{type === "success" ? "✓" : "✗"}</span>
        {msg}
      </div>
    </>
  );
};

export default Toast;
