import { useEffect, useState } from "react";
import CardSwap, { Card } from './CardSwap';
import "./CardFan.css";

interface CardFanProps {
  images: string[]
}

export default function CardsFan({images}: CardFanProps) {
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
        {images.map((src, idx) => (
          <Card key={idx} className="fan-card">
            <img src={src} alt={`Card ${idx + 1}`} className="fan-card-image" />
          </Card>
        ))}
      </CardSwap>
  );
};
