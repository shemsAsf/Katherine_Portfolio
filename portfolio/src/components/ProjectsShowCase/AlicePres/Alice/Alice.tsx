"use client";

import "./Alice.css";
import "../../ShowCase.css"
import ProjectTitle from "@/components/ProjectsShowCase/ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";
import DecoratedText from "@/components/DecoratedText/DecoratedText";
import Gallery from "@/components/layout/Gallery/Gallery";
import Carousel from "@/components/layout/CircularGallery/CircularGallery";

const carousselImgs = [
	"behance4.png",
	"behance5.png",
	"behance6.png",
	"behance10.png",
	"behance7.png",
	"behance8.png",
	"behance9.png",
	"behance11.png",
];

const circularCarousselImgs = [
	"/Img/Alice/behance5.png",
	"/Img/Alice/behance6.png",
	"/Img/Alice/behance7.png",
	"/Img/Alice/behance8.png",
	"/Img/Alice/behance9.png",
	"/Img/Alice/behance10.png",
	"/Img/Alice/behance11.png",
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
				components={["**Animation** in After Effects",
					"Frame sketching in **Adobe Illustrator**",
					"**Photoshop mockups**",
				]}
				images={[
					"/Img/CompLogo/Audition.png",
					"/Img/CompLogo/AfterEffect.png",
					"/Img/CompLogo/Illustrator.png",
				]} />


			<div className="alice-caroussel-wrapper">
				<h1>
					<DecoratedText
						text="project details"
						decoratedIndex={11}
						imageSrc={"/Img/Pigeons/idea_pigeon.png"}
					/>
				</h1>
				<div className="alice-text">
					<p>
						As an addition to the video, I made branding for a coworking place.
					</p>
					<p>
						Co working space with specifically Alice in the Wonderland theme,
						since Lewa work of Luis Carol especially resonated in adults hearts
						as we grow and we percieve his story from a completely different
						perspective.
					</p>
				</div>
				<Carousel images={circularCarousselImgs} />
			</div>

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
					rowAmount={4} />

			</div>
			<YouTubeEmbed
				srcs={["https://www.youtube.com/embed/FtBIqwyKfEE?si=oAHJZDy8vK0kugcW"]}
				color="white"
				text_color="var(--secondary-color)" />
		</>
	);
}