import React from "react";
import { Container, Text, Show, Wrap, WrapItem, Hide } from "@chakra-ui/react";

import LogoApple from "assets/logo-apple.svg";
import LogoAdobe from "assets/logo-adobe.svg";
import LogoSlack from "assets/logo-slack.svg";
import LogoSpotify from "assets/logo-spotify.svg";
import LogoGoogle from "assets/logo-google.svg";

function LogoCloud() {
	return (
		<Container size="md" pt={{ base: "3.125rem", md: "4.375rem" }}>
			<Wrap
				justify={{ sm: "start", md: "center", lg: "space-between" }}
				align="center"
				spacing="1.55rem"
			>
				{/* Heading */}
				<WrapItem>
					<Show above="lg">
						<Text fontWeight="600">
							Trusted by
							<br />
							Global Companies
						</Text>
					</Show>
					<Show below="lg">
						<Text fontWeight="600">Trusted by Global Companies</Text>
					</Show>
				</WrapItem>
				{/* Logos */}
				<WrapItem paddingRight={{ base: 0, xl: "2rem" }}>
					<Wrap
						spacing={{ base: "1.5rem", md: "3rem" }}
						justify={{ sm: "start", md: "center", lg: "space-between" }}
					>
						<WrapItem>
							<Show below="sm">
								<LogoApple width="100%" height="26px" />
							</Show>
							<Hide below="sm">
								<LogoApple />
							</Hide>
						</WrapItem>
						<WrapItem>
							<Show below="sm">
								<LogoAdobe width="100%" height="26px" />
							</Show>
							<Hide below="sm">
								<LogoAdobe />
							</Hide>
						</WrapItem>
						<WrapItem>
							<Show below="sm">
								<LogoSlack width="100%" height="26px" />
							</Show>
							<Hide below="sm">
								<LogoSlack />
							</Hide>
						</WrapItem>
						<WrapItem>
							<Show below="sm">
								<LogoSpotify width="100%" height="26px" />
							</Show>
							<Hide below="sm">
								<LogoSpotify />
							</Hide>
						</WrapItem>
						<WrapItem>
							<Show below="sm">
								<LogoGoogle width="100%" height="26px" />
							</Show>
							<Hide below="sm">
								<LogoGoogle />
							</Hide>
						</WrapItem>
					</Wrap>
				</WrapItem>
			</Wrap>
		</Container>
	);
}

export default LogoCloud;
