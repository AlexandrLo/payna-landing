import React from "react";
import { Box, Container, Link, HStack, Button, Show } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "assets/logo.svg";

function NavBar() {
	return (
		<Box paddingY="2.5rem">
			<Container size="lg">
				<HStack>
					<Box w="100%" position="relative">
						<Box translateY="-0.2rem" transform="auto">
							<Logo />
						</Box>
					</Box>
					<Show above="lg">
						<HStack w="auto" spacing="3.75rem">
							<Link as={RouterLink} to="/" variant="active">
								Home
							</Link>
							<Link as={RouterLink} to="/">
								Features
							</Link>
							<Link as={RouterLink} to="/">
								Showcase
							</Link>
							<Link as={RouterLink} to="/">
								Pricing
							</Link>
						</HStack>
					</Show>
					<Show above="sm">
						<Box w="100%" display="flex" justifyContent="end">
							<Button colorScheme="gray" fontWeight="400">
								Sign In
							</Button>
						</Box>
					</Show>
				</HStack>
			</Container>
		</Box>
	);
}

export default NavBar;
