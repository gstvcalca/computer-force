"use client";

import { Saira_Stencil_One } from 'next/font/google';
import { styled } from 'styled-components';
import { SearchIcon } from './icons/search-icon';
import { CartIcon } from './icons/cart-icon';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useGalleryContext } from '@/hooks/useGalleryContext';
import { useRouter } from 'next/navigation';

const saira = Saira_Stencil_One({ 
    subsets: ["latin"],
    weight: '400', 
  });

const TagHeader = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    width: 100%;
    max-width: 100vw;
    background-color: white;
    z-index: 999;
    box-sizing: border-box;
    padding: 0 5em 0 7em;
    height: 5em;
    h1 {
        font-size: 3rem;
        color: #5D5D6D;
        margin: 0;
    }
`
const RightContainer = styled.div`
    display: flex;
    gap: 1.5em;
    align-items: center;
    font-family: 'saira', sans-serif;
`
const InputContainer = styled.div`
    display: flex;
    position: relative;

    svg {
        position: absolute;
        right: 1em;
        top: 50%;
        transform: translateY(-50%);
    }
`

const Input = styled.input`
    width: 22em;
    height: 3em;
    border-radius: .6em;
    border: none;
    background-color: #F3F5F6;
    padding: 0 1em;
    font-size: 0.9em;
    font-family: inherit;
`

const CartIconContainer = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.4em;
        height: 1.4em;
        background-color: #DE3838;
        color: white;
        border-radius: 100%;
        font-size: 0.8em;
        text-align: center;
        margin: 0 1px;
        font-family: inherit;

        position: absolute;
        right: -.5em;
        top: 50%;
    }
`

export function Header(){
    const {cartItems} = useLocalStorage('cart-items', []);
    const {search, setSearch} = useGalleryContext();
    const router = useRouter();
    return(
        <TagHeader>
            <h1 className={saira.className}>Computer Force</h1>
            <RightContainer>
                <InputContainer>
                    <Input 
                    onChange={(e: {target: {value: string}}) => setSearch(e.target.value)} 
                    placeholder="Procurando por algo específico?"
                    value={search}></Input>
                    <SearchIcon/>
                </InputContainer>
                <CartIconContainer onClick={() => {router.push('/cart')}}>
                    <CartIcon/>
                    {cartItems.length > 0 && <span>{cartItems.length}</span>}
                </CartIconContainer>
            </RightContainer>
        </TagHeader>
    )
}