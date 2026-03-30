"use client"

import CircularGallery from "@/components/layout/CircularGallery/CircularGallery";
import '@/components/layout/CircularGallery/CircularGallery.css'
import "../Carousel.css";

const imageNames = [
    "/Img/ChromaLab/Tower.png",
    "/Img/ChromaLab/Button.png",
    "/Img/ChromaLab/Traps.png",
    "/Img/ChromaLab/LastLvl.png",
    "/Img/ChromaLab/Levers.png",
    "/Img/ChromaLab/Barrel.png",
];

export default function ChromaCarousel() {
    return (
        <div className="caroussel-wrapper">
            <div className="cards-container">
                <div style={{ height: '800px', width: '100%', position: 'relative' }}>
                    <CircularGallery
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        items={imageNames.map((n): { image: string; text: string } => ({ image: n, text: "" }))} />
                </div>
            </div>
        </div>
    );
};
