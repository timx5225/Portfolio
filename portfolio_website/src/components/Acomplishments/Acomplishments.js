import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 3, text: "Projects" },
  { number: 1, text: "year of study" },
  { number: 3, text: "Official Certifications" },
  { number: 4, text: "Finished Programming Courses" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionText>
      Certifications:
      <br />
      Google Analytics,
      <br />
      Google Ads,
      <br />
      Microsoft MTA: Introduction to Programming Using Python
    </SectionText>
  </Section>
);

export default Acomplishments;
