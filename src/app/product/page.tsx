"use client"

import styled from "styled-components";
import { GoBackBtn } from "../components/go-back-btn";
import { CartIconWhite } from "../components/icons/cart-icon-white";

interface ProductPageProps {

}
const MainContainer = styled.div`
    display: flex;
    gap: 2em;
    img {
        width: 50%;
    }
`
const RightSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`
const CategoryP = styled.p`
    font-family: inherit;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    letter-spacing: 0em;
    text-align: left;
    text-transform: capitalize;
    color: var(--text-dark);
`
const TitleH1 = styled.h1`
    font-family: inherit;
    font-size: 2em;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-2);
    font-style: bold;
`
const PrecoP = styled.p`
    font-family: inherit;
    font-size: 1.25em;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--shapes-dark);
`
const FreteP = styled.p`
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-2);
`
const DescrTtlP = styled.p`
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark);
    text-transform: uppercase;
`
const DescTxtP = styled.p`
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-2);
`
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
`

export default function ProductPage(props : ProductPageProps){
    return(
        <main>
            <section>
                <GoBackBtn></GoBackBtn>
                <MainContainer>
                    <img src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg"></img>
                    <RightSideContainer>
                        <div>
                            <CategoryP>caneca</CategoryP>
                            <TitleH1>Caneca de cerâmica rústica</TitleH1>
                            <PrecoP>R$ 40,00 </PrecoP>
                            <FreteP>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</FreteP>
                            <DescrTtlP>descrição</DescrTtlP>
                            <DescTxtP>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</DescTxtP>
                        </div>
                        <AddToCartBtn>
                            <CartIconWhite/>
                            adicionar ao carrinho
                        </AddToCartBtn>
                    </RightSideContainer>
                </MainContainer>
            </section>
        </main>
    )
}