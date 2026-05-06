import { useEffect, useRef } from "react";
import "./CircularGallery.css"

interface CarouselProps {
    images: string[];
    backgroundColor: string;
}

export default function Carousel({ images, backgroundColor }: CarouselProps) {
    const groupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const group = groupRef.current;
        if (!group) return;

        const allCards = group.querySelectorAll<HTMLElement>(".circ-car-card");
        const totalCards = allCards.length;
        const realCount = totalCards / 3;

        let currentIndex = realCount;

        const updateVisuals = (withTransition = true) => {
            const viewportCenter = window.innerWidth / 2;
            const activeCard = allCards[currentIndex];

            const cardWidth = activeCard.offsetWidth;
            const cardOffsetLeft = activeCard.offsetLeft;
            const targetTranslate = viewportCenter - cardOffsetLeft - (cardWidth / 2);

            // Apply movement
            group.style.transition = withTransition
                ? "transform 0.8s cubic-bezier(0.55, 0, 0.45, 1)"
                : "none";
            group.style.transform = `translateX(${targetTranslate}px)`;

            allCards.forEach((card, index) => {
                const distFromIndex = index - currentIndex;
                const absDist = Math.abs(distFromIndex);

                const scale = Math.max(1, 2.5 - absDist * 0.7);

                let spacingOffset = distFromIndex === 0 ? 0 : 100 / distFromIndex;

                card.style.transition = withTransition ? "transform 0.8s ease" : "none";
                card.style.transform = `translateX(${spacingOffset}px) scale(${scale})`;
            });
        };

        updateVisuals(false);

        const interval = setInterval(() => {
            currentIndex++;

            updateVisuals(true);

            if (currentIndex >= realCount * 2) {
                setTimeout(() => {
                    currentIndex = realCount;
                    updateVisuals(false);
                }, 800);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="circ-car"
            style={{
                ["--background-color" as any]: backgroundColor,
            }}>
            <div className="circ-car-group" ref={groupRef}>
                {[...images, ...images, ...images].map((item, i) => (
                    <img src={item} key={i} className="circ-car-card" alt="" />
                ))}
            </div>
        </div>
    );
}