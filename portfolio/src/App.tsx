"use client";

import Header from './components/layout/Header/Header';
import LoadingScreen from "./components/layout/LoadingScreen/LoadingScreen";
import './App.css';
import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from './components/layout/Footer/Footer';
import ChromaLab from './components/ChromaLab/ChromaLab/ChromaLab';
import ScrollToTop from './components/layout/ScrollToTop';
import { BrowserView, MobileView } from 'react-device-detect';
import PhoneMode from './components/PhoneMode/PhoneMode';
import AboutMe from './components/HomePage/AboutMe/AboutMe';

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<BrowserRouter>
				{loading ? (
					<LoadingScreen />
				) : (<div>
					<ScrollToTop />
					<Header />
					<BrowserView>
						<Routes>
							<Route path="/" element={<AboutMe />} />
							<Route path="/Chroma_Lab_Experiment" element={<ChromaLab />} />
						</Routes>
						<Footer />
					</BrowserView>
					<MobileView>
						<PhoneMode />
					</MobileView>
				</div>)}
			</BrowserRouter>
		</>

	);
}
