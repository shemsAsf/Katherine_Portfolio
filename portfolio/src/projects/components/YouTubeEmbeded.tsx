import DecoratedText from "@/projects/components/DecoratedText";
import "../style/YouTubeEmbeded.css"

export interface YouTubeEmbedProps {
    srcs: string[];
    color: string;
    text_color: string;
}

export default function YouTubeEmbed({ srcs, color, text_color }: YouTubeEmbedProps) {
    return (
        <div
            className="fullwidth-video-container"
            style={{ backgroundColor: color }}
        >
            <br/>
            <h1 style={{ color: text_color }}>
                <DecoratedText
                    text="video"
                    decoratedIndex={4}
                    imageSrc={color === "white" ? "/Img/Pigeons/hat_pigeon.png" : "/Img/Pigeons/hat_pigeon_white.png"}
                />
            </h1>
            <div className={`video-row count-${srcs.length}`}>
                {srcs.map((src, i) => (
                    <iframe
                        key={i}
                        src={`${src}?controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`}
                        title={`YouTube video ${i + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                ))}
            </div>
        </div>
    );
}