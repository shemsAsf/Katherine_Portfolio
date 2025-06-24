"use client";

import "./ChromaLab.css";
import "../../ShowCase.css"
import ProjectTitle from "@/components/ProjectsShowCase/ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";
import RandomImageBox from "@/components/ProjectsShowCase/ChromaLabPres/RandomImageBox/RandomImageBox";

export default function ChromaLab() {
    return (
        <div>
            <ProjectTitle
                title={['“Chroma Lab Experiment“']}
                subtitle="Video Game Development in Unreal Engine"
                backgroundImage="/Img/chromaLabBG.png"
                accentColor="var(--primary-color)"
                paragraph={(
                    <>
                        <p>
                            The game about two cute characters, who are trying to escape a
                            laboratory where they are being held as lab rats. The “Chroma
                            Laboratory” is known for producing toxic paint which gives the
                            special abilities depending on the color.
                        </p>
                        <p>
                            In the story, the paint had to be tested before real life use,
                            therefore the special test subjects were invented. You are
                            playing as the test subject and have to proceed through all the
                            test chambers to escape.
                        </p>
                    </>
                )}
                components={[
                    "<strong>3D object</strong> modeling using Blender",
                    "<strong>Texturing</strong> using Substance Painter",
                    "Audio work in <strong>Adobe Audition</strong>",
                    "<strong>Light and scenes</strong>, as well as <strong>gameplay using Unreal Engine 5</strong>"
                ]}
                images={[
                    "/Img/CompLogo/Unreal.png",
                    "/Img/CompLogo/Blender.png",
                    "/Img/CompLogo/Audition.png",
                    "/Img/CompLogo/Substance painter.png",
                    "/Img/CompLogo/AfterEffect.png",
                ]} />

            <div className="cl-snd">
                <div className="project-text">
                    <h1>project details</h1>
                    <br />
                    <div className="project-text-flex chroma">
                        <p className="sm-txt">
                            The game made in <strong>Unreal Engine</strong>
                            from scratch. Using Blender as a 3d modeling tool
                            and for rigging and animations, and Substance Painter
                            for texturing, I made an environment.
                        </p>
                        <p className="sm-txt">
                            It is a <strong>multiplayer, collaborative game
                                for 2 people</strong>, where you can solve puzzles
                            and escape a laboratory.
                        </p>
                    </div>
                </div>
                <RandomImageBox />
            </div>
            <YouTubeEmbed src="https://www.youtube.com/embed/_w22oAPhTj4?si=l03lbVMrLALCvoBj" color="var(--primary-color)"/>
        </div>
    );
}