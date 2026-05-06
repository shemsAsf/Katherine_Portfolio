import { PageElement } from "./ElementRegistery";

export const pageConfig: { body: PageElement[] } = {
	body: [
		{
			type: 'header', props:
			{
				title: ['"Chroma Lab Experiment"'],
				subtitle: "Video Game Development in Unreal Engine",
				backgroundImage: "/Img/chromaLabBG.png",
				accentColor: "var(--primary-color)",
				paragraphs: [
					'The game about two cute characters, who are **trying to escape a laboratory** where they are **being held as lab rats.** The **"Chroma Laboratory"** is known for producing **toxic paint which gives the special abilities** depending on the color.',
					'**In the story,** the paint had to be tested before real life use, therefore the special test subjects were invented. **You are playing as the test subject** and have to proceed through all the test chambers to escape.',
				],
				components: [
					"**3D object** modeling using Blender",
					"**Texturing** using Substance Painter",
					"Audio work in **Adobe Audition**",
					"**Light and scenes**, as well as **gameplay using Unreal Engine 5**"
				],
				images: [
					"/Img/CompLogo/Unreal.png",
					"/Img/CompLogo/Blender.png",
					"/Img/CompLogo/Audition.png",
					"/Img/CompLogo/Substance painter.png",
					"/Img/CompLogo/AfterEffect.png",
				]
			}
		},
		{
			type: "projectDetailCaroussel", props:
			{
				paragraphs: [
					'The game made in **Unreal Engine** from scratch. Using Blender as a 3d modeling tool and for rigging and animations, and Substance Painter for texturing, I made an environment.',
					'It is a **multiplayer, collaborative game for 2 people**, where you can solve puzzles and escape a laboratory'
				],
				images: [
					"/Img/ChromaLab/Tower.png",
					"/Img/ChromaLab/Button.png",
					"/Img/ChromaLab/Traps.png",
					"/Img/ChromaLab/LastLvl.png",
					"/Img/ChromaLab/Levers.png",
					"/Img/ChromaLab/Barrel.png",
				]
			}
		},
		{
			type: "roundCover", props:
			{
				background: "var(--primary-color)",
				foreground: "white"
			}
		},
		{
			type: "pigeonTitle", props:
			{
				text: "branding",
				color: "var(--primary-color)",
				index: 2,
				pigeon: "/Img/Pigeons/paint-pigeon.png"
			}
		},
		{
			type: "imageRow",
			props: {
				align: "center",
				images: [
					{
						url: "/Img/ChromaLab/ChromaBody/cl_walking.gif",
						width: { mobile: 100, desktop: 60 }
					},
					{
						url: "/Img/ChromaLab/ChromaBody/Gifs for portfolio_text.gif",
						width: { mobile: 100, desktop: 50 }
					},
					{
						url: "/Img/ChromaLab/ChromaBody/Colors_2.gif",
						width: { mobile: 100, desktop: 50 }
					}
				]
			},
		},
		{
			type: "gallery", props: {
				rowAmount: 3,
				images: [
					'/Img/ChromaLab/ChromaGallery/Trailer_1 1.png',
					'/Img/ChromaLab/ChromaGallery/HighresScreenshot00145.png',
					'/Img/ChromaLab/ChromaGallery/HighresScreenshot00131.png',
					'/Img/ChromaLab/ChromaGallery/HighresScreenshot00132.png',
					'/Img/ChromaLab/ChromaGallery/HighresScreenshot00136.png',
					'/Img/ChromaLab/ChromaGallery/HighresScreenshot00156.png',
					'/Img/ChromaLab/ChromaGallery/HighresScreenshot00157.png',
					'/Img/ChromaLab/ChromaGallery/HighresScreenshot00155.png'
				]
			}
		}
	]
};