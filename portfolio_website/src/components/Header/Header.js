import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Protfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/timx5225" title="Github">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com/tim.lin.1426/" title="Facebook">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/timlin000" title="Instagram">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
