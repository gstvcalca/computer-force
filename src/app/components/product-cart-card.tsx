"use client";

import { Product } from "@/types/product"
import styled from "styled-components";
import { DeleteIcon } from "./icons/delete-icon";
import { FormatPrice } from "../utils/format-price";
import { ChangeEvent } from "react";

interface ProductCartCard extends Product{
    key: string,
    handleDelete(id: string): void,
    changeQuantity(id: string, quantity: number): void
}

const ComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: var(--text-dark-2);
    overflow: hidden;
    height: 14em;
    margin-bottom: 1em;

    img {
        width: 16em;
        height: 14em;
        border-radius: 1em 0 0 1em;
        background-color: none;
        border: none;
    }

    button {
        background-color: inherit;
        border: none;
        cursor: pointer;
    }
`
const DivSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`
const TitleSpan = styled.span`
    font-weight: 300;
    font-size: 1.3em;
`
const ProductPriceSpan = styled.span`
    font-weight: 600;
    font-size: 1.2em;
`
const CustomSelect = styled.select`
    width: 3em;
    height: 2.5em;
    border-radius: .5em;
    border: 1px solid var(--border-color);
    background-color: var(--bg-secondary);
    text-align: center;
    color: var(--text-dark);
    margin-bottom: .4em;
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 1.3em 0 2em;
    background-color: white;
    flex-direction: column;
    width: 100%;
    border-radius: 0 .5em .5em 0;
    max-height: 100%;

    p {
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export function ProductCartCard(props: ProductCartCard){
    const handleQttChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.changeQuantity(props.id, Number(e.target.value));
    }
    return(
        <ComponentContainer>
            <img src={props.image_url} alt={props.description}/>
            <InfoContainer>
                <div>
                    <DivSpaceBetween>
                        <TitleSpan>{props.name}</TitleSpan>
                        <button aria-label="delete item" onClick={() => props.handleDelete(props.id)}><DeleteIcon/></button>
                    </DivSpaceBetween>
                    <p>{props.description}</p>
                </div>
                <DivSpaceBetween>
                    <CustomSelect onChange={handleQttChange} value={props.quantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </CustomSelect>
                    <ProductPriceSpan>{FormatPrice(props.price_in_cents)}</ProductPriceSpan>
                </DivSpaceBetween>
            </InfoContainer>
        </ComponentContainer>
    )
}