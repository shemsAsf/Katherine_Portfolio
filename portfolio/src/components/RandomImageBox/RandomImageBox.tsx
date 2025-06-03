import { useRef, useState } from 'react';
import './RandomImageBox.css';

interface Position {
    top: string;
    left: string;
}

interface ImageData {
    src: string;
    position: Position;
}

export default function RandomImageBox() {
    const [images] = useState<ImageData[]>([
        {
            src: "/Img/ChromaLab/Tower.png",
            position: { top: "20%", left: "65%" },
        },
        {
            src: "/Img/ChromaLab/Button.png",
            position: { top: "0%", left: "25%" },
        },
        {
            src: "/Img/ChromaLab/Traps.png",
            position: { top: "30%", left: "10%" },
        },
        {
            src: "/Img/ChromaLab/LastLvl.png",
            position: { top: "70%", left: "60%" },
        },
        {
            src: "/Img/ChromaLab/Levers.png",
            position: { top: "65%", left: "20%" },
        },
        {
            src: "/Img/ChromaLab/Barrel.png",
            position: { top: "40%", left: "55%" },
        },
    ]);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    const [hover, setHover] = useState<number>(-1);

    const getTransform = (index: number): string => {
        if (hover === -1 || index === hover) return '';

        const hoveredImg = imageRefs.current[hover];
        const thisImg = imageRefs.current[index];
        if (!hoveredImg || !thisImg) return '';

        const hoveredRect = hoveredImg.getBoundingClientRect();
        const thisRect = thisImg.getBoundingClientRect();

        const x1 = hoveredRect.left + hoveredRect.width / 2;
        const y1 = hoveredRect.top + hoveredRect.height / 2;
        const x2 = thisRect.left + thisRect.width / 2;
        const y2 = thisRect.top + thisRect.height / 2;

        let dx = x2 - x1;
        let dy = y2 - y1;
        const length = Math.sqrt(dx * dx + dy * dy) || 1;
        dx /= length;
        dy /= length;

        const strength = 150;
        const offsetX = dx * strength;
        const offsetY = dy * strength;

        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    return (
        <div
            className="random-box"
            onMouseLeave={() => setHover(-1)}
        >{images.map((img, index) => (
            <img
                key={index}
                ref={el => {
                    imageRefs.current[index] = el;
                }}
                src={img.src}
                alt={`random-${index}`}
                className="random-image"
                style={{
                    top: img.position.top,
                    left: img.position.left,
                    transform: `${getTransform(index)} ${hover === index ? 'scale(1.5)' : ''}`,
                    zIndex: hover === index ? 10 : 1,
                }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(-1)}
            />
        ))}
        </div>
    );
};
