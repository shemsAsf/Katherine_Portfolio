import './Presentation.css';
import ProjectBlocks from '../ProjectBlocks/ProjectBlocks';

export default function Presentation() {
	return (
		<div className='presentation-container'>
			<div className='presentation'>
				<h1 className="presentation">
					my works
				</h1>
				<img src="/Img/pixil-frame-0 (12) 1.png" className="presentation" alt="logo" />
			</div>
			<ProjectBlocks />
			<div className='presentation'>
				<h1 className="presentation">
					my showreel
				</h1>
				<img src="/Img/pixil-frame-0 (12) 3.png" className="presentation" alt="logo" />
			</div>

			<div className="video-wrapper">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/m19dTPwN9MA?si=8D3q-z0rLM7WoqP8"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
