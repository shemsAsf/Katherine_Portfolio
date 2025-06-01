"use client";

import Header from './components/Header';
import LoadingScreen from "./components/LoadingScreen";
import './App.css';
import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<BrowserRouter>
			{loading ? (
				<LoadingScreen />
			) : (<div>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</div>)}
		</BrowserRouter>
	);
}
