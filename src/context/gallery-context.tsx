"use client";

import { ProductCategory } from "@/types/product-category";
import { SortPriority } from "@/types/sort-priority";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface GalleryContextType {
  search: string;
  setSearch: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  category: ProductCategory;
  setCategory: (value: ProductCategory) => void;
  priority: SortPriority;
  setPriority: (value: SortPriority) => void;
  cartItems: Product[];
  updateLocalStorage: (value: Product[]) => void;
}

export const GalleryContext = createContext<GalleryContextType>({
  search: "",
  setSearch: (value: string) => {},
  page: 0,
  setPage: (value: number) => {},
  category: ProductCategory.all,
  setCategory: (value: ProductCategory) => {},
  priority: SortPriority.POPULARITY,
  setPriority: (value: SortPriority) => {},
  cartItems: [],
  updateLocalStorage: (value: Product[]) => {},
});

interface GalleryContextProviderProps {
  children: ReactNode;
}

export function GalleryContextProvider({
  children,
}: GalleryContextProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState(ProductCategory.all);
  const [priority, setPriority] = useState(SortPriority.POPULARITY);
  const {cartItems, updateLocalStorage} = useLocalStorage('cart-items', []);

  return (
    <GalleryContext.Provider
      value={{
        search,
        setSearch,
        page,
        setPage,
        category,
        setCategory,
        priority,
        setPriority,
        cartItems,
        updateLocalStorage,
      }}>
      {children}
    </GalleryContext.Provider>
  );
}
