import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
            <AiFillPhone size="1rem" />
          </LinkTitle>
          <LinkItem href="tel:09-33276040">09-33276040</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            Email
            <AiFillMail size="1rem" />
          </LinkTitle>
          <LinkItem href="mailto:timlin000@gmail.com">
            timlin000@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Contact me via</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/timx5225" title="Github">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/tim-lin-8b1797268/"
          title="Linkedin"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
