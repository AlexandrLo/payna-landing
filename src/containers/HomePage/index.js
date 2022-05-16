import React from "react";

import CTA from "components/CTA";
import Features from "components/Features";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";

function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <CTA />
    </>
  );
}

export default HomePage;
