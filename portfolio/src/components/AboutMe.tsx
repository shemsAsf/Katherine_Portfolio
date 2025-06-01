"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./AboutMe.css";

export default function AboutMe() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);

	const handleClick = () => {
		if (videoRef.current) {
			let newSound = !videoRef.current.muted;
			videoRef.current.muted = newSound;
			setMuted(newSound);
		}
	};


	return (
		<div>
			<div className="about-me-video-container" onClick={handleClick}>
				<video
					ref={videoRef}
					className="about-me-bg-vid"
					src="/Vid/Presentation.mp4"
					autoPlay
					loop
					muted
					playsInline
				/>
				<div className="sound-icon">
					{muted ? <VolumeX size={24} color="white" /> : <Volume2 size={24} color="white" />}
				</div>

				<div className="about-me-text">
					<h1>about me</h1>
					<h2>Multidisciplinary Designer & Motion Artist</h2>
					<div className="heading-underline"></div>
				</div>
			</div>
			<div className="about-me-gradient-container">
				<div className="left-text">
					<p>
						With a strong foundation in graphic design, I focus on <strong>motion 3D graphics</strong> and interested in game development. Also have a lot of experience in the sphere of 2d animation and <strong>communication design</strong> branding.
					</p>
				</div>

				<div className="right-text">
					<p><strong>My passion</strong> is to make design interesting and experiment with new complicated techniques and styles.</p>
					<p><strong>I believe</strong> design should be not only visually appealing, but should also captivate minds.</p>
				</div>

				<div className="bottom-text">
					<p><strong>Look thought my portfolio below!</strong></p>
				</div>
			</div>
		</div>
	);
}