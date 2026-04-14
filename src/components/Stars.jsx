import React from "react";

const Stars = ({ rating, size = 14 }) => {
  const filled = Math.round(rating);
  return (
    <span style={{ display: "inline-flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{
            color: i <= filled ? "#F59E0B" : "#D1D5DB",
            fontSize: size,
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </span>
  );
};

export default Stars;
