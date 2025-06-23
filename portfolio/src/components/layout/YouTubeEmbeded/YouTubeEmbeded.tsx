import "./YouTubeEmbeded.css"

interface YouTubeEmbedProps {
    src: string;
}

export default function YouTubeEmbed({ src }: YouTubeEmbedProps) {
    return (
        <div className="fullwidth-video-container">
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
