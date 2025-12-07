"use client";

import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { CartIcon } from "./icons/cart-icon";
import { useGalleryContext } from "@/hooks/useGalleryContext";
import { useRouter } from "next/navigation";
import { sairaOne } from "../layout";
import { useState } from "react";

const TagHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  background-color: white;
  z-index: 999;
  box-sizing: border-box;
  padding: max(5px, .3%) 5%;
  overflow: hidden;
  gap: 1em;
  flex-direction: row;
  border-bottom: 1px solid var(--border-color);
  h1 {
    font-size: max(5vw, 25px);
    color: #5d5d6d;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const RightContainer = styled.div`
  display: flex;
  gap: 1.5em;
  align-items: center;
  font-family: "saira", sans-serif;
`;
const InputContainer = styled.div`
  display: none;
  position: relative; 

  svg {
    position: absolute;
    left: 1em;
    top: 50%;
    transform: translateY(-50%);
  }

  *:focus-within  {
    svg{
        display: none;

    }
  }

  @media (min-width: ${props => props.theme.TabletBreakpoint}){
    display: flex;
    svg {
      position: absolute;
      right: 1em;
      left: auto;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const CustomInput = styled.input`
  width: min(25vw, 240px);
  height: 3em;
  border-radius: 0.6em;
  border: none;
  background-color: transparent;
  padding: 0 1em;
  font-size: 0.9em;
  font-family: inherit;
  display: flex;
  background-color: #f3f5f6;
`;

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
    background-color: #de3838;
    color: white;
    border-radius: 100%;
    font-size: 0.8em;
    text-align: center;
    margin: 0 1px;
    font-family: inherit;

    position: absolute;
    right: -0.5em;
    top: 50%;
  }
`;

export function Header() {
  const { search, setSearch, cartItems } = useGalleryContext();
  const router = useRouter();
  const [currentPlaceholder, setPlaceholder] = useState('');


  return (
    <TagHeader>
      <h1 className={sairaOne.className}>
        <a href="/">caputteeno</a>
      </h1>
      <RightContainer>
        <InputContainer>
          <CustomInput
            onChange={(e: { target: { value: string } }) =>
              setSearch(e.target.value)
            }
            placeholder={currentPlaceholder}
            value={search}
            id="search_input"></CustomInput>
          <SearchIcon />
        </InputContainer>
        <CartIconContainer
          onClick={() => {
            router.push("/cart");
          }}>
          <CartIcon />
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </CartIconContainer>
      </RightContainer>
    </TagHeader>
  );
}
