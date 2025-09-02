"use client";

import styled from "styled-components";
import { ArrowIcon } from "./icons/Arrow-icon";
import { useState } from "react";
import { useGalleryContext } from "@/hooks/useGalleryContext";
import { SortPriority } from "@/types/sort-priority";


const PriorityButton = styled.button`
    z-index: 900;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: end;
    font-family: inherit;
    font-weight: 400;
    gap: 8px;
    cursor: pointer;
    position: relative;
    padding: 0;
    color: var(--text-dark);
`
const PriorityList = styled.ul`
    background: white;
    font-family: inherit;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: left;
    top: 110%;
    border-radius: 5px;
    border: 1px solid var(--border-color);

    li {
        color: var(--text-dark);
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        margin: .3em 1.5em;
    }
`
const PriorityListContainer = styled.div`
    position: relative;
    align-items: center;
    justify-content: end;
    
`

export function GalleryPriority(){
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const {setPriority} = useGalleryContext();

    const handlePriority = (value: SortPriority) => {
        setPriority(value)
    };
    return(
        <PriorityListContainer>
            <PriorityButton onClick={handleIsOpen}>
                Sort by <ArrowIcon/>
                {isOpen && <PriorityList>
                    <li onClick={() => handlePriority(SortPriority.NEWS)}>News</li>
                    <li onClick={() => handlePriority(SortPriority.SMALLEST)}>Price: smallest price</li>
                    <li onClick={() => handlePriority(SortPriority.BIGGEST)}>Price: biggest</li>
                    <li onClick={() => handlePriority(SortPriority.POPULARITY)}>Best sellers</li>
                </PriorityList>
                }
            </PriorityButton>   
        </PriorityListContainer>
    )
}