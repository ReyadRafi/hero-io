import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: "4px solid #E5E7EB",
          borderTopColor: "#6D28D9",
          borderRadius: "50%",
          animation: "heroSpin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes heroSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Loader;
