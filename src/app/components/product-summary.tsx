"use client";

import styled from "styled-components";
import { Divider } from "./divider";
import { FormatPrice } from "../utils/format-price";

const DivSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: .5em 0;
`
const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    width: 100%;
    border-radius: .5em;
    height: 100%;
    margin: 0;
    padding: 1em;
    box-sizing: border-box;
    margin-bottom: 1em;

    h3 {
        text-align: left;
        font-family: inherit;
        font-size: 1.5em;
        font-weight: 600;
        line-height: 30px;
        color: var(--text-dark-2);
        margin: .6em 0;
    }

    @media(min-width: ${props => props.theme.DesktopBreakpoint}){
        width: 35%;
        padding: 1em 1.5em;
        margin: 1em 0;
    }
`
const BoldSpan = styled.span`
    font-family: inherit;
    font-size: 1em;
    font-weight: 600;

`
const PurchaseBtn = styled.button`
    text-transform: uppercase;
    background-color: var(--success-color);
    color: white;
    width: 90%;
    text-align: center;
    cursor: pointer;
    padding: .4em;
    border-radius: .2em;
    align-self: center;
    margin-top: 3em;
    margin-bottom: 10%;
    border: none;
    font-size: 1em;
    font-family: inherit;
    align-items: center;
    font-weight: 500;

    @media(min-width: ${props => props.theme.DesktopBreakpoint}){
        margin-bottom: 35%;
    }
`
const CustomAnchor = styled.a`
    color: var(--text-dark);
    font-family: inherit;
    font-size: .8em;
    font-weight: 500;
    line-height: 21px;
    text-transform: uppercase;
    text-decoration: underline;
    cursor: pointer;
    `

interface ProductSummaryProps{
    products_subtotal: number
}

export function ProductSummary(props: ProductSummaryProps){
    let delivery_fee = 4000;
    return(
        <SummaryContainer>
            <h3>CHECKOUT SUMMARY</h3>
            <DivSpaceBetween>
                <span>Subtotal</span>
                <span>{FormatPrice(props.products_subtotal)}</span>
            </DivSpaceBetween>
            <DivSpaceBetween>
                <span>Delivery</span>
                <span>{FormatPrice(delivery_fee)}</span>
            </DivSpaceBetween>
            <Divider/>
            <DivSpaceBetween>
                <BoldSpan>Total</BoldSpan>
                <BoldSpan>{FormatPrice(delivery_fee + props.products_subtotal)}</BoldSpan>
            </DivSpaceBetween>
            <PurchaseBtn>purchase</PurchaseBtn>
            <CustomAnchor href='/'>Help</CustomAnchor>
            <CustomAnchor href='/'>Refunds</CustomAnchor>
            <CustomAnchor href="/">Delivery and freight</CustomAnchor>
            <CustomAnchor href="/">exchanges and returns</CustomAnchor>
        </SummaryContainer>
    )
}