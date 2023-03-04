import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
        <p
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <Span>Tim's Protfolio</Span>
        </p>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="https://timx5225.github.io/Portfolio/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://timx5225.github.io/Portfolio/#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://timx5225.github.io/Portfolio/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/timx5225" title="Github">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/tim-lin-8b1797268/"
        title="Linkedin"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
