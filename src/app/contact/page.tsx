"use client";

import styled from "styled-components";
import { GoBackBtn } from "../components/go-back-btn";
import { MailIcon } from "../components/icons/envelope-icon";
import { HomeIcon } from "../components/icons/home-icon";
import { PhoneIcon } from "../components/icons/phone-icon";
import { UserIcon } from "../components/icons/user-icon";
import { EnvelopeFullIcon } from "../components/icons/envelope-full-icon";


const IconTextContainer = styled.div`
    display: flex;
    width: fit-content;
    gap: 1em;
    
`
const PageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    svg {
        margin: 0;
        fill: black;
    }
`
const InfoContainer = styled.div`
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
`
const InputContainer = styled.div`
    align-items: center;
    border-radius: 1em;
    display: flex;
    gap: 1em;
    padding: .5em 2em;
    margin: .3em;

    background-color: white;
    border: 1px solid var(--border-color);
`

const CstInput = styled.input`
    background: none;
    border: none;
    line-height: 2em;
    width: 100%;
`
const CstTxtArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
`
const CstForm = styled.form`
    width: 30em;
    display: flex;
    flex-direction: column;
    margin: 1.5em ;
`

const SubmitBtn = styled.input`
    background: var(--text-dark-2);
    border: none;
    line-height: 2em;
    cursor: pointer;
    margin: 1em auto 0 auto;
    color: white;
    font-size: 1em;
    padding: .3em 5em;
    border-radius: 1em;
    align-self: center;
`

export default function ContactPage(){
    return(
        <div>
            <GoBackBtn/>
            <PageContainer>
                <h1>We would love to hear from you!</h1>
                <p>You can use the form below or check out our social medias</p>
                <InfoContainer>
                    <IconTextContainer>
                        <MailIcon/>
                        <a href="mailto:fake.mail@nowhere.com.au">fake.mail@nowhere.com.au</a>
                    </IconTextContainer>
                    <IconTextContainer>
                        <HomeIcon/>
                        00 Fake st, Sydney 2000, NSW
                    </IconTextContainer>
                    <IconTextContainer>
                        <PhoneIcon/>
                        +61 000 000 000
                    </IconTextContainer>
                </InfoContainer>
                <CstForm>
                    <InputContainer>
                        <UserIcon/>
                        <CstInput type="text" placeholder="Name"/>
                    </InputContainer>
                    <InputContainer>
                        <EnvelopeFullIcon/>
                        <CstInput type="mail" placeholder="E-mail"/>
                    </InputContainer>
                    <InputContainer>
                        <CstTxtArea rows="6" cols="3" placeholder="Message"></CstTxtArea>
                    </InputContainer>
                    <SubmitBtn type="submit" value="Submit message"/>
                </CstForm>
            </PageContainer>
        </div>
    )
}