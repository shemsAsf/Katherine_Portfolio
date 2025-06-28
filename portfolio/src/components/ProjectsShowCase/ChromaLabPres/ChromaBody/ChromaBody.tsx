"use client";

import { useState } from "react";
import "./ChromaBody.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DecoratedText from "@/components/DecoratedText/DecoratedText";

const carousselImgs = [
    'HighresScreenshot00131.png',
    'HighresScreenshot00132.png',
    'HighresScreenshot00136.png',
    'HighresScreenshot00145.png',
    'HighresScreenshot00155.png',
    'HighresScreenshot00156.png',
    'HighresScreenshot00157.png',
    'Trailer_1 1.png',
];

export default function ChromaBody() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openImage = (index: number) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent closing the lightbox
        setSelectedIndex((prev) =>
            prev === 0 ? carousselImgs.length - 1 : (prev! - 1)
        );
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent closing the lightbox
        setSelectedIndex((prev) =>
            prev === carousselImgs.length - 1 ? 0 : (prev! + 1)
        );
    };


    return (
        <div className="chroma-body">
            <h1 className="blue-text presentation chroma-body-title">
                <DecoratedText
                    text="branding"
                    decoratedIndex={2}
                    imageSrc={"/Img/Pigeons/paint-pigeon.png"}
                />
            </h1>
            <div className="chroma-walking-guys">
                <img src="\Img\ChromaLab\ChromaBody\cl_walking.gif" />
            </div>
            <div className="chroma-color-palet">
                <img src="\Img\ChromaLab\ChromaBody\Gifs for portfolio_text.gif" />
                <img src="\Img\ChromaLab\ChromaBody\Colors_2.gif" />
            </div>
            <div className="chroma-image-gallery">
                {carousselImgs.map((name, index) => (
                    <img
                        key={index}
                        src={`${process.env.PUBLIC_URL}/Img/ChromaLab/ChromaGallery/${name}`}
                        alt={`img-${index}`}
                        onClick={() => openImage(index)}
                        className="chroma-gallery-image hover-target"
                    />
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="nav-button left hover-target" onClick={prevImage}>
                        <ChevronLeft size={50} />
                    </button>
                    <img
                        src={`${process.env.PUBLIC_URL}/Img/ChromaLab/ChromaGallery/${carousselImgs[selectedIndex]}`}
                        alt="fullscreen"
                        className="lightbox-image"
                    />
                    <button className="nav-button right hover-target" onClick={nextImage}>
                        <ChevronRight size={50} />
                    </button>
                </div>
            )}
        </div>
    );
}