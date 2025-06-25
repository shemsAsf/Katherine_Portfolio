import React from "react";
import "./PercentageBar.css";

type PercentageBarProps = {
  title: string;
  number: number;
};

export default function PercentageBar({ title, number }: PercentageBarProps) {
  const validNumber = Math.min(Math.max(number, 0), 10);

  return (
    <div className="percentage-bar-container">
      <p className="percentage-bar-title">{title}</p>
      <div className="percentage-bar-circles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`percentage-bar-circle${i < validNumber ? " filled" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
