"use client";

import RandomImageBox from "../RandomImageBox/RandomImageBox";
import "./ChromaLab.css";
import "../../ShowCase.css"

export default function ChromaLab() {
    return (
        <div>
            <div className="Chl-Header">
                <div className="overlay-div">
                    <img src="/Img/chromaLabBG.png" className="overlay-image" alt="Overlay" />
                </div>

                <div className="content-wrapper">
                    <img src="/Img/lines.png" className="lines-img" alt="Lines" />
                    <div className="project-page-header-wrapper">
                        <div className="project-page-title">
                            <h1>“Chroma Lab Experiment“</h1>
                            <h2>Video Game Development in Unreal Engine</h2>
                            <div className="heading-underline-left"></div>
                        </div>
                        <div className="cl-header-text">
                            <div className="header-maintext chroma">
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
                            </div>
                            <div className="cl-header-sectext">
                                <img src="/Img/speaking pigeon 2.png" className="cl-speaking-pigeon" alt="speaking-pigeon" />
                                <div>
                                    <img src="/Img/Unreal_Engine_Logo.svg 1.png" className="overlay-ue" alt="unreal-engine" />
                                    <ul>
                                        <li>3D object modeling using Blender</li>
                                        <li>Texturing using Substance Painter</li>
                                        <li>Audio work in Adobe Audition</li>
                                        <li>Light and scenes, as well as gameplay using Unreal Engine 5</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cl-snd">
                <div className="cl-snd-text">
                    <p>
                        The game made in Unreal Engine from scratch. Using Blender as a 3d modeling
                        tool and for rigging and animations, and Substance Painter for texturing,
                        I made an environment.
                    </p>
                    <p>
                        It is a multiplayer, collaborative game for 2 people, where you can solve 
                        puzzles and escape a laboratory.
                    </p>
                </div>
                <RandomImageBox />
            </div>
            <div className="chl_lab_bg"></div>
        </div>
    );
}