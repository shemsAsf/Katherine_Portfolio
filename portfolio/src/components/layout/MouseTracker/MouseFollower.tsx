"use client";
import { useEffect, useState } from "react";
import "./MouseFollower.css";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hoveringTarget, setHoveringTarget] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement;
      if (target.closest(".hover-target")) {
        setHoveringTarget(true);
      } else {
        setHoveringTarget(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
      setHoveringTarget(false);
    };

    const handleTouchStart = () => {
      setVisible(false);
      setHoveringTarget(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div
      className={`mouse-follower ${visible ? "visible" : ""} ${
        hoveringTarget ? "hovering" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}>
        {hoveringTarget && <p className="click-cursor">click</p>}
      </div>
  );
}
