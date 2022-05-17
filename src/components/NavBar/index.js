import React from "react";

import { NavLink } from "react-router-dom";
import { Box, Button, Container, HStack, Link, Show } from "@chakra-ui/react";

import Logo from "assets/svg/logo.svg";

function NavBar() {
  return (
    <Container size="lg" py="2.5rem">
      <HStack>
        <Box w="100%" position="relative">
          <Link
            as={NavLink}
            to="/"
            transform="auto"
            translateY="-0.2rem"
            _focus={{ boxShadow: "none" }}
          >
            <Logo />
          </Link>
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
          <HStack w="100%" justify="flex-end">
            <Button colorScheme="gray" fontWeight="400">
              Sign In
            </Button>
          </HStack>
        </Show>
      </HStack>
    </Container>
  );
}

export default NavBar;
