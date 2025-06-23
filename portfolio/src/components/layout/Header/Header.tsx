"use client";

import "./Header.css";
import { useNavigate } from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();

	return (
	<div className="header-container">
		<header>
			<p onClick={() => navigate('/')}>ekaterina potapova</p>
			<img src="/Img/BB-bird-2.png" className="header-logo" alt="logo" />
		</header>
	</div>
	);
}