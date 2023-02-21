import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";
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
        <SocialIcons href="https://facebook.com/tim.lin.1426/" title="Facebook">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/timlin000" title="Instagram">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
