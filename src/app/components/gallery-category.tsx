"use client";

import { useGalleryContext } from "@/hooks/useGalleryContext";
import { ProductCategory } from "@/types/product-category";
import styled from "styled-components";


const Category = styled.li<{selected: boolean}>`
    text-decoration: none;
    list-style: none;
    text-transform: uppercase;
    margin: 0;
    border-bottom: ${props => props.selected ? '2px solid var(--orange-low)' : 'none'};
    font-weight: ${props => props.selected ? '600' : 'inherit'};
    cursor: pointer;
`

const CategoriesListTag = styled.ul`
    padding: 0;
    display: flex;
    justify-content: flex-start;
    gap: 5vw;
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;

    
`

export function GalleryCategories(){
    const {category, setCategory} = useGalleryContext();
    const handleChange = (value: ProductCategory) => {
        setCategory(value);
    };
    return(
        <CategoriesListTag>
            <Category 
                selected={category === ProductCategory.all}
                onClick={() => handleChange(ProductCategory.all)}>All</Category>
            <Category 
                selected={category === ProductCategory["t-shirts"]}
                onClick={() => handleChange(ProductCategory["t-shirts"])}>T-Shirts</Category>
            <Category 
                selected={category === ProductCategory.mugs}
                onClick={() => handleChange(ProductCategory.mugs)}>Mugs</Category>
        </CategoriesListTag>
    )
}