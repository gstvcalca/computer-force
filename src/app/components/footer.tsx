"use client";

import styled from "styled-components";

import { useRouter } from "next/navigation";
import { SocialMedia } from "./social-media";
import { sairaOne } from "../layout";

const FooterTag = styled.section`
  text-align: center;
  background-color: var(--text-dark-2);
  color: white;
  padding: 1vw;
  border-top: 1px solid black;
  justify-content: space-between;
  line-height: 2em;
  display: flex;

  a {
    text-transform: uppercase;
    cursor: pointer;
    color: var(--bg-primary);
    text-decoration: none;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 12px;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;

const LogoH = styled.h1`
  font-size: 4vw;
  padding: 1vw 1vw;
  padding-bottom: 0;
  text-align: end;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        margin: 0;
    }
`

export function Footer() {
  const router = useRouter();
  const year = new Date().getFullYear();

  return (
    <FooterTag>
      <LogoH className={sairaOne.className}>
        <a href="/">caputteeno</a>
      </LogoH>
      <LeftContainer>
        <a href="/contact">Contact us</a>
        <br />
        <Separator />
        <SocialContainer>
          <p>© {year} Copyright: all rights reserved</p>
          <SocialMedia />
        </SocialContainer>
      </LeftContainer>
    </FooterTag>
  );
}
