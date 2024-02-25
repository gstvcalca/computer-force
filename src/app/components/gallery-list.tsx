import { useProducts } from "@/hooks/useProducts"
import { GalleryCard } from "./gallery-card"
import styled from "styled-components"
import { FormatPrice } from './../utils/format-price';

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    justify-content: space-between;
    gap: 32px;
    max-width: 100%;
    width: 100%;
`
export function GalleryList(){
    const {product} = useProducts()
    console.log(product)
    return(
        <GalleryContainer>
            {product?.map((item) => 
            <GalleryCard
                name={item.name}
                image_url={item.image_url}
                price_in_cents={FormatPrice(item.price_in_cents)}
                id={item.id}
                key={item.id}
                description={item.description}/>
            )}
        </GalleryContainer>
    )
}