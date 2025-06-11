"use client";

import Header from './components/Header/Header';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import './App.css';
import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from './components/Footer/Footer';
import ChromaLab from './components/ChromaLab/ChromaLab';
import ScrollToTop from './components/ScrollToTop';
import { BrowserView, MobileView } from 'react-device-detect';
import PhoneMode from './components/PhoneMode/PhoneMode';

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
							<Route path="/" element={<HomePage />} />
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
