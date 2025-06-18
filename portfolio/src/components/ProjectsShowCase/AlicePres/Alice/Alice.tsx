"use client";

import "./Alice.css";
import "../../ShowCase.css"
import AliceCarousel from "../AliceCarousel/AliceCarousel";


export default function Alice() {

	return (
		<>
			<div className="pink-under-header" />
			<div className="pink-Header">
				<div className="overlay-div">
					<img src="/Img/AliceBG.png" className="overlay-image" alt="Overlay" />
				</div>
				<div className="content-wrapper project-page-header-wrapper">

					<div className="alice-pole" />
					<div className="project-page-title alice">
						<h1>“Alice in the Wonderland”</h1>
						<h2>Animation in After Effects</h2>
						<div className="heading-underline-left"></div>
					</div>
					<div className="header-maintext alice">
						<p>
							Animation made in After Effects for social media 
                            with New Year wishes for 2023. 
						</p>
						<p>
							2023 marked the 100th anniversary of the death of 
                            Luis Carol and to honor such a famous writer, I 
                            wanted to remember his most famous work - Alice 
                            in Wonderland.
						</p>
                        <p>
                            I wanted to convey my wish for 2023 through the plot 
                            of his work and the phrases of the main characters, 
                            which carry much more valuable meaning for us now than 
                            in childhood.
                        </p>
					</div>
				</div>
			</div>
            <AliceCarousel />
			<div className="fullwidth-video-container">
				<iframe
					src="https://www.youtube.com/embed/kA7W6T8-zdg?si=ohd0d9B1qL3XnVuf"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>

		</>
	);
}