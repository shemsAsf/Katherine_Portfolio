"use client";

import "./ChromaBody.css";
import DecoratedText from "@/components/DecoratedText/DecoratedText";
import Gallery from "@/components/layout/Gallery/Gallery";

const carousselImgs = [
    'Trailer_1 1.png',
    'HighresScreenshot00145.png',
    'HighresScreenshot00131.png',
    'HighresScreenshot00132.png',
    'HighresScreenshot00136.png',
    'HighresScreenshot00156.png',
    'HighresScreenshot00157.png',
    'HighresScreenshot00155.png',
];

export default function ChromaBody() {
    return (
        <div className="chroma-body">
            <div className="branding-wrapper">
                <h1 className="blue-text presentation chroma-body-title">
                    <DecoratedText
                        text="branding"
                        decoratedIndex={2}
                        imageSrc={"/Img/Pigeons/paint-pigeon.png"}
                    />
                </h1>
            </div>
            <div className="chroma-walking-guys">
                <img src="\Img\ChromaLab\ChromaBody\cl_walking.gif" alt='Walking_Characters' />
            </div>
            <div className="chroma-color-palet">
                <img src="\Img\ChromaLab\ChromaBody\Gifs for portfolio_text.gif" alt='fonts' />
                <img src="\Img\ChromaLab\ChromaBody\Colors_2.gif" alt='color_palette'/>
            </div>
            <Gallery images={carousselImgs} path="/Img/ChromaLab/ChromaGallery/"/>
        </div>
    );
}