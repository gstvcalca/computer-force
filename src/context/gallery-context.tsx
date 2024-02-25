"use client"

import { ProductCategory } from "@/types/product-category";
import { SortPriority } from "@/types/sort-priority";
import { ReactNode, createContext, useState } from "react";

export  const GalleryContext = createContext({
    'search': '',
    setSearch: (value: string) => {},
    'page': 0,
    setPage: (value: number) => {},
    'category': ProductCategory.ALL,
    setCategory: (value: ProductCategory) => {},
    'priority': SortPriority.POPULARITY,
    setPriority: (value:  SortPriority) => {}    
})

interface GalleryContextProviderProps {
    children: ReactNode
}

export function GalleryContextProvider({children}: GalleryContextProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [category, setCategory] = useState(ProductCategory.ALL)
    const [priority, setPriority] = useState(SortPriority.POPULARITY)

    return (
        <GalleryContext.Provider value={{search, setSearch, page, setPage, category, setCategory, priority, setPriority}}>
            {children}
        </GalleryContext.Provider>
    )
}