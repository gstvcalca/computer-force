"use client" 

import styled from "styled-components"
import { Divider } from "./divider"
import { useRouter } from "next/navigation"
import { FormatPrice } from "../utils/format-price"


interface GalleryCardProps {
    name: string,
    price_in_cents: number,
    image_url: string,
    id: string,
    description: string,
    category: string,
}

const GalleryCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 256px;
    background-color: rgba(255, 255, 255, 0.389);
    backdrop-filter: blur(10px);
    border: .5px solid var(--border-color);
    border-radius: 8px;
    img {
        width: 16em;
        height: 17em;
        border-radius: 8px 8px 0 0;
        cursor: pointer;
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
    color: var(--text-dark-2);
    margin: 8px 0 3px 0;
`
const ProductPrice = styled.p`
    margin: 0 0 3px 0;
    font-weight: 600;
    font-style: bold;
`
export function GalleryCard(props: GalleryCardProps){
    const router = useRouter();
    const handleNavigate = (id: string) => {
        router.push('/product/' + id)
    };
    return( 
        <GalleryCardContainer>
            <img 
                src={props.image_url} 
                alt={props.description}
                onClick={() => handleNavigate(props.id)}></img>
            <div>
                <ProductName>{props.name}</ProductName>
                <Divider/>
                <ProductPrice>{FormatPrice(props.price_in_cents)}</ProductPrice>
            </div>
        </GalleryCardContainer>
    )
}