import React from "react";

import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import {
  FiBriefcase,
  FiGift,
  FiGlobe,
  FiSend,
  FiTrello,
  FiWifiOff,
} from "react-icons/fi";

import Feature from "./Feature";

const featuresData = [
  {
    icon: FiBriefcase,
    iconBg: "#1F7CFF",
    heading: "Share Insights",
    text: "Working together with your team to make decisions",
  },
  {
    icon: FiSend,
    iconBg: "#F75C4E",
    heading: "Track Leads",
    text: "See where your money goes and comes in business",
  },
  {
    icon: FiWifiOff,
    iconBg: "#191046",
    heading: "Offline Mode",
    text: "Use the feature while off from internet? sure can",
  },
  {
    icon: FiTrello,
    iconBg: "#FF1FB3",
    heading: "Kanban Mode",
    text: "Organize the report that easy to be understand",
  },
  {
    icon: FiGift,
    iconBg: "#5C4EF7",
    heading: "Reward System",
    text: "Motivate your team working harder and receive a gift",
  },
  {
    icon: FiGlobe,
    iconBg: "#F7954E",
    heading: "189 Country",
    text: "Working together worldwide people from anywhere",
  },
];

function Features() {
  return (
    <Container size="md" pt={{ base: "5rem", md: "8.125rem" }}>
      <VStack spacing={{ base: "3rem", md: "4.25rem" }}>
        {/* Heading */}
        <VStack spacing="1.25rem">
          <VStack spacing="0.5rem">
            <Text fontWeight="700" color="red.400" textAlign="center">
              WORK BETTER
            </Text>
            <Heading as="h2" size="lg" textAlign="center">
              For Your Business
            </Heading>
          </VStack>
          <Text color="muted" maxW="25rem" textAlign="center" lineHeight="2rem">
            We did research what your company needs and here we are providing
            all of them just for you
          </Text>
        </VStack>
        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingY="3.75rem"
          spacingX="5.25rem"
          maxW="1105px"
        >
          {featuresData.map((featureData, index) => (
            <Feature
              key={index}
              icon={featureData.icon}
              iconBg={featureData.iconBg}
              heading={featureData.heading}
              text={featureData.text}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default Features;
