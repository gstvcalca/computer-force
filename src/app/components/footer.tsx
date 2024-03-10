"use client";

import styled from "styled-components";
import { FacebookIcon } from "./icons/facebook-icon";
import { GithubIcon } from "./icons/github-icon";
import { InstagramIcon } from "./icons/instagram-icon";
import { useRouter } from "next/navigation";


const FooterTag = styled.section`
    text-align: center;
    background-color: var(--text-dark);
    color: white;
    padding: 0em;
    border-top: 1px solid black;
    justify-content: center;
    line-height: 2em;
    a {
        text-transform: uppercase;
        cursor: pointer;
        color: var(--bg-primary);
    }
    svg {
        margin: 0 2em;
    }
    button {
        cursor: pointer;
        border: none;
        background: none;
    }
`

export function Footer(){
    const router = useRouter()
    const handleNavigate = (url: string) => {
        router.push(url);
    }
    return(
        <FooterTag>
            <h3>ABOUT US</h3>
            <p>We are the best online store for computer parts!</p>
            <button onClick={() => handleNavigate("https://www.facebook.com")}><FacebookIcon/></button>
            <button onClick={() => handleNavigate("https://www.github.com")}><GithubIcon/></button>
            <button onClick={() => handleNavigate("https://www.instagram.com")}><InstagramIcon/></button>
            <p>
                <a href="/contact">Contact us</a><br/>
                © 2024 Copyright: all rights reserved
            </p>
        </FooterTag>
    )
}