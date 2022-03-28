import React from "react";
import {
	Box,
	Container,
	Text,
	HStack,
	VStack,
	Button,
	Heading,
	Show,
	Image,
} from "@chakra-ui/react";
import HeroImage from "assets/hero-image.png";

function Hero() {
	return (
		<Container
			size="md"
			pt={{ base: "0.5rem", md: "3.75rem" }}
			paddingRight={{ xl: "0.25rem" }}
		>
			<HStack
				justifyContent={{ base: "start", md: "center", xl: "space-between" }}
			>
				<VStack
					maxW={{ md: "28.125rem", xl: "100%" }}
					alignItems={{ base: "start", md: "center", xl: "start" }}
					textAlign={{ base: "start", md: "center", xl: "start" }}
					spacing={{ base: "1.6rem", md: "1.65rem" }}
				>
					<Heading as="h1" size="3xl">
						Manage Payroll Like an Expert
					</Heading>
					<Text color="muted" lineHeight="taller">
						Payna is helping you to setting up the payroll without required any
						finance skills or knowledge before
					</Text>
					<Button colorScheme="blue">Get Started</Button>
				</VStack>

				<Show above="xl">
					<Image src={HeroImage} alt="Hero image" />
				</Show>
			</HStack>
		</Container>
	);
}

export default Hero;
