"use client";

import "./Header.css";

export default function Header() {
	return (
	<div className="header-container">
		<div className="under-header"></div>
		<header/>
		<div className="above-header">
			<p>ekaterina potapova</p>
			<img src="/Img/BB-bird-2.png" className="logo" alt="logo" />
		</div>
	</div>
	);
}