import DecoratedText from "@/projects/components/DecoratedText";
import "../style/Titles.css";
import { resolveResponsive, ResponsiveProp } from "@/Helper/TextRenderer";

export default function PigeonTitle({ text, color, index, pigeon, backgroundColor, align }: {
    text: string;
    color: string;
    index: number;
    pigeon: { url: string; translation: { x: number; y: number } };
    backgroundColor?: string;
    align?: string | ResponsiveProp<string>
}) {
    const a = resolveResponsive(align ?? { mobile: "left", desktop: "left" });

    return (
        <div
            className="title-wrapper"
            data-align-mobile={a.m}
            data-align-desktop={a.d}
            style={{
                ["--background-color" as any]: backgroundColor,
            }}
        >

            {pigeon.translation &&
                `${ pigeon.translation.x }, ${ pigeon.translation.y}`
            }

            <h1 style={{ color, margin: 0 }}>
                <DecoratedText
                    text={text}
                    decoratedIndex={index}
                    imageSrc={pigeon.url}
                    translation={pigeon.translation}
                />
            </h1>
        </div>
    );
}