
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import "../style/Gallery.css"

export interface GalleryProps {
    images: string[]
    rowAmount?: number
}

export default function Gallery({ images, rowAmount = 3 }: GalleryProps) {
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
            prev === 0 ? images.length - 1 : (prev! - 1)
        );
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent closing the lightbox
        setSelectedIndex((prev) =>
            prev === images.length - 1 ? 0 : (prev! + 1)
        );
    };

    return (
        <div
            className="image-gallery"
            style={{ "--columns": rowAmount } as React.CSSProperties}>
            {images.map((name, index) => (
                <img
                    key={index}
                    src={name}
                    alt={`img-${index}`}
                    onClick={() => openImage(index)}
                    className="gallery-image hover-target"
                />
            ))}

            {selectedIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="nav-button left hover-target" onClick={prevImage}>
                        <ChevronLeft size={50} />
                    </button>
                    <img
                        src={ images[selectedIndex]}
                        alt="fullscreen"
                        className="lightbox-image"
                    />
                    <button className="nav-button right hover-target" onClick={nextImage}>
                        <ChevronRight size={50} />
                    </button>
                </div>
            )}

        </div>

    )

}
