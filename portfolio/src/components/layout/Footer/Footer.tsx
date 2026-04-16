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
				<p className="xxsm-txt">mail: katherineaston29@gmail.com</p>
				<p className="xxsm-txt">whatsapp: +393383818706</p>
				<p className="xxsm-txt">linkedin: Ekaterina Potapova</p>
				<p className="xxsm-txt">behance: Katherine Aston</p>
			</div>
			<div className="footer-img">
				<img src="/Img/Pigeons/laptop_pigeon.png" className="footer-pigeon" alt="logo" />
			</div>
			<div className="xxsm-txt rotating-text footer-div">{RotatingText}</div>
		</footer>
	);
}