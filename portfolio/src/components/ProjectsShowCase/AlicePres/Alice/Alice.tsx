"use client";

import "./Alice.css";
import "../../ShowCase.css"
import ProjectTitle from "@/components/ProjectsShowCase/ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";
import AliceCarousel from "@/components/ProjectsShowCase/AlicePres/AliceCarousel/AliceCarousel";
import RoundCover from "@/components/layout/RoundCover/RoundCover";

export default function Alice() {

	return (
		<><ProjectTitle
			title={['“Alice in the Wonderland”']}
			subtitle="Animation in After Effects"
			backgroundImage="/Img/Alice/AliceBackground.jpeg"
			accentColor="var(--secondary-color)"
			paragraph={(
				<>
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
				</>
			)}
			components={["<strong>Animation</strong> in After Effects",
				"Frame sketching in <strong>Adobe Illustrator</strong>",
				"<strong>Photoshop mockups</strong>",
			]}
			images={[
				"/Img/CompLogo/Audition.png",
				"/Img/CompLogo/AfterEffect.png",
				"/Img/CompLogo/Illustrator.png",
			]} />
			<AliceCarousel />
			<RoundCover bg_color="var(--secondary-color)" color="white"/>
			<YouTubeEmbed
				src="https://www.youtube.com/embed/FtBIqwyKfEE?si=oAHJZDy8vK0kugcW"
				color="white"
				text_color="var(--secondary-color)" />
		</>
	);
}