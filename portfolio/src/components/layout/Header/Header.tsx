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

	const scrollToPresentation = () => {
		const maxAttempts = 50;
		let attempts = 0;
		const offset = 120;

		const tryScroll = () => {
			const el = document.getElementsByClassName('presentation-container')[0];
			if (el) {
				const y = el.getBoundingClientRect().top + window.scrollY - offset;
				window.scrollTo({ top: y, behavior: 'smooth' });
			} else if (attempts < maxAttempts) {
				attempts++;
				setTimeout(tryScroll, 200);
			}
		};

		tryScroll();
	};

	const handleClickPortfolio = () => {
		navigate('/');
		setTimeout(scrollToPresentation, 300);
	};

	return (
		<div className="header-container">
			<header>
				<p onClick={() => navigate('/')}>ekaterina potapova</p>
				<img src="/Img/BB-bird-2.png" className="header-logo" alt="logo" onClick={() => setShowNav(!showNav)} />

				{showNav && (
					<div className="nav-box" ref={navRef}>
						<button onClick={() => navigate('/Contact')}>Contact me</button>
						<button onClick={handleClickPortfolio}>Portfolio</button>
						<button onClick={() => navigate('/CV')}>CV page</button>
						<button onClick={() => navigate('/pigeon')}>Why pigeon?</button>
					</div>
				)}
			</header>
		</div>
	);
}
