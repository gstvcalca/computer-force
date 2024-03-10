"use client";

import styled from "styled-components";

import { useRouter } from "next/navigation";
import { SocialMedia } from "./social-media";


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
`

export function Footer(){
    const router = useRouter()
    
    return(
        <FooterTag>
            <h3>ABOUT US</h3>
            <p>We are the best online store for computer parts!</p>
            <SocialMedia/>
            <p>
                <a href="/contact">Contact us</a><br/>
                © 2024 Copyright: all rights reserved
            </p>
        </FooterTag>
    )
}