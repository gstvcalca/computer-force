"use client"

import styled from "styled-components";
import { GoBackBtn } from "../components/go-back-btn";
import { CartIconWhite } from "../components/icons/cart-icon-white";
import { FormatPrice } from "../utils/format-price";
import { useProduct } from "@/hooks/useProduct";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product, modelProduct } from "@/types/product";


const MainContainer = styled.div`
    display: flex;
    gap: 2em;
    img {
        width: 50%;
        border: 1px solid black;
        max-height: 33em;
    }
    
`;
const RightSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`; 
const CategoryP = styled.p`
    font-family: inherit;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: left;
    text-transform: capitalize;
    color: var(--text-dark);
`;
const TitleH1 = styled.h1`
    font-family: inherit;
    font-size: 2em;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-2);
    font-style: bold;
`;
const PrecoP = styled.p`
    font-family: inherit;
    font-size: 1.25em;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--shapes-dark);
`;
const FreteP = styled.p`
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-2);
`;
const DescrTtlP = styled.p`
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark);
    text-transform: uppercase;
`;
const DescTxtP = styled.p`
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-2);
`;
const AddToCartBtn = styled.button`
    align-items: center;
    background: var(--primary-blue);
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    display: flex;
    gap: 12px;
    height: 3em;
    justify-content: center;
    max-width: 35em;
    text-transform: uppercase;
`;


export default function ProductPage({searchParams}: {searchParams: {id: string}}){
    const product: Product = useProduct(searchParams.id) ?? modelProduct;
    const {cartItems, updateLocalStorage} = useLocalStorage('cart-items', [modelProduct]);

    const handleAddToCart = () => {
        if(cartItems.length && cartItems[0].id !== ""){
            let productIndex = cartItems.findIndex((item => item.id === searchParams.id));
            if(productIndex === -1){
                cartItems.push({...product, quantity: 1, id: searchParams.id});
                updateLocalStorage(cartItems);
            }
            else{
                cartItems[productIndex].quantity = 1 + (cartItems[productIndex].quantity ?? 0);
                updateLocalStorage(cartItems);
            }
        }
        else{
            updateLocalStorage([{...product, quantity: 1, id: searchParams.id}]);
        }
    }
    return (
        <main>
            <section>
                <GoBackBtn></GoBackBtn>
                <MainContainer>
                    <img src={product?.image_url} alt={product?.description}/>
                    <RightSideContainer>
                        <div>
                            <CategoryP>{product?.category}</CategoryP>
                            <TitleH1>{product?.name}</TitleH1>
                            <PrecoP>{FormatPrice(product?.price_in_cents ?? 0)}</PrecoP>
                            <FreteP>*Delivery anywhere in Sydney for $40.00. Free delivery for purchases above $900.00.</FreteP>
                            <DescrTtlP>Description</DescrTtlP>
                            <DescTxtP>{product?.description}</DescTxtP>
                        </div>
                        <AddToCartBtn onClick={handleAddToCart}>
                            <CartIconWhite/>
                            Add to cart
                        </AddToCartBtn>
                    </RightSideContainer>
                </MainContainer>
            </section>
        </main>
    )
}
