import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is Tim Lin's protfolio website. You are welcome to check my
        projects and applications here. I have been self-taughting programming
        languages for over a year. Any feedback for this website would be
        appreciated! Thank you!
      </SectionText>
      <Button onClick={() => (window.location = "#")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
