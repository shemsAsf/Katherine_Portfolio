import React from "react";
import "./ToolsGrid.css";
import PercentageBar from "@/components/layout/PercentageBar/PercentageBar";

const toolsWithScores = [
  { title: "Blender", number: 10 },
  { title: "Unreal Engine", number: 9 },
  { title: "Unity", number: 7 },
  { title: "Substance Painter", number: 9 },
  { title: "Illustrator", number: 9 },
  { title: "After Effects", number: 8 },
  { title: "Premier Pro", number: 6 },
  { title: "Photoshop", number: 9 },
  { title: "InDesign", number: 9 },
];

export default function ToolsGrid() {
  return (
    <div className="tools-grid-container">
      {toolsWithScores.map(({ title, number }) => (
        <PercentageBar key={title} title={title} number={number} />
      ))}
    </div>
  );
}
