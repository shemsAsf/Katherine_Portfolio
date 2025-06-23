import { useNavigate } from 'react-router-dom';
import './ProjectBlock.css';

export interface ProjectBlockProps {
    title: string;
    subtitle: string;
    images: string[];
    background: string;
    link: string;
}

export default function ProjectBlock({
    title,
    subtitle,
    images,
    background,
    link
}: ProjectBlockProps) {
    const navigate = useNavigate();

    return (

        <div
            className={`project-block`}
            onClick={() => navigate(link)}
            style={{ '--bg-url': `url(${background})` } as React.CSSProperties}
        >
            <div className="project-content">
                <div className='project-logos'>
                    {images.map((src) => (
                        <img src={src} className="project-logo" alt="logo" />
                    ))}
                </div>
                <p className="project-title">“{title}“</p>
                <p className="project-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};
