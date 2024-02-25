"use client" 

import styled from "styled-components"
import { Divider } from "./divider"


interface GalleryCardProps {
    name: string,
    price_in_cents: string,
    image_url: string,
    id: string,
    description: string
}

const GalleryCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 256px;
    background-color: rgba(255, 255, 255, 0.389);
    backdrop-filter: blur(10px);

    img {
        width: 256px;
        height: 300px;
        border-radius: 8px 8px 0 0;
    }

    div {
        padding: 0 10px;
    }

`
const ProductName = styled.p`
    font-family: inherit;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300px;
    color: var(--text-dark);
    margin: 8px 0;
`
const ProductPrice = styled.p`
    margin: 8px 0;
    font-weight: 600;
    font-style: bold;
`
export function GalleryCard(props: GalleryCardProps){
    return( 
        <GalleryCardContainer>
            <img src={props.image_url} alt={props.description}></img>
            <div>
                <ProductName>{props.name}</ProductName>
                <Divider/>
                <ProductPrice>{props.price_in_cents}</ProductPrice>
            </div>
        </GalleryCardContainer>
    )
}