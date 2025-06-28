import DecoratedText from "@/components/DecoratedText/DecoratedText";
import "./YouTubeEmbeded.css"

interface YouTubeEmbedProps {
    src: string;
    color: string;
    text_color: string;
}

export default function YouTubeEmbed({ src, color, text_color }: YouTubeEmbedProps) {
    return (
        <div
            className="fullwidth-video-container"
            style={{ backgroundColor: color }}
        >
            <h1
                style={{ color: text_color }}>
                <DecoratedText
                    text="video"
                    decoratedIndex={4}
                    imageSrc={"/Img/Pigeons/hat_pigeon.png"}
                />
            </h1>
            <iframe
                src={`${src}?controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                width="100%"
                height="100%"
            ></iframe>
        </div>
    );
}
