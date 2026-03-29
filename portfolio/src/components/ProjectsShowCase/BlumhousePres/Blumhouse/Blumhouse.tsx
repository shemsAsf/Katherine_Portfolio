"use client";

import "../../ShowCase.css"
import ProjectTitle from "@/components/ProjectsShowCase/ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";
import DecoratedText from "@/components/DecoratedText/DecoratedText";
import RoundCover from "@/components/layout/RoundCover/RoundCover";
import CardsFan from "@/components/layout/CardSwap/CardFan";

export default function Blumhouse() {
    return (
        <div>
            <ProjectTitle
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
                    "<strong>3D object</strong> modeling using Blender",
                    "<strong>Texture animation</strong> using Blender",
                    "Animation in Blender",
                    "Editing in After effects"
                ]}
                images={[
                    "/Img/CompLogo/Blender.png",
                    "/Img/CompLogo/AfterEffect.png",
                ]} />


            <div className="type1-snd">
                <div className="project-text">
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
                            "/Img/Ouch/ouchCaroussel1.png",
                            "/Img/Ouch/ouchCaroussel2.png",
                            "/Img/Ouch/ouchCaroussel3.png",
                            "/Img/Ouch/ouchCaroussel4.png",
                        ]} />
                    </div>
                </div>
            </div>

            <div className="branding-wrapper">
                <h1>
                    <DecoratedText
                        text="branding"
                        decoratedIndex={2}
                        imageSrc={"/Img/Pigeons/paint-pigeon.png"}
                    />
                </h1>
            </div>

            <RoundCover bg_color="white" color="var(--primary-color)" />
            <YouTubeEmbed
                src="https://www.youtube.com/embed/_w22oAPhTj4?si=l03lbVMrLALCvoBj"
                color="var(--primary-color)"
                text_color="white" />
        </div>
    );
}