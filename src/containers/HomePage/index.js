import React from "react";
import { VStack } from "@chakra-ui/react";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";
import Features from "components/Features";
import CTA from "components/CTA";

function HomePage() {
	return (
		<div>
			<Hero />
			<LogoCloud />
			<Features />
			<CTA />
		</div>
	);
}

export default HomePage;
