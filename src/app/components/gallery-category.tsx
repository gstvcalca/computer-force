"use client"

import { useGalleryContext } from "@/hooks/useGalleryContext";
import { ProductCategory } from "@/types/product-category";
import styled from "styled-components";


const Category = styled.li<{selected: boolean}>`
    text-decoration: none;
    list-style: none;
    text-transform: uppercase;
    margin: 1em 0;
    border-bottom: ${props => props.selected ? '2px solid var(--orange-low)' : 'none'};
    font-weight: ${props => props.selected ? '600' : 'inherit'};
    cursor: pointer;
`

const CategoriesListTag = styled.ul`
    margin: 0;
    display: flex;
    justify-content: flex-start;
    gap: 2em;
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    padding: 0;
    
`

export function GalleryCategories(){
    const {category, setCategory} = useGalleryContext();
    const handleChange = (value: ProductCategory) => {
        console.log(category)
        setCategory(value)
    };
    return(
        <CategoriesListTag>
            <Category 
                selected={category === ProductCategory.all}
                onClick={() => handleChange(ProductCategory.all)}>Todos os produtos</Category>
            <Category 
                selected={category === ProductCategory["t-shirts"]}
                onClick={() => handleChange(ProductCategory["t-shirts"])}>Camisetas</Category>
            <Category 
                selected={category === ProductCategory.mugs}
                onClick={() => handleChange(ProductCategory.mugs)}>Canecas</Category>
        </CategoriesListTag>
    )
}