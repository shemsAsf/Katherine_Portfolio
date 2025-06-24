"use client";

import "./Ouch.css";
import "../../ShowCase.css"
import OuchCarousel from "../OuchCarousel/OuchCarousel";
import ProjectTitle from "../../ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";


export default function Ouch() {

	return (
		<>
			<ProjectTitle
				title={['“Ouch“', 'by BMTH']}
				subtitle="Music Video in Blender"
				backgroundImage="/Img/OuchPresBG.png"
				accentColor="var(--secondary-color)"
				paragraph={(
					<>
						<p>
							I worked on the (unofficial) music video for the song “Ouch”
							by Bring Me the Horizon. Using Blender and After Effects
							animation, the video depicts the emotional journey of a failed
							relationship as described by the band’s lead vocalist Oliver Sykes.
						</p>
					</>
				)} components={[
					"<strong>Animation</strong> in After Effects",
					"Frame sketching in <strong>Adobe Illustrator</strong>",
					"<strong>Photoshop mockups</strong>",
				]}
				images={[
					"/Img/CompLogo/Blender.png",
					"/Img/CompLogo/AfterEffect.png",
				]} />
				
			<div className="ouch-caroussel-wrapper">
				<div className="project-text">
					<h1>project details</h1>
					<br />
					<div className="project-text-flex">
						<p className="sm-txt">
							The music clip’s visual concept revolves around{" "}
							<strong>a room representing a failing relationship.</strong> Initially
							stable and filled with happy memories, the room transforms
							dramatically. Phones are thrown, lights flicker, and the presence of
							horns on bedsheets signifies betrayal. Presents turn unsettling,
							memories fade, and tears flow, filling the room with emotions.{" "}
							<strong>
								This visual journey captures the shift from stability to chaos,
								immersing viewers in the turbulent experience of a troubled
								relationship.
							</strong>
						</p>
						<p className="sm-txt">
							The music clip’s visual concept revolves around <strong>a room
								representing a failing relationship.</strong> Initially stable
							and filled with happy memories, the room transforms dramatically.
							Phones are thrown, lights flicker, and the presence of horns on
							bedsheets signifies betrayal. Presents turn unsettling, memories
							fade, and tears flow, filling the room with emotions. <strong>This
								visual journey captures the shift from stability to chaos, immersing
								viewers in the turbulent experience of a troubled relationship.</strong>
						</p>
					</div>
				</div>
				<OuchCarousel />
			</div>
            <YouTubeEmbed src="https://www.youtube.com/embed/kA7W6T8-zdg?si=ohd0d9B1qL3XnVuf" color="var(--secondary-color)"/>
		</>
	);
}