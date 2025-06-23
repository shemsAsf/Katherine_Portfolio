import React, { useEffect, useState } from "react";
import CardSwap, { Card } from '../../../layout/CardSwap/CardSwap';
import "./OuchCarousel.css";

const imageNames = [
  "/Img/Ouch/ouchCaroussel1.png",
  "/Img/Ouch/ouchCaroussel2.png",
  "/Img/Ouch/ouchCaroussel3.png",
  "/Img/Ouch/ouchCaroussel4.png",
];

export default function OuchCarousel() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 570 });

  useEffect(() => {
    const calculateSize = () => {
      const screenWidth = window.innerWidth;
      const width = screenWidth * 0.9;
      const height = width / 1.75;
      setDimensions({ width, height });
    };

    calculateSize();
    window.addEventListener("resize", calculateSize);
    return () => window.removeEventListener("resize", calculateSize);
  }, []);

  return (
      <CardSwap
        cardDistance={100}
        verticalDistance={
          dimensions.width > 1024 ? 100 :
            dimensions.width > 768 ? 80 :
              40
        }
        delay={3000}
        pauseOnHover={false}
        easing={"linear"}
      >
        {imageNames.map((src, idx) => (
          <Card key={idx} className="ouch-card">
            <img src={src} alt={`Card ${idx + 1}`} className="ouch-card-image" />
          </Card>
        ))}
      </CardSwap>
  );
};
