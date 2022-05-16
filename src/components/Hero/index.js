import React from "react";
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Container
      size="md"
      pt={{ base: "0.5rem", md: "3.75rem" }}
      pr={{ xl: "0.25rem" }}
    >
      <HStack justify={{ base: "start", md: "center", xl: "space-between" }}>
        <VStack
          maxW={{ md: "28.125rem", xl: "100%" }}
          align={{ base: "start", md: "center", xl: "start" }}
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
          <Image src="assets/images/hero-image.png" alt="Hero image" />
        </Show>
      </HStack>
    </Container>
  );
}

export default Hero;
