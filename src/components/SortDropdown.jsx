import React from "react";

const SortDropdown = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        border: "1.5px solid #D1D5DB",
        borderRadius: 8,
        padding: "6px 12px",
        fontSize: 13,
        color: "#374151",
        background: "#fff",
        cursor: "pointer",
        outline: "none",
      }}
    >
      <option value="default">Sort by Default</option>
      <option value="high-low">Downloads: High → Low</option>
      <option value="low-high">Downloads: Low → High</option>
    </select>
  );
};

export default SortDropdown;
