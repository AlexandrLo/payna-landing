import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "containers/HomePage";
import AboutPage from "containers/AboutPage";
import NavBar from "./components/NavBar";

export default function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</div>
	);
}
