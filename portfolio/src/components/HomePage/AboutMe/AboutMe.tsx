"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./AboutMe.css";
import Presentation from "@/components/HomePage/Presentation/Presentation";

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
			</div>
			<div className="about-me-background">
				<div className="about-me-container">
					<div className="about-me-text">
						<h1>about me</h1>
						<h2>Multidisciplinary Designer & Motion Artist</h2>
						<p className="about-me-text-para">
							With a strong foundation in graphic design, I focus on
							<strong> motion 3D graphics</strong> and interested in
							game development. Also have a lot of experience in the
							sphere of 2d animation and <strong>communication design
							</strong> branding.
						</p>
						<p className="about-me-text-para-thin">
							<strong>My passion</strong> is to make design interesting
							and experiment with new complicated techniques and styles.
						</p>
						<p className="about-me-text-para-thin">
							<strong>I believe</strong> design should be not only visually
							appealing, but should also captivate minds.
						</p>
					</div>
					<div className="kat-pic">
						<img src="/Img/KatPic.png" alt="" />
					</div>
				</div>
					<div className="white-cover" />

			</div>
			<Presentation />
		</div>
	);
}