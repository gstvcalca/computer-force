"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { GoBackBtn } from "../components/go-back-btn";
import { modelProduct } from "@/types/product";
import styled from "styled-components";
import { FormatPrice } from './../utils/format-price';
import { ProductCartCard } from "../components/product-cart-card";
import { ProductSummary } from "../components/product-summary";
import { ChangeEvent } from "react";


const PageContainer = styled.div`
    display: flex;
    gap: 2.5em;
`

const CustomSpan = styled.span<{custom_weight: number}>`
    font-family: inherit;
    font-size: 16px;
    font-weight: ${props => props.custom_weight};
    line-height: 24px;
    text-align: left;
`

const ListContainer = styled.div`
    width: 100%;
    h2 {
        font-family: inherit;
        font-size: 1.5em;
        font-weight: 500;
        line-height: 36px;
        text-align: left;
        color: var(--text-dark-2);
        margin: 6px 0;
    }
`
export default function CartPage(){
    const {cartItems, updateLocalStorage} = useLocalStorage('cart-items', [modelProduct]);
    const handleDelete = (id: string) => {
        let newValue = cartItems.filter(item => item.id !== id);
        updateLocalStorage(newValue);
    }

    const changeQuantity = (id: string, quantity: number) => {
        let newValue = cartItems.map(item => {
            if(item.id !== id) return item;
            return {...item, quantity: quantity}
        });
        console.log(newValue);
        updateLocalStorage(newValue);
    }
    let products_subtotal = cartItems.reduce((sum, item) => sum += (item.price_in_cents * (item.quantity ?? 0)), 0);
    
    return(
        <div>
            <GoBackBtn/>
            <PageContainer>
                <ListContainer>
                    <h2>SEU CARRINHO</h2>
                    <CustomSpan custom_weight="400">Total </CustomSpan>
                    <CustomSpan custom_weight="300">({cartItems.length} produtos)</CustomSpan>
                    <CustomSpan custom_weight="500"> {FormatPrice(products_subtotal)}</CustomSpan>
                    {cartItems.map(item => <ProductCartCard key={item.id}
                    name={item.name}
                    image_url={item.image_url}
                    description={item.description}
                    category={item.category}
                    id={item.id}
                    price_in_cents={item.price_in_cents}
                    handleDelete={handleDelete}
                    changeQuantity={changeQuantity}
                    quantity={Number(item.quantity)}/>)}
                </ListContainer>
                <ProductSummary products_subtotal={products_subtotal}/>
            </PageContainer>
        </div>
    )
}
