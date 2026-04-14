import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { fmtReviews } from "../utils/helpers";
import Stars from "./Stars";

const ReviewChart = ({ app }) => {
  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  // Recharts data — highest star first
  const chartData = [...app.ratings].reverse().map((r) => ({
    name: r.name.replace(" star", "★"),
    count: r.count,
  }));

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "32px",
        border: "1px solid #F0F0F0",
        marginBottom: 24,
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "#111827",
          margin: "0 0 4px",
        }}
      >
        App Reviews
      </h2>
      <p
        style={{ color: "#6B7280", fontSize: 14, margin: "0 0 28px" }}
      >
        {fmtReviews(totalRatings)} total ratings
      </p>

      {/* Summary row */}
      <div
        style={{
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
          marginBottom: 28,
        }}
      >
        {/* Overall score */}
        <div style={{ textAlign: "center", minWidth: 110 }}>
          <p
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#111827",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {app.ratingAvg.toFixed(1)}
          </p>
          <Stars rating={app.ratingAvg} size={18} />
          <p
            style={{ color: "#6B7280", fontSize: 12, margin: "4px 0 0" }}
          >
            out of 5
          </p>
        </div>

        {/* Rating breakdown bars */}
        <div style={{ flex: 1 }}>
          {[...app.ratings].reverse().map((r) => {
            const pct = totalRatings ? (r.count / totalRatings) * 100 : 0;
            return (
              <div
                key={r.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 7,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "#6B7280",
                    width: 42,
                    flexShrink: 0,
                  }}
                >
                  {r.name}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 8,
                    background: "#F3F4F6",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: pct + "%",
                      height: "100%",
                      background: "#F59E0B",
                      borderRadius: 4,
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "#6B7280",
                    width: 38,
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {fmtReviews(r.count)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bar chart */}
      <div style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barCategoryGap="30%">
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F3F4F6"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={fmtReviews}
            />
            <Tooltip
              formatter={(v) => [v.toLocaleString(), "Ratings"]}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #E5E7EB",
                fontSize: 13,
              }}
            />
            <Bar dataKey="count" radius={[6, 6, 0, 0]}>
              {chartData.map((_, i) => (
                <Cell
                  key={i}
                  fill={i === chartData.length - 1 ? "#6D28D9" : "#DDD6FE"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReviewChart;
