import ProjectBlock, { ProjectBlockProps } from '@/components/HomePage/ProjectBlocks/ProjectBlock';
import './Presentation.css';

const projects: ProjectBlockProps[] = [
	{
		title: 'Chroma Lab Experiment',
		subtitle: 'Video Game Development in Unreal Engine',
		link: '/Chroma_Lab_Experiment',
		background: '/Img/chromaLabBG.png',
		images: [
			"/Img/CompLogo/Unreal.png",
			"/Img/CompLogo/Blender.png",
			"/Img/CompLogo/Audition.png",
			"/Img/CompLogo/Substance painter.png",
			"/Img/CompLogo/AfterEffect.png",
		],
	},
	{
		title: 'Ouch by<br>BMTH',
		subtitle: 'Music Video in Blender',
		link: '/ouch',
		background: '/Img/OuchBG.png',
		images: [
			"/Img/CompLogo/Blender.png",
			"/Img/CompLogo/AfterEffect.png"
		]
	},
	{
		title: 'Alice in the Wonderland',
		subtitle: 'Animation in After Effects',
		link: '/alice',
		background: '/Img/AliceBG.png',
		images: [
			"/Img/CompLogo/Audition.png",
			"/Img/CompLogo/AfterEffect.png",
			"/Img/CompLogo/Illustrator.png",
		]
	},
];

export default function Presentation() {
	return (
		<div className='presentation-container'>
			<div>
				<h1 className="blue-text presentation">
					my works
				</h1>
			</div>
			<div className='project-container'>
				{projects.map((prj) => (
					<ProjectBlock
						title={prj.title}
						subtitle={prj.subtitle}
						images={prj.images}
						background={prj.background}
						link={prj.link} />
				))}
			</div>
		</div>
	);
}
