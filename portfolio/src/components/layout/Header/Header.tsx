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
		setShowNav(false);
		navigate('/');
		setTimeout(scrollToPresentation, 300);
	};

	const handleNavigate = (path: string) => {
		setShowNav(false);
		navigate(path);
	};

	return (
		<div className="header-container">
			<header>
				<p onClick={() => handleNavigate('/')}>ekaterina potapova</p>
				<div ref={logoRef}>
					<img src="/Img/Pigeons/header_pigeon.png" className="header-logo" alt="logo" onClick={() => setShowNav(!showNav)} />
				</div>

				{showNav && (
					<div className="nav-box" ref={navRef}>
						<button onClick={() => handleNavigate('/Contact')}>Contact me</button>
						<button onClick={handleClickPortfolio}>Portfolio</button>
						<button onClick={() => handleNavigate('/CV')}>CV page</button>
						<button onClick={() => handleNavigate('/pigeon')}>Why pigeon?</button>
					</div>
				)}
			</header>
		</div>
	);
}
