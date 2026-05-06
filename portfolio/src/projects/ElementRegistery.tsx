import ProjectTitle, { ProjectTitleProps } from "@/projects/components/ProjectTitle";
import RoundCover from "@/components/layout/RoundCover/RoundCover";
import ImageRow, { ImageRowProps } from "./components/ImageRow";
import Gallery, { GalleryProps } from "./components/Gallery";
import ProjectDetailsFan from "./components/ProjectDetailsFan";
import TextBlock, { TextBlockProps } from "./components/TextBlock";
import YouTubeEmbed, { YouTubeEmbedProps } from "@/projects/components/YouTubeEmbeded";
import Title from "./components/Title";
import PigeonTitle from "./components/PigeonTitle";
import Carousel from "@/components/layout/CircularGallery/CircularGallery";
import HSEFontsIcons from "@/projects/components/HSEFontsIcons";

export interface PageElement<T = any> {
    type: string;
    props: T;
}

// ─────────────────────────────────────────────────────────────────────────────
// Registry
// Each category groups related element types.
// To add a new element: add an entry in the right category section.
// To add a new category: add a new section and merge it into ElementRegistry.
// ─────────────────────────────────────────────────────────────────────────────

const TitleElements = {

    // Full project header with background, paragraphs and tool logos
    header: ({ title, subtitle, backgroundImage, accentColor, paragraphs, components, tools }: ProjectTitleProps) =>
        <ProjectTitle
            title={title}
            subtitle={subtitle}
            backgroundImage={backgroundImage}
            accentColor={accentColor}
            paragraphs={paragraphs}
            components={components}
            tools={tools}
        />,

    // Basic Title without decorator
    title: ({ text, color, backgroundColor, alignMobile, alignDesktop }: {
        text: string;
        color: string;
        backgroundColor?: string;
        alignMobile?: string;
        alignDesktop?: string;
    }) =>
        <Title text={text} color={color} backgroundColor={backgroundColor} align={{ mobile: alignMobile, desktop: alignDesktop }} />,

    // Section title with a decorative pigeon illustration
    pigeonTitle: ({ text, color, index, pigeon, backgroundColor, alignMobile, alignDesktop }: {
        text: string;
        color: string;
        index: number;
        pigeon: { url: string; translation?: { x: number; y: number } };
        backgroundColor?: string;
        alignMobile?: string;
        alignDesktop?: string;
    }) =>
        <PigeonTitle text={text} color={color} index={index} pigeon={pigeon} backgroundColor={backgroundColor} align={{ mobile: alignMobile, desktop: alignDesktop }} />
} as const;

const TextElements = {

    // Multi-paragraph text block
    textBlock: ({ paragraphs, size, color, backgroundColor, widthMobile, widthDesktop, alignMobile, alignDesktop }: {
        paragraphs: string[];
        size: string,
        color: string,
        backgroundColor: string
        widthMobile?: number;
        widthDesktop?: number;
        alignMobile?: string;
        alignDesktop?: string;
    }) =>
        <TextBlock
            paragraphs={paragraphs}
            width={{ mobile: widthMobile ?? 100, desktop: widthDesktop ?? 45 }}
            align={{ mobile: alignMobile ?? "center", desktop: alignDesktop ?? "left" }}
            size={size}
            color={color}
            backgroundColor={backgroundColor}
        />

} as const;

const ProjectDetailElements = {

    // Project detail section with fan spinning element
    projectDetailFan: ({ paragraphs, images, backgroundColor = 'var(--primary-color)', textColor = "white" }:
        { paragraphs: string[], images: string[], backgroundColor: string, textColor: string }) =>
        <ProjectDetailsFan paragraphs={paragraphs} images={images} backgroundColor={backgroundColor} textColor={textColor} />,

} as const;

const ImageElements = {

    // Single full-width image
    image: ({ url, alt, borderRadius = "8px" }: { url: string; alt: string; borderRadius?: string }) =>
        <img src={url} alt={alt} style={{ width: "calc(100% - (2*var(--default-left-spacing))", borderRadius, margin: "0 var(--default-left-spacing)" }} />,

    // Horizontal row of images with per-image width control
    imageRow: ({ images, align = "center", uniformHeight = 0 }: ImageRowProps) =>
        <ImageRow images={images} align={align} uniformHeight={uniformHeight} />,

    // Masonry-style image grid
    gallery: ({ rowAmount, images }: GalleryProps) =>
        <Gallery images={images} rowAmount={rowAmount} />,

    // Project detail section with spinning caroussel
    caroussel: ({ images, backgroundColor = 'white' }:
        { paragraphs: string[], images: string[], backgroundColor: string, textColor: string }) =>
        <Carousel  images={images} backgroundColor={backgroundColor} />,

    // Looping video, no controls
    video: ({ url, poster }: { url: string; poster?: string }) =>
        <video
            src={url}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: "8px", margin: "10px 0" }}
        />,

    // Youtube embeded videos
    youtubeEmbed: ({ srcs, color, text_color }: YouTubeEmbedProps) =>
        <YouTubeEmbed srcs={srcs} color={color} text_color={text_color} />

} as const;

const LayoutElements = {

    // Vertical whitespace between sections
    spacer: ({ height, backgroundColor }: { height: number, backgroundColor:string }) =>
        <div style={{
            height: `${height}vh`,
            width: "100%",
            backgroundColor: backgroundColor
        }} />,


    // Round divider used between sections
    roundCover: ({ background, foreground }: { background: string; foreground: string }) =>
        <RoundCover bg_color={background} color={foreground} />,

} as const;

const UniqueElements = {

    // Vertical whitespace between sections
    hseIcons: () =>
        <HSEFontsIcons/>,

} as const;

// Combined Registry
export const ElementRegistry = {
    ...TitleElements,
    ...TextElements,
    ...ProjectDetailElements,
    ...ImageElements,
    ...LayoutElements,
    ...UniqueElements
} as const;

export function renderElement(element: PageElement, index: number): React.ReactNode {
    const elementType = element.type as keyof typeof ElementRegistry;
    const Component = ElementRegistry[elementType] as React.ComponentType<any>;
    if (!Component) {
        console.warn(`Unknown element type: "${element.type}"`);
        return null;
    }
    return (<div key={index}> <Component {...element.props} /></div>);
}

export function renderPage(body: PageElement[]): React.ReactNode {
    return <>{body.map((el, i) => renderElement(el, i))}</>;
}