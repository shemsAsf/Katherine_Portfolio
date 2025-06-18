import React from "react";
import CardSwap, { Card } from '../../../layout/CardSwap/CardSwap';
import "./OuchCarousel.css";

const imageNames = [
  "/Img/ouchCaroussel1.png",
  "/Img/ouchCaroussel2.png",
  "/Img/ouchCaroussel3.png",
  "/Img/ouchCaroussel4.png",
];

const OuchCarousel = () => {
  return (
    <div className="ouch-caroussel-wrapper">
      <div className="ouch-text">
        <p>
          The music clip’s visual concept revolves around{" "}
          <strong>a room representing a failing relationship.</strong> Initially
          stable and filled with happy memories, the room transforms
          dramatically. Phones are thrown, lights flicker, and the presence of
          horns on bedsheets signifies betrayal. Presents turn unsettling,
          memories fade, and tears flow, filling the room with emotions.{" "}
          <strong>
            This visual journey captures the shift from stability to chaos,
            immersing viewers in the turbulent experience of a troubled
            relationship.
          </strong>
        </p>
      </div>

      <div className="ouch-cards-container">
        <CardSwap
          cardDistance={100}
          verticalDistance={120}
          delay={3000}
          pauseOnHover={false}
          height={570}
          width={1000}
          easing={"linear"}
        >
          {imageNames.map((src, idx) => (
            <Card key={idx} className="ouch-card">
              <img src={src} alt={`Card ${idx + 1}`} className="ouch-card-image" />
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  );
};

export default OuchCarousel;
