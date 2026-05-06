import "../style/ImageRow.css";
import { resolveResponsive, ResponsiveProp } from "@/Helper/TextRenderer";

export interface ImageRowProps {
    images: {
        url: string;
        alt?: string;
        width?: number | ResponsiveProp<number>;
    }[];
    align?: string | ResponsiveProp<string>;
    uniformHeight?: number | ResponsiveProp<number>;
}

export default function ImageRow({ images, align, uniformHeight }: ImageRowProps) {

    const alignmentMap: any = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
        between: "space-between",
        around: "space-around",
    };

    const resAlign = resolveResponsive(align);
    const resHeight = resolveResponsive(uniformHeight);

    return (
        <div
            className="dynamic-image-row"
            style={{
                ['--align-mobile' as any]: alignmentMap[resAlign.m as string] || "center",
                ['--align-desktop' as any]: alignmentMap[resAlign.d as string] || "center",
                ['--gap-offset' as any]: `8px`,
            }}
        >
            {images.map((img: any, index: number) => {
                const resWidth = resolveResponsive(img.width);

                return (
                    <img
                        key={index}
                        src={img.url}
                        alt={img.url}
                        className="row-img"
                        style={{
                            ['--width-mobile' as any]: `${resWidth.m}%`,
                            ['--height-mobile' as any]: `${resHeight.m}vh`,
                            ['--width-desktop' as any]: `${resWidth.d}%`,
                            ['--height-desktop' as any]: `${resHeight.d}vh`,
                        }}
                    />
                );
            })}
        </div>
    );
};