import ProjectBlock, { ProjectBlockProps } from '@/components/HomePage/ProjectBlocks/ProjectBlock';
import './Presentation.css';
import DecoratedText from '@/projects/components/DecoratedText';
import { useEffect, useState } from 'react';
import { fetchIndex } from '@/projects/builder/BuilderApi';

export default function Presentation() {
	const [projects, setProjects] = useState<ProjectBlockProps[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadProjects = async () => {
			try {
				const indexEntries = await fetchIndex();

				const sortedEntries = indexEntries.sort((a, b) => a.id - b.id);

				const mappedProjects: ProjectBlockProps[] = sortedEntries
					.filter(entry => entry.visible)
					.map(entry => ({
						title: entry.title,
						subtitle: entry.subtitle,
						link: `/Project/${entry.id}`,
						background: entry.cover,
						images: entry.tools || []
					}));

				setProjects(mappedProjects);
			} catch (err) {
				console.error("Failed to load projects:", err);
			} finally {
				setLoading(false);
			}
		};

		loadProjects();
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<div className='presentation-container'>
			<div>
				<h1 className="blue-text presentation">
					<DecoratedText
						text="my works"
						decoratedIndex={7}
						imageSrc={"/Img/Pigeons/paint-pigeon.png"}
					/>
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
