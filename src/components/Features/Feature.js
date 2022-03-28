import React from "react";
import { Text, HStack, VStack, Heading, Circle } from "@chakra-ui/react";

function Feature(props) {
	return (
		<HStack align="start" spacing="1.6rem" maxW="320px">
			<Circle size="3.75rem" bg={props.iconBg} color="white">
				{props.icon({ size: "1.5rem" })}
			</Circle>
			<VStack align="start" spacing="0.75rem">
				<Heading as="h3" size="md" pt="0rem">
					{props.heading}
				</Heading>
				<Text color="muted" lineHeight="2rem">
					{props.text}
				</Text>
			</VStack>
		</HStack>
	);
}

export default Feature;
