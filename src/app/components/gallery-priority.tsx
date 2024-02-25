import styled from "styled-components";
import { ArrowIcon } from "./icons/Arrow-icon";
import { useState } from "react";
import { useGalleryContext } from "@/hooks/useGalleryContext";
import { SortPriority } from "@/types/sort-priority";

interface GalleryPriorityElementProps {
}

const PriorityButton = styled.button`
    z-index: 999;
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
    margin: auto;
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


    li {
        color: var(--text-dark);
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        margin: .3em 1.5em;
        width: 10em;
    }
`
const PriorityListContainer = styled.div`
    position: relative;
    width: 10em;
    align-items: center;
    justify-content: end;
`

export function GalleryPriority(props : GalleryPriorityElementProps){
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const {setPriority} = useGalleryContext()

    const handlePriority = (value: SortPriority) => {
        setPriority(value)
    }
    return(
        <PriorityListContainer>
            <PriorityButton onClick={handleIsOpen}>
                Organizar por <ArrowIcon/>
                {isOpen && <PriorityList>
                    <li onClick={() => handlePriority(SortPriority.NEWS)}>Novidades</li>
                    <li onClick={() => handlePriority(SortPriority.SMALLEST)}>Menor preço</li>
                    <li onClick={() => handlePriority(SortPriority.BIGGEST)}>Maior preço</li>
                    <li onClick={() => handlePriority(SortPriority.POPULARITY)}>Mais vendidos</li>
                </PriorityList>
                }
            </PriorityButton>   
        </PriorityListContainer>
    )
}