import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { MdBackupTable } from "react-icons/md";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I learned Python as my first programming language. After practicing to
      make a few projects using frameworks like Django, Pygame, I started to
      learn front-end languages like HTML, CSS, JavaScript, and I used styled
      components in ReactJS and ES6 to build this website.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3.5rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experienced with <br />
            HTML, CSS, JavaScript, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3.2rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Python Flask, Django, MySQL, <br />
            AWS S3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <MdBackupTable size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experienced with <br />
            tools like Wix, Wordpress, App Inventor2 (AI2)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
