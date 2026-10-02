"use client";

import "./Footer.css";

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}

export default function Footer() {
	const rotatingTexts = [
		"No pigeons were harmed in the making of this portfolio",
		"This website is 99% visual. 1% PIGEON",
		"Pecking at pixels since 2020",
		"This pigeon doesn’t sleep, it renders",
		"One more click and the pigeon does a spin",
		"Designs may vary. Pigeon stays iconic.",
	]

	let RotatingText = rotatingTexts[getRandomInt(rotatingTexts.length)]
	
	return (
		<footer>
			<div className="footer-div">
				<a href="mailto:katherinepotapof@gmail.com" className="xxsm-txt">mail: katherinepotapof@gmail.com</a>
				<a href="https://wa.me/393383818706" className="xxsm-txt">whatsapp: +393383818706</a>
				<a href="https://www.linkedin.com/in/katherine-aston/" className="xxsm-txt">linkedin: Ekaterina Potapova</a>
				<a href="https://www.behance.net/katherineaston" className="xxsm-txt">behance: Ekaterina Potapova</a>
			</div>
			<div className="footer-img">
				<img src="/Img/Pigeons/laptop_pigeon.png" className="footer-pigeon" alt="logo" />
			</div>
			<div className="xxsm-txt rotating-text footer-div">
				<p className="xxsm-txt">{RotatingText}</p>
			</div>
		</footer>
	);
}