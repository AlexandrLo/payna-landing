import React from "react";
import { Container, Hide, Show, Text, Wrap, WrapItem } from "@chakra-ui/react";

import LogoAdobe from "assets/svg/logo-adobe.svg";
import LogoApple from "assets/svg/logo-apple.svg";
import LogoGoogle from "assets/svg/logo-google.svg";
import LogoSlack from "assets/svg/logo-slack.svg";
import LogoSpotify from "assets/svg/logo-spotify.svg";

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
