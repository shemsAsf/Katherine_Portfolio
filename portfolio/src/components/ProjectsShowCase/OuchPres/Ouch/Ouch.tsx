"use client";

import "./Ouch.css";
import "../../ShowCase.css"
import ProjectTitle from "../../ProjectTitle/ProjectTitle";
import YouTubeEmbed from "@/components/layout/YouTubeEmbeded/YouTubeEmbeded";
import DecoratedText from "@/components/DecoratedText/DecoratedText";
import RoundCover from "@/components/layout/RoundCover/RoundCover";
import CardsFan from "../../../layout/CardSwap/CardFan";
import Gallery from "@/components/layout/Gallery/Gallery";


export default function Ouch() {

	const carousselImgs = [
		'1.gif',
		'4.gif',
		'10.gif',
		'8.gif',
		'11_1.gif',
		'14.gif',
		'15.gif',
		'3.gif',
		'12.gif',
		'5.gif',
		'2.gif',
		'16.gif',
	];

	return (
		<>
			<ProjectTitle
				title={['“Ouch“', 'by BMTH']}
				subtitle="Music Video in Blender"
				backgroundImage="/Img/Ouch/OuchBG.jpg"
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

			<div className="ouch-project">
				<div className="project-text">
					<br/><br/>
					<h1>
						<DecoratedText
							text="project details"
							decoratedIndex={11}
							imageSrc={"/Img/Pigeons/idea_pigeon.png"}
						/>
					</h1>
					<br />
					<div className="card-fan-wrapper">
						<div className="project-text-flex">
							<p className="sm-txt">
								Music clip project created for Bring Me the Horizon’s song “Ouch.”
								Using Blender and After Effects animation, the clip portrays the
								intense emotional journey of a failed relationship described by
								lead vocalist Oliver Sykes. <br />
								The clip unfolds in a familiar room, symbolizing the stability of
								a long-standing relationship.
								As the song progresses, the room transforms, reflecting the sudden
								and chaotic changes experienced in a turbulent relationship.
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
						<CardsFan images={[
							"/Img/Ouch/ouchCaroussel1.png",
							"/Img/Ouch/ouchCaroussel2.png",
							"/Img/Ouch/ouchCaroussel3.png",
							"/Img/Ouch/ouchCaroussel4.png",
						]} />
					</div>
				</div>
				<RoundCover bg_color="var(--secondary-color)" color="white" />
			</div>

			<div className="ouch_content">
				<h1>
					<DecoratedText
						text="development"
						decoratedIndex={9}
						imageSrc="/Img/Pigeons/paint-pigeon.png"
					/>
				</h1>
				<br /><br /><br />
				<p className="sm-txt">
					Through symbolic elements and dynamic transformations,
					the visuals depict the <strong>breakdown of communication, </strong>
					infidelity, emotional pain, and fading connections.
					Tears, representing intense emotions, symbolize the
					protagonist's overwhelming feelings. <strong>This visually
					captivating depiction allows viewers to relate to the
					complexities of love, loss, and emotional turmoil,
					leaving a lasting impact and a deeper connection with
					the song's themes.</strong>
				</p>
				<br /><br />
				<div className="ouch_content_s1">
					<img src='/Img/Ouch/OuchCan00.png' alt=''/>
					<p className="sm-txt">
						<strong>The target audience</strong> is primarily Bring Me the Horizon fans, especially
						those who like the emotionally charged songs of the group. This will include fans of alternative rock and post-hardcore who appreciate the unique sound of the group and the depth of the lyrics.
						<br /><br />
						In addition, a clip dedicated to the complexities of relationships
						and emotional roller coaster of parting, may appeal to a wider audience interested in the topics of love, loss
						and personal growth. These can be young people and people who have experienced or are coping with their own relationship problems.
					</p>
				</div>

				<Gallery path="/Img/Ouch/Gallery/" images={carousselImgs} />

			</div>	
				
			<YouTubeEmbed
				srcs={["https://www.youtube.com/embed/kA7W6T8-zdg?si=ohd0d9B1qL3XnVuf"]}
				color="var(--secondary-color)"
				text_color="white" />
		</>
	);
}