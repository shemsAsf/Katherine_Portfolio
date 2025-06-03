"use client";

import "./Header.css";
import { useLocation } from 'react-router-dom';

export default function Header() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
	<div className="header-container">
		<header className={isHomePage ? 'about-me-header' : ''}/>
		<div className="above-header">
			<p>ekaterina potapova</p>
			<img src="/Img/BB-bird-2.png" className="logo" alt="logo" />
		</div>
	</div>
	);
}