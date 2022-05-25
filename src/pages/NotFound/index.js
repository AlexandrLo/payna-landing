import React from "react";

import { Link } from "react-router-dom";
import { Button, Container, Heading, VStack } from "@chakra-ui/react";

function NotFound() {
  return (
    <Container
      size="md"
      pt={{ base: "0.5rem", md: "3.75rem" }}
      pr={{ xl: "0.25rem" }}
    >
      <VStack spacing="2rem" py="4rem">
        <Heading as="h1" size="3xl">
          Page Not Found...
        </Heading>
        <Button as={Link} to="/" colorScheme="blue">
          Back to Homepage
        </Button>
      </VStack>
    </Container>
  );
}

export default NotFound;
