import React from "react";

import PropTypes from "prop-types";
import { Circle, HStack, Heading, Text, VStack } from "@chakra-ui/react";

function Feature({ icon, iconBg, heading, text }) {
  return (
    <HStack align="start" spacing="1.6rem" maxW="320px">
      <Circle size="3.75rem" bg={iconBg} color="white">
        {icon({ size: "1.5rem" })}
      </Circle>
      <VStack align="start" spacing="0.75rem">
        <Heading as="h3" size="md" pt="0rem">
          {heading}
        </Heading>
        <Text color="muted" lineHeight="2rem">
          {text}
        </Text>
      </VStack>
    </HStack>
  );
}

Feature.propTypes = {
  icon: PropTypes.func.isRequired,
  iconBg: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;
