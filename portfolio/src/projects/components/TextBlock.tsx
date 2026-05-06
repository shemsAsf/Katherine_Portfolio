import "../style/TextBlock.css";
import { resolveResponsive, ResponsiveProp, separateParagraphs } from "@/Helper/TextRenderer";

export interface TextBlockProps {
    paragraphs: string[];
    size?: string;
    color?: string;
    backgroundColor?: string;
    width?: number | ResponsiveProp<number>;
    align?: string | ResponsiveProp<string>;
}

const sizeMap: Record<string, string> = {
    tiny:   "xxsm-txt",
    small:  "sm-txt",
    medium: "m-txt",
    large:  "l-txt",
    xlarge: "xsm-txt",
};

export default function TextBlock({ paragraphs, size = "medium", color = "black", backgroundColor, width, align }: TextBlockProps) {
    const w = resolveResponsive(width ?? { mobile: 100, desktop: 45 });
    const a = resolveResponsive(align ?? { mobile: "center", desktop: "left" });
    const sizeClass = sizeMap[size] ?? "m-txt";

    return (
        <div
            className="textblock-wrapper"
            data-align-mobile={a.m}
            data-align-desktop={a.d}
            style={{
                ["--textblock-width-mobile" as any]: `${w.m}%`,
                ["--textblock-width-desktop" as any]: `${w.d}%`,
                ["--textblock-color" as any]: color,
                ["--background-color" as any]: backgroundColor,
            }}
        >
            {separateParagraphs(paragraphs, `textblock-paragraph ${sizeClass}`)}
        </div>
    );
}