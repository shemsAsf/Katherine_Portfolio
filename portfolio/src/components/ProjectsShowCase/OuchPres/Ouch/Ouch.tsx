"use client";

import "./Ouch.css";
import "../../ShowCase.css"
import OuchCarousel from "../OuchCarousel/OuchCarousel";


export default function Ouch() {

	return (
		<>
			<div className="pink-under-header" />
			<div className="pink-Header">
				<div className="overlay-div">
					<img src="/Img/OuchPresBG.png" className="overlay-image" alt="Overlay" />
				</div>
				<div className="content-wrapper project-page-header-wrapper">

					<div className="ouch-pole" />
					<div className="project-page-title ouch">
						<h1>“Ouch“</h1> <h1>by BMTH</h1>
						<h2>Music Video in Blender</h2>
						<div className="heading-underline-left"></div>
					</div>
					<div className="header-maintext ouch">
						<p>
							I worked on the (unofficial) music video for the song “Ouch”
							by Bring Me the Horizon. Using Blender and After Effects
							animation, the video depicts the emotional journey of a failed
							relationship as described by the band’s lead vocalist Oliver Sykes.
						</p>
						<p>
							Music clip project created for Bring Me the Horizon’s song “Ouch.”
							Using Blender and After Effects animation, the clip portrays the
							intense emotional journey of a failed relationship described by lead
							vocalist Oliver Sykes.
							The clip unfolds in a familiar room, symbolizing the stability of a
							long-standing relationship. As the song progresses, the room transforms,
							reflecting the sudden and chaotic changes experienced in a turbulent
							relationship.
						</p>
					</div>
				</div>
			</div>
			<OuchCarousel />
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