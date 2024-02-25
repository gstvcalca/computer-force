"use client"

import styled from "styled-components";
import { GalleryCategories } from "./gallery-category";
import { GalleryPriority } from "./gallery-priority";

interface GalleryContextContainerProps {

}

const GalleryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export function GalleryContextContainer(props : GalleryContextContainerProps){
    return(
        <GalleryContainer>
            <GalleryCategories/>
            <GalleryPriority/>
        </GalleryContainer>
    )
}