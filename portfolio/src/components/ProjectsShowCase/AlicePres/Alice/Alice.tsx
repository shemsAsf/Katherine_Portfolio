"use client";

import "./Alice.css";
import "../../ShowCase.css"
import ProjectTitle from "@/components/ProjectsShowCase/ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";
import AliceCarousel from "@/components/layout/CircularGallery/AliceCarousel/AliceCarousel";
import DecoratedText from "@/components/DecoratedText/DecoratedText";
import Gallery from "@/components/layout/Gallery/Gallery";

const carousselImgs = [
	"behance5.png",
	"behance6.png",
	"behance7.png",
	"behance8.png",
	"behance9.png",
	"behance10.png",
	"behance11.png",
];

export default function Alice() {

	return (
		<>
			<ProjectTitle
				title={['“Alice in the Wonderland”']}
				subtitle="Animation in After Effects"
				backgroundImage="/Img/Alice/AliceBackground.png"
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
			<div className="alicemock">
				<h1>
					<DecoratedText
						text="coworking"
						decoratedIndex={7}
						imageSrc={"/Img/Pigeons/paint-pigeon.png"}
					/>
				</h1>
				<h1>space mockupss</h1>

				<Gallery
					images={carousselImgs}
					path="/Img/Alice/"
					rowAmount={4}/>

			</div>
			<YouTubeEmbed
				srcs={["https://www.youtube.com/embed/FtBIqwyKfEE?si=oAHJZDy8vK0kugcW"]}
				color="white"
				text_color="var(--secondary-color)" />
		</>
	);
}