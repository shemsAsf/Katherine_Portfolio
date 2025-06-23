"use client"

import CircularGallery from "@/components/layout/CircularGallery/CircularGallery";
import './AliceCarousel.css'

const imageNames = [
    "/Img/Alice/behance5.png",
    "/Img/Alice/behance6.png",
    "/Img/Alice/behance7.png",
    "/Img/Alice/behance8.png",
    "/Img/Alice/behance9.png",
    "/Img/Alice/behance10.png",
    "/Img/Alice/behance11.png",
];

export default function AliceCarousel() {
    return (
        <div className="alice-caroussel-wrapper">
            <div className="alice-text">
                <p>                    
                    As an addition to the video, I made branding for a coworking place.
                </p>
                <p>
                    Co working space with specifically Alice in the Wonderland theme, 
                    since Lewa work of Luis Carol especially resonated in adults hearts 
                    as we grow and we percieve his story from a completely different 
                    perspective.
                </p>
            </div>

            <div className="alice-cards-container">
                <div style={{ height: '600px', width: '100%', position: 'relative' }}>
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
