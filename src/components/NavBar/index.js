import React from "react";

import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Show,
} from "@chakra-ui/react";

import Logo from "assets/svg/logo.svg";

function NavBar() {
  return (
    <Container size="lg" py="2.5rem">
      <HStack>
        <Box w="100%" position="relative">
          <Box translateY="-0.2rem" transform="auto">
            <Logo />
          </Box>
        </Box>
        <Show above="lg">
          <HStack w="auto" spacing="3.75rem">
            <Link as={NavLink} to="/">
              Home
            </Link>
            <Link as={NavLink} to="/features">
              Features
            </Link>
            <Link as={NavLink} to="/showcase">
              Showcase
            </Link>
            <Link as={NavLink} to="/pricing">
              Pricing
            </Link>
          </HStack>
        </Show>
        <Show above="sm">
          <Flex w="100%" display="flex" justify="end">
            <Button colorScheme="gray" fontWeight="400">
              Sign In
            </Button>
          </Flex>
        </Show>
      </HStack>
    </Container>
  );
}

export default NavBar;
