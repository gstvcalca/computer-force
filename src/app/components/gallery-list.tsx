"use client"

import { useProducts } from "@/hooks/useProducts"
import { GalleryCard } from "./gallery-card"
import styled from "styled-components"


const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 16em);
    justify-content: space-between;
    gap: 2em;
    max-width: 100%;
    width: 100%;
`
export function GalleryList(){
    const {product} = useProducts();
    return(
        <GalleryContainer>
            {product?.map((item) => 
            <GalleryCard
                name={item.name}
                image_url={item.image_url}
                price_in_cents={item.price_in_cents}
                id={item.id}
                key={item.id}
                description={item.description}
                category={item.category}/>
            )}
        </GalleryContainer>
    )
}