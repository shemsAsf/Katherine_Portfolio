"use client";

import "./Header.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
	const navigate = useNavigate();
	const [showNav, setShowNav] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				showNav &&
				navRef.current &&
				!navRef.current.contains(event.target as Node) &&
				logoRef.current &&
				!logoRef.current.contains(event.target as Node)
			) {
				setShowNav(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [showNav]);

	return (
		<div className="header-container">
			<header>
				<p onClick={() => navigate('/')}>ekaterina potapova</p>
				<div className="logo-container" onClick={() => setShowNav(!showNav)} ref={logoRef}>
					<img src="/Img/BB-bird-2.png" className="header-logo" alt="logo" />
				</div>
				{showNav && (
					<div className="nav-box" ref={navRef}>
						<button onClick={() => navigate('/Contact')}>Contact me</button>
						<button onClick={() => navigate('/portfolio')}>Portfolio</button>
						<button onClick={() => navigate('/CV')}>CV page</button>
						<button onClick={() => navigate('/pigeon')}>Why pigeon?</button>
					</div>
				)}
			</header>
		</div>
	);
}
