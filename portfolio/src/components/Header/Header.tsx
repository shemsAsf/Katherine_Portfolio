"use client";

import "./Header.css";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const navigate = useNavigate();

	return (
	<div className="header-container">
		<header className={isHomePage ? 'about-me-header' : ''}/>
		<div className="above-header" onClick={() => navigate('/')}>
			<p>ekaterina potapova</p>
			<img src="/Img/BB-bird-2.png" className="header-logo" alt="logo" />
		</div>
	</div>
	);
}