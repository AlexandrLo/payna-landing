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
	Hide,
	Image,
	Wrap,
	WrapItem,
	InputGroup,
	Input,
	InputRightElement,
} from "@chakra-ui/react";

function EmailInput(props) {
	return (
		<div>
			<Show above="sm">
				<InputGroup>
					<Input
						pr="13.25rem"
						type="email"
						variant="filled"
						placeholder="Email Address"
						{...props}
					/>
					<InputRightElement width="auto">
						<Button colorScheme="blue">Get Started</Button>
					</InputRightElement>
				</InputGroup>
			</Show>
			<Hide above="sm">
				<Input
					type="email"
					variant="filled"
					placeholder="Email Address"
					{...props}
				/>
				<Button colorScheme="blue" width="100%" mt="0.75rem">
					Get Started
				</Button>
			</Hide>
		</div>
	);
}

export default EmailInput;
