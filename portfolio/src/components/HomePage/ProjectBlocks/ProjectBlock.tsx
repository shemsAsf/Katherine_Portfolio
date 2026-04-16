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
            className={`project-block hover-target`}
            onClick={() => navigate(link)}
            style={{ '--bg-url': `url(${background})` } as React.CSSProperties}
        >
            <div className="project-content">
                <div className='project-logos'>
                    {images.map((src) => (
                        <img src={src} className="project-logo" alt="logo" />
                    ))}
                </div>
                <h2  dangerouslySetInnerHTML={{ __html: title }}></h2>
                <p className="xsm-txt">{subtitle}</p>
            </div>
        </div>
    );
};
