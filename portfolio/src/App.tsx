import { useEffect, useState } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import LoadingScreen from "@/components/layout/LoadingScreen/LoadingScreen";
import AboutMe from '@/components/HomePage/AboutMe/AboutMe';
import ChromaLab from '@/components/ProjectsShowCase/ChromaLabPres/ChromaLab/ChromaLab';
import Ouch from '@/components/ProjectsShowCase/OuchPres/Ouch/Ouch';
import Alice from '@/components/ProjectsShowCase/AlicePres/Alice/Alice';
import CV from "@/components/CV/CVcomp/CV";
import MouseFollower from "./components/layout/MouseTracker/MouseFollower";

function AppContent() {
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		setLoading(true);

		const checkMediaReady = () => {
			const images = Array.from(document.images);
			const videos = Array.from(document.querySelectorAll('video'));

			const imagePromises = images.map(img =>
				new Promise(resolve => {
					if (img.complete) return resolve(true);
					img.addEventListener('load', () => resolve(true), { once: true });
					img.addEventListener('error', () => resolve(true), { once: true });
				})
			);

			const videoPromises = videos.map(video =>
				new Promise(resolve => {
					if (video.readyState >= 3) return resolve(true); // HAVE_FUTURE_DATA
					video.addEventListener('loadeddata', () => resolve(true), { once: true });
					video.addEventListener('error', () => resolve(true), { once: true });
				})
			);

			Promise.all([...imagePromises, ...videoPromises]).then(() => {
				setLoading(false);
			});
		};

		const timer = setTimeout(() => {
			if (document.readyState === 'complete') {
				checkMediaReady();
			} else {
				window.addEventListener('load', checkMediaReady, { once: true });
			}
		}, 3000);

		return () => {
			clearTimeout(timer);
			window.removeEventListener('load', checkMediaReady);
		};
	}, [location.pathname]);

	return (
		<div style={{ position: "relative" }}>
			<ScrollToTop />
			<MouseFollower />
			<Header />
			<Routes>
				<Route path="/" element={<AboutMe />} />
				<Route path="/Chroma_Lab_Experiment" element={<ChromaLab />} />
				<Route path="/Ouch" element={<Ouch />} />
				<Route path="/Alice" element={<Alice />} />
				<Route path="/CV" element={<CV />} />
			</Routes>
			<Footer />

			{loading && (
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						backgroundColor: "white",
						zIndex: 9999,
					}}
				>
					<LoadingScreen />
				</div>
			)}
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
