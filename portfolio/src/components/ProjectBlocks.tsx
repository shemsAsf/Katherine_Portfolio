import './ProjectBlocks.css';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Chroma Lab Experiment',
    subtitle: 'Video Game Development in Unreal Engine',
    link: 'https://example.com/chroma-lab',
    image: '/images/chroma-lab.jpg',
  },
  {
    id: 2,
    title: 'Ouch by BMTH',
    subtitle: 'Music Video in Blender',
    link: 'https://example.com/ouch',
    image: '/images/ouch.jpg',
  },
  {
    id: 3,
    title: 'Alice in the Wonderland',
    subtitle: 'Animation in After Effects',
    link: 'https://example.com/alice',
    image: '/images/alice.jpg',
  },
];

export default function ProjectBlocks() {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project-block pb${project.id}`} 
          onClick={() => window.open(project.link, '_blank')}
        >
          <div className="project-content">
            <span className="project-number">{project.id}</span>
            <div>
              <p className="project-title">“{project.title}“</p>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
