import styled from "styled-components";
import { ArrowIcon } from "./icons/Arrow-icon";
import { useState } from "react";

interface GalleryPriorityElementProps {
}

const PriorityButton = styled.button`
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
    return(
        <PriorityListContainer>
            <PriorityButton onClick={handleIsOpen}>
                Organizar por <ArrowIcon/>
                {isOpen && <PriorityList>
                    <li>Novidades</li>
                    <li>Menor preço</li>
                    <li>Maior preço</li>
                    <li>Mais vendidos</li>
                </PriorityList>
                }
            </PriorityButton>   
        </PriorityListContainer>
    )
}