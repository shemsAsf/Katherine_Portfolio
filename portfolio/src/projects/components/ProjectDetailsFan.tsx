import DecoratedText from "@/components/DecoratedText/DecoratedText";
import CardsFan from "@/components/layout/CardSwap/CardFan";
import Carousel from "@/components/layout/CircularGallery/CircularGallery";
import { separateParagraphs } from "@/Helper/TextRenderer";

export default function ProjectDetailsFan({ paragraphs, images, backgroundColor = 'var(--primary-color)', textColor = "white" }:
    { paragraphs: string[], images: string[], backgroundColor: string, textColor: string }) {
    return (
        <div className="project-details"
            style={{
                "--section-bg": backgroundColor,
                "--section-txt-col": textColor
            } as React.CSSProperties}>
            <div className="project-text">
                <br /><br />
                <h1>
                    <DecoratedText
                        text="project details"
                        decoratedIndex={11}
                        imageSrc={"/Img/Pigeons/idea_pigeon.png"}
                    />
                </h1>
                <br />
                <div className="card-fan-wrapper">
                    <div className="project-text-flex">
                        {separateParagraphs(paragraphs, "sm-txt")}
                    </div>
                    <CardsFan images={images} />
                </div>
            </div>
        </div>
    )
}