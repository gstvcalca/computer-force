"use client"

import styled from "styled-components";
import { GalleryCategories } from "./gallery-category";
import { GalleryPriority } from "./gallery-priority";


const GalleryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export function GalleryContextContainer(){
    return(
        <GalleryContainer>
            <GalleryCategories/>
            <GalleryPriority/>
        </GalleryContainer>
    )
}