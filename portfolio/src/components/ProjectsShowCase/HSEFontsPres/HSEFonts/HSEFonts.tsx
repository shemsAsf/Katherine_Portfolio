"use client";

import "./HSEFonts.css";
import "../../ShowCase.css"
import ProjectTitle from "@/components/ProjectsShowCase/ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";
import DecoratedText from "@/components/DecoratedText/DecoratedText";
import RoundCover from "@/components/layout/RoundCover/RoundCover";
import HSEFontsCarousel from "../HSEFontsCarousel/HSEFontsCarousel";
import HSEFontsIcons from "./HSEFontsIcons";
import Gallery from "@/components/layout/Gallery/Gallery";

export default function HSEFonts() {
    const gallery:string[] = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
    ]

    return (
        <div className="hseFonts">
            <ProjectTitle
                title={['"HSE', 'Fonts"']}
                subtitle="Reels in After Effects"
                backgroundImage="/Img/HSEFontsBG.png"
                accentColor="var(--primary-color)"
                paragraph={(
                    <>
                        <p>
                            The video showcases experimental fonts developed and
                            distributed by HSE Fonts and is styled as a catchy ad.
                        </p>
                        <p>
                            The target audience is based on young professionals,
                            freelancers and university students. The video should
                            attract attention and convey the nature of the fonts.
                            I combined bright colors, catchy music and fast graphics
                            that you won’t get tired of.
                        </p>
                    </>
                )}
                components={[
                    "<strong>Animation</strong> in After Effects"
                ]}
                images={[
                    "/Img/CompLogo/AfterEffect.png",
                    "/Img/CompLogo/Illustrator.png",
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
                    <div className="project-text-flex type1">
                        <p className="sm-txt">
                            The <strong>series of 4 reels </strong>that are means to
                            <strong> promote interesting fronts</strong> made by students
                            and the meaning behind the fonts. The idea was to focus on
                            how the font was made, what was the inspiration behind them.
                            As well as use catchy, fast-paced music, usually used in Reels
                            and vibrant colors with fast movements.
                        </p>
                    </div>
                </div>
            </div>

            <RoundCover bg_color="var(--primary-color)" color="white" />
            <div className="hsefont_content">
                <h1>
                    <DecoratedText
                        text="branding"
                        decoratedIndex={2}
                        imageSrc="/Img/Pigeons/paint-pigeon.png"
                    />
                </h1>
                <br />
                <br />
                <br />
                <p className="m-txt">
                    <strong>Bright colors</strong> that catch your eye, 
                    making you want to stop and look at them.
                </p>
                <br />
                <br />
                <br />
                <img 
                src="/Img/HSEFonts/ColorPalette.svg"
                style={{width: "100%"}}/>

                <HSEFontsIcons/>
                <Gallery path="/Img/HSEFonts/Gallery/" images={gallery}/>

            </div>

            <YouTubeEmbed
                srcs={[
                    "https://youtube.com/embed/L8nCGmDuO_g?feature=share",
                    "https://youtube.com/embed/9ZBYSW7CugQ?feature=share",
                    "https://www.youtube.com/embed/XW7ZaLGPi5I?feature=share",
                ]}
                color="var(--primary-color)"
                text_color="white" />
        </div>
    );
}