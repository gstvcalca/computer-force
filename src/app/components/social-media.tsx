"use client"

import { useRouter } from "next/navigation";
import { FacebookIcon } from "./icons/facebook-icon";
import { GithubIcon } from "./icons/github-icon";
import { InstagramIcon } from "./icons/instagram-icon";
import styled from "styled-components";

const ThisButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    gap: 0 4em;
    margin: auto;
`
export function SocialMedia(){
    const router = useRouter();
    const handleNavigate = (url: string) => {
        router.push(url);
    }
    return(
        <SocialContainer>
            <ThisButton onClick={() => handleNavigate("https://www.facebook.com")}><FacebookIcon/></ThisButton>
            <ThisButton onClick={() => handleNavigate("https://www.github.com")}><GithubIcon/></ThisButton>
            <ThisButton onClick={() => handleNavigate("https://www.instagram.com")}><InstagramIcon/></ThisButton>
        </SocialContainer>
    )
}

