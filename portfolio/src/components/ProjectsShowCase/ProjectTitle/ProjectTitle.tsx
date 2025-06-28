"use client";

import "../ShowCase.css"

interface ProjectTitleProps {
    title: string[];
    subtitle: string;
    accentColor: string;
    backgroundImage: string;
    paragraph: React.ReactElement;
    components: string[];
    images: string[];
}

export default function ProjectTitle({
    title,
    subtitle,
    accentColor,
    backgroundImage,
    paragraph,
    components,
    images,
}: ProjectTitleProps) {
    return (
        <>
            <div className="project-title-header" style={{ backgroundColor: accentColor }}>
                <div className="overlay-div">
                    <img src={backgroundImage} className="overlay-image" alt="Overlay" />
                </div>

                <div className="content-wrapper">
                    <div className="project-title-header-wrapper">
                        <div className="project-title-title">
                            {title.map((t, index) => (
                                <h1 key={index}>{t}</h1>
                            ))}
                            <h2>{subtitle}</h2>
                        </div>
                        <div className="project-title-children-wrapper">
                            <div className="project-title-children project-title-paragraph">{paragraph}</div>
                            <div className="project-title-children project-title-components-wrapper">
                                <img src="/Img/Pigeons/speaking_pigeon.png" className="project-title-pigeon" alt="speaking-pigeon" />
                                <div>
                                    <div className="project-title-comp-imgs">
                                        {images.map((src) => (
                                            <img src={src} className="project-title-comp-img" alt="logo" />
                                        ))}
                                    </div>

                                    <ul className="components-list">
                                        {components.map((item, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
