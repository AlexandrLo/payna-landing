import { extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins/latin.css";

import Button from "./components/Button";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Link from "./components/Link";

const theme = extendTheme({
  components: {
    Button,
    Container,
    Heading,
    Input,
    Link,
  },
  colors: {
    muted: "#575455",
    blue: {
      50: "#e4efff",
      100: "#bcd8ff",
      200: "#8fbeff",
      300: "#62a3ff",
      400: "#4190ff",
      500: "#1f7cff",
      600: "#1b74ff",
      700: "#1769ff",
      800: "#125fff",
      900: "#0a4cff",
    },
    gray: {
      50: "#F7FAFC",
      100: "#F5F6FB",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      "*, *::before, &::after": {
        WebkitTapHighlightColor: "transparent",
      },
    },
  },
});

export default theme;
