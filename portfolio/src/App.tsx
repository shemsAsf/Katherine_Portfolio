"use client";

import Header from './components/layout/Header/Header';
import LoadingScreen from "./components/layout/LoadingScreen/LoadingScreen";
import './App.css';
import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import Footer from './components/layout/Footer/Footer';
import ChromaLab from './components/ProjectsShowCase/ChromaLabPres/ChromaLab/ChromaLab';
import ScrollToTop from './components/layout/ScrollToTop';
import AboutMe from './components/HomePage/AboutMe/AboutMe';
import Ouch from './components/ProjectsShowCase/OuchPres/Ouch/Ouch';
import Alice from './components/ProjectsShowCase/AlicePres/Alice/Alice';

function AppContent() {
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		setLoading(true);

		//const delay = location.pathname === '/' ? 5000 : 3000;
		const delay = 100;
		const timer = setTimeout(() => {
			setLoading(false);
		}, delay);

		return () => clearTimeout(timer);
	}, [location.pathname]);


	return loading ? (
		<LoadingScreen />
	) : (
		<div>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<AboutMe />} />
				<Route path="/Chroma_Lab_Experiment" element={<ChromaLab />} />
				<Route path="/Ouch" element={<Ouch />} />
				<Route path="/Alice" element={<Alice />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}
