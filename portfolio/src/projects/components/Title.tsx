import "../style/Titles.css";
import { resolveResponsive, ResponsiveProp } from "@/Helper/TextRenderer";

export default function Title ({ text, color, backgroundColor, align }: {
        text: string;
        color: string;
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
            <h1 style={{ color }}>{text}</h1>
        </div>
    );
}