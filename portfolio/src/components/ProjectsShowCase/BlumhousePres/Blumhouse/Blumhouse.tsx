"use client";

import "../../ShowCase.css"
import "./Blumhouse.css"
import ProjectTitle from "@/projects/components/ProjectTitle";
import YouTubeEmbed from "@/projects/components/YouTubeEmbeded";
import DecoratedText from "@/components/DecoratedText/DecoratedText";
import CardsFan from "@/components/layout/CardSwap/CardFan";
import RoundCover from "@/components/layout/RoundCover/RoundCover";
import Gallery from "@/components/layout/Gallery/Gallery";

const Gallery1: string[] = [
    "gif 1.gif",
    "video.gif",
    "video_1.gif",
    "video_2.gif",
    "video_3.gif",
    "video_4.gif",
    "video_5.gif",
    "video_6.gif",
];

const Gallery2: string[] = [
    "horizontal mockup 1.png",
    "Free_Citylight_Poster_Mockup_4 1.png",
    "metalic poster 1.png",
    "movie cup 1.png",
    "popcorn 1.png",
    "2a30a3174218789.649df1b7e700d 3.png",
    "ticket 1.png",
]


export default function Blumhouse() {
    return (
        <div>
            {/* <ProjectTitle
                title={['“Blumhouse Productions“']}
                subtitle="Movie opening in Blender"
                backgroundImage="/Img/BlumhouseBG.png"
                accentColor="var(--primary-color)"
                paragraph={(
                    <>
                        <p>
                            Blumhouse Productions is an American film and television
                            production company primarily known for <strong>producing
                                horror films.</strong>
                        </p>
                        <p>
                            The project is a <strong>video-based design system.
                            </strong> Video intros to the films embody the essence
                            of Blumhouse's famous horror films. <strong>Black and
                                white 3D intro video created using Blender.</strong>
                        </p>
                    </>
                )}
                components={[
                    "**3D object** modeling using Blender",
                    "**Texture animation** using Blender",
                    "Animation in Blender",
                    "Editing in After effects"
                ]}
                images={[
                    "/Img/CompLogo/Blender.png",
                    "/Img/CompLogo/AfterEffect.png",
                ]} /> */}


            <div className="type1-snd">
                <div className="project-text blumhouse">
                    <h1>
                        <DecoratedText
                            text="project details"
                            decoratedIndex={8}
                            imageSrc={"/Img/Pigeons/gaming_pigeon.png"}
                        />
                    </h1>
                    <br />
                    <div className="card-fan-wrapper">
                        <div className="project-text-flex type1">
                            <p className="sm-txt">
                                This intro can be <strong>mixed and matched to create a
                                    unique</strong> experience for the viewer. Moreover, a
                                full minute video can also serve as a promotional tool.
                                Using graphics from the video, the project is complemented
                                by branding for specialized film premieres, including merch
                                and promotional posters.
                            </p>
                        </div>
                        <CardsFan images={[
                            "Img/Blumhouse/Gallery2/horizontal mockup 1.png",
                            "Img/Blumhouse/Gallery2/Free_Citylight_Poster_Mockup_4 1.png",
                            "Img/Blumhouse/Gallery2/metalic poster 1.png",
                            "Img/Blumhouse/Gallery2/movie cup 1.png",
                        ]} />
                    </div>
                </div>
                <RoundCover bg_color='var(--primary-color)' color="white" />
            </div>
            <div className="blumhouse_content">
                <h1>
                    <DecoratedText
                        text="branding"
                        decoratedIndex={2}
                        imageSrc={"/Img/Pigeons/paint-pigeon.png"}
                    />
                </h1>
                <br />
                <br />
                <br />
                <p className="m-txt">
                    For the intro of the film company, it was decided to make references to <strong>five of its most famous films</strong>. In these films, I tried to take the <strong>most iconic scenes</strong> that everyone who watched will recognize.
                </p>

                <p className="m-txt">
                    Movie made with a <strong>custom shader</strong> I developed in Blender for this project. It resembles hand-drawn graphics, printed <strong>linocut or drypoint drawing</strong>. All scenes are connected by a camera path and all transitions are thought out in such a way that clips can be composed in any queue for any single film screening, and the company logo always comes as the final scene.
                </p>
                <Gallery images={Gallery1} path="Img/Blumhouse/Gallery/" rowAmount={4} />

                <p className="m-txt">
                    In addition to the video, I developed some <strong>posters</strong> and <strong>movie attributes</strong> that people could get at the cinema.
                </p>

                <div className="blumhouse-flex-gallery-wrapper">
                    {Gallery2.map((item, index) => (
                        <img
                            className={`blumhouse-flex-gallery-img img-pos-${index + 1}`}
                            src={process.env.PUBLIC_URL + "Img/Blumhouse/Gallery2/" + item}
                            alt={item} />
                    ))
                    }
                </div>
            </div>

            <YouTubeEmbed
                srcs={["https://www.youtube.com/embed/_w22oAPhTj4?si=l03lbVMrLALCvoBj"]}
                color="var(--primary-color)"
                text_color="white" />
        </div>
    );
}