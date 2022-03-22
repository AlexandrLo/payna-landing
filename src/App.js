import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "containers/HomePage";
import AboutPage from "containers/AboutPage";

export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
			</Routes>
		</div>
	);
}
